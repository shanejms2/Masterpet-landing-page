import { NextResponse } from "next/server";
import { areaConfig } from "@/lib/areaConfig";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://www.masterpet.co.in";

/** Indexable static routes only (exclude noindex/private pages). */
const staticPages = [
  "",
  "privacy",
  "terms-and-conditions",
  "cancellation-policy",
  "return-policy",
  "contact",
  "kochi-pet-grooming",
  "blog",
  "blog/archive",
];

function getPageMeta(page: string) {
  if (page === "") {
    return { priority: "1.0", changefreq: "weekly" };
  }
  if (page === "blog") {
    return { priority: "0.9", changefreq: "daily" };
  }
  if (page.startsWith("blog/")) {
    return { priority: "0.7", changefreq: "weekly" };
  }
  if (page.startsWith("kochi-pet-grooming/")) {
    return { priority: "0.75", changefreq: "monthly" };
  }
  if (page === "kochi-pet-grooming") {
    return { priority: "0.85", changefreq: "weekly" };
  }
  return { priority: "0.8", changefreq: "monthly" };
}

export async function GET() {
  const areaUrls = areaConfig.map((area) => `kochi-pet-grooming/${area.slug}`);
  const blogUrls = getAllPosts().map((post) => `blog/${post.slug}`);
  const allPages = [...staticPages, ...areaUrls, ...blogUrls];
  const currentDate = new Date().toISOString().split("T")[0];

  const urls = allPages
    .map((page) => {
      const url = page === "" ? BASE_URL : `${BASE_URL}/${page}`;
      const { priority, changefreq } = getPageMeta(page);

      return `<url>
  <loc>${url}</loc>
  <lastmod>${currentDate}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
