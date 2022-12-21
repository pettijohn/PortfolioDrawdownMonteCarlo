package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"os"
	"sort"
	"sync"
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
	Savings           float64
	Withdrawal_rate   float64
	Stocks            float64
	Bonds             float64
	Cash              float64
	Simulation_rounds int
	Simulation_years  int
	Quantiles         int
}

type SingleYear struct {
	starting_balance float64
	withdrawal       float64
	ending_balance   float64
	//growthRate: number;
	cumulative_inflation          float64
	ending_balance_todays_dollars float64
	year                          int
}

type Trial struct {
	years []SingleYear
}

type Simulation struct {
	trials []Trial
}

/** Results from a single year, the stats of the 100k simulations */
type StatsSingleYear struct {
	Year      int
	Min       float64
	Max       float64
	Mean      float64
	Median    float64
	Stddev    float64
	Quantiles []float64
}

type StatResults struct {
	years []StatsSingleYear
}

func simulation(simulation_config SimulationConfig) StatResults {
	bytes, err := os.ReadFile("../data/historicalMarketData.json")
	if err != nil {
		panic("could not open historical data json")
	}

	historical_data := []HistoricalMarketData{}
	json.Unmarshal(bytes, &historical_data)

	simulation_results := compute_simulation(simulation_config, historical_data)
	stats := compute_stats(simulation_config, simulation_results)
	return StatResults{years: stats}
}

func compute_simulation(simulation_config SimulationConfig, historical_data []HistoricalMarketData) Simulation {
	// Compute 100k Trials on 8 threads, append results to Simulation
	simulation := Simulation{}

	c := make(chan Trial, simulation_config.Simulation_rounds)
	var wg sync.WaitGroup
	wg.Add(simulation_config.Simulation_rounds)

	for round := 0; round < simulation_config.Simulation_rounds; round++ {
		go func(ch chan Trial) {
			ch <- compute_trial(simulation_config, historical_data)
			wg.Done()
		}(c)
	}

	wg.Wait()
	close(c)

	for trial := range c {
		simulation.trials = append(simulation.trials, trial)
	}
	fmt.Printf("Completed %d Trials", len(simulation.trials))

	return simulation
}

func compute_trial(simulation_config SimulationConfig, historical_data []HistoricalMarketData) Trial {
	// TODO - validate that stocks + bonds + cash == 1.0
	trial := Trial{}
	withdrawal := simulation_config.Savings * simulation_config.Withdrawal_rate
	initial_withdrawal := withdrawal

	for year := 0; year < simulation_config.Simulation_years; year++ {

		// Pick a random year's performance
		rand_index := rand.Float64()
		year_index := int(rand_index * float64(len(historical_data)))
		random_historical_year := historical_data[year_index]

		var starting_balance float64

		if year == 0 {
			starting_balance = simulation_config.Savings
		} else {
			prev_year := trial.years[len(trial.years)-1]
			starting_balance = prev_year.ending_balance
		}

		// Weight the growth per asset class relative to portfolio split; compute the rate of return for the year with the given portfolio classes
		arr := random_historical_year.Stocks*simulation_config.Stocks + random_historical_year.Bonds*simulation_config.Bonds + random_historical_year.Cash*simulation_config.Cash

		ending_balance := starting_balance

		withdrawal *= 1.0 + random_historical_year.Cpi
		if ending_balance < withdrawal {
			// If we run out of money, keep decrementing balance, but don't compute growth rate of assets.
			ending_balance -= withdrawal
		} else {
			// Apply growth factor to balance at end of year
			ending_balance = (ending_balance - withdrawal) * (1.0 + arr)
		}

		current_year := SingleYear{
			starting_balance:              starting_balance,
			withdrawal:                    withdrawal,
			ending_balance:                ending_balance,
			cumulative_inflation:          withdrawal / initial_withdrawal,
			ending_balance_todays_dollars: ending_balance / (withdrawal / initial_withdrawal),
			year:                          year,
		}

		trial.years = append(trial.years, current_year)
	}
	return trial
}

func compute_stats(simulation_config SimulationConfig, simulation Simulation) []StatsSingleYear {
	results := []StatsSingleYear{}
	for year := 0; year < simulation_config.Simulation_years; year++ {
		// Sort each of the fifty years and then compute quantiles  in a thread and rost by ending balance
		// year_slice =: simulation.trials
		// 	.Select((trial) => trial.years[year] )
		// 	.OrderBy((a) =>  a.ending_balance ).ToArray();

		year_slice := []SingleYear{}
		for t := 0; t < simulation_config.Simulation_rounds; t++ {
			year_slice = append(year_slice, simulation.trials[t].years[year])
		}
		sort.Slice(year_slice, func(i, j int) bool {
			return year_slice[i].ending_balance < year_slice[j].ending_balance
		})

		stats := StatsSingleYear{
			Year:      year,
			Min:       year_slice[0].ending_balance,
			Max:       year_slice[(simulation_config.Simulation_rounds - 1)].ending_balance,
			Mean:      0, //year_slice.Select(y => y.ending_balance).Average(),
			Median:    year_slice[(simulation_config.Simulation_rounds / 2)].ending_balance,
			Quantiles: nil, //new List<float64>(),
			Stddev:    0,   //StandardDeviation(year_slice.Select(y => y.ending_balance))
		}
		results = append(results, stats)
		//results.Add(stats)
	}

	//return results.OrderBy(r => r.year).ToArray();
	return results
}

// func StandardDeviation(values []float64) float64
// {
// 	float64 avg = values.Average();
// 	return Math.Sqrt(values.Average(v => Math.Pow(v - avg, 2)));
// }
