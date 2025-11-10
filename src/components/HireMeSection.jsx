import React from "react";
import { motion } from "framer-motion";
import hireMeImage from "../assets/Frame 75.png";

export default function HireMeSection() {
    const stats = [
        { id: 1, number: 450, label: "Project Completed" },
        { id: 2, number: 450, label: "Project Completed" },
    ];

    return (
        <section className="w-full p-10 md:p-10 bg-gray-100 rounded-3xl grid grid-cols-12 items-center justify-between overflow-hidden">
            {/* Left Image Side */}
            <motion.div
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className=" block mx-auto col-span-12 md:col-span-5"
            >
                <img
                    src={hireMeImage}
                    alt="Hire Me"
                    className="w-85 md:w-105 relative z-10 object-cover"
                />
            </motion.div>

            {/* Right Content */}
            <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="col-span-12 md:col-span-7 mt-10 md:mt-0"
            >
                <h2 className="text-4xl text-center md:text-start md:text-5xl font-bold text-gray-800 ">
                    Why <span className="text-orange-500">Hire me?</span>
                </h2>
                <p className="text-gray-600 max-w-md mb-6 mt-7 text-center md:text-start md:mt-15">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
                    posuere in justo vulputate, bibendum sodales.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8 mt-10">
                    {stats.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 * item.id }}
                        >
                            <Counter number={item.number} />
                            <p className="text-gray-500 text-sm md:text-base">{item.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 block mx-auto md:flex md:mx-1  py-3 border border-gray-700 rounded-xl text-gray-800 font-semibold text-lg shadow-sm hover:bg-gray-800 hover:text-white transition"
                >
                    Hire me
                </motion.button>
            </motion.div>
        </section>
    );
}

// Counter Component with Animation
function Counter({ number }) {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let current = 0;

        const counter = setInterval(() => {
            current += 1; // increase 1 by 1
            if (current >= number) {
                clearInterval(counter);
                setCount(number);
            } else {
                setCount(current);
            }
        }, 10); // speed (10ms per step)

        return () => clearInterval(counter);
    }, [number]);

    return (
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{count}+</h3>
    );
}