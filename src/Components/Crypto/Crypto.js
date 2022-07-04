import React from "react";
import "./Crypto.css";
import { Link } from "react-router-dom";
const NavStyle = {
  textDecoration: "None",
};
function Crypto({
  idname,
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  market_cap,
}) {
  return (
    <Link to={`/coins/${idname}`} style={NavStyle}>
      <div className="Crypto-coin">
        {/* <table className="crypto-coin-table">
          <tr key={idname}>
            <td className="C-logo">
              <img className="crypto-logo" src={image} alt="crypto" />
            </td>
            <td className="C-name">{name}</td>
            <td className="C-symbol">{symbol}</td>
            <td className="C-price">{price}</td>
            {priceChange < 0 ? (
              <td className="C-priceChange Crypto-coin-priceChange red">
                &nbsp;&nbsp;&nbsp;{priceChange.toFixed(2)}%
              </td>
            ) : (
              <td className="C-priceChange Crypto-coin-priceChange green">
                &nbsp;&nbsp;&nbsp;&nbsp;{priceChange.toFixed(2)}%
              </td>
            )}
            <td className="C-volume">{volume.toLocaleString()}</td>
            <td className="C-market-cap">₹{market_cap.toLocaleString()}</td>
          </tr>
        </table> */}
        <img src={image} alt="crypto" />
        <div className="nameSymbol">
          <h3 className="Crypto-coin-name">&nbsp;&nbsp;&nbsp;{name}</h3>
          <p className="Crypto-coin-symbol">&nbsp;&nbsp;&nbsp;{symbol}</p>
        </div>
        <div className="priceAndPriceChange">
          <p className="Crypto-coin-price">₹{price}</p>
          {priceChange < 0 ? (
            <p className="Crypto-coin-priceChange red">
              &nbsp;&nbsp;&nbsp;{priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="Crypto-coin-priceChange green">
              &nbsp;&nbsp;&nbsp;&nbsp;{priceChange.toFixed(2)}%
            </p>
          )}
        </div>
        <div className="volumeAndMarketCap">
          <p className="Crypto-coin-volume">{volume.toLocaleString()}</p>
          <p className="Crypto-coin-market_cap">
            ₹{market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Crypto;
