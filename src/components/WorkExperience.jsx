import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "Cognizant, Mumbai",
    date: "Sep 2016 - July 2020",
    role: "Experience Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    color: "bg-orange-500",
  },
  {
    id: 2,
    company: "Sugee Pvt Limited, Mumbai",
    date: "Sep 2020 - July 2023",
    role: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    color: "bg-gray-800",
  },
  {
    id: 3,
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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            My <span className="text-orange-500">Work Experience</span>
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row md:justify-between gap-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block w-[2px] h-full bg-gray-300"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Left side - Company info */}
              <div className="md:w-1/2 text-right md:pr-8">
                <h3 className="text-xl font-semibold text-gray-900">{exp.company}</h3>
                <p className="text-gray-500">{exp.date}</p>
              </div>

              {/* Middle Timeline Dot */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full border-4 border-dashed border-gray-400 ${exp.color}`}
                ></div>
                {index !== experiences.length - 1 && (
                  <div className="h-20 w-[2px] bg-gray-300"></div>
                )}
              </div>

              {/* Right side - Role info */}
              <div className="md:w-1/2 text-left md:pl-8">
                <h4 className="text-xl font-semibold text-gray-900">{exp.role}</h4>
                <p className="text-gray-500 text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
