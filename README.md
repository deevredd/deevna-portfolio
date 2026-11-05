# Deevna Reddy — Software Development Engineer

> Backend Systems · Distributed Infrastructure · Applied ML / RAG · IEEE ICCDS 2025 Author

[![Live Site](https://img.shields.io/badge/Live-deevna--portfolio.vercel.app-f0553a?style=flat-square&logo=vercel)](https://deevna-portfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

A craft-driven, editorial engineering portfolio showcasing production scale systems, published research, and architectural interactive prototypes.

🌐 **Live Portfolio:** [deevna-portfolio.vercel.app](https://deevna-portfolio.vercel.app/)

---

## Highlights at Scale

- **50M+ Alexa Users:** Architected automated compliance infrastructure processing 10k+ daily Data Subject Access Requests (DSARs) with 70% acceleration and zero downtime.
- **15+ Microservices:** Led JDK 17 migrations across critical distributed backend pipelines, reducing runtime latency and optimizing memory allocation.
- **2× Published Papers:** Authored multimodal cancer biomarker fusion pipelines (IEEE ICCDS 2025) and deep learning biometric architectures (Springer Nature).

---

## Design System & Aesthetic Architecture

The portfolio departs from generic developer dark-mode templates in favor of a tactile, editorial paper craft aesthetic inspired by physical architectural monographs:

- **Warm Paper & Charcoal Palette:** `#f6f4ef` warm cream paper in light mode, `#121211` deep charcoal in dark mode, accented by `#f0553a` vermilion ink.
- **Calibrated Typographic Hierarchy:**
  - **Display / Headers:** *Instrument Serif* — authoritative, expressive editorial headlines (`clamp(48px, 5.2vw, 64px)`).
  - **Body / Interface:** *Plus Jakarta Sans* — clean, legible geometric sans-serif (`15px`, line-height `1.6`).
  - **Telemetry / Metadata:** *JetBrains Mono* — sharp monospace for commit hashes, telemetry coordinates, and stack layers (`10.5px`, `0.16em` tracking).
  - **Organic Touch:** *Caveat* — handwritten marginalia notes and doodles.
- **Spatial Equilibrium:** Restrained hero scale (`clamp(110px, 12vw, 160px)`) that ensures high-impact proof metrics sit directly above the fold on all standard viewports.

---

## Core Engineering Features

### 1. 3D Isometric Architectural Strata
An interactive 5-layer isometric mechanical stack showcasing technology across physical strata:
- `01 · Applications` (Products & Services: Next.js, React, FastAPI, Flutter)
- `02 · AI Layer` (RAG & ML Models: PyTorch, LangChain, Pinecone, HuggingFace)
- `03 · Backend Services` (Microservices: Java, Spring Boot, Go, Kafka, Redis)
- `04 · Data Layer` (ETL & Databases: PostgreSQL, MongoDB, Snowflake, ClickHouse)
- `05 · Infrastructure` (Cloud & Bare Metal: AWS, Docker, Kubernetes, Terraform)

Features tactile spring delamination on click or numeric hotkeys (`1`–`5`), accompanied by live telemetry readout and sub-tool chips.

### 2. Interactive Git Graph (`git log --graph`)
Experience section modeled directly after Git branch topology:
- Visual branching paths, merge commits, and active branch filtering (Amazon, Stealth, Research).
- Expandable commit cards featuring formatted `+`/`-` line diff overlays.

### 3. Asymmetric Bento Grid & Live Case Studies
Project showcase equipped with:
- Perspective 3D tilt responding to cursor coordinates.
- Dynamic SVG architecture diagrams illustrating real-time data flows (Claims processing, TradeShield precision-recall curves, CT + RNA-seq multimodal fusion).
- Slide-out engineering drawer (`#dr`) with structured post-mortems (*Problem*, *Approach*, *Outcome*, and *Tradeoffs*).

### 4. Tactile Micro-Interaction Engine
- **Canvas Physics:** Cursor-elastic particle mesh simulating physical fabric tension.
- **Magnetic Context Cursor:** Adapts dynamic state labels (`view`, `peek`, `pet`, `mail`).
- **Command Palette (`⌘K`):** Instant keyboard fuzzy jump across sections, project deep-links, and theme toggle.
- **Interactive Companion:** Animated peeking cat with eye gaze tracking and tactile purr animation.

---

## Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19, TypeScript |
| **Styling** | Tailwind CSS v4, Modern CSS Custom Properties |
| **Animation & 3D** | Framer Motion, HTML5 Canvas 2D Physics, Isometric SVG Strata |
| **Icons & Media** | Lucide React, Optimized AVIF image formats |
| **Deployment** | Vercel (CI/CD connected to `main`) |

---

## Project Structure

```
deevna-portfolio/
├── public/
│   ├── assets/              # Company logos, badges, and project assets
│   ├── resume.pdf           # Up-to-date resume
│   ├── portfolio.html       # Standalone static editorial edition
│   ├── portfolio.js         # Interactive craft engine runtime
│   ├── tools-smooth.html    # Standalone 3D tactile stack prototype
│   └── comparison.html      # Interactive side-by-side scale comparison
├── src/
│   ├── app/
│   │   ├── globals.css      # Core tokens, typography scale, and craft styles
│   │   ├── layout.tsx       # Root layout, metadata, and web font loaders
│   │   ├── page.tsx         # Next.js entry point
│   │   ├── robots.ts        # SEO robots configuration
│   │   └── sitemap.ts       # Automated sitemap generation
│   └── components/          # React components
│       ├── Hero.tsx
│       ├── Experience.tsx
│       ├── SkillsMatrix.tsx
│       ├── Publications.tsx
│       ├── WidescreenWorks.tsx
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── views/
├── package.json
├── next.config.mjs
├── tsconfig.json
└── README.md
```

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/deevredd/deevna-portfolio.git
cd deevna-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## License & Author

Crafted with care by **Deevna Reddy**.  
Live at [deevna-portfolio.vercel.app](https://deevna-portfolio.vercel.app/).
