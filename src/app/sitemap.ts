import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/ebooks";
import { blogPosts } from "@/data/blogPosts";

const SITE_URL = "https://jjangsaem.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const ebookPages = getAllSlugs().map((slug) => ({
    url: `${SITE_URL}/ebook/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/ebook`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...ebookPages,
    ...blogPages,
  ];
}
