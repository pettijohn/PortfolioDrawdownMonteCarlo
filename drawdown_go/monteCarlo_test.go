package main

import "testing"

func TestComputeTrialClampsNegativeEndingBalanceToZero(t *testing.T) {
	config := SimulationConfig{
		Savings:          100,
		WithdrawalRate:   0.5,
		Stocks:           1,
		SimulationRounds: 1,
		SimulationYears:  2,
	}
	historicalData := []HistoricalMarketData{
		{Stocks: -0.5, Cpi: 0},
	}

	shard := ComputeSimulationShard(config, historicalData)

	if got := shard.NominalByYear[1][0]; got != 0 {
		t.Fatalf("expected exhausted portfolio to clamp at zero, got %v", got)
	}
	if got := shard.ShortfallByYear[1][0]; got != 25 {
		t.Fatalf("expected shortfall to be tracked separately, got %v", got)
	}
}

func TestComputeTrialDoesNotInflateFirstYearWithdrawal(t *testing.T) {
	config := SimulationConfig{
		Savings:          1000,
		WithdrawalRate:   0.1,
		Cash:             1,
		SimulationRounds: 1,
		SimulationYears:  2,
	}
	historicalData := []HistoricalMarketData{
		{Cash: 0, Cpi: 0.5},
	}

	shard := ComputeSimulationShard(config, historicalData)

	if got := shard.NominalByYear[0][0]; got != 900 {
		t.Fatalf("expected first year to use base withdrawal before CPI, got %v", got)
	}
	if got := shard.NominalByYear[1][0]; got != 750 {
		t.Fatalf("expected second year withdrawal to include prior CPI, got %v", got)
	}
	if got := shard.AdjustedByYear[0][0]; got != 900 {
		t.Fatalf("expected first year inflation-adjusted balance to match nominal, got %v", got)
	}
	if got := shard.AdjustedByYear[1][0]; got != 500 {
		t.Fatalf("expected second year balance to be adjusted by cumulative inflation, got %v", got)
	}
}
