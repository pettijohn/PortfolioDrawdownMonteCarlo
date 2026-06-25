import { SimulationConfig, SimulationShard, SimulationState, StatResults, StatSingleYear } from "./monteCarlo.ts";
import {
    SimulationWorkerMessage,
    SimulationWorkerRequest,
} from "./monteCarloWorkerMessages.ts";

type TypeScriptShardMessage = {
    type: "shardResult" | "shardError";
    requestId: number;
    shardIndex: number;
    shard?: SimulationShard;
    message?: string;
};

type AnalysisMessage = {
    type: "analysisResult" | "analysisError";
    requestId: number;
    year: number;
    result?: StatSingleYear;
    message?: string;
};

function postMessageToApp(message: SimulationWorkerMessage) {
    self.postMessage(message);
}

self.onmessage = async (event: MessageEvent<SimulationWorkerRequest>) => {
    const message = event.data;

    if (message.type !== "run") {
        return;
    }

    try {
        postMessageToApp({
            type: "state",
            requestId: message.requestId,
            state: SimulationState.Initializing,
        });

        const results = await runTypeScriptSimulation(message.requestId, message.config);
        postMessageToApp({
            type: "result",
            requestId: message.requestId,
            results,
        });
    } catch (error) {
        postMessageToApp({
            type: "error",
            requestId: message.requestId,
            message: error instanceof Error ? error.message : String(error),
        });
    }
};

async function runTypeScriptSimulation(
    requestId: number,
    config: SimulationConfig,
): Promise<StatResults> {
    const workerCount = determineWorkerCount(config.simulationRounds);
    const shardRounds = distributeRounds(config.simulationRounds, workerCount);
    const shards: SimulationShard[] = [];
    let completedShards = 0;

    postMessageToApp({
        type: "state",
        requestId,
        state: `Running TypeScript with ${workerCount} worker${workerCount === 1 ? "" : "s"}`,
    });

    await Promise.all(shardRounds.map((simulationRounds, shardIndex) => {
        return new Promise<void>((resolve, reject) => {
            const worker = new Worker("./monteCarloShardWorker.js", { type: "module" });

            worker.onmessage = (event: MessageEvent<TypeScriptShardMessage>) => {
                const message = event.data;
                if (message.requestId !== requestId) {
                    return;
                }

                worker.terminate();

                if (message.type === "shardError") {
                    reject(new Error(message.message ?? "TypeScript shard failed"));
                    return;
                }

                if (!message.shard) {
                    reject(new Error("TypeScript shard returned no data"));
                    return;
                }

                shards[message.shardIndex] = message.shard;
                completedShards++;
                postMessageToApp({
                    type: "state",
                    requestId,
                    state: `Running TypeScript shard ${completedShards} of ${workerCount}`,
                });
                resolve();
            };

            worker.onerror = (error) => {
                worker.terminate();
                reject(new Error(error.message));
            };

            worker.postMessage({
                type: "runShard",
                requestId,
                shardIndex,
                simulationRounds,
                config,
            });
        });
    }));

    return analyzeShards(requestId, config, shards);
}

function determineWorkerCount(simulationRounds: number): number {
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    return Math.max(1, Math.min(simulationRounds, hardwareConcurrency));
}

function distributeRounds(simulationRounds: number, workerCount: number): number[] {
    const baseRounds = Math.floor(simulationRounds / workerCount);
    const remainder = simulationRounds % workerCount;

    return Array.from({ length: workerCount }, (_unused, index) => {
        return baseRounds + (index < remainder ? 1 : 0);
    });
}

async function analyzeShards(
    requestId: number,
    config: SimulationConfig,
    shards: SimulationShard[],
): Promise<StatResults> {
    const results: StatResults = {};
    const analysisWorkerCount = determineWorkerCount(config.simulationYears);
    let completedYears = 0;

    postMessageToApp({
        type: "state",
        requestId,
        state: `Analyzing TypeScript with ${analysisWorkerCount} workers`,
    });

    await runAnalysisPool(
        requestId,
        config,
        shards,
        analysisWorkerCount,
        (year, result) => {
            results[year] = result;
            completedYears++;
            postMessageToApp({
                type: "state",
                requestId,
                state: `Analyzing TypeScript year ${completedYears} of ${config.simulationYears}`,
            });
        },
    );

    return results;
}

function runAnalysisPool(
    requestId: number,
    config: SimulationConfig,
    shards: SimulationShard[],
    workerCount: number,
    onResult: (year: number, result: StatSingleYear) => void,
): Promise<void> {
    return new Promise((resolve, reject) => {
        const years = Array.from({ length: config.simulationYears }, (_unused, year) => year);
        const workers: Worker[] = [];
        let activeWorkers = 0;
        let failed = false;

        function terminateWorkers() {
            for (const worker of workers) {
                worker.terminate();
            }
        }

        function dispatchNext(worker: Worker) {
            if (failed) {
                return;
            }

            const year = years.shift();
            if (year === undefined) {
                activeWorkers--;
                worker.terminate();
                if (activeWorkers === 0) {
                    resolve();
                }
                return;
            }

            worker.postMessage({
                type: "analyzeYear",
                requestId,
                year,
                config,
                nominal: shards.flatMap(shard => shard.nominalByYear[year]),
                adjusted: shards.flatMap(shard => shard.adjustedByYear[year]),
                shortfalls: shards.flatMap(shard => shard.shortfallByYear[year]),
                exhausted: shards.flatMap(shard => shard.exhaustedByYear[year]),
            });
        }

        for (let workerIndex = 0; workerIndex < workerCount; workerIndex++) {
            const worker = new Worker("./monteCarloAnalysisWorker.js", { type: "module" });
            workers.push(worker);
            activeWorkers++;

            worker.onmessage = (event: MessageEvent<AnalysisMessage>) => {
                const message = event.data;
                if (message.requestId !== requestId || failed) {
                    return;
                }

                if (message.type === "analysisError") {
                    failed = true;
                    terminateWorkers();
                    reject(new Error(message.message ?? "TypeScript analysis failed"));
                    return;
                }

                if (!message.result) {
                    failed = true;
                    terminateWorkers();
                    reject(new Error("TypeScript analysis returned no result"));
                    return;
                }

                onResult(message.year, message.result);
                dispatchNext(worker);
            };

            worker.onerror = (error) => {
                if (failed) {
                    return;
                }
                failed = true;
                terminateWorkers();
                reject(new Error(error.message));
            };

            dispatchNext(worker);
        }
    });
}

