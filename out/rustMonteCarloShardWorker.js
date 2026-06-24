// rustMonteCarloShardWorker.ts
var wasmModulePromise;
function loadWasmModule() {
  if (!wasmModulePromise) {
    const wasmModuleUrl = "./rust_wasm/montecarlo.js";
    wasmModulePromise = import(wasmModuleUrl);
  }
  return wasmModulePromise;
}
self.onmessage = async (event) => {
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
