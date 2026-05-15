# Kafai Cheng — Portfolio

A clean and modern portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

Designed with a dark neon aesthetic, smooth scrolling animations, and reusable components — easy to customise and deploy.

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

---

### 2. Start the development server

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

The app reloads automatically whenever you save changes.

---

### 3. Build for production

```bash
npm run build
npm run start
```

---

# Project Structure

```txt
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
└── data/
    └── portfolio.ts
```

---

# Editing Content

All portfolio content is stored in:

```txt
src/data/portfolio.ts
```

You can update:

* Personal information
* Hero stats
* Skills
* Projects
* Experience
* Education
* Contact links

---

# Customising Styles

Main colour variables are inside:

```txt
src/app/globals.css
```

Example:

```css
:root {
  --neon: #7c3aed;
  --bg: #05040f;
}
```

---

# Deployment

### Vercel

1. Push the project to GitHub
2. Import the repo into Vercel
3. Deploy

No extra configuration needed.

---

# Tech Stack

* Next.js 14
* React 18
* TypeScript
* Tailwind CSS
