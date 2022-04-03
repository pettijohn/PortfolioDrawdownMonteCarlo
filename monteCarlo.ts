//import { DataItem, stringify } from "https://deno.land/std@0.126.0/encoding/csv.ts";


export interface MonteCarloInputs {
    savings: number;
    withdrawalRate: number;
    stocks: number;
    bonds: number;
    cash: number;
    simulationRounds: number;
    simulationYears: number;
}

/** A single year's simulation trial */
type SimResultSingle = {
    startingBalance: number;
    withdrawal: number;
    endingBalance: number;
    growthRate: number;
    cumulativeInflation: number;
    endingBalanceTodaysDollars: number;
}

/** A 2D array where each year has 100k trials */
type SimResultsAll = { [simYear: number]: { [trialNum: number]: SimResultSingle } };


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

type HistoricalDataItem = {
    year: number;
    stocks: number;
    bonds: number;
    cash: number;
    cpi: number;
}

export enum SimulationState {
    Stopped = "Click Run to start the simulation",
    Initializing = "Initializing",
    Running = "Running",
    Analyzing = "Analyzing results"
}

export class MonteCarlo {
    constructor() {

        this.updateSimulationState = this.updateSimulationState.bind(this);

        this.updateSimulationState(SimulationState.Stopped);
    }
    historicalData?: HistoricalDataItem[];

    onSimulationStateChange?: (event: SimulationState) => void;

    updateSimulationState(newState: SimulationState) {
        if (this.onSimulationStateChange)
            this.onSimulationStateChange(newState);
    }

    async runMonteCarlo(inputs: MonteCarloInputs, quantiles: number): Promise<StatResultsAll | null> {
        this.updateSimulationState(SimulationState.Initializing);
        //Lazy initialize historical data
        if (!this.historicalData) {
            if ("Deno" in window) {
                this.historicalData = JSON.parse(await Deno.readTextFile("./data/historicalMarketData.json")) as HistoricalDataItem[];
            } else {
                this.historicalData = (await ((await fetch("./data/historicalMarketData.json")).json())) as HistoricalDataItem[];
            }
        }
        //if (!this.historicalData) throw "Error initializing historical data";
        
        let total: number;
        let error: string | undefined;

        if (isNaN(inputs.withdrawalRate) || (inputs.withdrawalRate > 0.2)) {
            error = "Invalid withdrawal rate";
        }
        if (isNaN(inputs.savings) || (inputs.savings === 0)) {
            error = "Invalid savings";
        }
        if (isNaN(inputs.stocks) || isNaN(inputs.bonds) || isNaN(inputs.cash)) {
            error = "Invalid allocation";
        } else {
            // Sum the constituent parts - they should total to 1.
            total = inputs.stocks + inputs.bonds + inputs.cash;
            // Normalize to %s in case. 
            if (total > 0) {
                inputs.stocks /= total;
                inputs.bonds /= total;
                inputs.cash /= total;
            } else {
                error = "Invalid allocation";
            }
        }

        if (error === undefined) {
            this.updateSimulationState(SimulationState.Running);
            this.trace("savings: " + inputs.savings + " withdrawalRate: " + inputs.withdrawalRate + " stocks: " + inputs.stocks + " bonds: " + inputs.bonds + " cash: " + inputs.cash);
            const trials = this.simulateDrawdown(inputs, this.historicalData);
            
            this.updateSimulationState(SimulationState.Analyzing);
            this.trace("Simulation complete, computing stats.");
            const simulationStats = this.computeStats(inputs, trials, quantiles);
            //console.log(JSON.stringify(deciles));

            this.updateSimulationState(SimulationState.Stopped);
            return simulationStats;
        }
        else {
            this.trace("SIMULATION FAILED");
            this.trace(error);
        }
        return null;
    }

    /** Console log and/or swallow any errors */
    trace(msg: string) {
        try {
            if (typeof console === "undefined") {
                return;
            }
            console.log(msg);
        } catch (_err) {
            // do nothing
        }
    }




    /*
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    SIMULATION model

    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    */

    //type SimResults = number[][];




