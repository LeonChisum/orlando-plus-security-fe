# Orlando Plus Security — Design Improvement

## Design Iteration Workflow

When the user provides a screenshot or reference image:

1. **Analyze** the reference — extract every visual detail:
   - Spacing & padding (estimate px values)
   - Font families, sizes, weights, line heights
   - Colors (exact hex/rgb values)
   - Layout & alignment (flex/grid structure)
   - Border radius, shadows, gradients, overlays
   - Responsive breakpoints & mobile behavior
   - Image sizing, aspect ratios, object-fit
   - Interactive states (hover, active, focus)

2. **Locate** the source files responsible for each visual element:
   - Component JSX → `src/components/`
   - Component CSS → co-located `.css` files
   - Global styles → `src/index.css`, `src/App.css`
   - Bootstrap overrides → target the specific utility/class

3. **Fix every mismatch** found. Edit the minimum files needed. Do not refactor unrelated code.

4. **Self-review** changes against the reference before responding — re-check all 8 analysis points.

5. **Screenshot** the result using Puppeteer after changes are applied:

   ```bash
   npx puppeteer screenshot <url> --fullpage
   ```

   Capture the full page AND any distinct sections separately if they have unique layouts.

6. **Compare** the new screenshot against the reference. List every remaining mismatch explicitly.

7. **Fix** all remaining mismatches. Repeat steps 5–7 until no visible differences remain (within ~2–3px / imperceptible color delta).

8. **Report** what changed and why, grouped by: layout / typography / color / spacing / effects.

9. **Do not stop after one screenshot pass.** Always do a minimum of 2 comparison rounds. Only stop when the design matches or the user says so.

---

## Mobile-First Design Standard

**Every UI change must be built mobile-first:**

- Write base styles for mobile (`≤ 576px`) first, then layer up with Bootstrap breakpoints: `sm` → `md` → `lg` → `xl`
- Touch targets minimum `44×44px`
- No horizontal scroll at any breakpoint
- Stack columns on mobile; expand to multi-column at `md+`
- Font sizes scale up, never down (base mobile size is the minimum)
- Test nav hamburger behavior on every change that touches layout

**Subtle UX Enhancements — apply to all new/changed components:**

| Element         | Treatment                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| Buttons & CTAs  | `transition: background-color 0.2s ease, transform 0.15s ease` — lift `2px` on hover                       |
| Links           | Underline fade-in on hover (`transition: opacity 0.2s`)                                                    |
| Cards           | Soft shadow on hover: `box-shadow: 0 8px 24px rgba(0,0,0,0.12)` with `transition: box-shadow 0.25s ease`   |
| Images          | `transition: transform 0.4s ease` — scale `1.02` on hover (subtle zoom)                                    |
| Nav links       | Color transition `0.2s ease`, no jarring jumps                                                             |
| Page sections   | Fade-in on scroll using `IntersectionObserver` + CSS `opacity/translateY` — offset `20px`, duration `0.5s` |
| Form inputs     | Border color transition on focus `0.2s ease`, no outline flash                                             |
| Overlays/modals | `opacity` + `scale(0.97→1)` entrance, `0.2s ease`                                                          |

**Animation rules:**

- Never animate `width`, `height`, or `top/left` — use `transform` and `opacity` only (GPU composited)
- Respect `prefers-reduced-motion`: wrap all animations in `@media (prefers-reduced-motion: no-preference)`
- Duration sweet spot: `150ms` (micro), `250ms` (standard), `400ms` (entrance). Nothing over `600ms` without user trigger
- Easing: `ease` for entrances, `ease-in` for exits, `ease-in-out` for toggles

---

## Visual Comparison Checklist (run on every design pass)

| Category     | What to verify                                                  |
| ------------ | --------------------------------------------------------------- |
| Spacing      | Margins, padding, gap — match reference px values               |
| Typography   | Font family, size, weight, letter-spacing, line-height          |
| Color        | Background, text, border, icon — exact values                   |
| Layout       | Flex/grid direction, alignment, wrapping, column counts         |
| Effects      | Box-shadow, gradients, overlays, opacity, blur                  |
| Images       | Size, crop, object-fit, aspect ratio, position                  |
| Responsive   | Mobile nav behavior, stacking order, font scale                 |
| Interactions | Hover transitions, animation timing, cursor                     |
| Mobile       | Stacking, touch targets, no horizontal scroll at any breakpoint |
| Motion       | Animations present, `prefers-reduced-motion` respected, no jank |

---

## Security Checklist (run on every code output)

- [ ] No `dangerouslySetInnerHTML` with uncontrolled input
- [ ] No hardcoded secrets, API keys, or PII
- [ ] No `eval()`, `new Function()`, or dynamic script injection
- [ ] External URLs validated before passing to `navigate()` or `window.location`
- [ ] Netlify form honeypot preserved on any form changes
- [ ] New npm packages checked for known CVEs before suggesting
- [ ] GA ID `G-Y7W8B3FEZB` stays in `index.html` only — never in JS files or env

