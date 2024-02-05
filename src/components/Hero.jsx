import { useEffect, useState } from "react";
import b1 from '../assets/banner/IMG-20240119-WA0005.jpg';
import b2 from '../assets/banner/IMG-20240119-WA0006.jpg';
import b3 from '../assets/banner/IMG-20240119-WA0007.jpg';
import b4 from '../assets/banner/IMG-20240119-WA0008.jpg';

const Hero = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const sliders = [{ img: `${b1}`, title: "Your Dream Car, Worldwide Sales and Delivery", des: "This component highlights the global reach of RS Motors International and emphasizes the promise of delivering dream cars to clients anywhere in the world", }, { img: `${b2}`, title: "Tailored Car Sourcing Service", des: "Communicates the personalized approach of RS Motors International by offering a customized car sourcing service based on client preferences, ensuring they get the perfect vehicle.", }, { img: `${b3}`, title: "$250 Deposit - Start Your Search Today!", des: "Encourages potential clients to take the first step by emphasizing the affordability of the service with a $250 deposit to initiate the car search process.", }, { img: `${b4}`, title: " Transparent Process, Seamless Delivery", des: "Assures clients of a transparent and straightforward process, from understanding their requirements to the seamless delivery of their chosen car, reinforcing trust and reliability.", },];

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <div className="">
            <div className="w-full h-96 md:h-screen flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 duration-1000 transform ease-linear z-50" style={{ backgroundImage: `url(${sliders[currentSlider].img})`, }}>
                {/* text container here */}
                <div className="min-w-full drop-shadow-lg text-white rounded-lg ease-linear duration-300 flex flex-col justify-center items-center" data-aos="zoom-out">
                    <h1 className=" text-3xl font-semibold text-center mb-3">{sliders[currentSlider].title}</h1>
                    <div className="md:px-20 px-5">
                        <p className="text-center md:px-20 md:text-base text-lg  ">{sliders[currentSlider].des}</p>
                    </div>
                </div>
            </div>

            {/* <div className="flex justify-center items-center gap-3 p-2 ease-linear duration-500">
                {sliders.map((slide, inx) => (<img onClick={() => setCurrentSlider(inx)} key={inx} src={slide.img} className={`h-[50px] min-w-[80px] ${currentSlider === inx ? "border-2 border-black p-[2px]" : ""} rounded-lg box-content cursor-pointer`} alt={slide.title} />))}
            </div> */}
        </div>
    )
};

export default Hero;