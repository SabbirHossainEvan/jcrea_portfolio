import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

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
  {
    id: 4,
    image: "/images/project4.png",
    title: "Lirante Project 4",
  },
];

const PortfolioSection = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % portfolioData.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + portfolioData.length) % portfolioData.length);

  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-20 bg-white overflow-hidden">
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

      <div className="relative w-full flex items-center justify-center">
        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-6 bg-white/80 hover:bg-[#ff7a00] hover:text-white text-[#ff7a00] border border-[#ff7a00] rounded-full w-10 h-10 flex items-center justify-center transition"
        >
          <ArrowLeft />
        </button>

        {/* Animated slide */}
        <div className="w-full max-w-3xl flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={portfolioData[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img
                src={portfolioData[index].image}
                alt={portfolioData[index].title}
                className="w-[700px] h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute top-3 right-3 bg-white/80 w-10 h-10 flex items-center justify-center rounded-full border border-[#ff7a00]">
                <ArrowRight className="text-[#ff7a00]" />
              </div>
              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl font-bold text-white drop-shadow-md">
                  {portfolioData[index].title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={portfolioData[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img
                src={portfolioData[index].image}
                alt={portfolioData[index].title}
                className="w-[700px] h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute top-3 right-3 bg-white/80 w-10 h-10 flex items-center justify-center rounded-full border border-[#ff7a00]">
                <ArrowRight className="text-[#ff7a00]" />
              </div>
              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl font-bold text-white drop-shadow-md">
                  {portfolioData[index].title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-6 bg-white/80 hover:bg-[#ff7a00] hover:text-white text-[#ff7a00] border border-[#ff7a00] rounded-full w-10 h-10 flex items-center justify-center transition"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-6 gap-2">
        {portfolioData.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-[#ff7a00]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
