"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "PnL",
        data: [10000, -5000, 15000, 8000, 20000, 12000],
        borderColor: "#22c55e",
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "#0b0f1a", color: "#fff" }}>
      
      {/* Sidebar */}
      <div style={{ width: 220, background: "#111827", padding: 20 }}>
        <h2>🚀 TradLink</h2>
        <p>Dashboard</p>
        <p>AI Assistant</p>
        <p>Bot Market</p>
        <p>Community</p>
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: 20 }}>
        
        {/* Top Bar */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Trading Dashboard</h1>
          <button style={{ background: "#22c55e", padding: 10, border: "none" }}>
            + New Trade
          </button>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          <Card title="Total Balance" value="₹1,25,000" />
          <Card title="Today PnL" value="+₹8,200" />
          <Card title="Win Rate" value="72%" />
        </div>

        {/* Chart */}
        <div style={{ marginTop: 30, background: "#111827", padding: 20 }}>
          <Line data={data} />
        </div>

        {/* Trades Table */}
        <div style={{ marginTop: 30 }}>
          <h2>Recent Trades</h2>
          <table width="100%" style={{ marginTop: 10 }}>
            <thead>
              <tr>
                <th>Pair</th>
                <th>Type</th>
                <th>PnL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BTC/USDT</td>
                <td>Buy</td>
                <td style={{ color: "green" }}>+₹5000</td>
              </tr>
              <tr>
                <td>NIFTY</td>
                <td>Sell</td>
                <td style={{ color: "red" }}>-₹2000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={{ background: "#111827", padding: 20, flex: 1 }}>
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}
export default function Dashboard() {
  return <h1>Dashboard Working ✅</h1>;
}
