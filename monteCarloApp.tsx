// Shouldn't need below on every .tsx file - https://github.com/denoland/deno/issues/13389

import * as React from "https://esm.sh/react@17.0.2?pin=v74";
import * as ReactDOM from "https://esm.sh/react-dom@17.0.2?pin=v74";


import { Allocation, AllocationProps } from "./allocation.tsx";
import { SimulationConfig, SimulationState, SimulationStatus, StatResults } from "./monteCarlo.ts";
import { SimulationWorkerMessage, SimulationWorkerRequest } from "./monteCarloWorkerMessages.ts";
import { ChartDollarMode, Charts } from "./charts.tsx";

type RuntimeTiming = {
  runtime: SimulationRuntime;
  label: string;
  durationMs?: number;
  status: "pending" | "running" | "complete" | "error";
  message?: string;
};

interface AppState extends AllocationProps {
  simulationState?: SimulationStatus,
  chartDollarMode: ChartDollarMode,
  runtime: SimulationRuntime,
  runtimeTimings: RuntimeTiming[]
}

enum SimulationRuntime {
  TypeScript = "typescript",
  RustWasm = "rustWasm",
  DotNetWasm = "dotNetWasm",
  GoWasm = "goWasm",
  All = "all"
}

const timedRuntimes = [
  SimulationRuntime.TypeScript,
  SimulationRuntime.RustWasm,
  SimulationRuntime.DotNetWasm,
  SimulationRuntime.GoWasm,
];

const runtimeLabels: Record<SimulationRuntime, string> = {
  [SimulationRuntime.TypeScript]: "TypeScript",
  [SimulationRuntime.RustWasm]: "Rust (WASM)",
  [SimulationRuntime.DotNetWasm]: "C# (.NET WASM)",
  [SimulationRuntime.GoWasm]: "Go (WASM)",
  [SimulationRuntime.All]: "All",
};

class App extends React.Component<Record<never,never>, AppState> {
  constructor(props: Record<never,never>) {
    super(props);
    const defaultState: AppState = {
      stocksPercent: 50,
      bondsPercent: 30,
      cashPercent: 20,
      startingBalance: 1000000,
      drawdownRate: 4,
      simulationRounds: 1000,
      simulationYears: 50,
      chartDollarMode: ChartDollarMode.Nominal,
      runtime: SimulationRuntime.TypeScript,
      runtimeTimings: [],
      onChange: undefined
    };
    this.state = this.stateFromUrl(defaultState);

    // This binding is necessary to make `this` work in the callback
    this.handleAllocationChange = this.handleAllocationChange.bind(this);
    this.handleChartDollarModeChange = this.handleChartDollarModeChange.bind(this);
    this.handleRuntimeChange = this.handleRuntimeChange.bind(this);
    this.runSimulation = this.runSimulation.bind(this);
    this.updateUrlFromState = this.updateUrlFromState.bind(this);
  }

  simulationRequestId = 0;
  simulationWorker?: Worker;

