import { useQuery } from '@tanstack/react-query';
import { MdEditDocument, MdDelete } from "react-icons/md";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Cars = () => {
    document.title = `RS Motors | All Car`

    const { data = [], refetch } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const response = await axios.get('https://rs-motors-server.vercel.app/cars/v1');
            return response.data
        }
    });

    function handleDelete(_id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://rs-motors-server.vercel.app/car-delete/v1/${_id}`).then(data => {

                    if (data.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    }

                }).catch(err => console.log(err));

            }
        });
    }

    return (
        <div className=" text-white">
            <h1 className="text-2xl text-center text-white uppercase mb-10">Look at Your All Cars</h1>
            <div className=" hidden md:flex mb-2 opacity-45">
                <p className=" mr-[90px]">Photo</p>
                <p className="flex-1 text-start ml-5"> Title</p>
                <p className="flex-1">Year </p>
                <p className="flex-1"> Price</p>
                <p className=""> Action</p>
            </div>
            {data.map(car => <div key={car._id} className="md:flex mb-4 justify-between items-center border border-gray-600 rounded p-3 space-y-3 md:space-y-0">
                <img className='md:w-[110px] md:h-[90px] rounded mr-4' src={car.photo} alt="" />
                <p className='uppercase flex-1'>{car.title}</p>
                <p className='uppercase flex-1'>{car.year}</p>
                <p className='uppercase flex-1'>$ {car.price}</p>
                <div className="flex gap-4 text-2xl">
                    <Link to={`edit-car/${car._id}`}>
                        <MdEditDocument className='text-sky-600 hover:sky-red-700 cursor-pointer hover:scale-125 transition-all' />
                    </Link>
                    <MdDelete className='text-red-600 hover:text-red-700 cursor-pointer hover:scale-125 transition-all' onClick={() => handleDelete(car._id)} />
                </div>
            </div>)}
        </div>
    );
};

export default Cars;