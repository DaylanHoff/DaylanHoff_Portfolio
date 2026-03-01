"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollParallaxBackground() {
  const { scrollYProgress } = useScroll();

  // Blobs shift position as user scrolls
  const blob1X = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["-5%", "60%"]);
  const blob2X = useTransform(scrollYProgress, [0, 1], ["70%", "40%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["10%", "80%"]);
  const blob3X = useTransform(scrollYProgress, [0, 1], ["40%", "80%"]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], ["60%", "20%"]);

  // Color rotation via hue-rotate
  const hueRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Subtle scale pulse
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.9]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 0.8, 1.15]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large gradient blobs that follow scroll */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-15 dark:opacity-[0.06] bg-blue-400 dark:bg-blue-500"
        style={{ x: blob1X, y: blob1Y, scale: scale1, filter: useTransform(hueRotate, (v) => `hue-rotate(${v}deg)`) }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 dark:opacity-[0.04] bg-purple-400 dark:bg-purple-500"
        style={{ x: blob2X, y: blob2Y, scale: scale2, filter: useTransform(hueRotate, (v) => `hue-rotate(${v + 30}deg)`) }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 dark:opacity-[0.04] bg-cyan-300 dark:bg-cyan-500"
        style={{ x: blob3X, y: blob3Y, filter: useTransform(hueRotate, (v) => `hue-rotate(${v + 60}deg)`) }}
      />

      {/* Scrolling grid pattern */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-[0.015] dark:opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]) }}
      >
        <defs>
          <pattern id="scroll-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="200%" fill="url(#scroll-grid)" />
      </motion.svg>
    </div>
  );
}
