import type { MetadataRoute } from "next";
import { DOC_NAV } from "@/content/navigation";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    ...DOC_NAV.map((item) => ({
      url: `${baseUrl}/docs/${item.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
