import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Topbar from "./Topbar/Topbar";
import TickerList from "./TickerList/TickerList";

class CurrencyData extends Component {
  state = { data: ["USD / JPY", "GBP / JPY", "EUR / JPY", "AUD / USD"] };

  handleAddTicker = this.handleAddTicker.bind(this);

  handleAddTicker(ticker) {
    if (!ticker) return;
    let data = this.state.data;
    data.push(ticker);
    this.setState({ data: data });
  }

  render() {
    return (
      <Container>
        <HomeLink to="/">Home</HomeLink>
        <h1>React Currency Quotes</h1>
        <Topbar addTickerFn={this.handleAddTicker} />
        <TickerList data={this.state.data} />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(CurrencyData);

const Container = styled.div`
  height: 100%;
  padding: 100px 30px 200px;
  background: #02253b;
  color: #76abcc;
  font-family: sans-serif;
  h1:hover {
    color: white;
  }
`;

const HomeLink = styled((Link: any))`
  color: #76abcc;
`;
