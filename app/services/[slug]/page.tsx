import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import SectionLabel from "@/components/sections/SectionLabel"

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = siteConfig.services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.name} | Commercial Cleaning — GTA`,
    description: `${service.description} Flores Clean serves offices, medical facilities, retail spaces, and construction sites across Vaughan, Thornhill, Richmond Hill, Markham, North York, and Mississauga.`,
  }
}

// ── Per-service content ────────────────────────────────────────────────────
type ServiceContent = {
  headline: string
  intro: string
  details: string
  process: { step: string; description: string }[]
  included: string[]
  faqs: { q: string; a: string }[]
  imageSrc: string
  imageAlt: string
}

const serviceContent: Record<string, ServiceContent> = {
  "office-workspace-cleaning": {
    headline: "A professional environment starts with a professionally maintained space.",
    intro:
      "Office environments accumulate dust, bacteria, and visible grime faster than most facility managers realize. Shared surfaces, kitchen areas, washrooms, and high-traffic lobbies are constant maintenance challenges. Our office cleaning programs are structured around your operations schedule — whether you need cleaning before the workday, after hours, or a midday refresh for client-facing areas.",
    details:
      "We assign a single dedicated account manager to your account who coordinates scheduling, handles special requests, and conducts periodic quality walkthroughs. You won't need to train a new contact or re-explain your standards repeatedly. Our office cleaning covers all workstation areas, boardrooms, reception and lobby zones, private offices, kitchens and break rooms, washrooms, and common areas. Green cleaning products are used by default — consistent with our ISSA CIMS-GB certification.",
    process: [
      { step: "Site Assessment", description: "We walk your facility to understand the scope, high-priority areas, and any special access or security requirements before beginning service." },
      { step: "Custom Schedule Setup", description: "Your account manager designs a cleaning frequency and scope that fits your occupancy patterns — daily for high-traffic areas, weekly or bi-weekly for lower-use zones." },
      { step: "Onboarding & Orientation", description: "Cleaning staff assigned to your account are oriented to your building's protocols, key holder procedures, and any specific client or tenant requirements." },
      { step: "Ongoing Service Delivery", description: "Regular cleaning on your agreed schedule, with your account manager available for adjustments, urgent requests, and periodic quality reviews." },
    ],
    included: [
      "Workstation and desk surface cleaning",
      "Boardroom and meeting room turnover",
      "Reception and lobby maintenance",
      "Kitchen and break room cleaning",
      "Washroom sanitation and restocking",
      "Waste and recycling removal",
      "Floor vacuuming and mopping",
      "Interior glass and partition cleaning",
      "Elevator and stairwell maintenance",
      "Green cleaning products (CIMS-GB standard)",
    ],
    faqs: [
      {
        q: "Can you work outside of business hours?",
        a: "Yes — most of our office clients prefer after-hours cleaning (evenings or early mornings) to avoid disrupting the workday. We can accommodate virtually any access schedule.",
      },
      {
        q: "How do you handle key access and building security?",
        a: "We work within your building's security protocols. Staff assigned to your account are background-checked and bonded. We can hold keys or fobs securely as part of a service agreement.",
      },
      {
        q: "Do you provide your own cleaning supplies and equipment?",
        a: "Yes — all cleaning products and equipment are supplied by our team. You can also add janitorial supply management to ensure consumables like paper products and soaps are stocked at all times.",
      },
    ],
    imageSrc: "https://placehold.co/1200x600/080808/141414",
    imageAlt: "Professional office workspace cleaned and organized in the GTA",
  },

  "medical-dental-cleaning": {
    headline: "Health facility cleaning demands a different level of protocol.",
    intro:
      "Medical and dental facilities operate under standards that standard commercial cleaning simply cannot meet. Cross-contamination risks, patient-facing surfaces, clinical equipment adjacencies, and regulatory expectations require a cleaning team with specific training, appropriate products, and documented procedures. Flores Clean's medical and dental cleaning programs are built on health facility cleaning standards — not modified from a generic commercial offering.",
    details:
      "Our ISSA CIMS-GB certification provides the foundational credential that facility managers and compliance teams look for. Every crew member assigned to a health facility account is specifically trained on clinical environment protocols, disinfection hierarchy, and the correct use of EPA-approved hospital-grade disinfectants. We clean treatment rooms, clinical workstations, waiting areas, reception desks, washrooms, and all high-touch surfaces using a defined protocol rather than a general sweep approach.",
    process: [
      { step: "Compliance Review", description: "We review your facility type and any specific regulatory requirements before designing your cleaning program. Medical and dental facilities have distinct needs." },
      { step: "Protocol Assignment", description: "Crew members assigned to your account are selected based on health facility training, then oriented to your specific layout, infection control zones, and access procedures." },
      { step: "Disinfection-First Service", description: "Each visit prioritizes high-touch and patient-contact surfaces using hospital-grade disinfectants, with documented cleaning order to prevent cross-contamination." },
      { step: "Account Manager Oversight", description: "Your account manager conducts periodic reviews and is available for any adjustments required by new regulatory requirements or facility changes." },
    ],
    included: [
      "Treatment room and clinical area cleaning",
      "Waiting room and reception disinfection",
      "High-touch surface protocol (door handles, rails, switches)",
      "Washroom sanitation to health facility standard",
      "Medical waste staging area maintenance",
      "Administrative office and staff area cleaning",
      "Floor care (clinical and non-clinical areas)",
      "Hospital-grade disinfectants",
      "Documented cleaning procedures",
      "Fully bonded and background-checked staff",
    ],
    faqs: [
      {
        q: "Are your staff trained specifically for medical environments?",
        a: "Yes — crew members assigned to health facility accounts receive training on clinical cleaning protocols, disinfection hierarchies, and cross-contamination prevention. This is not a standard commercial cleaning crew.",
      },
      {
        q: "What disinfectants do you use in clinical areas?",
        a: "We use EPA-approved hospital-grade disinfectants appropriate for health facility environments. Product selection is reviewed against your facility type and any existing infection control policies.",
      },
      {
        q: "Can you accommodate early morning cleaning before patients arrive?",
        a: "Yes — most of our health facility clients prefer pre-opening service. We can work around clinic hours to ensure the space is prepared before the first patient arrives.",
      },
    ],
    imageSrc: "https://placehold.co/1200x600/050a0a/0e1818",
    imageAlt: "Clean and disinfected medical clinic waiting area",
  },

  "retail-showroom-cleaning": {
    headline: "Your retail space is your brand's first impression.",
    intro:
      "Retail stores and showrooms exist to be seen. Customers and clients form impressions the moment they step in — scuffed floors, dusty displays, smudged glass, and stale air all communicate before a salesperson says a word. Our retail and showroom cleaning programs are designed around presentation, not just hygiene.",
    details:
      "Flores Clean's retail cleaning service is schedule-flexible to work around your store hours, deliveries, and floor reset requirements. We can clean before opening, after closing, or during quieter periods — coordinated by your dedicated account manager. Detail cleaning of display surfaces, product shelving, fixtures, and customer-facing areas is part of every visit. Floor care — including polishing, buffing, and wet mopping — is included or available as a standalone service tier.",
    process: [
      { step: "Store Walkthrough", description: "We assess your layout, customer flow patterns, display areas, back-of-house requirements, and any vendor or franchise cleaning standards you need to meet." },
      { step: "Schedule & Scope Design", description: "Your cleaning program is built around your opening hours and floor activity — ensuring no disruption to sales operations or customer experience." },
      { step: "Presentation-Grade Cleaning", description: "Each visit addresses customer-facing areas first — floors, display surfaces, fixtures, fitting rooms, glass, and entry zones — before moving to back-of-house and washrooms." },
      { step: "Floor Care Integration", description: "Ongoing floor care (polishing, buffing, scrubbing) is scheduled as part of your service rotation to maintain commercial floor appearance." },
    ],
    included: [
      "Sales floor and display area cleaning",
      "Product shelving and fixture dusting",
      "Entry and vestibule maintenance",
      "Interior glass and storefront window cleaning",
      "Fitting room and changing area cleaning",
      "Customer washroom sanitation",
      "Floor vacuuming, mopping, and polishing",
      "Back-of-house and stockroom cleaning",
      "Checkout counter and POS area disinfection",
      "Waste and recycling removal",
    ],
    faqs: [
      {
        q: "Can you work around seasonal retail hours changes?",
        a: "Yes — your account manager coordinates scheduling adjustments as your hours change. Holiday seasons, extended hours, and special events can all be accommodated with advance notice.",
      },
      {
        q: "Do you clean display merchandise or product?",
        a: "We clean around merchandise and display fixtures but do not handle product items directly. Surfaces, shelving, and display case glass are all included in the service scope.",
      },
      {
        q: "Can you meet franchise or brand cleaning standards?",
        a: "In most cases, yes. Share your franchise or brand cleaning requirements with your account manager and we will build your service program to those standards.",
      },
    ],
    imageSrc: "https://placehold.co/1200x600/0a0908/181410",
    imageAlt: "Pristine retail showroom with polished floors and clean display cases",
  },

  "post-construction-cleanup": {
    headline: "The build is done. We handle what comes next.",
    intro:
      "Post-construction cleanup is one of the most demanding cleaning scopes in commercial work. Drywall dust infiltrates every surface. Adhesive residue, paint splatter, construction debris, and grout haze require specialized removal techniques. A standard commercial cleaning crew is not equipped for post-construction scope — our teams are.",
    details:
      "Flores Clean's post-construction cleanup crews carry the right equipment and products for construction-grade cleanup: HEPA vacuuming for fine particulate, appropriate solvents for adhesive and paint residue, grout haze removal, window cleaning, and final floor preparation. We work in coordination with your general contractor or project manager to confirm site access and cleanup scope before beginning. The goal is a space that is move-in ready — not just swept.",
    process: [
      { step: "Scope Confirmation", description: "We review your construction project scope, surface types, and move-in requirements with your GC or project manager before quoting." },
      { step: "Initial Debris Removal", description: "Construction debris, packaging materials, and large waste items are staged and removed before detail cleaning begins." },
      { step: "Detail Cleaning — Phase 1", description: "HEPA vacuuming of all surfaces, ducts, fixtures, and tight spaces. Adhesive removal, paint touch-up cleanup, and grout haze treatment." },
      { step: "Final Preparation", description: "Windows, glass, mirrors, and stainless fixtures are polished. Floors are prepped (and waxed or polished if required). Final walkthrough confirms move-in readiness." },
    ],
    included: [
      "Construction debris removal and staging",
      "HEPA vacuuming of all surfaces and ductwork",
      "Drywall dust removal from all surfaces",
      "Adhesive, sticker, and paint residue removal",
      "Grout haze removal (tile and stone)",
      "Window, glass, and mirror polishing",
      "Fixture and hardware cleaning (stainless, chrome)",
      "Floor preparation, polishing, or waxing",
      "Final interior window cleaning",
      "Move-in readiness walkthrough",
    ],
    faqs: [
      {
        q: "How long does post-construction cleanup typically take?",
        a: "Timeline depends on the square footage and scope of the build. A typical commercial renovation of 2,000–5,000 sq ft typically requires 1–3 days for a thorough post-construction cleanup. We provide a timeline estimate during site assessment.",
      },
      {
        q: "Do you coordinate directly with general contractors?",
        a: "Yes — we regularly coordinate with GCs and project managers. We can be added to a project schedule and communicate directly with the site team regarding access and cleanup milestones.",
      },
      {
        q: "Do you handle hazardous construction waste?",
        a: "We handle standard construction debris (drywall, packaging, general waste). Hazardous materials — including certain solvents, asbestos-related material, or chemical waste — require licensed abatement contractors and are outside our scope.",
      },
    ],
    imageSrc: "https://placehold.co/1200x600/0a0808/161010",
    imageAlt: "Commercial space ready for occupancy after professional post-construction cleanup",
  },

  "floor-care-maintenance": {
    headline: "Commercial floors take a beating. We restore and protect them.",
    intro:
      "Commercial hard floors — VCT, LVT, polished concrete, natural stone, and hardwood — represent a significant facility investment. Without proper care, they dull, scratch, and degrade visibly. Our floor care and maintenance programs use professional-grade equipment and products to strip, clean, wax, polish, and buff commercial floors to a standard that routine mopping cannot achieve.",
    details:
      "Flores Clean's floor care service is available as a standalone project or integrated into a recurring cleaning contract. We handle full VCT strip and wax cycles, LVT maintenance, polished concrete maintenance, buffing programs for high-traffic corridors, and periodic deep scrubbing. Every floor care project is assessed for current condition and the appropriate restorative or maintenance approach is applied — not a one-size process.",
    process: [
      { step: "Floor Assessment", description: "We assess your floor type, current condition, finish layers, and traffic patterns before recommending a maintenance approach — strip and wax, machine scrub, buff, or polish." },
      { step: "Preparation & Stripping", description: "If required, existing wax or finish layers are stripped completely using appropriate stripping agents and floor equipment before fresh application." },
      { step: "Cleaning & Application", description: "Floors are machine-scrubbed, rinsed, and allowed to dry before applying commercial-grade floor finish in the appropriate number of coats for the traffic level." },
      { step: "Buffing & Maintenance", description: "Final buffing achieves the target sheen. Ongoing buffing visits (monthly or quarterly) maintain the finish and extend time between full strip cycles." },
    ],
    included: [
      "VCT strip and wax (full cycle)",
      "LVT and vinyl floor cleaning and finish",
      "Polished concrete maintenance",
      "High-speed buffing and burnishing",
      "Machine scrubbing",
      "Grout cleaning (tile floors)",
      "Natural stone care (marble, granite, slate)",
      "High-traffic corridor maintenance programs",
      "Periodic deep scrub cycles",
      "Pre-inspection and floor condition assessment",
    ],
    faqs: [
      {
        q: "How often should commercial VCT floors be stripped and waxed?",
        a: "For typical commercial traffic, a full strip and wax cycle once or twice per year is standard, supplemented by monthly or quarterly buffing to maintain sheen between cycles. High-traffic corridors may require more frequent buffing.",
      },
      {
        q: "Can you work overnight to avoid disrupting business hours?",
        a: "Yes — floor care projects typically require areas to be cleared and dry before foot traffic resumes. Overnight or weekend scheduling is standard for floor care work.",
      },
      {
        q: "Do you carry your own floor care equipment?",
        a: "Yes — our floor care team brings commercial-grade equipment including auto-scrubbers, high-speed burnishers, wet vacs, and appropriate chemical systems. No facility-supplied equipment is needed.",
      },
    ],
    imageSrc: "https://placehold.co/1200x600/080808/141814",
    imageAlt: "Freshly buffed and polished commercial floor in a GTA office building",
  },

  "janitorial-supply-management": {
    headline: "Never run out of essentials. We manage that for you.",
    intro:
      "Running out of paper towels, soap, toilet tissue, or waste liners is a facility management failure that's completely avoidable. Flores Clean includes janitorial supply management as part of our full-service cleaning contracts — so your facility's consumables are monitored, stocked, and replenished without a separate procurement effort on your part.",
    details:
      "Janitorial supply management is bundled as an add-on to any Flores Clean service contract. Your account manager tracks usage rates for your facility and ensures stock is replenished on schedule. Products sourced include paper products (paper towels, toilet tissue, facial tissue), hand soap and sanitizer refills, waste liners, cleaning chemicals used during service, and other site-specific consumables. Supply management simplifies facility administration and eliminates emergency purchasing.",
    process: [
      { step: "Supply Audit", description: "We assess your current supply inventory, consumption rates, and dispensing systems to establish a baseline for your facility's needs." },
      { step: "Product Sourcing", description: "We source commercial-grade products appropriate for your facility type — including ECOLOGO-certified green products where available, consistent with our CIMS-GB certification." },
      { step: "Integration with Cleaning Program", description: "Supply restocking is handled during regular cleaning visits — no separate delivery coordination required. Your account manager tracks stock levels." },
      { step: "Ongoing Management", description: "Stock levels are reviewed at each visit. Your account manager adjusts supply quantities seasonally or as occupancy changes." },
    ],
    included: [
      "Paper towel and toilet tissue restocking",
      "Hand soap and hand sanitizer refills",
      "Facial tissue supply",
      "Waste liner supply and replacement",
      "Cleaning chemical inventory",
      "Dispensing system maintenance (where applicable)",
      "Usage tracking and ordering management",
      "ECOLOGO-certified green products available",
      "Seasonal consumption adjustments",
      "Single account manager coordination",
    ],
    faqs: [
      {
        q: "Is supply management available as a standalone service?",
        a: "Janitorial supply management is offered as an add-on to our cleaning service contracts, not as a standalone supply delivery service. It is designed to integrate with your ongoing cleaning program.",
      },
      {
        q: "Can we specify preferred brands or product types?",
        a: "Yes — your account manager can work with preferred brands or specific product specifications. We accommodate requirements for hypoallergenic products, unscented options, or specific certifications.",
      },
      {
        q: "How is supply cost handled — is it included in the service rate?",
        a: "Janitorial supplies are typically invoiced at cost plus a management fee, separate from the cleaning service rate. Your account manager provides a clear breakdown before the program begins.",
      },
    ],
    imageSrc: "https://placehold.co/1200x600/080a08/101410",
    imageAlt: "Stocked janitorial supply closet in a commercial office building",
  },
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = siteConfig.services.find((s) => s.slug === slug)
  if (!service) notFound()

  const content = serviceContent[slug]
  if (!content) notFound()

  // Other services for cross-links
  const otherServices = siteConfig.services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Breadcrumb + hero */}
      <section
        className="relative py-16 lg:py-24 px-4 overflow-hidden"
        style={{ background: "oklch(0.07 0 0)" }}
      >
        <div className="absolute inset-0 geometric-pattern opacity-20" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top right, oklch(0.65 0.12 195 / 0.06) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs" style={{ fontFamily: "var(--font-body)" }}>
              <li>
                <Link
                  href="/"
                  className="hover-teal focus-visible:outline-none focus-visible:rounded focus-visible:ring-1 focus-visible:ring-[oklch(0.65_0.12_195)]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" style={{ color: "oklch(0.30 0 0)" }}>/</li>
              <li>
                <Link
                  href="/services"
                  className="hover-teal focus-visible:outline-none focus-visible:rounded focus-visible:ring-1 focus-visible:ring-[oklch(0.65_0.12_195)]"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true" style={{ color: "oklch(0.30 0 0)" }}>/</li>
              <li aria-current="page" style={{ color: "oklch(0.65 0 0)" }}>{service.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
            <div>
              <SectionLabel>Commercial Cleaning — GTA</SectionLabel>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-800 tracking-[-0.035em] leading-[1.05] mb-5"
                style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
              >
                {service.name}
              </h1>
              <p
                className="text-base lg:text-lg leading-[1.7] mb-6"
                style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
              >
                {content.headline}
              </p>
              <p
                className="text-sm leading-[1.7]"
                style={{ color: "oklch(0.55 0 0)", fontFamily: "var(--font-body)" }}
              >
                {content.intro}
              </p>
            </div>

            {/* Sticky CTA panel */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "oklch(0.10 0 0)",
                border: "1px solid oklch(0.65 0.12 195 / 0.15)",
                boxShadow: "0 8px 40px oklch(0 0 0 / 0.25)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.12em] mb-2"
                style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
              >
                Ready to discuss?
              </p>
              <h2
                className="text-lg font-700 tracking-[-0.02em] mb-4"
                style={{ color: "oklch(0.92 0 0)", fontFamily: "var(--font-heading)" }}
              >
                Get a quote for {service.name}
              </h2>
              <p
                className="text-xs leading-[1.6] mb-5"
                style={{ color: "oklch(0.50 0 0)", fontFamily: "var(--font-body)" }}
              >
                Tell us about your facility and we&apos;ll respond within one business day with a tailored proposal.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-md text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] active:scale-[0.97] btn-teal"
              >
                Request a Quote
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 mt-3 rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] hover-white"
                style={{
                  border: "1px solid oklch(0.65 0.12 195 / 0.25)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "280px", background: "oklch(0.07 0 0)" }}
      >
        <Image
          src={content.imageSrc}
          alt={content.imageAlt}
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, oklch(0.07 0 0 / 0.80) 0%, oklch(0.07 0 0 / 0.30) 50%, oklch(0.07 0 0 / 0.80) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Details section */}
      <section className="py-16 px-4" style={{ background: "oklch(0.09 0 0)", borderTop: "1px solid oklch(0.22 0.01 252 / 0.35)" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl font-700 tracking-[-0.025em] mb-6"
            style={{ color: "oklch(0.93 0 0)", fontFamily: "var(--font-heading)" }}
          >
            How we approach {service.name.toLowerCase()}
          </h2>
          <p
            className="text-sm leading-[1.7] mb-12"
            style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
          >
            {content.details}
          </p>

          {/* Process */}
          <h3
            className="text-lg font-700 tracking-[-0.02em] mb-6"
            style={{ color: "oklch(0.90 0 0)", fontFamily: "var(--font-heading)" }}
          >
            Our process
          </h3>
          <div className="space-y-5 mb-12">
            {content.process.map((p, i) => (
              <div key={p.step} className="flex gap-5">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-700 flex-shrink-0"
                    style={{
                      background: "oklch(0.65 0.12 195 / 0.12)",
                      border: "1px solid oklch(0.65 0.12 195 / 0.30)",
                      color: "oklch(0.65 0.12 195)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {i + 1}
                  </div>
                  {i < content.process.length - 1 && (
                    <div
                      className="w-px flex-1 mt-2"
                      style={{ background: "oklch(0.22 0.01 252 / 0.50)" }}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="pb-6">
                  <p
                    className="text-sm font-600 mb-1"
                    style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
                  >
                    {p.step}
                  </p>
                  <p
                    className="text-sm leading-[1.7]"
                    style={{ color: "oklch(0.55 0 0)", fontFamily: "var(--font-body)" }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* What's included */}
          <h3
            className="text-lg font-700 tracking-[-0.02em] mb-5"
            style={{ color: "oklch(0.90 0 0)", fontFamily: "var(--font-heading)" }}
          >
            What&apos;s included
          </h3>
          <div
            className="p-6 rounded-xl mb-12"
            style={{
              background: "oklch(0.10 0 0)",
              border: "1px solid oklch(0.22 0.01 252 / 0.50)",
            }}
          >
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {content.included.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                    style={{ background: "oklch(0.65 0.12 195)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-sm"
                    style={{ color: "oklch(0.68 0 0)", fontFamily: "var(--font-body)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQs */}
          <h3
            className="text-lg font-700 tracking-[-0.02em] mb-5"
            style={{ color: "oklch(0.90 0 0)", fontFamily: "var(--font-heading)" }}
          >
            Common questions
          </h3>
          <div className="space-y-4 mb-12">
            {content.faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-5 rounded-lg"
                style={{
                  background: "oklch(0.10 0 0)",
                  border: "1px solid oklch(0.22 0.01 252 / 0.45)",
                }}
              >
                <p
                  className="text-sm font-600 mb-2"
                  style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
                >
                  {faq.q}
                </p>
                <p
                  className="text-sm leading-[1.7]"
                  style={{ color: "oklch(0.58 0 0)", fontFamily: "var(--font-body)" }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="rounded-xl p-8 text-center"
            style={{
              background: "oklch(0.10 0 0)",
              border: "1px solid oklch(0.65 0.12 195 / 0.15)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.12em] mb-2"
              style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
            >
              Get a Quote
            </p>
            <h3
              className="text-xl font-700 tracking-[-0.025em] mb-3"
              style={{ color: "oklch(0.93 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Ready to get started with {service.name}?
            </h3>
            <p
              className="text-sm leading-[1.7] mb-6 max-w-md mx-auto"
              style={{ color: "oklch(0.55 0 0)", fontFamily: "var(--font-body)" }}
            >
              Tell us about your facility and we&apos;ll put together a tailored proposal. We respond within one business day.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] active:scale-[0.97] btn-teal"
            >
              Request a Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Related services */}
      {otherServices.length > 0 && (
        <section
          className="py-16 px-4"
          style={{ background: "oklch(0.07 0 0)", borderTop: "1px solid oklch(0.22 0.01 252 / 0.30)" }}
        >
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-xl font-700 tracking-[-0.025em] mb-8"
              style={{ color: "oklch(0.80 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Other services for GTA businesses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col p-5 rounded-lg hover-border-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                  style={{
                    background: "oklch(0.10 0 0)",
                    border: "1px solid oklch(0.22 0.01 252 / 0.50)",
                  }}
                >
                  <h3
                    className="text-sm font-600 mb-2"
                    style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="text-xs leading-relaxed flex-1 mb-3"
                    style={{ color: "oklch(0.52 0 0)", fontFamily: "var(--font-body)" }}
                  >
                    {s.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold transition-[gap] duration-150 group-hover:gap-2"
                    style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
                  >
                    Learn more
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                      <path d="M2 5.5h7M5.5 2l3.5 3.5L5.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
