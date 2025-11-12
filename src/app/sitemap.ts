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
        .map((file) => {
          const slug = file.replace(".mdx", "");
          const filePath = path.join(contentDir, file);
          const stats = fs.statSync(filePath);

          return {
            slug,
            lastModified: stats.mtime,
          };
        })
        .sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());

      blogRoutes = blogPosts.map((post, index) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.lastModified,
        changeFrequency: "monthly" as const,
        priority: index < 3 ? 0.8 : index < 6 ? 0.75 : 0.7,
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
