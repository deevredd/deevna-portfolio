"use client";

import { useState, useEffect } from "react";
import { nav } from "@/lib/content";
import GenZToggle from "./GenZToggle";
import { useGenZ } from "@/context/GenZContext";

export default function Header() {
  const { mode } = useGenZ();
  const [activeSection, setActiveSection] = useState<string>("top");

  useEffect(() => {
    if (mode === "genz") return;

    const handleScroll = () => {
      const sectionIds = ["about", "experience", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("top");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  if (mode === "genz") return null;

  return (
    <header className="sticky top-0 z-30 border-b border-surface1/60 bg-crust/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10 py-4">
        <a href="#top" className="font-bold text-white text-lg tracking-tight hover:text-mauve transition-colors flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-mauve shadow-sm" />
          <span>Deevna Reddy</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 bg-surface0/60 p-1 rounded-full border border-surface1/80 text-xs font-mono">
          {nav.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3.5 py-1.5 rounded-full font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-surface1 text-white shadow-sm border border-surface2"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <span className="text-mauve font-bold">{item.num}.</span> {item.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-terminal"))}
            className="hidden sm:flex items-center gap-2 bg-surface0/80 hover:bg-surface1 text-slate-200 hover:text-white px-3 py-1.5 rounded-full border border-surface1 hover:border-slate-500 font-mono text-xs transition-all active:scale-95 cursor-pointer shadow-sm"
            title="Open Interactive Terminal (⌘K)"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-semibold text-white">CLI</span>
            <kbd className="bg-white/10 text-slate-300 text-[10px] px-1 py-0.5 rounded font-mono font-bold">
              ⌘K
            </kbd>
          </button>
          <GenZToggle />
        </div>
      </div>
      <nav className="md:hidden flex gap-6 overflow-x-auto px-6 pb-3 -mt-1">
        {nav.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="font-mono text-xs font-semibold text-slate-100 hover:text-white whitespace-nowrap">
            <span className="text-mauve font-bold">{item.num}.</span> {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function socialIcon(label: string) {
  if (label === "LinkedIn")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    );
  if (label === "GitHub")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.56 1.42.2 2.47.1 2.73.65.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.21 10.21 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

