import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaG } from "react-icons/fa6";
// import Swal from "sweetalert2";

const AddCloseCar = () => {
  document.title = `RS Motors | Add Portfolio`

  const [features, setFeatures] = useState("Select Features");
  const [featuresShowMore, setFeaturesShowMore] = useState(false);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [hasCrossLimit, setHasCrossLimit] = useState(false);


  // features
  const [climateControl, setClimateControl] = useState(true);
  const [cooledSeats, setCooledSeats] = useState(true);
  const [wheelDrive, setWheelDrive] = useState(true);
  const [airConditioning, setAirConditioning] = useState(true);
  const [alarm, setAlarm] = useState(true);
  const [allWheelDrive, setAllWheelDrive] = useState(true);
  const [allWheelSteering, setAllWheelSteering] = useState(true);
  const [radio, setRadio] = useState(true);
  const [ABS, setABS] = useState(true);
  const [audio, setAudio] = useState(true);
  const [bluetooth, setBluetooth] = useState(true);
  const [brush, setBrush] = useState(true);
  const [cassette, setCassette] = useState(true);
  const [CD, setCD] = useState(true);
  const [cruise, setCruise] = useState(true);
  const [dual, setDual] = useState(true);
  const [fog, setFog] = useState(true);




  const imageUrls = [];

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Limit the number of selected files to 12
    if (files.length > 12) {
      setHasCrossLimit(true);
      return;
    }
    setHasCrossLimit(false);
    setSelectedFiles(files);

    // Generate image previews
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  // remove images
  const handleRemoveImage = (index) => {
    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);

    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  function handleFeatures(text) {


    if (features === "Select Features") {
      setFeatures(text);

    } else if (features.includes(text)) {
      toast.error("You cannot select a feature multiple times", {
        style: {
          borderRadius: "5px",
          background: "#333",
          color: "#fff",
        },
      });

    } else {
      setFeatures(features + "," + " " + text);
    }
  }

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

    // imgbb hosting
    const imgHostingKey = "774dde97e245310358495ba299851640";

    const image = new FormData();
    image.append("image", photo);

    const toastID = toast.loading("Uploading...", {
      style: {
        borderRadius: "5px",
        background: "#333",
        color: "#fff",
      },
    });

    try {
      const promises = selectedFiles.map(async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${imgHostingKey}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // console.log(response);
        return response.data.data.display_url;
      });

      // Wait for all promises to resolve
      const imageUrls = await Promise.all(promises);
      //   console.log(imageUrls);
      const data = {
        features,
        title,
        fuelType,
        year,
        mileage,
        price,
        bodyType,
        condition,
        transmissionType,
        regionalSpec,
        steeringSide,
        photo: imageUrls,
      };

      axios
        .post("https://rs-motors-server.vercel.app/deal-close/v1", data)
        .then((data) => {
          if (data.data.insertedId) {
            toast.success("Successfully Added Portfolio", {
              id: toastID,
              style: {
                borderRadius: "5px",
                background: "#333",
                color: "#fff",
              },
            });

            form.reset();
            setSelectedFiles([]);
            setImagePreviews([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });

    } catch (error) {
      console.error("Error uploading images:", error);
    }
  }



  return (
    <div>
      <h1 className="text-2xl text-center text-white mb-4">Add A Portfolio</h1>
      <Toaster />
      <form className="max-w-md mx-auto" onSubmit={handleAddCloseCar}>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Vehicle Name</label>
          <input type="text" name="title" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Vehicle Name" />
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Year</label>
          <input type="number" name="year" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Year" />

        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Mileage</label>
            <input type="number" name="mileage" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Mileage" />


          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Price</label>
            <input
              type="number"
              name="price"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
              placeholder="Price "

            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Fuel type</label>
            <select
              type="text"
              name="fuelType"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
              placeholder=" "
              required
            >
              <option value="" className="" disabled selected>
                Fuel type
              </option>
              <option value="Diesel" className="text-white">
                Diesel
              </option>
              <option value="Petrol" className="text-white">
                Petrol
              </option>
              <option value="Hybrid" className="text-white">
                Hybrid
              </option>
              <option value="Electric" className="text-white">
                Electric
              </option>
            </select>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Condition</label>
            <select
              type="text"
              name="condition"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
              placeholder=" "
              required
            >
              <option value="" className="" disabled selected>
                Condition
              </option>
              <option value="Excellent" className="text-white">
                Excellent
              </option>
              <option value="Good" className="text-white">
                Good
              </option>
              <option value="Fair" className="text-white">
                Fair
              </option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Body Type</label>
            <select
              type="text"
              name="bodyType"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
              placeholder=" "
              required
            >
              <option value="" className="" disabled selected>
                Body Type
              </option>
              {/* <option value="SUV Coupe Sedan" className="text-white">
                SUV Coupe Sedan
              </option> */}
              <option value="Crossover" className="text-white">
                Crossover
              </option>
              <option
                value="Hard Top Convertible Pick Up Truck"
                className="text-white"
              >
                Hard Top Convertible Pick Up Truck
              </option>
              <option value="Hatchback" className="text-white">
                Hatchback
              </option>
              <option value=" Soft Top Convertible" className="text-white">
                Soft Top Convertible
              </option>
              <option value="Sports Car Van" className="text-white">
                Sports Car Van
              </option>
              <option value="Wagon" className="text-white">
                Wagon
              </option>
              <option value="Utility Truck" className="text-white">
                Utility Truck
              </option>
              <option value=" Other" className="text-white">
                Other
              </option>
            </select>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Transmission Type</label>
            <select
              type="text"
              name="transmissionType"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
              placeholder=" "
              required
            >
              <option value="" className="" disabled selected>
                Transmission Type
              </option>
              <option value="Manual Transmission" className="text-white">
                Manual Transmission
              </option>
              <option value="Automatic Transmission" className="text-white">
                Automatic Transmission
              </option>
            </select>
          </div>
        </div>

        {/* New */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white"> Regional Spec</label>
            <select
              type="text"
              name="regionalSpec"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
              placeholder=" "
              required
            >
              <option value="" className="" disabled selected>
                Regional Spec
              </option>
              <option value="GCC Specs" className="text-white">
                GCC Specs
              </option>
              <option value="American Specs" className="text-white">
                American Specs
              </option>
              <option value="Canadian Specs" className="text-white">
                Canadian Specs
              </option>
              <option value="European Specs" className="text-white">
                European Specs
              </option>
              <option value=" Japanese Specs" className="text-white">
                Japanese Specs
              </option>
              <option value="Korean Specs" className="text-white">
                Korean Specs
              </option>
              <option value="Chinese Specs" className="text-white">
                Chinese Specs
              </option>
              <option value=" Other" className="text-white">
                Other
              </option>
            </select>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Steering Side</label>
            <select
              type="text"
              name="steeringSide"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
              placeholder=" "
              required
            >
              <option value="" className="" disabled selected>
                Steering Side
              </option>
              <option value="Left Hand" className="text-white">
                Left Hand
              </option>
              <option value="Right Hand" className="text-white">
                Right Hand
              </option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Features</label>
          <p className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white">{features}</p>
          <div className="mt-5 mb-9 flex gap-3 flex-wrap">
            {climateControl && <span
              className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
              onClick={() => {
                handleFeatures("Climate Control");
                setClimateControl(false)
              }}
            >
              Climate Control
            </span>}
            {cooledSeats && <span
              className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
              onClick={() => {
                handleFeatures("Cooled Seats");
                setCooledSeats(false)
              }}
            >
              Cooled Seats
            </span>}
            {wheelDrive && <span
              className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
              onClick={() => {
                handleFeatures("4 Wheel Drive");
                setWheelDrive(false);
              }}
            >
              4 Wheel Drive
            </span>}
            {airConditioning && <span
              className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
              onClick={() => {
                handleFeatures("Air Conditioning");
                setAirConditioning(false)
              }}
            >
              4 Air Conditioning
            </span>}
            {alarm && <span
              className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
              onClick={() => {
                handleFeatures("Alarm/Anti-Theft System");
                setAlarm(false);
              }}
            >
              Alarm/Anti-Theft System
            </span>}

            {!featuresShowMore && (
              <p
                className="text-white py-2 px-3 bg-[#BFA37C] rounded cursor-pointer"
                onClick={() => setFeaturesShowMore(true)}
              >
                Show More
              </p>
            )}
          </div>

          {featuresShowMore && (
            <div className="flex-wrap flex gap-3">
              {allWheelDrive && <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => {
                  handleFeatures("All Wheel Drive");
                  setAllWheelDrive(false);
                }}
              >
                All Wheel Drive
              </span>}
              {allWheelSteering && <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => {
                  handleFeatures("All Wheel Steering");
                  setAllWheelSteering(false);
                }}
              >
                All Wheel Steering
              </span>}
              {radio && <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => {
                  handleFeatures("AM/FM Radio");
                  setRadio(false)
                }}
              >
                AM/FM Radio
              </span>}
              {ABS && <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => {
                  handleFeatures("Anti-Lock Brakes/ABS");
                  setABS(false)
                }}
              >
                Anti-Lock Brakes/ABS
              </span>}
              {audio && <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => {
                  handleFeatures("Aux Audio In");
                  setAudio(false);
                }}
              >
                Aux Audio In
              </span>}

              {bluetooth && <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => {
                  handleFeatures("Bluetooth System");
                  setBluetooth(false)
                }}
              >
                Bluetooth System
              </span>}
              {brush && <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => {
                  handleFeatures("Brush Guard");
                  setBrush(false)
                }}
              >
                Brush Guard
              </span>}
              {cassette && <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => {
                  handleFeatures("Cassette Player");
                  setCassette(false);
                }}
              >
                Cassette Player
              </span>}
              {CD && <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => {
                  handleFeatures("CD Player");
                  setCD(false)
                }}
              >
                CD Player
              </span>}
              {cruise && <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => {
                  handleFeatures("Cruise Control");
                  setCruise(false)
                }}
              >
                Cruise Control
              </span>}
              {dual && <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => {
                  handleFeatures("Dual Exhaust");
                  setDual(false);
                }}
              >
                Dual Exhaust
              </span>}
              {fog && <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => {
                  handleFeatures("Fog Lights");
                  setFog(false);
                }}
              >
                Fog Lights
              </span>}
              <p
                className="text-white py-2 px-3 bg-[#BFA37C] rounded cursor-pointer"
                onClick={() => setFeaturesShowMore(false)}
              >
                Show Less
              </p>
            </div>
          )}
        </div>
        {/* upload photos */}
        <div className="max-w-lg mx-auto mb-4">
          <label
            className="block mb-2 text-sm text-white"
            htmlFor="user_avatar"
          >
            Upload file
          </label>
          <div className="flex">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              accept="image/*"
              id="user_avatar"
              name="photo"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
              aria-describedby="user_avatar_help"
              required
            />
          </div>
          {/* if cross the limitation show error message */}
          {hasCrossLimit && (
            <p className="text-red-600 mt-1">
              *** You cannot upload more than 12 files.
            </p>
          )}
          {/* preview photos */}
          <div className="flex flex-wrap mt-4 gap-6">
            {imagePreviews.map((preview, index) => (
              <div key={index}>
                <div className="flex relative">
                  <div className="bg-gray-200 rounded-lg ">
                    <img
                      src={preview}
                      alt={`Preview ${index}`}
                      className="h-20 w-20"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="bg-[#241C2B]  text-white text-xl rounded-full h-7 w-7 absolute -top-3 -right-2"
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-md text-sm w-full px-5 py-2.5 text-center"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCloseCar;
