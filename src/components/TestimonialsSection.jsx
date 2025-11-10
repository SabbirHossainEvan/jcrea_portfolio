import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jayesh Patil",
    title: "CEO, Lirante",
    rating: 5,
    image:
      "https://i.pravatar.cc/100?img=1", // You can replace this with your own image
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    id: 2,
    name: "Sarah Kim",
    title: "Product Manager, NovaTech",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=2",
    text: "Ut porta risus vel nisi cursus, non facilisis odio vulputate. Duis malesuada, erat eu facilisis tincidunt, libero velit pretium lorem.",
  },
  {
    id: 3,
    name: "David Lee",
    title: "Founder, MotionFlow",
    rating: 4.5,
    image: "https://i.pravatar.cc/100?img=3",
    text: "Aliquam erat volutpat. Sed in quam ac sapien bibendum tincidunt. Aenean sit amet mi nec odio ultricies imperdiet.",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative text-white py-16 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-3xl overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/black-linen.png')",
      }}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Testimonials That <br />
          <span className="text-orange-500">Speak to My Results</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
          interdum ligula a dignissim. Sed lobortis orci elementum egestas
          lobortis.
        </p>
      </div>

      {/* Slider */}
      <div className="relative flex justify-center items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-800/60 backdrop-blur-md border border-gray-700 shadow-md rounded-2xl p-8 max-w-3xl text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-14 h-14 rounded-full border-2 border-orange-500"
              />
              <div>
                <h4 className="font-semibold">{testimonials[index].name}</h4>
                <p className="text-sm text-gray-400">
                  {testimonials[index].title}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: Math.floor(testimonials[index].rating) }).map(
                (_, i) => (
                  <Star key={i} size={18} className="text-orange-400 fill-orange-400" />
                )
              )}
              {testimonials[index].rating % 1 !== 0 && (
                <Star size={18} className="text-orange-400 fill-orange-400 opacity-50" />
              )}
              <span className="ml-2 text-sm font-medium">
                {testimonials[index].rating.toFixed(1)}
              </span>
            </div>

            {/* Text */}
            <p className="text-gray-300 leading-relaxed relative">
              <Quote className="absolute top-[-10px] left-[-10px] opacity-20 text-6xl" />
              {testimonials[index].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-orange-500" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
