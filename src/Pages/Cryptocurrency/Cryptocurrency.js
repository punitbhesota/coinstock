import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import axios from "axios";
import "./Cryptocurrency.css";
import Crypto from "../../Components/Crypto/Crypto";
import Gainers from "../Gainers/Gainers";
import Losers from "../Losers/Losers";
import { WatchListContext } from "../Watchlist/WatchListContext";
import Watchlist from "../Watchlist/Watchlist";
import { useAlert } from "react-alert";

function Cryptocurrency() {
  const { path, url } = useRouteMatch();
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { addCoin } = useContext(WatchListContext);
  const alert = useAlert();

  const NavStyle = {
    textDecoration: "None",
    color: "black",
  };
  const Changehandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
    setIsLoading(false);
  }, []);

  const FilteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddClick = (coin) => {
    addCoin(coin);
    alert.show(
      <div style={{ textTransform: "capitalize" }}>
        {coin} added to watchlist
      </div>,
      { type: "success", timeout: 1500 }
    );
  };
  const innerNavForMobileClick = () => {
    if (document.querySelector(".innerNavPointers")) {
      return (document.querySelector(".innerNavPointers").style.border =
        "orange");
    }
  };
  const renderCoins = () => {
    if (isLoading) {
      return (
        <>
          <img className="memegenerator" src="../cover4.jpg" alt="loading" />
        </>
      );
    }
    const AllCrypto = () => (
      <div className="allcrypto">
        {FilteredCoins.map((coin) => {
          return (
            <div key={coin.id} className="oneCrypto">
              <div className="crypto-main">
                <Crypto
                  key={coin.id}
                  idname={coin.id}
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
                onClick={() => handleAddClick(coin.id)}
                className="addToWatchlist"
              >
                <img
                  className="addtowatchbg"
                  src="../AddCoinIcon.png"
                  alt="Add"
                />
              </button>
            </div>
          );
        })}
      </div>
    );

    return (
      <div className="cryptocurrency">
        <div className="Crypto-Page-Nav">
          <div className="innerNav">
            <div className="crypto-coin-search">
              <form>
                <input
                  type="text"
                  placeholder="Search for assets"
                  className="crypto-coin-input"
                  onChange={Changehandler}
                />
              </form>
            </div>

            <Link to={`${url}`} style={NavStyle}>
              <div className="innernavi AllCrypto">All Assets</div>
            </Link>
            <Link to={`${url}/Watchlist`} style={NavStyle}>
              <div className="innernavi navWatchlists">Watchlist</div>
            </Link>
            <Link to={`${url}/Gainers`} style={NavStyle}>
              <div className="innernavi navGainers">Top Gainers</div>
            </Link>
            <Link to={`${url}/Losers`} style={NavStyle}>
              <div className="innernavi navLosers">Top Losers</div>
            </Link>
          </div>
          <div className="headers">
            <div className="Name">Name</div>
            <div className="Symbol">     </div>
            <div className="Price">Price</div>
            <div className="Change">Change</div>
            <div className="Volume">Volume</div>
            <div className="Market">Market Cap</div>
          </div>
        </div>
        <div className="innerNavForMobile">
          <Link onClick={innerNavForMobileClick} to={`${url}`} style={NavStyle}>
            <div onClick={innerNavForMobileClick} className="innerNavPointers">
              All Assets
            </div>
          </Link>
          <Link
            onClick={innerNavForMobileClick}
            to={`${url}/Watchlist`}
            style={NavStyle}
          >
            <div className="innerNavPointers">Watchlist</div>
          </Link>
          <Link
            onClick={innerNavForMobileClick}
            to={`${url}/Gainers`}
            style={NavStyle}
          >
            <div className="innerNavPointers">Gainers</div>
          </Link>
          <Link
            onClick={innerNavForMobileClick}
            to={`${url}/Losers`}
            style={NavStyle}
          >
            <div className="innerNavPointers">Losers</div>
          </Link>
        </div>
        <Switch>
          <Route exact path={`${path}/`} component={AllCrypto} />
          <Route path={`${path}/Gainers`} component={Gainers} />
          <Route path={`${path}/Losers`} component={Losers} />
          <Route path={`${path}/Watchlist`} component={Watchlist} />
        </Switch>
      </div>
    );
  };
  return <div>{renderCoins()}</div>;
}

export default Cryptocurrency;
