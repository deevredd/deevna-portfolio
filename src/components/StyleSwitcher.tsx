"use client";

import React from "react";

export type PortfolioMode = 1 | 2 | 3 | 4;

interface StyleSwitcherProps {
  activeMode: PortfolioMode;
  onSelectMode: (mode: PortfolioMode) => void;
}

export const StyleSwitcher: React.FC<StyleSwitcherProps> = ({
  activeMode,
  onSelectMode,
}) => {
  const modes: { id: PortfolioMode; label: string; badge: string }[] = [
    { id: 1, label: "1. Stage Progression Hybrid", badge: "Samay + Shelby + Simon" },
    { id: 2, label: "2. Pure Shelby's Desk", badge: "Tactile Workspace" },
    { id: 3, label: "3. Pure Simon's Figma Canvas", badge: "Architectural Systems" },
    { id: 4, label: "4. Pure Samay's Editorial Craft", badge: "Warm Paper & Widescreen" },
  ];

  return (
    <aside className="sticky top-0 z-50 bg-[#11131e] border-b border-white/10 text-white px-4 py-3 shadow-2xl backdrop-blur-xl bg-opacity-95">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Guide */}
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider">
            STYLE LAB
          </span>
          <span className="text-xs font-semibold text-neutral-300 hidden sm:inline">
            Active Architectural Direction for Deevna Reddy:
          </span>
        </div>

        {/* 4 One-Click Switcher Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-black/40 rounded-xl border border-white/10 text-xs font-mono">
          {modes.map((mode) => {
            const isActive = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => onSelectMode(mode.id)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <span>{mode.label}</span>
                {isActive && (
                  <span className="hidden lg:inline text-[9px] px-1.5 py-0.5 rounded bg-white/20 text-indigo-100 uppercase font-sans">
                    {mode.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
