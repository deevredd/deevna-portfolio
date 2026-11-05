"use client";

import React, { useState } from "react";

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("deevnared@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="max-w-6xl mx-auto px-6 pt-20 pb-28 border-t border-neutral-300">
      <div className="bg-white rounded-3xl border border-neutral-300 p-8 sm:p-14 text-center space-y-6 shadow-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-600">
          <span className="text-orange-500 font-bold">✦</span>
          <span>SAY HELLO</span>
        </div>

        <h3 className="text-4xl sm:text-6xl font-extrabold font-serif text-neutral-900 tracking-tight leading-tight max-w-2xl mx-auto">
          Let's build systems that hold up.
        </h3>

        <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto font-sans leading-relaxed">
          I'm always open to new engineering challenges, backend scale discussions, and applied ML collaborations.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={copyEmail}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{copied ? "COPIED TO CLIPBOARD! ✓" : "COPY EMAIL (DEEVNARED@GMAIL.COM)"}</span>
          </button>
          <a
            href="mailto:deevnared@gmail.com"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-mono font-bold text-xs tracking-wider uppercase border border-neutral-300 transition-all flex items-center justify-center"
          >
            SAY HELLO ↗
          </a>
        </div>

        {/* Location & Relocation note */}
        <div className="text-xs font-mono text-neutral-500 pt-2">
          📍 Base: Chennai, India • Open to Remote &amp; Relocation
        </div>

        {/* Social Links Strip */}
        <div className="pt-8 border-t border-neutral-200 flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-bold text-neutral-600">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            GITHUB ↗
          </a>
          <a
            href="https://x.com/deevredd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            TWITTER / X (@DEEVREDD) ↗
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LINKEDIN ↗
          </a>
          <a
            href="https://deevna-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LIVE PORTFOLIO ↗
          </a>
        </div>
      </div>

      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-400 gap-2">
        <span>© 2026 DEEVNA REDDY • SOFTWARE DEVELOPMENT ENGINEER</span>
        <span>AESTHETICS &amp; TYPOGRAPHY INSPIRED BY SAMAY MAURYA</span>
      </div>
    </footer>
  );
};
