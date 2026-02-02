import { TrendingUp, BarChart3 } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './CashFlow.css';

/* Register Chart.js modules ONCE */
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const CashFlow = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [1200, 1900, 3000, 2500, 3200, 3800, 4500],
        borderColor: '#ff782d',
        backgroundColor: 'rgba(255, 120, 45, 0.15)',
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { color: '#f1f5f9' },
      },
    },
  };

  return (
    <div className="cash-flow-card card">
      <div className="cash-flow-header">
        <h2 className="title">Cash Flow</h2>
        <div className="cash-actions">
          <TrendingUp size={18} />
          <BarChart3 size={18} />
        </div>
      </div>

      <div className="cash-summary">
        <TrendingUp className="trend-icon" />
        <span>Savings</span>
        <span className="success">+2.52%</span>
      </div>

      <div className="chart-wrapper">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CashFlow;
