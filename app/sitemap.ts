import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  // An empty local sitemap is intentional until a real site URL is configured.
  return portfolio.siteUrl
    ? [
        {
          url: new URL("/", portfolio.siteUrl).href,
          changeFrequency: "monthly",
          priority: 1,
        },
      ]
    : [];
}
