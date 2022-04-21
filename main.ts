import { MonteCarlo } from "./src/monteCarlo.ts";
import { MonteCarloInputs } from "./src/monteCarloWorkerTypes.ts";

const simulation = new MonteCarlo();
const results = await simulation.runMonteCarlo(
    {
        savings: 1000000,
        withdrawalRate: 0.04,
        stocks: .5,
        bonds: .3,
        cash: .2,
        simulationRounds: 1000,
        simulationYears: 50,
        quantiles: 4
      } as MonteCarloInputs
);

console.log(JSON.stringify(results));
