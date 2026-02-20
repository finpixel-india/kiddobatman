"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

export default function HudOverlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    // Only Slide 1 at the very beginning (Fully visible at start, fades out quickly)
    const slide1Opacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]);
    const slide1Y = useTransform(scrollYProgress, [0, 0.03], [0, -50]);

    // Then no text until the frames end!

    return (
        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center p-8 overflow-hidden">
            {/* SLIDE 1 */}
            <motion.div
                style={{ opacity: slide1Opacity, y: slide1Y }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mix-blend-difference z-30"
            >
                <h1 className="text-5xl md:text-8xl font-black text-white tracking-wider animate-bounce-slow drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                    Hey Batman,
                </h1>
                <p className="mt-6 text-3xl md:text-5xl text-brand-skyblue font-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] max-w-3xl">
                    Scroll to see magic! ✨
                </p>
            </motion.div>
        </div>
    );
}
