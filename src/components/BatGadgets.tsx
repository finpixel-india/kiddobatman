"use client";

import { motion } from "framer-motion";

const gadgets = [
    { id: 1, name: "Batarang", emoji: "🦇", desc: "Boomerangs that never miss!", bg: "bg-gray-800 text-brand-skyblue" },
    { id: 2, name: "Bat-Grapple", emoji: "🪝", desc: "Swing from the tallest skyscrapers.", bg: "bg-blue-600 text-white" },
    { id: 3, name: "Smoke Pellets", emoji: "💨", desc: "Disappear into the shadows instantly.", bg: "bg-gray-500 text-white" },
    { id: 4, name: "Bat-Signal", emoji: "🦇💡", desc: "Light up the sky to call for help!", bg: "bg-yellow-400 text-gray-900" },
    { id: 5, name: "Utility Belt", emoji: "🥋", desc: "Holds every gadget you could ever need.", bg: "bg-yellow-600 text-white" },
    { id: 6, name: "Batmobile", emoji: "🏎️", desc: "The fastest, coolest car in Gotham!", bg: "bg-black text-brand-pink" },
];

export default function BatGadgets() {
    return (
        <section className="py-24 px-8 bg-brand-pink-dark relative overflow-hidden">
            {/* Decorative background blurbs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-pink rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-skyblue rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "100px", amount: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white drop-shadow-md mb-4">
                        Interactive Gadgets! 🧰
                    </h2>
                    <p className="text-2xl text-brand-dark font-bold bg-white/80 inline-block py-2 px-6 rounded-full backdrop-blur-sm">
                        Hover over the gadgets to see how they work!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gadgets.map((gadget, index) => (
                        <motion.div
                            key={gadget.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "100px", amount: 0 }}
                            transition={{ delay: index * 0.05, type: "spring", stiffness: 150 }}
                            whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5, y: -15 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${gadget.bg} rounded-3xl p-8 border-4 border-white cursor-pointer shadow-[0_15px_0_0_rgba(255,255,255,0.3)] hover:shadow-[0_25px_0_0_rgba(255,255,255,0.5)] transition-shadow duration-300 flex flex-col items-center text-center`}
                        >
                            <div className="text-8xl mb-6 bg-white/20 w-36 h-36 rounded-full flex items-center justify-center shadow-inner">
                                {gadget.emoji}
                            </div>
                            <h3 className="text-3xl font-black mb-3 drop-shadow-sm uppercase tracking-wide">
                                {gadget.name}
                            </h3>
                            <p className="text-lg font-bold opacity-90 leading-relaxed">
                                {gadget.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
