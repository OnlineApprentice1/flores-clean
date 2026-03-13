# BLOCKERS — Flores Clean

Last updated: 2026-03-13 (Phase 1 — Scaffold & Baseline)

---

## Open Blockers

### BLOCKER-01 — Resend API Key
- **Severity:** CRITICAL (blocks Phase 5 — Deploy)
- **Status:** OPEN
- **Description:** Resend API key is required for the contact form to send emails. A placeholder has been staged in `.env.local`.
- **Action:** Obtain from Resend dashboard and update `.env.local` before Phase 5.
- **Blocks:** Phase 5 (Deploy)

### BLOCKER-02 — GPS Coordinates
- **Severity:** LOW (non-blocking — schema degrades gracefully)
- **Status:** OPEN
- **Description:** Latitude and longitude for 55 Commerce Valley Drive East, Unit 12, Thornhill ON are needed for full LocalBusiness GeoCoordinates schema. Currently `null` in `config/site.ts`.
- **Action:** Owner confirmation required, or use Google Maps to look up approximate coordinates.
- **Blocks:** Nothing — LocalBusiness JSON-LD renders without coordinates.

### BLOCKER-03 — Real Project Photos
- **Severity:** LOW (non-blocking for Phase 1–4)
- **Status:** OPEN
- **Description:** All images are using `placehold.co` placeholders. Real photography of commercial spaces, team, or facilities needed for final polish.
- **Action:** Request from Diana Flores before Phase 4 polish sign-off.
- **Blocks:** Phase 4 sign-off if placeholders remain in hero/key sections.

### BLOCKER-04 — Social Media URLs
- **Severity:** LOW (non-blocking)
- **Status:** OPEN
- **Description:** LinkedIn, Instagram, and Facebook URLs are placeholders in `config/site.ts`. Real profile URLs needed.
- **Action:** Confirm with Diana Flores.
- **Blocks:** Nothing critical — footer social links will point to placeholder URLs until resolved.

### BLOCKER-05 — Business Hours
- **Severity:** LOW (non-blocking)
- **Status:** OPEN
- **Description:** Hours estimated as Mon–Fri 6AM–10PM, Sat 7AM–5PM based on typical commercial cleaning schedule. Needs owner confirmation.
- **Action:** Confirm with Diana Flores.
- **Blocks:** Nothing critical — hours are populated with estimates that display correctly.

---

## Resolved Blockers

None yet — Phase 1 complete.

---

## Notes

- Phase 0.5 (domain & email migration) skipped — new domain, no migration needed.
- Build should be deployed to `floresclean.ca` (Namecheap/cPanel).
