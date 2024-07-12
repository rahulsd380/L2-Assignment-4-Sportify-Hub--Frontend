import { BsSearch } from "react-icons/bs";
import UserProfile from "./UserProfile";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageSquare } from "react-icons/lu";
import { MdHelpOutline } from "react-icons/md";


const DashboardHeader = () => {
    return (
            <div className="font-Roboto bg-white flex justify-between items-center mt-3 ">

            <div className="flex items-center">
            <input
            placeholder="Search Accessories"
            type="text" 
            className="px-4 py-2 bg-white rounded-l-md border focus:outline-none focus:border-primary-60 transition duration-300 w-full"
        />
            <button className="px-4 py-3 bg-primary-60 border border-primary-60 rounded-r-md">
            <BsSearch className="text-white "/>
            </button>
            </div>

            <div className="flex items-center gap-8">
            <div className="flex items-center gap-7 text-2xl text-neutral-60">
            <IoMdNotificationsOutline className="hover:text-primary-60 cursor-pointer transition duration-300"/>
            <LuMessageSquare className="hover:text-primary-60 cursor-pointer transition duration-300"/>
            <MdHelpOutline className="hover:text-primary-60 cursor-pointer transition duration-300"/>
            </div>
            <UserProfile/>

            </div>
            </div>
    );
};

export default DashboardHeader;