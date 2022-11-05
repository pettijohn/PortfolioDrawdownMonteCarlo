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
    starting_balance: f64,
    withdrawal: f64,
    ending_balance: f64,
    //growthRate: number;
    cumulative_inflation: f64,
    //ending_balance_todays_dollars: f64,
    year: i32
}



fn main() -> std::io::Result<()> {
    let mut file = File::open("../data/historicalMarketData.json")?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    
    let historical_data: Vec<HistoricalMarketData> = serde_json::from_str(&contents).unwrap();
    println!("{:?}", &historical_data[0]);
    println!("There are {} years of data", &historical_data.len());

    let simulation_config = SimulationConfig {
        savings: 3_000_000.0,
        withdrawal_rate: 0.04,
        stocks: 0.7,
        bonds: 0.2,
        cash: 0.1,
        simulation_rounds: 100_000,
        simulation_years: 50,
        quantiles: 10
    };

    'trial: for trial in 0..20 {
        // TODO - validate that stocks + bonds + cash == 1.0
        let mut single_run = Vec::<SimulationSingleYear>::new();
        'year: for year in 0..=(simulation_config.simulation_years) {
            
            // Pick a random year's performance 
            let rand_index = rand::random::<f64>();
            // TODO - does this floor() the int and produce an index of 0..89? 
            let year_index = (rand_index * *&historical_data.len() as f64).floor() as usize;
            let year_performance = &historical_data[year_index];

            let starting_balance: f64;
            let starting_inflation: f64;

            if year == 0 {
                starting_balance = simulation_config.savings;
                starting_inflation = 1.0;
            }
            else {
                let prev_year = single_run.last().unwrap();
                starting_balance = prev_year.ending_balance;
                starting_inflation = prev_year.cumulative_inflation;
            }

            let withdrawal = simulation_config.savings * simulation_config.withdrawal_rate;

            let current_year = SimulationSingleYear {
                year: year,
                starting_balance: starting_balance,
                withdrawal: withdrawal,
                ending_balance: 
                    ( starting_balance * simulation_config.stocks * (1.0 + year_performance.stocks)
                    + starting_balance * simulation_config.bonds * (1.0 + year_performance.bonds)
                    + starting_balance * simulation_config.cash * (1.0 + year_performance.cash)
                    ) - withdrawal,
                cumulative_inflation: starting_inflation * (1.0 + year_performance.cpi)
            };

            single_run.push(current_year);

        }

        let final_year = single_run.last().unwrap();
            // On th final year, print some data 
        println!("After {} years, the portfolio is worth {}M.", final_year.year,
            final_year.ending_balance / 1_000_000.0);       
    }

    Ok(())
}