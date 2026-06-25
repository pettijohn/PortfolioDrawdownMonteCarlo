import { SimulationConfig } from "./monteCarlo.ts";

type DotNetShardRequest = {
    type: "runShard";
    requestId: number;
    shardIndex: number;
    simulationRounds: number;
    config: SimulationConfig;
};

type DotNetShardState = "loading .NET runtime" | "resolving .NET exports" | "running C# simulation" | "serializing C# shard";

type DotNetExports = {
    MonteCarloDrawdown: {
        DotNetMonteCarloExports: {
            RunSimulationShardJson: (configJson: string, simulationRounds: number) => string;
        };
    };
};

type DotNetRuntime = {
    getAssemblyExports: (assemblyName: string) => Promise<DotNetExports>;
    getConfig: () => { mainAssemblyName: string };
};

type DotNetHost = {
    dotnet: {
        create: () => Promise<DotNetRuntime>;
    };
};

let exportsPromise: Promise<DotNetExports> | undefined;

function formatError(error: unknown): string {
    if (error instanceof Error) {
        return `${error.name}: ${error.message}${error.stack ? `\n${error.stack}` : ""}`;
    }

    return String(error);
}

function postShardState(message: DotNetShardRequest, state: DotNetShardState) {
    self.postMessage({
        type: "shardState",
        requestId: message.requestId,
        shardIndex: message.shardIndex,
        state,
    });
}

// Keep startup bounded so the parent worker can report a useful error instead
// of waiting forever if the browser cannot initialize the .NET runtime.
function withTimeout<T>(operation: Promise<T>, timeoutMs: number, label: string): Promise<T> {
    let timeoutId = 0;
    const timeout = new Promise<never>((_resolve, reject) => {
        timeoutId = setTimeout(() => {
            reject(new Error(`${label} did not finish within ${timeoutMs}ms`));
        }, timeoutMs);
    });

    return Promise.race([operation, timeout]).finally(() => clearTimeout(timeoutId));
}

// A .NET WASM runtime is much heavier than the Rust wasm-bindgen module, so each
// shard worker starts one runtime and reuses it for every request it receives.
function startDotNetRuntime(): Promise<DotNetExports> {
    if (!exportsPromise) {
        exportsPromise = (async () => {
            const dotnetModuleUrl = "./dotnet_wasm/_framework/dotnet.js";
            const host = await withTimeout(
                import(dotnetModuleUrl) as Promise<DotNetHost>,
                30000,
                "importing dotnet.js",
            );
            const runtime = await withTimeout(host.dotnet.create(), 90000, "dotnet.create()");
            const config = runtime.getConfig();
            const exports = await withTimeout(
                runtime.getAssemblyExports(config.mainAssemblyName),
                30000,
                "getAssemblyExports()",
            );
            return exports;
        })();
    }

    return exportsPromise;
}

// Begin loading as soon as the worker module is evaluated. This matches the
// long-lived worker shape .NET browser WASM expects and hides startup latency
// before the simulation request reaches the worker.
startDotNetRuntime().catch((error) => console.error("C#/.NET runtime startup failed", error));

async function handleShardRequest(event: MessageEvent<DotNetShardRequest>) {
    const message = event.data;

    if (message.type !== "runShard") {
        return;
    }

    try {
        postShardState(message, "loading .NET runtime");
        const exports = await startDotNetRuntime();
        postShardState(message, "running C# simulation");
        // JSExport currently crosses this boundary most predictably with
        // strings, so C# returns JSON and this worker converts it back to the
        // same shard object shape that the Rust path posts.
        const shardJson = exports.MonteCarloDrawdown.DotNetMonteCarloExports.RunSimulationShardJson(
            JSON.stringify(message.config),
            message.simulationRounds,
        );
        postShardState(message, "serializing C# shard");

        self.postMessage({
            type: "shardResult",
            requestId: message.requestId,
            shardIndex: message.shardIndex,
            shard: JSON.parse(shardJson),
        });
    } catch (error) {
        self.postMessage({
            type: "shardError",
            requestId: message.requestId,
            shardIndex: message.shardIndex,
            message: formatError(error),
        });
    }
}

self.addEventListener("message", handleShardRequest);
