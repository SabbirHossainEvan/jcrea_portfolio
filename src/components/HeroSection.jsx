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
      <div>
        {/* top info */}
        <div>
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
        </div>
        {/* bottom info */}
        <div className="grid grid-cols-3">
          <div>
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
          </div>
          <div>
            {/* Profile Image */}
            <motion.img
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              src={profileImage} // your transparent image
              alt="Jenny"
              className="w-64 md:w-80 object-contain z-10"
            />
          </div>
          <div>
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className=""
            >
              <div className="text-orange-500 text-lg mb-1">★★★★★</div>
              <p className="text-xl font-bold text-gray-900">10 Years</p>
              <p className="text-sm text-gray-500">Experience</p>
            </motion.div>
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
