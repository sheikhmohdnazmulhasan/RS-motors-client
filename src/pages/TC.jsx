import Wp from "../components/Wp";

const TC = () => {
    document.title = `RS Motors | Terms and Conditions`

    return (
        <div className="bg-gray-950 px-5 md:px-20 text-white min-h-screen py-20" data-aos="fade-left">
            <h1 className="text-2xl text-center">Terms and Conditions</h1>
            <div className="mt-10">
                <h3 className="font-semibold">Vehicle Listings and Descriptions</h3>
                <p className="text-sm opacity-75 mt-3">RS Motors International strives to provide accurate and detailed information about each vehicle listed on our platform. However, we do not guarantee the accuracy, completeness, or reliability of any information provided.</p>
                <p className="text-sm opacity-75 mt-3">The images of vehicles are for illustrative purposes only. Actual vehicles may vary in appearance and condition.</p>
            </div>
            <div className="mt-10">
                <h3 className="font-semibold"> Vehicle Inspection and Warranty</h3>
                <p className="text-sm opacity-75 mt-3">All used cars offered by RS Motors International undergo a thorough inspection process. However, the absence of any identified issues at the time of inspection does not guarantee the future performance of the vehicle.</p>
                <p className="text-sm opacity-75 mt-3">RS Motors International does not provide warranties, expressed or implied, unless explicitly stated in writing.</p>
            </div>
            <div className="mt-10">
                <h3 className="font-semibold"> Pricing and Payment</h3>
                <p className="text-sm opacity-75 mt-3">Prices for vehicles are subject to change without notice. RS Motors International reserves the right to modify pricing at any time.</p>
                <p className="text-sm opacity-75 mt-3">Payment terms and accepted payment methods will be communicated during the purchasing process.</p>
            </div>
            <div className="mt-10">
                <h3 className="font-semibold">Shipping and Delivery</h3>
                <p className="text-sm opacity-75 mt-3">RS Motors International can assist in arranging shipping for purchased vehicles. Shipping costs and delivery times will be communicated to the customer before finalizing the purchase.</p>
                <p className="text-sm opacity-75 mt-3">The customer is responsible for any taxes, duties, or fees associated with the importation of the vehicle to their location.</p>
            </div>
            <div className="mt-10">
                <h3 className="font-semibold">Returns and Refunds</h3>
                <p className="text-sm opacity-75 mt-3"> RS Motors International does not accept returns or provide refunds once a vehicle has been purchased.</p>
                <p className="text-sm opacity-75 mt-3">In the event of a dispute, customers are encouraged to contact RS Motors International's customer service for resolution.</p>
            </div>
        </div>
    );
};

export default TC;