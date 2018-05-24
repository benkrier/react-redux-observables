import React, { Component } from "react";

class TickerBox extends Component {
  state = { price: 50, prevPrice: 50 };

  componentDidMount() {
    let tickPrice = () => {
      setTimeout(() => {
        let fluct = this.state.price / 100 * Math.random(); //[0 - 1%)
        let newPrice =
          Math.random() < 0.5
            ? this.state.price + fluct
            : this.state.price - fluct;
        this.setState({ price: newPrice, prevPrice: this.state.price });
        tickPrice();
      }, Math.floor(Math.random() * 500) + 500);
    };
    tickPrice();
  }

  getClassName() {
    return "tickerbox " + ["", "down"][+(Math.random() > 0.5)];
  }

  render() {
    return (
      <div>
        <div className={this.getClassName()}>
          <h1 className="tickerName">{this.props.tickerName}</h1>
          <div className="tickBox">
            {Math.abs(this.state.prevPrice - this.state.price).toFixed(2)}
          </div>

          <div className="sellBox">
            <h2>SELL</h2>
            <span className="tickerPriceP1">
              {(this.state.price + 0.12345).toString().substring(0, 5)}
            </span>
            <span className="tickerPriceP2">
              {(this.state.price + 0.12345).toString().substring(5, 7)}
            </span>
            <span className="tickerPriceP3">
              {(this.state.price + 0.12345).toFixed(5).substring(7, 8)}
            </span>
          </div>

          <div className="buyBox">
            <h2>BUY</h2>
            <span className="tickerPriceP1">
              {(this.state.price - 0.12345).toString().substring(0, 5)}
            </span>
            <span className="tickerPriceP2">
              {(this.state.price - 0.12345).toString().substring(5, 7)}
            </span>
            <span className="tickerPriceP3">
              {(this.state.price - 0.12345).toFixed(5).substring(7, 8)}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TickerBox;
