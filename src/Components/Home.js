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
      <div>
        <Particles
          className="backspacebg"
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.02,
              },
              move: {
                direction: "right",
                speed: 0.05,
              },
              size: {
                value: 1,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <Particles
          className="background-particle"
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
              color: {
                value: "#FFFFFF",
              },
              line_linked: {
                // enable: true,
                distance: 200,
                color: {
                  value: "#FFFFFF",
                },
                opacity: 1,
                // width: 1,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <Particles
          className="background-particle2"
          params={{
            particles: {
              number: {
                value: 35,
              },
              size: {
                value: 3,
              },
              // color: {
              //   value: "#005496",
              // },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
      <div className="headings">
        <div className="div1">Interested in </div>
        <div className="cryptodiv">Cryptocurrencies</div>
        <div className="div3">&amp;</div>
        <div className="div4">Stock Market</div>
        <div className="div5">We have got you covered</div>
        <div className="div6">
          Track prices of your favorite cryptocurrencies and stocks here....
        </div>
      </div>
      <Link to="/Cryptocurrency" style={navStyles}>
        <button className="clickhere">Click Here</button>
      </Link>
    </div>
  );
}

export default Home;
