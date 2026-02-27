# Thuy Dang Portfolio

A modern, animated portfolio website for Dang Bich Thuy - Senior Talent Acquisition Specialist, built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS v4.2.1 with custom theme
- **Animations:** Framer Motion 12.34.3
- **Icons:** Lucide React 0.575.0
- **Fonts:** Playfair Display (display) + Inter (body)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd thuy-portfolito

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & SEO metadata
│   ├── page.tsx            # Home page composing all sections
│   └── globals.css         # Tailwind v4 theme + CSS custom properties
├── components/
│   ├── layout/
│   │   ├── header.tsx      # Sticky nav with smooth scroll
│   │   └── footer.tsx      # Copyright footer
│   ├── sections/
│   │   ├── hero-section.tsx      # Hero with name/title/CTA
│   │   ├── about-section.tsx     # Bio and stats
│   │   ├── experience-section.tsx # Work history timeline
│   │   ├── skills-section.tsx    # Skill progress bars
│   │   ├── partnerships-section.tsx # Industry badges
│   │   └── contact-section.tsx   # Contact info cards
│   └── ui/
│       ├── motion-card.tsx       # Animated card with 3D hover
│       ├── animated-text.tsx     # Letter-by-letter animation
│       ├── progress-bar.tsx      # Animated skill progress
│       └── floating-element.tsx  # Floating animation wrapper
└── lib/
    ├── animations.ts       # Framer Motion variants
    └── data.ts             # Resume content data
```

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| warm-cream | #FFF8F0 | Primary background |
| soft-coral | #FF7F6E | Accent, CTAs |
| warm-brown | #8B5E3C | Primary text |
| soft-peach | #FFCDB2 | Secondary background |
| muted-gold | #D4A574 | Secondary text |
| deep-burgundy | #722F37 | Hover states |

### Typography

- **Display:** Playfair Display (headlines)
- **Body:** Inter (body text)

## Features

- Responsive design (mobile-first)
- Smooth scroll navigation
- Animated sections with Framer Motion
- 3D card hover effects
- Letter-by-letter text animation
- Floating decorative elements
- Reduced motion support for accessibility
- SEO optimized with metadata

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your repository directly to Vercel for automatic deployments.

## Documentation

Additional documentation available in `./docs/`:

- [Project Overview & PDR](./docs/project-overview-pdr.md)
- [Codebase Summary](./docs/codebase-summary.md)
- [Code Standards](./docs/code-standards.md)
- [System Architecture](./docs/system-architecture.md)
- [Project Roadmap](./docs/project-roadmap.md)

## License

Private project. All rights reserved.
