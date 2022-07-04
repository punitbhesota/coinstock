import React from "react";
import "./Home.css";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";

const navStyles = {
  textDecoration: "None",
  zIndex: 300,
};
function Home() {
  return (
    <div className="Home">
      <div className="home--top">THECOINSTOCK</div>
      <div className="bottom--left-right">
        <div className="left">
          <div className="div1">Interested in </div>
          <div className="div2">Cryptocurrencies</div>
          <div className="div3">&amp; Stock Market</div>
          {/* <div className="div4">
          Track prices of your favorite cryptocurrencies and stocks here....
        </div> */}

          <Link to="/Cryptocurrency" style={navStyles} className="clickhere">
            Click Here
          </Link>
        </div>
        <div className="right">
          <img src="./crypt4.png" alt="invest now" />
        </div>
      </div>
    </div>
  );
}

export default Home;
