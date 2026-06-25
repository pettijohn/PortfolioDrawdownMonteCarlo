import * as React from "https://esm.sh/react@17.0.2?pin=v74";
import { Chart as ChartJS, ChartData, ChartOptions, CategoryScale, LinearScale, registerables } from "https://esm.sh/chart.js@3.9.1?pin=v74";
import { Chart } from "https://esm.sh/react-chartjs-2@4.0.1?pin=v74";

import { StatResults, StatSingleYear } from "./monteCarlo.ts";

ChartJS.register(...registerables, CategoryScale, LinearScale );

export interface ChartsProps {
    results: StatResults,
    dollarMode: ChartDollarMode
}

export enum ChartDollarMode {
    Nominal = "nominal",
    InflationAdjusted = "inflationAdjusted"
}

export class Charts extends React.Component<ChartsProps> {
    constructor(props: ChartsProps) {
        super(props);

    }

    override render() {
        // const data: ChartData = {
        //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        //     datasets: [
        //         {
        //           label: '# of Votes',
        //           data: [12, 19, 3, 5, 2, 3],
        //           borderWidth: 1
        //         },	
        //             {
        //                 label: '# of Points',
        //                 data: [7, 11, 5, 8, 3, 7],
        //                 borderWidth: 1
        //             }
        //         ]
        //   };
        
        const data = this.chartData(this.props.results, this.props.dollarMode);
        const ruinData = this.ruinProbabilityChartData(this.props.results);
        const ruinOptions = this.ruinProbabilityChartOptions();
        const options = this.chartOptions();
        
        return (
            <div className="charts-panel">
                <div className="chart-card chart-card-primary">
                    <Chart type="line" data={data} options={options} />
                </div>
                <div className="chart-card chart-card-secondary">
                    <Chart type="line" data={ruinData} options={ruinOptions} />
                </div>
            </div>
        )
    }

    chartOptions(): ChartOptions<"line"> {
        return {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: "index",
            },
            plugins: {
                legend: {
                    position: "bottom",
                },
            },
        };
    }
    
    chartData(simulationStats: StatResults, dollarMode: ChartDollarMode): ChartData<"line", (number)[], unknown> {
        const stats = Object.values(simulationStats).map(s => this.selectStats(s, dollarMode));

        return {
            labels: Object.keys(simulationStats),
            datasets: [{
                label: "P10",
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgb(255, 99, 132)',
                data: stats.map(s => s.p10),
            },
            { 
                label: "P25",
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgb(255, 159, 64)',
                data: stats.map(s => s.p25),
            },
            { 
                label: "Median",
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderColor: 'rgb(0, 0, 0)',
                data: stats.map(s => s.median),
            },
            { 
                label: "Mean",
                backgroundColor: 'rgba(0, 200, 0, 0.5)',
                borderColor: 'rgb(0, 160, 0)',
                data: stats.map(s => s.mean),
            },
            { 
                label: "P75",
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgb(54, 162, 235)',
                data: stats.map(s => s.p75),
            },
            { 
                label: "P90",
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgb(153, 102, 255)',
                data: stats.map(s => s.p90),
            },
        ]
    };
}

    ruinProbabilityChartData(simulationStats: StatResults): ChartData<"line", (number)[], unknown> {
        return {
            labels: Object.keys(simulationStats),
            datasets: [{
                label: "Probability of ruin (%)",
                backgroundColor: 'rgba(220, 0, 0, 0.5)',
                borderColor: 'rgb(220, 0, 0)',
                data: Object.values(simulationStats).map(s => s.ruinProbability * 100),
            }]
        };
    }

    ruinProbabilityChartOptions(): ChartOptions<"line"> {
        return {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    position: "bottom",
                },
            }
        };
    }

    selectStats(stat: StatSingleYear, dollarMode: ChartDollarMode) {
        if (dollarMode === ChartDollarMode.InflationAdjusted) {
            return stat.inflationAdjusted;
        }
        return stat;
    }

}
