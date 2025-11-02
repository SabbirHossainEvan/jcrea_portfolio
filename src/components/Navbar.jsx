import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = ["Home", "About", "Service", "Resume", "Project", "Contact"];

    useEffect(() => {
        AOS.init({ duration: 800, once: true });

        const handleScroll = () => {
            if (window.scrollY > 30) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            data-aos="fade-down"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-6 p-2 left-1/2 -translate-x-1/2 z-50 w-[95%] md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl md:rounded-full transition-all duration-300 ${scrolled
                ? "bg-[#151515]"
                : "bg-[#151515]"
                }`}
        >
            <div className="flex mx-auto items-center justify-between md:gap-8 text-white font-medium">
                {/* Logo for Mobile */}
                <div className="flex items-center md:hidden">
                    <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full font-bold"
                    >
                        JC
                    </motion.div>
                    <span className="ml-2 font-semibold tracking-widest text-white">
                        JCREA
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.slice(0, 3).map((item) => (
                        <motion.button
                            key={item}
                            onClick={() => setActive(item)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-10 py-4 rounded-full transition-all duration-300 ${active === item
                                ? "bg-orange-500 text-white"
                                : "hover:text-orange-400"
                                }`}
                        >
                            {item}
                        </motion.button>
                    ))}

                    <div className="flex justify-center ml-12 mr-12">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                            className="bg-orange-500 w-10 h-10 flex text-2xl items-center justify-center rounded-full font-bold"
                        >
                            JC
                        </motion.div>
                        <span className="font-semibold tracking-widest text-white text-2xl items-center pt-1">JCREA</span>
                    </div>
                    {/* Logo Center */}


                    {navItems.slice(3).map((item) => (
                        <motion.button
                            key={item}
                            onClick={() => setActive(item)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-10 py-4 rounded-full transition-all duration-300 ${active === item
                                ? "bg-orange-500 text-white"
                                : "hover:text-orange-400"
                                }`}
                        >
                            {item}
                        </motion.button>
                    ))}
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            //  Close Icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </svg>
                        ) : (
                            // ☰ Menu Icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="md:hidden mt-4 flex flex-col items-center gap-3  rounded-2xl py-4"
                    >
                        {navItems.map((item) => (
                            <motion.button
                                key={item}
                                onClick={() => {
                                    setActive(item);
                                    setIsOpen(false);
                                }}
                                whileHover={{ scale: 1.1 }}
                                className={`px-4 py-2 w-32 rounded-full transition-all duration-300 ${active === item
                                    ? "bg-orange-500 text-white"
                                    : "hover:text-orange-400"
                                    }`}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
