"use client"

import { useState } from "react"

interface FAQItem {
  q: string
  a: string
}

interface FAQAccordionProps {
  faqs: FAQItem[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="rounded-lg overflow-hidden transition-[border-color] duration-200"
            style={{
              background: "oklch(0.10 0 0)",
              border: isOpen
                ? "1px solid oklch(0.65 0.12 195 / 0.30)"
                : "1px solid oklch(0.22 0.01 252 / 0.5)",
            }}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[oklch(0.65_0.12_195)]"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span
                className="text-sm font-semibold leading-snug"
                style={{
                  color: isOpen ? "oklch(0.65 0.12 195)" : "oklch(0.90 0 0)",
                  fontFamily: "var(--font-heading)",
                  letterSpacing: "-0.01em",
                  transition: "color 150ms",
                }}
              >
                {faq.q}
              </span>
              <span
                className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full transition-[transform,background-color] duration-200"
                style={{
                  background: isOpen ? "oklch(0.65 0.12 195 / 0.15)" : "oklch(0.15 0 0)",
                  color: isOpen ? "oklch(0.65 0.12 195)" : "oklch(0.50 0 0)",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
                aria-hidden="true"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-5">
                <p
                  className="text-sm leading-[1.7]"
                  style={{ color: "oklch(0.65 0 0)", fontFamily: "var(--font-body)" }}
                >
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
