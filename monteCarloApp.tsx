// Shouldn't need below on every .tsx file - https://github.com/denoland/deno/issues/13389

import * as React from "https://esm.sh/react@17.0.2?pin=v74";
import * as ReactDOM from "https://esm.sh/react-dom@17.0.2?pin=v74";


import { Allocation, AllocationProps } from "./allocation.tsx";
import { SimulationConfig, SimulationState, SimulationStatus } from "./monteCarlo.ts";
import { SimulationWorkerMessage, SimulationWorkerRequest } from "./monteCarloWorkerMessages.ts";
import { ChartDollarMode, Charts } from "./charts.tsx";


interface AppState extends AllocationProps {
  simulationState?: SimulationStatus,
  chartDollarMode: ChartDollarMode,
  runtime: SimulationRuntime
}

enum SimulationRuntime {
  TypeScript = "typescript",
  RustWasm = "rustWasm",
  DotNetWasm = "dotNetWasm",
  GoWasm = "goWasm"
}

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
      onChange: undefined
    };
    this.state = this.stateFromUrl(defaultState);

    // This binding is necessary to make `this` work in the callback
    this.handleAllocationChange = this.handleAllocationChange.bind(this);
    this.handleChartDollarModeChange = this.handleChartDollarModeChange.bind(this);
    this.handleRuntimeChange = this.handleRuntimeChange.bind(this);
    this.handleWorkerMessage = this.handleWorkerMessage.bind(this);
    this.runSimulation = this.runSimulation.bind(this);
    this.updateUrlFromState = this.updateUrlFromState.bind(this);
  }

  simulationRequestId = 0;
  simulationWorker?: Worker;

  override render() {
    let charts;
    if (this.state.simulationResults)
      charts = <Charts results={this.state.simulationResults} dollarMode={this.state.chartDollarMode} />


    return (
    <div>
      <Allocation stocksPercent={this.state.stocksPercent} bondsPercent={this.state.bondsPercent} cashPercent={this.state.cashPercent}
          startingBalance={this.state.startingBalance} drawdownRate={this.state.drawdownRate} simulationRounds={this.state.simulationRounds}
          simulationYears={this.state.simulationYears} onChange={this.handleAllocationChange}
      />
      <label htmlFor="chartDollarMode">Show chart in </label>
      <select id="chartDollarMode" value={this.state.chartDollarMode} onChange={this.handleChartDollarModeChange}>
        <option value={ChartDollarMode.Nominal}>Real Dollars</option>
        <option value={ChartDollarMode.InflationAdjusted}>Inflation-Adjusted (Today's Dollars)</option>
      </select>&nbsp;
      <label htmlFor="runtime">Runtime: </label>
      <select id="runtime" value={this.state.runtime} onChange={this.handleRuntimeChange}>
        <option value={SimulationRuntime.TypeScript}>TypeScript</option>
        <option value={SimulationRuntime.RustWasm}>Rust (WASM)</option>
        <option value={SimulationRuntime.DotNetWasm}>C# (.NET WASM)</option>
        <option value={SimulationRuntime.GoWasm}>Go (WASM)</option>
      </select>&nbsp;
      <button id="run" onClick={this.runSimulation}>Run Simulation</button>{this.state.simulationState}
      {charts}
    </div>
  )
  }

  handleChartDollarModeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ chartDollarMode: event.target.value as ChartDollarMode }, this.updateUrlFromState);
  }

  handleRuntimeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ runtime: event.target.value as SimulationRuntime }, this.updateUrlFromState);
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
    const worker = new Worker(this.workerUrl(), { type: "module" });
    this.simulationWorker = worker;
    worker.onmessage = this.handleWorkerMessage;
    worker.onerror = (error) => {
      if (requestId !== this.simulationRequestId) {
        return;
      }

      this.simulationWorker?.terminate();
      this.simulationWorker = undefined;
      this.setState({ simulationState: SimulationState.Stopped });
      console.error(error);
    };

    this.setState({ simulationState: SimulationState.Initializing });

    const message: SimulationWorkerRequest = {
      type: "run",
      requestId,
      config: inputs
    };
    worker.postMessage(message);
  }

  workerUrl(): string {
    if (this.state.runtime === SimulationRuntime.RustWasm) {
      return "./out/rustMonteCarloWorker.js";
    }
    if (this.state.runtime === SimulationRuntime.DotNetWasm) {
      return "./out/dotNetMonteCarloWorker.js";
    }
    if (this.state.runtime === SimulationRuntime.GoWasm) {
      return "./out/goMonteCarloWorker.js";
    }

    return "./out/monteCarlo.worker.js";
  }

  handleWorkerMessage(event: MessageEvent<SimulationWorkerMessage>) {
    const message = event.data;

    if (message.requestId !== this.simulationRequestId) {
      return;
    }

    switch (message.type) {
      case "state":
        this.setState({ simulationState: message.state });
        break;
      case "result":
        this.simulationWorker?.terminate();
        this.simulationWorker = undefined;
        this.setState({
          simulationResults: message.results ?? undefined,
          simulationState: SimulationState.Stopped
        });
        break;
      case "error":
        this.simulationWorker?.terminate();
        this.simulationWorker = undefined;
        this.setState({ simulationState: SimulationState.Stopped });
        console.error(message.message);
        break;
    }
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
      runtime === SimulationRuntime.GoWasm
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
