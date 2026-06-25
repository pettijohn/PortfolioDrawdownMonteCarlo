// monteCarlo.ts
var SimulationState = /* @__PURE__ */ function(SimulationState2) {
  SimulationState2["Stopped"] = "Click Run to start the simulation";
  SimulationState2["Initializing"] = "Initializing";
  SimulationState2["Running"] = "Running";
  SimulationState2["Analyzing"] = "Analyzing results";
  return SimulationState2;
}({});
var MonteCarlo = class {
  constructor() {
    this.updateSimulationState = this.updateSimulationState.bind(this);
    this.updateSimulationState(SimulationState.Stopped);
  }
  historicalData;
  onSimulationStateChange;
  updateSimulationState(newState) {
    if (this.onSimulationStateChange) this.onSimulationStateChange(newState);
  }
  async computeSimulation(simulationConfig) {
    this.updateSimulationState(SimulationState.Initializing);
    await this.initializeHistoricalData();
    const error = this.validateAndNormalizeConfig(simulationConfig);
    if (error === void 0) {
      const historicalData = this.historicalData;
      if (!historicalData) throw new Error("Error initializing historical data");
      this.updateSimulationState(SimulationState.Running);
      const trials = this.simulateDrawdown(simulationConfig, historicalData);
      this.updateSimulationState(SimulationState.Analyzing);
      this.trace("Simulation complete, computing stats.");
      const simulationStats = this.computeStats(simulationConfig, trials);
      this.updateSimulationState(SimulationState.Stopped);
      return simulationStats;
    } else {
      this.trace("SIMULATION FAILED");
      this.trace(error);
    }
    return null;
  }
  async computeSimulationShard(simulationConfig, simulationRounds) {
    this.updateSimulationState(SimulationState.Initializing);
    await this.initializeHistoricalData();
    const shardConfig = {
      ...simulationConfig,
      simulationRounds
    };
    const error = this.validateAndNormalizeConfig(shardConfig);
    if (error !== void 0) {
      throw new Error(error);
    }
    const historicalData = this.historicalData;
    if (!historicalData) throw new Error("Error initializing historical data");
    this.updateSimulationState(SimulationState.Running);
    return this.simulateDrawdownShard(shardConfig, historicalData);
  }
  async initializeHistoricalData() {
    if (this.historicalData) {
      return;
    }
    if ("Deno" in globalThis) {
      this.historicalData = JSON.parse(await Deno.readTextFile("./data/historicalMarketData.json"));
    } else {
      this.historicalData = await (await fetch(this.historicalDataUrl())).json();
    }
  }
  validateAndNormalizeConfig(simulationConfig) {
    let total;
    let error;
    if (isNaN(simulationConfig.withdrawalRate) || simulationConfig.withdrawalRate > 0.2) {
      error = "Invalid withdrawal rate";
    }
    if (isNaN(simulationConfig.savings) || simulationConfig.savings === 0) {
      error = "Invalid savings";
    }
    if (isNaN(simulationConfig.stocks) || isNaN(simulationConfig.bonds) || isNaN(simulationConfig.cash)) {
      error = "Invalid allocation";
    } else {
      total = simulationConfig.stocks + simulationConfig.bonds + simulationConfig.cash;
      if (total > 0) {
        simulationConfig.stocks /= total;
        simulationConfig.bonds /= total;
        simulationConfig.cash /= total;
      } else {
        error = "Invalid allocation";
      }
    }
    return error;
  }
  historicalDataUrl() {
    if ("document" in globalThis) {
      return "./data/historicalMarketData.json";
    }
    return "../data/historicalMarketData.json";
  }
  /** Console log and/or swallow any errors */
  trace(msg) {
    try {
      if (typeof console === "undefined") {
        return;
      }
      console.log(msg);
    } catch (_err) {
    }
  }
  /*
      -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  
      SIMULATION model
  
      -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      */
  //type SimResults = number[][];
  /** Run the Monte Carlo Simulation and return a 2D array; for each year#, 100k trials with the balance */
  simulateDrawdown(simulationConfig, historicalData) {
    const trials = {};
    const initialWithdrawal = simulationConfig.savings * simulationConfig.withdrawalRate;
    for (let y = 0; y < simulationConfig.simulationYears; y++) {
      trials[y] = {};
    }
    for (let trial = 0; trial < simulationConfig.simulationRounds; trial++) {
      if (trial > 0 && trial % 1e3 === 0) {
        this.updateSimulationState(`Running trial ${trial}`);
      }
      let withdrawal = initialWithdrawal;
      for (let year = 0; year < simulationConfig.simulationYears; year++) {
        const yearIndex = Math.floor(Math.random() * historicalData.length);
        const randomHistoricalYear = historicalData[yearIndex];
        let startingBalance = 0;
        if (year === 0) {
          startingBalance = simulationConfig.savings;
        } else {
          const prevYear = trials[year - 1][trial];
          startingBalance = prevYear.endingBalance;
        }
        const arr = randomHistoricalYear.stocks * simulationConfig.stocks + randomHistoricalYear.bonds * simulationConfig.bonds + randomHistoricalYear.cash * simulationConfig.cash;
        let endingBalance = startingBalance;
        let shortfall = 0;
        if (startingBalance < withdrawal) {
          shortfall = withdrawal - startingBalance;
          endingBalance = 0;
        } else {
          endingBalance = Math.max(0, (startingBalance - withdrawal) * (1 + arr));
        }
        trials[year][trial] = {
          startingBalance,
          withdrawal,
          endingBalance,
          growthRate: arr,
          cumulativeInflation: withdrawal / initialWithdrawal,
          endingBalanceTodaysDollars: endingBalance / (withdrawal / initialWithdrawal),
          shortfall,
          isExhausted: endingBalance === 0
        };
        withdrawal *= 1 + randomHistoricalYear.cpi;
      }
    }
    return trials;
  }
  simulateDrawdownShard(simulationConfig, historicalData) {
    const nominalByYear = [];
    const adjustedByYear = [];
    const shortfallByYear = [];
    const exhaustedByYear = [];
    const initialWithdrawal = simulationConfig.savings * simulationConfig.withdrawalRate;
    for (let year = 0; year < simulationConfig.simulationYears; year++) {
      nominalByYear[year] = [];
      adjustedByYear[year] = [];
      shortfallByYear[year] = [];
      exhaustedByYear[year] = [];
    }
    for (let trial = 0; trial < simulationConfig.simulationRounds; trial++) {
      let withdrawal = initialWithdrawal;
      let startingBalance = simulationConfig.savings;
      for (let year = 0; year < simulationConfig.simulationYears; year++) {
        const yearIndex = Math.floor(Math.random() * historicalData.length);
        const randomHistoricalYear = historicalData[yearIndex];
        const annualReturn = randomHistoricalYear.stocks * simulationConfig.stocks + randomHistoricalYear.bonds * simulationConfig.bonds + randomHistoricalYear.cash * simulationConfig.cash;
        let endingBalance = startingBalance;
        let shortfall = 0;
        if (startingBalance < withdrawal) {
          shortfall = withdrawal - startingBalance;
          endingBalance = 0;
        } else {
          endingBalance = Math.max(0, (startingBalance - withdrawal) * (1 + annualReturn));
        }
        const cumulativeInflation = withdrawal / initialWithdrawal;
        nominalByYear[year].push(endingBalance);
        adjustedByYear[year].push(endingBalance / cumulativeInflation);
        shortfallByYear[year].push(shortfall);
        exhaustedByYear[year].push(endingBalance === 0);
        startingBalance = endingBalance;
        withdrawal *= 1 + randomHistoricalYear.cpi;
      }
    }
    return {
      nominalByYear,
      adjustedByYear,
      shortfallByYear,
      exhaustedByYear
    };
  }
  /** Of the 100k results, sort each year's balances, then compute statistics. */
  computeStats(simulationConfig, simulation) {
    if (simulationConfig.quantiles < 2) throw "Quantiles too small.";
    const results = {};
    for (let year = 0; year < simulationConfig.simulationYears; year++) {
      this.updateSimulationState(`Analyzing year ${year + 1} of ${simulationConfig.simulationYears}`);
      const resultsForYear = Object.values(simulation[year]);
      results[year] = {
        ...this.computeStatSeries(simulationConfig, resultsForYear.map((t) => t.endingBalance)),
        inflationAdjusted: this.computeStatSeries(simulationConfig, resultsForYear.map((t) => t.endingBalanceTodaysDollars)),
        ruinProbability: resultsForYear.filter((t) => t.isExhausted).length / resultsForYear.length,
        meanShortfall: resultsForYear.reduce((acc, curr) => acc + curr.shortfall, 0) / resultsForYear.length
      };
    }
    return results;
  }
  computeStatSeries(simulationConfig, values) {
    const sortedValues = [
      ...values
    ].sort((v1, v2) => v1 - v2);
    const quantiles = [];
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
  percentile(sortedValues, percentile) {
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
  stddev(arr) {
    const mean = arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / arr.length;
    arr = arr.map((k) => {
      return (k - mean) ** 2;
    });
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return Math.sqrt(sum / arr.length);
  }
};

// monteCarloShardWorker.ts
self.onmessage = async (event) => {
  const message = event.data;
  if (message.type !== "runShard") {
    return;
  }
  try {
    const simulation = new MonteCarlo();
    const shard = await simulation.computeSimulationShard(message.config, message.simulationRounds);
    self.postMessage({
      type: "shardResult",
      requestId: message.requestId,
      shardIndex: message.shardIndex,
      shard
    });
  } catch (error) {
    self.postMessage({
      type: "shardError",
      requestId: message.requestId,
      shardIndex: message.shardIndex,
      message: error instanceof Error ? error.message : String(error)
    });
  }
};
