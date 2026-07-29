"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
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

const positions = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
];

export default function GalleryGrid() {
  const [cards, setCards] = useState([0, 1, 2]);
  const [nextId, setNextId] = useState(3);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handleAnimate = () => {
    const nextVideo = (cards[2] + 1) % videos.length;
    setCards([...cards.slice(1), nextVideo]);
    setNextId((prev) => prev + 1);
    setPlayingId(null);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {/* Height tracks the card (16:9 media + title bar) plus headroom for the
          upward-offset cards behind it, so the stack never clips at the top. */}
      <div className="relative h-[calc(56.25vw_+_80px)] w-full max-w-[90vw] overflow-hidden sm:h-[380px] sm:max-w-[644px]">
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((videoIndex, index) => {
            const { scale, y } = positions[index] ?? positions[2];
            const zIndex = 3 - index;
            const video = videos[videoIndex];
            const isFront = index === 0;
            const isPlaying = isFront && playingId === video.videoId;

            return (
              <motion.div
                key={`${videoIndex}-${nextId + index}`}
                initial={index === 2 ? { y: -16, scale: 0.9 } : undefined}
                animate={{ y, scale }}
                exit={
                  index === 0 ? { y: 340, scale: 1, zIndex: 10 } : undefined
                }
                transition={{ type: "spring", duration: 1, bounce: 0 }}
                style={{ zIndex, left: "50%", x: "-50%", bottom: 0 }}
                className="absolute flex w-full flex-col overflow-hidden rounded-t-xl border-x border-t border-border bg-card p-1 will-change-transform outline outline-black/10 dark:outline-white/10 sm:w-[512px]"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black shadow-xl">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => isFront && setPlayingId(video.videoId)}
                      className="group absolute inset-0 h-full w-full"
                      aria-label={isFront ? `Play ${video.title}` : video.title}
                      tabIndex={isFront ? 0 : -1}
                    >
                      <Image
                        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                        alt={video.title}
                        fill
                        className="select-none object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {isFront && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/35">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                            <Play className="ml-1 h-6 w-6 fill-black text-black" />
                          </div>
                        </div>
                      )}
                    </button>
                  )}
                </div>
                <p className="truncate px-3 py-3.5 text-center text-xs font-medium text-muted-foreground">
                  {video.title}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-border py-4">
        <button
          onClick={handleAnimate}
          className="group flex items-center gap-2 rounded-md border border-black dark:border-white bg-white dark:bg-black px-4 py-2 text-sm font-medium text-black dark:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255)] active:translate-x-1 active:translate-y-1 active:shadow-none dark:active:shadow-none active:duration-75"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-active:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 5l7 7-7 7M5 12h15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
