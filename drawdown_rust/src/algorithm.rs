use rand::prelude::*;
use rayon::prelude::*;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

use crate::historicaldata;

#[derive(Clone, Debug, Deserialize, Serialize)]
#[serde(rename_all = "lowercase")]
struct HistoricalMarketData {
    year: i32,
    stocks: f64,
    bonds: f64,
    cash: f64,
    cpi: f64,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
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

#[derive(Clone)]
struct SingleYear {
    ending_balance: f64,
    ending_balance_todays_dollars: f64,
    shortfall: f64,
    is_exhausted: bool,
}

struct Trial {
    years: Vec<SingleYear>,
}

impl Trial {
    fn new() -> Self {
        Self { years: Vec::new() }
    }
}

struct Simulation {
    trials: Vec<Trial>,
}

#[derive(Serialize)]
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

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct SimulationShard {
    nominal_by_year: Vec<Vec<f64>>,
    adjusted_by_year: Vec<Vec<f64>>,
    shortfall_by_year: Vec<Vec<f64>>,
    exhausted_by_year: Vec<Vec<bool>>,
}

pub fn simulation(simulation_config: SimulationConfig) -> StatResults {
    let historical_data: Vec<HistoricalMarketData> =
        serde_json::from_str(historicaldata::json_string()).unwrap();

    let simulation_results = compute_simulation(&simulation_config, &historical_data);
    let years = compute_stats(&simulation_config, &simulation_results);
    StatResults { years }
}

#[wasm_bindgen]
pub fn run_simulation_shard(config: JsValue, simulation_rounds: u32) -> Result<JsValue, JsValue> {
    let mut simulation_config: SimulationConfig = serde_wasm_bindgen::from_value(config)
        .map_err(|error| JsValue::from_str(&error.to_string()))?;
    simulation_config.simulation_rounds = simulation_rounds as i32;

    let historical_data: Vec<HistoricalMarketData> =
        serde_json::from_str(historicaldata::json_string())
            .map_err(|error| JsValue::from_str(&error.to_string()))?;
    let simulation = compute_simulation_sequential(&simulation_config, &historical_data);
    let shard = simulation_to_shard(&simulation_config, &simulation);

    serde_wasm_bindgen::to_value(&shard).map_err(|error| JsValue::from_str(&error.to_string()))
}

fn compute_simulation(
    simulation_config: &SimulationConfig,
    historical_data: &[HistoricalMarketData],
) -> Simulation {
    let trial_range = 0..simulation_config.simulation_rounds;
    let trials = trial_range
        .into_par_iter()
        .map(|_| compute_trial(simulation_config, historical_data))
        .collect();

    Simulation { trials }
}

fn compute_simulation_sequential(
    simulation_config: &SimulationConfig,
    historical_data: &[HistoricalMarketData],
) -> Simulation {
    let trials = (0..simulation_config.simulation_rounds)
        .map(|_| compute_trial(simulation_config, historical_data))
        .collect();

    Simulation { trials }
}

fn compute_trial(
    simulation_config: &SimulationConfig,
    historical_data: &[HistoricalMarketData],
) -> Trial {
    let mut trial = Trial::new();
    let mut withdrawal = simulation_config.savings * simulation_config.withdrawal_rate;
    let initial_withdrawal = withdrawal;
    let mut rng = thread_rng();

    for year in 0..simulation_config.simulation_years {
        let random_historical_year = &historical_data[rng.gen_range(0..historical_data.len())];
        let starting_balance = if year == 0 {
            simulation_config.savings
        } else {
            trial.years.last().unwrap().ending_balance
        };

        let annual_return = random_historical_year.stocks * simulation_config.stocks
            + random_historical_year.bonds * simulation_config.bonds
            + random_historical_year.cash * simulation_config.cash;

        let mut shortfall = 0.0;
        let ending_balance = if starting_balance < withdrawal {
            shortfall = withdrawal - starting_balance;
            0.0
        } else {
            ((starting_balance - withdrawal) * (1.0 + annual_return)).max(0.0)
        };

        let cumulative_inflation = withdrawal / initial_withdrawal;
        trial.years.push(SingleYear {
            ending_balance,
            ending_balance_todays_dollars: ending_balance / cumulative_inflation,
            shortfall,
            is_exhausted: ending_balance == 0.0,
        });

        withdrawal *= 1.0 + random_historical_year.cpi;
    }

    trial
}

fn simulation_to_shard(
    simulation_config: &SimulationConfig,
    simulation: &Simulation,
) -> SimulationShard {
    let simulation_years = simulation_config.simulation_years as usize;
    let mut nominal_by_year = vec![Vec::with_capacity(simulation.trials.len()); simulation_years];
    let mut adjusted_by_year = vec![Vec::with_capacity(simulation.trials.len()); simulation_years];
    let mut shortfall_by_year = vec![Vec::with_capacity(simulation.trials.len()); simulation_years];
    let mut exhausted_by_year = vec![Vec::with_capacity(simulation.trials.len()); simulation_years];

    for trial in &simulation.trials {
        for (year, single_year) in trial.years.iter().enumerate() {
            nominal_by_year[year].push(single_year.ending_balance);
            adjusted_by_year[year].push(single_year.ending_balance_todays_dollars);
            shortfall_by_year[year].push(single_year.shortfall);
            exhausted_by_year[year].push(single_year.is_exhausted);
        }
    }

    SimulationShard {
        nominal_by_year,
        adjusted_by_year,
        shortfall_by_year,
        exhausted_by_year,
    }
}

fn compute_stats(
    simulation_config: &SimulationConfig,
    simulation: &Simulation,
) -> Vec<StatsSingleYear> {
    (0..simulation_config.simulation_years as usize)
        .into_par_iter()
        .map(|year| {
            let mut year_slice = simulation
                .trials
                .iter()
                .map(|trial| trial.years[year].ending_balance)
                .collect::<Vec<f64>>();

            year_slice.par_sort_unstable_by(|a, b| a.partial_cmp(b).unwrap());
            let mean = year_slice.iter().sum::<f64>() / year_slice.len() as f64;

            StatsSingleYear {
                year: year as i32,
                min: year_slice[0],
                max: year_slice[year_slice.len() - 1],
                mean,
                median: percentile(&year_slice, 0.5),
                quantiles: Vec::new(),
                stddev: stddev(&year_slice),
            }
        })
        .collect()
}

fn percentile(sorted_values: &[f64], percentile: f64) -> f64 {
    if sorted_values.is_empty() {
        return 0.0;
    }

    let index = (sorted_values.len() - 1) as f64 * percentile;
    let lower_index = index.floor() as usize;
    let upper_index = index.ceil() as usize;

    if lower_index == upper_index {
        return sorted_values[lower_index];
    }

    let weight = index - lower_index as f64;
    sorted_values[lower_index] * (1.0 - weight) + sorted_values[upper_index] * weight
}

fn stddev(arr: &[f64]) -> f64 {
    let mean = arr.iter().sum::<f64>() / arr.len() as f64;
    let sum = arr
        .iter()
        .map(|value| (value - mean).powf(2.0))
        .sum::<f64>();

    (sum / arr.len() as f64).sqrt()
}
