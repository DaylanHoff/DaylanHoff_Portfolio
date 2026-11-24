"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  website?: string;
  role?: string;
  location?: string;
  highlights: string[];
  index: number;
}

export function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  website,
  role,
  location,
  highlights,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          {role && <p className="text-sm font-medium text-primary">{role}</p>}
          {location && <p className="text-xs text-muted-foreground">{location}</p>}
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col space-y-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex-1">
            <h4 className="text-sm font-semibold mb-2">Highlights:</h4>
            <ul className="space-y-1">
              {highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 pt-2">
            {website && (
              <Button variant="outline" size="sm" asChild>
                <a href={website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${title} website`}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </a>
              </Button>
            )}
            {github && (
              <Button variant="outline" size="sm" asChild>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            {demo && (
              <Button variant="outline" size="sm" asChild>
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
