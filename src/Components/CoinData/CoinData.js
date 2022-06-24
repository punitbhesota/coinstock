import React from "react";
import "./CoinData.css";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="Market-stats">
          <div className="market-head">Market Stats</div>

          <div className="head">
            <span className="text-muted coin-data-category">Market Cap</span>
            <span>{data.market_cap}</span>
          </div>
          <div className="head">
            <span className="text-muted coin-data-category">Total Supply</span>
            <span>{data.total_supply}</span>
          </div>

          <div className="head">
            <span className="text-muted coin-data-category">Volume(24H)</span>
            <span>{data.total_volume}</span>
          </div>

          <div className="head">
            <span className="text-muted coin-data-category">high 24h</span>
            <span>{data.high_24h}</span>
          </div>

          <div className="head">
            <span className="text-muted coin-data-category">
              Circulating Supply
            </span>
            <span>{data.circulating_supply}</span>
          </div>

          <div className="head">
            <span className="text-muted coin-data-category">low 24h</span>
            <span>{data.low_24h}</span>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
