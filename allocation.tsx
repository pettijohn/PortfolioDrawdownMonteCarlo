import React from "https://esm.sh/react@17.0.2?pin=v74";
import ReactDOM from "https://esm.sh/react-dom@17.0.2?pin=v74";
import { Chart as ChartJS, ChartData, CategoryScale, LinearScale, registerables } from "https://esm.sh/chart.js@3.7.1?pin=v74";
import { Chart } from "https://esm.sh/react-chartjs-2@4.0.1?pin=v74";

import { StatResults } from "./monteCarlo.ts";

export interface AllocationProps {
    startingBalance: number;
    drawdownRate: number;
    bondsPercent: number;
    stocksPercent: number;
    cashPercent: number;
    simulationRounds: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    simulationResults?: StatResults
}

export class Allocation extends React.Component<AllocationProps> {
    constructor(props: AllocationProps) {
        super(props);
        
        //this.handleSubmit = this.handleSubmit.bind(this);
    
        this.formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0, });

    
    }
    readonly formatter: Intl.NumberFormat;
    
    render() {
        return (
            <div><h2>Portfolio Allocation</h2>
                <ul>
                    <li><label htmlFor="startingBalance" className="slider">Total starting balance USD:</label>
                        <input className="slider" type="range" min="100000" max="20000000" step="100000" id="startingBalance" value={this.props.startingBalance} onChange={this.props.onChange} />
                        <span>{this.formatter.format(this.props.startingBalance)}</span></li>
                    <li><label htmlFor="drawdownRate" className="slider">Drawdown per Year:</label>
                        <input className="slider" type="range" min="0" max="20" step="0.1" value={this.props.drawdownRate} id="drawdownRate" onChange={this.props.onChange} />
                        <span>{this.props.drawdownRate}%
                            == {this.formatter.format(this.props.startingBalance * (this.props.drawdownRate / 100))} per year</span></li>
                    <li><label htmlFor="stocksPercent" className="slider">Portfolio Allocation Stocks:</label>
                        <input className="slider" type="range" min="0" max="100" value={this.props.stocksPercent} id="stocksPercent" onChange={this.props.onChange} />
                        <span>{this.props.stocksPercent}%</span></li>
                    <li><label htmlFor="bondsPercent" className="slider">Portfolio Allocation Bonds:</label>
                        <input className="slider" type="range" min="0" max="100" value={this.props.bondsPercent} id="bondsPercent" onChange={this.props.onChange} />
                        <span>{this.props.bondsPercent}%</span></li>
                    <li><label htmlFor="cashPercent" className="slider">Portfolio Allocation Cash:</label>
                        <input className="slider" type="range" min="0" max="100" value={this.props.cashPercent} id="cashPercent" onChange={this.props.onChange} />
                        <span>{this.props.cashPercent}%</span></li>
                    <li><label htmlFor="simulationRounds" className="slider">Simulation Rounds</label>
                        <input className="slider" type="range" min="1000" max="100000" step="33000" value={this.props.simulationRounds} id="simulationRounds" onChange={this.props.onChange} />
                        <span>{this.props.simulationRounds}</span></li>
                </ul> </div>
        )
    }


    
}