import { IMAGE } from "../assets";

const OurStory = () => {
    const aboutUsPoints = [
        "Dedicated to providing premium sporting goods and equipment for athletes of all levels.",
        "Curated selection of top-quality products from leading brands, ensuring performance and durability.",
        "Passionate team of sports enthusiasts offering expert advice and personalized customer service.",
        "Committed to customer satisfaction through reliable service and a seamless shopping experience.",
        "Join a community that values passion, performance, and the pursuit of sporting excellence."
      ];
  return (
    <div className="font-Roboto mt-2">
        <div className="bg-neutral-10 p-10 flex flex-col md:flex-row gap-5 md:gap-0 justify-between rounded-xl">

       
      <div className="flex flex-col gap-6 max-w-[800px]">
        <h1 className="text-2xl font-bold text-neutral-60">
          Our <span className="text-primary-50">Story</span>
        </h1>

        <p className="text-neutral-60 text-sm text-justify">
        Welcome to Sportify Hub, your ultimate destination for premium sporting goods and equipment. At Sportify Hub, we're passionate about sports and fitness, and our mission is to equip athletes of all levels with the gear they need to perform at their best. Whether you're a seasoned professional or just starting your fitness journey, we've got you covered with a curated selection of top-quality products from leading brands.
        </p>

        <div className="flex flex-col gap-3 text-neutral-60">
        {
            aboutUsPoints.map((point, index) => (
        <ul key={index} className="flex items-center gap-3">
            <div className="size-[5px] rounded-full bg-neutral-60"></div>
            <li className="text-sm">{point}</li>
        </ul>
            ))
        }
        </div>

        <p className="text-neutral-60 text-sm">Join the Sportify Hub community today and elevate your game with gear that inspires greatness. Experience the difference with Sportify Hub – where passion meets performance.</p>

        
      </div>

      <div className="max-w-[300px] rounded-xl border border-primary-60 p-3 flex flex-col gap-3">
        <img src={IMAGE.aboutUs} alt="about-us" className="rounded-t-xl" />
        <img src={IMAGE.aboutUs} alt="about-us" className="rounded-b-xl" />
      </div>

      </div>
    </div>
  );
};

export default OurStory;
