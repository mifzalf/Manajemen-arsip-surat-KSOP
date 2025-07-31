import React from 'react';
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Tooltip, Legend } from "chart.js";
import ChartMonthly from '../components/ChartMonthly';
import ChartComparison from '../components/ChartComparison';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Tooltip, Legend);

const stats = [
  { label: "Incoming Letters", value: 120, color: "bg-blue-100 text-blue-600" },
  { label: "Outgoing Letters", value: 80, color: "bg-green-100 text-green-600" },
  { label: "Archives", value: 200, color: "bg-yellow-100 text-yellow-600" },
];

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    { label: "Incoming", data: [20, 30, 40, 35, 50, 60], backgroundColor: "#465fff" },
    { label: "Outgoing", data: [15, 25, 30, 28, 35, 40], backgroundColor: "#34d399" },
  ],
};

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Total Letters",
      data: [35, 55, 70, 63, 85, 100],
      fill: false,
      borderColor: "#465fff",
      tension: 0.4,
    },
  ],
};

const doughnutData = {
  labels: ["Incoming", "Outgoing", "Archive"],
  datasets: [
    {
      data: [120, 80, 200],
      backgroundColor: ["#465fff", "#34d399", "#fbbf24"],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
      {stats.map((stat) => (
        <div key={stat.label} className={`rounded-2xl border border-gray-200 p-6 shadow-sm ${stat.color} dark:border-gray-800`}>
          <div className="text-3xl font-bold">{stat.value}</div>
          <div className="mt-2 text-sm font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">Monthly Letters (Bar)</h3>
        <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">Total Letters (Line)</h3>
        <Line data={lineData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
      </div>
    </div>
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] max-w-md mx-auto">
      <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">Distribution</h3>
      <Doughnut data={doughnutData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} />
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Comparison Chart</h2>
      <ChartComparison />
    </div>
  </div>
);

export default Dashboard;