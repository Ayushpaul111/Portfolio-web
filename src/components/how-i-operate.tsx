import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const HIGHLIGHTS = [
  "4+ yrs freelancing",
  "Led a 4-person team",
  "Sales → Dev → Ops",
  "Indian + international clients",
];

const PILLARS = [
  {
    title: "Build",
    body: "Full-stack apps & automations clients actually use. 4+ years, Indian & international. Built the Dayananda Sagar University library system that's still in use.",
  },
  {
    title: "Lead & Run",
    body: "Built and led a 4-person freelance team in my 3rd year. At Medikzo I run the dev + testing teams, train support, and write the SOPs that keep it all moving.",
  },
  {
    title: "Grow",
    body: "Outreach, sales, and business strategy. Building Medikzo's model & playbook with Suman Das — map how a process works, turn it into a workflow, train someone to own it, then move to the next domain.",
  },
];

export default function HowIOperate() {
  return (
    <div className="space-y-8 w-full">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            How I Operate
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            I don&apos;t just write code — I run the whole thing.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {HIGHLIGHTS.map((highlight) => (
            <Badge key={highlight} variant="secondary">
              {highlight}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <Card key={pillar.title} className="h-full border p-5">
            <h3 className="text-lg font-bold">{pillar.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{pillar.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
