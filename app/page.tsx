"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { siteConfig } from "@/config/site"
import TrustBar from "@/components/TrustBar"
import ClientTypeSelectorModule from "@/components/sections/ClientTypeSelectorModule"
import ServiceCard from "@/components/sections/ServiceCard"
import TestimonialBlock from "@/components/sections/TestimonialBlock"
import SectionLabel from "@/components/sections/SectionLabel"

// ── Service icons for cards ────────────────────────────────────────────────
const serviceIcons: Record<string, React.ReactNode> = {
  "office-workspace-cleaning": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  "medical-dental-cleaning": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  "retail-showroom-cleaning": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  ),
  "post-construction-cleanup": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  "floor-care-maintenance": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <line x1="3" y1="9" x2="21" y2="9"/>
      <line x1="3" y1="15" x2="21" y2="15"/>
      <line x1="9" y1="3" x2="9" y2="21"/>
      <line x1="15" y1="3" x2="15" y2="21"/>
    </svg>
  ),
  "janitorial-supply-management": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  ),
}

// ── Testimonial data — 6 fabricated GTA B2B testimonials ──────────────────
const testimonials = [
  {
    quote: "We manage three office buildings in Vaughan and Flores Clean has been our cleaning partner for four years. The dedicated account manager model makes a real difference — there's never any miscommunication or having to re-explain our requirements.",
    name: "James Carrington",
    title: "Property Manager",
    company: "Carrington Commercial Properties",
    initials: "JC",
  },
  {
    quote: "Running a dental clinic, our cleaning standards are non-negotiable. Flores Clean's team understands medical facility protocols. They're bonded, certified, and completely reliable — exactly what we need before patients arrive each morning.",
    name: "Dr. Meera Patel",
    title: "Practice Owner",
    company: "Patel Family Dental, Richmond Hill",
    initials: "MP",
  },
  {
    quote: "Our showroom is 8,000 sq ft and we needed a cleaning partner who could work around our hours without disrupting the floor. Flores Clean is flexible, thorough, and our showroom has never looked better. The floors especially.",
    name: "Trevor Banks",
    title: "Operations Manager",
    company: "Apex Auto Gallery, Markham",
    initials: "TB",
  },
  {
    quote: "Post-construction cleanup is always a headache — or it was, until we started using Flores Clean. They took a complete mess after a major renovation and had the space move-in ready in two days. Highly professional crew.",
    name: "Sandra Liu",
    title: "Facilities Director",
    company: "Nexus Commercial Group, North York",
    initials: "SL",
  },
  {
    quote: "I oversee a medical office building with five tenant practices. Flores Clean handles all common areas and several individual suites. Their CIMS-GB certification and the fact that every employee is bonded and background-checked gives us peace of mind.",
    name: "Robert Vasquez",
    title: "Building Manager",
    company: "York Region Medical Centre",
    initials: "RV",
  },
  {
    quote: "We've tried three other commercial cleaners in the past two years. Flores Clean is the first one that has actually been consistent from month to month. The account manager follow-through is what keeps us signed to a recurring contract.",
    name: "Michelle Okonkwo",
    title: "Office Manager",
    company: "Brightfield Advisory Group, Mississauga",
    initials: "MO",
  },
]

// ── Hero inline quote form ─────────────────────────────────────────────────
const facilityTypes = [
  "Office / Workspace",
  "Medical / Dental Clinic",
  "Retail / Showroom",
  "Post-Construction Site",
  "Other",
]

function HeroQuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("contactName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      facilityType: (form.elements.namedItem("facilityType") as HTMLSelectElement).value,
      message: `Quote request from hero form. Company: ${(form.elements.namedItem("company") as HTMLInputElement).value}. Facility type: ${(form.elements.namedItem("facilityType") as HTMLSelectElement).value}.`,
    }
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      setSubmitted(true)
    } catch {
      // Fallback to contact page on failure
      window.location.href = "/contact"
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    background: "oklch(0.12 0 0)",
    border: "1px solid oklch(0.22 0.01 252 / 0.60)",
    color: "oklch(0.90 0 0)",
    fontFamily: "var(--font-body)",
    fontSize: "13px",
    borderRadius: "6px",
    padding: "10px 14px",
    width: "100%",
    outline: "none",
  }

  if (submitted) {
    return (
      <div
        className="flex items-center gap-3 px-5 py-4 rounded-lg"
        style={{ background: "oklch(0.65 0.12 195 / 0.12)", border: "1px solid oklch(0.65 0.12 195 / 0.30)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="oklch(0.65 0.12 195)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <p className="text-sm font-medium" style={{ color: "oklch(0.90 0 0)", fontFamily: "var(--font-body)" }}>
          Request received — we&apos;ll follow up within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="company"
          type="text"
          required
          placeholder="Company name"
          aria-label="Company name"
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.50)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.22 0.01 252 / 0.60)")}
        />
        <input
          name="contactName"
          type="text"
          required
          placeholder="Your name"
          aria-label="Contact name"
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.50)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.22 0.01 252 / 0.60)")}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone number"
          aria-label="Phone number"
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.50)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.22 0.01 252 / 0.60)")}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          aria-label="Email address"
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.50)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.22 0.01 252 / 0.60)")}
        />
      </div>
      <select
        name="facilityType"
        required
        aria-label="Facility type"
        style={{ ...inputStyle, cursor: "pointer" }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.50)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.22 0.01 252 / 0.60)")}
      >
        <option value="" style={{ background: "oklch(0.12 0 0)" }}>Select facility type</option>
        {facilityTypes.map((ft) => (
          <option key={ft} value={ft} style={{ background: "oklch(0.12 0 0)" }}>{ft}</option>
        ))}
      </select>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-md text-sm font-semibold transition-[background-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] active:scale-[0.98] disabled:opacity-60"
        style={{
          background: "oklch(0.65 0.12 195)",
          color: "oklch(0.07 0 0)",
          fontFamily: "var(--font-heading)",
          letterSpacing: "-0.01em",
          boxShadow: "0 0 24px oklch(0.65 0.12 195 / 0.30)",
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.background = "oklch(0.72 0.12 195)"
            e.currentTarget.style.boxShadow = "0 0 32px oklch(0.65 0.12 195 / 0.45)"
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "oklch(0.65 0.12 195)"
          e.currentTarget.style.boxShadow = "0 0 24px oklch(0.65 0.12 195 / 0.30)"
        }}
      >
        {loading ? "Sending..." : "Request a Quote"}
        {!loading && (
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </form>
  )
}

// ── Why Choose Us items ────────────────────────────────────────────────────
const whyItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: "Dedicated Account Manager",
    body: "Every client has a single point of contact who knows your facility, your schedule, and your standards. You never explain your requirements twice.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Same-Day Response",
    body: "Urgent cleaning needs happen. We guarantee a same-day response for any urgent request from an active client — no waiting, no runaround.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: "Bonded & Background-Checked Staff",
    body: "Every member of our 22-person team is bonded, background-checked, and covered under WSIB. Your facility and its occupants are in safe hands.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: "Customizable Recurring Schedules",
    body: "Daily, weekly, bi-weekly, or a custom rotation — your cleaning schedule is built around your operations, not a preset package.",
  },
]

// ── Service areas ──────────────────────────────────────────────────────────
const serviceAreas = ["Vaughan", "Thornhill", "Richmond Hill", "Markham", "North York", "Mississauga"]

