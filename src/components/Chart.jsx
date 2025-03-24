import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const WeatherChart = ({ forecastData }) => {
  if (!forecastData || !forecastData.length) {
    return <p>No forecast data available</p>;
  }

  const labels = forecastData.map((day) => day.datetime);
  const temperatures = forecastData.map((day) => day.temp);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        fill: false,
        backgroundColor: "#D3C0E8",
        borderColor: "#D3C0E8",
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-center text-xl font-bold mb-4">
        7-Day Temperature Trend
      </h2>
      <Line data={data} />
    </div>
  );
};

export default WeatherChart;
