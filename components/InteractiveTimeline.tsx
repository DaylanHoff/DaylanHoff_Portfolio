"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  ChevronDown,
  Rocket,
  Users,
  Star,
} from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  startYear: number;
  location?: string;
  description: string;
  technologies: string[];
  achievements: string[];
  leadership?: string[];
  highlights?: string[];
}

interface InteractiveTimelineProps {
  experiences: Experience[];
}

function TimelineCard({
  exp,
  index,
  isExpanded,
  onToggle,
}: {
  exp: Experience;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const isEducation = exp.company === "Neumont College";
  const isLeft = index % 2 === 0;

  const accentColor = isEducation
    ? "from-amber-500 to-orange-500"
    : index === 0
    ? "from-blue-600 to-purple-600"
    : "from-cyan-500 to-blue-500";

  const accentBorder = isEducation
    ? "border-amber-500/30 hover:border-amber-500/60"
    : index === 0
    ? "border-blue-500/30 hover:border-blue-500/60"
    : "border-cyan-500/30 hover:border-cyan-500/60";

  const glowColor = isEducation
    ? "shadow-amber-500/10 hover:shadow-amber-500/20"
    : index === 0
    ? "shadow-blue-500/10 hover:shadow-blue-500/20"
    : "shadow-cyan-500/10 hover:shadow-cyan-500/20";

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-6">
      {/* Left side content (or spacer) */}
      <div className={`hidden md:block ${isLeft ? "" : "order-1 md:order-none"}`}>
        {isLeft ? (
          <CardContent
            exp={exp}
            accentColor={accentColor}
            accentBorder={accentBorder}
            glowColor={glowColor}
            isEducation={isEducation}
            isExpanded={isExpanded}
            onToggle={onToggle}
            index={index}
            side="left"
          />
        ) : (
          <div />
        )}
      </div>

      {/* Center timeline node */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0.4, delay: 0.1 }}
          className="relative z-10"
        >
          <div
            className={`w-11 h-11 rounded-full bg-gradient-to-br ${accentColor} flex items-center justify-center shadow-lg ring-4 ring-background`}
          >
            {isEducation ? (
              <GraduationCap className="w-5 h-5 text-white" />
            ) : (
              <Briefcase className="w-5 h-5 text-white" />
            )}
          </div>
          {/* Pulse ring on current role */}
          {index === 0 && (
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${accentColor} animate-ping opacity-20`}
            />
          )}
        </motion.div>
        <div className="w-0.5 flex-1 bg-gradient-to-b from-border to-transparent min-h-[20px]" />
      </div>

      {/* Right side content (or spacer) */}
      <div className="hidden md:block">
        {isLeft ? (
          <div />
        ) : (
          <CardContent
            exp={exp}
            accentColor={accentColor}
            accentBorder={accentBorder}
            glowColor={glowColor}
            isEducation={isEducation}
            isExpanded={isExpanded}
            onToggle={onToggle}
            index={index}
            side="right"
          />
        )}
      </div>

      {/* Mobile: card with timeline node on left */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <div
              className={`w-9 h-9 rounded-full bg-gradient-to-br ${accentColor} flex items-center justify-center shadow-lg ring-3 ring-background`}
            >
              {isEducation ? (
                <GraduationCap className="w-4 h-4 text-white" />
              ) : (
                <Briefcase className="w-4 h-4 text-white" />
              )}
            </div>
          </motion.div>
          <div className="w-0.5 flex-1 bg-gradient-to-b from-border to-transparent" />
        </div>
        <div className="flex-1 pb-4">
          <CardContent
            exp={exp}
            accentColor={accentColor}
            accentBorder={accentBorder}
            glowColor={glowColor}
            isEducation={isEducation}
            isExpanded={isExpanded}
            onToggle={onToggle}
            index={index}
            side="right"
          />
        </div>
      </div>
    </div>
  );
}

function CardContent({
  exp,
  accentColor,
  accentBorder,
  glowColor,
  isEducation,
  isExpanded,
  onToggle,
  index,
  side,
}: {
  exp: Experience;
  accentColor: string;
  accentBorder: string;
  glowColor: string;
  isEducation: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
  side: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <div
        onClick={onToggle}
        className={`group cursor-pointer rounded-xl border-2 ${accentBorder} bg-card shadow-lg ${glowColor} transition-all duration-300 overflow-hidden`}
      >
        {/* Gradient accent bar */}
        <div className={`h-1 bg-gradient-to-r ${accentColor}`} />

        <div className="p-4 md:p-5">
          {/* Header row */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center flex-wrap gap-2 mb-1">
                <h3 className="text-base md:text-lg font-bold group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white bg-gradient-to-r ${accentColor}`}
                >
                  {exp.period}
                  {exp.period.includes("Present") && (
                    <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="font-medium">{exp.company}</span>
                {exp.location && (
                  <>
                    <span className="text-border">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </>
                )}
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-1 flex-shrink-0"
            >
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </div>

          {/* Tech badges — always visible */}
          <div className="flex flex-wrap gap-1 mb-1">
            {exp.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-[10px] px-2 py-0">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Expandable: description + detail sections */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-3 space-y-4 border-t mt-2">
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <DetailSection
                    icon={Rocket}
                    title={isEducation ? "Highlights" : "Key Achievements"}
                    items={exp.achievements}
                    color="text-blue-500"
                    delay={0}
                  />
                  {exp.leadership && exp.leadership.length > 0 && (
                    <DetailSection
                      icon={Users}
                      title="Leadership"
                      items={exp.leadership}
                      color="text-purple-500"
                      delay={0.1}
                    />
                  )}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <DetailSection
                      icon={Star}
                      title="Highlights"
                      items={exp.highlights}
                      color="text-amber-500"
                      delay={0.2}
                    />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function DetailSection({
  icon: Icon,
  title,
  items,
  color,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <Icon className={`w-3.5 h-3.5 ${color}`} />
        <h4 className="text-xs font-semibold">{title}</h4>
      </div>
      <div className="space-y-1 ml-5">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + i * 0.05 }}
            className="flex items-start gap-2 py-1.5 px-2 rounded-md bg-muted/50 hover:bg-muted transition-colors"
          >
            <span className={`mt-0.5 text-[10px] ${color}`}>▸</span>
            <span className="text-xs leading-relaxed flex-1">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function InteractiveTimeline({ experiences }: InteractiveTimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  return (
    <div className="relative">
      {/* Glowing vertical line (desktop) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5">
        <div className="w-full h-full bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500"
          animate={{ y: [0, 100, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Timeline entries */}
      <div className="space-y-1 md:space-y-2">
        {experiences.map((exp, index) => (
          <TimelineCard
            key={`${exp.company}-${exp.role}`}
            exp={exp}
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
          />
        ))}
      </div>

      {/* Bottom cap */}
      <motion.div
        className="flex justify-center mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="px-4 py-2 rounded-full bg-muted text-xs font-medium text-muted-foreground">
          Career journey starts here · {experiences[experiences.length - 1]?.startYear}
        </div>
      </motion.div>
    </div>
  );
}
