import { Link } from 'react-router-dom';
import logo from '../assets/peter-broomfield-m3m-lnR90uM-unsplash.jpg';
import Wp from '../components/Wp';

const About1 = () => {
    document.title = 'RS Motors | About'

    return (
        <div className="2xl:container relative 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-black" data-aos="fade-left">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold leading-9 text-white">About RS Motors International</h1>
                    <h3 className='text-white font-semibold text-xl pb-4'>Crafting Automotive Dreams into Reality</h3>
                    <p className="font-normal text-base leading-6 text-gray-200 ">Welcome to RS Motors International, where passion meets precision in the world of automotive excellence. Established with the vision of redefining the car-sourcing experience, RS Motors International stands as a beacon of innovation, ensuring every client&apos;s journey is not just a transaction but a tailored adventure.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src={logo} alt="A group of People" />
                </div>
            </div>
            <section>
                <div className="text-white my-10">
                    <h1 className='text-3xl font-bold'>Our Commitment</h1>
                    <p className='mt-4 opacity-80'>At RS Motors International, our commitment is simple yet profound – to transform your dream car vision into a tangible reality. Whether you're seeking a luxury sedan, a high-performance sports car, or a unique classic with a story to tell, our team of seasoned automotive enthusiasts is dedicated to understanding your preferences, budget, and expectations.</p>
                </div>
                <div className="text-white my-10">
                    <h1 className='text-3xl font-bold'>The RS Motors Experience</h1>
                    <p className='mt-4 opacity-80'>Embark on a journey where every detail matters. Our process begins with a personalized consultation, where your aspirations become the blueprint for our actions. The journey continues with our unique assurance – a nominal $250 deposit at the outset, reflecting our commitment to trust and transparency. If, within one month, we can't find your dream car, rest assured with a 100% money-back guarantee.</p>

                    <p className='mt-4 opacity-80'>We navigate the global landscape with a local touch, leveraging our extensive network to source the perfect car for you. As we handle the logistics, your dream car is delivered directly to your doorstep with precision and care, marking the culmination of an extraordinary experience.</p>
                </div>

                <div className="text-white my-10">
                    <h1 className='text-3xl font-bold'>Why RS Motors International?</h1>
                    <ul className='mt-4 opacity-80 list-disc ml-5 space-y-3'>
                        <li>Personalized Consultation: Our team engages in one-on-one consultations, ensuring a deep understanding of your vision.</li>
                        <li>Assurance and Transparency: Benefit from a nominal deposit and a money-back guarantee, reflecting our commitment to transparency and your satisfaction.</li>
                        <li>Global Reach, Local Expertise: Enjoy the convenience of worldwide delivery with the precision of local expertise.</li>
                    </ul>
                </div>
                <div className="text-white my-10">
                    <h1 className='text-3xl font-bold'>Beyond Transactions:</h1>
                    <p className='mt-4 opacity-80'>At RS Motors International, we view our client relationships as more than transactions. We invite you to explore our closed deals portfolio, showcasing the triumphs we've delivered to satisfied clients globally. Your journey doesn't end with the delivery of your dream car; it's an ongoing experience supported by our dedicated team.</p>
                </div>
                <div className="text-white my-10">
                    <h1 className='text-3xl font-bold'>Connect with Us</h1>
                    <p className='mt-4 opacity-80'>Ready to start your automotive adventure? Contact us for a personalized consultation, schedule an appointment, or explore our showroom virtually. RS Motors International is not just a destination for dream cars; it's where your automotive aspirations come to life.</p>
                </div>

                <div className="text-white my-10">
                    <h1 className='text-xl font-bold'>Your dream car journey begins here – at RS Motors International.</h1>
                    <p className='mt-4 opacity-80'>Ready to start your automotive adventure? Contact us for a personalized consultation, schedule an appointment, or explore our showroom virtually. RS Motors International is not just a destination for dream cars; it's where your automotive aspirations come to life.</p>
                 <Link to={'/contact'}><span className='underline'>Contact Us</span></Link>
                </div>

            </section>
        </div>
    );
};

export default About1;
