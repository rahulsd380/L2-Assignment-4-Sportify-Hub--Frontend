import { useEffect, useRef } from "react";
import CarouselButton from "./FeaturedProducts/CarouselButton";

import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import TeamCard from "./OurTeam/TeamCard";

const OurTeam = () => {
    const teamProfiles = [
        {
          name: "Rahul Sutradhar",
          role: "CEO",
          imageUrl: "https://i.ibb.co/N2wQLFh/cricket-ball-2.png",
          description:
            "Visionary leader with a passion for driving innovation and growth in the sporting goods industry.",
        },
        {
          name: "Emily Johnson",
          role: "Manager",
          imageUrl: "https://i.ibb.co/N2wQLFh/cricket-ball-2.png",
          description:
            "Experienced manager with a strong track record in leading teams to success and achieving project goals.",
        },
        {
          name: "Michael Brown",
          role: "Web Developer",
          imageUrl: "https://i.ibb.co/N2wQLFh/cricket-ball-2.png",
          description:
            "Skilled web developer proficient in creating dynamic and user-friendly web applications.",
        },
        {
          name: "Jessica Davis",
          role: "Graphics Designer",
          imageUrl: "https://i.ibb.co/N2wQLFh/cricket-ball-2.png",
          description:
            "Talented graphics designer with a flair for creating visually appealing and effective designs.",
        },
        {
          name: "Jessica Davis",
          role: "Graphics Designer",
          imageUrl: "https://i.ibb.co/N2wQLFh/cricket-ball-2.png",
          description:
            "Talented graphics designer with a flair for creating visually appealing and effective designs.",
        },
        {
            name: "Michael Brown",
            role: "Web Developer",
            imageUrl: "https://i.ibb.co/N2wQLFh/cricket-ball-2.png",
            description:
              "Skilled web developer proficient in creating dynamic and user-friendly web applications.",
          },
      ];

      const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      import('swiper').then(({ Swiper }) => {
        Swiper.use([Navigation]);
      });
    }
  }, []);
      
    return (
        <div className="mt-20">
            <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-3xl font-bold text-neutral-60">
            Our {" "}
          <span className="text-primary-50">Awesome Team</span>
        </h1>

        <CarouselButton prevRef={prevRef} nextRef={nextRef} />
            </div>

            <hr className="border border-gray-100 mt-6"/>

            <div className="flex mt-6">
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
              slidesPerView: 3,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation;
            if (navigation && typeof navigation !== 'boolean') {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
          spaceBetween={20}
          modules={[Pagination, Navigation]}
          className="carousel"
        >
          {teamProfiles.map((profile, index) => (
            <SwiperSlide key={index}>
              <TeamCard
                img={profile.imageUrl}
                name={profile.name}
                role={profile.role}
                description={profile.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        </div>
    );
};

export default OurTeam;