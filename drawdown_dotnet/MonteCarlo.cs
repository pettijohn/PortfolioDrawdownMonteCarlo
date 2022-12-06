

using System.Collections.Generic;
using System.Text.Json;
using System.Linq;
using System.Diagnostics.CodeAnalysis;
using System.Collections.Concurrent;

namespace MonteCarloDrawdown;
/*
VOCABULARY

* Single Year - result after applying growth/expenses/inflation a single time to a single year
* Trial - a run of 50 single years, from a starting portfolio balance to 0 or infinity
* Simulation - 100k trials 
* StatSingleYear - after computing stats, the results of a single year slice (all 100k records from year-n processed down into consumable stats)
* StatResults - All 50 years of StatSingleYears

*/

public class HistoricalMarketData
{
    public int year;
    public double stocks;
    public double bonds;
    public double cash;
    public double cpi;
}

public class SimulationConfig
{
    public double savings;
    public double withdrawal_rate;
    public double stocks;
    public double bonds;
    public double cash;
    public int simulation_rounds;
    public int simulation_years;
    public int quantiles;
}


public class SingleYear
{
    public double starting_balance;
    public double withdrawal;
    public double ending_balance;
    //growthRate: number;
    public double cumulative_inflation;
    public double ending_balance_todays_dollars;
    public int year;
}

public class Trial
{
    public List<SingleYear> years;

    public Trial() {
        this.years = new List<SingleYear>();
    }
}

public class Simulation {
    public ConcurrentBag<Trial> trials;
    public Simulation() {
        this.trials = new ConcurrentBag<Trial>();
    }
}

/** Results from a single year, the stats of the 100k simulations */
public class StatsSingleYear {
    public int year;
    public double min;
    public double max;
    public double mean;
    public double median;
    public double stddev;
    public List<double> quantiles;

    public StatsSingleYear() {
        this.quantiles = new List<double>();
    }
}

public class StatResults {
    public StatsSingleYear[]? years;
}

public class MonteCarlo {

    public MonteCarlo() {}

    public StatResults simulation(SimulationConfig simulation_config)
    {


        using (var reader = new StreamReader("../data/historicalMarketData.json"))
        {
            var contents = reader.ReadToEnd();
            //Console.WriteLine(contents);
            var historical_data = JsonSerializer.Deserialize<HistoricalMarketData[]>(contents, new JsonSerializerOptions() {IncludeFields=true});
            var simulation_results = compute_simulation(simulation_config, historical_data!);
            var stats = compute_stats(simulation_config, simulation_results);
            return new StatResults() { years = stats };
        }
    }

    private Simulation compute_simulation(SimulationConfig simulation_config, HistoricalMarketData[] historical_data)
    {
        // Compute 100k Trials on 8 threads, append results to Simuluation
        var simulation = new Simulation();

        Parallel.ForEach(Enumerable.Range(0, simulation_config.simulation_rounds),
            (_) =>
            {
                var trial = compute_trial(simulation_config, historical_data);
                simulation.trials.Add(trial);
            });

        Console.WriteLine("Completed {0} Trials", simulation.trials.Count);

        return simulation;
    }
    private Trial compute_trial(SimulationConfig simulation_config, HistoricalMarketData[] historical_data)
    {
        // TODO - validate that stocks + bonds + cash == 1.0
        var trial = new Trial();
        var withdrawal = simulation_config.savings * simulation_config.withdrawal_rate;
        var initial_withdrawal = withdrawal;

        foreach (var year in Enumerable.Range(0, simulation_config.simulation_years))
        {

            // Pick a random year's performance 
            var rand_index = Random.Shared.NextDouble();
            var year_index = Convert.ToInt32(Math.Floor(rand_index * historical_data.Length));
            var random_historical_year = historical_data[year_index];

            double starting_balance;


            if (year == 0)
            {
                starting_balance = simulation_config.savings;
            }
            else
            {
                var prev_year = trial.years.Last();
                starting_balance = prev_year.ending_balance;
            }

            // Weight the growth per asset class relative to portfolio split; compute the rate of return for the year with the given portfolio classure
            var arr = random_historical_year.stocks * simulation_config.stocks
                + random_historical_year.bonds * simulation_config.bonds
                + random_historical_year.cash * simulation_config.cash;

            var ending_balance = starting_balance;

            withdrawal *= 1.0 + random_historical_year.cpi;
            if (ending_balance < withdrawal)
            {
                // If we run out of money, keep decrementing balance, but don't compute growth rate of assets. 
                ending_balance -= withdrawal;
            }
            else
            {
                // Apply growth factor to balance at end of year
                ending_balance = (ending_balance - withdrawal) * (1.0 + arr);
            }

            var current_year = new SingleYear()
            {
                year = year,
                starting_balance = starting_balance,
                withdrawal = withdrawal,
                ending_balance = ending_balance,
                cumulative_inflation = withdrawal / initial_withdrawal,
                ending_balance_todays_dollars = ending_balance / (withdrawal / initial_withdrawal),
            };

            trial.years.Add(current_year);
        }
        return trial;
    }



    public StatsSingleYear[] compute_stats(SimulationConfig simulation_config, Simulation simulation)
    {
        var results = new ConcurrentBag<StatsSingleYear>();
        Parallel.ForEach(Enumerable.Range(0, simulation_config.simulation_years), (year) => {

            // Sort each of the fifty years and then compute quantiles  in a thread and rost by ending balance
            var year_slice = simulation.trials
                .Select((trial) => trial.years[year] )
                .OrderBy((a) =>  a.ending_balance ).ToArray();

            

            var stats = new StatsSingleYear() {
                year = year,
                min = year_slice[0].ending_balance,
                max = year_slice[(simulation_config.simulation_rounds - 1)].ending_balance,
                mean = year_slice.Select(y => y.ending_balance).Average(),
                median = year_slice[(simulation_config.simulation_rounds / 2)].ending_balance,
                quantiles = new List<double>(),
                stddev = StandardDeviation(year_slice.Select(y => y.ending_balance))
            };
            results.Add(stats);
        });

        return results.OrderBy(r => r.year).ToArray();
    }

    public static double StandardDeviation(IEnumerable<double> values)
    {
        double avg = values.Average();
        return Math.Sqrt(values.Average(v => Math.Pow(v - avg, 2)));
    }

}