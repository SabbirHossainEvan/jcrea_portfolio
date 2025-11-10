import React from "react";
import { motion } from "framer-motion";

export default function HireMeSection() {
  const stats = [
    { id: 1, number: "450+", label: "Project Completed" },
    { id: 2, number: "450+", label: "Project Completed" },
  ];

  return (
    <section className="w-full bg-gray-100 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
      {/* Left Image Side */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center items-center"
      >
        <div className="w-64 h-80 md:w-80 md:h-[380px] bg-orange-300 rounded-3xl absolute"></div>
        <img
          src="/images/hireme.png" // replace with your image
          alt="Hire Me"
          className="w-64 md:w-80 relative z-10 object-cover"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Why <span className="text-orange-500">Hire me?</span>
        </h2>
        <p className="text-gray-600 max-w-md mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
          posuere in justo vulputate, bibendum sodales.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {stats.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * item.id }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {item.number}
              </h3>
              <p className="text-gray-500 text-sm md:text-base">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border border-gray-700 rounded-xl text-gray-800 font-semibold text-lg shadow-sm"
        >
          Hire me
        </motion.button>
      </motion.div>
    </section>
  );
}
