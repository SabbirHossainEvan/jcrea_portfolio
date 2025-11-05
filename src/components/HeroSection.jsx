import React, { useEffect } from "react";
import {  motion } from "framer-motion";
import AOS from "aos";
import { ArrowUpRight } from "lucide-react";
import "aos/dist/aos.css";
import profileImage from "../assets/heroImage.png";

// const textVariant = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };


const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 20px rgba(255, 107, 53, 0.7)",
    transition: { type: "spring", stiffness: 300 },
  },
  tap: {
    scale: 0.95,
  },
};

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // const headingWords = ["I’m", "Jenny,", "Product", "Designer"];

  return (
    <section className=" mt-30">
      <div>
        {/* top info */}
        <div>
          {/* Greeting */}
          <button className="block mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="items-center gap-2 px-4 py-1 border border-gray-300 rounded-full text-sm text-gray-700"
            >
              Hello!
            </motion.div>
          </button>

          {/* Animated Heading */}
          <h1 className="text-4xl md:text-7xl text-center font-semibold mt-6">
            {/* {headingWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={textVariant}
                initial="hidden"
                animate="visible"
                className={word.includes("Jenny") ? "text-orange-500" : "" }
              >
                {word}
              </motion.span>
            ))} */}

            <span>I’m</span>
            <span className="text-primary">Jenny</span>, <br />
            <span>Product Designer</span>

          </h1>
        </div>
        {/* chanter info */}
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 mt-20 font-bold">
            {/* Testimonial */}
            <motion.p

              className="text-gray-600 text-base max-w-md mx-auto md:mx-0 leading-relaxed"
            >
              “Jenny’s exceptional product design ensures our website’s success.
              Highly recommended.”
            </motion.p>
          </div>
          <div className="col-span-6">
            {/* Profile Image */}
            <motion.img
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              src={profileImage} // your transparent image
              alt="Jenny"
              className="w-64 md:w-full block mx-auto object-contain z-10 -mt-15"
            />
          </div>
          <div className="col-span-3 mt-20">
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className=""
            >
              <div className="text-orange-500 text-3xl mb-1">★★★★★</div>
              <p className="text-4xl font-bold text-gray-900">10 Years</p>
              <p className="text-sm text-gray-500 pl-15">Experience</p>
            </motion.div>
          </div>
        </div>
        {/* bottom info */}
        <div>
          <div id="hero_btn" className="flex flex-wrap gap-2 items-center justify-center">
            {/* Portfolio Button */}
            <motion.a
              href="#portfolio"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative overflow-hidden flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 opacity-0"
                whileHover={{ opacity: 0.4, scale: 1.3, rotate: 15 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Portfolio <ArrowUpRight size={18} />
              </span>
            </motion.a>

            {/* Hire Me Button */}
            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative border-2 border-orange-500 text-orange-500 font-semibold px-8 py-3 rounded-full overflow-hidden transition-all duration-300"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0"
                whileHover={{ opacity: 0.2, scale: 1.2 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10">Hire me</span>
            </motion.a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
