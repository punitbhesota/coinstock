import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gainers.css";
import Crypto from "../Crypto/Crypto";
function Gainers() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const compare = (a, b) => {
    if (a.price_change_percentage_24h < b.price_change_percentage_24h) {
      return 1;
    } else {
      return -1;
    }
  };
  return (
    <div className="Gainers">
      {coins
        .sort(compare)
        .slice(0, 10)
        .map((coin) => {
          return (
            <Crypto
              idname={coin.id}
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              market_cap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
    </div>
  );
}

export default Gainers;
