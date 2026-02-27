# Thuy Dang Portfolio Landing Page

## Overview
Professional HR recruiter portfolio with heartwarming theme, motion-driven interactions, and warm aesthetics.

## Tech Stack
- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display + Inter (Google Fonts)
- **Deployment**: Vercel

## Design System
```yaml
colors:
  warm-cream: "#FFF8F0"    # Background
  soft-coral: "#FF7F6E"    # Primary accent
  warm-brown: "#8B5E3C"    # Text primary
  soft-peach: "#FFCDB2"    # Card backgrounds
  muted-gold: "#D4A574"    # Secondary accent
  deep-burgundy: "#722F37" # CTA hover

typography:
  headlines: Playfair Display (serif)
  body: Inter (sans-serif)
```

## Architecture
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── sections/     # 6 page sections
│   ├── ui/           # Reusable motion components
│   └── layout/       # Header, Footer
├── lib/
│   ├── animations.ts # Framer Motion variants
│   └── data.ts       # Resume content
└── public/images/
```

## Phases

| # | Phase | Status | Priority |
|---|-------|--------|----------|
| 1 | [Setup & Config](./phase-01-setup.md) | ✅ Complete | High |
| 2 | [Design System](./phase-02-design-system.md) | ✅ Complete | High |
| 3 | [Core Components](./phase-03-core-components.md) | ✅ Complete | High |
| 4 | [Page Sections](./phase-04-sections.md) | ✅ Complete | High |
| 5 | [Polish & Deploy](./phase-05-polish-deploy.md) | ✅ Complete | Medium |

## Key Dependencies
- Phase 2 → Phase 3 (design tokens needed for components)
- Phase 3 → Phase 4 (core components needed for sections)
- Phase 4 → Phase 5 (sections needed for testing)

## Success Criteria
- [x] Build succeeds (Next.js 16.1.6)
- [x] Tailwind v4 custom colors configured
- [x] Framer Motion animations with reduced motion support
- [x] All 6 sections implemented
- [x] Header with smooth scroll navigation
- [x] Footer with copyright
- [x] SEO metadata configured
- [ ] Lighthouse Performance > 90 (manual test)
- [ ] Mobile-responsive (375px - 1440px) (manual test)
- [ ] WCAG 2.1 AA accessible (manual test)
- [ ] Deployed on Vercel (manual deployment)

## Resume Data Source
- `/resources/ThuyDang.pdf` - Thuy Dang's CV content

## Validation Log

### Session 1 — 2026-02-27
**Trigger:** Pre-implementation validation
**Questions asked:** 4

#### Questions & Answers

1. **[Architecture]** Tailwind v4 has breaking syntax changes. Which version should we use?
   - Options: Tailwind v4 (Recommended) | Tailwind v3 stable | Auto-detect
   - **Answer:** Tailwind v4 (Recommended)
   - **Rationale:** Use new @theme syntax for cleaner configuration

2. **[Scope]** About section needs a photo. What approach if no real photo available?
   - Options: Avatar placeholder | No photo section | Text-based hero
   - **Answer:** Avatar placeholder
   - **Rationale:** Use generic avatar initially, easy to swap later

3. **[Scope]** Partnerships section has no actual company logos. How to handle?
   - Options: Industry badges only | Placeholder logos | Remove section
   - **Answer:** Industry badges only
   - **Rationale:** Show industry tags with animated marquee, no placeholder boxes

4. **[Architecture]** Contact section: mailto link or actual contact form?
   - Options: Direct links (Recommended) | Contact form | Hybrid approach
   - **Answer:** Direct links (Recommended)
   - **Rationale:** mailto + phone + LinkedIn, no backend needed

#### Confirmed Decisions
- Tailwind: v4 with @theme syntax
- Photo: Avatar placeholder (swap-ready)
- Partnerships: Industry badges with marquee animation
- Contact: Direct links only (no form)

#### Action Items
- [x] Phase 1: Use Tailwind v4 syntax
- [x] Phase 4: Replace logo placeholders with industry badges
- [x] Phase 4: Add avatar placeholder to About section