---

## Stack

| Layer      | Tech                                      |
| ---------- | ----------------------------------------- |
| Framework  | React 19.2.4 (CRA / react-scripts 5.0.1)  |
| Routing    | React Router DOM 7.13.0                   |
| Styling    | Bootstrap 5.3.8 (npm) + per-component CSS |
| Forms      | Netlify Forms (no backend)                |
| Deployment | Netlify                                   |
| Analytics  | Google Analytics (G-Y7W8B3FEZB)           |

**Design tokens (CSS custom properties in `App.css`):**

```
--gold:       #d4af37      Primary gold accent
--gold-light: #e8c84d      Hover state gold
--gold-dim:   rgba(212,175,55,0.15)  Tinted backgrounds

/* Warm blacks — NO navy/blue. Each has a faint gold undertone */
--dark:       #01010d      Near-black base (body bg)
--dark-2:     #0a0901      Warm dark (contact, alt sections)
--dark-3:     #100f04      Warm mid-dark (training section)
--dark-card:  #17160a      Card surfaces

--gray:       #cccccc      Primary text
--gray-mid:   #999aaa      Secondary/muted text
--orange:     #e65c00      Fallback accent

Fonts:  Bebas Neue (display), Squada One (headings/UI), Stardos Stencil (accent)

/* Section gradient pattern — each section uses variation of: */
linear-gradient(to top, #d4af37, #01010d)  ← nav/brand gradient
radial-gradient gold glows at 4–8% opacity ← ambient section warmth
```

---

## File Map (single-page — all anchor-scroll)

```
src/
├── App.js                  → single-page layout (no router)
├── App.css                 → design tokens, global utilities, buttons
├── index.css               → minimal CSS reset
├── data/data.js            → managementData[3], servicesData[5]
├── icons/SVG.js            → inline SVG (guards|staff|cctv|consultant|contract)
└── components/
    ├── ScrollReveal.js     → IntersectionObserver fade-in wrapper
    ├── Nav/Nav.js + Nav.css          → fixed frosted-glass nav, anchor links
    ├── Hero/Hero.js + Hero.css       → full-bleed hero #home
    ├── Marquee/MarqueeBar.js + .css  → client/venue marquee strip (between hero and services)
    ├── Services/ServicesSection.js + ServicesSection.css
    │     mobile: stacked grid | tablet+: carousel (prev/next arrows, 340px fixed card height)
    ├── About/AboutSection.js + AboutSection.css
    │     management cards (tap to expand bio) + testimonial block
    ├── Training/TrainingSection.js + TrainingSection.css
    │     accordion course desc/requirements, meta pills (42hr/$125/75%)
    ├── Contact/ContactSection.js + ContactSection.css
    │     Netlify form (honeypot preserved), success/error states
    └── Footer/Footer.js (at components/Footer.js) + Footer/Footer.css
```

## Page Anchor Sections

| Anchor      | Component       |
| ----------- | --------------- |
| `#home`     | Hero            |
| `#services` | ServicesSection |
| `#about`    | AboutSection    |
| `#training` | TrainingSection |
| `#contact`  | ContactSection  |

---

## Dev Commands (run from `ops/`)

```bash
npm start        # dev server
npm run build    # production build → /build
npm test         # Jest
# eject is irreversible — never suggest without explicit user request
```

---

## Data Shapes

```js
managementData: [{ id, name, title, image, bio }]; // 3 entries
servicesData: [{ id, title, icon, info }]; // 5 entries; icon → SVG.js name prop
```

---

## Known Issues (do not reintroduce)

1. `CoursesForm` route uses deprecated `component` prop — fix to `element={<CoursesForm />}`
2. `exact` is a no-op in React Router v6+ — remove when touching App.js
3. Bootstrap mismatch: npm=v5.3.8, CDN in index.html=v4.0.0
4. `ContactForm` and `CoursesForm` are identical — refactor when touching either
5. Footer copyright reads 2020

## Design Philosophy

Core Principles: Precision, depth, and fluidity define this design system. Every surface exists in three-dimensional space, illuminated by soft ambient light sources that breathe and move. The design communicates premium security infrastructure—reliable, elite, and engineered with precision. Nothing is arbitrary: every shadow has layered depth, every gradient transitions smoothly between dark and gold tones, and every animation uses refined expo-out easing. The goal is software that feels secure, high-end, and trustworthy without being flashy.

