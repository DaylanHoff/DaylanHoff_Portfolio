"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface BlobProps {
  className?: string;
  delay?: number;
  duration?: number;
  x?: string;
  y?: string;
  size?: string;
}

function Blob({ className = "", delay = 0, duration = 20, x = "0%", y = "0%", size = "600px" }: BlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 dark:opacity-[0.08] ${className}`}
      style={{ width: size, height: size, left: x, top: y }}
      animate={{
        x: [0, 30, -20, 15, 0],
        y: [0, -25, 15, -10, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Blob className="bg-blue-400 dark:bg-blue-500" x="-10%" y="-20%" size="700px" delay={0} duration={25} />
      <Blob className="bg-purple-400 dark:bg-purple-500" x="60%" y="10%" size="500px" delay={2} duration={22} />
      <Blob className="bg-cyan-300 dark:bg-cyan-500" x="30%" y="60%" size="400px" delay={4} duration={28} />
      {/* Grid pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-500/40 dark:bg-blue-400/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        />
      ))}
    </div>
  );
}

export function SectionBackground({ variant = "blue" }: { variant?: "blue" | "purple" | "green" }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Blobs shift horizontally as the section scrolls into view
  const blob1X = useTransform(scrollYProgress, [0, 1], ["70%", "55%"]);
  const blob2X = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["50%", "35%"]);
  const patternY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  const colors = {
    blue: { blob1: "bg-blue-200 dark:bg-blue-600", blob2: "bg-cyan-200 dark:bg-cyan-600" },
    purple: { blob1: "bg-purple-200 dark:bg-purple-600", blob2: "bg-pink-200 dark:bg-pink-600" },
    green: { blob1: "bg-emerald-200 dark:bg-emerald-600", blob2: "bg-teal-200 dark:bg-teal-600" },
  };

  const c = colors[variant];

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className={`absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20 dark:opacity-[0.07] ${c.blob1}`}
        style={{ left: blob1X, top: blob1Y }}
      />
      <motion.div
        className={`absolute w-[350px] h-[350px] rounded-full blur-3xl opacity-20 dark:opacity-[0.07] ${c.blob2}`}
        style={{ left: blob2X, top: blob2Y }}
      />
      {/* Dot pattern with parallax */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ y: patternY }}
      >
        <defs>
          <pattern id={`dots-${variant}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="120%" fill={`url(#dots-${variant})`} />
      </motion.svg>
    </div>
  );
}
