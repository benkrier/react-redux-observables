import React, { Component } from "react";

class Topbar extends Component {
  state = { ticker: "" };

  handleTickerChange(event) {
    this.setState({ ticker: event.target.value });
  }
  handleSubmitClick() {
    this.props.addTickerFn(this.state.ticker);
    this.resetTicker();
  }
  resetTicker() {
    this.setState({ ticker: "" });
  }
  addRandoms() {
    let makeid = () => {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      for (let i = 0; i < 3; ++i)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      text += " / ";

      for (let i = 0; i < 3; ++i)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    };
    for (let i = 0; i < 100; ++i) {
      this.props.addTickerFn(makeid());
    }
  }
  render() {
    return (
      <div className="topBar">
        <label htmlFor="ticker">Add currency pair: </label>
        <input
          id="ticker"
          className="coolTextbox"
          type="text"
          value={this.state.ticker}
          onChange={this.handleTickerChange}
        />
        <input
          type="submit"
          className="coolButton"
          onClick={this.handleSubmitClick}
        />
        <input
          type="submit"
          className="coolButton"
          value="Add 100 random pairs"
          onClick={this.addRandoms}
        />
      </div>
    );
  }
}

export default Topbar;
