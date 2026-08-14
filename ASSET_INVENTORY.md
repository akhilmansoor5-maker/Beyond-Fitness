# Beyond Fitness — Asset Inventory

Audited: `gallery/` (2026-08-13)

## Brand marks

| File | Path (served) | Contents | Notes |
|------|---------------|----------|-------|
| `LOGO PNG.png` | `/brand/logo.png` | Transparent BF monogram + BEYOND FITNESS + tagline “Journey Beyond Your Limits”. Metallic silver treatment. | **PRIMARY logo.** Use in navigation and brand anchors. No background box. |
| `LOGO WITH BG.png` | `/brand/logo-with-bg.png` | Same lockup with baked dark rectangular background. | **Do not use in nav/header.** Reserved for special dark promotional contexts only. |

### Logo light / dark behaviour

- Asset colour: metallic silver/chrome — strong on void/black, weaker on bone/white.
- Current implementation: primary transparent logo on all themes; light surfaces rely on nav contrast + subtle drop-shadow (no pill/box).
- Future: add `/brand/logo-dark.png` (or solid black lockup) when client supplies an on-light variant — `BrandLogo` already accepts `variant="on-light"`.

## Photography (local copies)

Downloaded from the business Google Maps photo gallery (client-authorised use for the Beyond Fitness site). Stored under `public/gallery/` — **not hotlinked**.

| File | Suggested use |
|------|----------------|
| `01-team-hero.jpg` | Home hero, community, arenas, start |
| `02-facility.jpg` | Visit hero / facility |
| `03-training.jpg` | Fitness community / group session |
| `04-gym.jpg` | Fitness hero, PT, combat youth coaching |
| `05-space.jpg` | Combat / Astra kinetic |
| `06-interior.jpg` | Visit space / fitness detail |

Mapped in `src/content/site.ts` → `images`.

## Target photographic mapping (awaiting assets)

| Slot ID | Intended use | Pages | Crop |
|---------|--------------|-------|------|
| `hero-home` | Athlete / training floor atmosphere | `/` | Full-bleed / 16:10 |
| `hero-arenas` | Dual-world threshold | `/arenas` | Wide editorial |
| `hero-fitness` | Strength floor / bar path | `/fitness` | Portrait or 4:5 |
| `hero-combat` | Fencing or combat action | `/combat` | Dynamic diagonal crop |
| `hero-visit` | Exterior / mall approach | `/visit` | Architectural 16:11 |
| `hero-start` | Training intensity still | `/start-training` | High contrast |
| `fitness-detail` | Equipment / hands | `/`, `/fitness` | Extreme crop |
| `combat-detail` | Glove / blade / stance | `/`, `/combat` | Square / tight |
| `community-group` | Group session | `/`, `/fitness` | 16:9 |
| `visit-space` | Interior facility | `/visit` | Natural colour |

## Rules

1. Prefer real client imagery whenever a suitable file exists.
2. Never stretch logos; preserve intrinsic aspect ratio.
3. Do not use `LOGO WITH BG` in the standard header.
4. Replace placeholders by setting `src` on `PhotoFrame` / content map — no layout redesign required.
