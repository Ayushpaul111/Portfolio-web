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
  const BLUR_FADE_DELAY = 0.04;
  return (
    <section id="blog">
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
            <span className="hidden xs:inline">-</span>
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
          <button className="self-start sm:self-auto">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <article
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.source }}
        ></article>
      </BlurFade>
    </section>
  );
}
