import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import Footer from "@/components/footer";
import { portfolioWorks } from "./data/portfolio-data";
import type { PortfolioWork } from "./data/portfolio-data";
import { generateMetadata as genMeta, SEOData } from "@/lib/seo";
import { generatePortfolioListStructuredData } from "@/lib/portfolio-seo";
import { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

// Generate metadata for the portfolio listing page
export async function generateMetadata(): Promise<Metadata> {
  const seoData: SEOData = {
    title: "Portfolio - Web Development Projects",
    description:
      "Explore my portfolio of successful web development projects including healthcare platforms, marketing agency websites, and service booking systems. Complete with client testimonials and measurable results.",
    keywords: [
      "Ayush Paul",
      "Portfolio",
      "Web Development Projects",
      "Freelance Work",
      "Client Projects",
      "Case Studies",
      "React Projects",
      "Next.js Projects",
      "Full Stack Development",
    ],
    type: "website",
    url: "https://www.ayushpaul.dev/portfolio",
    image: "https://www.ayushpaul.dev/Ayush.webp",
  };

  return genMeta(seoData);
}

interface PortfolioCardProps {
  work: PortfolioWork;
  delay: number;
}

const PortfolioCard = ({ work, delay }: PortfolioCardProps) => {
  return (
    <BlurFade delay={delay}>
      <Link
        href={`/portfolio/${work.id}`}
        className="group cursor-pointer block h-full"
      >
        <div className="rounded-2xl bg-transparent shadow-md p-3 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
          {/* Title */}
          <div className="mb-2">
            <h3 className="text-base sm:text-lg font-semibold">{work.title}</h3>
            {work.description && (
              <p className="text-sm text-gray-500">{work.description}</p>
            )}
          </div>

          {/* Image */}
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <img
              src={work.image}
              alt={`${work.title} - ${work.client} project`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <button className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center rounded-full shadow-md border border-gray-200 group-hover:bg-gray-50 bg-slate-700/50 backdrop-blur-md transition">
              <ArrowUpRight className="w-5 h-5 text-gray-200 transition group-hover:text-gray-700 group-hover:rotate-45 duration-300 ease-in-out" />
            </button>
          </div>
        </div>
      </Link>
    </BlurFade>
  );
};

export default function PortfolioPage() {
  // Generate structured data for the portfolio list
  const structuredData = generatePortfolioListStructuredData(portfolioWorks);

  return (
    <>
      {/* Add JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="flex flex-col space-y-10">
        <section id="portfolio">
          <div className="space-y-6 w-full">
            <BlurFade delay={BLUR_FADE_DELAY}>
              {/* <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Portfolio
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Works
                  </h1>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px] mx-auto">
                    A showcase of my recent projects, how I solved problems of
                    my clients, and the impact my work had on their businesses.
                  </p>
                </div>
              </div> */}
              <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="text-2xl tracking-tighter font-semibold">
                  Portfolio - Development, Automation & More
                </h1>
                <p className="text-base mb-8 text-muted-foreground">
                  Just solving my clients&apos; problems even before they
                  realize they can be solved technically.
                </p>
              </BlurFade>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="mx-auto max-w-2xl">
                {portfolioWorks.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      No portfolio items available at the moment.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6">
                    {portfolioWorks.map((work, index) => (
                      <PortfolioCard
                        key={work.id}
                        work={work}
                        delay={BLUR_FADE_DELAY * 4 + index * 0.1}
                      />
                    ))}
                  </div>
                )}
              </div>
            </BlurFade>
            <div>
              <h2 className="-mt-6 flex justify-center items-center text-gray-600">
                and many more....
              </h2>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
