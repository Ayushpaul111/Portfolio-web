import { DATA } from "@/data/resume";
import Link from "next/link";
import React from "react";
import BlurFade from "./magicui/blur-fade";

const Footer = () => {
  const BLUR_FADE_DELAY = 0.04;
  return (
    <section id="contact">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="grid items-center justify-center gap-4 text-center md:px-6 w-full py-6 border-t border-gray-500/50">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm{" "}
              <Link
                href={DATA.contact.social.LinkedIn.url}
                className="text-blue-500 hover:underline"
              >
                with a direct question on twitter
              </Link>{" "}
              and I&apos;ll respond whenever I can. I will ignore all
              soliciting.
            </p>
          </div>
        </div>
        <div className="px-4 md:px-6 border-t border-gray-500/50 text-sm">
          <div className="mt-1 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400">
              Ayush Paul © {new Date().getFullYear()}
            </p>
            <div className="flex gap-4 mt-1 md:mt-0">
              <Link
                href="https://instagram.com/ayushpaul1111"
                className="text-gray-400 dark:hover:text-white hover:text-gray-900"
              >
                Instagram
              </Link>
              <Link
                href="https://linkedin.com/in/ayushpaul1111"
                className="text-gray-400 dark:hover:text-white hover:text-gray-900"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/ayushpaul111"
                className="text-gray-400 dark:hover:text-white hover:text-gray-900"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default Footer;
