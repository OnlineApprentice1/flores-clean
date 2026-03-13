import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import SectionLabel from "@/components/sections/SectionLabel"

export const metadata: Metadata = {
  title: "About Flores Clean | Commercial Cleaning Specialists — GTA",
  description:
    "Flores Clean was founded by Diana Flores in 2019. Based in Thornhill, Ontario, we are a commercial-only cleaning company with 22 staff serving offices, medical facilities, retail spaces, and post-construction sites across the GTA.",
}

const values = [
  {
    title: "Commercial Focus, No Exceptions",
    body: "Flores Clean does not take residential clients. Every system, every training protocol, every piece of equipment we operate is built for commercial environments. That focus makes us better partners for business clients.",
  },
  {
    title: "Accountability Through Ownership",
    body: "Every client has a dedicated account manager who is responsible for their account. Problems get solved, schedules get adjusted, and quality is monitored — without clients having to chase anyone.",
  },
  {
    title: "Credentials as a Baseline",
    body: "ISSA CIMS-GB certification, full insurance, WSIB coverage, and bonded staff are not differentiators — they are the baseline we expect of ourselves. Clients should be able to count on these without asking.",
  },
  {
    title: "Precision Over Volume",
    body: "We deliberately keep our team size and client roster at a level we can manage with care. A 22-person team serving a defined market area means we can maintain quality and response without overextension.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="relative py-20 lg:py-28 px-4 overflow-hidden"
        style={{ background: "oklch(0.07 0 0)" }}
      >
        <div className="absolute inset-0 geometric-pattern opacity-20" aria-hidden="true" />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at bottom left, oklch(0.65 0.12 195 / 0.05) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h1
              className="text-4xl md:text-5xl font-800 tracking-[-0.035em] leading-[1.05] mb-5"
              style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Built to be the partner<br />
              <span style={{ color: "oklch(0.65 0.12 195)" }}>GTA businesses deserve.</span>
            </h1>
            <p
              className="text-sm leading-[1.7]"
              style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
            >
              Flores Clean was founded in 2019 on a straightforward principle: commercial cleaning clients deserved a company that worked like a professional services firm, not a side-operated residential service that happened to take business accounts. Seven years later, that principle still drives every decision we make.
            </p>
          </div>
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ aspectRatio: "4/3", border: "1px solid oklch(0.65 0.12 195 / 0.12)" }}
          >
            <Image
              src="https://placehold.co/800x600/0a0a0a/181818"
              alt="Diana Flores, founder of Flores Clean, at a commercial facility in the GTA"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, oklch(0.07 0 0 / 0.60) 0%, transparent 50%)" }}
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p
                className="text-sm font-600"
                style={{ color: "oklch(0.92 0 0)", fontFamily: "var(--font-heading)" }}
              >
                Diana Flores
              </p>
              <p
                className="text-xs"
                style={{ color: "oklch(0.55 0 0)", fontFamily: "var(--font-body)" }}
              >
                Founder &amp; Owner, Flores Clean
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.09 0 0)", borderTop: "1px solid oklch(0.22 0.01 252 / 0.35)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl lg:text-3xl font-700 tracking-[-0.03em] mb-8"
            style={{ color: "oklch(0.93 0 0)", fontFamily: "var(--font-heading)" }}
          >
            Diana&apos;s story
          </h2>

          <div className="space-y-5 text-sm leading-[1.8]" style={{ color: "oklch(0.62 0 0)", fontFamily: "var(--font-body)" }}>
            <p>
              Diana Flores spent the first decade of her career managing operations for a commercial property management company in York Region. In that role, she coordinated with dozens of cleaning contractors across multiple buildings — and found the same frustrations repeating: inconsistent crews, miscommunication, no single point of accountability, and cleaning companies that treated commercial accounts as an afterthought to their residential business.
            </p>
            <p>
              In 2019, Diana started Flores Clean with a different model in mind. Her background was in operations — not cleaning for its own sake — and she approached it as a managed service business from day one. Every client would have a dedicated account manager. Staff would be bonded and background-checked. Certifications would be maintained, not just claimed. And the company would serve commercial clients exclusively.
            </p>
            <p>
              She started with a small team of four and a focused territory in Thornhill and Vaughan. Within two years, the team had grown to fifteen and expanded into Richmond Hill, Markham, and North York. By 2024, Flores Clean had achieved ISSA CIMS-GB certification — a green building cleaning management standard that confirmed what the team had been doing all along.
            </p>
            <p>
              Today, Diana leads a team of 22 — including an office manager and 20 cleaning professionals — serving offices, medical and dental facilities, retail showrooms, and post-construction sites across the Greater Toronto Area. The same model that started the company is still the model: dedicated account management, professional credentials, and commercial-only focus.
            </p>
          </div>
        </div>
      </section>

      {/* Stats + image */}
      <section className="py-16 px-4" style={{ background: "oklch(0.07 0 0)" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>By the Numbers</SectionLabel>
            <h2
              className="text-2xl lg:text-3xl font-700 tracking-[-0.03em] mb-8"
              style={{ color: "oklch(0.93 0 0)", fontFamily: "var(--font-heading)" }}
            >
              A team built for commercial work.
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "2019", label: "Year founded", sub: "Thornhill, Ontario" },
                { value: "22", label: "Team members", sub: "Diana + office manager + 20 staff" },
                { value: "7+", label: "Years in operation", sub: "Serving GTA businesses" },
                { value: "6", label: "Service areas", sub: "Vaughan to Mississauga" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-lg"
                  style={{
                    background: "oklch(0.10 0 0)",
                    border: "1px solid oklch(0.22 0.01 252 / 0.50)",
                  }}
                >
                  <p
                    className="text-3xl font-800 tracking-[-0.04em] mb-1"
                    style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-sm font-600 mb-0.5"
                    style={{ color: "oklch(0.80 0 0)", fontFamily: "var(--font-heading)" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.45 0 0)", fontFamily: "var(--font-body)" }}
                  >
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative rounded-lg overflow-hidden"
            style={{ aspectRatio: "4/3", border: "1px solid oklch(0.65 0.12 195 / 0.10)" }}
          >
            <Image
              src="https://placehold.co/800x600/080808/141414"
              alt="Flores Clean team working in a commercial office space in York Region"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, oklch(0.07 0 0 / 0.45) 0%, transparent 60%)" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.09 0 0)", borderTop: "1px solid oklch(0.22 0.01 252 / 0.35)" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionLabel>What We Stand For</SectionLabel>
          <h2
            className="text-2xl lg:text-3xl font-700 tracking-[-0.03em] mb-10 max-w-xl"
            style={{ color: "oklch(0.93 0 0)", fontFamily: "var(--font-heading)" }}
          >
            The principles that drive how we operate.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="p-6 rounded-lg"
                style={{
                  background: "oklch(0.10 0 0)",
                  border: "1px solid oklch(0.22 0.01 252 / 0.50)",
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="text-xs font-700 tracking-widest flex-shrink-0 mt-0.5"
                    style={{ color: "oklch(0.35 0 0)", fontFamily: "var(--font-heading)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-sm font-600 tracking-[-0.01em]"
                    style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
                  >
                    {v.title}
                  </h3>
                </div>
                <p
                  className="text-sm leading-[1.7] pl-8"
                  style={{ color: "oklch(0.58 0 0)", fontFamily: "var(--font-body)" }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4" style={{ background: "oklch(0.07 0 0)" }}>
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Credentials</SectionLabel>
          <h2
            className="text-2xl lg:text-3xl font-700 tracking-[-0.03em] mb-5"
            style={{ color: "oklch(0.93 0 0)", fontFamily: "var(--font-heading)" }}
          >
            Certified, insured, and accountable.
          </h2>
          <p
            className="text-sm leading-[1.7] mb-8"
            style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
          >
            Flores Clean holds ISSA CIMS-GB certification (the Cleaning Industry Management Standard for Green Buildings) — one of the most recognized credentials in commercial cleaning management. Beyond certification, we maintain full commercial liability insurance, WSIB coverage for all staff, and employee bonding as standard conditions of employment. These are not marketing claims. They are documented and maintained.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {siteConfig.trustSignals.map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-3 px-4 py-3.5 rounded-lg"
                style={{
                  background: "oklch(0.10 0 0)",
                  border: "1px solid oklch(0.22 0.01 252 / 0.50)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "oklch(0.65 0.12 195)" }}
                  aria-hidden="true"
                />
                <span
                  className="text-sm"
                  style={{ color: "oklch(0.72 0 0)", fontFamily: "var(--font-body)" }}
                >
                  {signal}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] active:scale-[0.97] btn-teal"
            >
              View Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] hover-white"
              style={{
                border: "1px solid oklch(0.65 0.12 195 / 0.30)",
                fontFamily: "var(--font-body)",
              }}
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
