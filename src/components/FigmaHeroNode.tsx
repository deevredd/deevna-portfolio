"use client";

import React from "react";

interface FigmaHeroNodeProps {
  isSelected: boolean;
  onToggleSelect: () => void;
}

export const FigmaHeroNode: React.FC<FigmaHeroNodeProps> = ({
  isSelected,
  onToggleSelect,
}) => {
  return (
    <div className="space-y-8 relative">
      {/* Simon Thai Interactive Figma Selection Frame */}
      <div 
        onClick={onToggleSelect}
        className={`bg-white rounded-3xl p-8 sm:p-10 border border-black/10 shadow-[0_12px_32px_rgba(0,0,0,0.05)] relative cursor-pointer transition-all ${
          isSelected ? "figma-selected" : "hover:border-blue-400"
        }`}
      >
        {/* Figma Handles if selected */}
        {isSelected && (
          <>
            <div className="figma-handle tl" />
            <div className="figma-handle tr" />
            <div className="figma-handle bl" />
            <div className="figma-handle br" />
            <div className="figma-handle tm" />
            <div className="figma-handle bm" />
            <div className="figma-handle ml" />
            <div className="figma-handle mr" />

            {/* Figma Frame Tag */}
            <div className="absolute -top-6 left-0 bg-[#0d99ff] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-t flex items-center gap-1.5 shadow-sm">
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="3" />
              </svg>
              <span>Frame: HeroBioNode (680 x 360)</span>
            </div>
          </>
        )}

        {/* Samay Maurya Role Pill */}
        <div className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase font-mono mb-4">
          PRODUCT DESIGNER &amp; DESIGN SYSTEMS ENGINEER
        </div>

        {/* Samay Maurya Headline Typography */}
        <div className="relative">
          <div className="font-serif italic text-3xl sm:text-4xl text-neutral-800 flex items-center gap-2">
            <span>hey, I'm</span>
            {/* Samay's Hand-drawn Red Wave Underline */}
            <svg className="w-20 h-4 text-orange-500 fill-none stroke-current stroke-2" viewBox="0 0 100 20">
              <path d="M 0,10 Q 25,0 50,10 T 100,10" />
            </svg>
          </div>

          <div className="relative inline-block mt-1">
            <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight text-neutral-900 leading-none">
              deevna<span className="text-[#ff4d2e]">.</span>
            </h1>
            
            {/* Samay's Illustrated Cat resting on the letter */}
            <div className="absolute -top-8 right-2 select-none pointer-events-none transform hover:rotate-6 transition-transform">
              <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none">
                <ellipse cx="20" cy="24" rx="14" ry="11" fill="#fbb040" />
                <polygon points="10,15 15,6 18,16" fill="#f15a24" />
                <polygon points="30,15 25,6 22,16" fill="#f15a24" />
                <circle cx="15" cy="22" r="1.5" fill="#333" />
                <circle cx="25" cy="22" r="1.5" fill="#333" />
                <path d="M 18,25 Q 20,27 22,25" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <line x1="8" y1="23" x2="1" y2="21" stroke="#333" strokeWidth="1" />
                <line x1="8" y1="25" x2="2" y2="26" stroke="#333" strokeWidth="1" />
                <line x1="32" y1="23" x2="39" y2="21" stroke="#333" strokeWidth="1" />
                <line x1="32" y1="25" x2="38" y2="26" stroke="#333" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>

        {/* Simon Thai Architectural Philosophy Statement */}
        <div className="mt-6 space-y-3 text-neutral-700 text-sm sm:text-base leading-relaxed font-normal">
          <p className="font-medium text-neutral-900">
            I trained in digital architecture, so I design systems like buildings:{" "}
            <strong className="font-serif italic text-lg text-blue-600">
              "Structure first, finishes last."
            </strong>
          </p>
          <p className="text-neutral-600">
            I bridge high-craft interaction design with robust token governance—building the load-bearing foundational pieces so software scales seamlessly without design drift.
          </p>
        </div>

        {/* Samay Hand-Drawn "making them work" Annotation */}
        <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap items-center gap-3 text-sm">
          <span className="text-neutral-500">I design interfaces. I also like making them</span>
          <span className="relative font-bold text-neutral-900 px-1 inline-block">
            work.
            {/* Hand-drawn red scribble circle */}
            <svg className="drawn-circle w-full h-full text-[#ff4d2e] stroke-current fill-none stroke-2" viewBox="0 0 100 50" preserveAspectRatio="none">
              <path d="M 5,25 C 5,5 95,5 95,25 C 95,45 5,45 2,25 C 2,15 45,5 92,15" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-orange-500 font-bold">✦</span>
          <span className="text-xs text-neutral-400 font-mono">Framer • React • Design Tokens</span>
        </div>
      </div>

      {/* Experience Strip (Samay Maurya Exact Format) */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5 border border-black/5 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="text-[10px] font-bold font-mono text-neutral-400 uppercase tracking-widest">
          EXPERIENCES
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">J</div>
            <span className="font-bold text-sm text-neutral-800">Juspay</span>
            <span className="px-2 py-0.5 rounded-full bg-orange-500 text-white font-mono text-[9px] font-bold uppercase tracking-wider shadow-sm">
              CURRENTLY HERE
            </span>
          </div>

          <div className="text-neutral-300">/</div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-neutral-800">AR Genie</span>
            <span className="text-xs text-neutral-400 font-mono">Spatial UI</span>
          </div>

          <div className="text-neutral-300">/</div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-neutral-800">Thinkific</span>
            <span className="text-xs text-neutral-400 font-mono">Design Systems</span>
          </div>
        </div>
      </div>
    </div>
  );
};
