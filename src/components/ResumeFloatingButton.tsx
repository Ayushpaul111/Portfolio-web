"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

function FolderIcon({ isHovered }: { isHovered: boolean }) {
  const width = 32;
  const height = 24;
  const tabWidth = width * 0.375;
  const tabHeight = height * 0.25;

  return (
    <motion.div
      className="relative"
      style={{ width, height, transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 rounded-[4px] bg-gradient-to-b from-amber-400 to-amber-500 shadow-sm">
        <div
          className="absolute left-0.5 rounded-t-[2px] bg-gradient-to-b from-amber-300 to-amber-400"
          style={{ top: -tabHeight * 0.65, width: tabWidth, height: tabHeight }}
        />
      </div>
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[85%] origin-bottom rounded-[4px] bg-gradient-to-b from-amber-300 to-amber-400 shadow-sm"
        animate={{
          rotateX: isHovered ? -45 : -25,
          scaleY: isHovered ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{ transformStyle: "preserve-3d", zIndex: 10 }}
      >
        <div className="absolute top-1 left-1 right-1 h-px bg-amber-200/50" />
      </motion.div>
    </motion.div>
  );
}

export default function ResumeFloatingButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.includes("/blog")) return null;

  return (
    <>
      {/* Floating button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-background border border-border px-4 py-2.5 shadow-lg cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        aria-label="View Resume"
      >
        <FolderIcon isHovered={isHovered} />
        <span className="text-sm font-medium text-foreground">Resume</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal panel — same width as before, more height on larger screens */}
            <motion.div
              className="fixed z-50 flex flex-col overflow-hidden rounded-2xl bg-background shadow-2xl ring-1 ring-border
                inset-4
                sm:inset-8
                md:inset-x-16 md:inset-y-6
                lg:inset-x-16 lg:inset-y-4"
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/40 shrink-0">
                <div className="flex items-center gap-3">
                  <FolderIcon isHovered={false} />
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-none">
                      Resume
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Ayush Paul
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="group rounded-full w-7 h-7 flex items-center justify-center bg-muted hover:bg-foreground/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close"
                >
                  <X className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </motion.button>
              </div>

              <iframe
                src="https://drive.google.com/file/d/1opXVxFujxJUFv8N3CXnoNk-GBomFSqvg/preview"
                className="flex-1 w-full"
                allow="autoplay"
                title="Resume"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
