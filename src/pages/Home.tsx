// import Hero from "../components/Hero";

import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs/ContactUs";
import Facilities from "../components/Facilities";
import FAQ from "../components/FAQ";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="px-5 md:px-0">
        <Facilities />
        <FeaturedProducts />
        <Banner/>
        <FAQ />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
