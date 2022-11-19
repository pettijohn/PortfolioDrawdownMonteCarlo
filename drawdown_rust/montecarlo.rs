use std::{fs::File, collections::BTreeMap};
use std::io::prelude::*;
use std::ops::Range;
use std::sync::mpsc;
use std::thread;

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

/*
VOCABULARY

* Single Year - result after applying growth/expenses/inflation a single time to a single year
* Trial - a run of 50 single years, from a starting portfolio balance to 0 or infinity
* Simulation - 100k trials 

*/

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
        let starting_inflation: f64;


        if year == 0 {
            starting_balance = simulation_config.savings;
            starting_inflation = 1.0;
        }
        else {
            let prev_year = trial.years.last().unwrap();
            starting_balance = prev_year.ending_balance;
            starting_inflation = prev_year.cumulative_inflation;
        }

        withdrawal *= 1.0 + random_historical_year.cpi;
        let ending_balance = 
            ( starting_balance * simulation_config.stocks * (1.0 + random_historical_year.stocks)
            + starting_balance * simulation_config.bonds * (1.0 + random_historical_year.bonds)
            + starting_balance * simulation_config.cash * (1.0 + random_historical_year.cash)
            ) - withdrawal;

        let current_year = SingleYear {
            year: year,
            starting_balance: starting_balance,
            withdrawal: withdrawal,
            ending_balance: ending_balance,
            //cumulative_inflation: starting_inflation * (1.0 + random_historical_year.cpi),
            cumulative_inflation: withdrawal / initial_withdrawal,
            ending_balance_todays_dollars: ending_balance / (withdrawal / initial_withdrawal),
        };

        trial.years.push(current_year);
    }
    trial

}

fn compute_simulation(simulation_config: &SimulationConfig, historical_data: &Vec<HistoricalMarketData>) -> Simulation {
    // Compute 100k Trials on 4 threads, append results to Simuluation
    let (tx, rx) = mpsc::channel::<Trial>();

    let degree_of_parallelism = thread::available_parallelism().unwrap().get() as i32;
    // This will have a rounding error up op to DoP, but I don't care
    let trials_per_thread = simulation_config.simulation_rounds / degree_of_parallelism;
    let mut simulation = Simulation::new();

    thread::scope(|s| {

        // Create n threads 
        for _ in 0..degree_of_parallelism {
            let tx1 = tx.clone();

            s.spawn( move || {
                // Each thread computes trials_per_thread Trials 
                for _ in 0..trials_per_thread {
                    _ = tx1.send(compute_trial(simulation_config, historical_data));
                }
                    
            });

        }

        // Explicitly drop the original reference because it's never used
        // Clones in each thread go out of scope when done sending data
        drop(tx);

        // Collect all of the trials in simulation
        for received in rx {
            simulation.trials.push(received);
        }

    });

    // let final_year = trial.years.last().unwrap();
    //         // On th final year, print some data 
    //     println!("After {} years, the portfolio is worth {:.3}M, {:.3}M today's dollars.", final_year.year+1,
    //         final_year.ending_balance / 1_000_000.0, 
    //         final_year.ending_balance_todays_dollars / 1_000_000.0);

    println!("Completed {} Trials", simulation.trials.len());

    simulation

}

fn compute_stats(simulation_config: &SimulationConfig, simulation: &Simulation) {
    // Multithreaded comms 
    let (tx, rx) = mpsc::channel::<Vec<&SingleYear>>();

    let degree_of_parallelism = thread::available_parallelism().unwrap().get() as i32;
    // Divide up the work
    let years_per_thread = simulation_config.simulation_years / degree_of_parallelism;
    

    thread::scope(|s| {
        for thread_num in 0..degree_of_parallelism {
            let tx1 = tx.clone();
            s.spawn(move || {
                let years_range: Range<usize>;
                // Determine which years this thread is responsible for
                if thread_num == degree_of_parallelism - 1 {
                    //special case - the last thread gets its normal allotment plus the remainder 
                    years_range = (thread_num*years_per_thread) as usize .. simulation_config.simulation_years as usize;
                }
                else {
                    years_range = (thread_num*years_per_thread) as usize .. ((thread_num+1)*years_per_thread) as usize;
                }
                println!("Years range: {:?}", years_range);
                
                for year in years_range {
                    // Sort each of the fifty years and then compute quantiles  in a thread
                    let mut year_slice = simulation.trials.iter()
                        .map(|trial| { &trial.years[year] }).collect::<Vec<&SingleYear>>();

                    year_slice.sort_unstable_by(|a, b| { a.ending_balance.partial_cmp(&b.ending_balance).unwrap() });

                    let _ = tx1.send(year_slice);
                }

            });
        }
        drop(tx);
    });
    
    for received in rx {
        println!("Got data with {} sorted ", received.len());
    }

}

pub fn simulation(simulation_config: SimulationConfig) -> std::io::Result<()> {
    let mut file = File::open("../data/historicalMarketData.json")?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    let historical_data: Vec<HistoricalMarketData> = serde_json::from_str(&contents).unwrap();
    
    let simulation_results = compute_simulation(&simulation_config, &historical_data);
    compute_stats(&simulation_config, &simulation_results);

    Ok(())
}