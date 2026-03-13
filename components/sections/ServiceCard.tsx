// ServiceCard — dark card used on homepage and services index
// Teal accent top border on hover, description, and learn more link

import Link from "next/link"

interface ServiceCardProps {
  name: string
  slug: string
  description: string
  icon?: React.ReactNode
}

export default function ServiceCard({ name, slug, description, icon }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group relative flex flex-col p-6 rounded-lg transition-[border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
      style={{
        background: "oklch(0.10 0 0)",
        border: "1px solid oklch(0.22 0.01 252 / 0.6)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "oklch(0.65 0.12 195 / 0.35)"
        e.currentTarget.style.boxShadow = "0 4px 28px oklch(0.65 0.12 195 / 0.10)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "oklch(0.22 0.01 252 / 0.6)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      {/* Teal top accent — reveals on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px rounded-t-lg opacity-0 transition-[opacity] duration-200 group-hover:opacity-100"
        style={{ background: "linear-gradient(90deg, oklch(0.65 0.12 195 / 0.70), transparent)" }}
        aria-hidden="true"
      />

      {icon && (
        <span
          className="mb-4 flex-shrink-0"
          style={{ color: "oklch(0.65 0.12 195)" }}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}

      <h3
        className="text-base font-600 mb-2 tracking-[-0.015em]"
        style={{ color: "oklch(0.92 0 0)", fontFamily: "var(--font-heading)" }}
      >
        {name}
      </h3>
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "oklch(0.58 0 0)", fontFamily: "var(--font-body)" }}
      >
        {description}
      </p>
      <span
        className="inline-flex items-center gap-1.5 text-xs font-semibold mt-4 transition-[gap] duration-150 group-hover:gap-2.5"
        style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
      >
        Learn more
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </Link>
  )
}
