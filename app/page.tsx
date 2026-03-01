"use client";

import { Github, Linkedin, Youtube, FileText, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AWSArchitecture } from "@/components/AWSArchitecture";
import { PrivacyArchitecture } from "@/components/PrivacyArchitecture";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { FloatingNav } from "@/components/FloatingNav";
import { ScrollParallaxBackground } from "@/components/ScrollParallaxBackground";
import { HeroBackground, SectionBackground } from "@/components/AnimatedBackground";
import { WaveDivider } from "@/components/WaveDivider";
import { experience, passionProjects } from "@/lib/data";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <ScrollParallaxBackground />
      <DarkModeToggle />
      <FloatingNav />

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-blue-50/80 to-background dark:from-[#0a0e1a] dark:via-[#0c1222] dark:to-background py-20 md:py-0" aria-label="Hero section">
        <HeroBackground />

        {/* Central glow behind name */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-cyan-500/10 blur-[100px]" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Name — dominant element */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-3 md:mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 gradient-text-animate hero-name-glow">
                Daylan Hoff
              </span>
            </motion.h1>

            {/* Role line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm sm:text-base md:text-xl font-medium text-foreground/80 tracking-wide mb-4 md:mb-6"
            >
              Senior DevOps Engineer &middot; Cloud Architect &middot; Privacy Advocate
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mb-6 md:mb-8 px-2"
            >
              Designing scalable AWS architectures, leading zero-downtime deployments,
              and building privacy-first software.
            </motion.p>

            {/* Stat highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-10 w-full sm:w-auto"
            >
              {[
                { value: "$10M+", label: "Cost Savings" },
                { value: "500+", label: "Apps Managed" },
                { value: "0", label: "Downtime (2yr)" },
                { value: "5+", label: "Years Exp." },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center px-3 py-2 md:px-4 md:py-2.5 rounded-xl bg-background/60 dark:bg-background/40 backdrop-blur-md border border-border/40 min-w-0 sm:min-w-[90px]"
                >
                  <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-600">
                    {value}
                  </span>
                  <span className="text-[10px] md:text-xs text-muted-foreground font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-col sm:flex-row items-center gap-3 mb-8"
            >
              <Button size="lg" className="shine-effect px-8" asChild>
                <a href="/resume">
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <a href="#projects">
                  Explore Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center gap-2"
            >
              {[
                { href: "https://www.linkedin.com/in/DaylanHoff/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/DaylanHoff", icon: Github, label: "GitHub" },
                { href: "https://www.youtube.com/channel/UCi-cpZ_fAX4-QqADvUm3nxg", icon: Youtube, label: "YouTube" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-full border border-border/40 bg-background/40 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:scale-110 transition-all duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#projects"
          className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs md:text-sm text-muted-foreground/60 tracking-widest uppercase font-medium group-hover:text-muted-foreground transition-colors">Scroll</span>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary/50 flex items-center justify-center transition-colors">
            <ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground/50 group-hover:text-primary/70 transition-colors" />
          </div>
        </motion.a>
      </section>

      {/* Passion Projects */}
      <section id="projects" className="relative py-12 md:py-16 lg:py-20 bg-background dark:bg-transparent" aria-labelledby="passion-projects-heading">
        <SectionBackground variant="purple" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 id="passion-projects-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Passion Projects</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                All of my projects share a common foundation: <span className="font-semibold text-foreground">privacy-first design</span>. 
                I believe technology should empower users while respecting their fundamental right to privacy.
              </p>
            </motion.div>
            <ProjectCarousel projects={passionProjects} />
            
            {/* GitHub link */}
            <div className="mt-8 md:mt-12 text-center">
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                I have many more projects to explore!
              </p>
              <Button variant="outline" size="lg" className="shine-effect" asChild>
                <a href="https://github.com/DaylanHoff" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View All Projects on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider className="bg-transparent dark:bg-transparent" fillClass="fill-background dark:fill-[#0b1120]" />

      {/* AWS Architecture Diagram */}
      <section id="architecture" className="relative py-12 md:py-16 lg:py-20 bg-background dark:bg-[#0b1120]/80" aria-labelledby="hosting-heading">
        <SectionBackground variant="blue" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="hosting-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">How This Site&apos;s Hosted</h2>
              <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-2">
                Automated deployment pipelines using AWS S3, CloudFront, and GitHub Actions
              </p>
            </motion.div>
            <AWSArchitecture />
          </div>
        </div>
      </section>

      <WaveDivider variant="curve" className="bg-transparent dark:bg-transparent" fillClass="fill-muted/50 dark:fill-[#0d1424]" />

      {/* Privacy Architecture */}
      <section id="privacy" className="relative py-12 md:py-16 lg:py-20 bg-muted/50 dark:bg-[#0d1424]/80" aria-labelledby="privacy-heading">
        <SectionBackground variant="green" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="privacy-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">Privacy-First Engineering</h2>
              <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-2">
                Building secure applications with C#, .NET, and privacy-by-design principles
              </p>
            </motion.div>
            <PrivacyArchitecture />
          </div>
        </div>
      </section>

      <WaveDivider variant="slant" className="bg-transparent dark:bg-transparent" fillClass="fill-background dark:fill-[#0a0f1d]" />

      {/* Interactive Timeline */}
      <section id="journey" className="relative py-12 md:py-16 lg:py-20 bg-background dark:bg-[#0a0f1d]/80" aria-labelledby="journey-heading">
        <SectionBackground variant="purple" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="journey-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">Professional Journey</h2>
              <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-12 px-2">
                Click on any milestone to explore my career path and education
              </p>
            </motion.div>
            <InteractiveTimeline experiences={experience} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 md:py-12 border-t border-border/30 bg-gradient-to-b from-background to-muted/30 dark:from-[#090d19] dark:to-[#0b1120]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center gap-3">
              {[
                { href: "https://www.linkedin.com/in/DaylanHoff/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/DaylanHoff", icon: Github, label: "GitHub" },
                { href: "https://www.youtube.com/channel/UCi-cpZ_fAX4-QqADvUm3nxg", icon: Youtube, label: "YouTube" },
              ].map(({ href, icon: Icon, label }) => (
                <Button key={label} variant="outline" size="icon" className="shine-effect" asChild>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Daylan Hoff. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
