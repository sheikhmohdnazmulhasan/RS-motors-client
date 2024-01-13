import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// import Swal from "sweetalert2";

const AddCloseCar = () => {

    async function handleAddCloseCar(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const year = form.year.value;
        const mileage = form.mileage.value;
        const price = form.price.value;
        const fuelType = form.fuelType.value;
        const bodyType = form.bodyType.value;
        const condition = form.condition.value;
        const transmissionType = form.transmissionType.value;
        const regionalSpec = form.regionalSpec.value;
        const steeringSide = form.steeringSide.value;
        const photo = form.photo.files[0];

        const image = new FormData();
        image.append('image', photo);

        const toastID = toast.loading('Uploading...',
            {
                style: {
                    borderRadius: '5px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );

        const response = await axios.post('https://api.imgbb.com/1/upload?key=774dde97e245310358495ba299851640', image);

        console.log(response);

        if (response.data.success == true) {

            const data = { title, fuelType, bodyType, transmissionType, regionalSpec, steeringSide, year, mileage, price, condition, photo: response.data.data.display_url };


            axios.post('http://localhost:5000/deal-close/v1', data).then(data => {

                if (data.data.insertedId) {

                    toast.success('Car Successfully Added',
                        {
                            id: toastID,
                            style: {
                                borderRadius: '5px',
                                background: '#333',
                                color: '#fff',
                            },
                        });

                    form.reset();

                }

            }).catch(err => console.log(err))

        }

    }

    return (
        <div>
            <h1 className="text-2xl text-center text-white mb-4">Add A Portfolio</h1>
            <Toaster />
            <form className="max-w-md mx-auto" onSubmit={handleAddCloseCar}>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="title" id="floating_email" className="block text-white py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Vehicle Name</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="number" name="year" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Year</label>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" name="mileage" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mileage</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" name="price" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">

                    <div className="relative z-0 w-full mb-5 group">
                        <select type="text" name="fuelType" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                            <option value="" className="" disabled selected>Fuel type</option>
                            <option value="Diesel" className="text-black">Diesel</option>
                            <option value="Petrol" className="text-black">Petrol</option>
                            <option value="Hybrid" className="text-black">Hybrid</option>
                            <option value="Electric" className="text-black">Electric</option>
                        </select>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <select type="text" name="condition" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                            <option value="" className="" disabled selected>Condition</option>
                            <option value="Excellent" className="text-black">Excellent</option>
                            <option value="Good" className="text-black">Good</option>
                            <option value="Fair" className="text-black">Fair</option>
                        </select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">

                    <div className="relative z-0 w-full mb-5 group">
                        <select type="text" name="bodyType" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                            <option value="" className="" disabled selected>Body Type</option>
                            <option value="SUV Coupe Sedan" className="text-black">SUV Coupe Sedan</option>
                            <option value="Crossover" className="text-black">Crossover</option>
                            <option value="Hard Top Convertible Pick Up Truck" className="text-black">Hard Top Convertible Pick Up Truck</option>
                            <option value="Hatchback" className="text-black">Hatchback</option>
                            <option value=" Soft Top Convertible" className="text-black">Soft Top Convertible</option>
                            <option value="Sports Car Van" className="text-black">Sports Car Van</option>
                            <option value="Wagon" className="text-black">Wagon</option>
                            <option value="Utility Truck" className="text-black">Utility Truck</option>
                            <option value=" Other" className="text-black">Other</option>
                        </select>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <select type="text" name="transmissionType" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                            <option value="" className="" disabled selected>Transmission Type</option>
                            <option value="Manual Transmission" className="text-black">Manual Transmission</option>
                            <option value="Automatic Transmission" className="text-black">Automatic Transmission</option>

                        </select>
                    </div>
                </div>

                {/* New */}
                <div className="grid md:grid-cols-2 md:gap-6">

                    <div className="relative z-0 w-full mb-5 group">
                        <select type="text" name="regionalSpec" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                            <option value="" className="" disabled selected>Regional Spec</option>
                            <option value="GCC Specs" className="text-black">GCC Specs</option>
                            <option value="American Specs" className="text-black">American Specs</option>
                            <option value="Canadian Specs" className="text-black">Canadian Specs</option>
                            <option value="European Specs" className="text-black">European Specs</option>
                            <option value=" Japanese Specs" className="text-black">Japanese Specs</option>
                            <option value="Korean Specs" className="text-black">Korean Specs</option>
                            <option value="Chinese Specs" className="text-black">Chinese Specs</option>
                            <option value=" Other" className="text-black">Other</option>
                        </select>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <select type="text" name="steeringSide" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                            <option value="" className="" disabled selected>Steering Side</option>
                            <option value="Left Hand" className="text-black">Left Hand</option>
                            <option value="Right Hand" className="text-black">Right Hand</option>

                        </select>
                    </div>
                </div>

                <div className="max-w-lg mx-auto mb-4">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="user_avatar">Upload file</label>
                    <input name="photo" className="block w-full text-sm text-gray-900 rounded-md cursor-pointer dark:text-gray-400 focus:outline-none bg-gray-700" aria-describedby="user_avatar_help" id="user_avatar" type="file" required />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add Car</button>
            </form>
        </div>
    );
};

export default AddCloseCar;