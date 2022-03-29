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
                    <li><label htmlFor="startingBalance" className="slider">Total starting balance USD:</label>
                        <input className="slider" type="range" min="100000" max="20000000" step="100000" id="startingBalance" value={this.state.startingBalance} onChange={this.handleChange} />
                        <span>{this.formatter.format(this.state.startingBalance)}</span></li>
                    <li><label htmlFor="drawdownRate" className="slider">Drawdown per Year:</label>
                        <input className="slider" type="range" min="0" max="20" step="0.1" value={this.state.drawdownRate} id="drawdownRate" onChange={this.handleChange} />
                        <span>{this.state.drawdownRate}%
                            == {this.formatter.format(this.state.startingBalance * (this.state.drawdownRate / 100))} per year</span></li>
                    <li><label htmlFor="stocksPercent" className="slider">Portfolio Allocation Stocks:</label>
                        <input className="slider" type="range" min="0" max="100" value={this.state.stocksPercent} id="stocksPercent" onChange={this.handleChange} />
                        <span>{this.state.stocksPercent}</span></li>
                    <li><label htmlFor="bondsPercent" className="slider">Portfolio Allocation Bonds:</label>
                        <input className="slider" type="range" min="0" max="100" value={this.state.bondsPercent} id="bondsPercent" onChange={this.handleChange} />
                        <span>{this.state.bondsPercent}</span></li>
                    <li><label htmlFor="cashPercent" className="slider">Portfolio Allocation Cash:</label>
                        <input className="slider" type="range" min="0" max="100" value={this.state.cashPercent} id="cashPercent" onChange={this.handleChange} />
                        <span>{this.state.cashPercent}</span></li>
                </ul> </div>
        )
    }


    setAllocationState(stocks?: number, bonds?: number, cash?: number) {
        this.setState(function (state, _props) {
            // Only one value will change at a time
            if (stocks != null) {
                // Only update bonds, unless there's not room, then update Cash too
                const balance = 100 - stocks;
                let bondBalance = balance - state.cashPercent;
                if (bondBalance < 0) bondBalance = 0;
                return {
                    stocksPercent: stocks,
                    bondsPercent: bondBalance,
                    cashPercent: 100 - stocks - bondBalance
                };
            }
            else if (bonds != null) {
                // Only update cash, unless there's not room, then update stocks too
                let cashBalance = 100 - state.stocksPercent - bonds;
                if (cashBalance < 0) cashBalance = 0;
                return {
                    stocksPercent: 100 - bonds - cashBalance,
                    bondsPercent: bonds,
                    cashPercent: cashBalance
                };
            }
            else if (cash != null) { 
                // Only update bonds, unless there's not room, then update stocks too
                let bondBalance = 100 - state.stocksPercent - cash;
                if (bondBalance < 0) bondBalance = 0;
                return {
                    stocksPercent: 100 - bondBalance - cash,
                    bondsPercent: bondBalance,
                    cashPercent: cash
                }
            }
            else return {...state};
        });
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
            case "stocksPercent":
                this.setAllocationState(value, undefined, undefined);
                break;
            case "bondsPercent":
                this.setAllocationState(undefined, value, undefined);
                break;
            case "cashPercent":
                this.setAllocationState(undefined, undefined, value);
                //this.setState({ [key]: value });
                break;
            default:
                break;
        }
    }
}