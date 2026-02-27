# Phase 4: Page Sections

## Overview
Build all 6 page sections with scroll-triggered animations and responsive layouts.

## Priority: High
## Status: Pending
## Effort: 3 hours
## Depends On: Phase 3

## Requirements

### Functional
- Hero section with animated intro
- About section with photo + bio
- Experience timeline (3 companies)
- Skills grid with progress bars
- Partnerships carousel
- Contact CTA section

### Non-Functional
- Mobile-responsive (375px+)
- Scroll-triggered animations
- Smooth anchor navigation

## Section Architecture

### 1. Hero Section
```
┌─────────────────────────────────────┐
│                                     │
│      Dang Bich Thuy                 │  ← Animated name (letter stagger)
│      SENIOR TALENT ACQUISITION      │  ← Fade in subtitle
│      SPECIALIST                     │
│                                     │
│      [Let's Connect]                │  ← CTA button with hover
│                                     │
│      ~ floating particles ~         │  ← Subtle background motion
│                                     │
└─────────────────────────────────────┘
```

**Content:**
- Name: "Dang Bich Thuy"
- Title: "Senior Talent Acquisition Specialist"
- CTA: Scroll to contact

### 2. About Section
<!-- Updated: Validation Session 1 - Avatar placeholder instead of photo -->
```
┌─────────────────────────────────────┐
│  [Avatar]   │  About Me             │
│  hover→zoom │  Dynamic recruiter... │
│             │  ───────────────────  │
│             │  Stats cards:         │
│             │  [5+ yrs] [100+ hires]│
│             │  [IT/Media]           │
└─────────────────────────────────────┘
```

**Content:**
- Bio: "Dynamic and results-driven recruiter..."
- Stats: 5+ years, 100+ placements, IT & Media focus
- Avatar: Generic avatar placeholder (swap-ready for real photo)

### 3. Experience Section
```
┌─────────────────────────────────────┐
│  Work Experience                    │
│  ────────────────────────────────   │
│  ┌─────────┐ ┌─────────┐ ┌────────┐│
│  │ WATA    │ │ HR1     │ │ LOZI   ││
│  │ 2022-   │ │ 2020-22 │ │ 2019-  ││
│  │ Senior  │ │ Senior  │ │ Talent ││
│  │ TA      │ │ IT Rec. │ │ Acq.   ││
│  └─────────┘ └─────────┘ └────────┘│
│       ↑ 3D card hover effect        │
└─────────────────────────────────────┘
```

**Companies:**
1. WATA (Jun 2022 - Present) - Senior TA Specialist
2. HR1 Vietnam (Mar 2020 - Jun 2022) - Senior IT Recruitment Consultant
3. Lozi (Feb 2019 - Nov 2020) - Talent Acquisition Specialist

### 4. Skills Section
```
┌─────────────────────────────────────┐
│  Skills & Expertise                 │
│  ────────────────────────────────   │
│  Full-cycle Recruitment    ████████░│
│  IT/Technical Hiring       ███████░░│
│  LinkedIn Sourcing         ████████░│
│  Interview & Screening     ████████░│
│  Employer Branding         ██████░░░│
│  Offer Negotiation         ███████░░│
└─────────────────────────────────────┘
```

**Skills:**
- Full-cycle Recruitment: 95%
- IT/Technical Hiring: 90%
- LinkedIn Sourcing: 95%
- Interview & Screening: 90%
- Employer Branding: 80%
- Offer Negotiation: 85%

### 5. Partnerships Section
<!-- Updated: Validation Session 1 - Industry badges instead of logo placeholders -->
```
┌─────────────────────────────────────┐
│  Industries & Expertise             │
│  ────────────────────────────────   │
│  ┌──────────────────────────────┐   │
│  │ Media • Tech • E-commerce    │   │  ← Animated marquee badges
│  └──────────────────────────────┘   │
│                                     │
│  Specializations:                   │
│  IT Recruitment • Tech Startups     │
│  Media/Online Business              │
│  100+ successful placements         │
└─────────────────────────────────────┘
```

**Industries (animated badges):**
- Media/Online Business
- Technology/IT
- E-commerce

**Implementation:**
- Use industry badges with marquee animation
- No placeholder logos
- Highlight specialization areas

### 6. Contact Section
```
┌─────────────────────────────────────┐
│      Let's Connect!                 │
│      ─────────────────              │
│      📞 0866 093 014               │
│      ✉️ bichthuy15322@gmail.com     │
│      📍 Tan Binh, Vietnam          │
│                                     │
│      [Email Me]  [LinkedIn]         │
└─────────────────────────────────────┘
```

**Contact Info:**
- Phone: 0866 093 014
- Email: bichthuy15322@gmail.com
- Location: Tan Binh, Vietnam

## Implementation Steps

### 1. Create Resume Data (lib/data.ts)
```tsx
export const resumeData = {
  name: 'Dang Bich Thuy',
  title: 'Senior Talent Acquisition Specialist',
  bio: 'Dynamic and results-driven recruiter...',
  stats: [
    { label: 'Years Experience', value: '5+' },
    { label: 'Successful Placements', value: '100+' },
    { label: 'Industries', value: 'IT & Media' },
  ],
  experience: [...],
  skills: [...],
  contact: {...},
}
```

### 2. Implement Hero Section
### 3. Implement About Section
### 4. Implement Experience Section
### 5. Implement Skills Section
### 6. Implement Partnerships Section
### 7. Implement Contact Section

## Todo List
- [ ] Create lib/data.ts with resume content
- [ ] Build HeroSection
- [ ] Build AboutSection
- [ ] Build ExperienceSection
- [ ] Build SkillsSection
- [ ] Build PartnershipsSection
- [ ] Build ContactSection
- [ ] Add smooth scroll navigation

## Success Criteria
- [ ] All sections render correctly
- [ ] Scroll animations trigger properly
- [ ] Mobile-responsive layouts
- [ ] Contact info accurate from CV

## Next Steps
→ Phase 5: Polish & Deploy
