// src/components/PieChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map(row => row.name),
    datasets: [
      {
        label: 'Expenses',
        data: data.map(row => parseFloat(row.amount)),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto mt-8">
      <div className="relative" style={{ height: '400px' }}>
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
