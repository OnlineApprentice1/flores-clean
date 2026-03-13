import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Services",
  description: `Explore the full range of services offered by ${siteConfig.name}.`,
}

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-base-content/60 mt-4 max-w-xl mx-auto leading-relaxed">
          {siteConfig.serviceArea && `${siteConfig.serviceArea}. `}
          We offer a full range of services to meet your needs.
        </p>
      </div>

      {siteConfig.services.length > 0 ? (
        <div className="space-y-6">
          {siteConfig.services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card bg-base-100 border border-base-300 hover:border-primary/30 hover:shadow-lg transition-[border-color,box-shadow] duration-200 block"
            >
              <div className="card-body">
                <h2 className="card-title text-xl">{s.name}</h2>
                <p className="text-base-content/70 leading-relaxed">{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-base-content/50 py-12">
          Services will be listed here once configured.
        </p>
      )}

      <div className="mt-16 text-center">
        <Link href="/contact" className="btn btn-primary btn-lg">
          Request a Quote
        </Link>
      </div>
    </div>
  )
}
