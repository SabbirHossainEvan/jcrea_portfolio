import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = [
  "Landing Page",
  "Product Design",
  "Animation",
  "Glassmorphism",
  "Cards",
];

const projects = [
  {
    id: 1,
    category: "Product Design",
    title: "Lirante - Food Delivery Solution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    id: 2,
    category: "Landing Page",
    title: "TechNova - SaaS Dashboard",
    description:
      "Beautiful landing page built with React and Tailwind. Designed for modern startups and SaaS products.",
  },
  {
    id: 3,
    category: "Animation",
    title: "MotionFlow - Interactive UI",
    description:
      "Dynamic animated interface with smooth transitions using Framer Motion.",
  },
];

export default function PortfolioSectionDown() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="px-6 md:px-12 py-12 max-w-6xl mx-auto text-center">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition ${
            activeCategory === "All"
              ? "bg-orange-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Section */}
      <div className="space-y-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-sm rounded-2xl p-8 transition hover:shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
              {project.title}
              <span className="bg-orange-500 text-white p-2 rounded-full">
                <ArrowUpRight size={20} />
              </span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
