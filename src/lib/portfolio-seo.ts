import { generateMetadata, SEOData, generateStructuredData } from "./seo";
import { Metadata } from "next";
import { PortfolioWork } from "@/app/portfolio/data/portfolio-data";

export function generatePortfolioMetadata(work: PortfolioWork): Metadata {
  const seoData: SEOData = {
    title: work.title,
    description: work.description,
    keywords: [
      "Ayush Paul",
      "Portfolio",
      work.client,
      work.category,
      ...work.tags,
      "Web Development",
      "Freelance Project",
      "Case Study",
    ],
    type: "article",
    url: `https://www.ayushpaul.dev/portfolio/${work.id}`,
    image: work.image || "https://www.ayushpaul.dev/Ayush.webp",
    publishedTime: `${work.year}-01-01`,
    modifiedTime: `${work.year}-01-01`,
    author: "Ayush Paul",
    section: "Portfolio",
  };

  return generateMetadata(seoData);
}

export function generatePortfolioStructuredData(work: PortfolioWork) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: work.title,
    description: work.fullDescription,
    url: `https://www.ayushpaul.dev/portfolio/${work.id}`,
    image: work.image,
    author: {
      "@type": "Person",
      name: "Ayush Paul",
      url: "https://www.ayushpaul.dev",
      jobTitle: "Full Stack Developer",
    },
    creator: {
      "@type": "Person",
      name: "Ayush Paul",
    },
    datePublished: `${work.year}-01-01`,
    keywords: work.tags.join(", "),
    about: work.category,
    client: {
      "@type": "Organization",
      name: work.client,
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: work.testimonial.author,
        jobTitle: work.testimonial.position,
      },
      reviewBody: work.testimonial.text,
    },
    offers: work.link
      ? {
          "@type": "Offer",
          url: work.link,
        }
      : undefined,
  };
}

export function generatePortfolioListStructuredData(works: PortfolioWork[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ayush Paul Portfolio",
    description: "Portfolio of web development projects by Ayush Paul",
    numberOfItems: works.length,
    itemListElement: works.map((work, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: work.title,
        description: work.description,
        url: `https://www.ayushpaul.dev/portfolio/${work.id}`,
        image: work.image,
        author: {
          "@type": "Person",
          name: "Ayush Paul",
        },
      },
    })),
  };
}
