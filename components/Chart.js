import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ChartComponent() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Profit",
        data: [10000, 5000, 15000, 8000, 20000],
        borderColor: "#22c55e",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="h-64">
      <Line data={data} />
    </div>
  );
}
