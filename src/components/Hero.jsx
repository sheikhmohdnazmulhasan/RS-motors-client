import { useEffect, useState } from "react";

const Hero = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const sliders = [{ img: "https://source.unsplash.com/1200x640/?nature", title: "Escape 1", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: "https://source.unsplash.com/1200x640/?hill", title: "Escape 2", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: "https://source.unsplash.com/1200x640/?mountain", title: "Escape 3", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: "https://source.unsplash.com/1200x640/?river", title: "Escape 4", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: "https://source.unsplash.com/1200x640/?sea", title: "Escape 5", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", },];

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <div className="">
            <div className="w-full h-screen flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 duration-1000 transform ease-linear z-50" style={{ backgroundImage: `url(${sliders[currentSlider].img})`, }}>
                {/* text container here */}
                <div className="min-w-full drop-shadow-lg text-white rounded-lg ease-linear duration-300 flex flex-col justify-center items-center">
                    <h1 className="lg:text-3xl mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                </div>
            </div>

            {/* <div className="flex justify-center items-center gap-3 p-2 ease-linear duration-500">
                {sliders.map((slide, inx) => (<img onClick={() => setCurrentSlider(inx)} key={inx} src={slide.img} className={`h-[50px] min-w-[80px] ${currentSlider === inx ? "border-2 border-black p-[2px]" : ""} rounded-lg box-content cursor-pointer`} alt={slide.title} />))}
            </div> */}
        </div>
    )
};

export default Hero;