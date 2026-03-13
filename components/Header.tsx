import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function Header() {
  return (
    <header className="navbar bg-base-100 shadow-sm px-4 lg:px-8 [padding-top:env(safe-area-inset-top,0px)]">
      {/* Mobile: hamburger */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            {siteConfig.pages.services && <li><Link href="/services">Services</Link></li>}
            {siteConfig.pages.about && <li><Link href="/about">About</Link></li>}
            {siteConfig.pages.faq && <li><Link href="/faq">FAQ</Link></li>}
            {siteConfig.pages.blog && <li><Link href="/blog">Blog</Link></li>}
            {siteConfig.pages.contact && <li><Link href="/contact">Contact</Link></li>}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold font-[family-name:var(--font-heading)]">
          {siteConfig.name || "Site"}
        </Link>
      </div>

      {/* Desktop nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {siteConfig.pages.services && <li><Link href="/services">Services</Link></li>}
          {siteConfig.pages.about && <li><Link href="/about">About</Link></li>}
          {siteConfig.pages.faq && <li><Link href="/faq">FAQ</Link></li>}
          {siteConfig.pages.blog && <li><Link href="/blog">Blog</Link></li>}
        </ul>
      </div>

      {/* CTA + phone */}
      <div className="navbar-end gap-2">
        {siteConfig.phone && (
          <a href={`tel:${siteConfig.phone}`} className="btn btn-ghost text-sm font-medium hidden lg:flex">
            {siteConfig.phone}
          </a>
        )}
        {siteConfig.pages.contact && (
          <Link href="/contact" className="btn btn-primary">
            Get a Quote
          </Link>
        )}
      </div>
    </header>
  )
}
