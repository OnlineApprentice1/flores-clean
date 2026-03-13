"use client"

import Link from "next/link"

export default function BottomCTABar() {
  return (
    <section
      aria-label="Ready to elevate your facility"
      className="relative overflow-hidden"
      style={{
        background: "oklch(0.10 0 0)",
        borderTop: "1px solid oklch(0.65 0.12 195 / 0.20)",
      }}
    >
      {/* Subtle teal glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, oklch(0.65 0.12 195 / 0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
          >
            Commercial Cleaning — GTA
          </p>
          <h2
            className="text-xl lg:text-2xl font-700 tracking-[-0.03em]"
            style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
          >
            Ready to elevate your facility?
          </h2>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-[background-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.10_0_0)] focus-visible:ring-[oklch(0.65_0.12_195)] active:scale-[0.97]"
            style={{
              background: "oklch(0.65 0.12 195)",
              color: "oklch(0.07 0 0)",
              fontFamily: "var(--font-heading)",
              letterSpacing: "-0.01em",
              boxShadow: "0 0 24px oklch(0.65 0.12 195 / 0.30)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "oklch(0.72 0.12 195)"
              e.currentTarget.style.boxShadow = "0 0 32px oklch(0.65 0.12 195 / 0.45)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "oklch(0.65 0.12 195)"
              e.currentTarget.style.boxShadow = "0 0 24px oklch(0.65 0.12 195 / 0.30)"
            }}
          >
            Get a Quote
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
