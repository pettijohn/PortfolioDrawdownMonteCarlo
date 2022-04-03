// Shouldn't need below on every .tsx file - https://github.com/denoland/deno/issues/13389

import React from "https://esm.sh/react@17.0.2?pin=v74";
import ReactDOM from "https://esm.sh/react-dom@17.0.2?pin=v74";


import { Allocation, AllocationProps } from "./allocation.tsx";
import { MonteCarloInputs, MonteCarlo, StatResultsAll, SimulationState } from "./monteCarlo.ts";
import { Charts } from "./charts.tsx";


interface AppState extends AllocationProps {
  simulationState?: SimulationState
}

class App extends React.Component<Record<never,never>, AppState> {
  constructor(props: Record<never,never>) {
    super(props);
    const defaultState = {
      stocksPercent: 50,
      bondsPercent: 30,
      cashPercent: 20,
      startingBalance: 1000000,
      drawdownRate: 4,
      simulationRounds: 1000,
      simulationYears: 50,
      onChange: undefined
    };
    const STORAGE_KEY = "savedState";
    const savedState = window.localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      try {
        this.state = JSON.parse(savedState) as AllocationProps;
      } catch (error) {
        window.localStorage.removeItem(STORAGE_KEY)
        this.state = defaultState;
      }
    }
    else {
      this.state = defaultState;
    }
    
    // This binding is necessary to make `this` work in the callback
    this.handleAllocationChange = this.handleAllocationChange.bind(this);
    this.runSimulation = this.runSimulation.bind(this);
    this.simulationStateChanged = this.simulationStateChanged.bind(this);

    // Initialize the simulation & attach state change callback
    this.MonteCarloSimulation = new MonteCarlo();
    this.MonteCarloSimulation.onSimulationStateChange = this.simulationStateChanged;
  }

  MonteCarloSimulation: MonteCarlo;

  /** Report state changes of the simulation */
  simulationStateChanged(state: SimulationState) {
    this.setState({ simulationState: state });
  }

  render() {
    let charts;
    if (this.state.simulationResults)
      charts = <Charts results={this.state.simulationResults} />

    
    return (
    <div>
      <Allocation stocksPercent={this.state.stocksPercent} bondsPercent={this.state.bondsPercent} cashPercent={this.state.cashPercent}
          startingBalance={this.state.startingBalance} drawdownRate={this.state.drawdownRate} simulationRounds={this.state.simulationRounds}
          simulationYears={this.state.simulationYears} onChange={this.handleAllocationChange}
      />
      <button id="run" onClick={this.runSimulation}>Run Simulation</button>{this.state.simulationState}
      {charts}
    </div>
  )
  }
  
  async runSimulation(event: React.MouseEvent<HTMLButtonElement>) {
    const inputs: MonteCarloInputs = {
      savings: this.state.startingBalance,
      withdrawalRate: this.state.drawdownRate / 100,
      bonds: this.state.bondsPercent / 100,
      stocks: this.state.stocksPercent / 100,
      cash: this.state.cashPercent / 100,
      simulationRounds: this.state.simulationRounds,
      simulationYears: this.state.simulationYears
    };

    const results = await this.MonteCarloSimulation.runMonteCarlo(inputs, 4);
    if (results)
      this.setState({ simulationResults: results });
    // this.MonteCarloSimulation.runMonteCarlo(inputs, 4).then(results => {
    //   if (results)
    //     this.setState({ simulationResults: results })
    // });
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
    });
  }

  handleAllocationChange(event: React.ChangeEvent<HTMLInputElement>) {
      // console.log(this);
      //console.log(event.target.value);
      const value = parseFloat(event.target.value);
      const key = event.target.id as keyof AllocationProps;
          
      // This is a weird typescript validation issue that it can't validate them all at once
      switch (key) {
          case "startingBalance":
              this.setState({ [key]: value });
              break;
          case "drawdownRate":
              this.setState({ [key]: value });
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
            this.setState({ [key]: value });
            break;
          case "simulationYears":
              this.setState({ [key]: value });
              break;
          default:
              break;
      }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);