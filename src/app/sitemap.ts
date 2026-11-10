import type { MetadataRoute } from "next";
import { localPages } from "@/lib/local-pages";
import { siteUrl } from "@/lib/site";

const pages: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services/", priority: 0.9 },
  { path: "/gallery/", priority: 0.8 },
  { path: "/about/", priority: 0.7 },
  { path: "/inquiry/", priority: 0.8 },
  ...localPages.map((page) => ({ path: page.path, priority: 0.6 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
