"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Maximize2, Minimize2 } from "lucide-react";

const RESUME_PATH = "/assets/Daylan_Hoff_Resume.pdf";

export function ResumeViewer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden border-2 border-primary/10 hover:border-primary/20 transition-colors">
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 border-b">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm md:text-base">Daylan_Hoff_Resume.pdf</h3>
              <p className="text-xs text-muted-foreground">View or download my resume</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setExpanded(!expanded)}
              className="hidden md:flex"
              aria-label={expanded ? "Collapse resume" : "Expand resume"}
            >
              {expanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
            <Button variant="default" size="sm" asChild>
              <a href={RESUME_PATH} download="Daylan_Hoff_Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>
          </div>
        </div>
        {/* PDF Embed */}
        <div
          className="relative bg-muted/30 transition-all duration-500 ease-in-out"
          style={{ height: expanded ? "85vh" : "600px" }}
        >
          <iframe
            src={`${RESUME_PATH}#view=FitH`}
            className="w-full h-full border-0"
            title="Daylan Hoff Resume"
          />
          {/* Fallback for mobile / browsers that don't support PDF embed */}
          <noscript>
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <a href={RESUME_PATH} className="text-primary underline">
                Download Resume PDF
              </a>
            </div>
          </noscript>
        </div>
      </Card>
    </motion.div>
  );
}
