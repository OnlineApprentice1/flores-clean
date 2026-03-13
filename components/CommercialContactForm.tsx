"use client"

import { useState } from "react"

type FormState = "idle" | "loading" | "success" | "error"

const facilityTypes = [
  "Office / Workspace",
  "Medical / Dental Clinic",
  "Retail / Showroom",
  "Post-Construction Site",
  "Other",
]

export default function CommercialContactForm() {
  const [state, setState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState("loading")
    setErrorMsg("")

    const form = e.currentTarget
    const company = (form.elements.namedItem("company") as HTMLInputElement).value
    const contactName = (form.elements.namedItem("contactName") as HTMLInputElement).value
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value
    const facilityType = (form.elements.namedItem("facilityType") as HTMLSelectElement).value
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

    const data = {
      name: contactName,
      email,
      phone,
      message: `Company: ${company}\nFacility Type: ${facilityType}\n\n${message}`,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setState("success")
        form.reset()
      } else {
        const json = await res.json()
        setErrorMsg(json.error ?? "Something went wrong. Please try again.")
        setState("error")
      }
    } catch {
      setErrorMsg("Unable to send. Please call us directly.")
      setState("error")
    }
  }

  const inputStyle: React.CSSProperties = {
    background: "oklch(0.12 0 0)",
    border: "1px solid oklch(0.22 0.01 252 / 0.65)",
    color: "oklch(0.90 0 0)",
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    borderRadius: "8px",
    padding: "11px 14px",
    width: "100%",
    outline: "none",
    transition: "border-color 150ms",
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.10em",
    marginBottom: "6px",
    color: "oklch(0.50 0 0)",
    fontFamily: "var(--font-heading)",
  }

  if (state === "success") {
    return (
      <div
        className="flex items-start gap-4 p-6 rounded-xl"
        style={{
          background: "oklch(0.65 0.12 195 / 0.08)",
          border: "1px solid oklch(0.65 0.12 195 / 0.25)",
        }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "oklch(0.65 0.12 195 / 0.15)", color: "oklch(0.65 0.12 195)" }}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div>
          <p
            className="text-base font-700 mb-1"
            style={{ color: "oklch(0.92 0 0)", fontFamily: "var(--font-heading)" }}
          >
            Message received.
          </p>
          <p
            className="text-sm leading-[1.6]"
            style={{ color: "oklch(0.62 0 0)", fontFamily: "var(--font-body)" }}
          >
            Your inquiry has been sent to the Flores Clean team. We&apos;ll review your request and respond within one business day.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
    >
      <div
        className="p-6 lg:p-8 rounded-xl space-y-5"
        style={{
          background: "oklch(0.10 0 0)",
          border: "1px solid oklch(0.22 0.01 252 / 0.55)",
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-[0.12em] pb-1 border-b"
          style={{
            color: "oklch(0.65 0.12 195)",
            fontFamily: "var(--font-heading)",
            borderColor: "oklch(0.22 0.01 252 / 0.50)",
          }}
        >
          Request a Quote
        </p>

        {state === "error" && (
          <div
            className="p-4 rounded-lg text-sm"
            style={{
              background: "oklch(0.60 0.22 25 / 0.10)",
              border: "1px solid oklch(0.60 0.22 25 / 0.30)",
              color: "oklch(0.80 0.10 25)",
              fontFamily: "var(--font-body)",
            }}
          >
            {errorMsg}
          </div>
        )}

        {/* Company + Contact name */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="company" style={labelStyle}>Company Name *</label>
            <input
              id="company"
              name="company"
              type="text"
              required
              placeholder="Acme Properties Inc."
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.55)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.22 0.01 252 / 0.65)")}
            />
          </div>
          <div>
            <label htmlFor="contactName" style={labelStyle}>Contact Name *</label>
            <input
              id="contactName"
              name="contactName"
              type="text"
              required
              placeholder="Jane Smith"
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.55)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.22 0.01 252 / 0.65)")}
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" style={labelStyle}>Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@acmeproperties.ca"
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.55)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.22 0.01 252 / 0.65)")}
            />
          </div>
          <div>
            <label htmlFor="phone" style={labelStyle}>Phone Number *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="416-555-0100"
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.55)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.22 0.01 252 / 0.65)")}
            />
          </div>
        </div>

        {/* Facility type */}
        <div>
          <label htmlFor="facilityType" style={labelStyle}>Facility Type *</label>
          <select
            id="facilityType"
            name="facilityType"
            required
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.55)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.22 0.01 252 / 0.65)")}
          >
            <option value="" style={{ background: "oklch(0.12 0 0)" }}>Select your facility type</option>
            {facilityTypes.map((ft) => (
              <option key={ft} value={ft} style={{ background: "oklch(0.12 0 0)" }}>{ft}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" style={labelStyle}>Tell Us About Your Facility *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Describe your facility, approximate square footage, how often you'd need cleaning, and any specific requirements..."
            style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.55)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "oklch(0.22 0.01 252 / 0.65)")}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-md text-sm font-semibold transition-[background-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(0.10_0_0)] active:scale-[0.98] disabled:opacity-60"
          style={{
            background: "oklch(0.65 0.12 195)",
            color: "oklch(0.07 0 0)",
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.01em",
            boxShadow: "0 0 24px oklch(0.65 0.12 195 / 0.30)",
          }}
          onMouseEnter={(e) => {
            if (state !== "loading") {
              e.currentTarget.style.background = "oklch(0.72 0.12 195)"
              e.currentTarget.style.boxShadow = "0 0 32px oklch(0.65 0.12 195 / 0.45)"
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "oklch(0.65 0.12 195)"
            e.currentTarget.style.boxShadow = "0 0 24px oklch(0.65 0.12 195 / 0.30)"
          }}
        >
          {state === "loading" ? (
            "Sending..."
          ) : (
            <>
              Send Quote Request
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </>
          )}
        </button>

        <p
          className="text-xs text-center"
          style={{ color: "oklch(0.38 0 0)", fontFamily: "var(--font-body)" }}
        >
          We respond within one business day. All fields marked * are required.
        </p>
      </div>
    </form>
  )
}
