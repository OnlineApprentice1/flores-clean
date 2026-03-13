import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = siteConfig.services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.name,
    description: `${service.description} — ${siteConfig.name}`,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = siteConfig.services.find((s) => s.slug === slug)
  if (!service) notFound()

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-4">
        <Link href="/services" className="text-sm text-base-content/50 hover:text-primary transition-colors">
          ← All Services
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6">{service.name}</h1>
      <p className="text-lg text-base-content/70 leading-relaxed mb-12">{service.description}</p>

      {/* Phase 3 expands with detailed content, process steps, FAQs, images */}

      <div className="mt-12 pt-8 border-t border-base-300">
        <Link href="/contact" className="btn btn-primary btn-lg">
          Get a Quote for {service.name}
        </Link>
      </div>
    </div>
  )
}
