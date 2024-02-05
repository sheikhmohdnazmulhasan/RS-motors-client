import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddCar = () => {
  document.title = `RS Motors | Add Car`


  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [hasCrossLimit, setHasCrossLimit] = useState(false);
  //   const [imageUrls, setImageUrls] = useState([]);
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

  async function handleAddCar(event) {
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

        console.log(response);
        return response.data.data.display_url;
      });

      // Wait for all promises to resolve
      const imageUrls = await Promise.all(promises);
      console.log(imageUrls);
      const data = {
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
        .post("https://rs-motors-server.vercel.app/add-car/v1", data)
        .then((data) => {
          if (data.data.insertedId) {
            toast.success("Car Successfully Added", {
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
      <h1 className="text-2xl text-center text-white mb-4">Add Parts</h1>
      <Toaster />
      <form className="max-w-md mx-auto" onSubmit={handleAddCar}>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Brand</label>
          <input type="text" name="title" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Vehicle Name" />
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Year</label>
          <input type="number" name="year" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Year" />

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

        <div className="grid md:grid-cols-2 md:gap-6">
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
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Category</label>
            <select
              type="text"
              name="bodyType"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
              placeholder=" "
              required
            >
              <option value="" className="" disabled selected>
              Category
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
                  <button type="button"
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

export default AddCar;
