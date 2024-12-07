import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { GetLeadsSource } from '../apis/leads.api';

ChartJS.register(ArcElement, Tooltip, Legend);

const LeadSourceGraph: React.FC = () => {
  const [data, setData] = useState<{ source: string; count: number }[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res: any = await GetLeadsSource();
        setData(res.data);
      } catch (error) {
        console.error('Error fetching lead source data:', error);
      }
    }
    fetchData();
  }, []);

  const chartData = {
    labels: data.map((item) => item.source),
    datasets: [
      {
        data: data.map((item) => item.count),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
        hoverBackgroundColor: [
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

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <div
      style={{ width: '40%', margin: '0 auto' }}
      className="flex flex-col gap-4 text-center"
    >
      <h2>Lead Source Analysis</h2>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default LeadSourceGraph;
