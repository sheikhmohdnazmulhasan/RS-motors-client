import { Link, useLoaderData } from "react-router-dom";
import NoData from "../components/NoData";
import { IoIosArrowForward } from "react-icons/io";

const Portfolio = () => {
    document.title = 'RS Motors | Portfolio'
    const cars = useLoaderData();

    return (
        <div className='min-h-screen bg-black' data-aos="fade-left">

            <div className=" bg-[url('https://i.ibb.co/rmz0M52/cars.png')] h-96 bg-fixed bg-cover">
                <div className="bg-black opacity-70 w-full h-full flex justify-center text-center items-center flex-col gap-4 leading-8">
                    <h1 className="text-3xl font-semibold text-white uppercase px-3 md:px-0 line-clamp-5 ">Past Triumphs: Explore Our Portfolio of Delivered Dreams</h1>
                    <p className='text-white md:px-10 hidden md:flex'>Dive into the success stories of RS Motors International as we proudly showcase our portfolio of closed deals. Witness the fulfillment of automotive dreams as we delivered exceptional cars to satisfied clients worldwide. From luxury sedans to sports cars, our portfolio reflects our commitment to excellence and client satisfaction. Experience the joyous moments of successful partnerships and envision your own dream car becoming a reality. Join us on a journey through our closed deals and discover the unparalleled satisfaction we bring to each delivery.</p>
                    {/* <form onSubmit={handleSearchCar}>
                        <input type="text" name="car" id="" placeholder="Car Name..." className="py-2 px-4 rounded-l active:!border-0" />
                        <input type="submit" value="Search" className="py-2 px-2 rounded-r text-white cursor-pointer hover:bg-[#947d5d] bg-[#BFA37C]" />
                    </form> */}
                </div>

            </div>
            {/* content */}
            <div className="w-full p-5 md:p-10">
                {!cars?.length ? <div className=" flex min-h-screen justify-center">
                    <NoData />
                </div> : <div className=" p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-black">

                    {cars?.map(car => <div key={car?._id} className=" bg-[#100f0f] h-80 flex flex-col">
                        <img src={car?.photo} alt="" className='w-full h-auto' />
                        <div className="my-3 px-3">
                            <h3 className='text-xl text-white  font-semibold'>{car?.title}</h3>
                            <h4 className='text-white opacity-70'>Year - {car?.year}</h4>
                            <h4 className='text-white opacity-70'>{car?.regionalSpec}</h4>
                            <Link to={`/portfolio/${car?._id}`}><h4 className='text-slate-300 font-semibold flex items-center mt-2 cursor-pointer'> <IoIosArrowForward className='font-bold' />View Details</h4></Link>
                        </div>
                    </div>)}
                </div>}
            </div>
        </div>
    );
};

export default Portfolio;