// components/ScoreRadialChart.tsx
'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const ScoreRadialChart = ({ score }: { score: number }) => {
  const remaining = 100 - score;
  
  const data = {
    labels: ['Your Score', 'Remaining'],
    datasets: [
      {
        data: [score, remaining],
        backgroundColor: ['#3b82f6', '#e5e7eb'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="relative w-full h-48">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold">{score}</span>
      </div>
    </div>
  );
};