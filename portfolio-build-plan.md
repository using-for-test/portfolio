# Portfolio Website — Build Plan
**For:** Khondoker Almikat — CSE Student & Developer Portfolio
**Purpose:** Hand this spec to an AI coding agent (e.g. Antigravity) to implement end-to-end.

---

## 1. Project Overview

Build a single-page personal portfolio website with **dark mode + light (cream) mode toggle**. Style direction: badhon.online-inspired (modern, dark-first developer portfolio) combined with the indigo→pink gradient timeline design from the reference screenshot.

**Sections (in order):** Home (Hero) → About Me → My Skills → Education → Contact → Footer

**Owner content:** Khondoker Almikat, CSE student at Patuakhali Science and Technology University (PSTU), Bangladesh.

---

## 2. Tech Stack

- Plain **HTML5 + CSS3 + vanilla JavaScript** (no framework required — keeps it lightweight and easy for an agent to scaffold).
- If the agent prefers, this can instead be built as a **React + Tailwind CSS** app (Vite) — functionally identical, same tokens below apply as Tailwind theme extensions. Pick one stack and stay consistent throughout.
- Fonts via Google Fonts CDN: `Sora` (headings), `Inter` (body), `JetBrains Mono` (mono/eyebrow/code accents).
- No backend needed. Contact form (if added) submits via `mailto:` link — no server required.
- Deployable as static files (Vercel / Netlify / GitHub Pages compatible).

---

## 3. File Structure

```
/portfolio
  ├── index.html
  ├── /css
  │    └── style.css
  ├── /js
  │    └── main.js
  ├── /assets
  │    └── avatar.jpg (or use GitHub avatar URL)
  └── README.md
```

---

## 4. Theme System (Dark + Cream Light Mode)

- Implement via **CSS custom properties** on `:root` and an override block under `[data-theme="light"]`.
- A toggle button (sun/moon icon) sits in the nav bar. On click, toggle `data-theme` attribute on `<html>` between `"dark"` (default) and `"light"`.
- Persist user choice in `localStorage` (`theme` key). On page load, check `localStorage` first; if empty, fall back to `prefers-color-scheme` media query; default to dark if neither is set.
- Add a 200ms CSS transition on `background-color` and `color` for a smooth swap (skip if `prefers-reduced-motion: reduce`).
- Toggle button must have `aria-pressed` state and a visible focus ring.

### Color Tokens

```css
:root {
  /* DARK MODE (default) */
  --bg: #0d0d12;             /* Page background */
  --surface: #17171f;        /* Cards */
  --surface-hover: #1e1e29;  /* Card hover state */
  --border: #2a2a35;         /* Card borders, dividers */
  --ink: #f5f5fa;            /* Headings, primary text */
  --muted: #9a99ab;          /* Body/secondary text */
  --accent-1: #7c6cf0;       /* Gradient start (indigo) */
  --accent-2: #ec4899;       /* Gradient end (pink) */
  --gradient: linear-gradient(135deg, var(--accent-1), var(--accent-2));
  --radius: 20px;
}

[data-theme="light"] {
  /* LIGHT / CREAM MODE */
  --bg: #faf6ee;             /* Page background */
  --surface: #f2ecdf;        /* Cards */
  --surface-hover: #ece3d1;  /* Card hover state */
  --border: #e4d9c4;         /* Card borders, dividers */
  --ink: #231f14;            /* Headings, primary text */
  --muted: #75705f;          /* Body/secondary text */
  --accent-1: #6d5ce8;       /* Gradient start (indigo) */
  --accent-2: #e0397a;       /* Gradient end (pink) */
  /* Gradient: linear-gradient(135deg, var(--accent-1), var(--accent-2)) */
}
```

### Typography

- Display/headings: `'Sora', sans-serif` — weight 700–800
- Body: `'Inter', sans-serif` — weight 400–500
- Mono (eyebrows, tags, terminal block, skill chips): `'JetBrains Mono', monospace`

---

## 5. Section-by-Section Spec

### 5.1 Navigation
- Fixed top, translucent blurred background (`backdrop-filter: blur(10px)`), uses `--bg` at ~85% opacity.
- Left: logo/wordmark `khondoker.almikat` (gradient text on `.almikat`).
- Center/right: links to `#home #about #skills #education #contact`.
- Right-most: theme toggle button.
- Mobile (<860px): links collapse into a hamburger menu; toggle button stays visible.

