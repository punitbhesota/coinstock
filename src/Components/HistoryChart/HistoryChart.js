import React, { useRef, useEffect, useState } from "react";
import "./HistoryChart.css";
import { Chart } from "chart.js";
import { Link } from "react-router-dom";
import { historyOptions } from "./ChartConfigs";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const NavStyle = {
    textDecoration: "None",
  };
  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      console.log("yeah");
      // eslint-disable-next-line no-unused-vars
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              backgroundColor: "#000c18",
              borderColor: "orange",
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <div className="priceAndchange">
          <p className="coinNamebold">
            <h2>{detail.name}</h2>
          </p>
          <p className="priceChange">
            Rs.{detail.current_price.toFixed(2)}
            <p
              className={
                detail.price_change_24h < 0 ? "text-danger" : "text-success"
              }
            >
              {detail.price_change_percentage_24h.toFixed(2)}%
            </p>
          </p>
        </div>
      );
    }
  };
  return (
    <div className="historyChart">
      <Link to="/Cryptocurrency" style={NavStyle}>
        <div className="back">
          <div className="backinside">Back</div>
        </div>
      </Link>
      <div>{renderPrice()}</div>
      <div className="chartdiv">
        <canvas ref={chartRef} id="myChart" width="90%" height="50vh"></canvas>
      </div>

      <div className="inner">
        <button onClick={() => setTimeFormat("24h")} className="button">
          24h
        </button>
        <button onClick={() => setTimeFormat("7d")} className="button">
          7d
        </button>
        <button onClick={() => setTimeFormat("1y")} className="button">
          1y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
