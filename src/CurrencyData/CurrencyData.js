import React, { Component } from "react";
import { connect } from "react-redux";

import Topbar from "./Topbar/Topbar";
import TickerList from "./TickerList/TickerList";

class CurrencyData extends Component {
  state = { data: ["USD / JPY", "GBP / JPY", "EUR / JPY", "AUD / USD"] };

  handleAddTicker(ticker) {
    if (!ticker) return;
    let data = this.state.data;
    data.push(ticker);
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="container">
        <h1>React JS</h1>
        <Topbar addTickerFn={this.handleAddTicker} />
        <TickerList data={this.state.data} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(CurrencyData);
