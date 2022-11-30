mod montecarlo;

fn main() -> std::io::Result<()> {
    let simulation_config = montecarlo::SimulationConfig {
        savings: 3_000_000.0,
        withdrawal_rate: 0.04,
        stocks: 0.7,
        bonds: 0.2,
        cash: 0.1,
        simulation_rounds: 100_000,
        simulation_years: 50,
        quantiles: 10
    };

    let stat_results = montecarlo::simulation(simulation_config);
    for result in stat_results.years {
        println!("{}: Min {} / Max {} / Avg {}M", result.year, result.min, result.max, (result.median/1000000.0).floor());
    }

    Ok(())
}