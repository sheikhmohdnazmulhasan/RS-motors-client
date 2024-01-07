import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="min-h-screen flex">
            <div className="hidden  w-[16%] bg-[#241c2b] p-5 md:flex flex-col gap-3">
                <NavLink className='text-white'> <p className="w-full bg-black py-2 px-4 rounded text-center hover:bg-[#141A1C] font-semibold">Add Car </p></NavLink>

                <NavLink to={'add-portfolio'} className='text-white'> <p className="w-full bg-black py-2 px-4 rounded text-center hover:bg-[#141A1C] font-semibold">Add Portfolio </p></NavLink>

                <hr />
                <NavLink className='text-white'> <p className="w-full bg-black py-2 px-4 rounded text-center hover:bg-[#141A1C] font-semibold">All Car </p></NavLink>

                <NavLink className='text-white'> <p className="w-full bg-black py-2 px-4 rounded text-center hover:bg-[#141A1C] font-semibold">All Portfolio </p></NavLink>

                <hr className="!mx-10" />
                <p className="w-full bg-black py-2 px-4 rounded text-center text-white cursor-pointer hover:bg-[#141A1C] font-semibold">Logout </p>

            </div>
            <div className="w-full md:w-[84%] bg-black">

                {/* Mobile Menu */}
                <div className="md:hidden flex justify-center bg-[#141A1C] gap-3 py-3 px-2">

                    <NavLink className='text-white'> <p className="w-full bg-black py-2 px-4 rounded text-center hover:bg-[#141A1C] font-semibold">Add Car </p></NavLink>

                    <NavLink to={'add-portfolio'} className='text-white'> <p className="w-full bg-black py-2 px-4 rounded text-center hover:bg-[#141A1C] font-semibold">Add Portfolio </p></NavLink>

                    <NavLink className='text-white'> <p className="w-full bg-black py-2 px-4 rounded text-center hover:bg-[#141A1C] font-semibold">All Car </p></NavLink>

                    <NavLink className='text-white'> <p className="w-full bg-black py-2 px-4 rounded text-center hover:bg-[#141A1C] font-semibold">All Portfolio </p></NavLink>
                </div>

                {/* Main Body */}
                <div className="p-5 md:p-10"><Outlet /></div>
            </div>
        </div>
    );
};

export default Dashboard;