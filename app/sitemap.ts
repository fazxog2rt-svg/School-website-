import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ["", "#paket", "#fitur", "#cara-order", "#testimoni", "#faq"];

  return sections.map((section) => ({
    url: `${siteConfig.url}/${section}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: section === "" ? 1 : 0.8,
  }));
}
