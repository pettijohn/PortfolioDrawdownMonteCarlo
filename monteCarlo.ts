//import { DataItem, stringify } from "https://deno.land/std@0.126.0/encoding/csv.ts";

/*
VOCABULARY

* Single Year - result after applying growth/expenses/inflation a single time to a single year
* Trial - a run of 50 single years, from a starting portfolio balance to 0 or infinity
* Simulation - 100k trials 
* StatSingleYear - after computing stats, the results of a single year slice (all 100k records from year-n processed down into consumable stats)
* StatResults - All 50 years of StatSingleYears

*/

type HistoricalMarketData = {
    year: number;
    stocks: number;
    bonds: number;
    cash: number;
    cpi: number;
}

export interface SimulationConfig {
    savings: number;
    withdrawalRate: number;
    stocks: number;
    bonds: number;
    cash: number;
    simulationRounds: number;
    simulationYears: number;
    quantiles: number;
}

/** A single year's simulation trial */
type SingleYear = {
    startingBalance: number;
    withdrawal: number;
    endingBalance: number;
    growthRate: number;
    cumulativeInflation: number;
    endingBalanceTodaysDollars: number;
}

/** A 2D array where each year has 100k trials */
type Simulation = { [simYear: number]: { [trialNum: number]: SingleYear } };


/** A collection of all of the statistics  */
export type StatResults = { [simYear: number]: StatSingleYear };

/** Results from a single year, the stats of the 100k simulations */
type StatSingleYear = {
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

export class MonteCarlo {
    constructor() {

        this.updateSimulationState = this.updateSimulationState.bind(this);

        this.updateSimulationState(SimulationState.Stopped);
    }
    historicalData?: HistoricalMarketData[];

    onSimulationStateChange?: (event: SimulationState) => void;

    updateSimulationState(newState: SimulationState) {
        if (this.onSimulationStateChange)
            this.onSimulationStateChange(newState);
    }

    async computeSimulation(inputs: SimulationConfig): Promise<StatResults | null> {
        this.updateSimulationState(SimulationState.Initializing);
        //Lazy initialize historical data
        if (!this.historicalData) {
            if ("Deno" in window) {
                this.historicalData = JSON.parse(await Deno.readTextFile("./data/historicalMarketData.json")) as HistoricalMarketData[];
            } else {
                this.historicalData = (await ((await fetch("./data/historicalMarketData.json")).json())) as HistoricalMarketData[];
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
            const simulationStats = this.computeStats(inputs, trials, inputs.quantiles);
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
    simulateDrawdown(inputs: SimulationConfig, historicalData: HistoricalMarketData[]): Simulation {
        
        const trials: Simulation = {};
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

                // Weight the growth per asset class relative to portfolio split; compute the rate of return for the year with the given portfolio structure
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
    computeStats(simulationConfig: SimulationConfig, simulation: Simulation): StatResults {
        const sortedTrials: SingleYear[][] = [];
        
        if (simulationConfig.quantiles < 2) throw "Quantiles too small.";

        for (let year = 1; year <= simulationConfig.simulationYears; year++) {
            const resultsForYear = Object.values(simulation[year]);
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
            resultsForYear.sort((t1, t2) => { return t1.endingBalance - t2.endingBalance });

            sortedTrials.push(resultsForYear);
        }

        const results: StatResults = {};

        for (let year = 0; year <= simulationConfig.simulationYears; year++) {
            // Compute quantiles
            // Initialize results. 
            // Leave thes values for year 0. 
            results[year] = {
                min: simulationConfig.savings,
                max: simulationConfig.savings,
                mean: simulationConfig.savings,
                median: simulationConfig.savings,
                stddev: 0,
                quantiles: []
            };
            for (let q = 1; q < simulationConfig.quantiles; q++) {
                if (year === 0) {
                    // Year 0 is always starting balance 
                    results[0].quantiles.push(simulationConfig.savings);
                }
                else {
                    // Compute the index into the results array, q% at a time, and push the ending balance
                    let index = Math.floor(simulationConfig.simulationRounds * (q / simulationConfig.quantiles));
                    //check an overflow, and adjust max index
                    if (index >= simulationConfig.simulationRounds) {
                        index = simulationConfig.simulationRounds - 1;
                    }
                    //trace(`Year ${year} / Trial ${index}`);
                    results[year].quantiles.push(sortedTrials[year-1][index].endingBalance);
                }
            }

            if (year === 0) continue;

            // Median is the middlemost value
            results[year].min = sortedTrials[year-1][0].endingBalance;
            results[year].median = sortedTrials[year-1][Math.floor(simulationConfig.simulationRounds * 0.5)].endingBalance;
            results[year].max = sortedTrials[year - 1][(simulationConfig.simulationRounds - 1)].endingBalance;
            
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