const Shop = () => {
    return (
        <div className="min-h-screen">
            <div className=" bg-[url('https://i.ibb.co/6JmKc1S/shop-banner.jpg')] h-96 bg-fixed bg-cover">
                <div className="bg-black opacity-70 w-full h-full flex justify-center text-center items-center flex-col gap-4">
                    <h1 className="text-3xl font-bold text-white uppercase">RS Motors International is ready to offer you <br /> the car of your choice</h1>
                    <form>
                        <input type="text" name="" id="" className="py-2 px-4 rounded-l active:!border-0" />
                        <input type="submit" value="Search" className="py-2 px-2 rounded-r text-white cursor-pointer hover:bg-[#947d5d] bg-[#BFA37C]" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shop;