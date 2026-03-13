// ============================================================
// SITE CONFIG — Flores Clean
// Phase 1 filled: 2026-03-13
// ============================================================

export type ColorPalette = "trades-bold" | "trades-subdued" | "trades-premium" | "flores-dark"

export type Service = {
  name: string
  slug: string
  description: string
}

export const siteConfig = {
  // ── Identity ──────────────────────────────────────
  name: "Flores Clean",
  tagline: "Commercial Cleaning for GTA Businesses",
  description: "Flores Clean provides professional commercial cleaning services across the GTA — offices, medical facilities, retail spaces, and post-construction sites. Fully insured, WSIB covered, ISSA CIMS-GB certified, with a dedicated account manager for every client.",
  url: "https://floresclean.ca",

  // ── Contact ───────────────────────────────────────
  phone: "416-880-3291",
  email: "info@floresclean.ca",

  // ── Address ───────────────────────────────────────
  address: {
    street: "55 Commerce Valley Drive East, Unit 12",
    city: "Thornhill",
    province: "ON",
    postal: "L3T 7V9",
    country: "CA",
  },

  // BLOCKER-02: Approximate GPS coordinates for 55 Commerce Valley Dr E, Thornhill ON
  // Confirm exact coordinates with owner before Phase 5
  coordinates: { lat: 43.8480 as number | null, lng: -79.4060 as number | null },

  // ── Business ──────────────────────────────────────
  ownerName: "Diana Flores",
  foundedYear: 2019,
  serviceArea: "Vaughan, Thornhill, Richmond Hill, Markham, North York, Mississauga",
  priceRange: "$$",

  // BLOCKER-05: Hours estimated — confirm with owner
  hours: {
    display: "Mon–Fri 6AM–10PM, Sat 7AM–5PM",
    schema: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], open: "06:00", close: "22:00" },
      { days: ["Saturday"], open: "07:00", close: "17:00" },
    ],
    notes: "Estimated hours — confirm with owner",
  },

  // ── Services ──────────────────────────────────────
  services: [
    {
      name: "Office & Workspace Cleaning",
      slug: "office-workspace-cleaning",
      description: "Regular and recurring cleaning for offices, boardrooms, lobbies, and shared workspaces. Customizable schedules — daily, weekly, or bi-weekly.",
    },
    {
      name: "Medical & Dental Facility Cleaning",
      slug: "medical-dental-cleaning",
      description: "Specialized cleaning protocols for medical and dental offices, clinics, and health facilities. Disinfection-focused, compliance-aware.",
    },
    {
      name: "Retail & Showroom Cleaning",
      slug: "retail-showroom-cleaning",
      description: "Presentation-grade cleaning for retail stores, showrooms, and customer-facing commercial spaces. Detail-oriented and schedule-flexible.",
    },
    {
      name: "Post-Construction Cleanup",
      slug: "post-construction-cleanup",
      description: "Complete debris removal and deep cleaning after construction or renovation. We handle the mess so your space is move-in ready.",
    },
    {
      name: "Floor Care & Maintenance",
      slug: "floor-care-maintenance",
      description: "Professional floor stripping, waxing, and buffing for commercial hard floors. Restore shine and extend floor life.",
    },
    {
      name: "Janitorial Supply Management",
      slug: "janitorial-supply-management",
      description: "We stock and manage your janitorial supplies as part of your service contract — paper products, soaps, liners, and more.",
    },
  ] as Service[],

  // ── Trust & Social ────────────────────────────────
  trustSignals: [
    "Fully insured & bonded",
    "WSIB covered",
    "ISSA CIMS-GB certified (Green Building)",
    "Background-checked employees",
    "Dedicated account manager per client",
    "Same-day response for urgent needs",
    "Commercial-only specialists",
    "22-person professional team",
    "7 years serving GTA businesses",
  ],
  // BLOCKER-04: Real social URLs — placeholder until provided
  social: {
    facebook: "https://facebook.com/floresclean",
    instagram: "https://instagram.com/floresclean",
    google: "",
    linkedin: "https://linkedin.com/company/floresclean",
  },

  // ── Pages ─────────────────────────────────────────
  pages: {
    services: true,
    about: true,
    faq: true,
    blog: false,
    contact: true,
  },

  // ── Theme ─────────────────────────────────────────
  // Custom dark palette — "flores-dark"
  // Deep charcoal base, electric teal accent, crisp white text
  colorPalette: "flores-dark" as ColorPalette,
  themeColor: { light: "#0ea5a9", dark: "#0a0a0a" },

  // ── Locale ────────────────────────────────────────
  locale: "en_CA",
  currency: "CAD",
}
