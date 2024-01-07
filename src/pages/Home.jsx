import Hero from "../components/Hero";
import help from '../assets/help.png';

const Home = () => {
    return (
        <div>
            <Hero />

            {/* 2nd Section, Before Card */}
            <div className="md:flex w-full py-24 px-5 md:px-20 bg-[#141A1C]">
                <div className="flex-1">
                    <h1 className="text-4xl font-semibold text-white leading-[3rem]">What We Provide Is The <br /> Luxury Transport And Most <br /> Comfortable Experience</h1>
                </div>
                <div className="flex-1">
                    <p className="text-white opacity-70 leading-7">Vivamus arcu felis bibendum ut tristique et egestas. Ultricies leo intege in malesuada nunc vel risus commodo. Sapien nec sagittis aliquam male bibendum arcu vitae. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Fringilla est ullamcorper eget nulla facilisi nul.</p>

                    <div className="mt-10 flex items-center gap-5">
                        <img className="w-[7%]" src={help} alt="" />
                        <p className="text-[#BFA37C] text-sm font-mono">CALL CENTER: +1234 5678 901</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;