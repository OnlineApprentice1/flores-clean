import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import FAQAccordion from "@/components/sections/FAQAccordion"
import SectionLabel from "@/components/sections/SectionLabel"

export const metadata: Metadata = {
  title: "FAQ — Commercial Cleaning Questions | Flores Clean GTA",
  description:
    "Frequently asked questions about Flores Clean's commercial cleaning services — scheduling, bonding, insurance, green cleaning, pricing, and more. Serving Vaughan, Thornhill, Richmond Hill, Markham, North York, and Mississauga.",
}

const faqs = [
  {
    q: "Do you serve residential clients?",
    a: "No — Flores Clean is exclusively a commercial cleaning company. We do not take residential or household cleaning clients. Every aspect of our operation is designed for business environments: offices, medical and dental facilities, retail spaces, and post-construction sites. This focus is intentional and allows us to maintain a higher standard of commercial service.",
  },
  {
    q: "How does your dedicated account manager model work?",
    a: "Every Flores Clean client is assigned a single account manager who is responsible for your account. Your account manager coordinates your cleaning schedule, handles any change requests, responds to issues, and conducts periodic quality reviews of your service. You will never need to call a general number and re-explain your requirements to a different person each time. This model is one of the core reasons clients stay with us long term.",
  },
  {
    q: "Are your employees bonded and background-checked?",
    a: "Yes — all Flores Clean staff are bonded and background-checked as a condition of employment. This is not optional or selective. Staff working in offices, medical facilities, retail spaces, and construction sites have access to sensitive environments and client property. Bonding and background checks are the baseline standard we hold to for every employee, every time.",
  },
  {
    q: "What does your ISSA CIMS-GB certification mean?",
    a: "ISSA CIMS-GB stands for the Cleaning Industry Management Standard — Green Building. It is one of the most recognized credentials in professional commercial cleaning management, certifying that a cleaning organization operates to a defined standard of management systems, quality, human resources, and environmental responsibility. For clients, it means we have been evaluated against an independent standard — not just a self-reported claim of quality.",
  },
  {
    q: "Can you accommodate our operating hours for cleaning schedules?",
    a: "Yes — scheduling flexibility is central to how we operate. Most of our clients prefer before-hours, after-hours, or weekend cleaning to avoid disrupting operations. We can work around virtually any business schedule. Your dedicated account manager designs your cleaning schedule around your hours and adjusts it as your operations change.",
  },
  {
    q: "Do you use green or environmentally-friendly cleaning products?",
    a: "Yes — green cleaning is the default for our service programs, consistent with our ISSA CIMS-GB certification. We use ECOLOGO-certified cleaning products where available. For medical and dental clients, clinical-grade disinfectants take priority over green alternatives where required for health facility standards, but we minimize environmental impact wherever cleaning protocols allow.",
  },
  {
    q: "How is pricing structured for commercial cleaning contracts?",
    a: "Pricing is based on facility type, square footage, cleaning frequency, and service scope. We do not publish flat-rate pricing for commercial work because a 10,000 sq ft medical facility and a 3,000 sq ft office suite require fundamentally different programs. Your account manager conducts a site assessment and provides a detailed proposal tailored to your facility. There is no obligation and no pressure — we want clients to sign contracts they understand.",
  },
  {
    q: "What areas do you serve?",
    a: "Flores Clean serves commercial clients across Vaughan, Thornhill, Richmond Hill, Markham, North York, and Mississauga. Our operations centre is located in Thornhill, Ontario. If your facility is in the GTA but not in one of these listed areas, contact us — we may be able to accommodate depending on location and contract scope.",
  },
  {
    q: "How quickly can you respond to urgent cleaning requests?",
    a: "We guarantee same-day response for urgent cleaning requests from active clients. If there is a spill, an unexpected mess before a client meeting, or a post-event cleanup needed on short notice, your account manager is your direct point of contact. Urgent requests from non-clients are handled based on availability.",
  },
  {
    q: "What is included in your janitorial supply management service?",
    a: "Janitorial supply management is available as an add-on to any cleaning service contract. It covers monitoring and restocking of consumables including paper towels, toilet tissue, hand soap, hand sanitizer, waste liners, and facility-specific items. Your account manager tracks usage and ensures stock is replenished during regular cleaning visits — eliminating separate ordering and emergency purchasing.",
  },
]

// FAQPage JSON-LD schema
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Page header */}
      <section
        className="relative py-20 lg:py-24 px-4 overflow-hidden"
        style={{ background: "oklch(0.07 0 0)" }}
      >
        <div className="absolute inset-0 geometric-pattern opacity-20" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top right, oklch(0.65 0.12 195 / 0.06) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto">
          <SectionLabel>Common Questions</SectionLabel>
          <h1
            className="text-4xl md:text-5xl font-800 tracking-[-0.035em] leading-[1.05] mb-5"
            style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-base leading-[1.7] max-w-xl"
            style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
          >
            Commercial cleaning questions from facility managers, property managers, and business owners across the GTA. If your question isn&apos;t here, contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.09 0 0)", borderTop: "1px solid oklch(0.22 0.01 252 / 0.35)" }}
      >
        <div className="max-w-4xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Still have questions */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.07 0 0)", borderTop: "1px solid oklch(0.22 0.01 252 / 0.30)" }}
      >
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
          {/* Call */}
          <div
            className="flex items-start gap-4 p-6 rounded-xl"
            style={{
              background: "oklch(0.10 0 0)",
              border: "1px solid oklch(0.22 0.01 252 / 0.50)",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "oklch(0.65 0.12 195 / 0.12)", color: "oklch(0.65 0.12 195)" }}
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 10.78 19.79 19.79 0 01.34 2.18 2 2 0 012.32 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.76a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <p
                className="text-sm font-600 mb-1"
                style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
              >
                Call us directly
              </p>
              <p
                className="text-xs mb-3"
                style={{ color: "oklch(0.50 0 0)", fontFamily: "var(--font-body)" }}
              >
                {siteConfig.hours.display}
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-sm font-semibold hover-teal-bright focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div
            className="flex items-start gap-4 p-6 rounded-xl"
            style={{
              background: "oklch(0.10 0 0)",
              border: "1px solid oklch(0.22 0.01 252 / 0.50)",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "oklch(0.65 0.12 195 / 0.12)", color: "oklch(0.65 0.12 195)" }}
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <p
                className="text-sm font-600 mb-1"
                style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
              >
                Send us a message
              </p>
              <p
                className="text-xs mb-3"
                style={{ color: "oklch(0.50 0 0)", fontFamily: "var(--font-body)" }}
              >
                We respond within one business day
              </p>
              <Link
                href="/contact"
                className="text-sm font-semibold hover-teal-bright focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Go to Contact
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="inline ml-1" aria-hidden="true">
                  <path d="M2 5.5h7M5.5 2l3.5 3.5L5.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Also link to services */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <p
            className="text-xs mb-2"
            style={{ color: "oklch(0.40 0 0)", fontFamily: "var(--font-body)" }}
          >
            Looking for service details?
          </p>
          <Link
            href="/services"
            className="text-sm font-medium hover-teal focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Browse all commercial cleaning services →
          </Link>
        </div>
      </section>
    </>
  )
}
