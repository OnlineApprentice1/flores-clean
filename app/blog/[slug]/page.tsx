import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getPost, getAllPostSlugs, getPostMeta } from "@/lib/posts"
import { siteConfig } from "@/config/site"

// ISR — revalidate blog posts every hour without a full rebuild
export const revalidate = 3600

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostMeta(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      siteName: siteConfig.name,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="mb-4">
        <Link href="/blog" className="text-sm text-base-content/50 hover:text-primary transition-colors">
          ← Back to Blog
        </Link>
      </div>

      <p className="text-sm text-base-content/50 mb-2">{post.date}</p>
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}
