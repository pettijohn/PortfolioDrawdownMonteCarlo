// goMonteCarloShardWorker.ts
var goRuntimePromise;
var historicalDataPromise;
async function loadGoRuntime() {
  if (!goRuntimePromise) {
    goRuntimePromise = (async () => {
      const wasmExecUrl = "./go_wasm/wasm_exec.js";
      await import(wasmExecUrl);
      const goGlobal = globalThis;
      if (!goGlobal.Go) {
        throw new Error("Go WASM runtime did not initialize");
      }
      const go = new goGlobal.Go();
      const wasmUrl = new URL("./go_wasm/montecarlo.wasm", import.meta.url);
      let instance;
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
function loadHistoricalData() {
  if (!historicalDataPromise) {
    const dataUrl = new URL("../data/historicalMarketData.json", import.meta.url);
    historicalDataPromise = fetch(dataUrl).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load historical market data: ${response.status}`);
      }
      return response.json();
    });
  }
  return historicalDataPromise;
}
self.onmessage = async (event) => {
  const message = event.data;
  if (message.type !== "runShard") {
    return;
  }
  try {
    await loadGoRuntime();
    const historicalData = await loadHistoricalData();
    const shard = globalThis.runSimulationShard?.(message.config, message.simulationRounds, historicalData);
    self.postMessage({
      type: "shardResult",
      requestId: message.requestId,
      shardIndex: message.shardIndex,
      shard
    });
  } catch (error) {
    self.postMessage({
      type: "shardError",
      requestId: message.requestId,
      shardIndex: message.shardIndex,
      message: error instanceof Error ? error.message : String(error)
    });
  }
};