  override render() {
    let charts;
    if (this.state.simulationResults)
      charts = <Charts results={this.state.simulationResults} dollarMode={this.state.chartDollarMode} />

    const runtimeTimings = this.state.runtime === SimulationRuntime.All && this.state.runtimeTimings.length > 0
      ? (
        <ul>
          {this.state.runtimeTimings.map(timing => (
            <li key={timing.runtime}>
              {timing.label}: {this.formatRuntimeTiming(timing)}
            </li>
          ))}
        </ul>
      )
      : undefined;

    return (
    <div>
      <Allocation stocksPercent={this.state.stocksPercent} bondsPercent={this.state.bondsPercent} cashPercent={this.state.cashPercent}
          startingBalance={this.state.startingBalance} drawdownRate={this.state.drawdownRate} simulationRounds={this.state.simulationRounds}
          simulationYears={this.state.simulationYears} onChange={this.handleAllocationChange}
      />
      <div>
        <label htmlFor="chartDollarMode">Show chart in </label>
        <select id="chartDollarMode" value={this.state.chartDollarMode} onChange={this.handleChartDollarModeChange}>
          <option value={ChartDollarMode.Nominal}>Real Dollars</option>
          <option value={ChartDollarMode.InflationAdjusted}>Inflation-Adjusted (Today's Dollars)</option>
        </select>&nbsp;
        <label htmlFor="runtime">Runtime: </label>
        <select id="runtime" value={this.state.runtime} onChange={this.handleRuntimeChange}>
          <option value={SimulationRuntime.TypeScript}>{runtimeLabels[SimulationRuntime.TypeScript]}</option>
          <option value={SimulationRuntime.RustWasm}>{runtimeLabels[SimulationRuntime.RustWasm]}</option>
          <option value={SimulationRuntime.DotNetWasm}>{runtimeLabels[SimulationRuntime.DotNetWasm]}</option>
          <option value={SimulationRuntime.GoWasm}>{runtimeLabels[SimulationRuntime.GoWasm]}</option>
          <option value={SimulationRuntime.All}>{runtimeLabels[SimulationRuntime.All]}</option>
        </select>&nbsp;
        <button id="run" onClick={this.runSimulation}>Run Simulation</button>{this.state.simulationState}
      </div>
      {runtimeTimings}
      {charts}
    </div>
  )
  }

  handleChartDollarModeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ chartDollarMode: event.target.value as ChartDollarMode }, this.updateUrlFromState);
  }

  handleRuntimeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const runtime = event.target.value as SimulationRuntime;
    this.setState({
      runtime,
      runtimeTimings: []
    }, this.updateUrlFromState);
  }

  async runSimulation(_event: React.MouseEvent<HTMLButtonElement>) {
    const inputs: SimulationConfig = {
      savings: this.state.startingBalance,
      withdrawalRate: this.state.drawdownRate / 100,
      bonds: this.state.bondsPercent / 100,
      stocks: this.state.stocksPercent / 100,
      cash: this.state.cashPercent / 100,
      simulationRounds: this.state.simulationRounds,
      simulationYears: this.state.simulationYears,
      quantiles: 4
    };

    this.simulationWorker?.terminate();

    const requestId = ++this.simulationRequestId;
    const selectedRuntime = this.state.runtime;

    if (selectedRuntime === SimulationRuntime.All) {
      await this.runAllSimulations(requestId, inputs);
      return;
    }

    this.setState({ simulationState: SimulationState.Initializing, runtimeTimings: [] });
    try {
      const result = await this.runRuntime(selectedRuntime, requestId, inputs);
      if (requestId !== this.simulationRequestId) {
        return;
      }

      this.setState({
        simulationResults: result.results ?? undefined,
        simulationState: SimulationState.Stopped
      });
    } catch (error) {
      if (requestId !== this.simulationRequestId) {
        return;
      }

      this.setState({ simulationState: SimulationState.Stopped });
      console.error(error);
    }
  }

  async runAllSimulations(requestId: number, inputs: SimulationConfig) {
    const initialTimings = timedRuntimes.map(runtime => ({
      runtime,
      label: runtimeLabels[runtime],
      status: "pending" as const,
    }));

    this.setState({
      simulationState: SimulationState.Initializing,
      runtimeTimings: initialTimings,
      simulationResults: undefined,
    });

    for (const runtime of timedRuntimes) {
      if (requestId !== this.simulationRequestId) {
        return;
      }

      this.updateRuntimeTiming(runtime, { status: "running", durationMs: undefined, message: undefined });
      this.setState({ simulationState: `Running ${runtimeLabels[runtime]}` });

      try {
        const result = await this.runRuntime(runtime, requestId, inputs);
        if (requestId !== this.simulationRequestId) {
          return;
        }

        this.updateRuntimeTiming(runtime, {
          status: "complete",
          durationMs: result.durationMs,
          message: undefined,
        });
        this.setState({ simulationResults: result.results ?? undefined });
      } catch (error) {
        if (requestId !== this.simulationRequestId) {
          return;
        }

        const message = error instanceof Error ? error.message : String(error);
        this.updateRuntimeTiming(runtime, { status: "error", message });
        console.error(error);
      }
    }

    if (requestId === this.simulationRequestId) {
      this.setState({ simulationState: SimulationState.Stopped });
    }
  }

  updateRuntimeTiming(runtime: SimulationRuntime, patch: Partial<RuntimeTiming>) {
    this.setState(state => ({
      runtimeTimings: state.runtimeTimings.map(timing =>
        timing.runtime === runtime ? { ...timing, ...patch } : timing
      )
    }));
  }

  runRuntime(runtime: SimulationRuntime, requestId: number, inputs: SimulationConfig): Promise<{
    results: StatResults | null | undefined;
    durationMs: number;
  }> {
    return new Promise((resolve, reject) => {
      const startedAt = performance.now();
      const worker = new Worker(this.workerUrl(runtime), { type: "module" });
      this.simulationWorker = worker;

      worker.onmessage = (event: MessageEvent<SimulationWorkerMessage>) => {
        const message = event.data;

        if (message.requestId !== requestId) {
          return;
        }

        switch (message.type) {
          case "state":
            this.setState({ simulationState: message.state });
            break;
          case "result":
            worker.terminate();
            if (this.simulationWorker === worker) {
              this.simulationWorker = undefined;
            }
            resolve({
              results: message.results ?? undefined,
              durationMs: Math.round(performance.now() - startedAt),
            });
            break;
          case "error":
            worker.terminate();
            if (this.simulationWorker === worker) {
              this.simulationWorker = undefined;
            }
            reject(new Error(message.message));
            break;
        }
      };

      worker.onerror = (error) => {
        worker.terminate();
        if (this.simulationWorker === worker) {
          this.simulationWorker = undefined;
        }
        reject(new Error(error.message));
      };

      const message: SimulationWorkerRequest = {
        type: "run",
        requestId,
        config: inputs
      };
      worker.postMessage(message);
    });
  }

  workerUrl(runtime: SimulationRuntime): string {
    if (runtime === SimulationRuntime.RustWasm) {
      return "./out/rustMonteCarloWorker.js";
    }
    if (runtime === SimulationRuntime.DotNetWasm) {
      return "./out/dotNetMonteCarloWorker.js";
    }
    if (runtime === SimulationRuntime.GoWasm) {
      return "./out/goMonteCarloWorker.js";
    }

    return "./out/monteCarlo.worker.js";
  }

  formatRuntimeTiming(timing: RuntimeTiming): string {
    if (timing.status === "running") {
      return "running";
    }

    if (timing.status === "pending") {
      return "pending";
    }

    if (timing.status === "error") {
      return `failed${timing.message ? ` - ${timing.message}` : ""}`;
    }

    return `${timing.durationMs ?? 0} ms`;
  }

  setAllocationState(stocks?: number, bonds?: number, cash?: number) {
    this.setState(function (state, _props) {
        // Only one value will change at a time
        if (stocks != null) {
            // Only update bonds, unless there's not room, then update Cash too
            const balance = 100 - stocks;
            let bondBalance = balance - state.cashPercent;
            if (bondBalance < 0) bondBalance = 0;
            return {
                stocksPercent: stocks,
                bondsPercent: bondBalance,
                cashPercent: 100 - stocks - bondBalance
            };
        }
        else if (bonds != null) {
            // Only update cash, unless there's not room, then update stocks too
            let cashBalance = 100 - state.stocksPercent - bonds;
            if (cashBalance < 0) cashBalance = 0;
            return {
                stocksPercent: 100 - bonds - cashBalance,
                bondsPercent: bonds,
                cashPercent: cashBalance
            };
        }
        else if (cash != null) {
            // Only update bonds, unless there's not room, then update stocks too
            let bondBalance = 100 - state.stocksPercent - cash;
            if (bondBalance < 0) bondBalance = 0;
            return {
                stocksPercent: 100 - bondBalance - cash,
                bondsPercent: bondBalance,
                cashPercent: cash
            }
        }
        else return {...state};
    }, this.updateUrlFromState);
  }

  handleAllocationChange(event: React.ChangeEvent<HTMLInputElement>) {
      // console.log(this);
      //console.log(event.target.value);
      const value = parseFloat(event.target.value);
      const key = event.target.id as keyof AllocationProps;

      // This is a weird typescript validation issue that it can't validate them all at once
      switch (key) {
          case "startingBalance":
              this.setState({ [key]: value }, this.updateUrlFromState);
              break;
          case "drawdownRate":
              this.setState({ [key]: value }, this.updateUrlFromState);
              break;
          case "stocksPercent":
              this.setAllocationState(value, undefined, undefined);
              break;
          case "bondsPercent":
              this.setAllocationState(undefined, value, undefined);
              break;
          case "cashPercent":
              this.setAllocationState(undefined, undefined, value);
              break;
          case "simulationRounds":
            this.setState({ [key]: value }, this.updateUrlFromState);
            break;
          case "simulationYears":
              this.setState({ [key]: value }, this.updateUrlFromState);
              break;
          default:
              break;
      }
  }

  stateFromUrl(defaultState: AppState): AppState {
    const params = new URLSearchParams(window.location.search);
    const state = { ...defaultState };
    const numberKeys: (keyof Pick<AppState,
      "startingBalance" |
      "drawdownRate" |
      "stocksPercent" |
      "bondsPercent" |
      "cashPercent" |
      "simulationRounds" |
      "simulationYears"
    >)[] = [
      "startingBalance",
      "drawdownRate",
      "stocksPercent",
      "bondsPercent",
      "cashPercent",
      "simulationRounds",
      "simulationYears"
    ];

    for (const key of numberKeys) {
      const value = params.get(key);
      if (value === null) {
        continue;
      }

      const parsedValue = Number(value);
      if (Number.isFinite(parsedValue)) {
        state[key] = parsedValue;
      }
    }

    const chartDollarMode = params.get("chartDollarMode");
    if (
      chartDollarMode === ChartDollarMode.Nominal ||
      chartDollarMode === ChartDollarMode.InflationAdjusted
    ) {
      state.chartDollarMode = chartDollarMode;
    }

    const runtime = params.get("runtime");
    if (
      runtime === SimulationRuntime.TypeScript ||
      runtime === SimulationRuntime.RustWasm ||
      runtime === SimulationRuntime.DotNetWasm ||
      runtime === SimulationRuntime.GoWasm ||
      runtime === SimulationRuntime.All
    ) {
      state.runtime = runtime;
    }

    return state;
  }

  updateUrlFromState() {
    const url = new URL(window.location.href);
    url.searchParams.set("startingBalance", String(this.state.startingBalance));
    url.searchParams.set("drawdownRate", String(this.state.drawdownRate));
    url.searchParams.set("stocksPercent", String(this.state.stocksPercent));
    url.searchParams.set("bondsPercent", String(this.state.bondsPercent));
    url.searchParams.set("cashPercent", String(this.state.cashPercent));
    url.searchParams.set("simulationRounds", String(this.state.simulationRounds));
    url.searchParams.set("simulationYears", String(this.state.simulationYears));
    url.searchParams.set("chartDollarMode", this.state.chartDollarMode);
    url.searchParams.set("runtime", this.state.runtime);

    window.history.replaceState({}, "", url);
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
