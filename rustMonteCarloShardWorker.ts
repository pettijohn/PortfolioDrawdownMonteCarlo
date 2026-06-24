import { SimulationConfig } from "./monteCarlo.ts";

type RustShardRequest = {
    type: "runShard";
    requestId: number;
    shardIndex: number;
    simulationRounds: number;
    config: SimulationConfig;
};

type WasmModule = {
    default: () => Promise<void>;
    run_simulation_shard: (config: SimulationConfig, simulationRounds: number) => unknown;
};

let wasmModulePromise: Promise<WasmModule> | undefined;

function loadWasmModule(): Promise<WasmModule> {
    if (!wasmModulePromise) {
        const wasmModuleUrl = "./rust_wasm/montecarlo.js";
        wasmModulePromise = import(wasmModuleUrl) as Promise<WasmModule>;
    }

    return wasmModulePromise;
}

self.onmessage = async (event: MessageEvent<RustShardRequest>) => {
    const message = event.data;

    if (message.type !== "runShard") {
        return;
    }

    try {
        const wasmModule = await loadWasmModule();
        await wasmModule.default();
        const shard = wasmModule.run_simulation_shard(message.config, message.simulationRounds);

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
