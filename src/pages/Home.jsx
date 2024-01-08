import Hero from "../components/Hero";
import help from '../assets/help.png';
import CloseCar from "../components/CloseCar";

const Home = () => {
    return (
        <div>
            <Hero />

            {/* 2nd Section, Before Card */}
            <div className="md:flex w-full py-24 px-5 md:px-20 bg-[#141A1C]">
                <div className="flex-1">
                    <h1 className="text-4xl font-semibold text-white leading-snug">What We Provide Is The <br /> Luxury Transport And Most <br /> Comfortable Experience</h1>
                </div>
                <div className="flex-1">
                    <p className="text-white opacity-70 leading-7">Vivamus arcu felis bibendum ut tristique et egestas. Ultricies leo intege in malesuada nunc vel risus commodo. Sapien nec sagittis aliquam male bibendum arcu vitae. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Fringilla est ullamcorper eget nulla facilisi nul.</p>

                    <div className="mt-10 flex items-center gap-5">
                        <img className="w-[7%]" src={help} alt="" />
                        <p className="text-[#BFA37C] text-sm font-mono">CALL CENTER: +1234 5678 901</p>
                    </div>
                </div>
            </div>
            <main className="py-20 px-5 md:px-20 bg-[#141A1C]">
                <CloseCar />

                {/* Ride To Destinations */}
                <div className="py-20 text-white">
                    <h1 className="text-4xl font-semibold leading-snug">Ride To Destinations <br /> With Maximum Comfort</h1>
                    <p className="text-[#BFA37C] font-mono pb-5">FINEST TRANSPORT</p>
                    <hr className="opacity-25" />

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10">
                        <div className=""></div>
                        <div className="">
                            <h2 className="text-xl font-semibold uppercase">No Delays</h2>
                            <p className="opacity-75 mt-3">Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                        </div>

                        <div className="">
                            <h2 className="text-xl font-semibold uppercase">High Quality</h2>
                            <p className="opacity-75 mt-3">Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                        </div>
                        <div className=""></div>
                        <div className="">
                            <h2 className="text-xl font-semibold uppercase">Premium Support</h2>
                            <p className="opacity-75 mt-3">Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                        </div>

                        <div className="">
                            <h2 className="text-xl font-semibold uppercase">A Diverse Selection</h2>
                            <p className="opacity-75 mt-3">Tortor condimentum lacinia quis vel eros donec odio. Feugiat fermentum in posuere urna. Faucibus turpis in eun mi bibendum.</p>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;