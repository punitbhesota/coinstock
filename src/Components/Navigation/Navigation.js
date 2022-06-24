import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Hamburger from "../hamburger-white.png";
function Navigation() {
  const NavStyle = {
    color: "white",
    textDecoration: "None",
  };

  const openNav = () => {
    if (document.querySelector(".navformobile").style.display === "flex") {
      return (document.querySelector(".navformobile").style.display = "none");
    } else {
      return (document.querySelector(".navformobile").style.display = "flex");
    }
  };

  return (
    <div className="navigation">
      <div className="navigation2">
        <Link className="logo" to="/" style={NavStyle}>
          <div className="logo">THECOINSTOCK</div>
        </Link>

        <div className="navlinks">
          <Link to="/Cryptocurrency" style={NavStyle}>
            <div className="navcryptocurrency ">Cryptocurrency</div>
          </Link>
          <Link to="/Stockmarket" style={NavStyle}>
            <div className="navstockmarket ">Stock Market</div>
          </Link>
        </div>
        <div onClick={openNav} className="navbutton">
          <img src={Hamburger} alt="open" />
        </div>
      </div>
      <div className="navformobile">
        <Link onClick={openNav} to="Cryptocurrency" style={NavStyle}>
          <div className="navcryptocurrency ">Cryptocurrency</div>
        </Link>
        <Link onClick={openNav} to="Stockmarket" style={NavStyle}>
          <div className="navstockmarket ">Stock Market</div>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
