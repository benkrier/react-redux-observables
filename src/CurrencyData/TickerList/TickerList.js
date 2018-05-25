import React from "react";
import styled from "styled-components";

import TickerBox from "../TickerBox/TickerBox";

const TickerList = props => (
  <div>
    <TickerListContainer>
      {props.data.map(ticker => {
        return <TickerBox tickerName={ticker} />;
      })}
    </TickerListContainer>
  </div>
);

export default TickerList;

const TickerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
