import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";

const portfolioData = [
  {
    id: 1,
    image: "/images/project1.png",
    title: "Lirante Project 1",
  },
  {
    id: 2,
    image: "/images/project2.png",
    title: "Lirante Project 2",
  },
  {
    id: 3,
    image: "/images/project3.png",
    title: "Lirante Project 3",
  },
];

const PortfolioSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-20 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#1f1f1f] leading-snug"
        >
          Lets have a look at <br />
          my <span className="text-[#ff7a00]">Portfolio</span>
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-4 md:mt-0 bg-[#ff7a00] text-white px-6 py-2 rounded-full font-semibold shadow-md"
        >
          See All
        </motion.button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {portfolioData.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/80 w-10 h-10 flex items-center justify-center rounded-full border border-[#ff7a00]">
                <ArrowRight className="text-[#ff7a00]" />
              </div>
              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl font-bold text-white drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PortfolioSection;
