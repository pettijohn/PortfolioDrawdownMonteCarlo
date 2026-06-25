using System.Reflection;
using System.Runtime.InteropServices.JavaScript;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace MonteCarloDrawdown;

public sealed record HistoricalMarketData(
    int Year,
    double Stocks,
    double Bonds,
    double Cash,
    double Cpi);

public sealed record SimulationConfig(
    double Savings,
    double WithdrawalRate,
    double Stocks,
    double Bonds,
    double Cash,
    int SimulationRounds,
    int SimulationYears,
    int Quantiles);

public sealed record SimulationShard(
    double[][] NominalByYear,
    double[][] AdjustedByYear,
    double[][] ShortfallByYear,
    bool[][] ExhaustedByYear);

internal sealed record SingleYear(
    double EndingBalance,
    double EndingBalanceTodaysDollars,
    double Shortfall,
    bool IsExhausted);

[JsonSourceGenerationOptions(
    PropertyNamingPolicy = JsonKnownNamingPolicy.CamelCase,
    PropertyNameCaseInsensitive = true)]
[JsonSerializable(typeof(HistoricalMarketData[]))]
[JsonSerializable(typeof(SimulationConfig))]
[JsonSerializable(typeof(SimulationShard))]
[JsonSerializable(typeof(int[]))]
internal partial class SourceGenerationContext : JsonSerializerContext
{
}

public static partial class DotNetMonteCarloExports
{
    private static HistoricalMarketData[]? historicalData;

    [JSExport]
    public static string RunSimulationShardJson(string configJson, int simulationRounds)
    {
        var config = JsonSerializer.Deserialize(configJson, SourceGenerationContext.Default.SimulationConfig)
            ?? throw new InvalidOperationException("Missing simulation config.");

        config = config with { SimulationRounds = simulationRounds };
        var shard = RunSimulationShard(config);
        return JsonSerializer.Serialize(shard, SourceGenerationContext.Default.SimulationShard);
    }

    [JSExport]
    public static string RunDeterministicSimulationShardJson(
        string configJson,
        string historicalDataJson,
        string yearIndexesJson)
    {
        var config = JsonSerializer.Deserialize(configJson, SourceGenerationContext.Default.SimulationConfig)
            ?? throw new InvalidOperationException("Missing simulation config.");
        var data = JsonSerializer.Deserialize(historicalDataJson, SourceGenerationContext.Default.HistoricalMarketDataArray)
            ?? throw new InvalidOperationException("Missing historical data.");
        var yearIndexes = JsonSerializer.Deserialize(yearIndexesJson, SourceGenerationContext.Default.Int32Array)
            ?? throw new InvalidOperationException("Missing deterministic year indexes.");

        if (yearIndexes.Length < config.SimulationRounds * config.SimulationYears)
        {
            throw new InvalidOperationException("Not enough deterministic year indexes.");
        }

        var shard = RunSimulationShard(config, data, (trial, year) => {
            var yearIndex = yearIndexes[(trial * config.SimulationYears) + year];
            if (yearIndex < 0 || yearIndex >= data.Length)
            {
                throw new InvalidOperationException("Deterministic year index is out of range.");
            }

            return yearIndex;
        });

        return JsonSerializer.Serialize(shard, SourceGenerationContext.Default.SimulationShard);
    }

    public static SimulationShard RunSimulationShard(SimulationConfig config)
    {
        var data = LoadHistoricalData();
        return RunSimulationShard(config, data, (_trial, _year) => Random.Shared.Next(data.Length));
    }

    private static SimulationShard RunSimulationShard(
        SimulationConfig config,
        HistoricalMarketData[] data,
        Func<int, int, int> yearIndexAt)
    {
        var nominalByYear = CreateDoubleGrid(config);
        var adjustedByYear = CreateDoubleGrid(config);
        var shortfallByYear = CreateDoubleGrid(config);
        var exhaustedByYear = CreateBoolGrid(config);

        for (var trial = 0; trial < config.SimulationRounds; trial++)
        {
            var years = ComputeTrial(config, data, year => yearIndexAt(trial, year));
            for (var year = 0; year < config.SimulationYears; year++)
            {
                var singleYear = years[year];
                nominalByYear[year][trial] = singleYear.EndingBalance;
                adjustedByYear[year][trial] = singleYear.EndingBalanceTodaysDollars;
                shortfallByYear[year][trial] = singleYear.Shortfall;
                exhaustedByYear[year][trial] = singleYear.IsExhausted;
            }
        }

        return new SimulationShard(nominalByYear, adjustedByYear, shortfallByYear, exhaustedByYear);
    }

    private static SingleYear[] ComputeTrial(
        SimulationConfig config,
        HistoricalMarketData[] data,
        Func<int, int> yearIndexAt)
    {
        var trial = new SingleYear[config.SimulationYears];
        var withdrawal = config.Savings * config.WithdrawalRate;
        var initialWithdrawal = withdrawal;

        for (var year = 0; year < config.SimulationYears; year++)
        {
            var historicalYear = data[yearIndexAt(year)];
            var startingBalance = year == 0 ? config.Savings : trial[year - 1].EndingBalance;
            var annualReturn =
                historicalYear.Stocks * config.Stocks +
                historicalYear.Bonds * config.Bonds +
                historicalYear.Cash * config.Cash;

            var shortfall = 0.0;
            double endingBalance;
            if (startingBalance < withdrawal)
            {
                shortfall = withdrawal - startingBalance;
                endingBalance = 0.0;
            }
            else
            {
                endingBalance = Math.Max(0.0, (startingBalance - withdrawal) * (1.0 + annualReturn));
            }

            var cumulativeInflation = withdrawal / initialWithdrawal;
            trial[year] = new SingleYear(
                endingBalance,
                endingBalance / cumulativeInflation,
                shortfall,
                endingBalance == 0.0);

            withdrawal *= 1.0 + historicalYear.Cpi;
        }

        return trial;
    }

    private static HistoricalMarketData[] LoadHistoricalData()
    {
        if (historicalData is not null)
        {
            return historicalData;
        }

        using var stream = Assembly.GetExecutingAssembly()
            .GetManifestResourceStream("historicalMarketData.json")
            ?? throw new InvalidOperationException("Embedded historical market data was not found.");
        historicalData = JsonSerializer.Deserialize(stream, SourceGenerationContext.Default.HistoricalMarketDataArray)
            ?? throw new InvalidOperationException("Embedded historical market data could not be parsed.");

        return historicalData;
    }

    private static double[][] CreateDoubleGrid(SimulationConfig config)
    {
        return Enumerable.Range(0, config.SimulationYears)
            .Select(_ => new double[config.SimulationRounds])
            .ToArray();
    }

    private static bool[][] CreateBoolGrid(SimulationConfig config)
    {
        return Enumerable.Range(0, config.SimulationYears)
            .Select(_ => new bool[config.SimulationRounds])
            .ToArray();
    }
}
