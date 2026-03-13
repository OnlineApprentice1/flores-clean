"use client"

// TealCTALink — teal primary CTA button (client component for hover effects)
import Link from "next/link"

interface TealCTALinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function TealCTALink({ href, children, className = "" }: TealCTALinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-[background-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)] active:scale-[0.97] ${className}`}
      style={{
        background: "oklch(0.65 0.12 195)",
        color: "oklch(0.07 0 0)",
        fontFamily: "var(--font-heading)",
        letterSpacing: "-0.01em",
        boxShadow: "0 0 20px oklch(0.65 0.12 195 / 0.25)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "oklch(0.72 0.12 195)"
        e.currentTarget.style.boxShadow = "0 0 28px oklch(0.65 0.12 195 / 0.40)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "oklch(0.65 0.12 195)"
        e.currentTarget.style.boxShadow = "0 0 20px oklch(0.65 0.12 195 / 0.25)"
      }}
    >
      {children}
    </Link>
  )
}
