"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Tracking() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "PnL",
        data: [10000, -5000, 15000, 8000, 20000],
        borderColor: "#22c55e"
      }
    ]
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📊 Tracking Dashboard</h1>
      <Line data={data} />
    </div>
  );
}
