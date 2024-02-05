import { signOut } from "firebase/auth";
import { NavLink, Outlet } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../../firebase.config";
import { useState } from "react";

const Dashboard = () => {
    const [isRed, setIsRed] = useState(true);

    function handleLogout() {
        Swal.fire({
            title: "Are you sure?",
            // text: "!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"

        }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth).then(() => {
                    // Sign-out successful.

                    Swal.fire({
                        title: "Logout",
                        text: "Logout Successful!.",
                        icon: "success"
                    });

                }).catch((error) => {
                    // An error happened.
                });

            }
        });
    }

    return (
        <div className="min-h-screen flex">
            <div className="hidden w-[16%] bg-[#241c2b] p-5 md:flex flex-col gap-3">

                <NavLink to={'add-car'} className={({ isActive }) => isActive ? 'text-[#BFA37C]' : 'text-white'} onClick={() => setIsRed(false)}> <p className="w-full bg-black py-2 px-2 rounded text-center font-semibold">Add Car </p></NavLink>

                <NavLink to={'/admin/dashboard/'} className={isRed ? 'text-[#BFA37C]' : 'text-white'} onClick={() => setIsRed(true)}> <p className="w-full bg-black py-2 px-2 rounded text-center font-semibold">Add Portfolio</p></NavLink>

                <NavLink to={'cars'} className={({ isActive }) => isActive ? 'text-[#BFA37C]' : 'text-white'} onClick={() => setIsRed(false)}> <p className="w-full bg-black py-2 px-2 rounded text-center font-semibold">All car </p></NavLink>

                <NavLink to={'portfolios'} className={({ isActive }) => isActive ? 'text-[#BFA37C]' : 'text-white'} onClick={() => setIsRed(false)}> <p className="w-full bg-black py-2 px-2 rounded text-center font-semibold">All Portfolio </p></NavLink>

                <NavLink to={'payments'} className={({ isActive }) => isActive ? 'text-[#BFA37C]' : 'text-white'} onClick={() => setIsRed(false)}> <p className="w-full bg-black py-2 px-2 rounded text-center font-semibold">Payments </p></NavLink>

                <hr />
                <p className="w-full bg-black py-2 px-4 rounded text-center text-white cursor-pointer hover:bg-[#141A1C] font-semibold" onClick={handleLogout}>Logout </p>

            </div>
            <div className="w-full md:w-[84%] bg-black">

                {/* Mobile Menu */}
                <div className="md:hidden flex justify-center bg-[#141A1C] gap-3 py-3 px-2">

                    <NavLink to={'/admin/dashboard/'} className={isRed ? 'text-[#BFA37C]' : 'text-white'} onClick={() => setIsRed(true)}> <p className="w-full bg-black py-2 px-2 rounded text-center font-semibold">Add Portfolio</p></NavLink>

                    <NavLink to={'portfolios'} className={({ isActive }) => isActive ? 'text-[#BFA37C]' : 'text-white'} onClick={() => setIsRed(false)}> <p className="w-full bg-black py-2 px-2 rounded text-center font-semibold">All Portfolio </p></NavLink>

                    <NavLink to={'payments'} className={({ isActive }) => isActive ? 'text-[#BFA37C]' : 'text-white'} onClick={() => setIsRed(false)}> <p className="w-full bg-black py-2 px-2 rounded text-center font-semibold">Payments </p></NavLink>
                </div>

                {/* Main Body */}
                <div className="p-5 md:p-10"><Outlet /></div>
            </div>
        </div>
    );
};

export default Dashboard;