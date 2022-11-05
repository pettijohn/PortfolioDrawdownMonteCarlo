use std::fs::File;
use std::io::prelude::*;

use rand::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "lowercase")]
struct HistoricalMarketData {
        year: i32,
        stocks: f64,
        bonds: f64,
        cash: f64,
        cpi: f64
}

struct SimulationConfig {
    savings: f64,
    withdrawal_rate: f64,
    stocks: f64,
    bonds: f64,
    cash: f64,
    simulation_rounds: i32,
    simulation_years: i32,
    quantiles: i32,
}

struct SimulationSingleYear {
    stocks: f64,
    bonds: f64,
    cash: f64,
    year: i32,
}



fn main() -> std::io::Result<()> {
    let mut file = File::open("../data/historicalMarketData.json")?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    
    let historical_data: Vec<HistoricalMarketData> = serde_json::from_str(&contents).unwrap();
    println!("{:?}", &historical_data[0]);
    println!("There are {} years of data", &historical_data.len());

    let simulation_config = SimulationConfig {
        savings: 3000000.0,
        withdrawal_rate: 0.04,
        stocks: 0.7,
        bonds: 0.2,
        cash: 0.1,
        simulation_rounds: 100_000,
        simulation_years: 50,
        quantiles: 10
    };

    // TODO - validate that stocks + bonds + cash == 1.0
    let mut single_run = Vec::<SimulationSingleYear>::new();
    for year in 0..=(simulation_config.simulation_years) {

        if year == 0 {
            single_run.push(SimulationSingleYear {
                stocks: simulation_config.savings * simulation_config.stocks,
                bonds: simulation_config.savings * simulation_config.bonds,
                cash: simulation_config.savings * simulation_config.stocks,
                year: 0,
            });
            // only set up the 0th year with starting balances 
            continue; 
        }
        
        // Pick a random year's performance 
        let rand_index = rand::random::<f64>();
        // TODO - does this floor() the int and produce an index of 0..89? 
        let year_index = (rand_index * *&historical_data.len() as f64).floor() as usize;
        let year_performance = &historical_data[year_index];

        // Get previous year balance, apply random year perf to it, push it
        let prev_year = single_run.last().unwrap();
        
        single_run.push(SimulationSingleYear {
            stocks: prev_year.stocks * (1.0 + year_performance.stocks),
            bonds: prev_year.bonds * (1.0 + year_performance.bonds),
            cash: prev_year.cash * (1.0 + simulation_config.cash),
            // TODO - CPI 
            // TODO - draw down expenses 
            year: year,
        });

        if year == simulation_config.simulation_years {
            let final_year = single_run.last().unwrap();
            // On th final year, print some data 
            println!("After {} years, the portfolio is worth {}.", final_year.year,
                final_year.stocks + final_year.bonds + final_year.cash);       
        }
    }

    Ok(())
}