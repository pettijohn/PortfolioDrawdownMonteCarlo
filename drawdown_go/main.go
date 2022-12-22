package main

import (
	"fmt"
)

func main() {
	// ranges := determine_parallel_ranges(50, 8)
	// for i, v := range ranges {
	// 	fmt.Println(i, ":", v.Start, "->", v.End)
	// }
	// return

	simulation_config := SimulationConfig{
		Savings:           3000000,
		Withdrawal_rate:   0.04,
		Stocks:            0.7,
		Bonds:             0.2,
		Cash:              0.1,
		Simulation_rounds: 100000,
		Simulation_years:  50,
		Quantiles:         4,
	}

	stats := simulation(simulation_config)

	for year := 0; year < simulation_config.Simulation_years; year++ {
		stat := stats.years[year]
		fmt.Println(stat.Year, "Min", stat.Min, "Max", stat.Max)
	}
}
