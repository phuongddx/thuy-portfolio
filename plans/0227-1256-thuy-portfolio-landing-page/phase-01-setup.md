# Phase 1: Setup & Configuration

## Overview
Initialize Next.js project with TypeScript, configure Tailwind CSS v4, Framer Motion, and development tooling.

## Priority: High
## Status: Pending
## Effort: 30 min

## Requirements

### Functional
- Next.js 15 with App Router
- TypeScript strict mode
- Tailwind CSS v4 configuration
- Framer Motion installed
- ESLint + Prettier configured

### Non-Functional
- Hot reload working
- Build succeeds without errors
- Clean project structure

## Implementation Steps

### 1. Initialize Next.js Project
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### 2. Install Dependencies
```bash
npm install framer-motion lucide-react
npm install -D @types/node
```

### 3. Configure Tailwind v4 (if using v4)
```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  --color-warm-cream: #FFF8F0;
  --color-soft-coral: #FF7F6E;
  --color-warm-brown: #8B5E3C;
  --color-soft-peach: #FFCDB2;
  --color-muted-gold: #D4A574;
  --color-deep-burgundy: #722F37;
}
```

### 4. Update tsconfig.json
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

### 5. Create Folder Structure
```bash
mkdir -p src/components/{sections,ui,layout}
mkdir -p src/lib
mkdir -p public/images
```

## Todo List
- [ ] Initialize Next.js with TypeScript
- [ ] Install Framer Motion + Lucide
- [ ] Configure Tailwind colors
- [ ] Set up folder structure
- [ ] Verify build succeeds

## Success Criteria
- [ ] `npm run dev` starts without errors
- [ ] `npm run build` completes successfully
- [ ] Tailwind custom colors work

## Risk Assessment
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Tailwind v4 syntax changes | Medium | Low | Use stable v3 if issues |

## Next Steps
→ Phase 2: Design System
