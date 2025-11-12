import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import Image from "next/image";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import BlogSidebar from "@/components/ui/BlogSidebar";
import Footer from "@/components/footer";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);
  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);
  if (!post) {
    notFound();
  }

  const posts = await getBlogPosts();

  const BLUR_FADE_DELAY = 0.04;

  // Construct the LinkedIn share URL
  const shareUrl = `${DATA.url}/blog/${post.slug}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    shareUrl
  )}`;

  return (
    <section id="blog">
      <ScrollProgress className="top-[0px]" />
      <BlogSidebar />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            readingTime: post.metadata.readingTime,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="title font-bold text-3xl tracking-tighter max-w-[650px]">
          {post.metadata.title}
        </h1>
        {/* Author and Date Section - Styled like the screenshot with responsive design */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-x-2 mt-4 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-x-2 flex-wrap">
            <Image
              src={DATA.avatarUrl}
              className="rounded-full"
              alt="avatar"
              width={20}
              height={20}
            />
            <span className="font-medium">{DATA.name}</span>
            {/* <span className="xs:inline">-</span> */}
            <Suspense
              fallback={
                <span className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              }
            >
              <span className="whitespace-nowrap">
                {formatDate(post.metadata.publishedAt)}
              </span>
            </Suspense>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <span className="w-1 h-1 bg-current rounded-full"></span>
              <span>{post.metadata.readingTime} min read</span>
            </span>
          </div>
          {/* Updated Share Button for LinkedIn */}
          <a
            href={linkedInShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="Share on LinkedIn"
          >
            <Share2 className="w-4 h-4" />
          </a>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2} className="mb-12">
        <article
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.source }}
        ></article>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="mt-12 mb-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Continue Reading</h2>

          <div className="grid gap-4">
            {posts
              .filter((p) => p.slug !== params.slug)
              .slice(0, 5)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group p-4 border border-gray-300 dark:border-gray-700/50 rounded-lg hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {relatedPost.metadata.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedPost.metadata.summary}
                  </p>
                </Link>
              ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              View All Posts →
            </Link>
          </div>
        </div>
      </BlurFade>
      <Footer />
    </section>
  );
}
