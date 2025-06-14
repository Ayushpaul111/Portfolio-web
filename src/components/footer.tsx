"use client";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import BlurFade from "./magicui/blur-fade";

const Footer = () => {
  const BLUR_FADE_DELAY = 0.04;
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
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
              Have a idea and want to implement it? Just shoot me a dm{" "}
              <Link
                href={DATA.contact.social.LinkedIn.url}
                className="text-blue-500 hover:underline"
              >
                directly on linkedin
              </Link>{" "}
              and I&apos;ll respond as soon as possible.
            </p>
          </div>
          <button
            type="submit"
            ata-cal-namespace="15min"
            data-cal-link="ayush-paul/15min"
            data-cal-config='{"layout":"month_view"}'
            className="flex justify-center gap-2 items-center mx-auto shadow-xl md:text-base text-sm bg-gray-50 dark:bg-slate-600 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 dark:border-gray-300 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          >
            Lets Connect
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700  dark:border-gray-400 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 dark:fill-gray-300 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>
        </div>
        <div className="px-4 md:px-6 border-t border-gray-500/50 text-sm">
          <div className="mt-1 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400">
              Ayush Paul © {new Date().getFullYear()}
            </p>
            <div className="flex gap-4 mt-1 md:mt-0">
              <Link
                href="https://instagram.com/_ayush_paul_"
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
