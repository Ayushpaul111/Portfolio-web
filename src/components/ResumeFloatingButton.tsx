"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ArrowLeft, Zap, Code2 } from "lucide-react";
import { usePathname } from "next/navigation";

const RESUMES = {
  fullstack: {
    label: "Full Stack",
    icon: Code2,
    description:
      "React, Node.js, databases, APIs & end-to-end product development",
    src: "https://drive.google.com/file/d/1opXVxFujxJUFv8N3CXnoNk-GBomFSqvg/preview",
  },
  automation: {
    label: "Automation",
    icon: Zap,
    description: "Workflows, scripting, RPA, n8n & process automation",
    src: "https://drive.google.com/file/d/1lDsAxegyukipc8wElLyKs44lKAVtufte/preview",
  },
} as const;

type ResumeKey = keyof typeof RESUMES;

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

function PickerStep({ onSelect }: { onSelect: (key: ResumeKey) => void }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center flex-1 px-6 py-10 gap-8"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-center space-y-1.5">
        <h2 className="text-lg font-semibold text-foreground">
          What are you looking for?
        </h2>
        <p className="text-sm text-muted-foreground">
          Choose the resume that fits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
        {(
          Object.entries(RESUMES) as [ResumeKey, (typeof RESUMES)[ResumeKey]][]
        ).map(([key, resume]) => {
          const Icon = resume.icon;
          return (
            <motion.button
              key={key}
              onClick={() => onSelect(key)}
              className="group flex flex-col items-start gap-3 rounded-xl border border-border bg-muted/40 hover:bg-muted hover:border-foreground/20 px-5 py-5 text-left transition-colors cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-background border border-border group-hover:border-foreground/20 transition-colors">
                <Icon className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-none">
                  {resume.label}
                </p>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  {resume.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function ResumeFloatingButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ResumeKey | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsSmallScreen(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsSmallScreen(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function handleClose() {
    setIsOpen(false);
    setSelected(null);
  }

  if (pathname.includes("/blog")) return null;

  const resume = selected ? RESUMES[selected] : null;

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-background border border-border px-4 py-2.5 shadow-lg cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />

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
                  {selected ? (
                    <motion.button
                      onClick={() => setSelected(null)}
                      className="group rounded-full w-7 h-7 flex items-center justify-center bg-muted hover:bg-foreground/10 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Back"
                    >
                      <ArrowLeft className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </motion.button>
                  ) : (
                    <FolderIcon isHovered={false} showDoc={false} />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-none">
                      {selected ? `Resume — ${resume!.label}` : "Resume"}
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
              <AnimatePresence mode="wait">
                {!selected ? (
                  <PickerStep key="picker" onSelect={setSelected} />
                ) : (
                  <motion.iframe
                    key={selected}
                    src={resume!.src}
                    className="flex-1 w-full"
                    allow="autoplay"
                    title={`Resume — ${resume!.label}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
