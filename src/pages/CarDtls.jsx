import { useLoaderData } from "react-router-dom";

const CarDtls = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    bodyType,
    condition,
    features,
    fuelType,
    mileage,
    photo,
    price,
    regionalSpec,
    steeringSide,
    title,
    transmissionType,
    year,
  } = data;

  return (
    <div className="min-h-screen bg-[#000] text-white">
      <p>Details Information</p>
    </div>
  );
};

export default CarDtls;
