import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Example service data (You can load from JSON or API)
const services = [
  {
    id: 1,
    title: "UI/ UX Design",
    img: "/images/uiux.png",
  },
  {
    id: 2,
    title: "Web Design",
    img: "/images/webdesign.png",
  },
  {
    id: 3,
    title: "Landing Page",
    img: "/images/landingpage.png",
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative bg-[#0f0f0f] text-white py-16 px-6 md:px-12 overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-cover opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />

      {/* Section Title */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-orange-500">Services</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales.
        </p>
      </div>

      {/* Services grid */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            data-aos="zoom-in"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-gray-700 shadow-lg hover:shadow-orange-400/20"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.img
                src={service.img}
                alt={service.title}
                className="w-full rounded-t-3xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Text & Button */}
            <div className="p-6 flex justify-between items-center">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <motion.a
                href="#"
                whileHover={{ rotate: 45 }}
                className="bg-[#0f172a] text-white p-3 rounded-full border border-gray-600 hover:bg-orange-500 transition"
              >
                ↑
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Carousel dots (optional for slide animation) */}
      <div className="flex justify-center mt-8 gap-3">
        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
      </div>
    </section>
  );
};

export default ServicesSection;
