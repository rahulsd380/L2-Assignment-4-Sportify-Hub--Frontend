import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StaggeredDropDown from "./Dropdown";

const Hero = () => {
  const bannerImages = [
    "https://i.ibb.co/2kfdYpM/4.png",
    "https://i.ibb.co/KjyttSD/1.png",
    "https://i.ibb.co/WFt8f6T/2.png",
    "https://i.ibb.co/GvzKh5N/3.png",
  ];

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      import("swiper").then(({ Swiper }) => {
        Swiper.use([Navigation]);
      });
    }
  }, []);

  return (
    <div className="max-width flex flex-col md:flex-row gap-10 mt-10">
      <StaggeredDropDown />
      <div className="max-w-[940px] h-[480px] bg-neutral-60 rounded-md relative items-center">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation;
            if (navigation && typeof navigation !== "boolean") {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 4000 }}
          className="w-full h-full"
          speed={2000}
        >
          {bannerImages.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.img
                src={image}
                alt={`Banner ${index + 1}`}
                className="max-w-[940px] h-[480px] rounded-md"
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-between items-center absolute top-0 bottom-0 w-full z-40">
          <button
            ref={prevRef}
            className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 px-4 py-2 rounded-r transition"
          >
            Prev
          </button>
          <button
            ref={nextRef}
            className="text-white bg-black bg-opacity-50 hover:bg-opacity-75 px-4 py-2 rounded-l transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
