import React from "react";
import TickerBox from "../TickerBox/TickerBox";

const TickerList = props => (
  <div>
    <div className="tickerList">
      {props.data.map(ticker => {
        return <TickerBox tickerName={ticker} />;
      })}
    </div>
  </div>
);

export default TickerList;
