import { Link } from "react-router-dom";
import Payment from "../Payment/Payment";
import { useState } from "react";
import Wp from "../../components/Wp";

const Enquiry = () => {
    document.title = 'RS Motors | Inquiry'
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    // Form Data = 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [vehicleName, setVehicleName] = useState('');
    const [year, setYear] = useState('');
    const [fueltype, setFueltype] = useState('');
    const [bodyType, setBodyType] = useState('');

    const info = { name, email, vehicleName, year, fueltype, bodyType }


    return (
        <div className="flex justify-center" data-aos="fade-left">
            <div className=" text-white  rounded-md py-20  w-full md:max-w-lg px-5">
                <h1 className="text-2xl text-center text-white mb-4 mt-10 uppercase"> Inquire your Dream car with <br /> RS Motors International</h1>
                <p className="text-center mb-10 opacity-75">At RS Motors International, we are committed to providing a premium and personalized service to our valued customers worldwide. Our decision to request a payment for car inquiries is rooted in our dedication to delivering exceptional experiences and ensuring that every inquiry receives the attention and commitment it deserves.</p>
                <form className="w-full mx-auto rounded-md">
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Name</label>
                        <input type="text" name="name" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Your Name" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Email</label>
                        <input type="email" name="email" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Your Email" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Vehicle Name</label>
                        <input type="text" name="title" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Vehicle Name" onChange={(event) => setVehicleName(event.target.value)} />
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Year</label>
                            <input type="number" name="year" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="year" onChange={(event) => setYear(event.target.value)} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-1 md:gap-6">

                        <div className="relative z-0 w-full mb-5 group">
                            <div className="relative z-0 w-full  group">
                                <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Fuel type</label>
                                <select
                                    type="text"
                                    name="fuelType"
                                    id="floating_first_name"
                                    className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
                                    placeholder=" "
                                    required
                                    onChange={(event) => setFueltype(event.target.value)}
                                >
                                    <option value="" className="" disabled selected>
                                        Fuel type
                                    </option>
                                    <option value="Diesel" className="text-white">
                                        Diesel
                                    </option>
                                    <option value="Petrol" className="text-white">
                                        Petrol
                                    </option>
                                    <option value="Hybrid" className="text-white">
                                        Hybrid
                                    </option>
                                    <option value="Electric" className="text-white">
                                        Electric
                                    </option>
                                </select>

                            </div>
                        </div>
                    </div>


                    <div className="grid md:grid-cols-1 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Body Type</label>
                            <select
                                type="text"
                                name="bodyType"
                                id="floating_first_name"
                                className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
                                placeholder=" "
                                required
                                onChange={(event) => setBodyType(event.target.value)}
                            >
                                <option value="" className="" disabled selected>
                                    Body Type
                                </option>
                                <option value="SUV Coupe Sedan" className="text-white">
                                    SUV Coupe Sedan
                                </option>
                                <option value="Crossover" className="text-white">
                                    Crossover
                                </option>
                                <option
                                    value="Hard Top Convertible Pick Up Truck"
                                    className="text-white"
                                >
                                    Hard Top Convertible Pick Up Truck
                                </option>
                                <option value="Hatchback" className="text-white">
                                    Hatchback
                                </option>
                                <option value=" Soft Top Convertible" className="text-white">
                                    Soft Top Convertible
                                </option>
                                <option value="Sports Car Van" className="text-white">
                                    Sports Car Van
                                </option>
                                <option value="Wagon" className="text-white">
                                    Wagon
                                </option>
                                <option value="Utility Truck" className="text-white">
                                    Utility Truck
                                </option>
                                <option value=" Other" className="text-white">
                                    Other
                                </option>
                            </select>
                        </div>
                    </div>

                    <Link >
                        <button
                            onClick={handleOpen}
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-md text-base  px-5 py-2.5 text-center w-full"
                        >
                            Pay
                        </button>
                    </Link>
                </form>
            </div>
            <Payment
                open={open}
                setOpen={setOpen}
                information={info}
            ></Payment>

        </div>

    );
};

export default Enquiry;