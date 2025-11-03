import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  { id: 1, title: "UI / UX Design", img: "/images/uiux.png" },
  { id: 2, title: "Web Design", img: "/images/webdesign.png" },
  { id: 3, title: "Landing Page", img: "/images/landingpage.png" },
  { id: 4, title: "E-Commerce", img: "/images/ecommerce.png" },
  { id: 5, title: "App Interface", img: "/images/appdesign.png" },
  { id: 6, title: "Dashboard UI", img: "/images/dashboard.png" },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative bg-[#0b0b0b] text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Floating glowing blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -40, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Title */}
      <div className="relative z-10 text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold"
        >
          My <span className="text-orange-500">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 max-w-2xl mx-auto mt-4"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales.
        </motion.p>
      </div>

      {/* Carousel (3 visible cards) */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <Slider {...sliderSettings}>
          {services.map((service, i) => (
            <div key={service.id} className="px-4">
              <motion.div
                data-aos="fade-up"
                whileHover={{
                  scale: 1.05,
                  rotateX: 3,
                  rotateY: -3,
                  boxShadow: "0 15px 40px rgba(255,140,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 14 }}
                className="group relative bg-gradient-to-br from-[#1c1c1c] to-[#0e0e0e] rounded-3xl border border-gray-700 overflow-hidden hover:border-orange-400/40"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-t-3xl">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Title + Button */}
                <div className="p-6 flex justify-between items-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-lg md:text-xl font-semibold"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.button
                    whileHover={{
                      rotate: 45,
                      backgroundColor: "#fb923c",
                      boxShadow: "0 0 20px rgba(251,146,60,0.8)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="p-3 rounded-full bg-[#111827] border border-gray-600 text-white"
                  >
                    ↑
                  </motion.button>
                </div>

                {/* Glow overlay */}
                <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-orange-600/20 via-transparent to-transparent" />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServicesSection;
