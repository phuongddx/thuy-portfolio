# Phase 5: Polish & Deploy

## Overview
Optimize performance, add final polish, test accessibility, and deploy to Vercel.

## Priority: Medium
## Status: Pending
## Effort: 1 hour
## Depends On: Phase 4

## Requirements

### Functional
- Header with smooth scroll navigation
- Footer with social links
- SEO meta tags
- Favicon

### Non-Functional
- Lighthouse Performance > 90
- Accessibility WCAG 2.1 AA
- Mobile-tested

## Implementation Steps

### 1. Create Header Component
```tsx
// src/components/layout/Header.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll listener for backdrop blur

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? 'bg-warm-cream/80 backdrop-blur-md' : ''
      }`}
    >
      <nav>
        {navItems.map(item => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
```

### 2. Create Footer Component
```tsx
// src/components/layout/Footer.tsx
export function Footer() {
  return (
    <footer className="py-8 text-center text-text-muted">
      <p>© 2025 Dang Bich Thuy. All rights reserved.</p>
    </footer>
  )
}
```

### 3. Add SEO Metadata
```tsx
// src/app/layout.tsx
export const metadata: Metadata = {
  title: 'Dang Bich Thuy | Senior Talent Acquisition Specialist',
  description: 'Dynamic and results-driven recruiter specializing in IT and Media recruitment.',
  keywords: ['recruiter', 'talent acquisition', 'HR', 'IT recruitment', 'Vietnam'],
  authors: [{ name: 'Dang Bich Thuy' }],
  openGraph: {
    title: 'Dang Bich Thuy | Senior TA Specialist',
    description: 'Dynamic and results-driven recruiter...',
    type: 'website',
  },
}
```

### 4. Add Favicon
- Create favicon.ico or use Next.js metadata icons

### 5. Performance Optimizations
```tsx
// Lazy load below-fold sections
const ExperienceSection = dynamic(() => import('./ExperienceSection'))
const SkillsSection = dynamic(() => import('./SkillsSection'))

// Add will-change for animations
<motion.div style={{ willChange: 'transform' }}>

// Optimize images
<Image src="/photo.jpg" alt="Thuy" priority={false} />
```

### 6. Accessibility Checks
- [ ] All images have alt text
- [ ] Color contrast ratios > 4.5:1
- [ ] Focus states visible
- [ ] Reduced motion support
- [ ] Semantic HTML structure

### 7. Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

## Todo List
- [ ] Create Header with smooth scroll
- [ ] Create Footer
- [ ] Add SEO metadata
- [ ] Add favicon
- [ ] Run Lighthouse audit
- [ ] Fix accessibility issues
- [ ] Test on mobile devices
- [ ] Deploy to Vercel

## Success Criteria
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Mobile-responsive verified
- [ ] Live on Vercel

## Deployment Checklist
- [ ] Environment variables set (none needed)
- [ ] Build succeeds locally
- [ ] No console errors
- [ ] Contact info accurate
- [ ] All links working
