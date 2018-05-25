import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { currencyData } from "../actionCreators";

// import Topbar from "./Topbar/Topbar";
// import TickerList from "./TickerList/TickerList";

class CurrencyData extends Component {
  // handleAddTicker = this.handleAddTicker.bind(this);
  testData = this.testData.bind(this);

  testData(event) {
    let currencyPair = event.target.value.toUpperCase();
    this.props.currencyData(currencyPair);
  }
  // handleAddTicker(ticker) {
  //   if (!ticker) return;
  //   let data = this.props.data;
  //   data.push(ticker);
  //   this.currencyData({ data: data });
  // }

  render() {
    return (
      <Container>
        <HomeLink to="/">Home</HomeLink>
        <h1>React Currency Quotes</h1>
        <h3>Enter the 6 letter currency code pair.</h3>
        {/* <Topbar addTickerFn={this.handleAddTicker} />
        <TickerList {...this.props} /> */}

        <input
          type="text"
          placeholder="Currency Code Pairs"
          onChange={this.testData}
        />
        <code>
          <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
        </code>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ data: state.currencyData });

const mapDispatchToProps = { currencyData };

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyData);

const Container = styled.div`
  height: 100%;
  padding: 100px 30px 200px;
  background: #02253b;
  color: #76abcc;
  font-family: sans-serif;

  code {
    color: white;
  }

  h1 {
    margin: 10px 0;
  }
  h3 {
    padding: 5px 0;
    margin: 0;
    color: #d4d7d9;
  }
`;

const HomeLink = styled(Link)`
  color: #76abcc;
`;
