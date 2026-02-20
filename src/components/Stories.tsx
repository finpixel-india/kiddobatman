"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
    {
        id: 1,
        title: "Batman's Night Out",
        time: "5 min read",
        bg: "bg-gray-100",
        border: "border-gray-800",
        content: "The city of Gotham was quiet, but Batman was always watching. Standing on a tall gargoyle, he used his high-tech binoculars to scan the streets. Suddenly, he heard a sound near the bank! He swooped down using his cape and found... the Joker trying to steal all the jellybeans! With a quick throw of a Batarang, he stopped the jellybean heist and the kids of Gotham were safe to enjoy their candy."
    },
    {
        id: 2,
        title: "Superman's Rescue",
        time: "8 min read",
        bg: "bg-blue-100",
        border: "border-blue-600",
        content: "Up in the sky, faster than a speeding bullet, it was Superman! Lois Lane dropped her favorite pen from a skyscraper, and it was falling fast. Superman heard the tiny whistle of the falling pen using his super-hearing. In a blink of an eye, he swooped down, caught the pen just an inch before it hit the ground, and flew right back up to return it to Lois. Another day saved by the Man of Steel!"
    },
    {
        id: 3,
        title: "The Great Flash Race",
        time: "4 min read",
        bg: "bg-red-100",
        border: "border-red-600",
        content: "Barry Allen was late for breakfast. But when you are The Flash, being late is easily fixed! He ran so fast that he circled the entire globe three times before his toast popped out of the toaster. He even had time to stop a bank robbery in Central City before pouring his orange juice. 'Fastest breakfast alive,' he joked, taking a big bite of his super-fast toast."
    },
    {
        id: 4,
        title: "Wonder Woman's Shield",
        time: "6 min read",
        bg: "bg-yellow-100",
        border: "border-yellow-500",
        content: "Deep in the jungle exploring an ancient temple, Wonder Woman encountered a giant boulder rolling towards a group of explorers. Without hesitation, she crossed her indestructible bracelets. 'CLANG!' The bracelets sparked as she deflected the giant boulder, saving the explorers. She smiled, picked up her Lasso of Truth, and continued her adventure."
    },
];

export default function Stories() {
    const [selectedStory, setSelectedStory] = useState<typeof stories[0] | null>(null);

    return (
        <section className="py-24 px-8 bg-brand-skyblue/20 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-12"
                >
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black text-brand-pink-dark drop-shadow-sm mb-4">
                            Heroic Stories 📚
                        </h2>
                        <p className="text-2xl text-brand-dark font-bold">
                            Read amazing adventures before going to sleep!
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedStory(story)}
                            className={`${story.bg} border-4 ${story.border} rounded-3xl p-8 flex flex-col sm:flex-row items-center cursor-pointer shadow-lg hover:shadow-xl transition-all`}
                        >
                            <div className="w-32 h-32 bg-white rounded-2xl border-4 border-dashed border-gray-300 flex-shrink-0 mb-6 sm:mb-0 sm:mr-8 flex items-center justify-center text-5xl">
                                📖
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-3xl font-extrabold text-brand-dark mb-2">
                                    {story.title}
                                </h3>
                                <p className="text-lg text-gray-600 font-bold mb-6">
                                    ⏱️ {story.time}
                                </p>
                                <span className="bg-white text-brand-dark border-2 border-brand-dark px-6 py-2 rounded-full font-black uppercase text-sm group-hover:bg-brand-dark group-hover:text-white transition-colors cursor-pointer inline-block">
                                    Read Book
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Story Reading Modal */}
            <AnimatePresence>
                {selectedStory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-sm"
                        onClick={() => setSelectedStory(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            onClick={(e) => e.stopPropagation()} // Prevent double clicks closing from inside
                            className="bg-white max-w-3xl w-full rounded-[3rem] p-10 md:p-16 border-8 border-brand-pink shadow-2xl relative overflow-y-auto max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedStory(null)}
                                className="absolute top-6 right-8 text-4xl text-gray-400 hover:text-brand-pink transition-colors font-black"
                                title="Close"
                            >
                                ×
                            </button>

                            <div className="text-center mb-10">
                                <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">
                                    {selectedStory.title}
                                </h2>
                                <div className="inline-block bg-brand-skyblue/20 text-brand-skyblue-dark font-bold px-4 py-2 rounded-full">
                                    ⏱️ {selectedStory.time}
                                </div>
                            </div>

                            <div className="prose prose-xl max-w-none text-gray-700 font-medium leading-relaxed">
                                <p className="text-2xl drop-shadow-sm text-gray-800">
                                    {selectedStory.content}
                                </p>
                                <div className="mt-12 text-center text-5xl opacity-50">
                                    🌟 🦇 🌟
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
