import { ArrowRight } from "lucide-react";

const LOOP = [
  "Learn it end to end",
  "Find the best way",
  "Build an SOP",
  "Train the team",
  "Oversee",
];

export default function BusinessMind() {
  return (
    <div className="flex w-full flex-col items-center space-y-6 text-center">
      <div className="max-w-2xl space-y-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
          I&apos;m a developer who builds like a founder.
        </h2>
        <p className="text-muted-foreground md:text-lg">
          Full-stack development, workflow automation, whatever the stack
          demands - I build with a founder&apos;s brain, not just an
          engineer&apos;s. Years of freelancing, multiple companies, multiple
          teams, shipping everything from backend systems to the automations
          that keep them running without me. I have failed more than once, and
          every failure got turned into a system that made sure it never
          happened twice as a developer!
        </p>
        <p className="text-muted-foreground md:text-lg">
          I run on one loop: learn a problem end to end, find the best way to
          solve it, turn it into an SOP, train someone to own it - then step
          back and oversee. Then again, in the next domain. That&apos;s been my
          whole life as a founder/Oparation Manager.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
        {LOOP.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-full border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              {step}
            </span>
            {i < LOOP.length - 1 && (
              <ArrowRight className="size-3.5 shrink-0 text-muted-foreground" />
            )}
          </div>
        ))}
        <ArrowRight className="size-3.5 shrink-0 text-muted-foreground" />
        <span className="text-xs font-medium text-muted-foreground">
          then repeat
        </span>
      </div>
    </div>
  );
}
