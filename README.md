# Masterpet Landing Page

A modern, production-ready web application for Masterpet, built with Next.js, React, TypeScript, and TailwindCSS. This project powers the landing page and core features for Masterpet's grooming and pet care services, including a robust grooming report system with PDF generation and a documented API.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Development Workflow](#development-workflow)
- [Contributing](#contributing)
- [License & Contact](#license--contact)
- [NAP + Schema Implementation](#nap--schema-implementation)
- [Sitemap.xml for SEO](#sitemapxml-for-seo)
- [Page Structure Overview](#page-structure-overview)
- [Sitemap Maintenance](#sitemap-maintenance)
- [Legacy URL Redirects](#legacy-url-redirects)

---

## Features
- **Grooming Report System:**
  - Create, edit, and view detailed grooming reports for pets.
  - Upload pet images and record all relevant details (parent, breed, age, etc.).
  - Interactive form for health checks (Ears, Eyes, Coat/Skin, etc.) and groomer comments.
- **PDF Generation:**
  - Generate professional, branded PDF reports using Puppeteer and your actual report layout.
  - Downloadable via API or script.
- **API Endpoint:**
  - `/api/generate-grooming-report` for programmatic PDF generation (see [API Documentation](docs/grooming-report-api.md)).
- **Modern UI/UX:**
  - Built with React, Next.js, and TailwindCSS for a responsive, accessible, and beautiful experience.
- **Developer Friendly:**
  - TypeScript types, modular components, and clear code structure.

---

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Puppeteer](https://pptr.dev/) (for PDF generation)
- [Shadcn/UI](https://ui.shadcn.com/) (UI components)

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm, yarn, pnpm, or bun

### Installation
```sh
# Clone the repo
git clone git@github.com:masterpet-care/Masterpet-landing-page.git
cd Masterpet-landing-page

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running Locally
```sh
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## API Documentation

See [docs/grooming-report-api.md](docs/grooming-report-api.md) for details on the Grooming Report PDF Generation API endpoint, request/response format, and usage examples.

---

## Development Workflow
- **Branching:**
  - `main`: Production-ready code
  - `develop`: Active development
  - Feature/bugfix branches: `feature/<name>`, `bugfix/<name>`
- **Committing:**
  - Use clear, conventional commit messages (e.g., `feat:`, `fix:`, `docs:`)
- **Merging:**
  - Merge feature/bugfix branches into `develop`
  - Merge `develop` into `main` for releases

---

## Contributing
We welcome contributions! To get started:
1. Fork the repo and create your branch from `develop`.
2. Follow the code style and best practices (TypeScript, TailwindCSS, accessibility).
3. Submit a pull request with a clear description of your changes.

---

## License & Contact
- **License:** MIT (see `LICENSE` file)
- **Contact:** masterpetindia@gmail.com

---

For questions, issues, or feature requests, please open an issue or contact us at the email above.

## NAP + Schema Implementation

### What is NAP + Schema?
- **NAP** stands for **Name, Address, Phone Number**—the essential business contact details.
- **Schema** refers to [schema.org](https://schema.org) structured data, which helps search engines understand and display your business info in rich results.
- Having consistent, visible NAP info and schema markup is crucial for local SEO and Google My Business.

### How It's Implemented
- The business NAP info (name, address, phone, WhatsApp, email, hours, website) is **visibly displayed in the footer** of every page.
- The NAP info is also marked up using [LocalBusiness schema](https://schema.org/LocalBusiness) via a React component: `src/components/NAPSchema.tsx`.
- The `NAPSchema` component injects JSON-LD structured data into the homepage for SEO.
- All contact methods are clickable and accessible.

### How to Update Business Info
- To change the visible NAP info, edit the relevant section in `src/components/Footer.tsx`.
- To update the structured data, edit the business details in `src/components/NAPSchema.tsx`.
- Make sure both are kept in sync for best SEO results.

---

For more details on local SEO and schema, see [Google's documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business).

## Sitemap.xml for SEO

A dynamic sitemap is automatically generated at `/sitemap.xml` to help search engines discover and index all important pages of the site.

- **URL:** `https://masterpet.co.in/sitemap.xml`
- **Type:** Dynamic (auto-updates with main static routes)
- **How to use:**
  1. Deploy your changes to production.
  2. Go to [Google Search Console](https://search.google.com/search-console/).
  3. Add your property if not already done.
  4. Navigate to the Sitemaps section.
  5. Enter `https://masterpet.co.in/sitemap.xml` and submit.

**Pages included:** Home, Privacy Policy, Terms & Conditions, Cancellation Policy, Return Policy, Grooming Report (and more as needed).

If you add new static or dynamic pages, update `src/app/sitemap.xml/route.ts` to include them in the sitemap.

## Page Structure Overview

**Main Pages:**
- `/` — Homepage: Hero, services, testimonials, FAQ, and mascot illustration.
- `/privacy` — Privacy Policy.
- `/terms-and-conditions` — Terms & Conditions.
- `/cancellation-policy` — Cancellation Policy.
- `/return-policy` — Return & Refund Policy.
- `/grooming-report` — Interactive grooming report form.
- `/contact` — Contact form (WhatsApp integration, map, direct info).
- `/account-deletion` — Account deletion request form.

All pages are built with accessibility and SEO in mind, using TailwindCSS for styling and modular React components.

## Sitemap Maintenance

- The sitemap at `/sitemap.xml` is generated dynamically from `src/app/sitemap.xml/route.ts`.
- **Important:** The `staticPages` array in this file must match your actual route slugs (e.g., `'privacy'`, not `'privacy-policy'`).
- If you add new static or dynamic pages, update this array to ensure they are indexed by search engines.

## Google Maps Integration

The website includes an interactive Google Maps component showing service areas and business location to improve local SEO and "near me" rankings.

### Setup Instructions:

1. **Get Google Maps API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable the following APIs:
     - Maps JavaScript API
     - Places API
   - Create credentials (API Key)
   - Restrict the API key to your domain for security

2. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```bash
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. **Features:**
   - Interactive map showing business location (Aluva)
   - Service area markers across Kochi
   - Clickable info windows with business details
   - Mobile-responsive design
   - Fallback display when API key is not configured

4. **SEO Benefits:**
   - Improves "near me" search rankings
   - Shows service coverage visually
   - Enhances local business credibility
   - Provides location-based user experience

## Legacy URL Redirects

> **Note:**  
> To preserve SEO value and avoid 404 errors for old URLs, permanent redirects are configured in `next.config.js`:
> - `/privacy-policy.html` → `/privacy`
> - `/terms-and-conditions.html` → `/terms-and-conditions`
>
> If you add or change routes, consider whether legacy redirects are needed for SEO or user experience.
