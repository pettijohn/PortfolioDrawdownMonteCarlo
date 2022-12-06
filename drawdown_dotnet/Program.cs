// See https://aka.ms/new-console-template for more information

namespace MonteCarloDrawdown;

public class Program
{
    public static void Main()
    {
        var simulation_config = new SimulationConfig()
        {
            savings = 3_000_000.0,
            withdrawal_rate = 0.04,
            stocks = 0.7,
            bonds = 0.2,
            cash = 0.1,
            simulation_rounds = 100_000,
            simulation_years = 50,
            quantiles = 10
        };

        Console.WriteLine("savings: {0} withdrawalRate: {1} stocks: {2}, bonds: {3} cash: {4}",
        simulation_config.savings, simulation_config.withdrawal_rate, simulation_config.stocks, simulation_config.bonds, simulation_config.cash);
        var mc = new MonteCarlo();
        var stat_results = mc.simulation(simulation_config);
        foreach (var result in stat_results.years!) {
            Console.WriteLine("{0}: Min {1}M / Max {2}M / Avg {3}M, / Median {4}M / Stddev {5}M", result.year, Math.Floor(result.min / 1000000.0),
                Math.Floor(result.max / 1000000.0), Math.Floor(result.mean / 1000000.0), Math.Floor(result.median / 1000000.0), Math.Floor(result.stddev / 1000000.0));
        }

    }
}