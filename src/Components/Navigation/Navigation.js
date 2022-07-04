import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
function Navigation() {
  const NavStyle = {
    color: "orange",
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
          THECOINSTOCK
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
          <img src="../hamburger-white.png" alt="open" />
        </div>
      </div>
      <div className="navformobile">
        <Link onClick={openNav} to="/Cryptocurrency" style={NavStyle}>
          <div className="mobnavcryptocurrency">Cryptocurrency</div>
        </Link>
        <Link onClick={openNav} to="/Stockmarket" style={NavStyle}>
          <div className="mobnavstockmarket ">Stock Market</div>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
