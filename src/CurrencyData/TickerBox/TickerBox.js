import React from "react";
import styled, { css } from "styled-components";

const TickerBox = props => (
  // state = { price: 50, prevPrice: 50 };

  // componentDidMount() {
  //   let tickPrice = () => {
  //     setTimeout(() => {
  //       let fluct = this.state.price / 100 * Math.random(); //[0 - 1%)
  //       let newPrice =
  //         Math.random() < 0.5
  //           ? this.state.price + fluct
  //           : this.state.price - fluct;
  //       this.setState({ price: newPrice, prevPrice: this.state.price });
  //       tickPrice();
  //     }, Math.floor(Math.random() * 500) + 500);
  //   };
  //   tickPrice();
  // }

  // getClassName() {
  //   return "tickerbox " + ["", "down"][+(Math.random() > 0.5)];
  // }

  // render() {
  //   return (
  <TickerBoxContainer>
    <TickerName>{props[0].symbol}</TickerName>
    <TickBox>
      {Math.abs(props[0].ask * 1000 - props[0].bid * 1000).toFixed(2)}
    </TickBox>

    <SellBuyBoxes>
      <h2>SELL</h2>
      <PriceSmall>{props[0].bid.toString().substring(0, 4)}</PriceSmall>
      <PriceBig>{props[0].bid.toString().substring(4, 6)}</PriceBig>
      <PriceSmall>{props[0].bid.toFixed(5).substring(6, 7)}</PriceSmall>
    </SellBuyBoxes>

    <SellBuyBoxes>
      <h2>BUY</h2>
      <PriceSmall>{props[0].ask.toString().substring(0, 4)}</PriceSmall>
      <PriceBig>{props[0].ask.toString().substring(4, 6)}</PriceBig>
      <PriceSmall>{props[0].ask.toFixed(5).substring(6, 7)}</PriceSmall>
    </SellBuyBoxes>
  </TickerBoxContainer>
);
//   }
// }

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
