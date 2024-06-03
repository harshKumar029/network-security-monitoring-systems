import React from 'react';
import WiJungleLogo from "../Assets/icon/WiJungle-Logo-White 1.svg";
import Logout from "../Assets/icon/Logout.svg";
import Dashboard from "../Assets/icon/Dashboard.svg";
import Setting from "../Assets/icon/Setting.svg";
import Monitors from "../Assets/icon/Moniters.svg";
import Teams from "../Assets/icon/Teams.svg";
import User from "../Assets/icon/User.svg";

const Navbar = () => {
    const navItems = [
        { src: Logout, alt: 'Logout', name: 'Logout' },
        { src: Dashboard, alt: 'Dashboard', name: 'Dashboard' },
        { src: Setting, alt: 'Setting', name: 'Setting' },
        { src: Monitors, alt: 'Monitors', name: 'Monitors' },
        { src: Teams, alt: 'Teams', name: 'Teams' },
    ];

    return (
        <div className="bg-[#0B1422] border-b-2 border-[#17263E] py-4 px-12">
            <nav className="flex justify-between items-center">
                <div className="flex items-center ">
                    <img src={WiJungleLogo} alt='logo' className="h-8" />
                </div>
                <ul className='flex space-x-12'>
                    {navItems.map((item, index) => (
                        <li key={index} className="relative group flex items-center cursor-pointer" >
                            <div className="mr-2" style={{ marginTop: item.src === Monitors ? '6px' : '0' }}>
    <img src={item.src} alt={item.alt} className="h-6 transition-all duration-300 group-hover:-translate-x-8" />
</div>
                            <span className="absolute  left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white text-sm " style={{ pointerEvents: 'none' }} >
                                {item.name}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center">
                    <img src={User} alt='User' className="h-8" />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
