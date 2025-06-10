"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer";

const BLUR_FADE_DELAY = 0.04;

// Define the Link type
interface Link {
  title: string;
  link: string;
  description?: string;
  category?: string;
  image?: string;
}

// Define the API response type
interface ApiResponse {
  success: boolean;
  data?: Link[];
  error?: string;
}

// Define props for LinkCard component
interface LinkCardProps {
  link: Link;
  delay: number;
}

const LinkCard = ({ link, delay }: LinkCardProps) => (
  <BlurFade delay={delay}>
    <a
      href={link.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-lg hover:shadow-primary/10">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-2">
            <h3 className="font-semibold leading-none tracking-tight group-hover:text-primary transition-colors">
              {link.title}
            </h3>
            {link.description && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {link.description}
              </p>
            )}
            {link.category && (
              <Badge variant="secondary" className="text-xs">
                {link.category}
              </Badge>
            )}
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
        </div>

        {link.image && (
          <div className="mt-4 aspect-video overflow-hidden rounded-md">
            <img
              src={link.image}
              alt={link.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </a>
  </BlurFade>
);

const SkeletonCard = () => (
  <div className="overflow-hidden rounded-lg border bg-background p-6 animate-pulse">
    <div className="flex items-start justify-between">
      <div className="flex-1 space-y-2">
        <div className="h-5 bg-muted rounded w-3/4"></div>
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-2/3"></div>
        <div className="h-5 bg-muted rounded w-16"></div>
      </div>
      <div className="h-4 w-4 bg-muted rounded ml-2"></div>
    </div>
    <div className="mt-4 aspect-video bg-muted rounded-md"></div>
  </div>
);

export default function LinksPage() {
  const [linksData, setLinksData] = useState<Link[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_SHEET_URLS;

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      // Check if API_URL is defined
      if (!API_URL) {
        throw new Error("API URL is not configured");
      }

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();

      if (data.success && Array.isArray(data.data)) {
        setLinksData(data.data);
      } else {
        setError(data.error || "Invalid data format received");
      }
    } catch (err) {
      console.error("Failed to fetch links:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(`Failed to load links: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      {/* Links Section */}
      <section id="links">
        <div className="space-y-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Featured Links
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my recent links and other interesting stuff
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px] mx-auto">
                  A curated collection of my projects, articles, and resources
                  that I&apos;d love to share with you.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="mx-auto max-w-4xl">
              {loading && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {[...Array(4)].map((_, index) => (
                    <SkeletonCard key={index} />
                  ))}
                </div>
              )}

              {error && (
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                  <div className="text-center py-12">
                    <div className="inline-flex items-center gap-2 text-destructive">
                      <Loader2 className="h-4 w-4" />
                      <span>{error}</span>
                    </div>
                  </div>
                </BlurFade>
              )}

              {!loading && !error && linksData.length === 0 && (
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      No links available at the moment.
                    </p>
                  </div>
                </BlurFade>
              )}

              {!loading && !error && linksData.length > 0 && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {linksData.map((link, index) => (
                    <LinkCard
                      key={`${link.title}-${index}`}
                      link={link}
                      delay={BLUR_FADE_DELAY * 4 + index * 0.1}
                    />
                  ))}
                </div>
              )}
            </div>
          </BlurFade>
        </div>
      </section>

      <Footer />
    </main>
  );
}
