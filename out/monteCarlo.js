const MONTE_CARLO = {
    historicalData: (await ((await fetch("./data/historicalMarketData.json")).json())),
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
async function runMonteCarlo() {
    const data = (await ((await fetch("./data/userInput.json")).json()));
    let total;
    let error;
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
    }
    else {
        total = MONTE_CARLO.inputs.stocks + MONTE_CARLO.inputs.bonds + MONTE_CARLO.inputs.cash;
        if (total > 0) {
            MONTE_CARLO.inputs.stocks /= total;
            MONTE_CARLO.inputs.bonds /= total;
            MONTE_CARLO.inputs.cash /= total;
        }
        else {
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
function trace(msg) {
    try {
        if (typeof console === "undefined") {
            return;
        }
        console.log(msg);
    }
    catch (_err) {
    }
}
function simulateDecumulation() {
    "use strict";
    let averageRateOfReturn, periods, withdrawal, i, t, randomYear, balance, arr;
    averageRateOfReturn = 0;
    periods = 0;
    const trials = [];
    const probabilities = [1];
    const initialWithdrawal = MONTE_CARLO.inputs.savings * MONTE_CARLO.inputs.withdrawalRate;
    for (i = 1; i <= MONTE_CARLO.MAX_YEARS; i++) {
        trials[i] = [];
        probabilities[i] = 0;
    }
    for (t = 0; t < MONTE_CARLO.TOTAL_TRIALS; t++) {
        balance = MONTE_CARLO.inputs.savings;
        withdrawal = initialWithdrawal;
        for (i = 1; i <= MONTE_CARLO.MAX_YEARS; i++) {
            randomYear = Math.floor(Math.random() * MONTE_CARLO.historicalData.length);
            withdrawal *= (1 + MONTE_CARLO.historicalData[randomYear].cpi);
            if (balance < withdrawal) {
                balance -= withdrawal;
            }
            else {
                arr = 1;
                periods++;
                arr = MONTE_CARLO.historicalData[randomYear].stocks * MONTE_CARLO.inputs.stocks + MONTE_CARLO.historicalData[randomYear].bonds * MONTE_CARLO.inputs.bonds + MONTE_CARLO.historicalData[randomYear].cash * MONTE_CARLO.inputs.cash;
                averageRateOfReturn += (arr);
                balance = (balance - withdrawal) * (1 + arr);
                probabilities[i]++;
            }
            trials[i].push(balance + Math.random() / 100);
        }
    }
    averageRateOfReturn /= periods;
    trace(`Average rate of return through all simulations: ${averageRateOfReturn}`);
    return trials;
}
const results = await runMonteCarlo();
if (results == null)
    throw "No results";
const columns = new Array();
columns.push("Trial");
for (let y = 0; y < MONTE_CARLO.MAX_YEARS; y++) {
    columns.push((y + 2022).toString());
}
const transformedResults = new Array();
for (let t = 0; t < MONTE_CARLO.TOTAL_TRIALS; t++) {
    let r = { "Trial": t };
    r["2022"] = MONTE_CARLO.inputs.savings;
    for (let y = 1; y <= MONTE_CARLO.MAX_YEARS; y++) {
        r[(y + 2022).toString()] = results[y][t];
    }
    transformedResults.push(r);
}
export {};
//# sourceMappingURL=monteCarlo.js.map