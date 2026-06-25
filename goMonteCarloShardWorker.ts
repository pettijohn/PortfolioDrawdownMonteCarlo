import { SimulationConfig } from "./monteCarlo.ts";

type GoShardRequest = {
    type: "runShard";
    requestId: number;
    shardIndex: number;
    simulationRounds: number;
    config: SimulationConfig;
};

type HistoricalMarketData = {
    year: number;
    stocks: number;
    bonds: number;
    cash: number;
    cpi: number;
};

type GoConstructor = new () => {
    importObject: WebAssembly.Imports;
    run: (instance: WebAssembly.Instance) => Promise<void>;
};

type GoGlobal = typeof globalThis & {
    Go?: GoConstructor;
    runSimulationShard?: (
        config: SimulationConfig,
        simulationRounds: number,
        historicalData: HistoricalMarketData[],
    ) => unknown;
};

let goRuntimePromise: Promise<void> | undefined;
let historicalDataPromise: Promise<HistoricalMarketData[]> | undefined;

async function loadGoRuntime(): Promise<void> {
    if (!goRuntimePromise) {
        goRuntimePromise = (async () => {
            const wasmExecUrl = "./go_wasm/wasm_exec.js";
            await import(wasmExecUrl);
            const goGlobal = globalThis as GoGlobal;
            if (!goGlobal.Go) {
                throw new Error("Go WASM runtime did not initialize");
            }

            const go = new goGlobal.Go();
            const wasmUrl = new URL("./go_wasm/montecarlo.wasm", import.meta.url);
            let instance: WebAssembly.Instance;

            try {
                const result = await WebAssembly.instantiateStreaming(fetch(wasmUrl), go.importObject);
                instance = result.instance;
            } catch (_error) {
                const bytes = await (await fetch(wasmUrl)).arrayBuffer();
                const result = await WebAssembly.instantiate(bytes, go.importObject);
                instance = result.instance;
            }

            go.run(instance);
            if (!goGlobal.runSimulationShard) {
                throw new Error("Go WASM module did not register runSimulationShard");
            }
        })();
    }

    return goRuntimePromise;
}

function loadHistoricalData(): Promise<HistoricalMarketData[]> {
    if (!historicalDataPromise) {
        const dataUrl = new URL("../data/historicalMarketData.json", import.meta.url);
        historicalDataPromise = fetch(dataUrl).then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load historical market data: ${response.status}`);
            }

            return response.json() as Promise<HistoricalMarketData[]>;
        });
    }

    return historicalDataPromise;
}

self.onmessage = async (event: MessageEvent<GoShardRequest>) => {
    const message = event.data;

    if (message.type !== "runShard") {
        return;
    }

    try {
        await loadGoRuntime();
        const historicalData = await loadHistoricalData();
        const shard = (globalThis as GoGlobal).runSimulationShard?.(
            message.config,
            message.simulationRounds,
            historicalData,
        );

        self.postMessage({
            type: "shardResult",
            requestId: message.requestId,
            shardIndex: message.shardIndex,
            shard,
        });
    } catch (error) {
        self.postMessage({
            type: "shardError",
            requestId: message.requestId,
            shardIndex: message.shardIndex,
            message: error instanceof Error ? error.message : String(error),
        });
    }
};
