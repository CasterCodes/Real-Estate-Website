import React from "react";
import { Bar } from "react-chartjs-2";

const BarGraph = ({ properties }) => {
  const categoryArray = [
    ...new Set(properties.map((property) => property.category)),
  ];
  const count = Object.values(
    properties
      .map((property) => property.category)
      .reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})
  );

  const state = {
    labels: categoryArray,
    datasets: [
      {
        label: "Properties by Category",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        data: count,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Property by category",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "left",
    },
  };
  return <Bar data={state} options={options} />;
};

export default BarGraph;
