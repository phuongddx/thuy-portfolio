# Project Overview & Product Development Requirements (PDR)

## Project Summary

**Project Name:** Thuy Dang Portfolio Landing Page
**Owner:** Dang Bich Thuy - Senior Talent Acquisition Specialist
**Type:** Personal portfolio website
**Status:** Complete

## Purpose

A modern, animated portfolio website showcasing professional experience, skills, and contact information for a Senior Talent Acquisition Specialist specializing in IT and Media recruitment.

## Target Audience

- **Primary:** Potential employers, hiring managers, and HR decision-makers
- **Secondary:** Job seekers looking for recruitment services
- **Tertiary:** Professional network contacts and recruiters

## Key Features

### Core Sections

1. **Hero Section**
   - Animated name and title display
   - Call-to-action button for contact
   - Floating decorative elements

2. **About Section**
   - Professional bio summary
   - Key statistics (years experience, placements, industries)

3. **Experience Timeline**
   - Work history with company details
   - Position highlights and achievements
   - Visual timeline presentation

4. **Skills Section**
   - Animated progress bars
   - Core competencies with percentages
   - Visual skill representation

5. **Industry Partnerships**
   - Industry badges (Media/Online, Technology, E-commerce, Startups)
   - Visual credibility indicators

6. **Contact Section**
   - Phone, email, location cards
   - LinkedIn profile link
   - Multiple contact channels

### Design Features

- Warm, professional color palette
- Smooth scroll navigation
- Responsive mobile-first design
- Accessibility support (reduced motion)

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Page Load Time | < 3 seconds | Lighthouse audit |
| Mobile Responsiveness | 100% pass | Manual testing |
| Accessibility Score | > 90 | Lighthouse audit |
| SEO Score | > 90 | Lighthouse audit |
| Browser Compatibility | All modern browsers | Manual testing |

## Technical Requirements

### Functional Requirements

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-01 | Display professional bio and stats | High | Complete |
| FR-02 | Show work experience timeline | High | Complete |
| FR-03 | Display skills with progress bars | Medium | Complete |
| FR-04 | Provide contact information | High | Complete |
| FR-05 | Smooth scroll navigation | Medium | Complete |
| FR-06 | Mobile responsive design | High | Complete |
| FR-07 | Animated section transitions | Low | Complete |

### Non-Functional Requirements

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| NFR-01 | Page load < 3 seconds | High | Complete |
| NFR-02 | Accessibility WCAG 2.1 AA | Medium | Complete |
| NFR-03 | SEO optimized metadata | High | Complete |
| NFR-04 | Reduced motion support | Medium | Complete |
| NFR-05 | Cross-browser compatibility | High | Complete |

## Constraints

- Single-page application (no routing beyond home)
- Static content (no CMS integration)
- No backend required
- Deployed on Vercel

## Dependencies

- Next.js 16.x
- React 19.x
- Tailwind CSS 4.x
- Framer Motion 12.x
- Lucide React icons

## Future Considerations

- Blog/Testimonials section
- Contact form with email integration
- Analytics integration
- Multi-language support
- Dark mode toggle
