import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";


const OrderSuccess = () => {
    return (
            <div className="font-Roboto flex flex-col gap-3 mt-16">
            <div className="flex items-center justify-center">
            <div className="bg-primary-60 p-2 size-32 rounded-full flex items-center justify-center">
            <TiTick className="text-white text-7xl" />
            </div>
            </div>
            <h1 className="text-xl md:text-3xl font-semibold text-neutral-60 text-center">Thank you for ordering. Your order is successfull.</h1>
            <p className="text-center max-w-[900px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus architecto nobis numquam explicabooluptates quasi reprehenderit iusto.</p>

            <div className="flex items-center justify-center gap-4">
            <Link to={"/"} className="text-neutral-60 font-Roboto px-4 py-2 bg-white border border-primary-60 rounded-md font-medium hover:bg-primary-55 hover:text-white transition duration-300">
                    Back To Home
                </Link>
            <Link to={"/all-products"} className="text-white font-Roboto px-4 py-2 bg-primary-60 rounded-md font-medium hover:bg-primary-55 transition duration-300">
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccess;