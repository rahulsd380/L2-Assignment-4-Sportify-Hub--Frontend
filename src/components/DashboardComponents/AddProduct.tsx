import Lottie from "lottie-react";
import { ICONS } from "../../assets";
import contactUsAnimation from "../../assets/contact-us-animation.json";
import SocialMediaILinks from "../Footer/SocialMediaILinks";
import AddProductForm from "./AddProduct/AddProductForm";

const AddProduct = () => {
  return (
    <div className="  font-Roboto flex flex-col md:flex-row gap-10 bg-white border rounded-xl p-5 md:p-10">
      <div className="w-full flex flex-col gap-4">

        {/* Heading */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-neutral-60">
            Add <span className="text-primary-50">Product</span>
          </h1>
          <p className="text-neutral-60">
            Add new product providing the required details.
          </p>
        </div>

        {/* Contact Form */}
        <AddProductForm />
      </div>

      <div className="w-full flex flex-col gap-8">
        {/* Animation */}
        <div className="max-w-[400px] mx-auto">
          <Lottie animationData={contactUsAnimation} loop={true} />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3 text-base">
          <div className="flex items-center gap-2">
            <img src={ICONS.location} alt="location-icon" className="size-5" />
            <p className="text-neutral-55">Cumilla-3501, Bangladesh</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={ICONS.phone} alt="location-icon" className="size-5" />
            <a
              href="tel:+880 1608249337"
              className="text-neutral-55 hover:underline"
            >
              +880 1608249337
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img src={ICONS.email} alt="location-icon" className="size-5" />
            <p className="text-neutral-55">rahulsd380@gmail.com</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src={ICONS.arrow} alt="location-icon" className="size-5" />
            <p className="text-primary-60 font-semibold">Follow Us On:</p>
          </div>

          <SocialMediaILinks/>
        </div>

      </div>
    </div>
  );
};

export default AddProduct;
