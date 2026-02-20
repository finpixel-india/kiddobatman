"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import HudOverlay from "@/components/HudOverlay";

const FRAME_COUNT = 232;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Load images on mount
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // ezgif-frame-001.jpg
      const frameNumber = i.toString().padStart(3, "0");
      img.src = `/images/frames/ezgif-frame-${frameNumber}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Framer motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map progress (0 to 1) to frame index (0 to 231)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw initial frame if we are at the top
    const initialFrame = images[0];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(initialFrame, 0, 0, canvas.width, canvas.height);

    // Subscribe to scroll changes
    const unsubscribe = frameIndex.on("change", (latest) => {
      const index = Math.round(latest);
      if (images[index]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
      }
    });

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const index = Math.round(frameIndex.get());
      if (images[index]) {
        ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [imagesLoaded, images, frameIndex]);

  return (
    <div ref={containerRef} className="h-[800vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-brand-pink">
        {/* Loader while images are caching */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white z-10 text-3xl font-black animate-pulse bg-brand-skyblue">
            Loading Magic... 🌟✨
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />

        {/* HUD Overlay layer inside the sticky container perfectly synced */}
        {imagesLoaded && <HudOverlay scrollYProgress={scrollYProgress} />}
      </div>
    </div>
  );
}
