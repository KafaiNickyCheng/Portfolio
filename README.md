# Kafai Cheng — Portfolio

A modern, dark-themed portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.
Features parallax scrolling, scroll-reveal animations, and a deep blue-purple neon aesthetic.

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** v18.17 or later → [nodejs.org](https://nodejs.org)
- **npm** v9+ (comes with Node) or **pnpm** / **yarn**

---

## 🚀 Step-by-Step Setup

### Step 1 — Clone or download the project

```bash
git clone https://github.com/your-username/kafai-portfolio.git
cd kafai-portfolio
```

Or if you received the folder directly, just `cd` into it:

```bash
cd kafai-portfolio
```

---

### Step 2 — Install dependencies

```bash
npm install
```

This installs Next.js, React, TypeScript, Tailwind CSS, and all dev tools.

---

### Step 3 — Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
Hot-reload is enabled — any file save instantly updates the browser.

---

### Step 4 — Build for production

```bash
npm run build
npm run start
```

---

## 📁 Folder Structure

```
kafai-portfolio/
│
├── src/
│   ├── app/
│   │   ├── globals.css          ← All design tokens, base styles, animations
│   │   ├── layout.tsx           ← Root layout + <head> metadata
│   │   └── page.tsx             ← Main page — assembles all sections
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       ← Fixed nav, scroll-aware, active section highlight
│   │   │   └── Footer.tsx       ← Simple footer
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx         ← Full-viewport intro, parallax orbs, stats, CTAs
│   │   │   ├── About.tsx        ← Bio, highlight cards, profile card
│   │   │   ├── Skills.tsx       ← Tech category cards with animated tags
│   │   │   ├── Projects.tsx     ← Project cards with hover effects
│   │   │   ├── Experience.tsx   ← Vertical timeline + education card
│   │   │   └── Contact.tsx      ← Contact links + mailto form
│   │   │
│   │   └── ui/
│   │       ├── ScrollRevealProvider.tsx ← IntersectionObserver for .reveal elements
│   │       ├── SectionHeader.tsx        ← Reusable labelled section heading
│   │       ├── GradientText.tsx         ← Purple gradient inline text
│   │       └── ParallaxOrbs.tsx         ← Animated background orbs (client)
│   │
│   └── data/
│       └── portfolio.ts         ← ⭐ ALL your CV data lives here — edit this file
│
├── public/                      ← Static assets (add your photo, CV PDF here)
├── tailwind.config.ts           ← Tailwind theme customisation
├── next.config.ts               ← Next.js config
├── tsconfig.json                ← TypeScript config with @/* path alias
├── postcss.config.js            ← PostCSS for Tailwind
└── package.json                 ← Scripts and dependencies
```

---

## ✏️ How to Update Your Content

**Everything is in one file:** `src/data/portfolio.ts`

| What to change | Where |
|---|---|
| Name, email, phone, tagline | `personal` object |
| Hero stats (systems, users, years) | `stats` array |
| About highlight cards | `highlights` array |
| Skill categories and tags | `skillCategories` array |
| Projects | `projects` array |
| Work experience bullets | `experiences` array |
| Education details and GPA | `education` object |

---

## 🎨 Customising the Design

All CSS variables (colours, fonts) are in `src/app/globals.css` under `:root`.

| Variable | Default | Purpose |
|---|---|---|
| `--neon` | `#7c3aed` | Primary purple neon |
| `--neon2` | `#4f46e5` | Secondary indigo |
| `--neon3` | `#a78bfa` | Light violet (labels) |
| `--accent` | `#c4b5fd` | Highlight text colour |
| `--bg` | `#05040f` | Main background |
| `--bg2` | `#080717` | Alternate section background |

---

## 🌐 Deployment

### Vercel (Recommended — free, instant)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — done ✅

No configuration needed. Vercel auto-detects Next.js.

### Other options
- **Netlify** — also works with zero config
- **Self-hosted** — `npm run build` then `npm run start` on any Node.js server

---

## 📬 Contact Form

The current form opens the user's mail client via `mailto:`.
For a proper backend form submission, integrate one of:

- [**Formspree**](https://formspree.io) — free, just POST to their endpoint
- [**EmailJS**](https://www.emailjs.com) — send email directly from the browser
- [**Resend**](https://resend.com) — modern email API with Next.js Route Handlers

---

## 🛠 Tech Stack

| Tech | Version | Purpose |
|---|---|---|
| Next.js | 14 | React framework, App Router |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Utility styling |
| Google Fonts | — | Syne (display) + DM Sans (body) |
