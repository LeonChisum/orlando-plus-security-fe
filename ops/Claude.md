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

**Design tokens:**

```
Gold:   #d4af37
Dark:   #01010d
Orange: #e65c00
Gray:   #cccccc
Fonts:  Bebas Neue, Squada One, Stardos Stencil (Google Fonts)
```

---

## File Map

```
src/
├── App.js                  → route definitions
├── App.css                 → page-level layout
├── index.css               → global reset + base styles
├── data/data.js            → managementData[3], servicesData[5]
├── icons/SVG.js            → inline SVG (guards|staff|cctv|consultant|contract)
└── components/
    ├── Nav/Nav.js + Nav.css
    ├── Home.js
    ├── Footer.js
    ├── UnderConstruction.js
    ├── About/About.js, About.css, ManagementCard.js
    ├── Contact/Contact.js, Contact.css, ContactForm.js
    ├── Services/Services.js, Services.css, ServiceCard.js
    └── Courses/Courses.js, Courses.css, CoursesForm.js
```

---

## Routes

| Path                                | Component   |
| ----------------------------------- | ----------- |
| `/`                                 | Home        |
| `/about`                            | About       |
| `/contact`                          | Contact     |
| `/services`                         | Services    |
| `/securitydtraining`                | Courses     |
| `/securitydtraining/scheduleaclass` | CoursesForm |

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
