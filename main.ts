import { MonteCarloInputs, runMonteCarlo } from "./monteCarlo.ts";

const results = runMonteCarlo(4);
console.log(JSON.stringify(results));
