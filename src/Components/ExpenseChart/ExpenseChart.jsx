// components/ExpenseChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './ExpenseChart.css'; // Make sure this file exists
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  const chartData = {
    labels: expenses.map(item => item.title),
    datasets: [
      {
        label: 'Expense Amount (₹)',
        data: expenses.map(item => item.amount),
        backgroundColor: 'rgba(30, 42, 56, 0.7)', // Matches your sidebar color
        borderColor: 'rgba(30, 42, 56, 1)',
        borderWidth: 1,
        barThickness: 30,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#1e2a38'
          
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#1e2a38'
        }
      },
      y: {
        ticks: {
          color: '#1e2a38'
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <div className="chart-title">Expenses</div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ExpenseChart;