### 5.2 Home (Hero)
- Two-column layout: left = text content, right = **signature terminal/code block** (`const developer = {...}` snippet showing name, role, university, location, skills array). Always styled as a dark terminal window regardless of site theme (realistic dev-tool look).
- Ambient glow behind the terminal: cool violet blur in dark mode, soft warm pink-peach blur in light mode.
- Eyebrow label: `available for opportunities`
- H1: "Hi, I'm Khondoker Almikat" + gradient-text line "CSE Student & Developer."
- Subtext: 1–2 sentence intro (CSE student at PSTU, beginner-level programmer, problem solving focus).
- Two buttons: **Get in touch** (gradient, primary, scrolls to `#contact`) and **View GitHub** (secondary outline, links to `https://github.com/kh-almikat`).

### 5.3 About Me
- Two-column: left = card with avatar image + quick-facts list (Name / University / Location / Status); right = 2–3 paragraph bio.
- Bio content: CSE student at PSTU, programmer focused on fundamentals, practices on Codeforces, builds web & desktop software projects, open to internships/freelance/collab work.
- Quick facts: Name: Khondoker Almikat · University: PSTU · Location: Barishal, BD · Status: Available.

### 5.4 My Skills
- 3-column card grid (stacks to 1 column on mobile):
  1. **Programming Languages** — C, C++, Python, JavaScript
  2. **Web & Backend** — FastAPI, HTML5, CSS3, Tailwind CSS
  3. **Tools & Platforms** — Git, GitHub, VS Code, Postman
- Each skill rendered as a small mono-font "tag" chip inside its category card.
- Card hover: background shifts to `--surface-hover`, slight lift (`translateY(-4px)`).

### 5.5 Education (exact structure from reference screenshot)
- Centered heading "Education" with gradient underline.
- Vertical timeline: a single gradient line (`--gradient`) running down the center, with circular dot markers at each milestone, and cards alternating left/right.
- **Entries (in this order, top to bottom):**
  1. **Patuakhali Science & Technology University** — Bachelor of Science in Computer Science & Engineering — 2024 - Present
  2. **Higher Secondary Certificate (HSC)** — Government Brojomohun College, Barishal — 2022 - 2024
  3. **Secondary School Certificate (SSC)** — Barishal Govt. Model School & College — 2017 - 2022
- On mobile: line moves to the left edge, all cards align left (single column), dots align with the line.

### 5.6 Contact
- Centered card/block: heading "Let's build something together.", short supporting line, a gradient **mailto button** with the email address as its label (`khondoker.almikat@gmail.com`), and a row of social "pills" below linking out:
  - LinkedIn → `https://www.linkedin.com/in/khondoker-almikat/`
  - LeetCode → `https://leetcode.com/u/kh_almikat/`
  - Codeforces → `https://codeforces.com/profile/almikat_ahmed`
  - Facebook → `https://www.facebook.com/almikat.ahmed`

### 5.7 Footer
- Single centered line, mono font, muted color: `© 2026 Khondoker Almikat — Built with clean code & precision.`

---

## 6. Interactions / JS Requirements

- Smooth scroll for in-page nav links (`scroll-behavior: smooth` or JS `scrollIntoView`).
- Mobile hamburger menu open/close toggle.
- Theme toggle logic (see Section 4) with `localStorage` persistence.
- Close mobile menu automatically after a nav link is clicked.

---

## 7. Accessibility & Quality Bar

- Responsive down to ~360px width.
- Visible keyboard focus states on all interactive elements (buttons, links, toggle).
- Respect `prefers-reduced-motion`: disable transitions/animations when set.
- Sufficient color contrast in both themes (verify body text ≥ 4.5:1 against background).
- All images have descriptive `alt` text.
- Semantic HTML: `<nav>`, `<section>`, `<footer>`, proper heading hierarchy (`h1` once, `h2` per section).

---

## 8. Acceptance Criteria (checklist for the agent to self-verify)

- [ ] Site loads in dark mode by default (or respects saved/system preference).
- [ ] Toggle switches instantly between dark and cream themes; preference persists on reload.
- [ ] All 5 sections present in correct order with correct content as specified above.
- [ ] Education timeline visually matches alternating-card + gradient-line-with-dots pattern, responsive on mobile.
- [ ] Skill tags match the three categories and exact items listed.
- [ ] All social/contact links point to the correct real URLs listed above.
- [ ] Site is fully responsive (mobile menu works, timeline collapses correctly).
- [ ] No console errors; site works with JS disabled for basic content readability (progressive enhancement is a bonus, not mandatory).

---

## 9. Notes for the Agent

- Reuse the gradient `#7c6cf0 → #ec4899` as the one consistent brand element across both themes — it should appear identically in the hero gradient text, education timeline, and CTA button in both dark and light modes.
- Do not invent new sections or content beyond what's specified — this is a fixed-scope build.
- If using React/Tailwind instead of vanilla HTML/CSS, map the CSS variables above to Tailwind theme colors (`dark` and `light` variants) rather than hardcoding hex values inline.
