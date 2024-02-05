import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import NoData from "../../../components/NoData";

const Payments = () => {
    document.title = 'RS Motors | Payments'
    const [showBalance, setShowBalance] = useState(false);
    const [datas, setDatas] = useState([]);
    const [allData, setAllData] = useState([])
    const [err, setErr] = useState('');
    const [pin, setPin] = useState();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch('https://rs-motors-server.vercel.app/pays').then(res => res.json()).then(data => setAllData(data));
    }, [])


    // eslint-disable-next-line no-unused-vars
    const { data = [], refetch } = useQuery({
        queryKey: ['pays'],
        queryFn: async () => {
            const response = await axios.get('https://rs-motors-server.vercel.app/pays?status=Pending');
            setDatas(response.data)
            return response.data
        }
    });

    const totalPay = allData.reduce((acc, item) => acc + item.price, 0);

    async function handleFilter(event) {

        if (event.target.value == 'All') {
            const response = await axios.get(`https://rs-motors-server.vercel.app/pays`);
            return setDatas(response.data);

        } else {
            const response = await axios.get(`https://rs-motors-server.vercel.app/pays?status=${event.target.value}`);
            return setDatas(response.data);
        }
    }

    function handleVerifyPayment(_id) {
        Swal.fire({
            title: "Payment verified?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, verified it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.patch(`https://rs-motors-server.vercel.app/pays/${_id}`).then(res => {

                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Payment Verified!",
                            text: "You have successfully verified this transaction",
                            icon: "success"
                        });
                    }
                    refetch()

                }).catch(err => console.log(err))

            }
        });
    }

    function handleOpenModal() {
        setErr('')
        setShowModal(true);

        setTimeout(() => {
            document.getElementById('my_modal_2').showModal();
        }, 100)

    }

    function handleShowAllP() {

        if (pin !== "12850") {
            setErr('The PIN you entered is incorrect.');

        } else {
            setShowBalance(true);
            setErr('')

            setTimeout(() => {
                setShowModal(false)
            }, 100)
        }
    }

    return (
        <div className="text-white">

            {/* Modal */}
            {showModal && <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-[#322a38] rounded-sm">
                    <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-white">Enter PIN</label>
                    <input type="password" name="name" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Type Your PIN" onChange={(event) => setPin(event.target.value)} />
                    <p className="text-red-400 mt-1 text-sm">{err}</p>
                    <button type="button" className="py-1 rounded-sm px-4 mt-3 bg-[#24D366]" onClick={handleShowAllP}>Verify</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>}

            <div className="md:grid grid-cols-3">
                <div className="bg-black hidden md:block">
                    <select name="" id="" className="bg-black p-3 " onChange={handleFilter}>
                        <option value="All">All</option>
                        <option selected value="Pending">Pending</option>
                        <option value="Verified">Verified</option>
                    </select>
                </div>
                <div className="">
                    <h1 className="text-2xl text-center">Look At Your All Payment</h1>
                </div>
                <div className="flex justify-end items-center gap-3 mr-16 md:mr-0 mt-3 md:mt-0">
                    <div className="">Lifetime Payments:</div>
                    <div className="border px-3 ">
                        {!showBalance ? <p className="">****</p> :
                            <p> ${totalPay}</p>}
                    </div>
                    {!showBalance ? <IoMdEye className=" text-2xl cursor-pointer hover:text-sky-700" onClick={handleOpenModal} /> :
                        <IoMdEyeOff className=" text-2xl cursor-pointer hover:text-sky-700" onClick={() => setShowBalance(false)} />}
                </div>
                <div className="bg-black block md:hidden mt-5">
                    <select name="" id="" className="bg-black p-3 " onChange={handleFilter}>
                        <option value="All">All</option>
                        <option selected value="Pending">Pending</option>
                        <option value="Verified">Verified</option>
                    </select>
                </div>
            </div>

            {datas.length ? <div className="mt-5 md:mt-20">
                <div className="hidden md:flex mb-2 opacity-45">
                    <p className="flex-1">Email</p>
                    <p className="flex-1"> Date</p>
                    <p className="flex-1">Transaction ID </p>
                    <p className="flex-1"> Status</p>
                    <p className=""> Action</p>
                </div>
                {datas.map(pay => <div key={pay._id} className="md:flex mb-4 justify-between items-center border border-gray-600 rounded p-3 space-y-3 md:space-y-0">
                    <p className='flex-1'>{pay?.requestEmail}</p>
                    <p className='flex-1'>{pay?.date}</p>
                    <p className='flex-1'>{pay?.transactionId}</p>
                    <p className='flex-1'>{pay?.status}</p>
                    <div className="flex gap-4 text-2xl">
                        {pay.status == 'Pending' ? < FaCheckCircle className='text-blue-600  cursor-pointer hover:scale-125 transition-all' onClick={() => handleVerifyPayment(pay._id)} /> :
                            <FaCheckCircle className='text-gray-500 cursor-not-allowed' />}
                    </div>
                </div>)}
            </div> :
                <div className=" flex justify-center">
                    <NoData />
                </div>}
        </div >
    );
};

export default Payments;