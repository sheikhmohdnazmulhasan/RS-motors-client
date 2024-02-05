import { Link, NavLink, Outlet } from "react-router-dom";
import logo from './assets/LOGO.svg';
import Headroom from "react-headroom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";


const Root = () => {
    const { user } = useContext(AuthContext);

    // Rohansufian2020&

    console.log(' Developed by Sheikh Mohammad Nazmul Hasan || nazmulofficial@outlook.com');

    const navLink = <>
        <div className="block md:flex gap-4 space-y-3 md:space-y-0">
            <p><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#BFA37C] font' : 'text-gray-200'}>Home</NavLink></p>
            {/* <p><NavLink to={'/shop'} className={({ isActive }) => isActive ? 'text-[#BFA37C] font' : 'text-gray-200'}>Shop</NavLink></p> */}
            <p><NavLink to={'/portfolio'} className={({ isActive }) => isActive ? 'text-[#BFA37C] font' : 'text-gray-200'}>Parts</NavLink></p>
            <p><NavLink to={'/portfolio'} className={({ isActive }) => isActive ? 'text-[#BFA37C] font' : 'text-gray-200'}>Portfolio</NavLink></p>
            {!user && <p><NavLink to={'/our-process'} className={({ isActive }) => isActive ? 'text-[#BFA37C] font' : 'text-gray-200'}> Our Process</NavLink></p>}
            {!user && <p><NavLink to={'/inquiry'} className={({ isActive }) => isActive ? 'text-[#BFA37C] font' : 'text-gray-200'}>Inquiry</NavLink></p>}
            {/* {!user && <p><NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-[#BFA37C] font' : 'text-gray-200'}>About</NavLink></p>} */}

            {user && <p><NavLink to={'/admin/dashboard'} className={({ isActive }) => isActive ? 'text-[#BFA37C] font' : 'text-gray-200'}>Dashboard</NavLink></p>}
            {/* <p><NavLink to={'/contact'} className={({ isActive }) => isActive ? 'text-[#BFA37C] font' : 'text-gray-200'}>Contact</NavLink></p> */}
        </div>
    </>

    return (
        <div className="">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <Headroom className="z-[3000]"> <div className="w-full md:px-10 navbar border-b border-gray-500 bg-[#141A1C] z-[50]">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 justify-end md:justify-normal">
                            <Link className="w-[50%] md:w-[16%]" to={'/'}><img src={logo} alt="" /></Link>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal text-white">
                                {/* Navbar menu content here */}
                                {navLink}
                            </ul>
                        </div>
                    </div></Headroom>
                    {/* Page content here */}
                    {/* Content */}
                    <div className="-[-10] overflow-hidden min-h-screen">
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side z-50 mt-[63px]">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#111414] !z-[5000] text-white">
                        {/* Sidebar content here */}
                        {navLink}
                    </ul>
                </div>
            </div>

            <footer className=" shadow bg-black">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to={'/'} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-8" alt="Flowbite Logo" />
                            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to={'/about'} className="hover:underline me-4 md:me-6">About</Link>
                            </li>
                            <li>
                                <Link to={'/privacy-policy'} className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to={'/terms-and-conditions'} className="hover:underline me-4 md:me-6">Terms and Conditions</Link>
                            </li>
                            <li>
                                <Link to={'/contact'} className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a className="hover:underline cursor-pointer">RS Motors International</a>. All Rights Reserved.</span>
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Developed by <a href="https://intellitixdev.com" target="_blank" rel="noreferrer" className="hover:underline">Intellitix Technology</a> </span>

                    <div className="text-white flex text-xl gap-3 justify-center mt-4">
                        <a href="https://www.instagram.com/rsmotorsinternational" target="_blank" rel="noreferrer">
                            <IoLogoInstagram className="hover:scale-110 transition-all cursor-pointer" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100085850648989" target="_blank" rel="noreferrer">
                            <FaSquareFacebook className="hover:scale-110 transition-all cursor-pointer" />
                        </a>

                    </div>
                </div>
            </footer>


        </div>
    );
};

export default Root;