    /** Run the Monte Carlo Simulation and return a 2D array; for each year#, 100k trials with the balance */
    simulateDrawdown(inputs: MonteCarloInputs, historicalData: HistoricalDataItem[]): SimResultsAll {
        
        const trials: SimResultsAll = {};
        const initialWithdrawal = inputs.savings * inputs.withdrawalRate;

        // Initialize the 50 years
        for (let y = 1; y <= inputs.simulationYears; y++) {
            trials[y] = {};
        }

        // Run 100k trials, 50 years per trial. 
        for (let trial = 0; trial < inputs.simulationRounds; trial++) {
            let balance = inputs.savings;
            let withdrawal = initialWithdrawal;
            for (let year = 1; year <= inputs.simulationYears; year++) {
                // Pick a random year to use its asset performance 
                const randomYear = Math.floor(Math.random() * historicalData.length);
                // Adjust withdrawal amount this year for inflation 
                withdrawal *= (1 + historicalData[randomYear].cpi);
                const startingBalance = balance;

                // Weight the growth per asset class relative to portfolio split
                const arr = historicalData[randomYear].stocks * inputs.stocks
                    + historicalData[randomYear].bonds * inputs.bonds
                    + historicalData[randomYear].cash * inputs.cash;
                
                if (balance < withdrawal) {
                    // If we run out of money, keep decrementing balance, but don't compute growth rate of assets. 
                    // TODO should we just zero out?
                    balance -= withdrawal;
                } else {
                    // Apply growth factor to balance at end of year
                    balance = (balance - withdrawal) * (1 + arr);

                }
                trials[year][trial] = {
                    startingBalance: startingBalance,
                    withdrawal: withdrawal,
                    endingBalance: balance,
                    growthRate: arr,
                    cumulativeInflation: withdrawal / initialWithdrawal,
                    endingBalanceTodaysDollars: balance / (withdrawal / initialWithdrawal)
                };
            }
        }

        return trials;
    }




    /** Of the 100k results, sort each year's endingBalance, then, compute statistics.  */
    computeStats(inputs: MonteCarloInputs, trials: SimResultsAll, quantiles: number): StatResultsAll {
        const sortedTrials: SimResultSingle[][] = [];
        
        if (quantiles < 2) throw "Quantiles too small.";

        for (let year = 1; year <= inputs.simulationYears; year++) {
            const resultsForYear = Object.values(trials[year]);
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
            resultsForYear.sort((t1, t2) => { return t1.endingBalance - t2.endingBalance });

            sortedTrials.push(resultsForYear);
        }

        const results: StatResultsAll = {};

        for (let year = 0; year <= inputs.simulationYears; year++) {
            // Compute quantiles
            // Initialize results. 
            // Leave thes values for year 0. 
            results[year] = {
                min: inputs.savings,
                max: inputs.savings,
                mean: inputs.savings,
                median: inputs.savings,
                stddev: 0,
                quantiles: []
            };
            for (let q = 1; q < quantiles; q++) {
                if (year === 0) {
                    // Year 0 is always starting balance 
                    results[0].quantiles.push(inputs.savings);
                }
                else {
                    // Compute the index into the results array, q% at a time, and push the ending balance
                    let index = Math.floor(inputs.simulationRounds * (q / quantiles));
                    //check an overflow, and adjust max index
                    if (index >= inputs.simulationRounds) {
                        index = inputs.simulationRounds - 1;
                    }
                    //trace(`Year ${year} / Trial ${index}`);
                    results[year].quantiles.push(sortedTrials[year-1][index].endingBalance);
                }
            }

            if (year === 0) continue;

            // Median is the middlemost value
            results[year].min = sortedTrials[year-1][0].endingBalance;
            results[year].median = sortedTrials[year-1][Math.floor(inputs.simulationRounds * 0.5)].endingBalance;
            results[year].max = sortedTrials[year - 1][(inputs.simulationRounds - 1)].endingBalance;
            
            const simYearTotal = sortedTrials[year - 1].reduce((acc, curr) => acc + curr.endingBalance, 0);
            results[year].mean = simYearTotal / sortedTrials[year - 1].length;
            results[year].stddev = this.stddev(sortedTrials[year - 1].map(t => t.endingBalance));
        }
        
        
        return results;
    }

    stddev(arr: number[]){
        // Creating the mean with Array.reduce
        const mean = arr.reduce((acc, curr)=>{
        return acc + curr
        }, 0) / arr.length;
        
        // Assigning (value - mean) ^ 2 to every array item
        arr = arr.map((k)=>{
        return (k - mean) ** 2
        })
        
            // Calculating the sum of updated array
        const sum = arr.reduce((acc, curr)=> acc + curr, 0);
            
        //    // Calculating the variance
        //    const variance = sum / arr.length
            
        // Returning the Standered deviation
        return Math.sqrt(sum / arr.length)
    }

}