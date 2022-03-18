//import { DataItem, stringify } from "https://deno.land/std@0.126.0/encoding/csv.ts";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export function DrawChart(ctx: CanvasRenderingContext2D) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{ // 0
                label: "My First dataset",
                backgroundColor: 'rgba(255, 0, 255, 0.5)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
                fill: '+1',
            },
            { // 1
                label: "My Second dataset",
                backgroundColor: 'rgb(255, 255, 132)',
                borderColor: 'rgb(255, 255, 132)',
                data: [1, 12, 8, 20, 22, 33, 55],
            },
            ]
        },

        // Configuration options go here
        options: {}
    });
}

export class MonteCarloInputs {
    years: number; // int
    savings: number; // int
    withdrawalRate: number; // float (percent)
    stocks: number; // float (percent)
    bonds: number; // float (percent)
    cash: number; // float (percent)
}

type HistoricalDataItem = {
    year: number;
    stocks: number;
    bonds: number;
    cash: number;
    cpi: number;
}

type MonteCarloSimulation = {
    historicalData: Array<HistoricalDataItem>;
    inputs: MonteCarloInputs;
    TOTAL_TRIALS: number;
    MAX_YEARS: number;
}


// Set simulation defaults
export const MONTE_CARLO: MonteCarloSimulation = {
    historicalData: (await ((await fetch("./data/historicalMarketData.json")).json())) as HistoricalDataItem[],
    inputs: {
        years: 30,
        savings: 100000,
        withdrawalRate: 0.045,
        stocks: 0.50,
        bonds: 0.30,
        cash: 0.20
    },
    TOTAL_TRIALS: 255,
    MAX_YEARS: 10
};

type SimResults = number[][];
type SimYear = SimResults[number];
type SimRunBalance = SimYear[number];

export async function runMonteCarlo(): Promise<SimResults | null> {
    const data: MonteCarloInputs = (await ((await fetch("./data/userInput.json")).json())) as MonteCarloInputs;
    
    let total: number;
    let error: string | undefined;

    MONTE_CARLO.inputs.years = data.years; 
    MONTE_CARLO.inputs.savings = data.savings;
    MONTE_CARLO.inputs.withdrawalRate = data.withdrawalRate;
    MONTE_CARLO.inputs.stocks = data.stocks;
    MONTE_CARLO.inputs.bonds = data.bonds;
    MONTE_CARLO.inputs.cash = data.cash;
    if (isNaN(MONTE_CARLO.inputs.years) || (MONTE_CARLO.inputs.years < 5) || (MONTE_CARLO.inputs.years > 50)) {
        error = "Invalid years";
    }
    if (isNaN(MONTE_CARLO.inputs.withdrawalRate) || (MONTE_CARLO.inputs.withdrawalRate > 0.2)) {
        error = "Invalid withdrawal rate";
    }
    if (isNaN(MONTE_CARLO.inputs.savings) || (MONTE_CARLO.inputs.savings === 0)) {
        error = "Invalid savings";
    }
    if (isNaN(MONTE_CARLO.inputs.stocks) || isNaN(MONTE_CARLO.inputs.bonds) || isNaN(MONTE_CARLO.inputs.cash)) {
        error = "Invalid allocation";
    } else {
        // Sum the constituent parts - they should total to 1.
        total = MONTE_CARLO.inputs.stocks + MONTE_CARLO.inputs.bonds + MONTE_CARLO.inputs.cash;
        // Normalize to %s in case. 
        if (total > 0) {
            MONTE_CARLO.inputs.stocks /= total;
            MONTE_CARLO.inputs.bonds /= total;
            MONTE_CARLO.inputs.cash /= total;
        } else {
            error = "Invalid allocation";
        }
    }

    if (error === undefined) {
        trace("savings: " + MONTE_CARLO.inputs.savings + " years: " + MONTE_CARLO.inputs.years + " withdrawalRate: " + MONTE_CARLO.inputs.withdrawalRate + " stocks: " + MONTE_CARLO.inputs.stocks + " bonds: " + MONTE_CARLO.inputs.bonds + " cash: " + MONTE_CARLO.inputs.cash);
        return simulateDecumulation();
    }
    else {
        trace("SIMULATION FAILED");
        trace(error);
    }
    return null;
}

// Console log and/or swallow any errors
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

function simulateDecumulation(): SimResults {
    "use strict";

    let
        averageRateOfReturn : number,
        periods: number,
        withdrawal: number,
        i: number,
        t: number,
        randomYear: number,
        balance: number,
        arr: number;

    averageRateOfReturn = 0;
    periods = 0;
    const trials: SimResults = [];
    const probabilities: number[] = [1];
    const initialWithdrawal = MONTE_CARLO.inputs.savings * MONTE_CARLO.inputs.withdrawalRate;

    for (i = 1; i <= MONTE_CARLO.MAX_YEARS; i++) {
        // a 2D array. [year#][simulation#]
        // Initialize each year to empty array 
        trials[i] = [];
        // Array of year#
        probabilities[i] = 0;
    }

    for (t = 0; t < MONTE_CARLO.TOTAL_TRIALS; t++) {
        balance = MONTE_CARLO.inputs.savings;
        withdrawal = initialWithdrawal;
        for (i = 1; i <= MONTE_CARLO.MAX_YEARS; i++) {
            // Pick a random year to use its asset performance 
            randomYear = Math.floor(Math.random() * MONTE_CARLO.historicalData.length);
            withdrawal *= (1 + MONTE_CARLO.historicalData[randomYear].cpi);
            if (balance < withdrawal) {
                balance -= withdrawal;
            } else {
                arr = 1;
                periods++;
                arr = MONTE_CARLO.historicalData[randomYear].stocks * MONTE_CARLO.inputs.stocks + MONTE_CARLO.historicalData[randomYear].bonds * MONTE_CARLO.inputs.bonds + MONTE_CARLO.historicalData[randomYear].cash * MONTE_CARLO.inputs.cash;
                averageRateOfReturn += (arr);
                balance = (balance - withdrawal) * (1 + arr);
                // Count the number of times we still have money in this year 
                probabilities[i]++;
            }
            // add a small amount of randomness; otherwise, the quickSort will cause recursion errors
            trials[i].push(balance + Math.random() / 100);
        }
    }

    averageRateOfReturn /= periods;
    trace(`Average rate of return through all simulations: ${averageRateOfReturn}`);

    return trials;
}

const results = await runMonteCarlo();
if (results == null) throw "No results"; 

const columns = new Array<string>();
columns.push("Trial");
for (let y = 0; y < MONTE_CARLO.MAX_YEARS; y++) {
    columns.push((y + 2022).toString());
}

const transformedResults = new Array<Record<string, number>>();
for (let t = 0; t < MONTE_CARLO.TOTAL_TRIALS; t++) {
    let r: Record<string, number> = { "Trial": t };
    r["2022"] = MONTE_CARLO.inputs.savings;
    for (let y = 1; y <= MONTE_CARLO.MAX_YEARS; y++) {
        r[(y + 2022).toString()] = results[y][t];
    }
    transformedResults.push(r);
}

// const outCsv = await stringify(transformedResults, columns, { headers: true });
// await Deno.writeTextFile("./montecarlo-output.csv", outCsv, { append: false });
