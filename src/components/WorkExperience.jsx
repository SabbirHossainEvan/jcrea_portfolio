import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Cognizant, Mumbai",
    date: "Sep 2016 - July 2020",
    role: "Experience Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    color: "bg-orange-500",
  },
  {
    company: "Sugee Pvt Limited, Mumbai",
    date: "Sep 2020 - July 2023",
    role: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    color: "bg-gray-900",
  },
  {
    company: "Cinetstox, Mumbai",
    date: "Sep 2023",
    role: "Lead UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    color: "bg-orange-500",
  },
];

const WorkExperience = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-18">
          <h2 className="text-4xl font-bold text-gray-900">
            My <span className="text-orange-500">Work Experience</span>
          </h2>
        </div>

        <div className="relative flex flex-col md:grid md:grid-cols-3 gap-12">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dashed border-gray-300"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="md:contents"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Left content */}
              <div className="bg-transparent md:col-start-1 md:col-end-2 md:mr-auto text-left md:text-right">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {exp.company}
                </h3>
                <p className="text-gray-500">{exp.date}</p>
              </div>

              {/* Center circle */}
              <div className="relative flex justify-center items-center md:col-start-2 md:col-end-3">
                <div className="absolute w-6 h-6 rounded-full border-4 border-dashed border-gray-400 flex justify-center items-center">
                  <div className={`w-3 h-3 rounded-full ${exp.color}`}></div>
                </div>
              </div>

              {/* Right content */}
              <div className="bg-transparent md:col-start-3 md:col-end-4 md:ml-auto text-left">
                <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                  {exp.role}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mt-1">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
