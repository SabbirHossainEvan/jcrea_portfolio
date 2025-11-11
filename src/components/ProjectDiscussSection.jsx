import React, { useState } from "react";
import { Star, Award, ShieldCheck, Mail } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function ProjectDiscussSection() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) return alert("Please enter your email!");
        alert(`Thanks! We'll contact you at ${email}`);
        setEmail("");
    };

    return (
        <section className="bg-white py-16 text-center relative overflow-hidden">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                Have an <span className="text-orange-500">Awesome Project</span> Idea?{" "}
                <br />
                <span className="text-orange-500">Let’s Discuss</span>
            </h2>

            {/* Email Form */}
            <form
                onSubmit={handleSubmit}
                className="mt-8 flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 shadow-sm rounded-full p-2 max-w-md mx-auto"
            >
                <div className="flex items-center gap-2 pl-3 w-full">
                    <Mail className="text-orange-500" size={18} />
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent outline-none text-sm flex-1"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full transition-all"
                >
                    Send
                </button>
            </form>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                    <Star size={16} className="text-orange-500 fill-orange-500" />
                    <span>4.9/5 Average Ratings</span>
                </div>
                <div className="flex items-center gap-2">
                    <Award size={16} className="text-orange-500" />
                    <span>25+ Winning Awards</span>
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-orange-500" />
                    <span>Certified Product Designer</span>
                </div>
            </div>

            {/* Animated Diagonal Marquee */}

            <div className=" mt-1">
                <div className="bg-orange-500 p-5 text-white font-semibold text-lg md:text-xl  shadow-[0_0_20px_rgba(255,100,0,0.3)] hover:shadow-[0_0_35px_rgba(255,100,0,0.5)] transition-all duration-1000">
                    <Marquee>
                        <div className="whitespace-nowrap animate-marquee  flex gap-12 hover:animate-marquee-hover">
                            <span className="animate-bounce-slow">✦ UX Design</span>
                            <span className="animate-bounce-slow delay-100">✦ App Design</span>
                            <span className="animate-bounce-slow delay-200">✦ Dashboard</span>
                            <span className="animate-bounce-slow delay-300">✦ Wireframe</span>
                            <span className="animate-bounce-slow delay-400">✦ User Research</span>
                            <span className="animate-bounce-slow delay-500">✦ Product Strategy</span>
                            <span className="animate-bounce-slow delay-600">✦ Branding</span>
                            <span className="animate-bounce-slow delay-700">✦ UI Animation</span>
                        </div>
                    </Marquee>
                </div>
            </div>


        </section>
    );
}
