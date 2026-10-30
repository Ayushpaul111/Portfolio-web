"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";

const RESUME_SRC =
  "https://drive.google.com/file/d/1lP3-PjsD5VNmTvkqp6Z05IMkNCjB1NZc/preview";

function FolderIcon({
  isHovered,
  showDoc,
}: {
  isHovered: boolean;
  showDoc: boolean;
}) {
  const width = 32;
  const height = 24;
  const tabWidth = width * 0.375;
  const tabHeight = height * 0.25;

  return (
    <motion.div
      className="relative"
      style={{
        width,
        height,
        transformStyle: "preserve-3d",
        overflow: "visible",
      }}
    >
      <AnimatePresence>
        {showDoc && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-100 rounded-[2px] shadow-sm overflow-hidden"
            style={{ width: 24, zIndex: 5 }}
            initial={{ bottom: 2, height: 0, opacity: 0 }}
            animate={{ bottom: 10, height: 16, opacity: 1 }}
            exit={{ bottom: 2, height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <div className="absolute top-[3px] left-[2px] right-[2px] h-px bg-neutral-300 rounded-full" />
            <div className="absolute top-[6px] left-[2px] right-[4px] h-px bg-neutral-300 rounded-full" />
            <div className="absolute top-[9px] left-[2px] right-[3px] h-px bg-neutral-300 rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldPreload, setShouldPreload] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsSmallScreen(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsSmallScreen(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  function handleClose() {
    setIsOpen(false);
  }

  if (pathname.includes("/blog")) return null;

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-background border border-border px-4 py-2.5 shadow-lg cursor-pointer"
        onMouseEnter={() => {
          setIsHovered(true);
          setShouldPreload(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
        // Start loading the resume on intent (hover/touch/focus), so it is
        // ready by the time the click lands without costing every visitor
        onTouchStart={() => setShouldPreload(true)}
        onFocus={() => setShouldPreload(true)}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        aria-label="View Resume"
      >
        <FolderIcon
          isHovered={isHovered}
          showDoc={isHovered || isSmallScreen}
        />
        <span className="text-sm font-medium text-foreground">Resume</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {/* Kept mounted once loaded so the iframe isn't reloaded on every open */}
      {(shouldPreload || isOpen) && (
        <motion.div
          className={`fixed z-50 flex flex-col overflow-hidden rounded-2xl bg-background shadow-2xl ring-1 ring-border
            inset-4
            sm:inset-8
            md:inset-x-16 md:inset-y-6
            lg:inset-x-16 lg:inset-y-4
            ${isOpen ? "" : "pointer-events-none"}`}
          initial={{ opacity: 0, y: 16, visibility: "hidden" }}
          animate={
            isOpen
              ? { opacity: 1, y: 0, visibility: "visible" }
              : { opacity: 0, y: 16, transitionEnd: { visibility: "hidden" } }
          }
          transition={{ duration: 0.2, ease: "easeOut" }}
          aria-hidden={!isOpen}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/40 shrink-0">
            <div className="flex items-center gap-3">
              <FolderIcon isHovered={false} showDoc={false} />
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
              onClick={handleClose}
              className="group rounded-full w-7 h-7 flex items-center justify-center bg-muted hover:bg-foreground/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close"
            >
              <X className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </motion.button>
          </div>

          {/* Body */}
          <div className="relative flex-1">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            )}
            <iframe
              src={RESUME_SRC}
              className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              allow="autoplay"
              title="Resume — Ayush Paul"
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
