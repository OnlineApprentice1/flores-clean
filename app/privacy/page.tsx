import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 prose">
      <h1>Privacy Policy</h1>

      {/* Phase 3 expands with full PIPEDA-compliant content */}

      <h2>Information We Collect</h2>
      <p>
        When you use our contact form, we collect your name, email address, phone number
        (optional), and message content. This information is used solely to respond to your
        inquiry.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        We use the information you provide to respond to your inquiry and, if applicable,
        to schedule and deliver our services. We do not sell, trade, or rent your personal
        information to third parties.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about this privacy policy, contact us at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        {siteConfig.phone && (
          <> or call <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></>
        )}.
      </p>
    </div>
  )
}
