import { motion } from "framer-motion";
import FeaturedProductCard from "./FeaturedProductCard";
import { productCards } from "../../mockData/productdetails";
import CarouselButton from "./CarouselButton";

import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useEffect, useRef } from "react";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";

const FeaturedProducts = () => {

  const {data, isLoading} = useGetAllProductsQuery({})

    

  const filterButtons = [
    {
      label: "Accessories",
      action: null,
    },
    {
      label: "Backpacks",
      action: null,
    },
    {
      label: "Helmets",
      action: null,
    },
    {
      label: "Bats",
      action: null,
    },
    {
      label: "Cricket Balls",
      action: null,
    },
    {
      label: "Footballs",
      action: null,
    },
  ];

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      import("swiper").then(({ Swiper }) => {
        Swiper.use([Navigation]);
      });
    }
  }, []);

  if(isLoading){
    return <p className="font-Roboto">Loading...</p>
}

  return (
    <div className="max-width flex flex-col gap-6 mt-20">
      <div className="font-Roboto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-60">
          <span className="text-primary-50">Featured</span> Products
        </h1>

        <div className="flex items-center gap-10">
          {/* Filter buttons */}
          <div className="px-4 py-3 bg-white border rounded-md flex justify-between items-center gap-10">
            {filterButtons.map((btn, index) => (
              <button
                key={index}
                className="text-base font-medium text-neutral-60 hover:text-primary-60 transition duration-300"
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Carousel buttons */}
          <CarouselButton prevRef={prevRef} nextRef={nextRef} />
        </div>
      </div>

      <hr className="border border-gray-100" />

      <div className="flex">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          pagination={{
            clickable: true,
          }}
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
          spaceBetween={20}
          modules={[Pagination, Navigation]}
          className="carousel"
        >
          {data?.data.slice(0,6).map((card, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FeaturedProductCard
                  img={card.img}
                  category={card.category}
                  product_name={card.product_name}
                  rating={card.rating}
                  price={card.price}
                  brand={card.brand}
                  stock={card.stock}
                  delivery_type={card.delivery_type}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
