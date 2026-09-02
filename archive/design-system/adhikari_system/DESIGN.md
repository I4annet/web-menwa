---
name: Adhikari System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#43474e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f87'
  primary: '#000d21'
  on-primary: '#ffffff'
  primary-container: '#002347'
  on-primary-container: '#718bb5'
  inverse-primary: '#adc8f5'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#240002'
  on-tertiary: '#ffffff'
  tertiary-container: '#4e000a'
  on-tertiary-container: '#fe404e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#adc8f5'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#2c486d'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b1'
  on-tertiary-fixed: '#410007'
  on-tertiary-fixed-variant: '#92001c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-xl-mobile:
    fontFamily: Public Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  unit-xs: 4px
  unit-sm: 8px
  unit-md: 16px
  unit-lg: 24px
  unit-xl: 48px
---

## Brand & Style
The design system is built for the Student Regiment (Menwa) of Politeknik Negeri Malang. It reflects a brand personality that is disciplined, authoritative, and institutional, yet modern enough to appeal to a student demographic. The visual style is **Corporate / Modern** with a focus on structured reliability.

The design avoids trendy flourishes like glassmorphism or neomorphism in favor of clear hierarchy and "grounded" elements. It utilizes a "Strict-Grid" approach where alignment and proportion communicate the organizational order of the regiment. The emotional response should be one of trust, pride, and official status.

## Colors
The palette is rooted in institutional tradition. 

- **Primary (Deep Navy):** Used for headers, footers, primary buttons, and authoritative backgrounds. It represents the depth and discipline of the organization.
- **Secondary (Crisp White):** The core surface color. High-quality whitespace is essential to maintain a "modern and clean" feel.
- **Tertiary (Alert Red):** A proportional accent color used for urgent call-to-actions, status indicators, or decorative rules. It must be used sparingly (roughly 5-10% of the UI) to maintain its impact without becoming aggressive.
- **Neutral (Slate Gray):** Used for body text and subtle borders to soften the contrast between Navy and White.

## Typography
This design system utilizes **Public Sans**, an institutional and highly legible typeface designed for clarity and authority. 

Headlines should use heavy weights (Bold/700) to project strength. Labels for navigation and small headers use a slight letter-spacing increase and uppercase styling to mimic military-style signage and formal documentation. Line heights are kept generous to ensure readability in long-form reports or activity descriptions.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to ensure content remains centered and focused, reflecting an organized structure. 

- **Desktop:** 12-column grid with a 1280px max-width. Large 48px margins create a professional "frame" around the content.
- **Tablet:** 8-column grid with 32px margins.
- **Mobile:** 4-column grid with 16px margins. 

Spacing follows a strict 8px base unit. Vertical rhythm is critical; sections should be separated by `unit-xl` to provide sufficient whitespace, preventing the UI from feeling cluttered or "cramped," which often undermines an institutional feel.

## Elevation & Depth
Depth is conveyed through **Low-contrast outlines** and minimal tonal layering. 

The design system avoids heavy drop shadows. Instead:
- **Level 0 (Base):** Crisp White (`#FFFFFF`) background.
- **Level 1 (Cards/Containers):** A 1px solid border using a lightened version of the neutral color or a very subtle soft shadow (Blur: 4px, Y: 2px, Opacity: 0.05) to lift the element just slightly off the page.
- **Level 2 (Dropdowns/Modals):** A more defined but still diffuse shadow (Blur: 12px, Y: 8px, Opacity: 0.1).

Interactive elements should not "float"; they should feel like they are part of a solid, physical structure.

## Shapes
The shape language is **Soft (0.25rem)**. 

Sharp corners (0px) can feel too aggressive, while fully rounded corners (Pill-shaped) feel too casual for a military-affiliated organization. A slight 4px radius on buttons, input fields, and cards provides a modern touch while maintaining a serious, disciplined silhouette. Photos should maintain sharp corners or the same 4px radius to match the UI elements.

## Components

- **Buttons:** 
  - *Primary:* Deep Navy background, White text, 4px radius.
  - *Secondary:* Clear background, Deep Navy 1px border.
  - *Alert:* Red background, White text (reserved for "Emergency" or "Action Required").
- **Cards:** White background, 1px neutral border, subtle 4px corner radius. Headlines inside cards should be `headline-sm`.
- **Navigation:**
  - *Desktop:* Horizontal links in `label-md` uppercase style. The active state is indicated by a 2px Deep Navy bottom border, not a color change of the text.
  - *Mobile:* A clean slide-out hamburger menu with full-width list items.
- **Input Fields:** 1px gray border that turns Deep Navy on focus. Labels must always be visible above the field (no floating labels) to maintain a formal form structure.
- **Chips/Badges:** Used for "Rank" or "Status" indicators. Use high-contrast combinations: Navy background with white text or light gray background with navy text.
- **Imagery:** Use high-resolution, centered photography. Apply a subtle 10% Navy color overlay on hero image backgrounds to ensure white text remains legible while keeping the "Institutional Blue" theme consistent.