import { Link } from "react-router-dom";
import { ICONS, IMAGE } from "../assets";


const Navbar = () => {
    const navlinks = [
        {
            label : "Home",
            path : ""
        },
        {
            label : "All Products",
            path : "all-products"
        },
        {
            label : "Cart",
            path : "cart"
        },
        {
            label : "About Us",
            path : "about-us"
        },
        {
            label : "Manage Products",
            path : "manage-products"
        },
        {
            label : "Dashboard",
            path : "dashboard"
        },
    ]
    return (
        <div className="flex items-center justify-between max-width mt-5">
           <Link to={"/"} className="flex items-center gap-2">
                <img src={IMAGE.logo} alt="spotify-hub" className="size-8" />
                <h1 className="font-Roboto text-2xl font-bold text-primary-50">Spotify Hub</h1>
            </Link>

            <div className="flex items-center gap-8">

            <ul className="flex items-center gap-6 text-base text-neutral-60 font-Roboto">
                {navlinks.map(link => (
                        <Link key={link.label} to={link.path} className="hover:text-primary-50 transition duration-300">{link.label}</Link>
                ))}
            </ul>

            <div className="flex items-center gap-5">
                <img src={ICONS.user} alt="user-profile-icon" className="size-6 cursor-pointer" />
                <img src={ICONS.wishlist} alt="user-profile-icon" className="size-6 cursor-pointer" />
                <img src={ICONS.cart} alt="user-profile-icon" className="size-6 cursor-pointer" />
            </div>

            <div className="flex items-center gap-3">
            <button className="text-white font-Roboto px-4 py-2 bg-primary-60 rounded-md font-medium hover:bg-primary-55 transition duration-300">
                    Login
                </button>
                <button className="text-white font-Roboto px-4 py-2 bg-primary-60 rounded-md font-medium hover:bg-primary-55 transition duration-300">
                    Sign Up
                </button>
                
            </div>
            </div>
        </div>
    );
};

export default Navbar;