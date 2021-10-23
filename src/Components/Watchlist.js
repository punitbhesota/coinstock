import React, { useEffect, useState, useContext } from "react";
import Crypto from "./Crypto";
import { WatchListContext } from "./WatchListContext";
import coinGecko from "./coinGecko";
import { useAlert } from "react-alert";
// import Catloading from "./catloading.jpg";
import Catloading2 from "./cover4.jpg";
import DeleteIcon from "./deleteIcon.png";

import "./Watchlist.css";

function Watchlist() {
  const [coins, setCoins] = useState([]);
  const { watchlist, deleteCoin } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);
  const alert = useAlert();

  const handleDeleteClick = (coin) => {
    alert.show(
      <div style={{ textTransform: "capitalize" }}>
        {coin} deleted from watchlist
      </div>,
      { timeout: 1500 }
    );
    deleteCoin(coin);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "inr",
          ids: watchlist.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    if (watchlist.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchlist]);

  const renderCoins = () => {
    // const memegenerator = [{ Catloading }, { Catloading2 }, { DoubleCat }];
    if (isLoading) {
      return (
        <div className="memegenerator">
          <img src={Catloading2} alt="LOADING..." />
        </div>
      );
    }
    return (
      <div className="Watchlist">
        <div className="allcrypto">
          {coins.map((coin) => {
            return (
              <div key={coin.id} className="oneCrypto">
                <div className="watchlist-crypto">
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
                </div>
                <button
                  onClick={() => handleDeleteClick(coin.id)}
                  className="deleteToWatchlist"
                >
                  <img src={DeleteIcon} alt="delete" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return <div className="Watchlist">{renderCoins()}</div>;
}
export default Watchlist;
