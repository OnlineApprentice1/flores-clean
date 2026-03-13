import { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"
import { getAllPosts } from "@/lib/posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const now = new Date()

  const pages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
  ]

  if (siteConfig.pages.services)
    pages.push({ url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 })
  if (siteConfig.pages.about)
    pages.push({ url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 })
  if (siteConfig.pages.faq)
    pages.push({ url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 })
  if (siteConfig.pages.contact)
    pages.push({ url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 })
  if (siteConfig.pages.blog)
    pages.push({ url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 })

  // Service detail pages
  for (const s of siteConfig.services) {
    pages.push({ url: `${base}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.85 })
  }

  // Privacy
  pages.push({ url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 })

  // Blog posts
  if (siteConfig.pages.blog) {
    for (const post of getAllPosts()) {
      pages.push({
        url: `${base}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.5,
      })
    }
  }

  return pages
}
