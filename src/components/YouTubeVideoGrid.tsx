"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { YouTubeVideoCard } from "@/components/youtube-video-card";

const VIDEOS = [
  {
    videoId: "nSbwxkh78Hw",
    title: "We Automated a 7 Day Hiring Process Down to 3 Days",
  },
  {
    videoId: "HiYUQ3vxTEU",
    title: "How to Scale n8n Workflows (Parallel Executions & Sub-Workflows)",
  },
  {
    videoId: "JBgJr6sXWNc",
    title: "Web Scraping in n8n - Scrape ANY Website (without any API)",
  },
  {
    videoId: "K2z-SJ4WScE",
    title: "Build An AI Agent for Data Analysis",
  },
];

const INITIAL_COUNT = 2;

export default function YouTubeVideoGrid() {
  const [expanded, setExpanded] = useState(false);

  const visible = VIDEOS.slice(0, INITIAL_COUNT);
  const hidden = VIDEOS.slice(INITIAL_COUNT);

  return (
    <div className="flex flex-col gap-4 max-w-[1000px] mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visible.map((video) => (
          <YouTubeVideoCard
            key={video.videoId}
            videoId={video.videoId}
            title={video.title}
          />
        ))}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="extra"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {hidden.map((video, i) => (
                <motion.div
                  key={video.videoId}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3, ease: "easeOut" }}
                >
                  <YouTubeVideoCard videoId={video.videoId} title={video.title} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {hidden.length > 0 && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="group flex items-center gap-1.5 mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-1"
        >
          <span>{expanded ? "View less" : "View more"}</span>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.span>
        </button>
      )}
    </div>
  );
}
