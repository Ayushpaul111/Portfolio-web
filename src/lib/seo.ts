import { Metadata } from "next";

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

const defaultSEO: Required<
  Omit<SEOData, "publishedTime" | "modifiedTime" | "section">
> = {
  title: "Ayush Paul - Full Stack Developer",
  description:
    "Portfolio of Ayush Paul - Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies. Building innovative digital solutions.",
  keywords: [
    "Ayush Paul",
    "Full Stack Developer",
    "Freelancer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "TailwindCSS",
    "Framer Motion",
  ],
  image: "https://www.ayushpaul.dev/Ayush.webp",
  url: "https://www.ayushpaul.dev",
  type: "website",
  author: "Ayush Paul",
};

export function generateMetadata(seo: SEOData = {}): Metadata {
  const {
    title = defaultSEO.title,
    description = defaultSEO.description,
    keywords = defaultSEO.keywords,
    image = defaultSEO.image,
    url = defaultSEO.url,
    type = defaultSEO.type,
    publishedTime,
    modifiedTime,
    author = defaultSEO.author,
    section,
  } = seo;

  const fullTitle =
    seo.title && seo.title !== defaultSEO.title
      ? `${seo.title} | ${defaultSEO.title.split(" - ")[0]}`
      : title;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://www.ayushpaul.dev"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Ayush Paul",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: type as any,
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors: [author],
        section,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@_ayush_paul_", // Update with your Twitter handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStructuredData(seo: SEOData = {}) {
  const {
    title = defaultSEO.title,
    description = defaultSEO.description,
    image = defaultSEO.image,
    url = defaultSEO.url,
    author = defaultSEO.author,
    type = defaultSEO.type,
    publishedTime,
    modifiedTime,
  } = seo;

  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type":
      type === "profile"
        ? "Person"
        : type === "article"
        ? "Article"
        : "WebSite",
    name: title,
    description,
    url,
    image,
  };

  if (type === "profile") {
    return {
      ...baseStructuredData,
      "@type": "Person",
      jobTitle: "Full Stack Developer",
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      knowsAbout: defaultSEO.keywords,
      sameAs: [
        "https://linkedin.com/in/ayushpaul1111",
        "https://github.com/ayushpaul111",
        "https://instagram.com/_ayush_paul_",
      ],
    };
  }

  if (type === "article") {
    return {
      ...baseStructuredData,
      "@type": "Article",
      headline: title,
      author: {
        "@type": "Person",
        name: author,
      },
      publisher: {
        "@type": "Person",
        name: author,
      },
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
    };
  }

  return {
    ...baseStructuredData,
    "@type": "WebSite",
    author: {
      "@type": "Person",
      name: author,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
