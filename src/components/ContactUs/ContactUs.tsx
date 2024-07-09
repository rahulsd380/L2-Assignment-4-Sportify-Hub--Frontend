import Lottie from "lottie-react";
import { ICONS } from "../../assets";
import contactUsAnimation from "../../assets/contact-us-animation.json";
import { socialMediaIcons } from "../Footer/footerConstants";

const ContactUs = () => {
  const inputStyle =
    "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-neutral-40 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";

  const textareaStyles =
    "block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-neutral-40 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";

  const labelStyle =
    "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1";
  return (
    <div className="max-w-4xl mx-auto flex gap-10 bg-white border rounded-xl p-10">
      <div className="font-Roboto w-full flex flex-col gap-4">
        <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-neutral-60">
          Get In <span className="text-primary-50">Touch</span>
        </h1>
        <p className="text-neutral-60">
          We are here for you! How can we assist you?
        </p>
        </div>

        {/* Contact Form */}    
        <form className="flex flex-col gap-5">
            {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              id="fullName"
              className={inputStyle}
              placeholder=" "
            />

            <label htmlFor="fullName" className={labelStyle}>
              Full Name
            </label>
          </div>

            {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              className={inputStyle}
              placeholder=" "
            />

            <label htmlFor="email" className={labelStyle}>
              Email
            </label>
          </div>

            {/* Phone Number */}
          <div className="relative">
            <input
              type="text"
              id="number"
              className={inputStyle}
              placeholder=" "
            />

            <label htmlFor="number" className={labelStyle}>
            Phone Number
            </label>
          </div>

            {/* Message */}
          <div className="">
            <textarea
            rows={7}
              id="message"
              className={textareaStyles}
              placeholder="Write your message..."
            />
          </div>

          <button className="text-white font-Roboto px-4 py-2 bg-primary-60 rounded-md font-medium hover:bg-primary-55 transition duration-300">
                    Submit
                </button>
        </form>
      </div>

      <div className="w-full flex flex-col gap-8">
      <div className="max-w-[400px] mx-auto">
      <Lottie animationData={contactUsAnimation} loop={true} />
      </div>
      <div className="flex flex-col gap-3 text-base">
            <div className="flex items-center gap-2">
              <img
                src={ICONS.location}
                alt="location-icon"
                className="size-5"
              />
              <p className="text-neutral-55">Cumilla-3501, Bangladesh</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={ICONS.phone} alt="location-icon" className="size-5" />
              <a href="tel:+880 1608249337" className="text-neutral-55 hover:underline">+880 1608249337</a>
            </div>
            <div className="flex items-center gap-2">
              <img src={ICONS.email} alt="location-icon" className="size-5" />
              <p className="text-neutral-55">rahulsd380@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
              <img
                src={ICONS.arrow}
                alt="location-icon"
                className="size-5"
              />
              <p className="text-primary-60 font-semibold">
         Follow Us On:
        </p>
            </div>
          
          <div className="flex items-center gap-4">
         
                {
                  socialMediaIcons.map((icon, index) => (
                    <a href={icon.href} target="blank" key={index} style={{ backgroundColor: icon.bgColor }} className={`size-10 rounded-full flex justify-center items-center`}>
                        <img src={icon.icon} alt="" className="size-6" />
                    </a>
                  ))
                }
            </div>
          </div>
      </div>
    </div>
  );
};

export default ContactUs;
