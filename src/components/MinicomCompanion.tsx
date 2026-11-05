"use client";

import React, { useState } from "react";

const minicomQuotes = [
  "\"Hi, I'm MINICOM! Shelby & Simon left me to guard the desk... feel free to move things around, I won't tell! ▶\"",
  "\"You noticed the polaroids? Samay taped those down right after the Juspay launch! 📸\"",
  "\"Simon says: 'Structure first, finishes last!' Click on the main bio card to see the Figma bounding box! 📐\"",
  "\"Try dragging the yellow sticky note or the polaroids around the desk mat! ✨\""
];

export const MinicomCompanion: React.FC = () => {
  const [dialogIndex, setDialogIndex] = useState(0);
  const [isPoked, setIsPoked] = useState(false);

  const poke = () => {
    setIsPoked(true);
    setTimeout(() => setIsPoked(false), 300);
  };

  const nextDialog = () => {
    setDialogIndex((prev) => (prev + 1) % minicomQuotes.length);
    poke();
  };

  return (
    <div className="bg-white rounded-3xl p-6 border-2 border-[#1624d6] shadow-[6px_6px_0px_#1624d6] relative transition-transform hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b-2 border-[#1624d6] mb-4">
        <span className="px-2.5 py-0.5 rounded-full bg-[#1624d6] text-white font-mono text-[11px] font-bold tracking-wider">
          MINICOM v1.0
        </span>
        <span className="text-xs font-handwriting text-[#1624d6] font-bold">Shelby's Desk Metaphor</span>
      </div>

      <div className="flex items-start gap-4">
        {/* Minicom Robot Character */}
        <div 
          onClick={poke}
          className="w-16 h-16 rounded-2xl bg-amber-100 border-2 border-[#1624d6] flex-shrink-0 flex items-center justify-center relative shadow-[2px_2px_0px_#1624d6] cursor-pointer"
        >
          <svg className="w-10 h-10 text-[#1624d6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="13" rx="2" fill="#fff" />
            <path d="M7 20h10" />
            <path d="M12 17v3" />
            {/* Screen face */}
            <circle cx="8.5" cy="10.5" r={isPoked ? "2.5" : "1.5"} fill="currentColor" />
            <circle cx="15.5" cy="10.5" r={isPoked ? "2.5" : "1.5"} fill="currentColor" />
            <path d="M9 13 Q 12 15 15 13" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          {/* Feet */}
          <div className="absolute -bottom-2 -left-1 w-2.5 h-2 rounded bg-[#1624d6]"></div>
          <div className="absolute -bottom-2 -right-1 w-2.5 h-2 rounded bg-[#1624d6]"></div>
        </div>

        {/* Speech Bubble */}
        <div className="flex-1">
          <p className="text-xs sm:text-sm font-medium text-neutral-800 leading-snug">
            {minicomQuotes[dialogIndex]}
          </p>
          <div className="mt-2 flex items-center gap-3">
            <button 
              onClick={nextDialog} 
              className="text-[11px] font-mono font-bold text-[#1624d6] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Click to talk</span> <span>→</span>
            </button>
            <span className="text-[10px] text-neutral-400 font-mono">
              {dialogIndex + 1} of {minicomQuotes.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
