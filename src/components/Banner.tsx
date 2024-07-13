import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-14 max-width mx-auto mt-20">
            <div className="p-6 rounded flex flex-col-reverse lg:flex-row items-center justify-between font-Roboto bg-gradient-to-r from-slate-100 to-slate-300">
                <div>
                <p className="text-sm font-normal text-neutral-60">New Edition</p>
                <h1 className="text-2xl font-medium text-neutral-60 mt-2">Our one-stop shop for all sporting goods and accessories.</h1>
                <p className="text-sm font-normal text-neutral-60 mt-4">Don't miss the opportunity!</p>
                <Link to={"/all-products"} className="duration-300 transform hover:-translate-y-0.5 mt-5 font-semibold text-neutral-60 flex items-center gap-3">
                Shop Now 
                <FaArrowRightLong />
                </Link>
                </div>
                <img src="https://i.ibb.co/dkWKKZx/cricket-ball-3.png" alt="" className="size-40 lg:size-60"/>
            </div>
            <div className="p-6 rounded flex flex-col-reverse lg:flex-row items-center justify-between font-Roboto bg-gradient-to-r from-yellow-100 to-purple-200">
                <div>
                <p className="text-sm font-normal text-neutral-60">New Edition</p>
                <h1 className="text-2xl font-medium text-neutral-60 mt-2">Our one-stop shop for all sporting goods and accessories.</h1>
                <p className="text-sm font-normal text-neutral-60 mt-4">Don't miss the opportunity!</p>
                <Link to={"/all-products"} className="duration-300 transform hover:-translate-y-0.5 mt-5 font-semibold text-neutral-60 flex items-center gap-3">
                Shop Now 
                <FaArrowRightLong />
                </Link>
                </div>
                <img src="https://i.ibb.co/1TzLTnw/cricket-bat-3.png" alt="" className="size-40 lg:size-60"/>
            </div>
        </div>
    );
};

export default Banner;