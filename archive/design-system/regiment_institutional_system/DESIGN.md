---
name: Regiment Institutional System
colors:
  surface: '#fff8f7'
  surface-dim: '#f4d2cf'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ef'
  surface-container: '#ffe9e6'
  surface-container-high: '#ffe2de'
  surface-container-highest: '#fddbd7'
  on-surface: '#291715'
  on-surface-variant: '#5d3f3c'
  inverse-surface: '#402b29'
  inverse-on-surface: '#ffedeb'
  outline: '#926f6b'
  outline-variant: '#e7bdb8'
  surface-tint: '#c00018'
  primary: '#be0017'
  on-primary: '#ffffff'
  primary-container: '#e62129'
  on-primary-container: '#ffffff'
  inverse-primary: '#ffb3ac'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fcd400'
  on-secondary-container: '#6e5c00'
  tertiary: '#00648d'
  on-tertiary: '#ffffff'
  tertiary-container: '#007eb1'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#93000f'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#c7e7ff'
  tertiary-fixed-dim: '#85cfff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6c'
  background: '#fff8f7'
  on-background: '#291715'
  surface-variant: '#fddbd7'
  regiment-black: '#000000'
  regiment-white: '#FFFFFF'
  neutral-gray: '#74777F'
typography:
  headline-xl:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
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

This design system is engineered for the Student Regiment (Menwa) of Politeknik Negeri Malang, evolving from a navy-centric identity to one that directly mirrors the bold, high-contrast heraldry of the organization’s insignia. The brand personality is disciplined, authoritative, and uncompromisingly institutional.

The visual style is **Corporate / Modern** with a "Strict-Grid" layout philosophy. By utilizing a high-contrast palette of red, gold, and black, the UI evokes a sense of duty, heritage, and official status. It avoids ephemeral trends in favor of a structural aesthetic that communicates organizational order and professional excellence.

## Colors

The color palette is derived directly from the institutional crest to ensure immediate brand recognition and a commanding presence.

- **Primary (Regiment Red):** #E62129. The dominant brand color, used for primary actions, headers, and key brand moments. It represents courage and action.
- **Secondary (Golden Yellow):** #FFD700. Used as an accent for highlights, important status indicators, and decorative elements that require high visibility without the urgency of red.
- **Neutral (Black & White):** Pure #000000 and #FFFFFF are used to create the highest possible contrast, ensuring the UI feels formal and authoritative. Black is preferred for typography and structural borders, while white serves as the primary canvas.

## Typography

**Public Sans** is the exclusive typeface for this design system. It is a typeface designed for clarity and neutrality, making it ideal for an institutional context.

- **Headlines:** Use heavy weights (Bold/700) to project strength and confidence. Large headlines should use negative letter spacing to feel more compact and impactful.
- **Labels:** Navigation and administrative labels use `label-md` with increased letter spacing and uppercase styling to mimic formal signage.
- **Body:** Body text is set with generous line heights to ensure long-form reports and official documentation remain readable on all devices.

## Layout & Spacing

The system employs a **Fixed Grid** model to maintain a rigid and organized structure across all interfaces.

- **Desktop:** A 12-column grid with a 1280px max-width. Wide 48px margins create a professional "frame" that keeps content centered and focused.
- **Mobile:** A 4-column grid with 16px margins. 
- **Rhythm:** All spatial relationships are built on a strict 8px base unit. Vertical spacing between major sections should utilize `unit-xl` (48px) to provide the whitespace necessary for a clean, professional appearance.

## Elevation & Depth

Hierarchy is established through **Bold Borders** and sharp tonal separation rather than shadows. This "flat-plus" approach reinforces the serious, institutional nature of the brand.

- **Level 0 (Background):** Pure White (`#FFFFFF`).
- **Level 1 (Containers):** Elements like cards and sections are defined by a 1px solid border using `regiment-black` at 10% opacity or a very subtle gray.
- **Level 2 (Interactive):** Hover states and active containers use a 2px solid border or a slight shift in background tint to Golden Yellow.
- **Shadows:** Only used for floating elements like Modals or Dropdowns, keeping them very diffuse (Blur: 12px, Opacity: 0.1) to avoid a "gaming" or overly consumer-tech feel.

## Shapes

The shape language is **Soft (0.25rem)**. 

To maintain a formal and disciplined look, roundedness is kept minimal. A base radius of 4px provides just enough refinement to feel modern without losing the "solid" and "official" silhouette required for a regimented organization. Pill-shaped or heavily rounded elements are strictly prohibited as they conflict with the brand's authoritative tone.

## Components

- **Buttons:** 
  - *Primary:* Regiment Red background, White text, 4px radius.
  - *Secondary:* Clear background, 1px Regiment Black border.
  - *Utility:* Golden Yellow background, Black text (used for specialized highlights).
- **Cards:** White background with a 1px subtle border. Content inside should be aligned to a strict internal gutter of `unit-md`.
- **Navigation:** Top-level links are uppercase `label-md`. The active state is indicated by a 3px Regiment Red bottom bar rather than a text color change.
- **Input Fields:** 1px Black border. Labels remain static above the input (no floating labels) to mimic the structure of official government or military forms.
- **Chips:** Used for Rank or Status. Use Regiment Red for high-priority status and Golden Yellow for informational status.
- **Imagery:** Photography should be crisp and documentary in style. When used behind text, apply a 20% Black overlay to ensure readability while grounding the image in the regiment's palette.