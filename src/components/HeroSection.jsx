import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center min-h-screen bg-white overflow-hidden px-6 md:px-16 py-20">
      {/* Left Text Section */}
      <div
        className="flex-1 space-y-6 text-center md:text-left z-10"
        data-aos="fade-right"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1 border border-gray-300 rounded-full text-sm text-gray-600"
        >
          👋 Hello!
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          I’m <span className="text-orange-500">Jenny</span>,<br /> Product
          Designer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-600 max-w-md mx-auto md:mx-0"
        >
          “Jenny’s exceptional product design ensures our website’s success.
          Highly recommended.”
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
        >
          <a
            href="#portfolio"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            Portfolio ↗
          </a>
          <button className="px-6 py-3 bg-gray-100 font-medium text-gray-700 rounded-full hover:bg-gray-200 transition">
            Hire me
          </button>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-left"
        className="relative flex-1 mt-10 md:mt-0 flex justify-center items-center"
      >
        {/* Orange Circle Background */}
        <div className="absolute bottom-0 w-72 h-72 md:w-96 md:h-96 bg-orange-200 rounded-full -z-10"></div>

        {/* Profile Image */}
        <img
          src="/images/jenny.png"
          alt="Jenny"
          className="w-64 md:w-80 object-cover rounded-lg"
        />

        {/* Experience Badge */}
        <div className="absolute top-6 right-6 md:right-12 bg-white shadow-md rounded-lg px-4 py-2 text-center">
          <div className="flex justify-center text-orange-500 mb-1">
            {"★★★★★"}
          </div>
          <p className="text-lg font-bold text-gray-900">10 Years</p>
          <p className="text-sm text-gray-500">Experience</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
