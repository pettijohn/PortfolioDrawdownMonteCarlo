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

pub struct SimulationConfig {
    pub savings: f64,
    pub withdrawal_rate: f64,
    pub stocks: f64,
    pub bonds: f64,
    pub cash: f64,
    pub simulation_rounds: i32,
    pub simulation_years: i32,
    pub quantiles: i32,
}

struct SimulationSingleYear {
    starting_balance: f64,
    withdrawal: f64,
    ending_balance: f64,
    //growthRate: number;
    cumulative_inflation: f64,
    ending_balance_todays_dollars: f64,
    year: i32
}

pub fn simulation(simulation_config: SimulationConfig) -> std::io::Result<()> {
    let mut file = File::open("../data/historicalMarketData.json")?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    
    let historical_data: Vec<HistoricalMarketData> = serde_json::from_str(&contents).unwrap();
    println!("{:?}", &historical_data[0]);
    println!("There are {} years of data", &historical_data.len());

    'trial: for trial in 0..20 {
        // TODO - validate that stocks + bonds + cash == 1.0
        let mut single_run = Vec::<SimulationSingleYear>::new();
        let mut withdrawal = simulation_config.savings * simulation_config.withdrawal_rate;
        let initial_withdrawal = withdrawal;
        
        'year: for year in 0..(simulation_config.simulation_years) {
            
            // Pick a random year's performance 
            let rand_index = rand::random::<f64>();
            // TODO - does this floor() the int and produce an index of 0..49? 
            let year_index = (rand_index * *&historical_data.len() as f64).floor() as usize;
            let random_historical_year = &historical_data[year_index];

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

            withdrawal *= (1.0 + random_historical_year.cpi);
            let ending_balance = 
                ( starting_balance * simulation_config.stocks * (1.0 + random_historical_year.stocks)
                + starting_balance * simulation_config.bonds * (1.0 + random_historical_year.bonds)
                + starting_balance * simulation_config.cash * (1.0 + random_historical_year.cash)
                ) - withdrawal;

            let current_year = SimulationSingleYear {
                year: year,
                starting_balance: starting_balance,
                withdrawal: withdrawal,
                ending_balance: ending_balance,
                //cumulative_inflation: starting_inflation * (1.0 + random_historical_year.cpi),
                cumulative_inflation: withdrawal / initial_withdrawal,
                ending_balance_todays_dollars: ending_balance / (withdrawal / initial_withdrawal),
            };

            single_run.push(current_year);

        }

        let final_year = single_run.last().unwrap();
            // On th final year, print some data 
        println!("After {} years, the portfolio is worth {:.3}M, {:.3}M today's dollars.", final_year.year+1,
            final_year.ending_balance / 1_000_000.0, 
            final_year.ending_balance_todays_dollars / 1_000_000.0);
    }

    Ok(())
}