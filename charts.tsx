import React from "https://esm.sh/react@17.0.2?pin=v74";
import ReactDOM from "https://esm.sh/react-dom@17.0.2?pin=v74";
import { Chart as ChartJS, ChartData, CategoryScale, LinearScale, registerables } from "https://esm.sh/chart.js@3.7.1?pin=v74";
import { Chart, Bar, Line } from "https://esm.sh/react-chartjs-2@4.0.1?pin=v74";

import { StatResultsAll } from "./monteCarlo.ts";

ChartJS.register(...registerables, CategoryScale, LinearScale );

export interface ChartsProps {
    results: StatResultsAll
}

export class Charts extends React.Component<ChartsProps> {
    constructor(props: ChartsProps) {
        super(props);

    }

    render() {
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
        
        const data = this.chartData(this.props.results);
        
        return (
            <Chart type="line" data={data} />
        )
    }
    
    chartData(simulationStats: StatResultsAll): ChartData<"line", (number)[], unknown> {
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