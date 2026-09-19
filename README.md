# Deevna Reddy — Portfolio

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4, using the self-hosted `geist` font package (Geist Sans + Geist Mono). Color palette is Catppuccin Mocha.

## Structure
- Sticky sidebar (intro, nav, socials) on desktop, collapsing to a top scroll-nav on mobile
- Numbered sections: 01 About, 02 Experience, 03 Projects, 04 Contact
- **Gen Z mode**: a toggle in the sidebar (and mobile footer) that swaps the copy across every section into a Gen Z slang variant, powered by `src/context/GenZContext.tsx` and the `normal` / `genz` pairs in `src/lib/content.ts`

## Editing your content
Everything — bio, jobs, projects, contact info, and both copy variants — lives in `src/lib/content.ts`. 

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Pushed to GitHub and imported into [Vercel](https://vercel.com/new) — zero config needed.
