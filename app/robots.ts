import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://faithetornam.com",
    sitemap: "https://faithetornam.com/sitemap.xml",
  };
}
