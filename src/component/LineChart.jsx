import React, { useState, useEffect } from 'react';
import Info from '../Assets/icon/Info.svg';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import dataset from '../Assets/eve.json';

Chart.register(...registerables);

const LineChart = () => {
  // Initialize state for chart data
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Alerts',
        data: [],
        borderColor: '#F94144',
        borderWidth: 1,
        tension: 0.4,
        fill: false,
        pointRadius: [],
        pointHitRadius: []
      },
      {
        label: 'SSH',
        data: [],
        borderColor: '#F3722C',
        borderWidth: 1,
        tension: 0.4,
        fill: false,
        pointRadius: [],
        pointHitRadius: []
      }
    ]
  });

  // Function to round down to the nearest 5-minute interval
  const roundTo5Minutes = (date) => {
    const minutes = Math.floor(date.getMinutes() / 5) * 5;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), minutes, 0, 0);
  };

  // Calculate counts of alerts and SSH events per 5-minute interval
  useEffect(() => {
    const counts = {};
    dataset.forEach(item => {
      const timestamp = new Date(item.timestamp);
      const interval = roundTo5Minutes(timestamp).toISOString().substring(0, 16).replace('T', ' '); // Format as 'YYYY-MM-DD HH:mm'
      if (!counts[interval]) counts[interval] = { alert: 0, ssh: 0 };
      if (item.event_type === 'alert') counts[interval].alert++;
      if (item.event_type === 'ssh') counts[interval].ssh++;
    });

    const labels = Object.keys(counts);
    const alertsData = labels.map(label => counts[label].alert);
    const sshData = labels.map(label => counts[label].ssh);

    const pointRadiusForData = (data) => data.map(value => value === 0 ? 0 : 3);

    setChartData(prevState => ({
      ...prevState,
      labels: labels,
      datasets: [
        {
          ...prevState.datasets[0],
          data: alertsData,
          pointRadius: pointRadiusForData(alertsData),
          pointHitRadius: pointRadiusForData(alertsData)
        },
        {
          ...prevState.datasets[1],
          data: sshData,
          pointRadius: pointRadiusForData(sshData),
          pointHitRadius: pointRadiusForData(sshData)
        }
      ]
    }));
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time (5-minute intervals)'
        },
        ticks: {
          display: false,

        }
      },
      y: {
        title: {
          display: true,
          text: 'Count'
        },
        ticks: {
          font: {
            size: 12
          }
        }
      }
    }
  };

  return (
    <div className='border w-[65%] border-[#16253B] rounded-[19px]' style={{ backgroundImage: 'linear-gradient(123deg, rgba(11,20,34,1) 0%, rgba(4,10,20,1) 43%, rgba(9,19,35,1) 95%)' }}>
      <div>
        <div className='border-b border-[#17263E]'>
          <div className='flex p-8 w-[95%] m-auto justify-between '>
            <div>
              <h3 className='text-white text-2xl font-medium'>Event Over Time</h3>
              <p className='text-white opacity-50 mt-2'>Line Chart</p>
            </div>
            <img className='ml-auto ' src={Info} alt='INFO' />
          </div>
        </div>
        <div className='p-8 h-80 '>
          <Line data={chartData} options={options} className=' mt-6' />
        </div>
      </div>
      <div className='flex w-full justify-start px-8 space-x-2 mb-8'>
        <div className='flex'>
          <div className='m-auto w-4 h-4 rounded-full bg-[#F94144] mr-1'></div>
          <div className='text-white text-xs'>Alerts</div>
        </div>
        <div className='flex'>
          <div className='m-auto w-4 h-4 rounded-full bg-[#F3722C] mr-1'></div>
          <div className='text-white text-xs'>ssh</div>
        </div>
      </div>
    </div>
  )
}

export default LineChart