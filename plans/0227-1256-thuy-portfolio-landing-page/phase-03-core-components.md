# Phase 3: Core Components

## Overview
Build reusable motion components for sections: MotionCard, AnimatedText, ProgressBar, FloatingElement.

## Priority: High
## Status: Pending
## Effort: 1.5 hours
## Depends On: Phase 2

## Requirements

### Functional
- MotionCard with 3D hover effects
- AnimatedText with stagger reveal
- ProgressBar with scroll-triggered fill
- FloatingElement with subtle float animation

### Non-Functional
- 60fps animations
- Accessible (reduced motion support)
- Type-safe props

## Component Specs

### 1. MotionCard
```tsx
interface MotionCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

// Features:
// - 3D perspective on hover
// - Shadow elevation change
// - Scale up slightly
// - Stagger entrance animation
```

### 2. AnimatedText
```tsx
interface AnimatedTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
  delay?: number
  className?: string
}

// Features:
// - Letter-by-letter stagger
// - Fade + slide up entrance
// - Configurable animation type
```

### 3. ProgressBar
```tsx
interface ProgressBarProps {
  label: string
  value: number // 0-100
  delay?: number
}

// Features:
// - Fills on scroll into view
// - Animated width transition
// - Label + percentage display
```

### 4. FloatingElement
```tsx
interface FloatingElementProps {
  children: React.ReactNode
  duration?: number
  distance?: number
}

// Features:
// - Continuous float animation
// - Configurable amplitude
// - Performance optimized
```

## Implementation Steps

### 1. Create Animation Variants (lib/animations.ts)
```tsx
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1 },
  },
}

export const cardHover = {
  rest: { scale: 1, rotateY: 0, rotateX: 0 },
  hover: {
    scale: 1.02,
    rotateY: 5,
    rotateX: -5,
    boxShadow: '0 25px 50px rgba(139, 94, 60, 0.15)',
    transition: { duration: 0.3 },
  },
}
```

### 2. Implement MotionCard
```tsx
// src/components/ui/MotionCard.tsx
'use client'

import { motion } from 'framer-motion'
import { cardHover } from '@/lib/animations'

export function MotionCard({ children, className }: MotionCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  )
}
```

### 3. Implement AnimatedText
```tsx
// src/components/ui/AnimatedText.tsx
'use client'

import { motion } from 'framer-motion'

export function AnimatedText({ text, as = 'p', delay = 0 }: AnimatedTextProps) {
  const Component = motion[as]

  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {text}
    </Component>
  )
}
```

### 4. Implement ProgressBar
```tsx
// src/components/ui/ProgressBar.tsx
'use client'

import { motion } from 'framer-motion'

export function ProgressBar({ label, value, delay = 0 }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-soft-peach rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-soft-coral"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ delay, duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
```

### 5. Implement FloatingElement
```tsx
// src/components/ui/FloatingElement.tsx
'use client'

import { motion } from 'framer-motion'

export function FloatingElement({
  children,
  duration = 3,
  distance = 10
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}
```

## Todo List
- [ ] Create animations.ts with variants
- [ ] Implement MotionCard
- [ ] Implement AnimatedText
- [ ] Implement ProgressBar
- [ ] Implement FloatingElement
- [ ] Add reduced motion support

## Success Criteria
- [ ] All components render correctly
- [ ] Animations smooth at 60fps
- [ ] TypeScript strict mode passes
- [ ] Accessible with reduced motion

## Next Steps
→ Phase 4: Page Sections
