# Architecture Guide

How the codebase is organized and how the pieces connect.

## Request flow

```
Browser
  → middleware.js          redirects / → /en, /about → /en/about
  → app/[lang]/layout.js   loads fonts, nav, footer, aurora background
  → app/[lang]/page.js     renders sections (Hero, About, Projects, ...)
  → each section receives `dict` from getDict(lang)
```

## i18n system

```
data/locales.js        → ["en","de","es","zh"] + display labels
data/dictionary.js     → getDict(lang) picks the right file, falls back to en
data/dictionaries/
  en.js                → source of truth (define new keys here first)
  de.js / es.js / zh.js → mirror the same structure, translated values
```

- URL carries the locale: `/en`, `/de`, `/es`, `/zh`
- `middleware.js` redirects any path without a locale to `/en`
- `generateStaticParams` in `[lang]/layout.js` pre-renders all 4 locales
- `dynamicParams = false` → unknown locales 404
- Components receive `dict` as a prop — never import dictionaries directly in components
- Project filter `value` stays English (matches tags); only `label` is translated

## Data flow

```
data/links.js          → email (split parts), LinkedIn, GitHub, resume URL
                         (locale-independent, same in all languages)
data/dictionaries/*    → all text, projects, skills, timeline (locale-specific)
```

Components assemble the email at render time: `` `${links.emailUser}@${links.emailDomain}` ``
— never hard-code the email address.

## Component dependencies

```
layout.js
  ├── Nav.js              receives dict + lang
  ├── Footer.js           receives dict + lang
  └── page.js
        ├── Hero.js       receives dict + lang → passes heroNets to BrainCanvas
        │   └── BrainCanvas.js  receives heroNets (3 network labels)
        ├── About.js      receives dict
        ├── Projects.js   receives dict (client: useState for filters)
        ├── Skills.js     receives dict
        ├── Languages.js  receives dict (client: framer-motion bars)
        └── Contact.js    receives dict + imports links.js

story/page.js
  └── Storyline.js        receives timeline array (client: scroll-driven)

legal/page.js             receives dict (server component, no client JS)
```

**Client components** (`"use client"`): Nav, Hero (via BrainCanvas), Projects,
Languages, Storyline, Reveal, BrainCanvas.

**Server components** (default): layout, page, About, Skills, Contact, Footer,
legal/page, story/page.

## Styling system

```
tailwind.config.js     → custom colors (bg, ink, muted, dmn, sal, cen)
                         custom fonts (font-display, font-body via CSS vars)
                         custom max-width (max-w-wrap = 1120px)

globals.css            → :root CSS variables (--bg, --text, --dmn, --sal, --cen)
                         .glass / .glass-card / .glass-btn / .glass-btn-primary
                         aurora background (.fluid, .blob, .grain)
                         prefers-reduced-motion overrides
```

Three accent colors map to the three brain networks:
- `dmn` #6ee7b7 (mint) = Humanistic
- `sal` #a78bfa (violet) = Creative
- `cen` #38bdf8 (sky) = AI-Driven

Used consistently in: About cards, Skills groups, Languages bars, Project labels,
Nav kicker, brain animation, storyline timeline.

## Brain animation (BrainCanvas.js)

```
initParticles()    → 300 particles with random positions, glyphs, depth
resize()           → calculates brain position (cx, cy) and scale
                      desktop: bottom-right, mobile: centered
buildBrain()       → samples points from a bezier brain shape
                      assigns particles to brain points
                      defines 3 networks (hubs + edges)

Loop:
  flow (3.2s)      → particles drift freely (flow field + mouse repel)
  assemble (2.4s)  → particles move to brain shape targets
  then cycles forever:
    dmn (5s) → toSal (1.2s) → sal (5s) → toCen (1.2s) → cen (5s) → toDmn (1.2s)

Pause: IntersectionObserver stops the loop when hero scrolls off-screen
Reduced motion: draws one static frame (dmn network, no animation)
```

## Key conventions

- **No hard-coded text in components** — all copy comes from dictionaries
- **Email never written as a literal string** — assembled from `links.js` parts
- **Project tags stay English** in all locales (they match filter `value`)
- **`"use client"`** only when needed (state, effects, framer-motion, canvas)
- **Reveal wrapper** for scroll-in animations on server-rendered sections
- **`max-w-wrap`** (1120px) + `px-7` for consistent section width
- **`scroll-margin-top: 84px`** on sections so anchor links clear the sticky nav

## To extend the project

| Want to... | Do this |
| --- | --- |
| Add a new section | Create component in `src/components/`, import in `[lang]/page.js`, add keys to all 4 dictionaries |
| Add a new language | Create `src/data/dictionaries/{code}.js`, add locale to `locales.js`, add to `generateStaticParams` in `[lang]/layout.js` |
| Add a new project | Add object to `projects` array in all 4 dictionary files |
| Change colors | Edit `tailwind.config.js` + `:root` in `globals.css` |
| Change brain behavior | Edit phases in `BrainCanvas.js` (INTRO, SEQ, SWITCHES arrays) |
| Add a new page | Create `src/app/[lang]/{name}/page.js`, add nav link in dictionaries |
