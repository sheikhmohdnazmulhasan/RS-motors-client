import s1 from '../assets/Our p/s1.png';
import s2 from '../assets/Our p/s2.png';
import s3 from '../assets/Our p/s3.png';
import s4 from '../assets/Our p/s4.png';
import x from '../assets/Our p/x.png';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";


const OurP = () => {
    return (
        <div data-aos="fade-left">
            <section className=" bg-[url('https://i.ibb.co/5T873NB/banner.png')] h-96 bg-fixed bg-cover">
                <div className=" w-full h-full flex justify-center text-center items-center flex-col gap-4 leading-8">
                    <h1 className="text-3xl font-semibold text-white uppercase px-3 md:px-0 line-clamp-5">
                        Our Process
                    </h1>
                </div>
            </section>
            <section className='px-5 md:px-20 py-20 bg-[#0C0C0C]'>
                <h1 className='text-3xl text-[#BFA37C] font-semibold' >Crafting Your Automotive Experience</h1>
                <p className='text-white mt-5'>Embark on a journey beyond the ordinary with RS Motors International. Here, we introduce a new standard in car sourcing – one that is defined by personalization, transparency, and a commitment to your satisfaction. Each step we take is carefully crafted to ensure your experience is not just seamless but also tailored to meet your unique automotive aspirations.</p>
            </section>

            {/* body Section 1 */}
            <section className='bg-[#141A1C] text-white px-5 md:px-20 py-20'>

                {/* title and subtitle */}
                <h1 className='text-3xl text-[#BFA37C] font-semibold' data-aos="fade-right">Step 1</h1>
                <h3 className='text-2xl font-semibold mt-2 mb-4 md:mb-0' data-aos="fade-left">Personalized Consultation</h3>

                {/* Main Content */}
                <div className="md:flex items-center">

                    {/* Text */}
                    <div className="md:w-[65%]">
                        <p>Engage in a one-on-one consultation with our seasoned team, sharing your preferences, budget, and expectations. This personalized interaction sets the foundation for understanding your unique vision.</p>
                        <p className='mt-5'>
                            Nominal Deposit: As a commitment to your trust, a nominal $250 deposit is required at the beginning of the process. This deposit not only initiates your personalized consultation but also signifies the start of your tailored experience.
                        </p>
                    </div>

                    {/* Img */}
                    <div className="md:w-[35%] p-5" data-aos="zoom-out">
                        <img src={s1} alt="" />
                    </div>

                </div>
                <p>Nominal Deposit: As a commitment to your trust, a nominal $250 deposit is required at the beginning of the process. This deposit initiates your personalized consultation and signifies the start of your tailored experience.</p>
            </section>

            {/* body Section 2 */}
            <section className='bg-[#1A2224] text-white px-5 md:px-20 py-20'>

                {/* title and subtitle */}
                <h1 className='text-3xl text-[#BFA37C] font-semibold text-right' data-aos="fade-right" >Step 2</h1>
                <h3 className='text-2xl font-semibold mt-2 text-right' data-aos="fade-left">Expert Car Sourcing with Money-Back Guarantee</h3>

                {/* Main Content */}
                <div className="md:flex items-center">

                    {/* Img */}
                    <div className="md:w-[35%] p-5" data-aos="zoom-out">
                        <img src={s2} alt="" />
                    </div>

                    {/* Text */}
                    <div className="md:w-[65%]">
                        <p>Benefit from our extensive global network and local expertise, ensuring a meticulous search process that spans the globe. Our team leverages these connections to source the perfect car tailored to your specific requirements.</p>
                        <p className='mt-5'>
                            Experience peace of mind with our unique assurance. If, within one month, we are unable to find your dream car, we guarantee a 100% money-back refund of your deposit. Your satisfaction is our commitment, backed by a transparent and trustworthy process.
                        </p>
                    </div>
                </div>
                <p>Our commitment to perfection is reflected in our meticulous selection process. Each car presented is carefully chosen to align with your preferences, providing you with a curated collection of options that match your unique automotive desires.</p>
            </section>

            {/* body Section 3 */}
            <section className='bg-[#141A1C] text-white px-5 md:px-20 py-20'>

                {/* title and subtitle */}
                <h1 className='text-3xl text-[#BFA37C] font-semibold' data-aos="fade-right">Step 3</h1>
                <h3 className='text-2xl font-semibold mt-2 mb-4 md:mb-0' data-aos="fade-left">Personalized Consultation</h3>

                {/* Main Content */}
                <div className="md:flex items-center">

                    {/* Text */}
                    <div className="md:w-[65%]">
                        <p>Seamless Transaction Process: Navigate through our transparent transaction process effortlessly. Initiate your search by placing a $250 deposit, proceed to finalize your chosen vehicle, and seamlessly complete the payment.</p>
                        <p className='mt-5'>
                            Clear and Affordable Experience: Experience clarity at every step. Our commitment is to offer a clear and affordable process without hidden fees. We prioritize transparency, ensuring you confidently navigate each stage of your automotive journey.
                        </p>
                    </div>

                    {/* Img */}
                    <div className="md:w-[35%] p-5" data-aos="zoom-out">
                        <img src={s3} alt="" />
                    </div>

                </div>
                <p>Nominal Deposit: As a commitment to your trust, a nominal $250 deposit is required at the beginning of the process. This deposit initiates your personalized consultation and signifies the start of your tailored experience.</p>
            </section>

            {/* body Section 2 */}
            <section className='bg-[#1A2224] text-white px-5 md:px-20 py-20'>

                {/* title and subtitle */}
                <h1 className='text-3xl text-[#BFA37C] font-semibold text-right' data-aos="fade-right">Step 4</h1>
                <h3 className='text-2xl font-semibold mt-2 text-right' data-aos="fade-left">Worldwide Delivery for Your Dream Car</h3>

                {/* Main Content */}
                <div className="md:flex items-center">

                    {/* Img */}
                    <div className="md:w-[35%] p-5" data-aos="zoom-out">
                        <img src={s4} alt="" />
                    </div>

                    {/* Text */}
                    <div className="md:w-[65%]">
                        <p>Your Dream Car, Delivered with Excellence: Your long-awaited dream car is no longer just a vision but a tangible reality. We take charge of the intricate logistics, ensuring that your chosen vehicle is delivered with the utmost care directly to your doorstep.
                        </p>
                        <p className='mt-5'>
                            Global Reach, Local Expertise: Enjoy the best of both worlds with RS Motors International. Benefit from our extensive global network seamlessly intertwined with local expertise. This dynamic combination ensures that your dream car is delivered with unparalleled precision and care, no matter where you are located in the world.
                        </p>
                    </div>
                </div>
                <p>Our commitment goes beyond borders. Experience the convenience of worldwide delivery coupled with the assurance of precision and attention to detail. With RS Motors International, the culmination of your dream car journey is marked by a seamless and personalized delivery experience, bringing joy directly to your doorstep.</p>
            </section>

            <section className='bg-[#171B1C] text-white md:flex justify-around'>

                <div className="flex-1 pl-5 md:pl-20 pt-10 pb-10 md:pb-0 md:pt-20">
                    <h1 className='text-xl font-bold' data-aos="fade-right">Still have questions?</h1>
                    <p className='mt-3'>Have questions, or ready to embark on your personalized car sourcing journey? Reach out to our dedicated team at RS Motors International. We're here to assist you every step of the way.</p>

                    {/* contact info */}
                    <div className="flex mt-5 gap-2">
                        <MdEmail className='text-[#BFA37C] text-2xl' />
                        <p>info@rsmotorsinternational.com</p>
                    </div>
                    <div className="flex mt-5 gap-2">
                        <FaPhoneAlt className='text-[#BFA37C] text-xl' />
                        <p>+44 7534 586586</p>
                    </div>

                    <div className="mt-4 md:mb-5">
                        <a href="http://wa.me/+447535586586" target="_blank" rel="noreferrer">
                            <button className='bg-[#BFA37C] hover:bg-[#9e8057] gap-2 font-semibold flex rounded-full justify-center items-center text-black py-1 px-3'><FaWhatsapp className='text-xl' /> Click Here</button>
                        </a>
                    </div>

                </div>

                {/*image */}
                <div className="flex-1 hidden md:flex justify-end" data-aos="fade-left">
                    <img className='w-[50%]' src={x} alt="" />
                </div>
            </section>
        </div>
    );
};

export default OurP;