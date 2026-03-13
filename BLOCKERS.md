# BLOCKERS — Flores Clean

Last updated: 2026-03-13 (Phase 5 — Build & Deploy)

---

## Open Blockers

### BLOCKER-01 — Resend API Key
- **Severity:** MEDIUM (contact form non-functional without it)
- **Status:** OPEN — carried into production
- **Description:** Resend API key is required for the contact form to send emails. A placeholder has been staged in `.env.local`. Build and deploy proceeded without it; the contact form will return an error until configured.
- **Action:** Obtain from Resend dashboard and update `.env.local` on the production server.
- **Blocks:** Contact form email delivery only

### BLOCKER-03 — Real Project Photos
- **Severity:** LOW (non-blocking for Phase 5 deploy)
- **Status:** OPEN
- **Description:** All images are using `placehold.co` placeholders. Real photography would significantly improve the visual impact, particularly in the hero, client type selector, and about page. Phase 4 completed with placeholders in place.
- **Action:** Request from Diana Flores. Drop replacements into the `public/` directory and update `src` props in components.
- **Blocks:** Nothing hard — site is deployable with placeholders.

### BLOCKER-04 — Social Media URLs
- **Severity:** LOW (non-blocking)
- **Status:** OPEN
- **Description:** LinkedIn, Instagram, and Facebook URLs are placeholders in `config/site.ts`. Real profile URLs needed.
- **Action:** Confirm with Diana Flores.
- **Blocks:** Nothing critical — footer social links will point to placeholder URLs until resolved.

### BLOCKER-05 — Business Hours
- **Severity:** LOW (non-blocking)
- **Status:** OPEN
- **Description:** Hours estimated as Mon–Fri 6AM–10PM, Sat 7AM–5PM. Needs owner confirmation.
- **Action:** Confirm with Diana Flores.
- **Blocks:** Nothing critical.

---

## Resolved Blockers

### BLOCKER-02 — GPS Coordinates
- **Severity:** LOW
- **Status:** RESOLVED (Phase 4)
- **Resolution:** Approximate coordinates for 55 Commerce Valley Drive East, Thornhill ON added to `config/site.ts` (lat: 43.8480, lng: -79.4060). Owner should confirm exact coordinates before final deploy, but schema is now populated.

---

## Notes

- Phase 0.5 (domain & email migration) skipped — new domain, no migration needed.
- Build should be deployed to `floresclean.ca` (Namecheap/cPanel).
- Phase 4 completed 2026-03-13.
- Phase 5 completed 2026-03-13. Build output committed to repo. Deployed to GitHub (test build — no cPanel deploy).
- BLOCKER-01 (Resend API key) carried into production — contact form non-functional until configured.
