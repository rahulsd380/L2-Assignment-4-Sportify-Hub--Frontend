import { Link } from "react-router-dom";
import { ICONS, IMAGE } from "../assets";
import HamburgerMenu from "./HamburgerMenu";
import { useGetAllCartProductsQuery } from "../redux/api/baseApi";


const Navbar = () => {
    const { data } = useGetAllCartProductsQuery({});
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
            path : "dashboard"
        }
    ]
    return (
        <div className="flex items-center justify-between max-width mt-5">
           <Link to={"/"} className="flex items-center gap-2">
                <img src={IMAGE.logo} alt="spotify-hub" className="size-8" />
                <h1 className="font-Roboto text-2xl font-bold text-primary-50">Spotify Hub</h1>
            </Link>

            <div className="hidden lg:flex items-center gap-8">

            <ul className="flex items-center gap-6 text-base text-neutral-60 font-Roboto">
                {navlinks.map(link => (
                        <Link key={link.label} to={`/${link.path}`} className="hover:text-primary-50 transition duration-300">{link.label}</Link>
                ))}
            </ul>

            <div className="flex items-center gap-5">
                <img src={ICONS.user} alt="user-profile-icon" className="size-7 cursor-pointer" />
                <img src={ICONS.wishlist} alt="user-profile-icon" className="size-7 cursor-pointer" />
                {/* <Link to={"/cart"}><img src={ICONS.cart} alt="user-profile-icon" className="size-6 cursor-pointer" /></Link> */}

                <li className="font-sans block lg:inline-block align-middle text-black hover:text-gray-700">
  <a href="#" role="button" className="relative flex">
  <Link to={"/cart"}><img src={ICONS.cart} alt="user-profile-icon" className="size-8 cursor-pointer" /></Link>
      <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-xs  leading-tight text-center">{data?.data?.length}
    </span>
  </a>
</li>
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
            <div className="block lg:hidden">
                <HamburgerMenu/>
            </div>
        </div>
    );
};

export default Navbar;