# Dongyuan Gao — Personal Website

A calm, aurora-toned portfolio for a **Data Scientist & AI Engineer**. The hero is a
living neural network that assembles into a brain and cycles through its three
networks (Humanistic / Creative / AI-Driven).

## Tech stack

- **Next.js 14** (App Router) + **React 18** — written in plain JavaScript/JSX.
- **Tailwind CSS 3** — styling.
- **Framer Motion** — scroll reveals and small animations.
- Hero animation is a hand-written **2D `<canvas>`** (no heavy 3D).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Where to edit things

| What | File |
| --- | --- |
| All text (bio, projects, skills, links) | `src/data/content.js` |
| Hero animation | `src/components/BrainCanvas.js` |
| Page order / layout | `src/app/page.js` |
| Colors & fonts | `tailwind.config.js`, `src/app/globals.css` |

## Assets to replace

- `public/resume.pdf` — placeholder. Swap in your web-safe resume (no phone / DOB).
  Regenerate the placeholder anytime with `python3 scripts/make_placeholder_pdf.py`.
- `public/profile.svg` — placeholder. Add a real headshot (`profile.jpg`) and update
  `profile.photo` in `src/data/content.js`.

## Privacy

The site intentionally omits phone number, date of birth, nationality, and gender.
Email is assembled in code to deter scrapers; contact uses `mailto:`.

## Accessibility & performance

- Hero animation pauses when off-screen and respects `prefers-reduced-motion`
  (shows a calm static brain instead of the loop).
- Hovering the hero pauses the auto-cycle so visitors can read each network.

## Deploy (later)

Push to GitHub, import into Vercel — zero config for Next.js.
