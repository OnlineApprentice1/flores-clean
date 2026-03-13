// TestimonialBlock — single testimonial card used in the testimonials grid
// Staggered editorial layout — quote first, then attribution

interface TestimonialBlockProps {
  quote: string
  name: string
  title: string
  company: string
  initials: string
}

export default function TestimonialBlock({ quote, name, title, company, initials }: TestimonialBlockProps) {
  return (
    <div
      className="flex flex-col p-6 rounded-lg"
      style={{
        background: "oklch(0.10 0 0)",
        border: "1px solid oklch(0.22 0.01 252 / 0.5)",
      }}
    >
      {/* Teal quote mark */}
      <span
        className="text-3xl font-900 leading-none mb-3 select-none"
        style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p
        className="text-sm leading-[1.7] flex-1 mb-5"
        style={{ color: "oklch(0.75 0 0)", fontFamily: "var(--font-body)" }}
      >
        {quote}
      </p>

      <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "oklch(0.22 0.01 252 / 0.5)" }}>
        {/* Avatar initials */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-700 flex-shrink-0"
          style={{
            background: "oklch(0.65 0.12 195 / 0.15)",
            color: "oklch(0.65 0.12 195)",
            fontFamily: "var(--font-heading)",
            border: "1px solid oklch(0.65 0.12 195 / 0.25)",
          }}
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <p
            className="text-sm font-semibold leading-tight"
            style={{ color: "oklch(0.90 0 0)", fontFamily: "var(--font-heading)" }}
          >
            {name}
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: "oklch(0.50 0 0)", fontFamily: "var(--font-body)" }}
          >
            {title}, {company}
          </p>
        </div>
      </div>
    </div>
  )
}
