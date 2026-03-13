"use client"

import Link from "next/link"
import { useState } from "react"
import { siteConfig } from "@/config/site"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    ...(siteConfig.pages.services ? [{ label: "Services", href: "/services" }] : []),
    ...(siteConfig.pages.about ? [{ label: "About", href: "/about" }] : []),
    ...(siteConfig.pages.faq ? [{ label: "FAQ", href: "/faq" }] : []),
    ...(siteConfig.pages.contact ? [{ label: "Contact", href: "/contact" }] : []),
  ]

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "oklch(0.07 0 0 / 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid oklch(0.65 0.12 195 / 0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo — text mark */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Flores Clean — Home"
          >
            {/* Teal accent mark */}
            <span
              className="block w-[6px] h-6 rounded-full flex-shrink-0 transition-[transform,opacity] duration-200 group-hover:scale-y-125"
              style={{ background: "oklch(0.65 0.12 195)" }}
              aria-hidden="true"
            />
            <span
              className="font-[family-name:var(--font-heading)] font-700 text-xl lg:text-2xl tracking-[-0.03em] leading-none"
              style={{ color: "oklch(0.96 0 0)" }}
            >
              Flores{" "}
              <span style={{ color: "oklch(0.65 0.12 195)" }}>Clean</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] active:scale-95"
                style={{
                  color: "oklch(0.70 0 0)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "oklch(0.96 0 0)"
                  e.currentTarget.style.background = "oklch(0.96 0 0 / 0.06)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "oklch(0.70 0 0)"
                  e.currentTarget.style.background = "transparent"
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right — phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] focus-visible:rounded"
                style={{
                  color: "oklch(0.70 0 0)",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.96 0 0)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.70 0 0)")}
              >
                {siteConfig.phone}
              </a>
            )}
            {siteConfig.pages.contact && (
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-[background-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.07_0_0)] focus-visible:ring-[oklch(0.65_0.12_195)] active:scale-95"
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
                Get a Quote
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            )}
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phone}`}
                className="p-2 rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                aria-label={`Call ${siteConfig.phone}`}
                style={{ color: "oklch(0.65 0.12 195)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 10.78 19.79 19.79 0 01.34 2.18 2 2 0 012.32 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.76a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </a>
            )}
            <button
              type="button"
              className="p-2 rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
              style={{ color: "oklch(0.70 0 0)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.96 0 0)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.70 0 0)")}
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 6h18M3 12h18M3 18h18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden border-t"
          style={{
            background: "oklch(0.10 0 0)",
            borderColor: "oklch(0.65 0.12 195 / 0.12)",
          }}
        >
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-md text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                style={{ color: "oklch(0.80 0 0)", fontFamily: "var(--font-body)" }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "oklch(0.96 0 0)"
                  e.currentTarget.style.background = "oklch(0.96 0 0 / 0.06)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "oklch(0.80 0 0)"
                  e.currentTarget.style.background = "transparent"
                }}
              >
                {link.label}
              </Link>
            ))}
            {siteConfig.pages.contact && (
              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                style={{
                  background: "oklch(0.65 0.12 195)",
                  color: "oklch(0.07 0 0)",
                  fontFamily: "var(--font-heading)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
