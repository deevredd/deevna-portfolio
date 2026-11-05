"use client";

import React, { useState } from "react";

export const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("deevnared@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="max-w-7xl mx-auto px-6 sm:px-12 pt-10 pb-4 flex items-center justify-between text-sm">
      {/* Brand Wordmark (Samay Maurya style) */}
      <a href="#" className="font-extrabold text-2xl tracking-tight text-neutral-900 flex items-baseline">
        deevna<span className="text-[#ff4d2e] font-extrabold text-3xl leading-none">.</span>
      </a>

      {/* Center Navigation Links */}
      <nav className="hidden md:flex items-center gap-9 text-xs font-semibold text-neutral-700 tracking-tight">
        <a href="#work" className="hover:text-black transition-colors">
          work
        </a>
        <a href="#about" className="hover:text-black transition-colors flex items-center gap-1">
          about me <span className="text-[#ff4d2e] font-bold text-sm">✦</span>
        </a>
        <a href="#experience" className="hover:text-black transition-colors">
          experience
        </a>
        <a href="#publications" className="hover:text-black transition-colors">
          research
        </a>
        <a
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
        >
          resume ↓
        </a>
      </nav>

      {/* Far Right "Say Hey ↗" */}
      <div className="flex items-center gap-4">
        <button
          onClick={copyEmail}
          className="text-xs font-semibold text-neutral-800 hover:text-[#ff4d2e] transition-colors cursor-pointer flex items-center gap-1.5"
        >
          <span>{copied ? "email copied! ✓" : "say hey ↗"}</span>
        </button>
      </div>
    </header>
  );
};
