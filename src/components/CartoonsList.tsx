"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cartoons = [
    { id: 1, title: "Batman Adventures", desc: "Watch the Dark Knight solve mysteries in Gotham!", image: "/images/batman.png" },
    { id: 2, title: "Superman: High Speed", desc: "Join the Man of Steel in the skies of Metropolis.", image: "/images/superman.png" },
    { id: 3, title: "Flash Forward", desc: "Run alongside the fastest man alive.", image: "/images/flash.png" },
];

export default function CartoonsList() {
    return (
        <section className="py-24 px-8 bg-brand-pink relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce-slow">🌟</div>
            <div className="absolute bottom-20 right-10 text-8xl opacity-20 animate-wiggle">🎈</div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white drop-shadow-md mb-6">
                        Awesome Cartoons! 📺
                    </h2>
                    <p className="text-2xl text-brand-dark font-bold max-w-2xl mx-auto bg-white/50 py-2 px-6 rounded-full inline-block backdrop-blur-sm">
                        Pick a show and start watching the fun!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cartoons.map((cartoon, index) => (
                        <motion.div
                            key={cartoon.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -15, scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                            className="bg-white rounded-3xl p-8 shadow-[0_10px_0_0_rgba(135,206,235,1)] hover:shadow-[0_20px_0_0_rgba(135,206,235,1)] border-4 border-brand-skyblue cursor-pointer transition-all duration-300 group flex flex-col"
                        >
                            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden shadow-inner bg-brand-skyblue/20 group-hover:bg-brand-pink/20 transition-colors">
                                {cartoon.image ? (
                                    <Image
                                        src={cartoon.image}
                                        alt={cartoon.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-7xl font-bold text-gray-400">?</div>
                                )}
                            </div>
                            <h3 className="text-3xl font-extrabold text-brand-dark mb-4 text-center group-hover:text-brand-pink transition-colors">
                                {cartoon.title}
                            </h3>
                            <p className="text-lg text-gray-600 font-bold text-center leading-relaxed flex-grow">
                                {cartoon.desc}
                            </p>

                            <div className="mt-8 flex justify-center">
                                <button className="bg-brand-skyblue text-white font-black px-8 py-3 rounded-full uppercase tracking-wider text-sm shadow-md group-hover:bg-brand-pink transition-colors">
                                    Play Now 🍿
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
