import React, { Component } from "react";
import styled from "styled-components";

class Topbar extends Component {
  state = { ticker: "" };

  handleTickerChange = this.handleTickerChange.bind(this);
  handleSubmitClick = this.handleSubmitClick.bind(this);
  resetTicker = this.resetTicker.bind(this);
  addRandoms = this.addRandoms.bind(this);

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
      <TopbarContainer>
        <label htmlFor="ticker">Add currency pair: </label>
        <Textbox
          id="ticker"
          type="text"
          value={this.state.ticker}
          onChange={this.handleTickerChange}
        />
        <Button type="submit" onClick={this.handleSubmitClick} />
        <Button
          type="submit"
          value="Add 100 random pairs"
          onClick={this.addRandoms}
        />
      </TopbarContainer>
    );
  }
}

export default Topbar;

const TopbarContainer = styled.div`
  margin-bottom: 10px;
`;

const Textbox = styled.input`
  border: 2px solid #02253b;
  background: #c1e2f7;
  color: #02253b;
  font-weight: bold;
`;

const Button = styled.input`
  border: 2px solid #02253b;
  background: #063c5e;
  color: #d4d7d9;
  font-weight: bold;
  padding: 2px 5px;

  &:hover {
    color: white;
  }
`;
