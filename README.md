# Al Mikat — Developer Portfolio

A modern, clean, professional, and premium developer portfolio website for **Al Mikat**, Computer Science & Engineering student at Patuakhali Science and Technology University (PSTU), competitive programmer, and aspiring software developer.

---

## 🎨 Theme & Palette System

### 🌙 Dark Mode (Default)
- **Background**: `#0d0d12` (Page background)
- **Surface**: `#17171f` (Cards)
- **Surface Hover**: `#1e1e29` (Card hover state)
- **Border**: `#2a2a35` (Card borders, dividers)
- **Ink**: `#f5f5fa` (Headings, primary text)
- **Muted**: `#9a99ab` (Body/secondary text)
- **Accent 1**: `#7c6cf0` (Gradient start - indigo)
- **Accent 2**: `#ec4899` (Gradient end - pink)

### ☀️ Light / Cream Mode
- **Background**: `#faf6ee` (Page background)
- **Surface**: `#f2ecdf` (Cards)
- **Surface Hover**: `#ece3d1` (Card hover state)
- **Border**: `#e4d9c4` (Card borders, dividers)
- **Ink**: `#231f14` (Headings, primary text)
- **Muted**: `#75705f` (Body/secondary text)
- **Accent 1**: `#6d5ce8` (Gradient start - indigo)
- **Accent 2**: `#e0397a` (Gradient end - pink)

**Gradient (Both Modes)**: `linear-gradient(135deg, var(--accent-1), var(--accent-2))` — Smooth indigo-to-pink gradient.

---

## 📑 Section Flow

1. **Home (`#home`)**: Clean text-only hero greeting ("Hi, I'm Al Mikat 👋"), professional title ("CSE Student | Competitive Programmer | Aspiring Software Developer"), introduction, and dual CTA buttons ("View Projects" & "Visit Github").
2. **About (`#about`)**: Clean, text-focused narrative explaining Computer Science studies at PSTU, competitive programming, problem solving, software engineering, and continuous learning.
3. **Skills (`#skills`)**: Structured categories (*Languages*, *Web Development*, *Tools & Workflow*).
4. **Projects (`#projects`)**: Prominent showcase featuring **UniPay** (University Online Payment & Fee Management System), **AlgoForge** (CP & Algorithm Tracker), and **CampusHub** (Student Academic Management Portal) with screenshots, tech tags, and action buttons.
5. **Education (`#education`)**: Elegant academic cards displaying B.Sc. in CSE at PSTU, HSC, and SSC milestones with coursework.
6. **Contact (`#contact`)**: "Let's Build Something Together 👋", direct mailto button, and social profiles (LinkedIn, LeetCode, Codeforces, Facebook).

---

## 📁 Project Structure

```
d:/CSE/Portfolio/
  ├── index.html               # Main semantic HTML5 document
  ├── css/
  │    └── style.css           # Modern CSS variables, design system, responsive styles
  ├── js/
  │    └── main.js             # Mobile menu, ScrollSpy, dynamic header elevation
  ├── assets/
  │    ├── hero-portrait.png   # Developer portrait photo
  │    ├── brand-logo.png      # Brand icon / social metadata & favicon
  │    └── project-unipay.png  # UniPay project preview screenshot
  ├── portfolio-build-plan.md  # Build specification
  └── README.md                # Documentation
```

---

## 🚀 How to Run Locally

You can run this project with any local web server.

### Option 1: Python Built-in Server
```bash
python -m http.server 3000
```
Then open `http://localhost:3000` in your web browser.

### Option 2: VS Code Live Server
1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

### Option 3: Node / npx
```bash
npx serve .
```
