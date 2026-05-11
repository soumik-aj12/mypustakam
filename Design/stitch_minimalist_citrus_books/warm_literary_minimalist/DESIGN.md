---
name: Warm Literary Minimalist
colors:
  surface: '#fff8f3'
  surface-dim: '#e5d8ca'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e3'
  surface-container: '#f9ecde'
  surface-container-high: '#f3e6d8'
  surface-container-highest: '#eee0d2'
  on-surface: '#211b12'
  on-surface-variant: '#564334'
  inverse-surface: '#362f26'
  inverse-on-surface: '#fcefe0'
  outline: '#897362'
  outline-variant: '#ddc1ae'
  surface-tint: '#904d00'
  primary: '#904d00'
  on-primary: '#ffffff'
  primary-container: '#ff8c00'
  on-primary-container: '#623200'
  inverse-primary: '#ffb77d'
  secondary: '#7c5716'
  on-secondary: '#ffffff'
  secondary-container: '#ffcc80'
  on-secondary-container: '#795513'
  tertiary: '#00658f'
  on-tertiary: '#ffffff'
  tertiary-container: '#00b5fc'
  on-tertiary-container: '#004360'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#ffddb0'
  secondary-fixed-dim: '#f0be74'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#614000'
  tertiary-fixed: '#c7e7ff'
  tertiary-fixed-dim: '#85cfff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6c'
  background: '#fff8f3'
  on-background: '#211b12'
  surface-variant: '#eee0d2'
typography:
  headline-xl:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is centered on a warm, intellectual, and inviting atmosphere. It targets bibliophiles who appreciate a calm, focused browsing experience that mimics the quiet comfort of a physical boutique bookstore. 

The visual style is **Minimalism** infused with a **Tactile** warmth. By prioritizing generous whitespace and high-quality imagery, the design system ensures that book covers remain the focal point. The aesthetic avoids the sterile coldness of typical tech products, instead using soft shadows and a sun-drenched color palette to evoke a sense of late-afternoon reading. The emotional response should be one of relaxation, trust, and inspiration.

## Colors

The palette is driven by "The Golden Hour"—warm tones that feel premium yet accessible.

- **Primary (#FF8C00):** A vibrant orange reserved strictly for high-priority calls to action, such as "Add to Cart" or "Checkout."
- **Secondary (#FFCC80):** A soft, light orange used for subtle accents, hover states on secondary elements, and category tags.
- **Background (#FFFDD0):** A rich cream that reduces eye strain compared to pure white, providing a "paper-like" canvas for the typography.
- **Neutral (#4A4238):** A deep, warm charcoal-brown used for text to maintain high legibility while appearing softer and more organic than pure black.
- **Surface (#FEFBF0):** A slightly lighter version of the background used for cards and elevated containers to create subtle depth.

## Typography

This design system employs a classic pairing of a literary serif and a modern sans-serif to bridge the gap between traditional publishing and modern e-commerce.

- **Headlines:** Uses **Libre Caslon Text**. This font provides an authoritative, editorial feel that suggests quality and heritage. Headlines should use "smart quotes" and maintain tight tracking for a professional look.
- **Body & UI:** Uses **DM Sans**. Chosen for its clean, geometric clarity, it ensures that functional information (price, availability, descriptions) is easy to digest.
- **Visual Hierarchy:** Use `headline-xl` for book titles on product pages. Use `label-md` for metadata like "Author" or "Genre" to create a clear distinction from the narrative descriptions.

## Layout & Spacing

The design system utilizes a **Fixed Grid** on desktop (12 columns, 1200px max-width) and a **Fluid Grid** on mobile (4 columns).

- **Whitespace:** Emphasize vertical rhythm. Use `stack-lg` between major sections (e.g., between "New Arrivals" and "Staff Picks") to let the book covers "breathe."
- **Margins:** Generous page margins (`margin-desktop`) ensure the content feels like it's presented in an open gallery rather than a crowded shop.
- **Alignment:** Center-align hero elements for a more balanced, editorial feel. Grid items (book cards) should be left-aligned for scanning efficiency.

## Elevation & Depth

This design system avoids harsh, technical shadows in favor of **Ambient Shadows** that feel natural and soft.

- **Low Elevation:** Used for book cards. A very subtle, wide-spread shadow (Blur: 15px, Opacity: 4%) using a warm tint (`#4A4238`) rather than pure black. This makes the books appear as if they are resting lightly on the cream surface.
- **High Elevation:** Used for modals and floating navigation bars. A more defined but still soft shadow (Blur: 30px, Opacity: 8%) to draw focus.
- **Depth Contrast:** Use the `surface` color (#FEFBF0) to differentiate large sections of the page without needing a border or a shadow, keeping the interface clean.

## Shapes

The shape language is organic and approachable. 

- **Components:** Buttons and input fields use a `0.5rem` radius (Level 2) to maintain a modern, friendly feel.
- **Imagery:** Book covers should have a very slight `2px` corner radius to soften the "sharp" edges of digital images, making them look more like physical objects. 
- **Icons:** Use rounded-end caps (stroke-linecap: round) for all iconography to match the softness of the UI components.

## Components

- **Buttons:**
    - **Primary:** Solid Vibrant Orange (#FF8C00) with white text. High-contrast and bold.
    - **Secondary:** Light Orange (#FFCC80) background with Dark Charcoal (#4A4238) text. Used for "Preview" or "See More."
    - **Ghost:** No background, thin border using the Light Orange. Used for tertiary actions.
- **Book Cards:** Minimalist design. The image is paramount. Title and author text should sit below the image with no border around the card, using only soft ambient shadows on hover to indicate interactivity.
- **Chips/Tags:** Used for genres (e.g., "Fiction," "History"). Small, Level 2 roundedness, using the Secondary Light Orange with a 50% opacity background.
- **Input Fields:** Cream surface with a subtle 1px border in Light Orange. Focus state should increase the border thickness slightly and add a soft glow.
- **Book Spines (Special Component):** For a "Library View," use a vertical component that mimics book spines, utilizing the color palette to create a rhythmic, colorful shelf aesthetic.
- **Navigation:** A floating "Top Bar" that is semi-transparent with a backdrop-blur, allowing the cream background to peek through as the user scrolls.