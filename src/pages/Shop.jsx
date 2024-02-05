/* eslint-disable no-unused-vars */
import { Plus } from 'phosphor-react'
import { Accordion } from 'keep-react'
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import demoImg from '../assets/images.jpeg';
import { IoIosArrowForward } from "react-icons/io";
import NoData from '../components/NoData';
import { Link } from 'react-router-dom';
import Wp from '../components/Wp';
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";


const Shop = () => {
    document.title = 'RS Motors | Shop'
    const [cars, setCars] = useState([]);
    const [showFilter, setShowFilter] = useState(false);

    const { data = [] } = useQuery({
        queryKey: ['shop', 'cars'],
        queryFn: async () => {
            const response = await axios.get('https://rs-motors-server.vercel.app/cars/v1');
            return setCars(response.data)
        }
    });

    async function handleSearchCar(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.car.value;
        const response = await axios.get(`https://rs-motors-server.vercel.app/cars/body-type/v1?query=${title}`);
        setCars(response.data)
    }

    async function handleBodyTypeFilter(query) {
        const response = await axios.get(`https://rs-motors-server.vercel.app/cars/body-type/v1?query=${query}`);
        setCars(response.data)
    }

    async function handleFuelTypeFilter(query) {
        const response = await axios.get(`https://rs-motors-server.vercel.app/cars/fuel-type/v1?query=${query}`);
        setCars(response.data)
    }

    async function handleTransmissionTypeFilter(query) {
        const response = await axios.get(`https://rs-motors-server.vercel.app/cars/transmission-type/v1?query=${query}`);
        setCars(response.data)
    }

    async function handleRegionalSpecFilter(query) {
        const response = await axios.get(`https://rs-motors-server.vercel.app/cars/regional-spec/v1?query=${query}`);
        setCars(response.data)
    }

    async function handleSteeringSideFilter(query) {
        const response = await axios.get(`https://rs-motors-server.vercel.app/cars/steering-side/v1?query=${query}`);
        setCars(response.data)
    }

    async function handleConditionFilter(query) {
        const response = await axios.get(`https://rs-motors-server.vercel.app/cars/condition/v1?query=${query}`);
        setCars(response.data)
    }

    async function handleClearFilter() {
        const response = await axios.get(`https://rs-motors-server.vercel.app/cars/v1`);
        setCars(response.data)
    }

    return (
        <div className="min-h-screen bg-[#000]" data-aos="fade-left">
            <div className=" bg-[url('https://i.ibb.co/6JmKc1S/shop-banner.jpg')] h-96 bg-fixed bg-cover">
                <div className="bg-black opacity-70 w-full h-full flex justify-center px-5 text-center items-center flex-col gap-4">
                    <h1 className="text-3xl font-semibold text-white uppercase">Discover Your Ideal Ride – Explore Our Available Inventory</h1>
                    <p className='text-white md:px-10 hidden md:flex'>Explore the diverse and curated inventory at RS Motors International, where your dream car awaits. From luxurious sedans to high-performance sports cars, each vehicle is meticulously selected to meet the highest standards. Whether you're seeking a classic beauty, an adrenaline-inducing ride, or a unique project, our inventory has something for every automotive enthusiast. Take a journey through our collection and find the perfect match that aligns with your style and preferences. Your dream ride is just a click away. Start exploring now!</p>
                    {/* <form onSubmit={handleSearchCar}>
                        <input type="text" name="car" id="" placeholder="Car Name..." className="py-2 px-4 rounded-l active:!border-0" />
                        <input type="submit" value="Search" className="py-2 px-2 rounded-r text-white cursor-pointer hover:bg-[#947d5d] bg-[#BFA37C]" />
                    </form> */}
                </div>
            </div>
            <div className="block md:hidden">
                {!showFilter ? <RiBarChartHorizontalLine className='text-3xl mb-3 text-white ml-2.5  cursor-pointer' onClick={() => setShowFilter(!showFilter)} /> :
                    <MdCancel className='text-3xl mb-3 text-white ml-2.5 font-thin cursor-pointer' onClick={() => setShowFilter(!showFilter)} />}
            </div>
            <div className="flex gap-1">


                {/* Filter bar */}
                <div className={`md:w-1/5 w-full bg-[#181C21] ${showFilter ? 'block' : 'hidden md:block'} p-5`}>

                    <div className="flex justify-between items-center border-b pb-2 mb-10">
                        <h3 className='text-3xl text-white font-semibold uppercase'>Filter</h3>
                        <h3 className=' text-slate-300 cursor-pointer' onClick={handleClearFilter}>Clear Filter</h3>
                    </div>
                    <Accordion className='space-y-6'>

                        {/* Body Type */}
                        <Accordion.Panel className="">
                            <Accordion.Container className="bg-metal-900 text-white group-hover:bg-metal-800">
                                <Accordion.Title className="text-white">Body Type</Accordion.Title>
                                <Accordion.Icon>
                                    <Plus size={24} color="#fff" />
                                </Accordion.Icon>
                            </Accordion.Container>
                            <Accordion.Content className="text-white">
                                <div className="space-y-3" onClick={() => setShowFilter(false)}>
                                    {/* <option className="hover:underline cursor-pointer" onClick={() => handleBodyTypeFilter('SUV Coupe Sedan')}>SUV Coupe Sedan</option> */}
                                    <option className="hover:underline cursor-pointer" onClick={() => handleBodyTypeFilter('Crossover')}>Crossover</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleBodyTypeFilter('Hatchback')}>Hatchback</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleBodyTypeFilter('Soft Top Convertible')}>Soft Top Convertible</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleBodyTypeFilter('Sports Car Van')}>Sports Car Van</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleBodyTypeFilter('Wagon')}>Wagon</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleBodyTypeFilter('Utility Truck')}>Utility Truck</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleBodyTypeFilter('Other')}>Other</option>
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>

                        {/* Fuel Type */}
                        <Accordion.Panel className="">
                            <Accordion.Container className="bg-metal-900 text-white group-hover:bg-metal-800">
                                <Accordion.Title className="text-white">
                                    Fuel Type</Accordion.Title>
                                <Accordion.Icon>
                                    <Plus size={24} color="#fff" />
                                </Accordion.Icon>
                            </Accordion.Container>
                            <Accordion.Content className="text-white">
                                <div className="space-y-3" onClick={() => setShowFilter(false)}>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleFuelTypeFilter('Diesel')}>Diesel</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleFuelTypeFilter('Petrol')}>Petrol</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleFuelTypeFilter('Hybrid')}>Hybrid</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleFuelTypeFilter('Electric')}>Electric</option>
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>

                        {/* transmissionType */}
                        <Accordion.Panel className="">
                            <Accordion.Container className="bg-metal-900 text-white group-hover:bg-metal-800">
                                <Accordion.Title className="text-white">
                                    Transmission Type</Accordion.Title>
                                <Accordion.Icon>
                                    <Plus size={24} color="#fff" />
                                </Accordion.Icon>
                            </Accordion.Container>
                            <Accordion.Content className="text-white">
                                <div className="space-y-3" onClick={() => setShowFilter(false)}>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleTransmissionTypeFilter("Manual Transmission")}>Manual Transmission</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleTransmissionTypeFilter('Automatic Transmission')}>Automatic Transmission</option>
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>

                        {/* regional Spec */}
                        <Accordion.Panel className="">
                            <Accordion.Container className="bg-metal-900 text-white group-hover:bg-metal-800">
                                <Accordion.Title className="text-white">
                                    Regional Spec</Accordion.Title>
                                <Accordion.Icon>
                                    <Plus size={24} color="#fff" />
                                </Accordion.Icon>
                            </Accordion.Container>
                            <Accordion.Content className="text-white">
                                <div className="space-y-3" onClick={() => setShowFilter(false)}>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleRegionalSpecFilter("GCC Specs")}>GCC Specs</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleRegionalSpecFilter("American Specs")}>American Specs</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleRegionalSpecFilter("Canadian Specs")}>Canadian Specs</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleRegionalSpecFilter("European Specs")}>European Specs</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleRegionalSpecFilter("Japanese Specs")}>Japanese Specs</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleRegionalSpecFilter("Korean Specs")}>Korean Specs</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleRegionalSpecFilter("Chinese Specs")}>Chinese Specs</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleRegionalSpecFilter("Other")}>Other</option>
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>

                        {/* steeringSide */}
                        <Accordion.Panel className="">
                            <Accordion.Container className="bg-metal-900 text-white group-hover:bg-metal-800">
                                <Accordion.Title className="text-white">
                                    Steering Side</Accordion.Title>
                                <Accordion.Icon>
                                    <Plus size={24} color="#fff" />
                                </Accordion.Icon>
                            </Accordion.Container>
                            <Accordion.Content className="text-white">
                                <div className="space-y-3" onClick={() => setShowFilter(false)}>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleSteeringSideFilter("Left Hand")}>Left Hand</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleSteeringSideFilter("Right Hand")}>Right Hand</option>
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>

                        {/* condition */}
                        <Accordion.Panel className="">
                            <Accordion.Container className="bg-metal-900 text-white group-hover:bg-metal-800">
                                <Accordion.Title className="text-white">
                                    Condition</Accordion.Title>
                                <Accordion.Icon>
                                    <Plus size={24} color="#fff" />
                                </Accordion.Icon>
                            </Accordion.Container>
                            <Accordion.Content className="text-white">
                                <div className="space-y-3" onClick={() => setShowFilter(false)}>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleConditionFilter('Excellent')}>Excellent</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleConditionFilter('Good')}>Good</option>
                                    <option className="hover:underline cursor-pointer" onClick={() => handleConditionFilter('Fair')}>Fair</option>
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>

                </div>

                {/* content */}
                <div className={`w-full ${showFilter && 'hidden md:block'}`}>
                    <div className="flex">
                    </div>
                    {!cars?.length ? <div className=" flex min-h-screen justify-center">
                        <NoData />
                    </div> : <div className=" p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-black">

                        {cars.map(car => <div key={car?._id} className=" bg-[#100f0f] flex flex-col">
                            <img src={car?.photo} alt="" className='w-full h-auto' />
                            <div className="my-3 px-3">
                                <h3 className='text-xl text-white  font-semibold'>{car?.title}</h3>
                                <h4 className='text-white opacity-70'>Year - {car?.year}</h4>
                                <h4 className='text-white opacity-70'>{car?.regionalSpec}</h4>
                                <Link to={`/shop/${car?._id}`}><h4 className='text-slate-300 font-semibold flex items-center mt-2 cursor-pointer'> <IoIosArrowForward className='font-bold' />View Details</h4></Link>
                            </div>
                        </div>)}
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Shop;