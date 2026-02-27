# Phase 2: Design System

## Overview
Define design tokens, typography, color system, and base styles for consistent theming.

## Priority: High
## Status: Pending
## Effort: 45 min
## Depends On: Phase 1

## Requirements

### Functional
- CSS custom properties for all colors
- Google Fonts integration (Playfair Display, Inter)
- Base typography scale
- Animation timing constants

### Non-Functional
- Type-safe color access
- Responsive font sizing
- Dark mode ready (optional)

## Design Tokens

### Colors
```css
:root {
  /* Backgrounds */
  --bg-primary: #FFF8F0;
  --bg-secondary: #FFCDB2;
  --bg-card: #FFFFFF;

  /* Text */
  --text-primary: #8B5E3C;
  --text-secondary: #A67C5B;
  --text-muted: #C4A484;

  /* Accents */
  --accent-primary: #FF7F6E;
  --accent-secondary: #D4A574;
  --accent-hover: #722F37;

  /* Borders */
  --border-light: rgba(139, 94, 60, 0.1);
  --border-medium: rgba(139, 94, 60, 0.2);
}
```

### Typography Scale
```css
:root {
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.5rem;
  --text-5xl: 3.5rem;
  --text-hero: 5rem;
}
```

### Animation Tokens
```css
:root {
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
}
```

## Implementation Steps

### 1. Add Google Fonts to layout.tsx
```tsx
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})
```

### 2. Create globals.css with tokens
```css
@import "tailwindcss";

:root {
  /* ... all tokens ... */
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
}
```

### 3. Create Tailwind theme extensions
```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'warm-cream': 'var(--bg-primary)',
        'soft-coral': 'var(--accent-primary)',
        // ... etc
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
      },
    },
  },
}
```

## Todo List
- [ ] Define CSS custom properties
- [ ] Add Google Fonts
- [ ] Create typography utilities
- [ ] Add animation timing constants
- [ ] Test color accessibility (contrast ratios)

## Success Criteria
- [ ] All colors defined as CSS variables
- [ ] Fonts load correctly
- [ ] Typography scale applied consistently

## Next Steps
→ Phase 3: Core Components
