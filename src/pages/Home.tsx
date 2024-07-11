// import Hero from "../components/Hero";

import ContactUs from "../components/ContactUs/ContactUs";
import FAQ from "../components/FAQ";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Hero from "../components/Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturedProducts/>
            <FAQ/>
            <ContactUs/>
        </div>
    );
};

export default Home;