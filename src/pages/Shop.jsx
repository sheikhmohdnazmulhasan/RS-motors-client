import { Plus } from 'phosphor-react'
import { Accordion } from 'keep-react'
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Shop = () => {

    const [cars, setCars] = useState([]);

    const { data = [] } = useQuery({
        queryKey: ['shop', 'cars'],
        queryFn: async () => {
            const response = await axios.get('http://localhost:5000/cars/v1');
            return setCars(response.data)
        }
    });

    async function handleBodyTypeFilter(query) {
        const response = await axios.get(`http://localhost:5000/cars/body-type/v1?query=${query}`);
        
    }

    async function handleFuelTypeFilter(query) {
        const response = await axios.get(`http://localhost:5000/cars/fuel-type/v1?query=${query}`);
        console.log(response.data);
    }

    return (
        <div className="min-h-screen bg-[#141A1C]">
            <div className=" bg-[url('https://i.ibb.co/6JmKc1S/shop-banner.jpg')] h-96 bg-fixed bg-cover">
                <div className="bg-black opacity-70 w-full h-full flex justify-center text-center items-center flex-col gap-4">
                    <h1 className="text-3xl font-bold text-white uppercase">RS Motors International is ready to offer you <br /> the car of your choice</h1>
                    <form>
                        <input type="text" name="" id="" placeholder="Car Name..." className="py-2 px-4 rounded-l active:!border-0" />
                        <input type="submit" value="Search" className="py-2 px-2 rounded-r text-white cursor-pointer hover:bg-[#947d5d] bg-[#BFA37C]" />
                    </form>
                </div>
            </div>
            <div className="flex gap-4">

                {/* Filter bar */}
                <div className="w-1/5 bg-[#241C2B]  p-5">
                    <div className="flex justify-between items-center border-b pb-2 mb-10">
                        <h3 className='text-3xl text-white font-semibold uppercase'>Filter</h3>
                        <h3 className=' text-slate-300 '>Clear Filter</h3>

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
                                <div className="space-y-3">
                                    <option className="hover:underline cursor-pointer" onClick={() => handleBodyTypeFilter('SUV Coupe Sedan')}>SUV Coupe Sedan</option>
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
                                <div className="space-y-3">
                                    <option className="hover:underline cursor-pointer" onClick={()=>handleFuelTypeFilter('Diesel')}>Diesel</option>
                                    <option className="hover:underline cursor-pointer" onClick={()=>handleFuelTypeFilter('Petrol')}>Petrol</option>
                                    <option className="hover:underline cursor-pointer" onClick={()=>handleFuelTypeFilter('Hybrid')}>Hybrid</option>
                                    <option className="hover:underline cursor-pointer" onClick={()=>handleFuelTypeFilter('Electric')}>Electric</option>
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
                                <div className="space-y-3">
                                    <option className="hover:underline cursor-pointer">Manual Transmission</option>
                                    <option className="hover:underline cursor-pointer">Automatic Transmission</option>
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
                                <div className="space-y-3">
                                    <option className="hover:underline cursor-pointer">GCC Specs</option>
                                    <option className="hover:underline cursor-pointer">American Specs</option>
                                    <option className="hover:underline cursor-pointer">Canadian Specs</option>
                                    <option className="hover:underline cursor-pointer">European Specs</option>
                                    <option className="hover:underline cursor-pointer">Japanese Specs</option>
                                    <option className="hover:underline cursor-pointer">Korean Specs</option>
                                    <option className="hover:underline cursor-pointer">Chinese Specs</option>
                                    <option className="hover:underline cursor-pointer">Other</option>
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
                                <div className="space-y-3">
                                    <option className="hover:underline cursor-pointer">Left Hand</option>
                                    <option className="hover:underline cursor-pointer">Right Hand</option>
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
                                <div className="space-y-3">
                                    <option className="hover:underline cursor-pointer">Excellent</option>
                                    <option className="hover:underline cursor-pointer">Good</option>
                                    <option className="hover:underline cursor-pointer">Fair</option>
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>

                {/* content */}
                <div className="w-4/5 border min-h-screen p-5 flex gap-4">

                    {cars.map(car => <div key={car._id} className="border w-72 h-72"></div>)}
                </div>
            </div>
        </div>
    );
};

export default Shop;