package main

import (
	"math"
	"math/rand"
	"time"
)

/*
VOCABULARY

* Single Year - result after applying growth/expenses/inflation a single time to a single year
* Trial - a run of 50 single years, from a starting portfolio balance to 0 or infinity
* Simulation - 100k trials
* StatSingleYear - after computing stats, the results of a single year slice (all 100k records from year-n processed down into consumable stats)
* StatResults - All 50 years of StatSingleYears

*/

type HistoricalMarketData struct {
	Year   int     `json:"year"`
	Stocks float64 `json:"stocks"`
	Bonds  float64 `json:"bonds"`
	Cash   float64 `json:"cash"`
	Cpi    float64 `json:"cpi"`
}

type SimulationConfig struct {
	Savings          float64 `json:"savings"`
	WithdrawalRate   float64 `json:"withdrawalRate"`
	Stocks           float64 `json:"stocks"`
	Bonds            float64 `json:"bonds"`
	Cash             float64 `json:"cash"`
	SimulationRounds int     `json:"simulationRounds"`
	SimulationYears  int     `json:"simulationYears"`
	Quantiles        int     `json:"quantiles"`
}

type SingleYear struct {
	EndingBalance              float64
	EndingBalanceTodaysDollars float64
	Shortfall                  float64
	IsExhausted                bool
}

type Trial struct {
	Years []SingleYear
}

type SimulationShard struct {
	NominalByYear   [][]float64 `json:"nominalByYear"`
	AdjustedByYear  [][]float64 `json:"adjustedByYear"`
	ShortfallByYear [][]float64 `json:"shortfallByYear"`
	ExhaustedByYear [][]bool    `json:"exhaustedByYear"`
}

func ComputeSimulationShard(config SimulationConfig, historicalData []HistoricalMarketData) SimulationShard {
	rng := rand.New(rand.NewSource(time.Now().UnixNano()))
	simulationYears := config.SimulationYears
	shard := SimulationShard{
		NominalByYear:   make([][]float64, simulationYears),
		AdjustedByYear:  make([][]float64, simulationYears),
		ShortfallByYear: make([][]float64, simulationYears),
		ExhaustedByYear: make([][]bool, simulationYears),
	}

	for year := 0; year < simulationYears; year++ {
		shard.NominalByYear[year] = make([]float64, 0, config.SimulationRounds)
		shard.AdjustedByYear[year] = make([]float64, 0, config.SimulationRounds)
		shard.ShortfallByYear[year] = make([]float64, 0, config.SimulationRounds)
		shard.ExhaustedByYear[year] = make([]bool, 0, config.SimulationRounds)
	}

	for trialIndex := 0; trialIndex < config.SimulationRounds; trialIndex++ {
		trial := computeTrial(config, historicalData, rng)
		for year, singleYear := range trial.Years {
			shard.NominalByYear[year] = append(shard.NominalByYear[year], singleYear.EndingBalance)
			shard.AdjustedByYear[year] = append(shard.AdjustedByYear[year], singleYear.EndingBalanceTodaysDollars)
			shard.ShortfallByYear[year] = append(shard.ShortfallByYear[year], singleYear.Shortfall)
			shard.ExhaustedByYear[year] = append(shard.ExhaustedByYear[year], singleYear.IsExhausted)
		}
	}

	return shard
}

func computeTrial(config SimulationConfig, historicalData []HistoricalMarketData, rng *rand.Rand) Trial {
	trial := Trial{
		Years: make([]SingleYear, 0, config.SimulationYears),
	}
	withdrawal := config.Savings * config.WithdrawalRate
	initialWithdrawal := withdrawal

	for year := 0; year < config.SimulationYears; year++ {
		randomHistoricalYear := historicalData[rng.Intn(len(historicalData))]
		startingBalance := config.Savings
		if year > 0 {
			startingBalance = trial.Years[len(trial.Years)-1].EndingBalance
		}

		annualReturn := randomHistoricalYear.Stocks*config.Stocks +
			randomHistoricalYear.Bonds*config.Bonds +
			randomHistoricalYear.Cash*config.Cash

		shortfall := 0.0
		endingBalance := startingBalance
		if startingBalance < withdrawal {
			shortfall = withdrawal - startingBalance
			endingBalance = 0
		} else {
			endingBalance = math.Max(0, (startingBalance-withdrawal)*(1+annualReturn))
		}

		cumulativeInflation := withdrawal / initialWithdrawal
		trial.Years = append(trial.Years, SingleYear{
			EndingBalance:              endingBalance,
			EndingBalanceTodaysDollars: endingBalance / cumulativeInflation,
			Shortfall:                  shortfall,
			IsExhausted:                endingBalance == 0,
		})

		// This year's CPI affects the next year's withdrawal. The first
		// withdrawal remains the configured base amount.
		withdrawal *= 1 + randomHistoricalYear.Cpi
	}

	return trial
}
