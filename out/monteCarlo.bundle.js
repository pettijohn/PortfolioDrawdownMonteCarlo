// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class MonteCarloInputs {
    years = 50;
    savings = 1000000;
    withdrawalRate = 0.04;
    stocks = 0.5;
    bonds = 0.3;
    cash = 0.2;
}
let historicalData;
if ("Deno" in window) {
    historicalData = JSON.parse(await Deno.readTextFile("./data/historicalMarketData.json"));
} else {
    historicalData = await (await fetch("./data/historicalMarketData.json")).json();
}
const MONTE_CARLO = {
    inputs: new MonteCarloInputs(),
    historicalData: historicalData,
    TOTAL_TRIALS: 100000,
    MAX_YEARS: 50
};
function runMonteCarlo(quantiles) {
    let total;
    let error;
    if (isNaN(MONTE_CARLO.inputs.years) || MONTE_CARLO.inputs.years < 5 || MONTE_CARLO.inputs.years > 50) {
        error = "Invalid years";
    }
    if (isNaN(MONTE_CARLO.inputs.withdrawalRate) || MONTE_CARLO.inputs.withdrawalRate > 0.2) {
        error = "Invalid withdrawal rate";
    }
    if (isNaN(MONTE_CARLO.inputs.savings) || MONTE_CARLO.inputs.savings === 0) {
        error = "Invalid savings";
    }
    if (isNaN(MONTE_CARLO.inputs.stocks) || isNaN(MONTE_CARLO.inputs.bonds) || isNaN(MONTE_CARLO.inputs.cash)) {
        error = "Invalid allocation";
    } else {
        total = MONTE_CARLO.inputs.stocks + MONTE_CARLO.inputs.bonds + MONTE_CARLO.inputs.cash;
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
        const trials = simulateDecumulation();
        trace("Simulation complete, computing stats.");
        const simulationStats1 = computeStats(trials, quantiles);
        return simulationStats1;
    } else {
        trace("SIMULATION FAILED");
        trace(error);
    }
    return null;
}
function trace(msg) {
    try {
        if (typeof console === "undefined") {
            return;
        }
        console.log(msg);
    } catch (_err) {}
}
function simulateDecumulation() {
    const trials = {};
    const initialWithdrawal = MONTE_CARLO.inputs.savings * MONTE_CARLO.inputs.withdrawalRate;
    for(let y = 1; y <= MONTE_CARLO.MAX_YEARS; y++){
        trials[y] = {};
    }
    for(let trial = 0; trial < MONTE_CARLO.TOTAL_TRIALS; trial++){
        let balance = MONTE_CARLO.inputs.savings;
        let withdrawal = initialWithdrawal;
        for(let year = 1; year <= MONTE_CARLO.MAX_YEARS; year++){
            const randomYear = Math.floor(Math.random() * MONTE_CARLO.historicalData.length);
            withdrawal *= 1 + MONTE_CARLO.historicalData[randomYear].cpi;
            const startingBalance = balance;
            const arr = MONTE_CARLO.historicalData[randomYear].stocks * MONTE_CARLO.inputs.stocks + MONTE_CARLO.historicalData[randomYear].bonds * MONTE_CARLO.inputs.bonds + MONTE_CARLO.historicalData[randomYear].cash * MONTE_CARLO.inputs.cash;
            if (balance < withdrawal) {
                balance -= withdrawal;
            } else {
                balance = (balance - withdrawal) * (1 + arr);
            }
            trials[year][trial] = {
                startingBalance: startingBalance,
                withdrawal: withdrawal,
                endingBalance: balance,
                growthRate: arr
            };
        }
    }
    return trials;
}
function computeStats(trials, quantiles) {
    const sortedTrials = [];
    if (quantiles < 2) throw "Quantiles too small.";
    for(let year = 1; year <= MONTE_CARLO.MAX_YEARS; year++){
        const resultsForYear = Object.values(trials[year]);
        resultsForYear.sort((t1, t2)=>{
            return t1.endingBalance - t2.endingBalance;
        });
        sortedTrials.push(resultsForYear);
    }
    const results = {};
    for(let year1 = 0; year1 <= MONTE_CARLO.MAX_YEARS; year1++){
        results[year1] = {
            min: MONTE_CARLO.inputs.savings,
            max: MONTE_CARLO.inputs.savings,
            mean: MONTE_CARLO.inputs.savings,
            median: MONTE_CARLO.inputs.savings,
            stddev: 0,
            quantiles: []
        };
        for(let q = 1; q < quantiles; q++){
            if (year1 === 0) {
                results[0].quantiles.push(MONTE_CARLO.inputs.savings);
            } else {
                let index = Math.floor(MONTE_CARLO.TOTAL_TRIALS * (q / quantiles));
                if (index >= MONTE_CARLO.TOTAL_TRIALS) {
                    index = MONTE_CARLO.TOTAL_TRIALS - 1;
                }
                results[year1].quantiles.push(sortedTrials[year1 - 1][index].endingBalance);
            }
        }
        if (year1 === 0) continue;
        results[year1].min = sortedTrials[year1 - 1][0].endingBalance;
        results[year1].median = sortedTrials[year1 - 1][Math.floor(MONTE_CARLO.TOTAL_TRIALS * 0.5)].endingBalance;
        results[year1].max = sortedTrials[year1 - 1][MONTE_CARLO.TOTAL_TRIALS - 1].endingBalance;
        const simYearTotal = sortedTrials[year1 - 1].reduce((acc, curr)=>acc + curr.endingBalance
        , 0);
        results[year1].mean = simYearTotal / sortedTrials[year1 - 1].length;
        results[year1].stddev = stddev(sortedTrials[year1 - 1].map((t)=>t.endingBalance
        ));
    }
    return results;
}
function stddev(arr) {
    const mean = arr.reduce((acc, curr)=>{
        return acc + curr;
    }, 0) / arr.length;
    arr = arr.map((k)=>{
        return (k - mean) ** 2;
    });
    const sum = arr.reduce((acc, curr)=>acc + curr
    , 0);
    return Math.sqrt(sum / arr.length);
}
const simulationStats = runMonteCarlo(4);
export { MonteCarloInputs as MonteCarloInputs };
export { runMonteCarlo as runMonteCarlo };
export { simulationStats as simulationStats };
