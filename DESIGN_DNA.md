# Beyond Fitness — Locked Design DNA (Foundation)

## Creative direction (committed)

**One Philosophy / Two Arenas** + sports-editorial craft.

Working line: *Two arenas. One standard.*

Not a generic gym template. Not hospitality/wellness DNA from prior studio sites.

---

## Typography

| Role | Face | Use |
|------|------|-----|
| Display | **Barlow Condensed** (600–800) | Brand wordmarks, section titles, arena names |
| Body / UI | **Outfit** (300–700) | Lede, UI, navigation, buttons |
| Meta / numbers | **IBM Plex Mono** (400–500) | Eyebrows, coordinates, indexes, signals |

### Scale (responsive via clamp)

- Hero display: `clamp(4.25rem, 18vw, 13.5rem)` — brand-first
- Section display: `clamp(2.75rem, 8vw, 6.5rem)`
- Meta: `0.6875rem` / `0.16em` tracking / uppercase
- Body lede: `clamp(1rem, 1.6vw, 1.1875rem)` · max ~34–42ch

### Rules

- Uppercase for display identity
- Tight leading on display (0.82–0.9)
- No decorative serifs, no motivational poster italics

---

## Colour

| Token | Value | Role |
|-------|-------|------|
| `--bf-void` | `#070707` | Page background |
| `--bf-ink` | `#0e0e0e` | Section ground |
| `--bf-surface` | `#141414` | Raised / active surfaces |
| `--bf-bone` | `#f3f1ec` | Primary text |
| `--bf-bone-dim` | `#c8c4bb` | Secondary text |
| `--bf-mute` | `#7a7770` | Meta / muted |
| `--bf-accent` | `#8f1f2e` | Energy / impact (strategic only) |
| `--bf-accent-hover` | `#b1283a` | Hover heat |
| `--bf-line` | `rgba(243,241,236,0.12)` | Structure |

Red is punctuation — never a full-page wash.

---

## Layout

- Max width: `1440px`
- Gutters: `clamp(1.25rem, 4vw, 3.5rem)`
- Section padding: `clamp(4.5rem, 12vw, 8.5rem)`
- Grid: asymmetric 12-col editorial; sharp corners (`0–2px`)
- Default: **no cards**

---

## Motion

Energy → Control → Impact → Progression

- Transform + opacity only
- Durations: 180 / 320 / 700ms (+ hero ~1s)
- Easing: decisive ease-out / impact curve
- Honour `prefers-reduced-motion`
- Stillness is intentional between animated beats

---

## Component language

- Buttons: rectangular, uppercase, accent mark square — not pills, not glow
- Nav: minimal wordmark + text links; mobile full-bleed editorial menu
- Labels: mono indexes (`01 /`, `02A`)
- Photography: full-bleed / hard crop frames; client assets replace placeholders

---

## Homepage scope (locked DNA)

1. Global design system (`globals.css` + fonts)
2. Navigation
3. Hero
4. Arena Threshold
5. Philosophy → Fitness → Combat → Motion → Community → Performance → Proof → Visit → Final CTA

Inner pages, pricing, and live client data are out of scope until the next phase.
