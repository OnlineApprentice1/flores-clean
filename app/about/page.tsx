import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — who we are, our history, and why clients trust us.`,
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">About {siteConfig.name}</h1>
      <p className="text-lg text-base-content/60 leading-relaxed mb-12">
        {siteConfig.description}
      </p>

      {/* Phase 3 fills with founding story, owner background, values, certifications */}

      <div className="text-center mt-16">
        <Link href="/contact" className="btn btn-primary btn-lg">
          Work With Us
        </Link>
      </div>
    </div>
  )
}
