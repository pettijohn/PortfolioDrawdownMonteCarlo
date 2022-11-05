import { MonteCarloInputs, runMonteCarlo } from "./monteCarlo.ts";

const startDate = new Date();

const inputs = {
    savings: 1000000,
    withdrawalRate: .04,
    stocks: .7,
    bonds: .2,
    cash: .1,
    simulationRounds: 200000
} as MonteCarloInputs;
const results = await runMonteCarlo(inputs, 4);
//console.log(JSON.stringify(results));

const endDate = new Date();
console.log(endDate.valueOf() - startDate.valueOf());