import { MonteCarlo, SimulationConfig } from "./monteCarlo.ts";

type TypeScriptShardRequest = {
    type: "runShard";
    requestId: number;
    shardIndex: number;
    simulationRounds: number;
    config: SimulationConfig;
};

self.onmessage = async (event: MessageEvent<TypeScriptShardRequest>) => {
    const message = event.data;

    if (message.type !== "runShard") {
        return;
    }

    try {
        const simulation = new MonteCarlo();
        const shard = await simulation.computeSimulationShard(message.config, message.simulationRounds);

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

