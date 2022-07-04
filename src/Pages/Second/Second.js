import React from "react";
import "./Second.css";

function Second() {
  return (
    <div className="Second">
      <h1 className="Second--heading">About&nbsp; thecoinstock</h1>
      <div className="Second--body">
        <p>
          Thecoinstock is your friendly neighbourhood cryptocurrency price
          tracking website. It is developed using React js. Users can create a
          watchlist of their favourite cryptocurrencies and keep track of their
          prices, volume and market capitalization.
        </p>

        <p>
          The data of cryptocurrencies is fetched from coingecko's Crypto api.
          Coinstock offers fast and reliable cryptocurrency data. Enjoy CRYPTO
          HUNTING :)
        </p>
      </div>
      <div className="Second-footer">
        <div className="Second-footer-top">
          <div className="Snd-logo-title">
            <div className="Snd-logo">THECOINSTOCK</div>
            <div className="Snd-logo-tagline">2022@thecoinstock</div>
          </div>
          <div className="Snd-links">
            <a href="https://github.com/punitbhesota">
              <img src="./github.png" alt="github" />
            </a>
            <a href="https://linkedin.com/in/punitbhesota">
              <img src="./linkedin.png" alt="github" />
            </a>
            <a href="https://instagram.com/punitbhesota">
              <img src="./instgram.png" alt="github" />
            </a>
          </div>
          <div className="Snd-credit">
            <div>Credits&nbsp;</div>
            <img src="./coin-sig.png" alt="Punit Bhesota"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
