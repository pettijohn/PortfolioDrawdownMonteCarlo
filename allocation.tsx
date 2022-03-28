import React from "https://esm.sh/react@17.0.2";
// /** @jsxImportSource https://esm.sh/react@17.0.2 */

interface Portfolio {
    startingBalance: number;
    drawdownRate: number;
    bondsPercent: number;
    stocksPercent: number;
    cashPercent: number;
}

export class Allocation extends React.Component<Portfolio, Portfolio> {
    constructor(props: Portfolio) {
        super(props);
        this.state = {...props};
    
        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    
        this.formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0, });

    
    }
    readonly formatter: Intl.NumberFormat;
    
    render() {
        return (
            <div><h2>Portfolio Allocation</h2>
                <ul>
                    <li>Total starting balance USD: <input type="text" id="startingBalance" defaultValue={this.props.startingBalance} onChange={this.handleChange} />
                        <span>{this.formatter.format(this.state.startingBalance)}</span></li>
                    <li>Drawdown per Year: <input type="range" min="0" max="20" step="0.1" defaultValue={this.props.drawdownRate} id="drawdownRate" onChange={this.handleChange} />
                        <span>{this.state.drawdownRate}%
                            == {this.formatter.format(this.state.startingBalance * (this.state.drawdownRate / 100))} per year</span></li>
                    <li>Portfolio Allocation Bonds: <input type="range" min="0" max="100" value={this.state.bondsPercent} id="bondsPercent" onChange={this.handleChange} />
                        <span>{this.state.bondsPercent}</span></li>
                    <li>Portfolio Allocation Stocks: <input type="range" min="0" max="100" defaultValue={this.props.stocksPercent} id="stocksPercent" onChange={this.handleChange} />
                        <span>{this.state.stocksPercent}</span></li>
                    <li>Portfolio Allocation Cash: <input type="range" min="0" max="100" defaultValue={this.props.cashPercent} id="cashPercent" onChange={this.handleChange} />
                        <span>{this.state.cashPercent}</span></li>
                </ul> </div>
        )
    }



    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        // console.log(this);
        //console.log(event.target.value);
        const value = parseFloat(event.target.value);
        const key = event.target.id as keyof Portfolio;
            
        // This is a weird typescript validation issue that it can't validate them all at once
        switch (key) {
            case "startingBalance":
                this.setState({ [key]: value });
                break;
            case "drawdownRate":
                this.setState({ [key]: value });
                break;
            case "bondsPercent":
                this.setState({ [key]: value });
                break;
            case "stocksPercent":
                this.setState({ [key]: value });
                break;
            case "cashPercent":
                this.setState({ [key]: value });
                break;
            default:
                break;
        }
    }
}