import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { sitemapEntries } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries(SITE_URL);
}
