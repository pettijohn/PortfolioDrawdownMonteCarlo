//import { DataItem, stringify } from "https://deno.land/std@0.126.0/encoding/csv.ts";


// export class MonteCarloInputs {
//     savings = 1000000; // int
//     withdrawalRate = 0.04; // float (percent)
//     stocks = 0.5; // float (percent)
//     bonds = 0.3; // float (percent)
//     cash = 0.2; // float (percent)
// }

export interface MonteCarloInputs {
    savings: number;
    withdrawalRate: number;
    stocks: number;
    bonds: number;
    cash: number;
    simulationRounds: number;
}

type HistoricalDataItem = {
    year: number;
    stocks: number;
    bonds: number;
    cash: number;
    cpi: number;
}


const MONTE_CARLO = {
    historicalData: null as HistoricalDataItem[] | null,
    MAX_YEARS: 50
}

export async function runMonteCarlo(inputs: MonteCarloInputs, quantiles: number): Promise<StatResults | null> {

    if ("Deno" in window) {
        MONTE_CARLO.historicalData = JSON.parse(await Deno.readTextFile("./data/historicalMarketData.json")) as HistoricalDataItem[];
    } else {
        MONTE_CARLO.historicalData = (await ((await fetch("./data/historicalMarketData.json")).json())) as HistoricalDataItem[];
    }

    
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
        trace("savings: " + inputs.savings + " withdrawalRate: " + inputs.withdrawalRate + " stocks: " + inputs.stocks + " bonds: " + inputs.bonds + " cash: " + inputs.cash);
        const trials = simulateDecumulation(inputs);
        
        trace("Simulation complete, computing stats.");
        const simulationStats = computeStats(inputs, trials, quantiles);
        //console.log(JSON.stringify(deciles));

        return simulationStats;
    }
    else {
        trace("SIMULATION FAILED");
        trace(error);
    }
    return null;
}

/** Console log and/or swallow any errors */
function trace(msg: string) {
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

type SimResult = {
    startingBalance: number;
    withdrawal: number;
    endingBalance: number;
    growthRate: number;
    cumulativeInflation: number;
    endingBalanceTodaysDollars: number;
}

/** A 2D array where each year has 100k trials */
type SimResults = { [simYear: number]: { [trialNum: number]: SimResult} };

/** Run the Monte Carlo Simulation and return a 2D array; for each year#, 100k trials with the balance */
function simulateDecumulation(inputs: MonteCarloInputs): SimResults {
    if (MONTE_CARLO.historicalData === null) throw "Historical data not initialized";
    
    const trials: SimResults = {};
    const initialWithdrawal = inputs.savings * inputs.withdrawalRate;

    // Initialize the 50 years
    for (let y = 1; y <= MONTE_CARLO.MAX_YEARS; y++) {
        trials[y] = {};
    }

    // Run 100k trials, 50 years per trial. 
    for (let trial = 0; trial < inputs.simulationRounds; trial++) {
        let balance = inputs.savings;
        let withdrawal = initialWithdrawal;
        for (let year = 1; year <= MONTE_CARLO.MAX_YEARS; year++) {
            // Pick a random year to use its asset performance 
            const randomYear = Math.floor(Math.random() * MONTE_CARLO.historicalData.length);
            // Adjust withdrawal amount this year for inflation 
            withdrawal *= (1 + MONTE_CARLO.historicalData[randomYear].cpi);
            const startingBalance = balance;

            // Weight the growth per asset class relative to portfolio split
            const arr = MONTE_CARLO.historicalData[randomYear].stocks * inputs.stocks
                + MONTE_CARLO.historicalData[randomYear].bonds * inputs.bonds
                + MONTE_CARLO.historicalData[randomYear].cash * inputs.cash;
            
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

/** Results from a single year, the stats of the 100k simulations */
type StatResult = {
    min: number,
    max: number,
    mean: number,
    median: number,
    stddev: number,
    quantiles: number[]
}

export type StatResults = { [simYear: number]: StatResult };

/** Of the 100k results, sort each year's endingBalance, then, compute statistics.  */
function computeStats(inputs: MonteCarloInputs, trials: SimResults, quantiles: number): StatResults {
    const sortedTrials: SimResult[][] = [];
    
    if (quantiles < 2) throw "Quantiles too small.";

    for (let year = 1; year <= MONTE_CARLO.MAX_YEARS; year++) {
        const resultsForYear = Object.values(trials[year]);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
        resultsForYear.sort((t1, t2) => { return t1.endingBalance - t2.endingBalance });

        sortedTrials.push(resultsForYear);
    }

    const results: StatResults = {};

    for (let year = 0; year <= MONTE_CARLO.MAX_YEARS; year++) {
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
        results[year].stddev = stddev(sortedTrials[year - 1].map(t => t.endingBalance));
    }
    
    
    return results;
}

function stddev(arr: number[]){
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

