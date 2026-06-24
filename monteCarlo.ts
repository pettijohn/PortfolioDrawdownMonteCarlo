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
    shortfall: number;
    isExhausted: boolean;
}

/** A 2D array where each year has 100k trials */
type Simulation = { [simYear: number]: { [trialNum: number]: SingleYear } };


/** A collection of all of the statistics  */
export type StatResults = { [simYear: number]: StatSingleYear };

type StatSeries = {
    min: number,
    max: number,
    mean: number,
    median: number,
    p10: number,
    p25: number,
    p75: number,
    p90: number,
    stddev: number,
    quantiles: number[]
}

/** Results from a single year, the stats of the 100k simulations */
export type StatSingleYear = StatSeries & {
    inflationAdjusted: StatSeries,
    ruinProbability: number,
    meanShortfall: number
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

    async computeSimulation(simulationConfig: SimulationConfig): Promise<StatResults | null> {
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

        if (isNaN(simulationConfig.withdrawalRate) || (simulationConfig.withdrawalRate > 0.2)) {
            error = "Invalid withdrawal rate";
        }
        if (isNaN(simulationConfig.savings) || (simulationConfig.savings === 0)) {
            error = "Invalid savings";
        }
        if (isNaN(simulationConfig.stocks) || isNaN(simulationConfig.bonds) || isNaN(simulationConfig.cash)) {
            error = "Invalid allocation";
        } else {
            // Sum the constituent parts - they should total to 1.
            total = simulationConfig.stocks + simulationConfig.bonds + simulationConfig.cash;
            // Normalize to %s in case. 
            if (total > 0) {
                simulationConfig.stocks /= total;
                simulationConfig.bonds /= total;
                simulationConfig.cash /= total;
            } else {
                error = "Invalid allocation";
            }
        }

        if (error === undefined) {
            this.updateSimulationState(SimulationState.Running);
            const trials = this.simulateDrawdown(simulationConfig, this.historicalData);
            
            this.updateSimulationState(SimulationState.Analyzing);
            this.trace("Simulation complete, computing stats.");
            const simulationStats = this.computeStats(simulationConfig, trials);
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
    simulateDrawdown(simulationConfig: SimulationConfig, historicalData: HistoricalMarketData[]): Simulation {
        
        const trials: Simulation = {};
        const initialWithdrawal = simulationConfig.savings * simulationConfig.withdrawalRate;

        // Initialize the 50 years
        for (let y = 0; y < simulationConfig.simulationYears; y++) {
            trials[y] = {};
        }

        // Run 100k trials, 50 years per trial. 
        for (let trial = 0; trial < simulationConfig.simulationRounds; trial++) {
            let withdrawal = initialWithdrawal;
            for (let year = 0; year < simulationConfig.simulationYears; year++) {
                // Pick a random year to use its asset performance 
                const yearIndex = Math.floor(Math.random() * historicalData.length);
                const randomHistoricalYear = historicalData[yearIndex];
                let startingBalance = 0;
                if (year === 0) {
                    startingBalance = simulationConfig.savings;
                }
                else {
                    const prevYear = trials[year-1][trial];
                    startingBalance = prevYear.endingBalance;
                }

                // Weight the growth per asset class relative to portfolio split; compute the rate of return for the year with the given portfolio structure
                const arr = randomHistoricalYear.stocks * simulationConfig.stocks
                    + randomHistoricalYear.bonds * simulationConfig.bonds
                    + randomHistoricalYear.cash * simulationConfig.cash;
                
                let endingBalance = startingBalance;
                let shortfall = 0;
                if (startingBalance < withdrawal) {
                    shortfall = withdrawal - startingBalance;
                    endingBalance = 0;
                } else {
                    // Apply growth factor to balance at end of year
                    endingBalance = Math.max(0, (startingBalance - withdrawal) * (1 + arr));

                }
                trials[year][trial] = {
                    startingBalance: startingBalance,
                    withdrawal: withdrawal,
                    endingBalance: endingBalance,
                    growthRate: arr,
                    cumulativeInflation: withdrawal / initialWithdrawal,
                    endingBalanceTodaysDollars: endingBalance / (withdrawal / initialWithdrawal),
                    shortfall: shortfall,
                    isExhausted: endingBalance === 0
                };

                // This year's CPI affects the next year's withdrawal. The first
                // withdrawal remains the configured base amount.
                withdrawal *= (1 + randomHistoricalYear.cpi);
            }
        }

        return trials;
    }




    /** Of the 100k results, sort each year's balances, then compute statistics. */
    computeStats(simulationConfig: SimulationConfig, simulation: Simulation): StatResults {
        if (simulationConfig.quantiles < 2) throw "Quantiles too small.";

        const results: StatResults = {};

        for (let year = 0; year < simulationConfig.simulationYears; year++) {
            const resultsForYear = Object.values(simulation[year]);
            results[year] = {
                ...this.computeStatSeries(
                    simulationConfig,
                    resultsForYear.map(t => t.endingBalance)
                ),
                inflationAdjusted: this.computeStatSeries(
                    simulationConfig,
                    resultsForYear.map(t => t.endingBalanceTodaysDollars)
                ),
                ruinProbability: resultsForYear.filter(t => t.isExhausted).length / resultsForYear.length,
                meanShortfall: resultsForYear.reduce((acc, curr) => acc + curr.shortfall, 0) / resultsForYear.length
            };
        }
        
        
        return results;
    }

    computeStatSeries(simulationConfig: SimulationConfig, values: number[]): StatSeries {
        const sortedValues = [...values].sort((v1, v2) => v1 - v2);
        const quantiles: number[] = [];

        for (let q = 1; q < simulationConfig.quantiles; q++) {
            let index = Math.floor(simulationConfig.simulationRounds * (q / simulationConfig.quantiles));
            if (index >= simulationConfig.simulationRounds) {
                index = simulationConfig.simulationRounds - 1;
            }
            quantiles.push(sortedValues[index]);
        }

        const total = sortedValues.reduce((acc, curr) => acc + curr, 0);

        return {
            min: sortedValues[0],
            max: sortedValues[simulationConfig.simulationRounds - 1],
            mean: total / sortedValues.length,
            median: this.percentile(sortedValues, 0.5),
            p10: this.percentile(sortedValues, 0.1),
            p25: this.percentile(sortedValues, 0.25),
            p75: this.percentile(sortedValues, 0.75),
            p90: this.percentile(sortedValues, 0.9),
            stddev: this.stddev(sortedValues),
            quantiles
        };
    }

    percentile(sortedValues: number[], percentile: number): number {
        if (sortedValues.length === 0) {
            return 0;
        }

        const index = (sortedValues.length - 1) * percentile;
        const lowerIndex = Math.floor(index);
        const upperIndex = Math.ceil(index);

        if (lowerIndex === upperIndex) {
            return sortedValues[lowerIndex];
        }

        const weight = index - lowerIndex;
        return sortedValues[lowerIndex] * (1 - weight) + sortedValues[upperIndex] * weight;
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
