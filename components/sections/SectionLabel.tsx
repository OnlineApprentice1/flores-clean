// SectionLabel — small uppercase label used above section headings
// Used consistently: teal dash + tracking text

interface SectionLabelProps {
  children: React.ReactNode
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] mb-3"
      style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
    >
      <span
        className="w-5 h-px flex-shrink-0"
        style={{ background: "oklch(0.65 0.12 195)" }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}
