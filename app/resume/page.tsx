"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { ResumeViewer } from "@/components/ResumeViewer";
import { HeroBackground } from "@/components/AnimatedBackground";

export default function ResumePage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-[#0a0e1a] dark:via-[#0c1222] dark:to-[#0b1120]">
      <HeroBackground />
      <DarkModeToggle />

      <div className="container relative mx-auto px-4 py-8 md:py-12">
        {/* Back navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Button variant="ghost" size="sm" asChild>
            <a href="/" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </a>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 gradient-text-animate">
              Resume
            </span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            My professional resume — view inline or download a copy
          </p>
        </motion.div>

        {/* Resume viewer */}
        <div className="max-w-5xl mx-auto">
          <ResumeViewer />
        </div>
      </div>
    </main>
  );
}
