/** The types used to communicate through the web worker message interface */

export interface MonteCarloInputs {
    savings: number;
    withdrawalRate: number;
    stocks: number;
    bonds: number;
    cash: number;
    simulationRounds: number;
    simulationYears: number;
    quantiles: number;
}

/** A collection of all of the statistics  */
export type StatResultsAll = { [simYear: number]: StatResultSingle };

/** Results from a single year, the stats of the 100k simulations */
type StatResultSingle = {
    min: number,
    max: number,
    mean: number,
    median: number,
    stddev: number,
    quantiles: number[]
}

export enum SimulationState {
    Stopped = "Click Run to start the simulation",
    Initializing = "Initializing",
    Running = "Running",
    Analyzing = "Analyzing results"
}
