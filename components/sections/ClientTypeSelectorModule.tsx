"use client"

// ClientTypeSelectorModule — SIGNATURE MOVE
// Visitors click their facility type and see tailored messaging.
// This is distinctly different from a standard services grid.

import { useState } from "react"
import Link from "next/link"

const clientTypes = [
  {
    id: "office",
    label: "Office & Workspace",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    headline: "A cleaner office means a more productive team.",
    body: "We handle daily, weekly, or bi-weekly office cleaning so your staff walks into a professional environment every morning. Workstations, boardrooms, lobbies, kitchens, and washrooms — all covered under a single managed account. Your dedicated account manager tracks every detail so nothing slips.",
    services: ["Office & Workspace Cleaning", "Floor Care & Maintenance", "Janitorial Supply Management"],
    slug: "office-workspace-cleaning",
    imageSrc: "https://placehold.co/600x400/0a0a0a/1a1a1a",
    imageAlt: "Clean modern office workspace in the GTA",
  },
  {
    id: "medical",
    label: "Medical & Dental",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    headline: "Compliance-aware cleaning for health facilities.",
    body: "Medical and dental facilities require disinfection protocols that go far beyond standard commercial cleaning. Our team follows health facility cleaning standards — treatment rooms, waiting areas, washrooms, and high-touch surfaces. ISSA CIMS-GB certified with full insurance and bonded staff — the credentials your facility manager requires.",
    services: ["Medical & Dental Facility Cleaning", "Janitorial Supply Management"],
    slug: "medical-dental-cleaning",
    imageSrc: "https://placehold.co/600x400/0a0a0a/1a2020",
    imageAlt: "Clean medical clinic waiting room",
  },
  {
    id: "retail",
    label: "Retail & Showroom",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    headline: "Your storefront is your brand. Keep it immaculate.",
    body: "Retail spaces and showrooms see constant foot traffic and customer eyes on every surface. We provide presentation-grade cleaning before open and after close, with schedule flexibility around your hours. Floor care, window sills, display surfaces, fitting rooms, and washrooms — all maintained to a standard that reflects your brand.",
    services: ["Retail & Showroom Cleaning", "Floor Care & Maintenance"],
    slug: "retail-showroom-cleaning",
    imageSrc: "https://placehold.co/600x400/0a0a0a/1a1814",
    imageAlt: "Spotless retail showroom floor and displays",
  },
  {
    id: "construction",
    label: "Post-Construction",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    headline: "Construction is done. We handle what comes next.",
    body: "Post-construction sites are a different kind of challenge — drywall dust, debris, adhesive residue, and construction-grade mess on every surface. Our post-construction cleanup crews are equipped and experienced for this specific scope. We get your space move-in ready, professionally and efficiently.",
    services: ["Post-Construction Cleanup", "Floor Care & Maintenance"],
    slug: "post-construction-cleanup",
    imageSrc: "https://placehold.co/600x400/0d0a0a/201414",
    imageAlt: "Commercial space being prepared after construction cleanup",
  },
]

export default function ClientTypeSelectorModule() {
  const [activeId, setActiveId] = useState<string>("office")
  const active = clientTypes.find((c) => c.id === activeId)!

  return (
    <section
      aria-label="Find services for your facility type"
      className="py-20 px-4"
      style={{ background: "oklch(0.08 0 0)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] mb-3"
            style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
          >
            <span className="w-5 h-px" style={{ background: "oklch(0.65 0.12 195)" }} aria-hidden="true" />
            Tailored to Your Facility
          </p>
          <h2
            className="text-3xl md:text-4xl font-700 tracking-[-0.03em] max-w-xl"
            style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
          >
            What type of facility do you manage?
          </h2>
        </div>

        {/* Selector tabs — 4 clickable type cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10" role="tablist" aria-label="Facility type selector">
          {clientTypes.map((type) => {
            const isActive = activeId === type.id
            return (
              <button
                key={type.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${type.id}`}
                id={`tab-${type.id}`}
                onClick={() => setActiveId(type.id)}
                className="flex flex-col items-start gap-3 p-4 rounded-lg text-left transition-[border-color,background-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                style={{
                  background: isActive ? "oklch(0.65 0.12 195 / 0.10)" : "oklch(0.12 0 0)",
                  border: isActive
                    ? "1px solid oklch(0.65 0.12 195 / 0.40)"
                    : "1px solid oklch(0.22 0.01 252 / 0.5)",
                  boxShadow: isActive ? "0 0 20px oklch(0.65 0.12 195 / 0.08)" : "none",
                }}
              >
                <span
                  style={{
                    color: isActive ? "oklch(0.65 0.12 195)" : "oklch(0.45 0 0)",
                    transition: "color 200ms",
                  }}
                >
                  {type.icon}
                </span>
                <span
                  className="text-sm font-semibold leading-tight"
                  style={{
                    color: isActive ? "oklch(0.92 0 0)" : "oklch(0.60 0 0)",
                    fontFamily: "var(--font-heading)",
                    letterSpacing: "-0.01em",
                    transition: "color 200ms",
                  }}
                >
                  {type.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active panel */}
        <div
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          {/* Text side */}
          <div>
            <h3
              className="text-2xl font-700 tracking-[-0.025em] mb-4"
              style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
            >
              {active.headline}
            </h3>
            <p
              className="text-sm leading-[1.7] mb-6"
              style={{ color: "oklch(0.65 0 0)", fontFamily: "var(--font-body)" }}
            >
              {active.body}
            </p>

            {/* Services included */}
            <div className="mb-8">
              <p
                className="text-xs font-semibold uppercase tracking-[0.12em] mb-3"
                style={{ color: "oklch(0.45 0 0)", fontFamily: "var(--font-heading)" }}
              >
                Services for this facility type
              </p>
              <ul className="space-y-2">
                {active.services.map((s) => (
                  <li key={s} className="flex items-center gap-2.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "oklch(0.65 0.12 195)" }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.75 0 0)", fontFamily: "var(--font-body)" }}
                    >
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/services/${active.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-[background-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] active:scale-[0.97]"
              style={{
                background: "oklch(0.65 0.12 195)",
                color: "oklch(0.07 0 0)",
                fontFamily: "var(--font-heading)",
                letterSpacing: "-0.01em",
                boxShadow: "0 0 20px oklch(0.65 0.12 195 / 0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "oklch(0.72 0.12 195)"
                e.currentTarget.style.boxShadow = "0 0 28px oklch(0.65 0.12 195 / 0.40)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "oklch(0.65 0.12 195)"
                e.currentTarget.style.boxShadow = "0 0 20px oklch(0.65 0.12 195 / 0.25)"
              }}
            >
              View {active.label} Services
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Image side */}
          <div
            className="relative rounded-lg overflow-hidden aspect-[3/2]"
            style={{ border: "1px solid oklch(0.65 0.12 195 / 0.12)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.imageSrc}
              alt={active.imageAlt}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, oklch(0.07 0 0 / 0.50) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
            {/* Teal corner mark */}
            <div
              className="absolute top-0 left-0 w-10 h-1"
              style={{ background: "oklch(0.65 0.12 195)" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
