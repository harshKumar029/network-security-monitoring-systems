import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Info from '../Assets/icon/Info.svg'
import jsonData from '../Assets/eve.json';

const BarChart = () => {

    
    const categoryCounts = {};

    jsonData.forEach(item => {
        if (item.alert && item.alert.category) {
            const category = item.alert.category;
            if (category in categoryCounts) {
                categoryCounts[category]++;
            } else {
                categoryCounts[category] = 1;
            }
        }
    });

    const labels = Object.keys(categoryCounts);
    const counts = Object.values(categoryCounts);

    const getBackgroundColor = (index) => {
        const colors = ['rgba(75,192,192,0.4)', 'rgba(192,75,192,0.4)', 'rgba(192,192,75,0.4)', 'rgba(75,75,192,0.4)'];
        return colors[index % colors.length];
    };

    const getHoverBackgroundColor = (index) => {
        const colors = ['rgba(75,192,192,0.8)', 'rgba(192,75,192,0.8)', 'rgba(192,192,75,0.8)', 'rgba(75,75,192,0.8)'];
        return colors[index % colors.length];
    };

    const datasets = labels.map((label, index) => ({
        label: label,
        backgroundColor: getBackgroundColor(index),
        borderWidth: 1,
        hoverBackgroundColor: getHoverBackgroundColor(index),
        data: [counts[index]],
        barThickness: 'flex',
        maxBarThickness: 50,
    }));

    const Chartdata = {
        labels: [''],
        datasets: datasets,
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Alert Categories',
                font: {
                    size: 18,
                    weight: 'bold'
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    }
                }
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        size: 14
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Categories'
                },
                ticks: {
                    font: {
                        size: 14
                    }
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Counts'
                },
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 14
                    }
                }
            }
        }
    };

    return (
        <div className=' w-[100%]'>
            <div className='m-7'>
                <div className='w-95% h-[30rem]  border border-[#17263E] rounded-[18px] shadow-md' style={{ backgroundImage: 'linear-gradient(123deg, rgba(11,20,34,1) 0%, rgba(4,10,20,1) 43%, rgba(9,19,35,1) 95%)' }}>
                    <div className='border-b p-4 border-[#17263E]'>
                        <div className='flex justify-between w-[95%] m-auto '>
                            <div>
                                <h3 className='text-white text-2xl font-medium'>Alert Categories</h3>
                                <p className='text-white opacity-50 mt-2'>Bar Chart</p>
                            </div>
                            <img className='ml-auto ' src={Info} alt='INFO' />
                        </div>
                    </div>
                    <div className='p-5 h-[24rem]'>
                        <Bar data={Chartdata} options={options} />
                    </div>
                </div>
            </div>

            <div className='mt-7 h-72 overflow-y-auto'>
                <div className='w-[95%] m-auto'></div>
                <table className="w-[100%] ">
                    <thead className="bg-[#0A1525] sticky top-0 bg-[#0A1525] text-white ">
                        <tr className="bg-[#0A1525]">
                            <th className="py-2 px-7 pl-[%] text-left font-medium">Time</th>
                            <th className="py-2 p-0 text-left font-medium">Alert Signature</th>
                            <th className="py-2 px-4 text-left font-medium">Src IP</th>
                            <th className="py-2 px-4 text-left font-medium">Dest IP</th>
                            <th className="py-2 px-4 text-left font-medium">Src Port</th>
                            <th className="py-2 px-4 text-left font-medium">Dest Port</th>
                        </tr>
                    </thead>

                    <tbody>
                        {jsonData.map((item, index) => (
                            <tr key={index}>
                                <td className='text-[15px] text-[#BBD3FF] font-light py-2 px-7 text-left'>{item.timestamp}</td>
                                <td className='text-[15px] text-[#BBD3FF] font-light py-2 p-0 text-left'>{item.alert ? item.alert.signature : 'Not  Available'}</td>

                                <td className='text-[15px] text-[#BBD3FF] font-light py-2 px-4 text-left'>{item.src_ip}</td>
                                <td className='text-[15px] text-[#BBD3FF] font-light py-2 px-4 text-left'>{item.dest_ip}</td>
                                <td className='text-[15px] text-[#BBD3FF] font-light py-2 px-4 text-left'>{item.src_port}</td>
                                <td className='text-[15px] text-[#BBD3FF] font-light py-2 px-4 text-left'>{item.dest_port}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BarChart;
