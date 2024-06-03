import React from 'react'
import GreenChart from '../Assets/img/GreenChart.svg'
import RedChart from '../Assets/img/RedChart.svg'
import VilotChart from '../Assets/img/VilotChart.svg'

const Statistic = () => {
    return (
        <div className=' my-7'>

            <div className='flex justify-between items-center p-7 rounded-[19px]' style={{ backgroundImage: 'linear-gradient(117deg, rgba(11,20,34,1) 0%, rgba(4,10,20,1) 95%, rgba(4,10,20,1) 95%)', border: '1px solid rgb(23,38,62)' }}>
                <div className=' border border-[#17263E] rounded-[18px] flex justify-between items-center p-4 w-[32%] relative' style={{ backgroundImage: 'linear-gradient(123deg, rgba(11,20,34,1) 0%, rgba(4,10,20,1) 43%, rgba(9,19,35,1) 95%)' }}>
                    <div>
                        <p className='text-[#748291] opacity-65 text-sm font-normal'>Statistics</p>
                        <h3 className='text-[#748291] font-semibold'>Active TCP</h3>
                        <h5 className='text-white font-semibold text-[3rem]'>4526</h5>
                        <div className='relative w-16 flex justify-center items-center'>
                            <div className='absolute inset-0 rounded-[7px] bg-[#1AFF91] opacity-30'></div>
                            <p className='relative text-[#3DFF67] pr-2 z-10'>60%</p>
                        </div>
                    </div>
                    <img className='absolute right-0 bottom-0 w-40' src={GreenChart} alt='chart_img' />
                </div>

                <div className=' border border-[#17263E] rounded-[18px] flex justify-between items-center p-4 w-[32%] relative' style={{ backgroundImage: 'linear-gradient(123deg, rgba(11,20,34,1) 0%, rgba(4,10,20,1) 43%, rgba(9,19,35,1) 95%)' }}>
                    <div>
                        <p className='text-[#748291] opacity-65 text-sm font-normal'>Statistics</p>
                        <h3 className='text-[#748291] font-semibold'>Active UDP</h3>
                        <h5 className='text-white font-semibold text-[3rem]'>2026</h5>
                        <div className='relative w-16 flex justify-center items-center'>
                            <div className='absolute inset-0 rounded-[7px] bg-[#1AFF91] opacity-30'></div>
                            <p className='relative text-[#3DFF67] pr-2 z-10'>40%</p>
                        </div>
                    </div>
                    <img className='absolute right-0 bottom-0 w-40' src={RedChart} alt='chart_img' />
                </div>

                <div className=' border border-[#17263E] rounded-[18px] flex justify-between items-center p-4 w-[32%] relative' style={{ backgroundImage: 'linear-gradient(123deg, rgba(11,20,34,1) 0%, rgba(4,10,20,1) 43%, rgba(9,19,35,1) 95%)' }}>
                    <div>
                        <p className='text-[#748291] opacity-65 text-sm font-normal'>Statistics</p>
                        <h3 className='text-[#748291] font-semibold'>Alert Count</h3>
                        <h5 className='text-white font-semibold text-[3rem] mb-6'>206</h5>
                        {/* <div className='relative w-16 flex justify-center items-center'>
                            <div className='absolute inset-0 rounded-[7px] bg-[#1AFF91] opacity-30'></div>
                            <p className='relative text-[#3DFF67] pr-2 z-10'>60%</p>
                        </div> */}
                    </div>
                    <img className='absolute right-0 bottom-0 w-40' src={VilotChart} alt='chart_img' />
                </div>
            </div>

        </div>
    )
}

export default Statistic