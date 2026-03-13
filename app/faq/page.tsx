import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about commercial cleaning services from ${siteConfig.name} — serving ${siteConfig.serviceArea}.`,
}

// Phase 3 populates with real business-specific Q&A
const faqs: { q: string; a: string }[] = []

// FAQPage JSON-LD — populated in Phase 3 with real Q&A content
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  ...(faqs.length > 0 && {
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  }),
}

export default function FAQPage() {
  return (
    <>
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
      )}
      <div className="max-w-3xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          {siteConfig.phone && (
            <p className="text-base-content/60 mt-4">
              Can&apos;t find what you&apos;re looking for? Call us at{" "}
              <a href={`tel:${siteConfig.phone}`} className="link link-primary font-medium">
                {siteConfig.phone}
              </a>
            </p>
          )}
        </div>

        {faqs.length > 0 ? (
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">{faq.q}</div>
                <div className="collapse-content text-base-content/70">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-base-content/50 py-12">
            FAQ content will be added during the content phase.
          </p>
        )}
      </div>
    </>
  )
}
