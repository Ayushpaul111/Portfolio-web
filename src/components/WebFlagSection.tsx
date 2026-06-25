"use client";

import Image from "next/image";
import { Camera, MousePointerClick, Send, ShieldCheck } from "lucide-react";

const STORE_URL =
  "https://chromewebstore.google.com/detail/webflag/gbhhfgklbcdoiconjalndhfljgkbfmbi";

const FEATURES = [
  {
    icon: MousePointerClick,
    title: "One-click capture",
    description:
      "Element picker (Ctrl+Shift+E) or text selection — hover, click, and the bug is captured with a robust CSS selector.",
  },
  {
    icon: Camera,
    title: "Everything a report needs",
    description:
      "Screenshot, page environment (browser, OS, viewport, DPR), the offending element, and a built-in annotation editor.",
  },
  {
    icon: Send,
    title: "Straight to ClickUp",
    description:
      "Push each capture as a ClickUp subtask with a clean bug-report description and the screenshot attached.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first",
    description:
      "No server, no database, no account. Your ClickUp API token and captures stay on your machine at all times.",
  },
];

export default function WebFlagSection() {
  return (
    <div className="mx-auto max-w-[800px]">
      <div className="overflow-hidden rounded-2xl border bg-card">
        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/product/webflag.png"
                  alt="WebFlag logo"
                  width={36}
                  height={36}
                  className="size-full object-cover"
                />
              </span>
              <div>
                <h3 className="text-xl font-bold leading-tight">WebFlag</h3>
                <p className="text-sm text-muted-foreground">
                  Chrome Extension for QA testers
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A lightweight bug-capture tool: find a bug, capture it (screenshot
              + annotate + element selector + environment), and send it straight
              to ClickUp — no backend, no setup beyond your own ClickUp API
              token. Basically, I automated what I was going through while I was
              testing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex gap-3">
                <feature.icon className="mt-0.5 size-5 shrink-0 text-foreground" />
                <div className="space-y-0.5">
                  <h4 className="text-sm font-semibold">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Add to Chrome
          </a>
        </div>
      </div>
    </div>
  );
}
