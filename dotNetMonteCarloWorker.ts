import { SimulationConfig, SimulationState, StatResults, StatSingleYear } from "./monteCarlo.ts";
import {
    SimulationWorkerMessage,
    SimulationWorkerRequest,
} from "./monteCarloWorkerMessages.ts";

type DotNetSimulationShard = {
    nominalByYear: number[][];
    adjustedByYear: number[][];
    shortfallByYear: number[][];
    exhaustedByYear: boolean[][];
};

type DotNetShardMessage = {
    type: "shardResult" | "shardError" | "shardState";
    requestId: number;
    shardIndex: number;
    shard?: DotNetSimulationShard;
    message?: string;
    state?: string;
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

        const results = await runDotNetSimulation(message.requestId, message.config);
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

async function runDotNetSimulation(
    requestId: number,
    config: SimulationConfig,
): Promise<StatResults> {
    const workerCount = determineDotNetSimulationWorkerCount(config.simulationRounds);
    const shardRounds = distributeRounds(config.simulationRounds, workerCount);
    const shards: DotNetSimulationShard[] = [];
    let completedShards = 0;

    postMessageToApp({
        type: "state",
        requestId,
        state: `Running C#/.NET WASM with ${workerCount} worker${workerCount === 1 ? "" : "s"}`,
    });

    // Mirror the Rust orchestration: split simulation rounds into independent
    // shards, then reuse the shared TypeScript analysis worker pool below.
    await Promise.all(shardRounds.map((simulationRounds, shardIndex) => {
        return new Promise<void>((resolve, reject) => {
            const worker = new Worker("./dotNetMonteCarloShardWorker.js", { type: "module" });

            worker.onmessage = (event: MessageEvent<DotNetShardMessage>) => {
                const message = event.data;

                if (message.requestId !== requestId) {
                    return;
                }

                if (message.type === "shardState") {
                    postMessageToApp({
                        type: "state",
                        requestId,
                        state: `C#/.NET shard ${message.shardIndex + 1} of ${workerCount}: ${message.state ?? "working"}`,
                    });
                    return;
                }

                if (message.type === "shardError") {
                    worker.terminate();
                    reject(new Error(message.message ?? "C#/.NET shard failed"));
                    return;
                }

                if (!message.shard) {
                    worker.terminate();
                    reject(new Error("C#/.NET shard returned no data"));
                    return;
                }

                worker.terminate();
                shards[message.shardIndex] = message.shard;
                completedShards++;
                postMessageToApp({
                    type: "state",
                    requestId,
                    state: `Running C#/.NET shard ${completedShards} of ${workerCount}`,
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

function determineDotNetSimulationWorkerCount(simulationRounds: number): number {
    // The .NET runtime now initializes correctly in long-lived workers, so the
    // C# path can use the same browser concurrency cap as Rust.
    return determineWorkerCount(simulationRounds);
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
    shards: DotNetSimulationShard[],
): Promise<StatResults> {
    const results: StatResults = {};
    const analysisWorkerCount = determineWorkerCount(config.simulationYears);
    let completedYears = 0;

    postMessageToApp({
        type: "state",
        requestId,
        state: `Analyzing C#/.NET WASM with ${analysisWorkerCount} workers`,
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
                state: `Analyzing C#/.NET year ${completedYears} of ${config.simulationYears}`,
            });
        },
    );

    return results;
}

function runAnalysisPool(
    requestId: number,
    config: SimulationConfig,
    shards: DotNetSimulationShard[],
    workerCount: number,
    onResult: (year: number, result: StatSingleYear) => void,
): Promise<void> {
    return new Promise((resolve, reject) => {
        // Analysis is CPU-bound but independent per year, so dispatch years
        // across a small pool instead of creating one worker per year.
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
                    reject(new Error(message.message ?? "C#/.NET analysis failed"));
                    return;
                }

                if (!message.result) {
                    failed = true;
                    terminateWorkers();
                    reject(new Error("C#/.NET analysis returned no result"));
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
