import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import SectionLabel from "@/components/sections/SectionLabel"

export const metadata: Metadata = {
  title: "Commercial Cleaning Services | Flores Clean GTA",
  description:
    "Flores Clean provides professional commercial cleaning services across the GTA — offices, medical facilities, retail spaces, post-construction cleanup, floor care, and janitorial supply management. ISSA CIMS-GB certified.",
}

// Service icons
const serviceIcons: Record<string, React.ReactNode> = {
  "office-workspace-cleaning": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  "medical-dental-cleaning": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  "retail-showroom-cleaning": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  ),
  "post-construction-cleanup": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  "floor-care-maintenance": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <line x1="3" y1="9" x2="21" y2="9"/>
      <line x1="3" y1="15" x2="21" y2="15"/>
      <line x1="9" y1="3" x2="9" y2="21"/>
      <line x1="15" y1="3" x2="15" y2="21"/>
    </svg>
  ),
  "janitorial-supply-management": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  ),
}

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="relative py-20 lg:py-28 px-4 overflow-hidden"
        style={{ background: "oklch(0.07 0 0)" }}
      >
        <div className="absolute inset-0 geometric-pattern opacity-20" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top right, oklch(0.65 0.12 195 / 0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto">
          <SectionLabel>Commercial Cleaning — York Region &amp; GTA</SectionLabel>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-800 tracking-[-0.035em] leading-[1.05] mb-5 max-w-3xl"
            style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
          >
            Every service built for commercial facilities.
          </h1>
          <p
            className="text-base lg:text-lg leading-[1.7] max-w-2xl mb-8"
            style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
          >
            Flores Clean is a commercial-only cleaning company. Every service we offer is designed specifically for business environments — offices, health facilities, retail spaces, and construction sites. Not homes, not generic multi-purpose cleaning. Specialized, professional, accountable.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] active:scale-[0.97] btn-teal"
          >
            Request a Quote
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Services list */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.09 0 0)", borderTop: "1px solid oklch(0.22 0.01 252 / 0.35)" }}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          {siteConfig.services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col lg:flex-row gap-6 p-6 lg:p-8 rounded-xl hover-border-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
              style={{
                background: "oklch(0.10 0 0)",
                border: "1px solid oklch(0.22 0.01 252 / 0.55)",
                display: "flex",
              }}
            >
              {/* Number + icon */}
              <div className="flex items-start gap-4 lg:w-16 lg:flex-col lg:items-center lg:gap-3 flex-shrink-0">
                <span
                  className="text-xs font-700 tracking-widest"
                  style={{ color: "oklch(0.35 0 0)", fontFamily: "var(--font-heading)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ color: "oklch(0.65 0.12 195)" }}>
                  {serviceIcons[s.slug]}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2
                  className="text-xl font-700 tracking-[-0.025em] mb-3"
                  style={{ color: "oklch(0.93 0 0)", fontFamily: "var(--font-heading)" }}
                >
                  {s.name}
                </h2>
                <p
                  className="text-sm leading-[1.7] mb-4"
                  style={{ color: "oklch(0.58 0 0)", fontFamily: "var(--font-body)" }}
                >
                  {s.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5"
                  style={{
                    color: "oklch(0.65 0.12 195)",
                    fontFamily: "var(--font-heading)",
                    transition: "gap 150ms",
                  }}
                >
                  View full details
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>

              {/* Preview image */}
              <div
                className="hidden lg:block relative rounded-lg overflow-hidden hover-img-zoom flex-shrink-0"
                style={{ width: "200px", aspectRatio: "4/3" }}
              >
                <Image
                  src="https://placehold.co/400x300/0a0a0a/181818"
                  alt={`${s.name} — commercial cleaning in the GTA`}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, oklch(0.10 0 0 / 0.20), transparent)" }}
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Certifications callout */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.07 0 0)", borderTop: "1px solid oklch(0.22 0.01 252 / 0.30)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em] mb-3"
            style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
          >
            Credentials &amp; Standards
          </p>
          <h2
            className="text-2xl lg:text-3xl font-700 tracking-[-0.03em] mb-4"
            style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
          >
            Every job backed by professional credentials.
          </h2>
          <p
            className="text-sm leading-[1.7] mb-10 max-w-xl mx-auto"
            style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
          >
            Flores Clean is ISSA CIMS-GB certified (Green Building standard), fully insured, WSIB covered, and all staff are bonded and background-checked. These aren&apos;t checkboxes — they&apos;re the baseline expectation for working in professional commercial environments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {["ISSA CIMS-GB Certified", "Fully Insured & Bonded", "WSIB Covered", "Background-Checked Staff", "7 Years GTA Experience"].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: "oklch(0.12 0 0)",
                  border: "1px solid oklch(0.65 0.12 195 / 0.25)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "oklch(0.65 0.12 195)" }}
                  aria-hidden="true"
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: "oklch(0.75 0 0)", fontFamily: "var(--font-body)" }}
                >
                  {badge}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] active:scale-[0.97] btn-teal"
          >
            Request a Quote for Your Facility
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
