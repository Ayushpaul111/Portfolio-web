import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.05;

export default function NotFound() {
  return (
    <main className="relative flex max-h-[100dvh] items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background glow */}

      <div className="relative mx-auto w-full max-w-2xl text-center justify-center">
        {/* 404 */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <span
            className="block select-none font-extrabold leading-none tracking-tighter
            text-[clamp(6rem,20vw,12rem)]
            bg-gradient-to-b from-foreground to-foreground/20 bg-clip-text text-transparent relative"
          >
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazNkcXAzMDZzMjZ6YzVkdWR5bWVuMHFhaTE3aHB0d2hlZzVvczY1cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2Tx2smt0cqbCUhmKBQ/giphy.webp"
              alt=""
              className="absolute w-28 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
            />
            404
          </span>
        </BlurFade>

        {/* Text */}
        <div className="space-y-4">
          <BlurFade
            delay={BLUR_FADE_DELAY * 2}
            yOffset={10}
            className="font-bold tracking-tight text-[clamp(1.8rem,5vw,3rem)]"
          >
            <h2>Oops! Page not found</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="mx-auto max-w-md text-sm sm:text-base md:text-lg text-muted-foreground">
              Looks like this page took a vacation. Let&apos;s get you back on
              track.
            </p>
          </BlurFade>
        </div>

        {/* CTA */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Link href="/" className="inline-block pt-5">
            <Button
              size="lg"
              className="gap-2 rounded-full px-6 shadow-lg transition-transform hover:scale-[1.03]"
            >
              <HomeIcon className="size-4" />
              Back to Home
            </Button>
          </Link>
        </BlurFade>
      </div>
    </main>
  );
}
