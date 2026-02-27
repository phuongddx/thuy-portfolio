# Code Standards

## File Naming Convention

### General Rules

- Use **kebab-case** for all file names
- Names should be self-documenting and descriptive
- Long descriptive names are preferred over short ambiguous ones

### Examples

```
✓ hero-section.tsx
✓ experience-section.tsx
✓ motion-card.tsx
✓ floating-element.tsx

✗ HeroSection.tsx
✗ exp-sec.tsx
✗ card.tsx
```

## Component Structure

### File Organization

```tsx
// 1. Client directive (if needed)
"use client";

// 2. Imports (grouped)
import { motion } from "framer-motion";
import { useState } from "react";
import { IconName } from "lucide-react";
import { ComponentName } from "@/components/path";
import { dataName } from "@/lib/data";

// 3. Types/Interfaces
interface ComponentProps {
  title: string;
  optional?: boolean;
}

// 4. Component definition
export function ComponentName({ title, optional }: ComponentProps) {
  // 4a. Hooks
  const [state, setState] = useState(false);

  // 4b. Handlers
  const handleClick = () => {};

  // 4c. Render
  return (
    // JSX
  );
}
```

### Component Naming

- **PascalCase** for component names: `HeroSection`, `MotionCard`
- **camelCase** for props and functions: `onScroll`, `handleClick`
- Descriptive names that indicate purpose

## TypeScript Standards

### Type Definitions

```tsx
// Prefer interfaces for object shapes
interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Use type for unions/intersections
type Status = "pending" | "active" | "complete";

// Explicit return types for exported functions
export function Component(): JSX.Element
```

### Import Types

```tsx
// Use type keyword for type-only imports
import type { Metadata } from "next";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";
```

## Tailwind CSS v4 Standards

### Custom Theme Usage

```tsx
// Use theme colors via utility classes
<div className="bg-warm-cream text-warm-brown">
  <button className="bg-soft-coral hover:bg-deep-burgundy">
```

### CSS Custom Properties

```css
/* Define in globals.css :root */
--color-name: #hex;

/* Access via var() */
.custom-element {
  color: var(--text-primary);
}
```

### Class Organization

```tsx
// Group by: layout > spacing > typography > colors > effects
<div className="
  flex items-center justify-between    /* layout */
  p-4 mx-auto gap-2                    /* spacing */
  text-lg font-semibold                /* typography */
  bg-warm-cream text-warm-brown        /* colors */
  rounded-lg shadow-md                 /* effects */
">
```

## Animation Patterns

### Framer Motion Variants

```tsx
// Define reusable variants
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Use in components
<motion.div
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={fadeInUp}
>
```

### Accessibility

```tsx
// Always check reduced motion preference
const shouldReduceMotion = useReducedMotion();

// Conditionally apply animations
whileHover={shouldReduceMotion ? undefined : "hover"}
animate={shouldReduceMotion ? {} : animation}
```

## React Best Practices

### Hooks

```tsx
// Hooks at component top
const [state, setState] = useState(initialValue);
const ref = useRef<HTMLDivElement>(null);
const shouldReduce = useReducedMotion();

// Effect with cleanup
useEffect(() => {
  const handler = () => {};
  window.addEventListener("event", handler);
  return () => window.removeEventListener("event", handler);
}, [dependencies]);
```

### Event Handlers

```tsx
// Named handlers, not inline
const handleScroll = () => {
  setIsScrolled(window.scrollY > 50);
};

// Use in JSX
<button onClick={handleClick}>Click</button>
```

## File Size Management

- Keep files under **200 lines**
- Extract reusable components to `ui/` directory
- Move complex logic to `lib/` utilities
- Split large sections into sub-components

## Import Order

```tsx
// 1. React/Next
import { useState, useEffect } from "react";
import type { Metadata } from "next";

// 2. External libraries
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// 3. Internal components
import { Header } from "@/components/layout/header";
import { MotionCard } from "@/components/ui/motion-card";

// 4. Internal utilities/data
import { fadeInUp } from "@/lib/animations";
import { resumeData } from "@/lib/data";

// 5. Styles
import "./globals.css";
```

## Accessibility Requirements

- Use semantic HTML elements (`<main>`, `<section>`, `<nav>`)
- Include `aria-label` on icon-only buttons
- Support `prefers-reduced-motion`
- Ensure sufficient color contrast
- Keyboard navigable interactive elements
