import React, { Component } from "react";
import styled from "styled-components";

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
      <TickerBoxContainer>
        <TickerName>{this.props.tickerName}</TickerName>
        <TickBox>
          {Math.abs(this.state.prevPrice - this.state.price).toFixed(2)}
        </TickBox>

        <SellBuyBoxes>
          <h2>SELL</h2>
          <PriceSmall>
            {(this.state.price + 0.12345).toString().substring(0, 5)}
          </PriceSmall>
          <PriceBig>
            {(this.state.price + 0.12345).toString().substring(5, 7)}
          </PriceBig>
          <PriceSmall>
            {(this.state.price + 0.12345).toFixed(5).substring(7, 8)}
          </PriceSmall>
        </SellBuyBoxes>

        <SellBuyBoxes>
          <h2>BUY</h2>
          <PriceSmall>
            {(this.state.price - 0.12345).toString().substring(0, 5)}
          </PriceSmall>
          <PriceBig>
            {(this.state.price - 0.12345).toString().substring(5, 7)}
          </PriceBig>
          <PriceSmall>
            {(this.state.price - 0.12345).toFixed(5).substring(7, 8)}
          </PriceSmall>
        </SellBuyBoxes>
      </TickerBoxContainer>
    );
  }
}

export default TickerBox;

const TickerBoxContainer = styled.div`
  width: 200px;
  height: 80px;
  background-color: #063c5e;
  margin: 3px 3px 0px 0px;
  position: relative;
`;

const TickerName = styled.h2`
  margin: 2px 0 0 5px;
  padding: 0;
  color: #d4d7d9;
  font-size: 10px;
`;

const TickBox = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 30px;
  left: 0;
  right: 0;
  width: 40px;
  display: inline-block;
  color: #d4d7d9;
  font-size: 16px;

  &::before {
    display: inline-block;
    position: absolute;
    height: 10px;
    color: lightgreen;
    content: "^";
    text-align: right;
    right: 0;
    top: 0;
  }
`;

const SellBuyBoxes = styled.div`
  display: inline-block;
  width: 80px;
  margin: 2px 3px 3px 5px;
  padding: 0 5px;
  &:hover {
    background: #063654;
  }
  h2 {
    font-size: 9px;
    padding: 0;
    margin: 0;
    margin-bottom: 15px;
    display: inline-block;
    width: 80px;
    text-align: center;
  }
`;

const PriceSmall = styled.span`
  font-size: 14px;
`;

const PriceBig = styled.span`
  font-size: 28px;
  color: #d4d7d9;
`;
