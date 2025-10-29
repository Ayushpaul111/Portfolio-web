"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, List } from "lucide-react";
import { motion } from "framer-motion";

interface PortfolioSidebarProps {
  hasMetrics?: boolean;
}

export default function PortfolioSidebar({
  hasMetrics = false,
}: PortfolioSidebarProps) {
  const [activeSection, setActiveSection] = useState("overview");
  const [isOpen, setIsOpen] = useState(true);

  const sections = [
    { id: "overview", label: "Overview" },
    ...(hasMetrics ? [{ id: "metrics", label: "Metrics" }] : []),
    { id: "description", label: "Description" },
    { id: "technologies", label: "Technologies" },
    { id: "testimonial", label: "Testimonial" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [hasMetrics]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex fixed left-4 top-12 z-50 items-center justify-center w-9 h-9 rounded-lg bg-background/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-md hover:bg-accent transition-all group"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? (
          <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        ) : (
          <List className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        )}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -256 }}
        animate={{ x: isOpen ? 0 : -256 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "hidden lg:block fixed left-0 -top-2 h-screen bg-background/80 backdrop-blur-md border-r border-border/50 z-40 shadow-sm w-64"
        )}
      >
        <div className="h-full overflow-y-auto overflow-x-hidden px-4 pt-24 pb-6 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center gap-2 px-2">
              <div className="h-1 w-1 rounded-full bg-primary" />
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                On This Page
              </h3>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-0.5">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={cn(
                    "group block w-full text-left text-sm py-2 px-3 rounded-md transition-all duration-200 relative overflow-hidden",
                    activeSection === id
                      ? "text-primary font-medium bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {/* Active indicator */}
                  <span
                    className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-r-full bg-primary transition-opacity duration-200",
                      activeSection === id ? "opacity-100" : "opacity-0"
                    )}
                  />

                  {/* Hover indicator for non-active items */}
                  <span
                    className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-r-full bg-muted-foreground/50 transition-opacity duration-200",
                      activeSection === id
                        ? "opacity-0"
                        : "opacity-0 group-hover:opacity-100"
                    )}
                  />

                  {/* Text with truncation */}
                  <span className="block truncate leading-relaxed">
                    {label}
                  </span>
                </button>
              ))}
            </nav>

            {/* Progress indicator */}
            <div className="pt-4 px-2">
              <div className="h-px bg-border/50 relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-primary/50 transition-all duration-300"
                  style={{
                    width: `${
                      ((sections.findIndex((s) => s.id === activeSection) + 1) /
                        sections.length) *
                      100
                    }%`,
                  }}
                />
              </div>
              <p className="text-[10px] text-muted-foreground/70 mt-2 text-center">
                {sections.findIndex((s) => s.id === activeSection) + 1} of{" "}
                {sections.length}
              </p>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
