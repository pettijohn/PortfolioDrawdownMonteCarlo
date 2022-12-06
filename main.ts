import { SimulationConfig, MonteCarlo } from "./monteCarlo.ts";

const simulationConfig: SimulationConfig = {
    savings: 3000000,
    withdrawalRate: 0.04,
    bonds: 0.2,
    stocks: 0.7,
    cash: 0.1,
    simulationRounds: 100000,
    simulationYears: 50,
    quantiles: 4
  };

const simulation = new MonteCarlo();
console.log("savings: " + simulationConfig.savings + " withdrawalRate: " + simulationConfig.withdrawalRate
    + " stocks: " + simulationConfig.stocks + " bonds: " + simulationConfig.bonds + " cash: " + simulationConfig.cash);
const results = await simulation.computeSimulation(simulationConfig);
//console.log(JSON.stringify(results));
for (let year = 0; year < simulationConfig.simulationYears; year++) {
    const r = results![year];
    console.log(`${year}: Min ${Math.floor(r.min / 1000000)}M / Max ${Math.floor(r.max / 1000000)}M / Avg ${Math.floor(r.mean / 1000000)}M / Median ${Math.floor(r.median / 1000000)}M`);
}
