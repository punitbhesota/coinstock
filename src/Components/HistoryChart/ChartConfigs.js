export const historyOptions = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5,
  },

  animation: {
    duration: 1000,
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [
      {
        type: "time",
        distribution: "linear",
        // display: false,
      },
    ],
    yAxes: [
      {
        // display: false,
      },
    ],
  },
};
