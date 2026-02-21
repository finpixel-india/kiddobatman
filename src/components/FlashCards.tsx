"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
    { id: 1, front: "Who is the Dark Knight? 🦇", back: "Batman! The protector of Gotham.", color: "bg-gray-800" },
    { id: 2, front: "Who is the Man of Steel? 🦸‍♂️", back: "Superman! The hero from Krypton.", color: "bg-blue-600" },
    { id: 3, front: "Who is the Fastest Man Alive? ⚡", back: "The Flash! Powered by the Speed Force.", color: "bg-red-600" },
    { id: 4, front: "Who is the Amazon Princess? 🛡️", back: "Wonder Woman! Warrior of Peace.", color: "bg-yellow-500" },
    { id: 5, front: "Who is the Clown Prince of Crime? 🃏", back: "The Joker! Batman's greatest foe.", color: "bg-purple-600" },
    { id: 6, front: "Who is the King of Atlantis? 🌊", back: "Aquaman! Ruler of the Seven Seas.", color: "bg-teal-500" },
    { id: 7, front: "Who is the Half-Man, Half-Machine? 🤖", back: "Cyborg! The tech-powered titan.", color: "bg-gray-500" },
    { id: 8, front: "Who is the Emerald Knight? 💍", back: "Green Lantern! Wielder of the power ring.", color: "bg-green-500" },
    { id: 9, front: "Who is the Boy Wonder? 🦸🏻‍♂️", back: "Robin! Batman's trusted sidekick.", color: "bg-red-500" },
    { id: 10, front: "Who shape-shifts into animals? 🐅", back: "Beast Boy! The green teen hero.", color: "bg-green-600" },
    { id: 11, front: "Who uses tricky umbrellas? 🐧", back: "The Penguin! Boss of the underworld.", color: "bg-purple-800" },
    { id: 12, front: "Who controls nature? 🌿", back: "Poison Ivy! Protects the plants.", color: "bg-green-700" },
    { id: 13, front: "Who asks the hardest puzzles? ❓", back: "The Riddler! Tests Batman's brain.", color: "bg-green-400" },
    { id: 14, front: "Who says SHAZAM? ⚡", back: "Shazam! A kid with godly powers.", color: "bg-red-500" },
    { id: 15, front: "Who has a sonic scream? 🦅", back: "Black Canary! Martial arts master.", color: "bg-blue-400" },
    { id: 16, front: "Who built the Batmobile? 🏎️", back: "Lucius Fox! The tech genius.", color: "bg-gray-900" },
];

export default function FlashCards() {
    const [flippedId, setFlippedId] = useState<number | null>(null);

    return (
        <section className="py-24 px-8 bg-brand-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "100px", amount: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-brand-skyblue-dark drop-shadow-sm mb-4">
                        Hero Flash Cards! ✨
                    </h2>
                    <p className="text-2xl text-brand-dark font-bold bg-brand-pink/20 inline-block py-2 px-6 rounded-full">
                        Hover over a card to reveal the secret hero fact!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 perspective-1000">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "100px", amount: 0 }}
                            transition={{ delay: index * 0.05, type: "spring", duration: 0.4 }}
                            className="relative w-full aspect-[4/3] group cursor-pointer"
                            style={{ perspective: "1000px" }}
                            onClick={() => setFlippedId(flippedId === card.id ? null : card.id)}
                        >
                            <div
                                className="w-full h-full relative transition-all duration-700 rounded-3xl"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Front of Card */}
                                <div
                                    className={`absolute inset-0 backface-hidden flex items-center justify-center rounded-3xl border-8 ${card.color === 'bg-gray-800' ? 'border-brand-skyblue' : 'border-white'} shadow-[0_15px_30px_rgba(0,0,0,0.15)] group-hover:[transform:rotateY(180deg)] transition-transform duration-700 ${card.color} p-6 ${flippedId === card.id ? '![transform:rotateY(180deg)]' : ''}`}
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    <span className="text-2xl md:text-3xl font-black text-white drop-shadow-md text-center">
                                        {card.front}
                                    </span>
                                </div>

                                {/* Back of Card */}
                                <div
                                    className={`absolute inset-0 backface-hidden flex items-center justify-center rounded-3xl border-8 border-brand-pink bg-white shadow-[0_15px_30px_rgba(0,0,0,0.15)] [transform:rotateY(-180deg)] group-hover:[transform:rotateY(0deg)] transition-transform duration-700 p-6 ${flippedId === card.id ? '![transform:rotateY(0deg)]' : ''}`}
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    <span className="text-xl md:text-2xl font-extrabold text-brand-dark text-center">
                                        {card.back}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
