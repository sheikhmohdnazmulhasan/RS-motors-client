import { useLoaderData } from "react-router-dom";

const CarDtls = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <p>Details Information</p>
            <h1>Hello world</h1>
        </div>
    );
};

export default CarDtls;