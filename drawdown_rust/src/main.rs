use montecarlo::algorithm;

fn main() -> std::io::Result<()> {
    let simulation_config = algorithm::SimulationConfig {
        savings: 3_000_000.0,
        withdrawal_rate: 0.04,
        stocks: 0.7,
        bonds: 0.2,
        cash: 0.1,
        simulation_rounds: 100_000,
        simulation_years: 50,
        quantiles: 10
    };

    println!("savings: {} withdrawalRate: {} stocks: {}, bonds: {} cash: {}", 
        simulation_config.savings, simulation_config.withdrawal_rate, simulation_config.stocks, simulation_config.bonds, simulation_config.cash);
    let stat_results = algorithm::simulation(simulation_config);
    for result in stat_results.years {
        println!("{}: Min {}M / Max {}M / Avg {}M, / Median {}M / Stddev {}M", result.year, (result.min/1000000.0).floor(), 
            (result.max/1000000.0).floor(), (result.mean/1000000.0).floor(), (result.median/1000000.0).floor(), (result.stddev/1000000.0).floor());
    }

    Ok(())
}