"use client"

import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import TrustBar from "@/components/TrustBar"

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[75dvh] flex items-center overflow-hidden"
        style={{ background: "oklch(0.07 0 0)" }}
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://placehold.co/1440x900/0a0a0a/1a1a1a"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, oklch(0.07 0 0 / 0.97) 0%, oklch(0.07 0 0 / 0.80) 50%, oklch(0.07 0 0 / 0.55) 100%)",
            }}
          />
          {/* Subtle teal accent glow, bottom-left */}
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at bottom left, oklch(0.65 0.12 195 / 0.08) 0%, transparent 65%)",
            }}
          />
          {/* Geometric grid pattern */}
          <div
            className="absolute inset-0 geometric-pattern opacity-30"
            aria-hidden="true"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: headline + CTA */}
          <div>
            <p
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] mb-6"
              style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
            >
              <span
                className="w-6 h-px"
                style={{ background: "oklch(0.65 0.12 195)" }}
                aria-hidden="true"
              />
              {siteConfig.serviceArea.split(",")[0]} &amp; GTA
            </p>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-800 leading-[1.05] tracking-[-0.03em] mb-6"
              style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Commercial Cleaning.<br />
              <span style={{ color: "oklch(0.65 0.12 195)" }}>Done Right.</span>
            </h1>

            <p
              className="text-base lg:text-lg leading-[1.7] mb-8 max-w-md"
              style={{ color: "oklch(0.68 0 0)", fontFamily: "var(--font-body)" }}
            >
              Flores Clean is a commercial-only cleaning partner for GTA offices, medical facilities, retail spaces, and post-construction sites. Bonded, insured, and CIMS-GB certified.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold transition-[background-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.07_0_0)] active:scale-[0.97]"
                style={{
                  background: "oklch(0.65 0.12 195)",
                  color: "oklch(0.07 0 0)",
                  fontFamily: "var(--font-heading)",
                  letterSpacing: "-0.01em",
                  boxShadow: "0 0 28px oklch(0.65 0.12 195 / 0.30)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "oklch(0.72 0.12 195)"
                  e.currentTarget.style.boxShadow = "0 0 36px oklch(0.65 0.12 195 / 0.45)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "oklch(0.65 0.12 195)"
                  e.currentTarget.style.boxShadow = "0 0 28px oklch(0.65 0.12 195 / 0.30)"
                }}
              >
                Get a Quote
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              {siteConfig.phone && (
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-medium transition-[background-color,border-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] active:scale-[0.97]"
                  style={{
                    border: "1px solid oklch(0.65 0.12 195 / 0.30)",
                    color: "oklch(0.80 0 0)",
                    fontFamily: "var(--font-body)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.60)"
                    e.currentTarget.style.color = "oklch(0.96 0 0)"
                    e.currentTarget.style.background = "oklch(0.65 0.12 195 / 0.06)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.30)"
                    e.currentTarget.style.color = "oklch(0.80 0 0)"
                    e.currentTarget.style.background = "transparent"
                  }}
                >
                  {siteConfig.phone}
                </a>
              )}
            </div>
          </div>

          {/* Right: image placeholder */}
          <div className="hidden lg:block relative">
            <div
              className="relative rounded-lg overflow-hidden aspect-[4/3]"
              style={{ border: "1px solid oklch(0.65 0.12 195 / 0.15)" }}
            >
              <Image
                src="https://placehold.co/720x540/141414/2a2e35"
                alt="Commercial cleaning team at work"
                fill
                className="object-cover"
              />
              {/* Teal corner accent */}
              <div
                className="absolute top-0 left-0 w-12 h-1"
                style={{ background: "oklch(0.65 0.12 195)" }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ────────────────────────────────────────── */}
      <TrustBar />

      {/* ── Services overview ────────────────────────────────── */}
      {siteConfig.services.length > 0 && (
        <section className="py-20 px-4" style={{ background: "oklch(0.07 0 0)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p
                className="text-xs font-semibold uppercase tracking-[0.15em] mb-3"
                style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
              >
                What We Do
              </p>
              <h2
                className="text-3xl md:text-4xl font-700 tracking-[-0.03em]"
                style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
              >
                Commercial Services
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {siteConfig.services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group relative flex flex-col p-6 rounded-lg transition-[border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                  style={{
                    background: "oklch(0.10 0 0)",
                    border: "1px solid oklch(0.22 0.01 252 / 0.6)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.35)"
                    e.currentTarget.style.boxShadow = "0 4px 24px oklch(0.65 0.12 195 / 0.08)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.22 0.01 252 / 0.6)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  {/* Teal top border accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px rounded-t-lg transition-[opacity] duration-200 group-hover:opacity-100 opacity-0"
                    style={{ background: "linear-gradient(90deg, oklch(0.65 0.12 195 / 0.6), transparent)" }}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-base font-600 mb-2 tracking-[-0.015em]"
                    style={{ color: "oklch(0.92 0 0)", fontFamily: "var(--font-heading)" }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "oklch(0.58 0 0)", fontFamily: "var(--font-body)" }}
                  >
                    {s.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-xs font-medium mt-4 transition-[color] duration-150 group-hover:gap-2"
                    style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
                  >
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Credibility strip ────────────────────────────────── */}
      <section
        className="py-16 px-4"
        style={{
          background: "oklch(0.09 0 0)",
          borderTop: "1px solid oklch(0.22 0.01 252 / 0.4)",
          borderBottom: "1px solid oklch(0.22 0.01 252 / 0.4)",
        }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "7+", label: "Years in business" },
            { value: "22", label: "Professional staff" },
            { value: "6", label: "Service categories" },
            { value: "100%", label: "Commercial-only focus" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-3xl lg:text-4xl font-800 tracking-[-0.04em] mb-1"
                style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </p>
              <p
                className="text-sm"
                style={{ color: "oklch(0.55 0 0)", fontFamily: "var(--font-body)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
