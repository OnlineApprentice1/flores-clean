import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function HomePage() {
  return (
    <>
      {/* Hero — Phase 2 brands, Phase 3 writes final copy */}
      <section className="min-h-[70dvh] flex items-center justify-center bg-base-200 px-4">
        <div className="text-center max-w-3xl">
          {siteConfig.serviceArea && (
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
              {siteConfig.serviceArea}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {siteConfig.tagline || siteConfig.name || "Welcome"}
          </h1>
          <p className="py-6 text-lg text-base-content/70 max-w-xl mx-auto leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get a Free Quote
            </Link>
            {siteConfig.phone && (
              <a href={`tel:${siteConfig.phone}`} className="btn btn-outline btn-lg">
                {siteConfig.phone}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Services — renders only when services are configured */}
      {siteConfig.services.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="card bg-base-100 border border-base-300 hover:border-primary/30 hover:shadow-lg transition-[border-color,box-shadow] duration-200"
                >
                  <div className="card-body">
                    <h3 className="card-title text-lg">{s.name}</h3>
                    <p className="text-base-content/70 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-content">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 mb-8 opacity-80">
            Contact us today for a free, no-obligation quote.
          </p>
          <Link href="/contact" className="btn btn-lg bg-primary-content text-primary hover:bg-primary-content/90 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
