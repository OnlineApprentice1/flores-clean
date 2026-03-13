import type { Metadata, Viewport } from "next"
import { Urbanist, Outfit } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { siteConfig } from "@/config/site"

const headingFont = Urbanist({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const bodyFont = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
})

export const viewport: Viewport = {
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor.dark },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.themeColor.dark },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url || "http://localhost:3000"),
  title: {
    default: siteConfig.name
      ? `${siteConfig.name}${siteConfig.tagline ? ` | ${siteConfig.tagline}` : ""}`
      : "Site",
    template: siteConfig.name ? `%s | ${siteConfig.name}` : "%s",
  },
  description: siteConfig.description || undefined,
  openGraph: {
    type: "website",
    siteName: siteConfig.name || undefined,
    locale: siteConfig.locale,
  },
  robots: { index: true, follow: true },
}

// LocalBusiness JSON-LD — CleaningService type for commercial cleaning
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  ...(siteConfig.name && { name: siteConfig.name }),
  ...(siteConfig.description && { description: siteConfig.description }),
  ...(siteConfig.url && { url: siteConfig.url }),
  ...(siteConfig.phone && { telephone: siteConfig.phone }),
  ...(siteConfig.email && { email: siteConfig.email }),
  ...(siteConfig.address.street && {
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postal,
      addressCountry: siteConfig.address.country,
    },
  }),
  ...(siteConfig.coordinates.lat != null && {
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
  }),
  ...(siteConfig.priceRange && { priceRange: siteConfig.priceRange }),
  ...(siteConfig.serviceArea && { areaServed: siteConfig.serviceArea }),
  ...(siteConfig.foundedYear && { foundingDate: String(siteConfig.foundedYear) }),
  ...(siteConfig.hours.schema.length > 0 && {
    openingHoursSpecification: siteConfig.hours.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.open,
      closes: h.close,
    })),
  }),
  ...(siteConfig.services.length > 0 && {
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Cleaning Services",
      itemListElement: siteConfig.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.description },
      })),
    },
  }),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="flores-dark">
      <head>
        <meta name="color-scheme" content="dark" />
        {siteConfig.name && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
        )}
      </head>
      <body
        className={`
          ${headingFont.variable}
          ${bodyFont.variable}
          antialiased
          min-h-dvh
          flex flex-col
          bg-base-100
          text-base-content
          [padding-left:env(safe-area-inset-left,0px)]
          [padding-right:env(safe-area-inset-right,0px)]
        `}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
