"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, FolderOpen, Server, Shield, Briefcase, FileText, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { id: "hero", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "architecture", label: "Architecture", icon: Server },
  { id: "privacy", label: "Privacy", icon: Shield },
  { id: "journey", label: "Journey", icon: Briefcase },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [visible, setVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);

      // Find which section is currently in view
      const sections = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: Math.abs(rect.top) };
      });

      const closest = sections.reduce((prev, curr) =>
        curr.top < prev.top ? curr : prev
      );
      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]"
        >
          <div className="flex items-center gap-0 sm:gap-0.5 px-1 sm:px-2 py-1.5 sm:py-2 rounded-full bg-background/70 dark:bg-background/60 backdrop-blur-xl border border-border/50 shadow-lg shadow-black/5 dark:shadow-black/20">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10 hidden lg:inline">{item.label}</span>
                </button>
              );
            })}
            {/* Separator + Resume link (hidden until lg — accessible from hero CTA on smaller screens) */}
            <div className="hidden lg:block w-px h-5 bg-border/50 mx-1" />
            <a
              href="/resume"
              className="hidden lg:flex relative items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="View Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
            {/* Theme toggle */}
            <div className="w-px h-5 bg-border/50 mx-0.5 sm:mx-1" />
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="relative flex items-center px-1.5 sm:px-2 py-1.5 rounded-full text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              <Sun className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
