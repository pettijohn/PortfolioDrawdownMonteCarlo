import React from "https://esm.sh/react@17.0.2?target=deno&pin=v74";
//LineController, LineElement, PointElement, LinearScale, Title, ChartData, Tooltip, Legend, CategoryScale
import { Chart as ChartJS, ChartData, CategoryScale, LinearScale, registerables } from "https://esm.sh/chart.js@3.7.1?target=deno&pin=v74&deps=react@17.0.2,react-dom@17.0.2";
import { Chart, Line } from "https://esm.sh/react-chartjs-2@4.0.1?target=deno&pin=v74&deps=react@17.0.2,react-dom@17.0.2";
import { StatResults } from "./monteCarlo.ts";

ChartJS.register(...registerables, CategoryScale, LinearScale);

export interface ChartsProps {
    results: StatResults
}

export class Charts extends React.Component<ChartsProps> {
    constructor(props: ChartsProps) {
        super(props);

        const _ = new CategoryScale({});
    }

    render() {
        const chartData = {
            labels: ["one", "two"],
            datasets: [{
                data: [1, 2]
            }]
        }

        const options = {
            scales: {
                x: {
                    type: 'category'
                }
            }
        }
            
        return (
        // this.chartData(this.props.results)
        <Line data={chartData} />
        )
    }
    /*

    [ERROR]: Type 
    'import("https://cdn.esm.sh/v71/chart.js@3.7.1/types/index.esm.d.ts").ChartData<"line", number[], unknown>' 
    is not assignable to type 
    'import("https://cdn.esm.sh/v74/chart.js@3.7.1/types/index.esm.d.ts").ChartData<"line", number[], unknown>'.
  Types of property 'datasets' are incompatible.

    */
    
    helloWorld(): ChartData<"line", (number)[], unknown> {
        return {
            labels: ["one", "two"],
            datasets: [{
                data: [1, 2]
            }]
        }
    }

    chartData(simulationStats: StatResults): ChartData<"line", (number)[], unknown> {
            return {
                labels: Object.keys(simulationStats),
                datasets: [{ // 0
                    label: "min",
                    backgroundColor: 'rgba(255, 0, 255, 0.5)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: Object.values(simulationStats).map(s => s.min),
                    //fill: '+1', 
                },
                // { // 1
                //     label: "max",
                //     // backgroundColor: 'rgb(255, 255, 132)',
                //     // borderColor: 'rgb(255, 255, 132)',
                //     data: Object.values(simulationStats).map(s => s.max),
                // },
                { 
                    label: "mean",
                    backgroundColor: 'rgb(0, 255, 0)',
                    borderColor: 'rgb(0, 0, 0)',
                    data: Object.values(simulationStats).map(s => s.mean),
                },
                // { 
                //     label: "median",
                //     backgroundColor: 'rgb(0, 255, 0)',
                //     borderColor: 'rgb(255, 255, 132)',
                //     data: Object.values(simulationStats).map(s => s.median),
                // },
                { 
                    label: "stddev_low",
                    backgroundColor: 'rgb(255, 255, 132)',
                    borderColor: 'rgb(255, 255, 132)',
                    data: Object.values(simulationStats).map(s => s.mean - s.stddev),
                    //fill: '+1'
                },
                { 
                    label: "stddev_high",
                    backgroundColor: 'rgb(255, 255, 132)',
                    borderColor: 'rgb(255, 255, 132)',
                    data: Object.values(simulationStats).map(s => s.mean + s.stddev),
                },
                { 
                    label: "q0",
                    backgroundColor: 'rgb(0, 0, 0)',
                    borderColor: 'rgb(255, 0, 0)',
                    data: Object.values(simulationStats).map(s => s.quantiles[0]),
                },
                { 
                    label: "q1",
                    backgroundColor: 'rgb(0, 0, 0)',
                    borderColor: 'rgb(255, 0, 0)',
                    data: Object.values(simulationStats).map(s => s.quantiles[1]),
                },
                { 
                    label: "q2",
                    backgroundColor: 'rgb(0, 0, 0)',
                    borderColor: 'rgb(255, 0, 0)',
                    data: Object.values(simulationStats).map(s => s.quantiles[2]),
                },
            ]
        };
    }

}