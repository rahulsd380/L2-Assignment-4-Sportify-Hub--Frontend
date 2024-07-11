import { Link } from "react-router-dom";
import OurStory from "../components/OurStory";
import OurVision from "../components/OurVision";
import OurTeam from "../components/OurTeam";
import ContactUs from "../components/ContactUs/ContactUs";
import FAQ from "../components/FAQ";


const AboutUs = () => {
    return (
        <div className="max-width mt-16 p-5 md:p-0">
            <p className="font-Roboto text-neutral-60 text-sm"><Link to={"/"} className="hover:underline">Home</Link> | About Us</p>
            <OurStory/>
            <OurVision/>
            <OurTeam/>
            <FAQ/>
            <ContactUs/>
        </div>
    );
};

export default AboutUs;