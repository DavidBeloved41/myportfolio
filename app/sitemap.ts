import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/contact"];
  const pages = routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: "monthly" as const,
  }));
  const projectPages = projects.map((project) => ({
    url: new URL(`/projects/${project.slug}`, siteUrl).toString(),
    changeFrequency: "monthly" as const,
  }));

  return [...pages, ...projectPages];
}