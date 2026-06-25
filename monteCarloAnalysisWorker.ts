import { SimulationConfig, StatSingleYear } from "./monteCarlo.ts";

type AnalyzeYearRequest = {
    type: "analyzeYear";
    requestId: number;
    year: number;
    config: SimulationConfig;
    nominal: number[];
    adjusted: number[];
    shortfalls: number[];
    exhausted: boolean[];
};

type StatSeries = {
    min: number;
    max: number;
    mean: number;
    median: number;
    p10: number;
    p25: number;
    p75: number;
    p90: number;
    stddev: number;
    quantiles: number[];
};

self.onmessage = (event: MessageEvent<AnalyzeYearRequest>) => {
    const message = event.data;

    if (message.type !== "analyzeYear") {
        return;
    }

    try {
        const result: StatSingleYear = {
            ...computeStatSeries(message.config, message.nominal),
            inflationAdjusted: computeStatSeries(message.config, message.adjusted),
            ruinProbability: message.exhausted.filter(Boolean).length / message.exhausted.length,
            meanShortfall: message.shortfalls.reduce((acc, value) => acc + value, 0) / message.shortfalls.length,
        };

        self.postMessage({
            type: "analysisResult",
            requestId: message.requestId,
            year: message.year,
            result,
        });
    } catch (error) {
        self.postMessage({
            type: "analysisError",
            requestId: message.requestId,
            year: message.year,
            message: error instanceof Error ? error.message : String(error),
        });
    }
};

function computeStatSeries(config: SimulationConfig, values: number[]): StatSeries {
    const sortedValues = [...values].sort((v1, v2) => v1 - v2);
    const quantiles: number[] = [];

    for (let q = 1; q < config.quantiles; q++) {
        let index = Math.floor(values.length * (q / config.quantiles));
        if (index >= values.length) {
            index = values.length - 1;
        }
        quantiles.push(sortedValues[index]);
    }

    const total = sortedValues.reduce((acc, curr) => acc + curr, 0);

    return {
        min: sortedValues[0],
        max: sortedValues[sortedValues.length - 1],
        mean: total / sortedValues.length,
        median: percentile(sortedValues, 0.5),
        p10: percentile(sortedValues, 0.1),
        p25: percentile(sortedValues, 0.25),
        p75: percentile(sortedValues, 0.75),
        p90: percentile(sortedValues, 0.9),
        stddev: stddev(sortedValues),
        quantiles,
    };
}

function percentile(sortedValues: number[], percentileValue: number): number {
    if (sortedValues.length === 0) {
        return 0;
    }

    const index = (sortedValues.length - 1) * percentileValue;
    const lowerIndex = Math.floor(index);
    const upperIndex = Math.ceil(index);

    if (lowerIndex === upperIndex) {
        return sortedValues[lowerIndex];
    }

    const weight = index - lowerIndex;
    return sortedValues[lowerIndex] * (1 - weight) + sortedValues[upperIndex] * weight;
}

function stddev(values: number[]): number {
    const mean = values.reduce((acc, curr) => acc + curr, 0) / values.length;
    const sum = values.reduce((acc, curr) => acc + (curr - mean) ** 2, 0);

    return Math.sqrt(sum / values.length);
}
