import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Call, email, or send a message — we respond within one business day.`,
}

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-base-content/60 mt-4 max-w-xl mx-auto">
          Ready to get started or have a question? We're here to help. Fill out the form or reach us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-2">Phone</h2>
            <a href={`tel:${siteConfig.phone}`} className="text-primary link link-hover text-lg">
              {siteConfig.phone}
            </a>
            <p className="text-base-content/60 text-sm mt-1">Available 24/7 for emergencies</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Email</h2>
            <a href={`mailto:${siteConfig.email}`} className="text-primary link link-hover">
              {siteConfig.email}
            </a>
            <p className="text-base-content/60 text-sm mt-1">We respond within one business day</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Location</h2>
            <address className="not-italic text-base-content/70">
              {siteConfig.address.street}<br />
              {siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postal}
            </address>
            <p className="text-base-content/60 text-sm mt-1">{siteConfig.serviceArea}</p>
          </div>
        </div>

        {/* Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
