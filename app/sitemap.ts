import type { MetadataRoute } from "next";

import { posts } from "./data/posts";
import { properties } from "./data/properties";
import { site } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url },
    { url: `${site.url}/blog` },
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: post.date,
    })),
    ...properties.map((property) => ({
      url: `${site.url}/property/${property.id}`,
    })),
  ];
}
