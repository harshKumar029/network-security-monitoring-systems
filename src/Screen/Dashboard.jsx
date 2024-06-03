import React from 'react'
import Statistic from '../component/Statistic'
import PieChart from '../component/PieChart'
import BarChart from '../component/BarChart'
import LineChart from '../component/LineChart'

const Dashboard = () => {
  return (
    <>
     <div className=' w-[90%] m-auto my-12'>
        <h1 className=' text-white font-semibold text-[35px]'>Dashboard</h1>
        <Statistic/>
        <div className='flex justify-around flex-wrap py-8 items-center mt-10 rounded-[19px]  ' style={{ backgroundImage: 'linear-gradient(117deg, rgba(11,20,34,1) 0%, rgba(4,10,20,1) 95%, rgba(4,10,20,1) 95%)', border: '1px solid rgb(23,38,62)' }}>
            <PieChart/>
            <LineChart/>
            <BarChart/>
        </div>
     </div>
    </>
  )
}

export default Dashboard