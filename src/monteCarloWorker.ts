/** Encapsulate the monteCarlo.ts in a worker to run on a background thread and message passing. */

import { MonteCarlo } from "./monteCarlo.ts";
import { MonteCarloInputs, SimulationState } from "./monteCarloWorkerTypes.ts";

const simulation = new MonteCarlo();
/** Report state changes of the simulation */
simulation.onSimulationStateChange = (state: SimulationState) => {
    postMessage(state);
};

onmessage = function (e) {
    simulation.runMonteCarlo(e.data as MonteCarloInputs).then(results => {
        if (results)
            postMessage(results);
    });
}

// addEventListener('run', e => {
//     simulation.runMonteCarlo(e. as MonteCarloInputs).then(results => {
//         if (results)
//         this.setState({ simulationResults: results })
//     });

//     postMessage(sayHello());

// });