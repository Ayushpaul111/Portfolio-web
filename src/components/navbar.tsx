"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const pathname = usePathname();

  // Determine distance based on screen size using window.matchMedia
  const isMdScreen =
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px)").matches;
  const distance = isMdScreen ? 140 : 0;

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-5 z-50 mx-auto mb-4 flex origin-top h-full max-h-3 px-2"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6,
      }}
    >
      <style jsx>{`
        @media (max-width: 420px) {
          .avatar-container {
            display: none;
          }
        }
      `}</style>

      <div className="fixed top-0 inset-x-0 h-16 w-full bg-transparent to-transparent backdrop-blur-3xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
      <Dock
        className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-14 max-w-2xl w-full items-center px-4 bg-white/15 dark:bg-black/15 backdrop-blur-2xl border border-white/30 dark:border-white/15 rounded-full [box-shadow:0_4px_30px_rgba(0,0,0,0.2)] dark:[box-shadow:0_4px_30px_rgba(255,255,255,0.1)] transition-all duration-300 justify-between"
        distance={distance} // Pass dynamic distance
      >
        <div className="fixed top-10 right-0 md:w-16 md:h-16 w-10 h-10 -z-10 opacity-100 pointer-events-none">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDllZnNiNDd4ZzVlN3EwbXJyYnQzY2xpcGV0Z3dlcWR0NjBvMXVneiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JhfsxuCI5KxYfbyuui/giphy.gif"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="avatar-container">
          <Image
            src={DATA.avatarUrl}
            alt={DATA.name}
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  onClick={scrollToTop}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 relative flex items-center justify-center"
                  )}
                >
                  <item.icon className="size-5" />
                  <span
                    className={cn(
                      "absolute bottom-2 h-0.5 w-5 bg-gray-700/80 dark:bg-white/80 rounded-full transition-all duration-300 ease-in-out",
                      pathname === item.href ||
                        (item.href === "/blog" &&
                          pathname.startsWith("/blog")) ||
                        (item.href === "/portfolio" &&
                          pathname.startsWith("/portfolio"))
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    )}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator
          orientation="vertical"
          className="h-8 bg-gray-400/40 dark:bg-white/25"
        />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    onClick={scrollToTop}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 relative flex items-center justify-center"
                    )}
                  >
                    <social.icon className="size-5" />
                    <span
                      className={cn(
                        "absolute bottom-2 h-0.5 w-5 bg-white dark:bg-white rounded-full transition-all duration-300 ease-in-out",
                        pathname === social.url
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      )}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        <Separator
          orientation="vertical"
          className="h-8 bg-gray-400/40 dark:bg-white/25"
        />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </motion.div>
  );
}
