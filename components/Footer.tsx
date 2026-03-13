"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"

// Social icon components
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 10.78 19.79 19.79 0 01.34 2.18 2 2 0 012.32 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.76a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

const serviceAreas = siteConfig.serviceArea.split(", ")

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: "oklch(0.05 0 0)",
        borderTop: "1px solid oklch(0.65 0.12 195 / 0.15)",
      }}
    >
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 — Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          {/* Text logo */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="block w-[5px] h-5 rounded-full flex-shrink-0"
              style={{ background: "oklch(0.65 0.12 195)" }}
              aria-hidden="true"
            />
            <span
              className="font-[family-name:var(--font-heading)] font-700 text-lg tracking-[-0.03em]"
              style={{ color: "oklch(0.96 0 0)" }}
            >
              Flores{" "}
              <span style={{ color: "oklch(0.65 0.12 195)" }}>Clean</span>
            </span>
          </div>

          <p
            className="text-sm leading-relaxed mb-5"
            style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
          >
            Commercial cleaning specialists for GTA businesses. Bonded, insured, and ISSA CIMS-GB certified.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Flores Clean on LinkedIn"
                className="flex items-center justify-center w-9 h-9 rounded-md transition-[background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                style={{ color: "oklch(0.55 0 0)", background: "oklch(0.12 0 0)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "oklch(0.65 0.12 195)"
                  e.currentTarget.style.background = "oklch(0.65 0.12 195 / 0.12)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "oklch(0.55 0 0)"
                  e.currentTarget.style.background = "oklch(0.12 0 0)"
                }}
              >
                <LinkedInIcon />
              </a>
            )}
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Flores Clean on Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-md transition-[background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                style={{ color: "oklch(0.55 0 0)", background: "oklch(0.12 0 0)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "oklch(0.65 0.12 195)"
                  e.currentTarget.style.background = "oklch(0.65 0.12 195 / 0.12)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "oklch(0.55 0 0)"
                  e.currentTarget.style.background = "oklch(0.12 0 0)"
                }}
              >
                <InstagramIcon />
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Flores Clean on Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-md transition-[background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                style={{ color: "oklch(0.55 0 0)", background: "oklch(0.12 0 0)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "oklch(0.65 0.12 195)"
                  e.currentTarget.style.background = "oklch(0.65 0.12 195 / 0.12)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "oklch(0.55 0 0)"
                  e.currentTarget.style.background = "oklch(0.12 0 0)"
                }}
              >
                <FacebookIcon />
              </a>
            )}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              color: "oklch(0.65 0.12 195)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { label: "Home", href: "/" },
              ...(siteConfig.pages.services ? [{ label: "Services", href: "/services" }] : []),
              ...(siteConfig.pages.about ? [{ label: "About Us", href: "/about" }] : []),
              ...(siteConfig.pages.faq ? [{ label: "FAQ", href: "/faq" }] : []),
              ...(siteConfig.pages.contact ? [{ label: "Contact", href: "/contact" }] : []),
              { label: "Privacy Policy", href: "/privacy" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                  style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.96 0 0)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.60 0 0)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Service Area */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              color: "oklch(0.65 0.12 195)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Service Area
          </h3>
          <ul className="space-y-2">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="text-sm"
                style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
              >
                {area}
              </li>
            ))}
          </ul>
          <p
            className="text-xs mt-4 leading-relaxed"
            style={{ color: "oklch(0.45 0 0)", fontFamily: "var(--font-body)" }}
          >
            Serving York Region and Greater Toronto Area businesses.
          </p>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              color: "oklch(0.65 0.12 195)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Contact
          </h3>
          <address className="not-italic space-y-3">
            <div className="flex items-start gap-2.5">
              <span style={{ color: "oklch(0.55 0 0)" }}><MapPinIcon /></span>
              <span
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
              >
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postal}
              </span>
            </div>
            {siteConfig.phone && (
              <div className="flex items-center gap-2.5">
                <span style={{ color: "oklch(0.55 0 0)" }}><PhoneIcon /></span>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                  style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.96 0 0)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.60 0 0)")}
                >
                  {siteConfig.phone}
                </a>
              </div>
            )}
            {siteConfig.email && (
              <div className="flex items-center gap-2.5">
                <span style={{ color: "oklch(0.55 0 0)" }}><MailIcon /></span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                  style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.96 0 0)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.60 0 0)")}
                >
                  {siteConfig.email}
                </a>
              </div>
            )}
            <div className="pt-2">
              <p
                className="text-xs leading-relaxed"
                style={{ color: "oklch(0.45 0 0)", fontFamily: "var(--font-body)" }}
              >
                {siteConfig.hours.display}
              </p>
            </div>
          </address>
        </div>
      </div>

      {/* Trust badges bar */}
      <div
        className="border-t border-b"
        style={{
          borderColor: "oklch(0.22 0.01 252 / 0.6)",
          background: "oklch(0.07 0 0)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              "ISSA CIMS-GB Certified",
              "Fully Insured",
              "WSIB Covered",
              "Bonded Staff",
              "Background-Checked Employees",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "oklch(0.65 0.12 195)" }}
                  aria-hidden="true"
                />
                <span
                  className="text-xs font-medium tracking-wide"
                  style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-heading)" }}
                >
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar — copyright */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: "oklch(0.40 0 0)", fontFamily: "var(--font-body)" }}
          >
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs transition-colors duration-150 focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
            style={{ color: "oklch(0.40 0 0)", fontFamily: "var(--font-body)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.65 0.12 195)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.40 0 0)")}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
