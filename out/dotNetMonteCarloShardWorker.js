// dotNetMonteCarloShardWorker.ts
var exportsPromise;
function formatError(error) {
  if (error instanceof Error) {
    return `${error.name}: ${error.message}${error.stack ? `
${error.stack}` : ""}`;
  }
  return String(error);
}
function postShardState(message, state) {
  self.postMessage({
    type: "shardState",
    requestId: message.requestId,
    shardIndex: message.shardIndex,
    state
  });
}
function withTimeout(operation, timeoutMs, label) {
  let timeoutId = 0;
  const timeout = new Promise((_resolve, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(`${label} did not finish within ${timeoutMs}ms`));
    }, timeoutMs);
  });
  return Promise.race([
    operation,
    timeout
  ]).finally(() => clearTimeout(timeoutId));
}
function startDotNetRuntime() {
  if (!exportsPromise) {
    exportsPromise = (async () => {
      const dotnetModuleUrl = "./dotnet_wasm/_framework/dotnet.js";
      const host = await withTimeout(import(dotnetModuleUrl), 3e4, "importing dotnet.js");
      const runtime = await withTimeout(host.dotnet.create(), 9e4, "dotnet.create()");
      const config = runtime.getConfig();
      const exports = await withTimeout(runtime.getAssemblyExports(config.mainAssemblyName), 3e4, "getAssemblyExports()");
      return exports;
    })();
  }
  return exportsPromise;
}
startDotNetRuntime().catch((error) => console.error("C#/.NET runtime startup failed", error));
async function handleShardRequest(event) {
  const message = event.data;
  if (message.type !== "runShard") {
    return;
  }
  try {
    postShardState(message, "loading .NET runtime");
    const exports = await startDotNetRuntime();
    postShardState(message, "running C# simulation");
    const shardJson = exports.MonteCarloDrawdown.DotNetMonteCarloExports.RunSimulationShardJson(JSON.stringify(message.config), message.simulationRounds);
    postShardState(message, "serializing C# shard");
    self.postMessage({
      type: "shardResult",
      requestId: message.requestId,
      shardIndex: message.shardIndex,
      shard: JSON.parse(shardJson)
    });
  } catch (error) {
    self.postMessage({
      type: "shardError",
      requestId: message.requestId,
      shardIndex: message.shardIndex,
      message: formatError(error)
    });
  }
}
self.addEventListener("message", handleShardRequest);
