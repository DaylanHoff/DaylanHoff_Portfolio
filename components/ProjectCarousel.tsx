"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image?: string;
  link: string;
  imageScale?: number;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 1 },
      "(min-width: 768px)": { slidesToScroll: 1 },
    },
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Scroll hint indicators */}
      <div className="flex items-center justify-center gap-2 mb-4 text-sm text-muted-foreground">
        <ChevronLeft className="w-4 h-4 animate-pulse" />
        <span>Swipe or use arrows to see more</span>
        <ChevronRight className="w-4 h-4 animate-pulse" />
      </div>

      <div className="relative group">
        {/* Previous button */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={`absolute left-1 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border rounded-full p-2 shadow-lg transition-all duration-200 md:-translate-x-1/2 ${
            canScrollPrev
              ? "opacity-100 hover:bg-primary hover:text-primary-foreground cursor-pointer"
              : "opacity-30 cursor-not-allowed"
          }`}
          aria-label="Previous projects"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Carousel viewport */}
        <div className="overflow-hidden mx-8 md:mx-12" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-[280px] sm:w-[300px] md:w-[calc(33.333%-16px)]"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full hover:shadow-lg transition-all md:hover:scale-105 cursor-pointer active:scale-95">
                    <CardContent className="pt-5 md:pt-6 pb-5 md:pb-6 text-center space-y-3 md:space-y-4">
                      <div className="mx-auto w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain"
                            style={
                              project.imageScale
                                ? { transform: `scale(${project.imageScale})` }
                                : undefined
                            }
                          />
                        ) : (
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-2xl">🎮</span>
                          </div>
                        )}
                      </div>
                      <h3 className="font-semibold text-base md:text-lg">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground line-clamp-3">
                        {project.description}
                      </p>
                      <p className="text-[10px] md:text-xs text-primary font-medium truncate">
                        {project.link}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`absolute right-1 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border rounded-full p-2 shadow-lg transition-all duration-200 md:translate-x-1/2 ${
            canScrollNext
              ? "opacity-100 hover:bg-primary hover:text-primary-foreground cursor-pointer"
              : "opacity-30 cursor-not-allowed"
          }`}
          aria-label="Next projects"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === selectedIndex
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
