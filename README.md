# Masterpet Landing Page

Public marketing site for [Masterpet](https://www.masterpet.co.in) — at-home pet grooming in Kochi. Built to attract bookings, rank for local searches, and present the brand professionally.

**Live site:** [www.masterpet.co.in](https://www.masterpet.co.in)

---

## What this project is

A production Next.js website for a real pet-care business: landing page, local area pages, blog, contact, legal pages, and an internal grooming report tool. It is published here for **portfolio viewing only** (see [LICENSE](LICENSE)).

---

## What was built (and why)

### Marketing & conversion
- **Homepage** — hero, pricing, process, testimonials, gallery, video showcase, FAQ, and final CTA aimed at WhatsApp bookings.
- **Contact page** — form that opens WhatsApp with a pre-filled message; phone, email, and map.
- **Brand polish** — consistent layout, mascot assets, and trust signals (e.g. 2000+ pet parents, review platforms).

### Local SEO (Kochi / Ernakulam)
- **80+ area pages** (`/kochi-pet-grooming/[area]`) — one page per neighbourhood so the business can rank for “pet grooming in [area]”.
- **Area hub** — `/kochi-pet-grooming` with carousel and links to all areas.
- **Structured data** — LocalBusiness (NAP), FAQ, breadcrumbs, and ratings aligned with on-page content.
- **Sitemaps & feeds** — dynamic sitemap, blog sitemap, and RSS for discoverability.
- **Footer service areas** — crawlable links to every area page (featured areas + expandable full list).

### Content
- **Blog** — MDX-style posts with archive, SEO metadata, and social sharing.

### Grooming operations
- **Grooming report** (`/grooming-report`) — staff-facing form for pet details, health checks, and groomer notes.
- **PDF export** — branded report PDF generated server-side for clients.

### Performance & quality
- **Server-first UI** — many sections rendered on the server to keep the public site fast.
- **Accessibility** — focus management, semantic headings, icon + text contact links, and FAQ panels that hide correctly for assistive tech.
- **Security headers** — middleware hardening on all routes; sensitive admin/dashboard surfaces removed from the public codebase.

### Legal & compliance
- Privacy, terms, cancellation, return policy, and account deletion pages.

---

## Tech stack

Next.js (App Router) · React · TypeScript · Tailwind CSS · shadcn/ui · Supabase (storage/uploads) · Puppeteer (PDFs) · Vercel

---

## Run locally (optional)

Requires Node 18+ and a `.env.local` based on `.env.example` (Supabase, maps, etc. for full functionality).

```sh
git clone git@github.com:masterpet-care/Masterpet-landing-page.git
cd Masterpet-landing-page
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Author

- [@shanejms2](https://github.com/shanejms2) — frontend and backend development

---

## License

**Proprietary — portfolio / viewing only.** See [LICENSE](LICENSE). You may view and reference this work in a portfolio; you may not copy, deploy, or reuse the code without written permission from Masterpet Care Private Limited.

Questions: **hello@masterpet.co.in**
