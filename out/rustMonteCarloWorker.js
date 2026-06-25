// monteCarlo.ts
var SimulationState = /* @__PURE__ */ function(SimulationState2) {
  SimulationState2["Stopped"] = "Click Run to start the simulation";
  SimulationState2["Initializing"] = "Initializing";
  SimulationState2["Running"] = "Running";
  SimulationState2["Analyzing"] = "Analyzing results";
  return SimulationState2;
}({});

// rustMonteCarloWorker.ts
function postMessageToApp(message) {
  self.postMessage(message);
}
self.onmessage = async (event) => {
  const message = event.data;
  if (message.type !== "run") {
    return;
  }
  try {
    postMessageToApp({
      type: "state",
      requestId: message.requestId,
      state: SimulationState.Initializing
    });
    const results = await runRustSimulation(message.requestId, message.config);
    postMessageToApp({
      type: "result",
      requestId: message.requestId,
      results
    });
  } catch (error) {
    postMessageToApp({
      type: "error",
      requestId: message.requestId,
      message: error instanceof Error ? error.message : String(error)
    });
  }
};
async function runRustSimulation(requestId, config) {
  const workerCount = determineWorkerCount(config.simulationRounds);
  const shardRounds = distributeRounds(config.simulationRounds, workerCount);
  const shards = [];
  let completedShards = 0;
  postMessageToApp({
    type: "state",
    requestId,
    state: `Running Rust with ${workerCount} workers`
  });
  await Promise.all(shardRounds.map((simulationRounds, shardIndex) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker("./rustMonteCarloShardWorker.js", {
        type: "module"
      });
      worker.onmessage = (event) => {
        const message = event.data;
        if (message.requestId !== requestId) {
          return;
        }
        worker.terminate();
        if (message.type === "shardError") {
          reject(new Error(message.message ?? "Rust shard failed"));
          return;
        }
        if (!message.shard) {
          reject(new Error("Rust shard returned no data"));
          return;
        }
        shards[message.shardIndex] = message.shard;
        completedShards++;
        postMessageToApp({
          type: "state",
          requestId,
          state: `Running Rust shard ${completedShards} of ${workerCount}`
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
        config
      });
    });
  }));
  return analyzeShards(requestId, config, shards);
}
function determineWorkerCount(simulationRounds) {
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  return Math.max(1, Math.min(simulationRounds, hardwareConcurrency));
}
function distributeRounds(simulationRounds, workerCount) {
  const baseRounds = Math.floor(simulationRounds / workerCount);
  const remainder = simulationRounds % workerCount;
  return Array.from({
    length: workerCount
  }, (_unused, index) => {
    return baseRounds + (index < remainder ? 1 : 0);
  });
}
async function analyzeShards(requestId, config, shards) {
  const results = {};
  const analysisWorkerCount = determineWorkerCount(config.simulationYears);
  let completedYears = 0;
  postMessageToApp({
    type: "state",
    requestId,
    state: `Analyzing Rust with ${analysisWorkerCount} workers`
  });
  await runAnalysisPool(requestId, config, shards, analysisWorkerCount, (year, result) => {
    results[year] = result;
    completedYears++;
    postMessageToApp({
      type: "state",
      requestId,
      state: `Analyzing Rust year ${completedYears} of ${config.simulationYears}`
    });
  });
  return results;
}
function runAnalysisPool(requestId, config, shards, workerCount, onResult) {
  return new Promise((resolve, reject) => {
    const years = Array.from({
      length: config.simulationYears
    }, (_unused, year) => year);
    const workers = [];
    let activeWorkers = 0;
    let failed = false;
    function terminateWorkers() {
      for (const worker of workers) {
        worker.terminate();
      }
    }
    function dispatchNext(worker) {
      if (failed) {
        return;
      }
      const year = years.shift();
      if (year === void 0) {
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
        nominal: shards.flatMap((shard) => shard.nominalByYear[year]),
        adjusted: shards.flatMap((shard) => shard.adjustedByYear[year]),
        shortfalls: shards.flatMap((shard) => shard.shortfallByYear[year]),
        exhausted: shards.flatMap((shard) => shard.exhaustedByYear[year])
      });
    }
    for (let workerIndex = 0; workerIndex < workerCount; workerIndex++) {
      const worker = new Worker("./monteCarloAnalysisWorker.js", {
        type: "module"
      });
      workers.push(worker);
      activeWorkers++;
      worker.onmessage = (event) => {
        const message = event.data;
        if (message.requestId !== requestId || failed) {
          return;
        }
        if (message.type === "analysisError") {
          failed = true;
          terminateWorkers();
          reject(new Error(message.message ?? "Rust analysis failed"));
          return;
        }
        if (!message.result) {
          failed = true;
          terminateWorkers();
          reject(new Error("Rust analysis returned no result"));
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
