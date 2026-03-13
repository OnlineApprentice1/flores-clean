import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import SectionLabel from "@/components/sections/SectionLabel"
import CommercialContactForm from "@/components/CommercialContactForm"

export const metadata: Metadata = {
  title: "Contact Flores Clean | Request a Commercial Cleaning Quote — GTA",
  description:
    "Request a quote or get in touch with the Flores Clean team. Commercial cleaning specialists serving Vaughan, Thornhill, Richmond Hill, Markham, North York, and Mississauga. Mon–Fri 6AM–10PM, Sat 7AM–5PM.",
}

const infoItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 10.78 19.79 19.79 0 01.34 2.18 2 2 0 012.32 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.76a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    sub: "Same-day response for urgent needs",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    sub: "We respond within one business day",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Office",
    value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.province} ${siteConfig.address.postal}`,
    href: null,
    sub: "York Region, Ontario",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Hours",
    value: siteConfig.hours.display,
    href: null,
    sub: "Closed Sundays and statutory holidays",
  },
]

const serviceAreas = siteConfig.serviceArea.split(", ")

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="relative py-16 lg:py-20 px-4 overflow-hidden"
        style={{ background: "oklch(0.07 0 0)" }}
      >
        <div className="absolute inset-0 geometric-pattern opacity-20" aria-hidden="true" />
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top left, oklch(0.65 0.12 195 / 0.06) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto">
          <SectionLabel>Get a Quote</SectionLabel>
          <h1
            className="text-4xl md:text-5xl font-800 tracking-[-0.035em] leading-[1.05] mb-4"
            style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
          >
            Let&apos;s talk about your facility.
          </h1>
          <p
            className="text-base leading-[1.7] max-w-xl"
            style={{ color: "oklch(0.58 0 0)", fontFamily: "var(--font-body)" }}
          >
            Tell us about your business and cleaning requirements. We&apos;ll review your inquiry and respond with a tailored proposal within one business day. No pressure, no generic quoting.
          </p>
        </div>
      </section>

      {/* Main content — form + info */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.09 0 0)", borderTop: "1px solid oklch(0.22 0.01 252 / 0.35)" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_380px] gap-12 items-start">

          {/* Form */}
          <div>
            <CommercialContactForm />
          </div>

          {/* Info sidebar */}
          <div className="space-y-5">
            {/* Contact details */}
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: "oklch(0.10 0 0)",
                  border: "1px solid oklch(0.22 0.01 252 / 0.50)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.65 0.12 195 / 0.12)", color: "oklch(0.65 0.12 195)" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.10em] mb-0.5"
                    style={{ color: "oklch(0.42 0 0)", fontFamily: "var(--font-heading)" }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] hover:[color:oklch(0.65_0.12_195)]"
                      style={{ color: "oklch(0.80 0 0)", fontFamily: "var(--font-body)" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.75 0 0)", fontFamily: "var(--font-body)" }}
                    >
                      {item.value}
                    </p>
                  )}
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "oklch(0.42 0 0)", fontFamily: "var(--font-body)" }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}

            {/* Service area */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: "oklch(0.10 0 0)",
                border: "1px solid oklch(0.22 0.01 252 / 0.50)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.10em] mb-3"
                style={{ color: "oklch(0.42 0 0)", fontFamily: "var(--font-heading)" }}
              >
                Service Coverage
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "oklch(0.65 0.12 195 / 0.10)",
                      border: "1px solid oklch(0.65 0.12 195 / 0.20)",
                      color: "oklch(0.65 0.12 195)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p
                className="text-xs mt-3"
                style={{ color: "oklch(0.42 0 0)", fontFamily: "var(--font-body)" }}
              >
                York Region &amp; Greater Toronto Area
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
