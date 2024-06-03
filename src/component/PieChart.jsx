
import React from 'react'
import Info from '../Assets/icon/Info.svg'

import { useRef, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import dataset from '../Assets/eve.json';
Chart.register(...registerables);


const PieChart = () => {
    let alerts = useRef(0)
    let dns = useRef(0)
    let fileinfo = useRef(0)
    let ssh = useRef(0)
    let http = useRef(0)

    console.log(dataset)
    dataset.map(data => (
        data.event_type == "alert" ? alerts.current += 1 : null,
        data.event_type == "ssh" ? ssh.current += 1 : null,
        data.event_type == "http" ? http.current += 1 : null,
        data.event_type == "dns" ? dns.current += 1 : null,
        data.event_type == "fileinfo" ? fileinfo.current += 1 : null
    ))


    console.log(alerts.current, ssh.current, dns.current, http.current)
    const chartRef = useRef(null);


    const [chartData, setChartData] = useState({
        labels: ['alerts', 'ssh', 'dns', 'http', 'fileinfo'],
        datasets: [
            {
                label: 'count',
                data: [alerts.current, ssh.current, dns.current, http.current, fileinfo.current],
                backgroundColor: ['#213453', '#040A14', '#111E34', '#213453', '#213235'],
                borderWidth: 0
            },
        ],
    });

    const config = {
        type: 'pie',
        data: chartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: false,
                    // text: 'Chart.js Pie Chart',
                },
            },
        },
    };


    return (
        <div className='border w-[28%] border-[#16253B] rounded-[19px]' style={{ backgroundImage: 'linear-gradient(123deg, rgba(11,20,34,1) 0%, rgba(4,10,20,1) 43%, rgba(9,19,35,1) 95%)' }}>
            <div>
                <div className='border-b border-[#17263E]'>
                    <div className='flex p-8 w-[95%] m-auto justify-between '>
                        <div>
                            <h3 className='text-white text-2xl font-medium'>Event Types</h3>
                            <p className='text-white opacity-50 mt-2'>Pie Chart</p>
                        </div>
                        <img className='ml-auto ' src={Info} alt='INFO' />
                    </div>
                </div>
                <div className='p-8 h-80 '>
                    <Pie ref={chartRef} data={chartData} options={config.options}  />
                </div>
            </div>

            <div className='flex flex-wrap w-full justify-start px-8 space-x-2 mb-8'>
                <div className='flex'>
                    <div className='m-auto w-4 h-4 rounded-full bg-[#213453] mr-1'></div>
                    <div className='text-white text-xs'>alerts</div>
                </div>
                <div className='flex'>
                    <div className='m-auto w-4 h-4 rounded-full bg-[#040A14] mr-1'></div>
                    <div className='text-white text-xs'>ssh</div>
                </div>
                <div className='flex'>
                    <div className='m-auto w-4 h-4 rounded-full bg-[#111E34] mr-1'></div>
                    <div className='text-white text-xs'>dns</div>
                </div>
                <div className='flex'>
                    <div className='m-auto w-4 h-4 rounded-full bg-[#213445] mr-1'></div>
                    <div className='text-white text-xs'>http</div>
                </div>
                <div className='flex'>
                    <div className='m-auto w-4 h-4 rounded-full bg-[#213235] mr-1'></div>
                    <div className='text-white text-xs'>fileinfo</div>
                </div>
            </div>
        </div>
    )
}

export default PieChart