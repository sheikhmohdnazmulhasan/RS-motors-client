import Hero from "../components/Hero";
import help from '../assets/help.png';
import homeimg1 from '../assets/h1-img-3.jpg';
import homeimg2 from '../assets/h1-img-4.jpg';
import carPNG from '../assets/h1-img-9.png';
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import location from '../assets/content-bottom-icon-001.png';
import clock from '../assets/content-bottom-icon-003.png';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import team1 from '../assets/Team/1.jpg';
import team2 from '../assets/Team/2.jpg';
import { MdOutlineShareLocation } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Wp from "../components/Wp";
import team3 from '../assets/Team/3.jpg';
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
    document.title = 'RS Motors International'

    const { data = [], } = useQuery({
        queryKey: ['shop'],
        queryFn: async () => {
            const response = await axios.get('https://rs-motors-server.vercel.app/cars/v1');
            return response.data;
        }
    });

    return (
        <div>
            <Hero />
            <Wp />

            {/* 2nd Section, Before Card */}
            <div className="md:flex w-full py-10 md:py-24 px-5 md:px-20 bg-[#141A1C]" data-aos="fade-up">
                <div className="flex-1">
                    <h1 className="text-4xl font-semibold text-white leading-snug">Personalized Car Sourcing <br /> for Your Unique <br /> Preferences</h1>
                </div>
                <div className="flex-1">
                    <p className="text-white opacity-70 leading-7">This component underscores the individualized service provided by RS Motors International, emphasizing that they cater to each client's specific preferences in terms of car type, features, and budget.</p>

                    <div className="mt-10 flex items-center gap-5">
                        <img className="w-[7%]" src={help} alt="" />
                        <p className="text-[#BFA37C] text-sm font-mono">CALL CENTER: +971 544 515235</p>
                    </div>
                </div>
            </div>
            <div className="py-20 px-5 md:px-20 bg-[#141A1C]" data-aos="fade-up">
                {/* <CloseCar /> */}

                {/* Ride To Destinations */}
                <div className="py-20 text-white">
                    <div className="" data-aos="fade-right">
                        <h1 className="text-4xl font-semibold leading-snug">Ride To Destinations <br /> With Maximum Comfort</h1>
                        <p className="text-[#BFA37C] font-mono pb-5">FINEST TRANSPORT</p>
                    </div>
                    <hr className="opacity-25" />

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10" data-aos="fade-left">
                        <div className="hidden md:flex"></div>
                        <div className="">
                            <h2 className="text-xl font-semibold uppercase">Personalized Sourcing</h2>
                            <p className="opacity-75 mt-3">Your dream car, your way - tailored sourcing for a unique driving experience</p>
                        </div>

                        <div className="">
                            <h2 className="text-xl font-semibold uppercase">Global Expertise</h2>
                            <p className="opacity-75 mt-3">Worldwide reach, local touch - our global network ensures your perfect match.</p>
                        </div>
                        <div className="hidden md:flex"></div>
                        <div className="">
                            <h2 className="text-xl font-semibold uppercase">Affordable Transparency</h2>
                            <p className="opacity-75 mt-3">Clear costs, no surprises - start your search with a $250 deposit, your budget intact.</p>
                        </div>

                        <div className="">
                            <h2 className="text-xl font-semibold uppercase">Trusted Quality</h2>
                            <p className="opacity-75 mt-3">Quality assured, satisfaction guaranteed - delivering excellence in every car.</p>
                        </div>

                    </div>
                </div>

                {/* We Care Of Your Safety*/}
                <section className="md:flex justify-between w-full gap-4 mt-20">
                    <div className="flex-1">
                        <h1 className="text-4xl font-semibold leading-snug text-white">Uncover Your Perfect  Ride with <br /> RS Motors International</h1>
                        <p className="text-[#BFA37C] font-mono pb-5">PREMIUM DRIVERS</p>
                        <p className="text-white opacity-75">Embark on a journey of automotive elegance with RS Motors International's carefully curated selection. Whether you crave the luxury of high-end sedans, the adrenaline rush of sports cars, the vintage charm of classics, or the eco-friendly allure of electric vehicles, our collection caters to every driving desire. Navigate urban streets with chic compact cars or conquer rugged terrains with robust SUVs. Our commitment is to offer a diverse range of vehicles, ensuring you find a perfect match that aligns with your unique taste and preferences. At RS Motors International, your dream car awaits, promising a driving experience tailored just for you.</p>

                        <Link to={'/shop'} data-aos="fade-left"> <button className="py-2 w-40 h-12 px-4 mb-4 mt-6 bg-transparent border border-[#BFA37C] hover:border-2 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group"><svg viewBox="0 0 1024 1024" className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M244.5 662l268.1-446.4 268 446.4z" fill="#9ED5E4"></path><path d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z" fill="#154B8B"></path><path d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z" fill="#F7F9F9"></path><path d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z" fill="#154B8B"></path><path d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z" fill="#9ED5E4"></path><path d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z" fill="#154B8B"></path><path d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z" fill="#9ED5E4"></path><path d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z" fill="#154B8B"></path></g></svg><span className="duration-500">Shop Now</span></button></Link>

                    </div>
                    <div className="md:flex w-full md:flex-1 gap-4 space-y-4 md:space-y-0" data-aos="fade-left">
                        <img className="md:w-[50%] rounded-md" src={homeimg1} alt="" />
                        <img className="md:w-[50%] rounded-md" src={homeimg2} alt="" />
                    </div>
                </section>
                <section>
                    <div className="py-20 text-white">
                        <div className="" data-aos="fade-right">
                            <h1 className="text-4xl font-semibold leading-snug">Yur Customized Journey with <br /> RS Motors International - Backed by Assurance</h1>
                            <p className="text-[#BFA37C] font-mono pb-5 uppercase">Customized idea</p>
                        </div>
                        <hr className="opacity-25" />

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10" data-aos="fade-left">
                            <div className="hidden md:flex"></div>
                            <div className="">
                                <h2 className="text-xl font-semibold uppercase">Personalized Consultation with a Nominal Deposit</h2>
                                <p className="opacity-75 mt-3">Begin your tailored experience with a one-on-one consultation, sharing your preferences and budget. As a symbol of commitment, a nominal $250 deposit is required at the outset.</p>
                            </div>

                            <div className="">
                                <h2 className="text-xl font-semibold uppercase">Expert Car Sourcing with Money-Back Guarantee</h2>
                                <p className="opacity-75 mt-3">Our global team sources the perfect car based on your criteria. Here's our assurance: if we can't find your dream car within one month, we refund 100% of your deposit, ensuring peace of mind throughout the process.</p>
                            </div>
                            <div className="hidden md:flex"></div>
                            <div className="">
                                <h2 className="text-xl font-semibold uppercase">Transparent Transaction Process</h2>
                                <p className="opacity-75 mt-3">Once you've selected your ideal car, our transparent transaction process begins. Your journey starts with a $250 deposit, and upon finalizing your choice, proceed with the payment. We manage all logistics, providing a secure and straightforward transaction.</p>
                            </div>

                            <div className="">
                                <h2 className="text-xl font-semibold uppercase">Worldwide Delivery for Your Dream Car</h2>
                                <p className="opacity-75 mt-3">Enjoy the convenience of worldwide delivery as we bring your dream car directly to your doorstep. Your satisfaction is our priority, and our commitment to transparency and assurance remains steadfast at every stage of your customized journey.</p>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            {/* team */}
            <section className=" bg-[#0C1315] py-20 px-5 md:px-20">
                <div className="" data-aos="fade-left"> <h1 className="text-4xl  font-semibold leading-snug text-white">Meet Our Expert Team for Personalized <br /> Consultation</h1>
                <p className="text-white opacity-80 mb-2">Discover the individuals driving RS Motors International. Our experienced team is dedicated to offering expert advice and personalized consultancy in luxury, sports, accident, and abandoned cars. Whether you seek elegance, performance, or a unique restoration project, our passionate team is here to understand your preferences and guide you to your perfect automotive match. Click below to meet our team and start your journey to find the ideal car for your style and needs</p>
                <p className="text-[#BFA37C]  font-mono pb-5">MEET OUR TEAM</p></div>
                <hr className="opacity-25" />
                <div className="grid grid-cols-1 md:grid-cols-4 mt-10 gap-6" data-aos="fade-right">
                    <div className="">
                        <img src={team2} alt="" />
                        <div className="mt-3">
                            <h1 className="text-xl font-semibold text-white">Mr s khushal</h1>

                            <div className="text-white flex gap-2 mt-2">
                                <a href="https://www.instagram.com/rsmotorsinternational" target="_blank" rel="noreferrer">
                                    <IoLogoInstagram className="hover:scale-110 transition-all cursor-pointer" />
                                </a>
                                <a href="http://wa.me/+447535586586" target="_blank" rel="noreferrer">
                                    <FaWhatsapp className="hover:scale-110 transition-all cursor-pointer" />
                                </a>
                            </div>
                            <div className="flex text-[#BFA37C] items-center mt-2  font-mono gap-2 text-sm">
                                <MdOutlineShareLocation className="text-xl" />
                                <p>Luton, England, United Kingdom</p>
                            </div>
                            <div className="flex text-[#BFA37C] items-center mt-2  font-mono gap-2 text-sm">
                                <FaPhone />
                                <a href="tel:+447535586586"> <p>+44 7535 586586</p></a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={team1} alt="" />
                        <div className="mt-3">
                            <h1 className="text-xl font-semibold text-white">Rohan Robert</h1>

                            <div className="text-white flex gap-2 mt-2">
                                <a href="https://www.instagram.com/rohan_robert" target="_blank" rel="noreferrer">
                                    <IoLogoInstagram className="hover:scale-110 transition-all cursor-pointer" />
                                </a>
                                <a href="http://wa.me/+971544515235" target="_blank" rel="noreferrer">
                                    <FaWhatsapp className="hover:scale-110 transition-all cursor-pointer" />
                                </a>
                            </div>

                            <div className="flex text-[#BFA37C] items-center mt-2  font-mono gap-2 text-sm">
                                <MdOutlineShareLocation className="text-xl" />
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                            <div className="flex text-[#BFA37C] items-center mt-2  font-mono gap-2 text-sm">
                                <FaPhone />
                                <p>+971 544 515235</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={team3} alt="" />
                        <div className="mt-3">
                            <h1 className="text-xl font-semibold text-white">Rizwan Khushal</h1>
                            <p className="text-[#BFA37C]">Logistic Expert</p>

                            <div className="flex text-[#BFA37C] items-center mt-2  font-mono gap-2 text-sm">
                                <MdOutlineShareLocation className="text-xl" />
                                <p>Luton, England, United Kingdom</p>
                            </div>
                            {/* <div className="flex text-[#BFA37C] items-center mt-2  font-mono gap-2 text-sm">
                                <FaPhone />
                                <p>+971 544 515235</p>
                            </div> */}
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </section>

            <section className="bg-[url('https://i.ibb.co/0hGtR3K/header6.jpg')] bg-fixed bg-cover h-96 ">
                <div className="bg-black w-full h-full bg-opacity-80 flex justify-center md:justify-end items-center py-20 px-5 md:px-20">
                    <div className="" data-aos="fade-left">
                        <h1 className="text-4xl font-semibold leading-snug text-white">RS Motors International <br /> Elevating Your Car Sourcing Experience - Unveiling Our Seamless Process</h1>
                        <Link to={'/portfolio'}><button className="text-xl mt-4 w-36 h-12 before:block before:absolute hover:before:bg-[#BFA37C] before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-[#BFA37C] bg-transparent border overflow-hidden border-[#BFA37C] duration-500">See Protfolio</button></Link>
                    </div>
                </div>
            </section>

            {/* A High Variety Of Options */}
            {/* <section className="py-20 px-5 md:px-20 bg-[#141A1C] text-white">
                <h1 className="text-4xl font-semibold leading-snug">A High Variety Of Options</h1>
                <p className="text-[#BFA37C] font-mono pb-5">BEST POSSIBILITIES</p>
                <hr className="opacity-25" />

                {data.slice(0, 4).map(car => <div key={car._id} className="ml-40 hidden md:block">
                    <div className="mt-20 h-40 md:grid grid-cols-3 gap-4 pb-3  border-gray-700 border-b">
                        <div className="flex items-center">
                            <img src={carPNG} alt="" data-aos="fade-right" />
                            <div className="-ml-20">
                                <h3 className="text-white  uppercase text-xl font-semibold">{car.title}</h3>
                                {car.price && <p className="text-[#BFA37C] text-xl mb-4">$ <span className="text-4xl">{car.price}</span></p>}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <p>{car.transmissionType} <br /> {car.regionalSpec} <br /> {car.steeringSide}</p>
                        </div>
                        <div className=" flex items-center justify-end">
                            <Link to={`/shop/${car._id}`}>
                                <button className="text-xl mt-4 w-36 h-12 before:block before:absolute hover:before:bg-[#BFA37C] before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-[#BFA37C] bg-transparent border overflow-hidden border-[#BFA37C] duration-500">See Details</button>
                            </Link>
                        </div>
                    </div>
                </div>)}

                {data.slice(0, 4).map(car => <div key={car._id} className="mt-10 block md:hidden">
                    <div className=" border-gray-700 border-b pb-3 py-5">
                        <h3 className="text-xl uppercase font-semibold mb-3">{car.title}</h3>
                        {car.price && <p className="text-[#BFA37C] text-xl mb-4">$ <span className="text-4xl">{car.price}</span></p>}
                        <p>{car.transmissionType} <br /> {car.regionalSpec} <br /> {car.steeringSide}</p>
                        <Link to={`/shop/${car._id}`}>
                            <button className="text-xl mt-4 w-36 h-12 before:block before:absolute hover:before:bg-[#BFA37C] before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-[#BFA37C] bg-transparent border overflow-hidden border-[#BFA37C] duration-500">See Details</button>
                        </Link>
                    </div>
                </div>)}
            </section> */}

            <section className="py-20 px-5 md:px-20 bg-black " data-aos="fade-up">
                <h1 className="text-4xl font-semibold leading-snug text-white">We trive to meet the needs <br /> of our clients and we value their <br /> opinions about our work</h1>
                <div className="">
                    <Testimonial />
                </div>
            </section>
            <section className="bg-[url('https://i.ibb.co/qNZy4SF/a.jpg')] bg-cover w-full h-96 bg-fixed">
                <div className="bg-black w-full h-full bg-opacity-70 px-5 md:px-20 flex items-center" >
                    <h1 className="text-4xl font-semibold leading-snug text-white" data-aos="fade-right">Our process is clear and straightforward, starting with a modest $250 deposit to  kickstart your car search. <br /> No hidden fees, no surprises</h1>
                </div>
            </section>
            <section className="bg-[#141A1C] px-5 md:px-20 py-20 md:flex justify-between space-y-5">

                {/* Location */}
                <div className="flex items-center gap-4 text-white" data-aos="fade-right">
                    <img className="w-[25px]" src={location} alt="" />
                    <div className="">
                        <p>England Luton, United Kingdom.</p>
                        <p>Dubai, United Arab Emirates</p>
                    </div>
                </div>

                {/* Contact */}
                <div className="flex items-center gap-4 text-white">
                    <img className="w-[35px]" src={help} alt="" />
                    <div className="">
                        <p>+44 7535 586586</p>
                        <p>+971 544 515235</p>
                        <p>contact@rsmotorsinternational.com</p>
                    </div>
                </div>

                {/* Opening time */}
                <div className="flex items-center gap-4 text-white" data-aos="fade-left">
                    <img className="w-[36px]" src={clock} alt="" />
                    <div className="">
                        <p>Mon-Sat 09:00-23:00;</p>
                        <p>Sunday is closed.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;