import { MonteCarloInputs, MonteCarlo } from "./monteCarlo.ts";

const inputs: MonteCarloInputs = {
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
const results = await simulation.runMonteCarlo(inputs);
//console.log(JSON.stringify(results));
for (let year = 0; year < inputs.simulationYears; year++) {
    const r = results![year];
    console.log(`${year}: Min ${r.min} / Max ${r.max} / Avg ${Math.floor(r.mean / 1000000)}M`);
}
