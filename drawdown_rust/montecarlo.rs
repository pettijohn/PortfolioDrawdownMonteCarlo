use std::iter::empty;
use std::{fs::File, collections::BTreeMap};
use std::io::prelude::*;
use std::ops::{Range, Rem, Add, Sub, Div};
use std::sync::mpsc;
use std::{thread, result};

use rand::prelude::*;
use rayon::prelude::*;
use serde::{Deserialize, Serialize};

/*
VOCABULARY

* Single Year - result after applying growth/expenses/inflation a single time to a single year
* Trial - a run of 50 single years, from a starting portfolio balance to 0 or infinity
* Simulation - 100k trials 
* StatSingleYear - after computing stats, the results of a single year slice (all 100k records from year-n processed down into consumable stats)
* StatResults - All 50 years of StatSingleYears

*/

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


struct SingleYear {
    starting_balance: f64,
    withdrawal: f64,
    ending_balance: f64,
    //growthRate: number;
    cumulative_inflation: f64,
    ending_balance_todays_dollars: f64,
    year: i32
}

struct Trial {
    years: Vec<SingleYear>
}

impl Trial {
    fn new() -> Self {
        Self {
            years: Vec::<SingleYear>::new(),
        }
    }
}

struct Simulation {
    trials: Vec<Trial>
}

impl Simulation {
    fn new() -> Self {
        Self {
            trials: Vec::<Trial>::new(),
        }
    }
}

/** Results from a single year, the stats of the 100k simulations */
pub struct StatsSingleYear {
    pub year: i32,
    pub min: f64,
    pub max: f64,
    pub mean: f64,
    pub median: f64,
    pub stddev: f64,
    pub quantiles: Vec<f64>,
}

pub struct StatResults {
    pub years: Vec<StatsSingleYear>,
}
impl StatResults {
    fn new() -> Self {
        Self {
            years: Vec::<StatsSingleYear>::new(),
        }
    }
}


pub fn simulation(simulation_config: SimulationConfig) -> StatResults {
    let mut file = File::open("../data/historicalMarketData.json").expect("Unable to OPEN historicalMarketData.json!");
    let mut contents = String::new();
    file.read_to_string(&mut contents).expect("Unable to READ historicalMarketData.json!");
    let historical_data: Vec<HistoricalMarketData> = serde_json::from_str(&contents).unwrap();
    
    let simulation_results = compute_simulation(&simulation_config, &historical_data);
    let years = compute_stats(&simulation_config, &simulation_results);
    StatResults { years: years }
}

fn compute_simulation(simulation_config: &SimulationConfig, historical_data: &Vec<HistoricalMarketData>) -> Simulation {
    // Compute 100k Trials on 8 threads, append results to Simuluation
    let mut simulation = Simulation::new();

    let trial_range = 0..simulation_config.simulation_rounds;
    let mut trial_results: Vec::<Trial> = trial_range.into_par_iter()
        .map(|_| {
            compute_trial(simulation_config, historical_data)
        })
        .collect();
    
    simulation.trials.append(&mut trial_results);

    // let final_year = trial.years.last().unwrap();
    //         // On th final year, print some data 
    //     println!("After {} years, the portfolio is worth {:.3}M, {:.3}M today's dollars.", final_year.year+1,
    //         final_year.ending_balance / 1_000_000.0, 
    //         final_year.ending_balance_todays_dollars / 1_000_000.0);

    println!("Completed {} Trials", simulation.trials.len());

    simulation

}
fn compute_trial(simulation_config: &SimulationConfig, historical_data: &Vec<HistoricalMarketData>) -> Trial {
    // TODO - validate that stocks + bonds + cash == 1.0
    let mut trial = Trial::new();
    let mut withdrawal = simulation_config.savings * simulation_config.withdrawal_rate;
    let initial_withdrawal = withdrawal;
    
    'year: for year in 0..(simulation_config.simulation_years) {
        
        // Pick a random year's performance 
        let rand_index = rand::random::<f64>();
        // TODO - does this floor() the int and produce an index of 0..49? 
        let year_index = (rand_index * *&historical_data.len() as f64).floor() as usize;
        let random_historical_year = &historical_data[year_index];

        let starting_balance: f64;


        if year == 0 {
            starting_balance = simulation_config.savings;
        }
        else {
            let prev_year = trial.years.last().unwrap();
            starting_balance = prev_year.ending_balance;
        }

        // Weight the growth per asset class relative to portfolio split; compute the rate of return for the year with the given portfolio structure
        let arr = random_historical_year.stocks * simulation_config.stocks
            + random_historical_year.bonds * simulation_config.bonds
            + random_historical_year.cash * simulation_config.cash;

        let mut ending_balance = starting_balance;

        withdrawal *= 1.0 + random_historical_year.cpi;
        if ending_balance < withdrawal { 
            // If we run out of money, keep decrementing balance, but don't compute growth rate of assets. 
            ending_balance -= withdrawal;
        }
        else {
            // Apply growth factor to balance at end of year
            ending_balance = (ending_balance - withdrawal) * (1.0 + arr);
        }

        let current_year = SingleYear {
            year: year,
            starting_balance: starting_balance,
            withdrawal: withdrawal,
            ending_balance: ending_balance,
            cumulative_inflation: withdrawal / initial_withdrawal,
            ending_balance_todays_dollars: ending_balance / (withdrawal / initial_withdrawal),
        };

        trial.years.push(current_year);
    }
    trial

}



fn compute_stats(simulation_config: &SimulationConfig, simulation: &Simulation) -> Vec<StatsSingleYear> {

    let years_range = 0..simulation_config.simulation_years as usize;
    let results = years_range.into_par_iter()
        .map(|year| {
            // Sort each of the fifty years and then compute quantiles  in a thread
            let mut year_slice = simulation.trials.iter()
            .map(|trial| { &trial.years[year] }).collect::<Vec<&SingleYear>>();

            year_slice.par_sort_unstable_by(|a, b| { a.ending_balance.partial_cmp(&b.ending_balance).unwrap() });

            let stats = StatsSingleYear {
                year: year as i32,
                min: year_slice[0].ending_balance,
                max: year_slice[(simulation_config.simulation_rounds-1) as usize].ending_balance,
                mean: year_slice.iter().fold(0.0, |acc, x| acc + x.ending_balance) / simulation_config.simulation_rounds as f64,
                median: year_slice[(simulation_config.simulation_rounds / 2) as usize].ending_balance,
                quantiles: Vec::<f64>::new(),
                stddev: 0.0,
            };

            stats
        })
        .collect();


    results

}

