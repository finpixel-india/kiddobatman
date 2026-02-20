"use client";

import { motion } from "framer-motion";

const facts = [
    "Batman was created by Bob Kane and Bill Finger in 1939!",
    "Gotham City is geographically located in New Jersey.",
    "Superman's 'S' symbol stands for 'Hope' on his home planet.",
    "The Flash can run fast enough to travel through time!",
    "Wonder Woman's Lasso of Truth forces anyone held by it to tell the truth.",
    "Batman keeps a giant mechanical T-Rex in the Batcave!",
];

export default function BatFacts() {
    return (
        <section className="py-20 bg-brand-dark overflow-hidden relative border-y-[16px] border-brand-pink">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgMEwxNSAxMEwzMCAwVjEwSDBWMHoiIGZpbGw9IiNGRkZGRkYiLz48L3N2Zz4=')]"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="bg-brand-skyblue text-brand-dark font-black text-4xl py-6 px-10 rounded-full flex-shrink-0 shadow-lg -rotate-3 md:z-20">
                    Fun Facts! 🦇
                </div>

                {/* Marquee Container */}
                <div className="w-full overflow-hidden bg-white/10 rounded-3xl p-6 backdrop-blur-sm border-2 border-white/20">
                    <motion.div
                        animate={{ x: [0, -2000] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                        className="flex gap-16 whitespace-nowrap"
                    >
                        {[...facts, ...facts].map((fact, index) => (
                            <span
                                key={index}
                                className="text-2xl md:text-3xl font-bold text-white tracking-wide flex items-center gap-4"
                            >
                                <span className="text-brand-pink text-4xl">★</span> {fact}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
