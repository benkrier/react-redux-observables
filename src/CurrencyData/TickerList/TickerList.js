import React from "react";
import styled from "styled-components";

import TickerBox from "../TickerBox/TickerBox";

const TickerList = props => (
  <div>
    <TickerListContainer>
      <TickerBox {...props} />
      <br />
      {/* <code>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </code> */}
    </TickerListContainer>
  </div>
);

export default TickerList;

const TickerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  code {
    color: white;
  }
`;
