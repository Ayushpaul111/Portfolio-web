import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import Footer from "@/components/footer";
import { portfolioWorks } from "../data/portfolio-data";
import {
  generatePortfolioMetadata,
  generatePortfolioStructuredData,
} from "@/lib/portfolio-seo";
import { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

// Generate metadata for each portfolio page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const work = portfolioWorks.find((w) => w.id === params.slug);

  if (!work) {
    return {
      title: "Portfolio Not Found",
      description: "The requested portfolio item could not be found.",
    };
  }

  return generatePortfolioMetadata(work);
}

// Generate static params for all portfolio pages
export async function generateStaticParams() {
  return portfolioWorks.map((work) => ({
    slug: work.id,
  }));
}

export default function PortfolioSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const work = portfolioWorks.find((w) => w.id === params.slug);

  if (!work) {
    notFound();
  }

  // Generate structured data for this portfolio item
  const structuredData = generatePortfolioStructuredData(work);

  return (
    <>
      {/* Add JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="flex flex-col space-y-12 sm:space-y-16 pb-12 sm:pb-16">
        <section className="w-full">
          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto px-4 sm:px-6">
            {/* Navigation */}
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Link href="/portfolio">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 -ml-2 text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Portfolio
                </Button>
              </Link>
            </BlurFade>

            {/* Hero Image */}
            {work.image && (
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="aspect-video overflow-hidden rounded-lg sm:rounded-xl shadow-sm border">
                  <img
                    src={work.image}
                    alt={`${work.title} - ${work.client} project showcase`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </BlurFade>
            )}

            {/* Header */}
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                    {work.title}
                  </h1>

                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground flex-wrap">
                    <span className="font-medium text-foreground">
                      {work.client}
                    </span>
                    <span className="text-muted-foreground/40">•</span>
                    <span>{work.year}</span>
                    <span className="text-muted-foreground/40">•</span>
                    <Badge
                      variant="secondary"
                      className="font-normal text-xs sm:text-sm"
                    >
                      {work.category}
                    </Badge>
                  </div>
                </div>

                {/* {work.link && (
                  <div>
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      Visit Live Project <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )} */}
              </div>
            </BlurFade>

            {/* Project Metrics */}
            {work.metrics && work.metrics.length > 0 && (
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-3 gap-4 p-6 sm:p-8 bg-muted/30 rounded-lg sm:rounded-xl border">
                  {work.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex flex-col items-center gap-1.5 pb-4 sm:pb-0 border-b sm:border-b-0 last:border-b-0 last:pb-0"
                    >
                      <div className="text-sm text-muted-foreground font-medium order-2 sm:order-2">
                        {metric.label}
                      </div>
                      <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-primary order-1 sm:order-1">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </BlurFade>
            )}

            {/* Divider */}
            <div className="border-t"></div>

            {/* Project Description */}
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold">
                  This is how I helped them:
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {work.fullDescription}
                </p>
              </div>
            </BlurFade>

            {/* Technologies Used */}
            {work.tags.length > 0 && (
              <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </BlurFade>
            )}

            {/* Divider */}
            <div className="border-t"></div>

            {/* Testimonial Section */}
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <div className="bg-muted/30 rounded-lg sm:rounded-xl p-4 sm:p-8 border space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold">
                  Client Testimonial
                </h2>
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/40 flex-shrink-0 mt-1" />
                  <div className="space-y-4 sm:space-y-6 flex-1">
                    <blockquote className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                      &quot;{work.testimonial.text}&quot;
                    </blockquote>

                    <div className="flex items-center gap-3 sm:gap-4 pt-2">
                      {work.testimonial.avatar && (
                        <img
                          src={work.testimonial.avatar}
                          alt={`${work.testimonial.author} - ${work.testimonial.position}`}
                          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-300 object-cover ring-2 ring-background"
                        />
                      )}
                      <div>
                        <div className="font-semibold text-sm sm:text-base">
                          {work.testimonial.author}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          {work.testimonial.position},{" "}
                          {work.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Bottom Navigation */}
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <div className="flex justify-center pt-6 sm:pt-8">
                <Link href="/portfolio">
                  <Button variant="outline" className="gap-2 text-sm">
                    <ArrowLeft className="h-4 w-4" />
                    View All Projects
                  </Button>
                </Link>
              </div>
            </BlurFade>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
