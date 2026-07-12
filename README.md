# Dongyuan Gao — Personal Website

A calm, aurora-toned portfolio for a **Data Scientist & AI Engineer**. The hero is a
living neural network that assembles into a brain and cycles through its three
networks (Humanistic / Creative / AI-Driven).

## Tech stack

- **Next.js 14** (App Router) + **React 18** — written in plain JavaScript/JSX.
- **Tailwind CSS 3** — styling.
- **Framer Motion** — scroll reveals and small animations.
- Hero animation is a hand-written **2D `<canvas>`** (no heavy 3D).
- **i18n** — URL-based locales (`/en`, `/de`, `/es`, `/zh`) with 4 dictionary files.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /en)
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
src/
├── app/
│   ├── [lang]/              # all pages live under the locale segment
│   │   ├── layout.js        # root layout (fonts, nav, footer, aurora background)
│   │   ├── page.js          # home page (Hero, About, Projects, Skills, Languages, Contact)
│   │   ├── story/page.js    # storyline / timeline page
│   │   └── legal/page.js    # legal & privacy page
│   └── globals.css          # Tailwind + liquid-glass design system + aurora background
├── components/
│   ├── BrainCanvas.js       # hero brain animation (canvas)
│   ├── Hero.js              # hero section (name, role, hook, CTAs)
│   ├── Nav.js               # navigation bar + language switcher
│   ├── About.js             # about section (3 networks, pipeline)
│   ├── Projects.js          # filterable project grid
│   ├── Skills.js            # skill groups
│   ├── Languages.js         # language proficiency bars
│   ├── Contact.js           # contact channels
│   ├── Footer.js            # footer (links, legal)
│   ├── Storyline.js         # scroll-driven timeline
│   └── Reveal.js            # reusable scroll-in animation wrapper
├── data/
│   ├── dictionaries/
│   │   ├── en.js            # English (source of truth)
│   │   ├── de.js            # German (Swiss spelling)
│   │   ├── es.js            # Spanish
│   │   └── zh.js            # Simplified Chinese
│   ├── dictionary.js        # getDict(lang) — loads the right dictionary
│   ├── locales.js           # locale list + labels for the language switcher
│   └── links.js             # email, LinkedIn, GitHub, resume URL
└── middleware.js            # redirects non-locale paths to /en
```

## How to edit text on the website

All text lives in **dictionary files** — one per language:

| Language | File |
| --- | --- |
| English | `src/data/dictionaries/en.js` |
| German | `src/data/dictionaries/de.js` |
| Spanish | `src/data/dictionaries/es.js` |
| Chinese | `src/data/dictionaries/zh.js` |

Each file is a JavaScript object with the **same structure**. The keys tell the
components which text to display where. The values are the actual text.

### Step-by-step: change a sentence

1. Find the text you want to change on the website.
2. Search for it in `en.js` (or whichever language file).
3. Edit the string value — that's it.
4. If you want the same change in other languages, edit the same key in
   `de.js`, `es.js`, and `zh.js`.

**Example**: to change the hero hook, find this in the dictionary:

```js
profile: {
  ...
  hook: "I think in four languages and build machines that think in one.",
  ...
}
```

Just change the string inside the quotes.

### Dictionary structure overview

| Section | What it controls |
| --- | --- |
| `meta` | page titles and SEO descriptions |
| `ui` | nav labels, section headings, button text, footer text |
| `profile` | name, role, hook, availability, location |
| `heroNets` | the three brain network labels (shown on the hero animation) |
| `stats` | the stat badges in the hero |
| `about` | about section: lead text, pipeline stages, 3 network descriptions |
| `timeline` | story page milestones (year, title, place) |
| `projects` | project cards (title, badge, problem, approach, result, links) |
| `projectFilters` | filter pill labels for the projects section |
| `skills` | skill group names and items |
| `languages` | language intro text and proficiency items |
| `legal` | legal & privacy page content |

**Important**: keep the structure identical across all 4 files. If you add a new
key to `en.js`, add it to the other 3 as well.

## Where to edit other things

| What | File |
| --- | --- |
| All text (any language) | `src/data/dictionaries/{en,de,es,zh}.js` |
| Email, LinkedIn, GitHub, resume URL | `src/data/links.js` |
| Hero animation (brain) | `src/components/BrainCanvas.js` |
| Page order / layout | `src/app/[lang]/page.js` |
| Colors & fonts | `tailwind.config.js`, `src/app/globals.css` |
| Navigation bar / language switcher | `src/components/Nav.js` |

## Assets to replace

- `public/resume.pdf` — placeholder. Swap in your web-safe resume (no phone / DOB).
  Regenerate the placeholder anytime with `python3 scripts/make_placeholder_pdf.py`.
- `public/profile.svg` — placeholder. Add a real headshot and update `profile.photo`
  in the dictionary files if you want to display it.
- `[Your City]` in the legal section of all 4 dictionaries — replace with your real
  city before publishing.

## Privacy

The site intentionally omits phone number, date of birth, nationality, and gender.
Email is assembled in code to deter scrapers; contact uses `mailto:`.

## Accessibility & performance

- Hero animation pauses when off-screen and respects `prefers-reduced-motion`
  (shows a calm static brain instead of the loop).
- Aurora background animations also stop under `prefers-reduced-motion`.

## Deploy (later)

Push to GitHub, import into Vercel — zero config for Next.js.
