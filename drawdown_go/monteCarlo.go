package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"os"
	"runtime"
	"sort"
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

type Range struct {
	Start, End int
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

// Break up size_of_work into degree_of_parallelism chunks, distributing the remainder as
// evenly as possible across the chunks. E.g. 50 units of work into 8 threads is 6.25 units
// per thread. The first n (n=remainder) threads get an additional unit of work:
// [0..7), [7..14), and the rest of the threads get 6 years
// each to process: [14..20), [20..26), ... [44..50).
func Determine_parallel_ranges(size_of_work int, degree_of_parallelism int) []Range {
	// If there is less work than threads available
	degree_of_parallelism = min(size_of_work, degree_of_parallelism)
	values_per_thread := size_of_work / degree_of_parallelism
	remainder := size_of_work % degree_of_parallelism
	fmt.Println("Remainder:", remainder)

	ranges := make([]Range, degree_of_parallelism)
	for thread_num := 0; thread_num < degree_of_parallelism; thread_num++ {
		range_start := (thread_num * values_per_thread) + min(thread_num, remainder)
		range_end := ((thread_num + 1) * values_per_thread) + min(thread_num+1, remainder)
		//ranges.push(range_start .. range_end);
		ranges[thread_num] = Range{
			Start: range_start,
			End:   range_end,
		}
	}

	return ranges
}

func compute_simulation(simulation_config SimulationConfig, historical_data []HistoricalMarketData) Simulation {
	// Compute 100k Trials in parallel, wait for them all to complete, append results to Simulation
	simulation := Simulation{}
	ranges := Determine_parallel_ranges(simulation_config.Simulation_rounds, runtime.GOMAXPROCS(0))

	c := make(chan Trial, simulation_config.Simulation_rounds)

	for _, r := range ranges {
		for i := r.Start; i < r.End; i++ {
			go func() {
				c <- compute_trial(simulation_config, historical_data)
			}()
		}
	}

	// for round := 0; round < simulation_config.Simulation_rounds; round++ {
	// 	go func() {
	// 		c <- compute_trial(simulation_config, historical_data)
	// 	}()
	// }

	for trial := 0; trial < simulation_config.Simulation_rounds; trial++ {
		// Order doesn't matter
		simulation.trials = append(simulation.trials, <-c)
	}
	fmt.Println("Completed", len(simulation.trials), "Trials")

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
	ranges := Determine_parallel_ranges(simulation_config.Simulation_years, runtime.GOMAXPROCS(0))

	c := make(chan StatsSingleYear)

	results := []StatsSingleYear{}

	for _, r := range ranges {

		go func(year_rage Range) {
			for year := year_rage.Start; year < year_rage.End; year++ {
				// Sort each of the fifty years and then compute quantiles  in a thread and sort by ending balance
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
				c <- stats
			}
		}(r)
	}
	for year := 0; year < simulation_config.Simulation_years; year++ {
		// Order matters; they arrive whenever each thread completes...
		results = append(results, <-c)
	}

	// ...so sort when done
	sort.Slice(results, func(i, j int) bool { return results[i].Year < results[j].Year })
	return results
}

// func StandardDeviation(values []float64) float64
// {
// 	float64 avg = values.Average();
// 	return Math.Sqrt(values.Average(v => Math.Pow(v - avg, 2)));
// }
