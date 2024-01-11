import { useQuery } from '@tanstack/react-query';
import img from '../../../../../../../../Nazmul/canon/x/zzz/New folder/IMG_6080.png';
import { MdEditDocument, MdDelete } from "react-icons/md";
import axios from 'axios';

const Cars = () => {

    const { data = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const response = await axios.get('http://localhost:5000/cars/v1');
            return response.data
        }
    });

    return (
        <div className="mx-5 md:mx-10 text-white">
            <h1 className="text-2xl text-center text-white uppercase mb-10">Look at Your All Cars</h1>
            {data.map(car => <div key={car._id} className="md:flex mb-4 justify-between items-center border border-gray-600 rounded p-3 space-y-3 md:space-y-0">
                <img className='md:w-[110px] md:h-[90px] rounded' src={car.photo} alt="" />
                <p className='uppercase'>{car.title}</p>
                <p className='uppercase'>{car.year}</p>
                <p className='uppercase'>$ {car.price}</p>
                <div className="flex gap-4 text-2xl">
                    <MdEditDocument className='text-sky-600 hover:sky-red-700 cursor-pointer hover:scale-125 transition-all' />
                    <MdDelete className='text-red-600 hover:text-red-700 cursor-pointer hover:scale-125 transition-all' />
                </div>
            </div>)}
        </div>
    );
};

export default Cars;