// ── Main page component ────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO — asymmetric split with inline quote form ─────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "oklch(0.07 0 0)", minHeight: "90dvh" }}
      >
        {/* Background: editorial dark image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://placehold.co/1440x900/060606/101010"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Left-heavy gradient — pushes content left */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, oklch(0.07 0 0 / 0.98) 0%, oklch(0.07 0 0 / 0.88) 45%, oklch(0.07 0 0 / 0.60) 100%)",
            }}
          />
          {/* Teal atmospheric glow */}
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at bottom left, oklch(0.65 0.12 195 / 0.07) 0%, transparent 65%)",
            }}
          />
          {/* Geometric grid */}
          <div className="absolute inset-0 geometric-pattern opacity-25" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-12 xl:gap-20 items-center py-24 lg:py-32">
            {/* Left column — headline */}
            <div>
              <p
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] mb-6"
                style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
              >
                <span className="w-6 h-px" style={{ background: "oklch(0.65 0.12 195)" }} aria-hidden="true" />
                York Region &amp; GTA — Commercial Only
              </p>

              {/* Large editorial headline */}
              <h1
                className="font-900 leading-[0.95] tracking-[-0.04em] mb-6"
                style={{
                  color: "oklch(0.96 0 0)",
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                }}
              >
                The cleaning<br />
                partner your<br />
                <span style={{ color: "oklch(0.65 0.12 195)" }}>facility deserves.</span>
              </h1>

              <p
                className="text-base lg:text-lg leading-[1.7] mb-8 max-w-lg"
                style={{ color: "oklch(0.62 0 0)", fontFamily: "var(--font-body)" }}
              >
                Flores Clean is a commercial-only cleaning company serving GTA businesses — offices, medical facilities, retail spaces, and post-construction sites. Bonded, WSIB covered, and ISSA CIMS-GB certified. One dedicated account manager, every time.
              </p>

              {/* Credibility micro-stats */}
              <div className="flex flex-wrap gap-6 mb-10">
                {[
                  { value: "7+", label: "Years in GTA" },
                  { value: "22", label: "Professional staff" },
                  { value: "100%", label: "Commercial focus" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-2xl font-800 tracking-[-0.03em] leading-none"
                      style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(0.45 0 0)", fontFamily: "var(--font-body)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                style={{ color: "oklch(0.55 0 0)", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.80 0 0)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.55 0 0)")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 10.78 19.79 19.79 0 01.34 2.18 2 2 0 012.32 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.76a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {siteConfig.phone}
              </a>
            </div>

            {/* Right column — inline quote request form */}
            <div
              className="relative rounded-xl p-6 lg:p-7"
              style={{
                background: "oklch(0.10 0 0 / 0.95)",
                border: "1px solid oklch(0.65 0.12 195 / 0.18)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                boxShadow: "0 0 60px oklch(0.65 0.12 195 / 0.06), 0 20px 60px oklch(0 0 0 / 0.40)",
              }}
            >
              {/* Teal top border accent */}
              <div
                className="absolute top-0 left-6 right-6 h-px"
                style={{ background: "linear-gradient(90deg, transparent, oklch(0.65 0.12 195 / 0.50), transparent)" }}
                aria-hidden="true"
              />
              <p
                className="text-xs font-semibold uppercase tracking-[0.12em] mb-1"
                style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
              >
                Get a Free Quote
              </p>
              <h2
                className="text-lg font-700 tracking-[-0.025em] mb-5"
                style={{ color: "oklch(0.92 0 0)", fontFamily: "var(--font-heading)" }}
              >
                Tell us about your facility
              </h2>
              <HeroQuoteForm />
              <p
                className="text-xs mt-4 text-center"
                style={{ color: "oklch(0.38 0 0)", fontFamily: "var(--font-body)" }}
              >
                We respond within one business day. No obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CLIENT TYPE SELECTOR — Signature Move ──────────────────── */}
      <ClientTypeSelectorModule />

      {/* ── 3. TRUST SIGNALS BAR ──────────────────────────────────────── */}
      <TrustBar />

      {/* ── 4. WHY COMMERCIAL TEAMS CHOOSE US ─────────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ background: "oklch(0.07 0 0)" }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className="relative rounded-lg overflow-hidden order-2 lg:order-1" style={{ aspectRatio: "4/3" }}>
            <Image
              src="https://placehold.co/800x600/0a0a0a/181818"
              alt="Flores Clean team member reviewing a commercial facility checklist"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top right, oklch(0.07 0 0 / 0.55) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
            {/* Floating credential card */}
            <div
              className="absolute bottom-5 left-5 right-5 flex items-center gap-3 px-4 py-3 rounded-lg"
              style={{
                background: "oklch(0.10 0 0 / 0.92)",
                border: "1px solid oklch(0.65 0.12 195 / 0.20)",
                backdropFilter: "blur(8px)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="oklch(0.65 0.12 195)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
              <div>
                <p className="text-xs font-semibold" style={{ color: "oklch(0.90 0 0)", fontFamily: "var(--font-heading)" }}>ISSA CIMS-GB Certified</p>
                <p className="text-xs" style={{ color: "oklch(0.50 0 0)", fontFamily: "var(--font-body)" }}>Green Building standard — commercial facilities</p>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <SectionLabel>Why GTA Facility Managers Choose Us</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-700 tracking-[-0.03em] mb-4"
              style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Built for business operations, not residential jobs.
            </h2>
            <p
              className="text-sm leading-[1.7] mb-10"
              style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
            >
              Flores Clean works exclusively with commercial clients — so every process, every staff training protocol, and every service tier is designed for business environments, not homes. We partner with property managers, facility directors, and office administrators who need a cleaning company that operates like a professional service firm.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {whyItems.map((item) => (
                <div key={item.title}>
                  <div className="flex items-start gap-3 mb-2">
                    <span
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "oklch(0.65 0.12 195)" }}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <h3
                      className="text-sm font-600 tracking-[-0.01em]"
                      style={{ color: "oklch(0.90 0 0)", fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className="text-xs leading-[1.7] pl-9"
                    style={{ color: "oklch(0.55 0 0)", fontFamily: "var(--font-body)" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SERVICES OVERVIEW — dark cards with teal accents ───────── */}
      <section
        className="py-20 px-4"
        style={{
          background: "oklch(0.09 0 0)",
          borderTop: "1px solid oklch(0.22 0.01 252 / 0.35)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Our Services</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-700 tracking-[-0.03em]"
                style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
              >
                Six commercial cleaning specializations.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] flex-shrink-0"
              style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.80 0.10 195)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.65 0.12 195)")}
            >
              View all services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.services.map((s) => (
              <ServiceCard
                key={s.slug}
                name={s.name}
                slug={s.slug}
                description={s.description}
                icon={serviceIcons[s.slug]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS — editorial staggered grid ────────────────── */}
      <section
        className="py-20 px-4"
        style={{ background: "oklch(0.07 0 0)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <SectionLabel>Client Feedback</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-700 tracking-[-0.03em] max-w-xl"
              style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
            >
              What GTA facility managers are saying.
            </h2>
          </div>

          {/* Staggered 3-column grid — first column offset */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={i === 1 ? "lg:mt-8" : i === 2 ? "lg:mt-4" : ""}
              >
                <TestimonialBlock {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. SERVICE AREAS ──────────────────────────────────────────── */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{
          background: "oklch(0.08 0 0)",
          borderTop: "1px solid oklch(0.22 0.01 252 / 0.30)",
          borderBottom: "1px solid oklch(0.22 0.01 252 / 0.30)",
        }}
      >
        {/* Teal radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, oklch(0.65 0.12 195 / 0.04) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <SectionLabel>Service Coverage</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-700 tracking-[-0.03em] mb-4"
              style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Serving businesses across York Region and the GTA.
            </h2>
            <p
              className="text-sm leading-[1.7] mb-8"
              style={{ color: "oklch(0.60 0 0)", fontFamily: "var(--font-body)" }}
            >
              Our team is based in Thornhill and operates across the York Region and GTA corridor — from Mississauga in the west to Markham in the east. Established commercial clients receive priority scheduling and same-day response for urgent needs.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-lg"
                  style={{
                    background: "oklch(0.11 0 0)",
                    border: "1px solid oklch(0.22 0.01 252 / 0.50)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "oklch(0.65 0.12 195)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.75 0 0)", fontFamily: "var(--font-body)" }}
                  >
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
              style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.80 0.10 195)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.65 0.12 195)")}
            >
              Contact us about your location
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Map placeholder */}
          <div
            className="relative rounded-lg overflow-hidden"
            style={{
              aspectRatio: "4/3",
              border: "1px solid oklch(0.65 0.12 195 / 0.12)",
            }}
          >
            <Image
              src="https://placehold.co/800x600/0a0a0a/141414"
              alt="Map showing Flores Clean service areas: Vaughan, Thornhill, Richmond Hill, Markham, North York, Mississauga"
              fill
              className="object-cover"
            />
            {/* Label overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "oklch(0.07 0 0 / 0.35)" }}
            >
              <div className="text-center">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.15em] mb-1"
                  style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
                >
                  Service Coverage
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.75 0 0)", fontFamily: "var(--font-body)" }}
                >
                  York Region &amp; Greater Toronto Area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
