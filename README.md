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
