# WebGlow Studio

Premium marketing site for **WebGlow Studio** (webglow.studio) — a modern web design studio building high-converting websites for real estate agents and local service businesses.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Project structure

```
src/
  app/                  # App Router layout, page, globals
  components/
    layout/             # Navbar, Footer
    sections/           # Landing page sections
    ui/                 # Button, Accordion, FadeIn, mockups
  lib/
    constants.ts        # Packages, FAQ, copy, nav links
```

## Brand

- **Name:** WebGlow Studio  
- **Tagline:** Websites that glow with results  
- **Accent:** `#3B82F6` on cream `#FAFAF9`  
- **Typography:** Inter (body) + Geist (display)

## Customize

- Packages & pricing: `src/lib/constants.ts`
- Booking CTA: update `BOOKING_URL` and `mailto:` links
- SEO: `src/app/layout.tsx` metadata

## Deploy

Deploy to [Vercel](https://vercel.com) or any Node host:

```bash
npm run build
npm run start
```
