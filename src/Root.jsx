import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Root = () => {

    const navLink = <>
        <div className="block md:flex gap-4 space-y-3 md:space-y-0">
            <p><NavLink>Link1</NavLink></p>
            <p><NavLink>Link1</NavLink></p>
            <p><NavLink>Link1</NavLink></p>
        </div>
    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-[#141A1C] z-[50]">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">Navbar Title</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {navLink}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                {/* Content */}
                <div className="-[-10]">
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side z-50 mt-[63px]">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#111414] !z-[5000]">
                    {/* Sidebar content here */}
                    {navLink}
                </ul>
            </div>
        </div>
    );
};

export default Root;