import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


const Navbar = () => {
    // console.log('Developed by Sheikh Mohammad Nazmul Hasan || nazmulofficial@outlook.com');

    const navLinks = <div className="md:flex items-center text-white">
        <div className="md:flex gap-4 space-y-3 md:space-y-0" onClick={() => setOpenSubMenu(false)}>
            <p> <NavLink to={'/'} className={({ isActive }) => isActive ? 'font-semibold uppercase text-[#3EA354]' : 'font-semibold uppercase hover:text-[#3EA354]'}>Home</NavLink></p>
            <p><NavLink to={'/services'} className={({ isActive }) => isActive ? 'font-semibold uppercase text-[#3EA354]' : 'font-semibold uppercase hover:text-[#3EA354]'}>Services</NavLink></p>
        </div>
        <div className="md:flex gap-4 md:ml-3 space-y-3 md:space-y-0" onClick={() => setOpenSubMenu(false)}>
            <p> <NavLink to={'/media'} className={({ isActive }) => isActive ? 'font-semibold uppercase text-[#3EA354]' : 'font-semibold uppercase hover:text-[#3EA354]'}>Media</NavLink></p>
            <p><NavLink to={'/about'} className={({ isActive }) => isActive ? 'font-semibold uppercase text-[#3EA354]' : 'font-semibold uppercase hover:text-[#3EA354]'}>About</NavLink></p>
            <p><NavLink to={'/contact'} className={({ isActive }) => isActive ? 'font-semibold uppercase text-[#3EA354]' : 'font-semibold uppercase hover:text-[#3EA354]'}>Contact</NavLink></p>
        </div>
    </div>

    return (
        <div>
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Navbar */}
                    <Headroom className=" !bg-black z-[50000000000]"> <div className={hideTopNavbar ? 'w-full navbar !bg-black' : 'w-full navbar !bg-black shadow-lg'}>
                        <div className="flex-none lg:hidden" onClick={() => setHideTopNavbar(!hideTopNavbar)}>
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="hidden md:ml-7 md:block flex-1 px-2 mx-2">
                            <Link to={'/'}> <img className="w-[60px]" src={logo} alt="" /></Link>
                        </div>
                        <div className="flex-none hidden lg:block ">
                            <ul className="menu menu-horizontal md:mr-7 ">
                                {/* Navbar menu content here */}
                                {navLinks}
                            </ul>
                        </div>
                        <div className=" flex md:hidden justify-end flex-1">
                            <Link to={'/'}> <img className="w-[60px]" src={logo} alt="" /></Link>
                        </div>
                    </div></Headroom>
                    {/* Page content here */}
                    {/* OutLet */}
                    <div className="min-h-screen overflow-hidden"><Outlet onClick={() => setHideTopNavbar(!hideTopNavbar)} /></div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full !bg-black pt-20 block md:hidden">
                        {/* Sidebar content here */}
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;