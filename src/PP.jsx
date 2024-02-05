import { Link } from "react-router-dom";
import Wp from "./components/Wp";

const PP = () => {
    document.title = `RS Motors | Privacy Policy`

    return (
        <>
            <div className="bg-gray-950 px-5 md:px-20 text-white min-h-screen py-20" data-aos="fade-left">
                <h1 className="text-2xl text-center"> Privacy Policy</h1>
                <div className="mt-10">
                    <h3 className="font-semibold">Introduction</h3>
                    <p className="text-sm opacity-75 mt-3">Welcome to RS Motors International's Privacy Policy. This policy outlines how we collect, use, and protect your personal information when you interact with our website, services, and any other features we offer.</p>
                </div>
                <div className="mt-10">
                    <h3 className="font-semibold">Information We Collect</h3>
                    <p className="text-sm opacity-75 mt-3"> <span className="font-bold">Personal Information:</span> All used cars offered by RS Motors International undergo a thorough inspection process. However, the absence of any identified issues at the time of inspection does not guarantee the future performance of the vehicle.</p>
                    <p className="text-sm opacity-75 mt-3"> <span className="font-bold">Vehicle Preferences: </span>To provide you with a personalized experience, we may collect information about your vehicle preferences and interests.</p>
                    <p className="text-sm opacity-75 mt-3"> <span className="font-bold">Website Usage Data: </span>We may gather information about how you interact with our website, such as your IP address, browser type, pages viewed, and the duration of your visit.</p>
                </div>
                <div className="mt-10">
                    <h3 className="font-semibold"> How We Use Your Information</h3>
                    <p className="text-sm opacity-75 mt-3"> <span className="font-bold">Provide Services:</span> We use your information to facilitate vehicle purchases, arrange shipping, and provide customer support.</p>
                    <p className="text-sm opacity-75 mt-3"> <span className="font-bold"> Improve Our Services: </span>Analyzing user behavior helps us enhance our website, services, and overall customer experience.</p>
                    <p className="text-sm opacity-75 mt-3"> <span className="font-bold">Communications: </span>We may use your contact information to send updates, promotional materials, or important information related to our services.</p>
                </div>
                <div className="mt-10">
                    <h3 className="font-semibold"> Information Sharing</h3>
                    <p className="text-sm opacity-75 mt-3"> <span className="font-bold"> Third-Party Service Providers:</span> We may share your information with third-party service providers to assist us in providing and improving our services.</p>
                    <p className="text-sm opacity-75 mt-3"> <span className="font-bold">Legal Compliance:</span>We may disclose your information if required by law or to protect our legal rights.</p>
                </div>
                <div className="mt-10">
                    <h3 className="font-semibold"> Security</h3>
                    <p className="text-sm opacity-75 mt-3"> We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.</p>
                </div>
                <div className="mt-10">
                    <h3 className="font-semibold"> Cookies and Tracking Technologies</h3>
                    <p className="text-sm opacity-75 mt-3"> We use cookies and similar technologies to track user activity on our website and improve user experience.</p>
                </div>
                <div className="mt-10">
                    <h3 className="font-semibold"> Your Choices</h3>
                    <p className="text-sm opacity-75 mt-3"> You have the right to opt-out of marketing communications and update your preferences at any time.</p>
                </div>
                <div className="mt-10">
                    <h3 className="font-semibold"> Your Choices</h3>
                    <p className="text-sm opacity-75 mt-3"> You have the right to opt-out of marketing communications and update your preferences at any time.</p>
                </div>
                <div className="mt-10">
                    <h3 className="font-semibold"> Changes to this Privacy Policy</h3>
                    <p className="text-sm opacity-75 mt-3"> RS Motors International reserves the right to update this Privacy Policy. Any changes will be posted on our website.</p>
                </div>
                <div className="mt-10">
                    <h3 className="font-semibold"> Contact Us</h3>
                    <p className="text-sm opacity-75 mt-3">If you have questions about our Privacy Policy or wish to exercise your rights, please <Link className="text-blue-500 hover:underline" to={'/contact'}>contact</Link> us </p>
                </div>
            </div>
        </>
    );
};

export default PP;