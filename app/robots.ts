import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(portfolio.siteUrl
      ? { sitemap: new URL("/sitemap.xml", portfolio.siteUrl).href }
      : {}),
  };
}
