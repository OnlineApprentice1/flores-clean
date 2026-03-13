import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Privacy Policy | Flores Clean",
  description: `Privacy policy for Flores Clean. How we collect, use, and protect your personal information in accordance with Canadian privacy law (PIPEDA).`,
}

export default function PrivacyPage() {
  const year = new Date().getFullYear()

  return (
    <section
      className="py-16 lg:py-24 px-4"
      style={{ background: "oklch(0.07 0 0)" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 pb-8 border-b" style={{ borderColor: "oklch(0.22 0.01 252 / 0.40)" }}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em] mb-3"
            style={{ color: "oklch(0.65 0.12 195)", fontFamily: "var(--font-heading)" }}
          >
            Legal
          </p>
          <h1
            className="text-3xl lg:text-4xl font-800 tracking-[-0.03em] mb-3"
            style={{ color: "oklch(0.96 0 0)", fontFamily: "var(--font-heading)" }}
          >
            Privacy Policy
          </h1>
          <p
            className="text-sm"
            style={{ color: "oklch(0.45 0 0)", fontFamily: "var(--font-body)" }}
          >
            Last updated: {year}. Applies to {siteConfig.url}
          </p>
        </div>

        {/* Content */}
        <div
          className="space-y-10 text-sm leading-[1.8]"
          style={{ color: "oklch(0.62 0 0)", fontFamily: "var(--font-body)" }}
        >
          <div>
            <h2
              className="text-base font-700 tracking-[-0.015em] mb-3"
              style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Overview
            </h2>
            <p>
              Flores Clean (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting the privacy of individuals who visit our website at {siteConfig.url} and use our online contact form. This Privacy Policy describes how we collect, use, and protect personal information in accordance with Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation.
            </p>
            <p className="mt-3">
              By submitting information through our contact form, you consent to the practices described in this policy.
            </p>
          </div>

          <div>
            <h2
              className="text-base font-700 tracking-[-0.015em] mb-3"
              style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Information We Collect
            </h2>
            <p>We collect personal information only when you voluntarily provide it to us through our contact form. This may include:</p>
            <ul className="mt-3 space-y-2 pl-4">
              {[
                "Company name",
                "Contact name",
                "Email address",
                "Phone number",
                "Facility type",
                "Message content and any details you choose to share about your cleaning requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                    style={{ background: "oklch(0.65 0.12 195)" }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We do not automatically collect cookies, analytics data, or tracking information beyond what may be collected by standard web hosting infrastructure.
            </p>
          </div>

          <div>
            <h2
              className="text-base font-700 tracking-[-0.015em] mb-3"
              style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
            >
              How We Use Your Information
            </h2>
            <p>We use the information you provide for the following purposes:</p>
            <ul className="mt-3 space-y-2 pl-4">
              {[
                "To respond to your inquiry about commercial cleaning services",
                "To prepare and provide a service proposal tailored to your facility",
                "To schedule and deliver cleaning services if you become a client",
                "To communicate with you about your account or service agreement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                    style={{ background: "oklch(0.65 0.12 195)" }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We do not use your information for marketing purposes without your consent, and we do not send unsolicited commercial messages.
            </p>
          </div>

          <div>
            <h2
              className="text-base font-700 tracking-[-0.015em] mb-3"
              style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Disclosure of Your Information
            </h2>
            <p>
              We do not sell, trade, rent, or share your personal information with third parties, except in the following limited circumstances:
            </p>
            <ul className="mt-3 space-y-2 pl-4">
              {[
                "Service providers: We use Resend (resend.com) to deliver email notifications from our contact form. Your contact information is transmitted to Resend solely to deliver your message to our inbox. Resend is subject to their own privacy policy.",
                "Legal requirements: We may disclose information if required by law, court order, or governmental authority.",
                "Business protection: We may disclose information to protect the rights, property, or safety of Flores Clean, our clients, or others, where permitted by law.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                    style={{ background: "oklch(0.65 0.12 195)" }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="text-base font-700 tracking-[-0.015em] mb-3"
              style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Data Retention
            </h2>
            <p>
              We retain contact form submissions for a reasonable period to facilitate follow-up and service delivery. If you become a client, we retain records in accordance with our standard business practices and applicable legal requirements. If you would like your information removed, please contact us and we will action your request promptly.
            </p>
          </div>

          <div>
            <h2
              className="text-base font-700 tracking-[-0.015em] mb-3"
              style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Your Rights Under PIPEDA
            </h2>
            <p>As a Canadian resident, you have the right to:</p>
            <ul className="mt-3 space-y-2 pl-4">
              {[
                "Know what personal information we hold about you",
                "Request access to your personal information",
                "Request correction of inaccurate personal information",
                "Withdraw consent for the use of your personal information (subject to legal or contractual restrictions)",
                "Lodge a complaint with the Office of the Privacy Commissioner of Canada",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                    style={{ background: "oklch(0.65 0.12 195)" }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="text-base font-700 tracking-[-0.015em] mb-3"
              style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Security
            </h2>
            <p>
              We take reasonable steps to protect the personal information you provide against unauthorized access, disclosure, or misuse. Our website is served over HTTPS. Contact form submissions are transmitted to our email system via an encrypted API connection. No transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2
              className="text-base font-700 tracking-[-0.015em] mb-3"
              style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Links to Other Websites
            </h2>
            <p>
              Our website may contain links to third-party websites (such as our social media profiles). We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any external sites you visit.
            </p>
          </div>

          <div>
            <h2
              className="text-base font-700 tracking-[-0.015em] mb-3"
              style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The most current version will always be posted at this URL. Continued use of our contact form following any changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div
            className="p-6 rounded-xl"
            style={{
              background: "oklch(0.10 0 0)",
              border: "1px solid oklch(0.22 0.01 252 / 0.50)",
            }}
          >
            <h2
              className="text-base font-700 tracking-[-0.015em] mb-3"
              style={{ color: "oklch(0.88 0 0)", fontFamily: "var(--font-heading)" }}
            >
              Contact & Privacy Questions
            </h2>
            <p className="mb-4">
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <address className="not-italic space-y-1">
              <p style={{ color: "oklch(0.70 0 0)" }}>{siteConfig.name}</p>
              <p style={{ color: "oklch(0.60 0 0)" }}>{siteConfig.address.street}</p>
              <p style={{ color: "oklch(0.60 0 0)" }}>{siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postal}</p>
              <p className="mt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  style={{ color: "oklch(0.65 0.12 195)" }}
                  className="transition-colors duration-150 focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                >
                  {siteConfig.email}
                </a>
              </p>
              {siteConfig.phone && (
                <p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover-teal-bright focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.12_195)]"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              )}
            </address>
          </div>
        </div>
      </div>
    </section>
  )
}