Vibe: Cinematic meets executive security. Imagine a high-end security operations center layered with subtle gold reflections—deep near-blacks (#01010d, #050506) punctuated by warm gold light (#d4af37). The aesthetic is authoritative yet refined, using gold highlights to create warmth and trust within a dark, controlled environment. It should feel like a premium protection service operating quietly in the background—powerful, precise, and always in control.
Differentiation: The signature of this style is layered ambient gold lighting and interactive depth. Instead of cool indigo glows, the system uses warm gold illumination to create a sense of prestige and reliability.

## Design Token System (The DNA)

Color Strategy: Deep Security + Gold Illumination
The palette is built on near-black foundations with a gold-based accent system that communicates trust, value, and premium service.
Token Value Usage
background-deep #01010d Absolute darkest — footer, deep layers
background-base #050506 Primary page canvas
background-elevated #0a0a0c Elevated surfaces
surface rgba(255,255,255,0.05) Cards, containers
surface-hover rgba(255,255,255,0.08) Hover state
foreground #EDEBE6 Primary text (slightly warm white)
foreground-muted #A8A39A Body text
foreground-subtle rgba(255,255,255,0.60) Tertiary text
accent #d4af37 Primary gold
accent-bright #f1d36b Hover gold
accent-deep #a38728 Pressed / darker gold
accent-glow rgba(212,175,55,0.35) Gold glow
border-default rgba(255,255,255,0.06) Subtle borders
border-hover rgba(255,255,255,0.10) Hover borders
border-accent rgba(212,175,55,0.35) Gold borders
Background System: Layered Ambient Gold Lighting
Layer 1 — Base Gradient
bg-[radial-gradient(ellipse_at_top,#0a0a0f_0%,#050506_50%,#01010d_100%)]
Layer 2 — Noise Texture
Subtle grain at opacity: 0.015
Layer 3 — Animated Gradient Blobs (Gold-Toned)
Primary blob: Gold (#d4af37) at 20–25% opacity
Secondary blob: Warm amber/gold mix at 12–15%
Tertiary blob: Dark bronze tone at 10–12%
Bottom glow: Soft gold pulse at 8–10%
@keyframes float {
0%, 100% { transform: translateY(0) rotate(0deg); }
50% { transform: translateY(-20px) rotate(1deg); }
}
Layer 4 — Grid Overlay
64px grid at opacity: 0.02
Typography System
Font Stack: "Inter", "Geist Sans", system-ui, sans-serif
Gradient Headlines (Gold Variant)
bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent
Accent Highlight (Gold Sweep)
bg-gradient-to-r from-[#d4af37] via-[#f1d36b] to-[#d4af37] bg-clip-text text-transparent
Radius & Border System
(Same structure — unchanged)
Large containers: rounded-2xl
Cards: rounded-2xl
Buttons: rounded-lg
Borders: subtle, gold-accented on interaction
Shadow & Glow System (Gold-Based)
Base Card Shadow
shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_20px_rgba(0,0,0,0.5),0_0_40px_rgba(0,0,0,0.3)]
Hover Shadow (Gold Glow)
shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_40px_rgba(0,0,0,0.6),0_0_80px_rgba(212,175,55,0.15)]
CTA Glow
shadow-[0_0_0_1px_rgba(212,175,55,0.6),0_4px_14px_rgba(212,175,55,0.4),inset_0_1px_0_0_rgba(255,255,255,0.2)]
Component Styling Principles
Buttons
Primary Button (Gold):
Background: #d4af37
Hover: #f1d36b
Active: #a38728
Glow: gold ambient shadow
Subtle shine animation on hover
Secondary Button:
Background: rgba(255,255,255,0.05)
Hover: rgba(255,255,255,0.08)
Cards & Containers
Gold Spotlight Effect:
Radial gradient using rgba(212,175,55,0.15)
Follows cursor
Fades in on hover
Inputs
Background: #0F0F12
Focus: gold border + glow
Placeholder: muted gray
Interaction System
Hover
Lift: translateY(-4px)
Glow increases (gold)
Border brightens slightly
Focus
ring-2 ring-[#d4af37]/50 ring-offset-2 ring-offset-[#050506]
Active
scale-[0.98]
Reduced glow
Layout Principles
(Unchanged — already solid and systemized)
Section spacing: py-24 → py-32
Bento grid layouts
Asymmetry encouraged
Mobile-first responsive scaling
The "Bold Factor" (Gold Variant)
These MUST exist:
Ambient gold gradient blobs
Mouse-tracking gold spotlight
Gold-accent gradient typography
Multi-layer shadows with gold glow
Scroll-based cinematic depth
Tight, precise micro-interactions
Anti-Patterns
Avoid:
Bright yellow (too cheap) → stay in muted gold range
Flat black backgrounds (always layer depth)
Overusing gold (it’s an accent, not a base)
Blue accents (breaks brand consistency)
Heavy animations (keep it precise, not flashy)
Motion
(Unchanged timing system)
200–300ms interactions
Expo-out easing
Subtle movement only
Accessibility
Gold on dark must maintain contrast (use brighter gold when needed)
Always include focus rings
Reduce motion when prefers-reduced-motion is set
Do not rely on gold alone for meaning
