import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Blog",
  description: `Tips, guides, and updates from the team at ${siteConfig.name}.`,
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-base-content/60 mt-4">
          Tips, guides, and updates from the {siteConfig.name} team.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center text-base-content/50 py-20">
          No posts yet. Add <code>.md</code> files to <code>content/blog/</code> to get started.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card bg-base-100 border border-base-300 hover:shadow-md transition-shadow">
              <div className="card-body">
                <p className="text-sm text-base-content/50">{post.date}</p>
                <h2 className="card-title">{post.title}</h2>
                <p className="text-base-content/70 text-sm">{post.excerpt}</p>
                <div className="card-actions mt-2">
                  <span className="text-primary text-sm font-medium">Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
