"use client";

import React from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";

export const FloatingDock: React.FC = () => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 simon-dock px-4 py-2.5 rounded-2xl flex items-center gap-6">
      <a href="#" className="p-2 rounded-xl hover:bg-black/5 text-neutral-700 hover:text-black transition-colors" title="Home">
        <Home className="w-5 h-5" />
      </a>

      <a href="#about" className="p-2 rounded-xl hover:bg-black/5 text-neutral-700 hover:text-black transition-colors" title="About">
        <User className="w-5 h-5" />
      </a>

      <a href="#work" className="p-2 rounded-xl hover:bg-black/5 text-neutral-700 hover:text-black transition-colors" title="Work">
        <Briefcase className="w-5 h-5" />
      </a>

      <div className="w-px h-5 bg-neutral-200" />

      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2 rounded-xl hover:bg-black/5 text-neutral-700 hover:text-black transition-colors" 
        title="LinkedIn"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>

      <a 
        href="mailto:deevna@vibecode.design" 
        className="p-2 rounded-xl hover:bg-black/5 text-neutral-700 hover:text-black transition-colors" 
        title="Email"
      >
        <Mail className="w-5 h-5" />
      </a>
    </nav>
  );
};
