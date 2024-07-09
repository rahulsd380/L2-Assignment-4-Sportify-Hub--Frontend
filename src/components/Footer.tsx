import { Link } from "react-router-dom";
import { ICONS, IMAGE } from "../assets";

const Footer = () => {
  const footerItems = [
    {
      title: "Customer Care",
      items: [
        {
          label: "About Us",
          path: "about-us",
        },
        {
          label: "Contact Info",
          path: "contact-info",
        },
        {
          label: "Contact Us",
          path: "contact-us",
        },
        {
          label: "Store",
          path: "store",
        },
      ],
    },
    {
      title: "Important Links",
      items: [
        {
          label: "My Orders",
          path: "my-orders",
        },
        {
          label: "Terms & Conditions",
          path: "terms-conditions",
        },
        {
          label: "Privacy Policy",
          path: "privacy-policy",
        },
        {
          label: "Returns & Exchanges",
          path: "returns-exchanges",
        },
      ],
    },
  ];
  return (
    <div className="bg-[#222222] ">
      <footer className="max-width flex items-center justify-between py-10">
        <div className="flex flex-col gap-5">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={IMAGE.logo} alt="spotify-hub" className="size-8" />
            <h1 className="font-Roboto text-2xl font-bold text-neutral-5">
              Spotify Hub
            </h1>
          </Link>
          <p className="text-neutral-5 text-sm max-w-[400px]">
            Sportify Hub: Your ultimate destination for top-quality sporting
            goods. Elevate your game with our curated selection and expert gear.
          </p>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2">
              <img
                src={ICONS.location}
                alt="location-icon"
                className="size-5"
              />
              <p className="text-neutral-5">Cumilla-3501, Bangladesh</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={ICONS.phone} alt="location-icon" className="size-5" />
              <p className="text-neutral-5">+880 1608249337</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={ICONS.email} alt="location-icon" className="size-5" />
              <p className="text-neutral-5">rahulsd380@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          {footerItems.map((item, index) => (
            <ul key={index} className="flex flex-col gap-4">
              <h1 className="font-Roboto text-xl font-bold text-neutral-5">
                {item.title}
              </h1>
              <li className="flex flex-col gap-3 text-neutral-40 text-sm">
                {item.items.map(({ label, path }) => (
                  <Link to={`/${path}`} className="hover:underline">
                    {label}
                  </Link>
                ))}
              </li>
            </ul>
          ))}
        </div>

        <div className="">
          <ul className="flex flex-col gap-4">
            <h1 className="font-Roboto text-xl font-bold text-neutral-5">
              Join Our Newsletter Now
            </h1>
            <li className="flex flex-col gap-3 text-neutral-40 text-sm">
              <p className="hover:underline">
                Get E-mail updates about our latest shop and special offers.
              </p>
            </li>

            <li className="bg-[#2B2B2B] px-4 py-3 rounded-[100px] max-w-[400px] border border-primary-60 transition duration-300 ease-in-out flex items-center justify-between gap-3">
            <input
                type="text"
                placeholder="Enter your e-mail"
                className="bg-[#2B2B2B] focus:outline-none text-neutral-40 w-full"
              />
              <label htmlFor="email" className="text-neutral-40 cursor-pointer text-sm font-semibold">
                SUBSCRIBE
              </label>
            </li>

            {/* <li className="flex items-center relative">
              <input
                type="text"
                placeholder="Enter your e-mail"
                className="bg-[#2B2B2B] px-4 py-3 rounded-[100px] text-neutral-55 w-[350px] focus:outline-none border border-neutral-55 focus:border-primary-60 transition duration-300 ease-in-out"
              />
              <label htmlFor="email" className="ml-4 text-neutral-55 absolute righ">
                SUBSCRIBE
              </label>
            </li> */}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
