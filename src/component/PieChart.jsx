import React from 'react'
import Info from '../Assets/icon/Info.svg'

const PieChart = () => {
    return (
        <div className=' w-[300px] h-[600px] border border-[#16253B] rounded-[19px]' style={{ backgroundImage: 'linear-gradient(123deg, rgba(11,20,34,1) 0%, rgba(4,10,20,1) 43%, rgba(9,19,35,1) 95%)' }}>
            <div className=' w-95% mr-auto flex justify-between px-8 py-8 border-b-2'>
                <div>
                    <h3>Event Types</h3>
                    <p>Secondary Text</p>
                </div>
                <img className='' src={Info} alt='INFO'/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default PieChart