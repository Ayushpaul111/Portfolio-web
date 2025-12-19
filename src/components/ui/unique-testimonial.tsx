"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "Our team saves hours every day with automated reminders and follow-ups. We can now focus more on patient care rather than administrative tasks.",
    author: "Dr. Somoshree Paul",
    role: "Dental Surgeon at Unico Dentals",
    avatar: "https://www.unicodentals.com/IMG_5377.JPG",
  },
  {
    id: 2,
    quote:
      "Outstanding work! The website is beautiful and the automation workflows have revolutionized how we manage clients.",
    author: "Bireswar Das",
    role: "Founder & CEO at Fool Ideas",
    avatar:
      "https://www.foolideas.com/_next/image?url=%2Fteam_images%2FbiruNew.png&w=1080&q=75",
  },
  {
    id: 3,
    quote:
      "We handle 50+ bookings daily with minimal manual intervention. The automated assignment system ensures the right professional reaches customers on time every time.",
    author: "Founder",
    role: "CEO at PrimeGhar",
    avatar:
      "https://btownbanners.com/uploads/monthly_2017_08/P.png.23e48690e8f417746b666cbc797cd844.png",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote);
  const [displayedRole, setDisplayedRole] = useState(testimonials[0].role);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setDisplayedQuote(testimonials[index].quote);
      setDisplayedRole(testimonials[index].role);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 400);
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-8 py-16">
      {/* Quote Container - Fixed minimum height */}
      <div className="relative px-8 w-full max-w-3xl">
        <span className="absolute -left-2 -top-6 text-7xl font-serif text-foreground/[0.06] select-none pointer-events-none">
          &quot;
        </span>

        <div className="min-h-[180px] flex items-center justify-center">
          <p
            className={cn(
              "text-xl md:text-2xl font-light text-foreground text-center max-w-2xl leading-relaxed transition-all duration-400 ease-out",
              isAnimating
                ? "opacity-0 blur-sm scale-[0.98]"
                : "opacity-100 blur-0 scale-100"
            )}
          >
            {displayedQuote}
          </p>
        </div>

        <span className="absolute -right-2 -bottom-8 text-7xl font-serif text-foreground/[0.06] select-none pointer-events-none">
          &quot;
        </span>
      </div>

      {/* Fixed height container for role and avatars */}
      <div className="flex flex-col items-center gap-5 mt-2 h-[88px]">
        {/* Role text - Fixed height */}
        <div className="h-[16px] flex items-center">
          <p
            className={cn(
              "text-xs text-muted-foreground tracking-[0.2em] uppercase transition-all duration-500 ease-out",
              isAnimating
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            )}
          >
            {displayedRole}
          </p>
        </div>

        {/* Avatar buttons - Fixed container */}
        <div className="flex items-center justify-center gap-2 h-[48px]">
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index && !isActive;
            const showName = isActive || isHovered;

            return (
              <button
                key={testimonial.id}
                onClick={() => handleSelect(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative flex items-center gap-0 rounded-full cursor-pointer h-10",
                  "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isActive
                    ? "bg-foreground shadow-lg"
                    : "bg-transparent hover:bg-muted/80",
                  showName ? "pr-4 pl-2" : "px-0.5"
                )}
              >
                {/* Avatar with smooth ring animation */}
                <div className="relative flex-shrink-0">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className={cn(
                      "w-8 h-8 rounded-full object-cover",
                      "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      isActive ? "ring-2 ring-background/30" : "ring-0",
                      !isActive && "hover:scale-105"
                    )}
                  />
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    showName
                      ? "grid-cols-[1fr] opacity-100 ml-2"
                      : "grid-cols-[0fr] opacity-0 ml-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <span
                      className={cn(
                        "text-sm font-medium whitespace-nowrap block",
                        "transition-colors duration-300",
                        isActive ? "text-background" : "text-foreground"
                      )}
                    >
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
