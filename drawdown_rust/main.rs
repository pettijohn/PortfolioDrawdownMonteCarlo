use std::fs::File;
use std::io::prelude::*;

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


fn main() -> std::io::Result<()> {
    let mut file = File::open("../data/historicalMarketData.json")?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    
    let d: Vec<HistoricalMarketData> = serde_json::from_str(&contents).unwrap();
    println!("{:?}", &d[0]);
    println!("There are {} years of data", &d.len());


    Ok(())
}