use std::iter::empty;
use std::{fs::File, collections::BTreeMap};
use std::io::prelude::*;
use std::ops::{Range, Rem, Add, Sub, Div, Mul};
use std::sync::mpsc;
use std::{thread, result};

use rand::prelude::*;
use serde::de::IntoDeserializer;
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

/** A collection of all of the statistics  */
//export type StatResultsAll = { [simYear: number]: StatResultSingle };

/** Results from a single year, the stats of the 100k simulations */
struct StatResult {
    pub year: i32,
    pub min: f64,
    pub max: f64,
    pub mean: f64,
    pub median: f64,
    pub stddev: f64,
    pub quantiles: Vec<f64>,
}


/*
VOCABULARY

* Single Year - result after applying growth/expenses/inflation a single time to a single year
* Trial - a run of 50 single years, from a starting portfolio balance to 0 or infinity
* Simulation - 100k trials 
* StatResult - after computing stats, the results of a single year slice (all 100k records from year-n processed down into consumable stats)

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
    // Compute 100k Trials on 8 threads, append results to Simuluation
    let (tx, rx) = mpsc::channel::<Trial>();

    let parallel_ranges = determine_parallel_ranges(0..simulation_config.simulation_rounds as usize, 
        thread::available_parallelism().unwrap().get());

    let mut simulation = Simulation::new();

    thread::scope(|s| {

        // Create n threads 
        for range_for_thread in parallel_ranges {
            //println!("Computing range {:?}", range_for_thread);
            let tx1 = tx.clone();

            s.spawn( move || {
                // Each thread computes trials_per_thread Trials 
                for _ in range_for_thread {
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

fn determine_parallel_ranges<T: Ord+Eq+Sub<Output=T>+Add<Output=T>+Div<Output=T>+Mul<Output=T>+Rem<Output=T>+Into<usize>+From<usize>, 
    U: Into<T> + Into<usize>>
    (data_range: Range<T>, degree_of_parallelism: U) -> Vec::<Range<T>> {
    
        // Distribute the remainder across the first few threads.
    // E.g. 50 units of work / 8 threads = 6.25 years per thread, or 6R2. 
    // The first n (n=remainder) threads get an additional unit of work:
    // 0..7, 7..14, and the rest of the threads get 6 years 
    // each to process: 14..20, 20..26, ... 44..50. 

    let size_of_work = data_range.end - data_range.start;
    // If there is less work than threads available
    let dop_u: usize = degree_of_parallelism.into();
    let dop_u: usize = dop_u.min(size_of_work.into());
    let dop_t: T = degree_of_parallelism.into();
    let vals_per_thread = size_of_work / dop_t;
    let remainder = size_of_work % dop_t;
    
    let mut ranges = Vec::<Range<T>>::with_capacity(dop_u);
    for thread_num in 0..dop_u {
        let thread_num = T::from(thread_num);
        let range_start = data_range.start + (thread_num*vals_per_thread) + (thread_num.min(remainder));
        let range_end = data_range.start + ((thread_num + T::from(1))*vals_per_thread) + (thread_num + T::from(1)).min(remainder);
        ranges.push(range_start .. range_end);
    }

    //println!("{:?}", ranges);
    ranges
}

fn compute_stats(simulation_config: &SimulationConfig, simulation: &Simulation) -> Vec<StatResult> {
    let (tx, rx) = mpsc::channel::<StatResult>();

    // Distribute 50 years into 8 units of work...6.25 years each, or 7, 7, 6, 6, 6, 6, 6, 6 years each thread. 
    let parallel_ranges = determine_parallel_ranges(0..simulation_config.simulation_years as usize, 
        thread::available_parallelism().unwrap().get());

    thread::scope(|s| {
        for years_range in parallel_ranges {
            let tx1 = tx.clone();
            s.spawn(move || {
                for year in years_range {
                    // Sort each of the fifty years and then compute quantiles  in a thread
                    let mut year_slice = simulation.trials.iter()
                        .map(|trial| { &trial.years[year] }).collect::<Vec<&SingleYear>>();

                    year_slice.sort_unstable_by(|a, b| { a.ending_balance.partial_cmp(&b.ending_balance).unwrap() });

                    let stats = StatResult {
                        year: year as i32,
                        min: year_slice[0].ending_balance,
                        max: year_slice[(simulation_config.simulation_rounds-1) as usize].ending_balance,
                        mean: year_slice.iter().fold(0.0, |acc, x| acc + x.ending_balance) / simulation_config.simulation_rounds as f64,
                        median: year_slice[(simulation_config.simulation_rounds / 2) as usize].ending_balance,
                        quantiles: Vec::<f64>::new(),
                        stddev: 0.0,
                    };

                    let _ = tx1.send(stats);
                }

            });
        }
        drop(tx);
    });
    
    let mut results = Vec::<StatResult>::with_capacity(simulation_config.simulation_years as usize);
    for received in rx {
        results.push(received);
    }

    results.sort_by(|a, b| {a.year.cmp(&b.year)});
    
    for r in &results {
        println!("{}: mean {} / min {} / max {}", r.year, r.mean, r.min, r.max);
    }

    results

}

pub fn simulation(simulation_config: SimulationConfig) -> std::io::Result<()> {

    assert_eq!(determine_parallel_ranges(0..50, 8), vec![0..7, 7..14, 14..20, 20..26, 26..32, 32..38, 38..44, 44..50]);
    assert_eq!(determine_parallel_ranges(0..3, 4), vec![0..1, 1..2, 2..3]);
    assert_eq!(determine_parallel_ranges(0..7, 4), vec![0..2, 2..4, 4..6, 6..7]);
    assert_eq!(determine_parallel_ranges(10..17, 4), vec![10..12, 12..14, 14..16, 16..17]);
    


    let mut file = File::open("../data/historicalMarketData.json")?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    let historical_data: Vec<HistoricalMarketData> = serde_json::from_str(&contents).unwrap();
    
    let simulation_results = compute_simulation(&simulation_config, &historical_data);
    let _stats = compute_stats(&simulation_config, &simulation_results);

    Ok(())
}