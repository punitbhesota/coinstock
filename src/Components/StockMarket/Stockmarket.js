import React from "react";
import "./Stockmarket.css";

const memegenerator = ["5n6nrq.jpg", "BabyCommingSoon.jpg", "stay-tuned.jpg"];
const choosePic = () => {
  return (
    <>
      <img
        className="Memegenerator"
        src={memegenerator[Math.floor(Math.random() * memegenerator.length)]}
        alt="coming soon"
      />
    </>
  );
};
function Stockmarket() {
  return <div className="Stockmarket">{choosePic()}</div>;
}

export default Stockmarket;
