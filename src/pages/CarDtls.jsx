import { useLoaderData } from "react-router-dom";

const CarDtls = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <p>Details Information</p>
        </div>
    );
};

export default CarDtls;