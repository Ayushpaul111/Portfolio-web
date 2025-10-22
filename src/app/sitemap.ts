import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { portfolioWorks } from "@/app/portfolio/data/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ayushpaul.dev";

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  // Dynamic blog post routes
  let blogRoutes: MetadataRoute.Sitemap = [];

  try {
    const contentDir = path.join(process.cwd(), "content");
    if (fs.existsSync(contentDir)) {
      const blogPosts = fs
        .readdirSync(contentDir)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => file.replace(".mdx", ""));

      blogRoutes = blogPosts.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error("Error generating blog routes for sitemap:", error);
  }

  // Dynamic portfolio routes
  const portfolioRoutes: MetadataRoute.Sitemap = portfolioWorks.map((work) => ({
    url: `${baseUrl}/portfolio/${work.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...portfolioRoutes];
}
