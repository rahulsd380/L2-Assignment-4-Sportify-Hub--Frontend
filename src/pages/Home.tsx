// import Hero from "../components/Hero";

import ContactUs from "../components/ContactUs/ContactUs";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Hero from "../components/Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturedProducts/>
            <ContactUs/>
        </div>
    );
};

export default Home;