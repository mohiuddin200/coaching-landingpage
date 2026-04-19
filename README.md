# MentorBase

MentorBase is an all-in-one cloud platform for coaching institutes to manage students, teachers, attendance, exams, finances, and SMS notifications. Built for non-technical institute owners, it replaces paper registers and scattered spreadsheets with one self-service, mobile-ready system.

This repository contains the **marketing landing page** for MentorBase.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS v4, Lucide icons
- **Animation:** Framer Motion, GSAP, Lenis (smooth scroll)
- **3D / Visual FX:** Three.js via `@react-three/fiber` and `@react-three/drei`
- **Theming:** `next-themes` (dark mode default)

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server with Turbopack |
| `npm run build` | Build the production bundle |
| `npm run start` | Run the production build locally |
| `npm run lint` | Lint the project with ESLint |

## Project Structure

```
src/
├── app/                  # Next.js App Router (layout, page, sitemap, robots)
├── components/
│   ├── animations/       # Scroll reveal, motion primitives
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, Features, Pricing, FAQ, CTA, etc.
│   └── ui/               # Reusable UI primitives (device frames, buttons)
└── lib/                  # Shared utilities
public/                   # Static assets (icons, images, manifest)
```

## Environment Variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SITE_URL=https://mentorbase.io
```

This value is used for SEO metadata, canonical URLs, Open Graph tags, `robots.txt`, and `sitemap.xml`. Falls back to `https://mentorbase.io` if not set.

## Deployment

The project is configured for deployment on [Vercel](https://vercel.com). Push to the main branch to trigger a production deployment, or open a pull request for a preview deployment.

Set `NEXT_PUBLIC_SITE_URL` in the Vercel project's environment variables before deploying to production.

## License

Proprietary — all rights reserved.
