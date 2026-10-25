import type { MetadataRoute } from "next";

import { posts } from "./data/posts";
import { site } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url },
    { url: `${site.url}/shindan` },
    { url: `${site.url}/blog` },
    { url: `${site.url}/privacy` },
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
