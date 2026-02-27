# System Architecture

## Overview

Single-page Next.js application using App Router with static generation. No backend required.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                     Browser                              │
│                                                          │
│  ┌─────────────────────────────────────────────────┐    │
│  │              React Application                   │    │
│  │                                                  │    │
│  │  ┌─────────────┐    ┌─────────────────────┐    │    │
│  │  │   Header    │    │       Main          │    │    │
│  │  │  (Nav)      │    │    (Sections)       │    │    │
│  │  └─────────────┘    └─────────────────────┘    │    │
│  │                             │                    │    │
│  │  ┌─────────────┐           │                    │    │
│  │  │   Footer    │           ▼                    │    │
│  │  └─────────────┘    ┌─────────────────────┐    │    │
│  │                     │    UI Components    │    │    │
│  │                     │  (Motion, Cards)    │    │    │
│  │                     └─────────────────────┘    │    │
│  │                             │                    │    │
│  │                             ▼                    │    │
│  │                     ┌─────────────────────┐    │    │
│  │                     │   Data & Animations │    │    │
│  │                     │      (lib/)         │    │    │
│  │                     └─────────────────────┘    │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
RootLayout (app/layout.tsx)
├── Header (components/layout/header.tsx)
│   └── Nav (mobile/desktop)
├── Main
│   ├── HeroSection
│   │   ├── AnimatedText
│   │   └── FloatingElement
│   ├── AboutSection
│   │   ├── MotionCard
│   │   └── AnimatedText
│   ├── ExperienceSection
│   │   └── MotionCard
│   ├── SkillsSection
│   │   └── ProgressBar
│   ├── PartnershipsSection
│   │   └── MotionCard
│   └── ContactSection
│       └── MotionCard
└── Footer (components/layout/footer.tsx)
```

## Data Flow

```
┌──────────────────┐
│   resumeData     │  (src/lib/data.ts)
│   Static JSON    │
└────────┬─────────┘
         │
         │ Import
         ▼
┌──────────────────┐
│ Section Components │
│ (Hero, About, etc)│
└────────┬─────────┘
         │
         │ Props
         ▼
┌──────────────────┐
│   UI Components  │
│ (Cards, Bars)    │
└──────────────────┘
```

**Note:** No external API calls or state management. All data is static.

## Next.js App Router Structure

```
app/
├── layout.tsx      # Root layout (fonts, metadata, theme)
├── page.tsx        # Home page (/)
└── globals.css     # Global styles, Tailwind theme
```

### Layout Component

```tsx
// layout.tsx
<html lang="en">
  <body className={fonts + theme}>
    {children}  // Renders page.tsx
  </body>
</html>
```

### Page Component

```tsx
// page.tsx
<>
  <Header />
  <main>
    <HeroSection />
    <AboutSection />
    {/* ... other sections */}
  </main>
  <Footer />
</>
```

## Styling Architecture

### Tailwind v4 Theme System

```
globals.css
├── @import "tailwindcss"
├── @theme { custom colors }
├── :root { CSS custom properties }
└── body/html styles
```

### Color System

| Category | Variables | Usage |
|----------|-----------|-------|
| Background | `--bg-*` | Page backgrounds |
| Text | `--text-*` | Typography colors |
| Accent | `--accent-*` | Interactive elements |
| Border | `--border-*` | Element borders |

### Typography Scale

```
--text-xs: 0.75rem
--text-sm: 0.875rem
--text-base: 1rem
--text-lg: 1.125rem
--text-xl: 1.25rem
--text-2xl: 1.5rem
--text-3xl: 2rem
--text-4xl: 2.5rem
--text-5xl: 3.5rem
--text-hero: 5rem
```

## Animation System

### Animation Variants Location

```
lib/animations.ts
├── fadeInUp
├── fadeIn
├── staggerContainer
├── cardHover
├── letterStagger
├── scaleIn
├── slideInLeft
├── slideInRight
└── floatAnimation
```

### Animation Flow

```
Component
    │
    ├── imports variants from lib/animations.ts
    │
    ├── uses useReducedMotion() for accessibility
    │
    └── applies to Framer Motion components
         │
         └── <motion.div variants={...} />
```

## Navigation System

### Smooth Scroll

```tsx
// Header navigation
const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: "smooth" });
};

// Section IDs
<section id="about">
<section id="experience">
<section id="skills">
<section id="contact">
```

### Sticky Header

```tsx
// Scroll detection
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  // ...
}, []);

// Conditional styling
className={isScrolled ? "bg-warm-cream/90 backdrop-blur" : "bg-transparent"}
```

## Deployment Architecture

```
┌───────────────┐
│   Git Repo    │
│   (GitHub)    │
└───────┬───────┘
        │
        │ Push to main
        ▼
┌───────────────┐
│    Vercel     │
│   (Hosting)   │
│               │
│ ┌───────────┐ │
│ │  Build    │ │
│ │  Process  │ │
│ └─────┬─────┘ │
│       │       │
│       ▼       │
│ ┌───────────┐ │
│ │  Static   │ │
│ │  Output   │ │
│ └───────────┘ │
└───────┬───────┘
        │
        │ CDN Distribution
        ▼
┌───────────────┐
│    Users      │
│  (Worldwide)  │
└───────────────┘
```

## Performance Considerations

- **Static Generation:** No server-side rendering
- **Font Optimization:** Next.js font optimization
- **Image Optimization:** N/A (no images currently)
- **Code Splitting:** Automatic via Next.js
- **Tree Shaking:** Enabled via ESM imports
