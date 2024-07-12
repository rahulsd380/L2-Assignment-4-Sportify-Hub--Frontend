

const OurVision = () => {
    const visionDetails = [
        {
          title: ["Our", "Vision"],
          description:
            "To be the leading provider of sporting goods that inspire and empower athletes to reach their full potential. We envision a world where everyone has access to the best equipment and support they need to succeed in their sporting endeavors.",
        },
        {
          title: ["Our", "Mission"],
          description:
            "At Sportify Hub, our mission is to empower athletes of all levels by providing top-quality sporting goods and exceptional customer service. We are committed to helping you achieve your best performance.",
        },
        {
          title: ["Our", "Commitment"],
          description:
            "We are dedicated to ensuring customer satisfaction through reliable service and expert advice. Join our community and discover the difference with Sportify Hub, where your sporting journey is our top priority.",
        },
      ];
    return (
      <div className="mt-20 flex flex-col md:flex-row items-center justify-between font-Roboto gap-10">
        {visionDetails.map((detail, index) => (
          <div key={index} className="bg-white border border-neutral-10 shadow-sm rounded-md hover:bg-primary-60 transition duration-300 flex flex-col gap-3 group p-4">
            <h1 className="text-3xl font-bold text-neutral-60 group-hover:text-white">
              {detail.title[0]} <span className="text-primary-50 group-hover:text-white">{detail.title[1]}</span>
            </h1>
  
            <p className="text-neutral-60 text-base text-justify group-hover:text-white">
              {detail.description}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default OurVision;
  