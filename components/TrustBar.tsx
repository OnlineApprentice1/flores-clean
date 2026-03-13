// Trust signals bar — ISSA CIMS-GB, insured, WSIB, bonded
// Used in layout shell and homepage trust section

const trustItems = [
  {
    label: "ISSA CIMS-GB Certified",
    sublabel: "Green Building",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    label: "Fully Insured",
    sublabel: "& Bonded",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
  },
  {
    label: "WSIB Covered",
    sublabel: "All staff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    label: "Background-Checked",
    sublabel: "Every employee",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <polyline points="9 11 11 13 15 9"/>
      </svg>
    ),
  },
  {
    label: "7 Years",
    sublabel: "Serving GTA businesses",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
]

export default function TrustBar() {
  return (
    <section
      aria-label="Trust signals and certifications"
      className="py-10 px-4"
      style={{ background: "oklch(0.09 0 0)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-4 rounded-lg"
              style={{
                background: "oklch(0.12 0 0)",
                border: "1px solid oklch(0.22 0.01 252 / 0.6)",
              }}
            >
              <span
                className="mb-2"
                style={{ color: "oklch(0.65 0.12 195)" }}
              >
                {item.icon}
              </span>
              <span
                className="text-sm font-semibold leading-tight"
                style={{
                  color: "oklch(0.90 0 0)",
                  fontFamily: "var(--font-heading)",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.label}
              </span>
              <span
                className="text-xs mt-0.5"
                style={{ color: "oklch(0.55 0 0)", fontFamily: "var(--font-body)" }}
              >
                {item.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
