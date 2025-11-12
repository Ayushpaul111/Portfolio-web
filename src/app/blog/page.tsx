import Footer from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export async function generateMetadata() {
  const posts = await getBlogPosts();
  const recentPosts = posts.slice(0, 6);

  return {
    title: "Blog - Ayush Paul | Web Development & Automation Articles",
    description: `Read ${
      posts.length
    }+ articles about web development, automation, Next.js, React, and modern software engineering. Latest: ${recentPosts
      .map((p) => p.metadata.title)
      .slice(0, 3)
      .join(", ")}`,
    keywords: [
      "Ayush Paul Blog",
      "Web Development Blog",
      ...recentPosts.map((p) => p.metadata.title),
    ].join(", "),
  };
}

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Generate structured data
  const topPosts = posts.slice(0, 6);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ayush Paul Blog Posts",
    itemListElement: topPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.ayushpaul.dev/blog/${post.slug}`,
      name: post.metadata.title,
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ayush Paul",
    url: "https://www.ayushpaul.dev",
    hasPart: topPosts.map((post) => ({
      "@type": "WebPage",
      name: post.metadata.title,
      url: `https://www.ayushpaul.dev/blog/${post.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.ayushpaul.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.ayushpaul.dev/blog",
      },
    ],
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog",
    url: "https://www.ayushpaul.dev/blog",
    description: "Articles about web development, automation, and technology",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: topPosts.map((post, index) => ({
        "@type": "BlogPosting",
        position: index + 1,
        headline: post.metadata.title,
        description: post.metadata.summary,
        url: `https://www.ayushpaul.dev/blog/${post.slug}`,
        datePublished: post.metadata.publishedAt,
        author: {
          "@type": "Person",
          name: "Ayush Paul",
        },
      })),
    },
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-[50vh]">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-2xl tracking-tighter font-semibold">
            Blog - Development, Automation & life
          </h1>
          <p className="text-base mb-8 text-muted-foreground">
            My thoughts on software development, automation, life and more.
          </p>
        </BlurFade>
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="relativ flex flex-col space-y-1 mb-4 border border-gray-300 rounded-xl p-4 transition-all hover:shadow-lg hover:shadow-primary/10 dark:border-gray-700/50"
                href={`/blog/${post.slug}`}
              >
                {/* Show pin only for the first (most recent) post */}
                {id === 0 && (
                  <>
                    <img
                      className="absolute w-8 h-8 -top-3 -right-3 dark:hidden block"
                      src="./pin.svg"
                      alt="Pinned post"
                    />
                    <img
                      className="absolute w-8 h-8 -top-3 -right-3 dark:block hidden"
                      src="./pin-white.svg"
                      alt="Pinned post"
                    />
                  </>
                )}
                <div className="w-full flex flex-col">
                  <p className="tracking-tight font-medium">
                    {post.metadata.title}
                  </p>
                  <div className="flex flex-col gap-2 mt-1">
                    <p className="text-xs sm:items-start text-muted-foreground break-words">
                      {post.metadata.summary}
                    </p>
                    <div className="flex flex-row justify-between items-center border-t border-gray-300 pt-2 dark:border-gray-700/50">
                      <p className="text-xs text-muted-foreground flex-shrink-0">
                        {post.metadata.publishedAt}
                      </p>
                      {/* Reading time badge */}
                      <div className="text-xs text-muted-foreground flex-shrink-0">
                        {post.metadata.readingTime} min read
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
