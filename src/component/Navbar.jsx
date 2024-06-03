import React from 'react'
import WiJungleLogo from "../Assets/icon/WiJungle-Logo-White 1.svg"
import Dashboard from "../Assets/icon/Dashboard.svg"
import Logout from "../Assets/icon/Logout.svg"
import Moniters from "../Assets/icon/Moniters.svg"
import Setting from "../Assets/icon/Setting.svg"
import Teams from "../Assets/icon/Teams.svg"
import User from "../Assets/icon/User.svg"

const Navbar = () => {
    return (
        <div className="bg-[#0B1422] border-b-2 border-[#17263E] py-4 px-12">
            <nav className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src={WiJungleLogo} alt='logo' className="h-8" />
                </div>
                <ul className='flex space-x-12'>
                    <li>
                        <img src={Logout} alt='Logout' className="h-6" />
                    </li>
                    <li>
                        <img src={Dashboard} alt='Dashboard' className="h-6" />
                    </li>
                    <li>
                        <img src={Setting} alt='Setting' className="h-6" />
                    </li>
                    <li>
                        <img src={Moniters} alt='Moniters' className="h-6" />
                    </li>
                    <li>
                        <img src={Teams} alt='Teams' className="h-6" />
                    </li>
                </ul>
                <div className="flex items-center">
                    <img src={User} alt='User' className="h-8" />
                </div>
            </nav>
        </div>
    );
};

export default Navbar