import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function Footer() {
  const year = new Date().getFullYear()
  const hasSocial = siteConfig.social.facebook || siteConfig.social.instagram || siteConfig.social.google

  return (
    <footer className="bg-neutral text-neutral-content mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="font-bold text-lg mb-3">{siteConfig.name}</h3>
          {siteConfig.tagline && <p className="text-sm opacity-80">{siteConfig.tagline}</p>}
          {siteConfig.serviceArea && <p className="text-sm opacity-80 mt-2">{siteConfig.serviceArea}</p>}
          {siteConfig.hours.display && <p className="text-sm opacity-80 mt-2">{siteConfig.hours.display}</p>}
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold text-lg mb-3">Navigation</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="link link-hover">Home</Link></li>
            {siteConfig.pages.services && <li><Link href="/services" className="link link-hover">Services</Link></li>}
            {siteConfig.pages.about && <li><Link href="/about" className="link link-hover">About</Link></li>}
            {siteConfig.pages.faq && <li><Link href="/faq" className="link link-hover">FAQ</Link></li>}
            {siteConfig.pages.blog && <li><Link href="/blog" className="link link-hover">Blog</Link></li>}
            {siteConfig.pages.contact && <li><Link href="/contact" className="link link-hover">Contact</Link></li>}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <div className="text-sm space-y-1 opacity-80">
            {siteConfig.address.street && <p>{siteConfig.address.street}</p>}
            {siteConfig.address.city && (
              <p>{siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postal}</p>
            )}
            {siteConfig.phone && (
              <a href={`tel:${siteConfig.phone}`} className="link link-hover block mt-2">{siteConfig.phone}</a>
            )}
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`} className="link link-hover block">{siteConfig.email}</a>
            )}
          </div>
          {hasSocial && (
            <div className="flex gap-3 mt-4">
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="link link-hover text-sm">Facebook</a>
              )}
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="link link-hover text-sm">Instagram</a>
              )}
              {siteConfig.social.google && (
                <a href={siteConfig.social.google} target="_blank" rel="noopener noreferrer" className="link link-hover text-sm">Google</a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-neutral-content/20 py-4 px-4 text-center text-sm opacity-60">
        <p>
          &copy; {year} {siteConfig.name}. All rights reserved.
          {" "}<Link href="/privacy" className="link link-hover">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  )
}
