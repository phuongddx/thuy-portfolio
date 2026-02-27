# Codebase Summary

## Overview

Single-page Next.js portfolio application using App Router pattern with TypeScript.

## Component Architecture

### Layout Components (`src/components/layout/`)

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `header.tsx` | Navigation | Sticky header, mobile menu, scroll detection |
| `footer.tsx` | Page footer | Copyright notice, minimal design |

### Section Components (`src/components/sections/`)

| Component | Purpose | Data Source |
|-----------|---------|-------------|
| `hero-section.tsx` | Landing hero | `resumeData.name`, `resumeData.title` |
| `about-section.tsx` | Bio and stats | `resumeData.bio`, `resumeData.stats` |
| `experience-section.tsx` | Work history | `resumeData.experience` |
| `skills-section.tsx` | Skills display | `resumeData.skills` |
| `partnerships-section.tsx` | Industries | `resumeData.industries` |
| `contact-section.tsx` | Contact info | `resumeData.contact` |

### UI Components (`src/components/ui/`)

| Component | Purpose | Props |
|-----------|---------|-------|
| `motion-card.tsx` | Animated card container | `children`, `className`, `delay` |
| `animated-text.tsx` | Text animation wrapper | `text`, `as`, `stagger`, `delay`, `className` |
| `progress-bar.tsx` | Skill progress display | `label`, `value`, `delay` |
| `floating-element.tsx` | Float animation wrapper | `children`, `duration`, `distance`, `className` |

## Data Flow

```
src/lib/data.ts (resumeData)
    │
    ├──> Section components (direct import)
    │       │
    │       └──> UI components (props)
    │
    └──> Static data, no API calls
```

### Data Model

```typescript
interface ResumeData {
  name: string;
  title: string;
  bio: string;
  stats: Array<{ label: string; value: string }>;
  experience: Array<{
    company: string;
    position: string;
    period: string;
    description: string;
    highlights: string[];
  }>;
  skills: Array<{ label: string; value: number }>;
  industries: string[];
  contact: {
    phone: string;
    email: string;
    location: string;
    linkedin: string;
  };
}
```

## Animation System

### Framer Motion Variants (`src/lib/animations.ts`)

| Variant | Purpose | Properties |
|---------|---------|------------|
| `fadeInUp` | Standard entry | opacity, y translation |
| `fadeIn` | Simple fade | opacity only |
| `staggerContainer` | Child stagger | delayChildren, staggerChildren |
| `cardHover` | 3D card effect | scale, rotateY, rotateX, boxShadow |
| `letterStagger` | Text animation | per-letter delay |
| `scaleIn` | Scale entry | opacity, scale |
| `slideInLeft/Right` | Directional entry | opacity, x translation |
| `floatAnimation` | Continuous float | y loop |

### Usage Pattern

```tsx
// Section animation
<motion.div
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={staggerContainer}
>

// Card hover
<motion.div
  initial="rest"
  whileHover="hover"
  variants={cardHover}
>
```

## Styling Patterns

### Tailwind v4 Theme (`globals.css`)

```css
@theme {
  --color-warm-cream: #FFF8F0;
  --color-soft-coral: #FF7F6E;
  /* ... */
}
```

### CSS Custom Properties

- `--bg-*`: Background colors
- `--text-*`: Text colors
- `--accent-*`: Accent colors
- `--border-*`: Border colors
- `--font-*`: Typography
- `--text-*`: Font sizes
- `--ease-*`, `--duration-*`: Animation

### Component Styling

- Tailwind utility classes
- Custom theme colors via `bg-warm-cream`, `text-soft-coral`, etc.
- Responsive prefixes: `md:`, `lg:`
- State variants: `hover:`, `focus:`

## Key Patterns

### Client Component Pattern

```tsx
"use client";

import { motion } from "framer-motion";

export function Component() {
  // Client-side logic
}
```

### Section Structure Pattern

```tsx
<section id="section-id" className="min-h-screen py-20">
  <div className="mx-auto max-w-6xl px-4">
    {/* Content */}
  </div>
</section>
```

### Accessibility Pattern

```tsx
// Reduced motion support
const shouldReduceMotion = useReducedMotion();

whileHover={shouldReduceMotion ? undefined : "hover"}
```

## File Organization

- `app/`: Next.js App Router pages
- `components/layout/`: Structural components
- `components/sections/`: Page sections
- `components/ui/`: Reusable UI primitives
- `lib/`: Utilities and data
