import Lottie from "lottie-react";
import { ICONS } from "../../assets";
import contactUsAnimation from "../../assets/contact-us-animation.json";
import { socialMediaIcons } from "../Footer/footerConstants";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto font-Roboto flex flex-col md:flex-row gap-10 bg-white border rounded-xl p-10">
      <div className="w-full flex flex-col gap-4">

        {/* Heading */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-neutral-60">
            Get In <span className="text-primary-50">Touch</span>
          </h1>
          <p className="text-neutral-60">
            We are here for you! How can we assist you?
          </p>
        </div>

        {/* Contact Form */}
        <ContactUsForm />
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

          <div className="flex items-center gap-4">
            {socialMediaIcons.map((icon, index) => (
              <a
                href={icon.href}
                target="blank"
                key={index}
                style={{ backgroundColor: icon.bgColor }}
                className={`size-10 rounded-full flex justify-center items-center`}
              >
                <img src={icon.icon} alt="" className="size-6" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
