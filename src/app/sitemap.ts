import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://innerspace.nz/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://innerspace.nz/projects",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://innerspace.nz/projects/lombok-surf-school",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://innerspace.nz/projects/stirling-stone",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://innerspace.nz/about-us",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://innerspace.nz/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
