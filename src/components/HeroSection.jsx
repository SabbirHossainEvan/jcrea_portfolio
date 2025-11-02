import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from "../assets/heroImage.png";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const headingWords = ["I’m", "Jenny,", "Product", "Designer"];

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white overflow-hidden min-h-screen">
      {/* LEFT SIDE */}
      <div className="flex-1 text-center md:text-left space-y-6 z-10" data-aos="fade-right">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1 border border-gray-300 rounded-full text-sm text-gray-700"
        >
          👋 Hello!
        </motion.div>

        {/* Animated Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight flex flex-wrap justify-center md:justify-start gap-2">
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className={word.includes("Jenny") ? "text-orange-500" : ""}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Testimonial */}
        <motion.p
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={headingWords.length + 1}
          className="text-gray-600 text-base max-w-md mx-auto md:mx-0 leading-relaxed"
        >
          “Jenny’s exceptional product design ensures our website’s success.
          Highly recommended.”
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={headingWords.length + 2}
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
        >
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-all"
          >
            Portfolio ↗
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-full hover:bg-gray-200 transition-all"
          >
            Hire me
          </motion.button>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        className="relative flex-1 flex justify-center items-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-left"
      >
        {/* Orange Circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="absolute bottom-0 w-80 h-80 md:w-[450px] md:h-[450px] bg-orange-200 rounded-full -z-10"
        ></motion.div>

        {/* Profile Image */}
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          src={profileImage} // your transparent image
          alt="Jenny"
          className="w-64 md:w-80 object-contain z-10"
        />

        {/* Experience Badge */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-6 right-6 md:right-14 bg-white shadow-md rounded-xl px-4 py-3 text-center"
        >
          <div className="text-orange-500 text-lg mb-1">★★★★★</div>
          <p className="text-xl font-bold text-gray-900">10 Years</p>
          <p className="text-sm text-gray-500">Experience</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
