"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const ShelbyDeskView: React.FC = () => {
  const deskCanvasRef = useRef<HTMLDivElement>(null);
  const [resetKey, setResetKey] = useState(0);
  const [dialogIndex, setDialogIndex] = useState(0);

  const minicomDialogs = [
    "\"Hi, I'm MINICOM. Deevna's not here right now, so... if you move her stuff around, I won't tell! ▶\"",
    "\"Try clicking the vintage Minolta camera or twisting the Rubik's cube! 📸\"",
    "\"The pink sketchbook has all of Deevna's hand-drawn interaction notes! 📓\"",
    "\"Click 'Reset Desk' anytime to snap everything back to neat coordinates! ✨\""
  ];

  const resetDesk = () => {
    setResetKey((k) => k + 1);
  };

  const nextDialog = () => {
    setDialogIndex((prev) => (prev + 1) % minicomDialogs.length);
  };

  return (
    <div className="bg-white min-h-screen text-[#1624d6] pb-24">
      {/* Shelby Top Navigation */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-[#1624d6] bg-amber-300 flex items-center justify-center font-bold text-xs shadow-[4px_4px_0px_#1624d6] rotate-[-6deg] hover:rotate-0 transition-transform cursor-pointer">
            <span className="tracking-tighter">SK</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-[#1624d6] bg-pink-300 flex items-center justify-center font-bold text-xs shadow-[4px_4px_0px_#1624d6] rotate-[4deg]">
            <span>✏️</span>
          </div>
        </div>

        {/* Shelby Bright Pill Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-full bg-[#f472b6] text-black font-bold text-xs border-2 border-[#1624d6] shadow-[4px_4px_0px_#1624d6] hover:translate-y-1 transition-all cursor-pointer">
            Work
          </button>
          <button className="px-5 py-2 rounded-full bg-[#facc15] text-black font-bold text-xs border-2 border-[#1624d6] shadow-[4px_4px_0px_#1624d6] hover:translate-y-1 transition-all cursor-pointer">
            About
          </button>
          <a 
            href="mailto:deevna@vibecode.design"
            className="px-5 py-2 rounded-full bg-[#38bdf8] text-black font-bold text-xs border-2 border-[#1624d6] shadow-[4px_4px_0px_#1624d6] hover:translate-y-1 transition-all"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Shelby Big Editorial Title */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-4">
        <h1 className="text-6xl sm:text-8xl font-black font-serif text-[#1624d6] tracking-tight">
          Shelby's desk.
        </h1>
        <p className="text-lg sm:text-xl font-serif italic text-neutral-800 mt-2">
          Deevna Reddy; product designer &amp; systems illustrator, currently crafting digital environments.
        </p>
      </div>

      {/* Shelby Full Viewport Interactive Desk Scene */}
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={deskCanvasRef}
          className="bg-[#faf9f6] rounded-3xl border-2 border-[#1624d6] shadow-[6px_6px_0px_#1624d6] p-8 relative min-h-[580px] overflow-hidden"
        >
          {/* Speech Bubble with MINICOM Guide */}
          <div className="max-w-xl mx-auto mb-8 bg-white rounded-3xl border-2 border-[#1624d6] p-6 shadow-[6px_6px_0px_#1624d6] relative">
            <div className="flex items-start gap-5">
              <div 
                onClick={nextDialog}
                className="w-16 h-16 rounded-2xl bg-amber-200 border-2 border-[#1624d6] flex-shrink-0 flex items-center justify-center cursor-pointer shadow-[3px_3px_0px_#1624d6]"
              >
                <svg className="w-10 h-10 text-[#1624d6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="13" rx="2" fill="#fff" />
                  <path d="M7 20h10" /><path d="M12 17v3" />
                  <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor" />
                  <circle cx="15.5" cy="10.5" r="1.5" fill="currentColor" />
                  <path d="M9 13 Q 12 15 15 13" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1624d6] text-white text-[10px] font-mono font-bold uppercase">
                  MINICOM v2.0
                </span>
                <p className="text-sm font-medium text-neutral-800 mt-2 leading-snug">
                  {minicomDialogs[dialogIndex]}
                </p>
                <button 
                  onClick={nextDialog} 
                  className="text-[11px] font-mono font-bold text-[#1624d6] mt-2 flex items-center gap-1 cursor-pointer hover:underline"
                >
                  <span>{dialogIndex + 1} of {minicomDialogs.length} • Click to advance</span> <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Draggable Object 1: Sketchbook Stack with Bookmarks */}
          <motion.div
            key={`sh-book-${resetKey}`}
            drag
            dragConstraints={deskCanvasRef}
            dragElastic={0.1}
            whileTap={{ scale: 1.05 }}
            className="absolute bottom-12 left-10 w-72 p-5 rounded-2xl bg-[#fbcfe8] border-2 border-[#1624d6] shadow-[6px_6px_0px_#1624d6] rotate-[-4deg] z-20 cursor-grab active:cursor-grabbing"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-[#1624d6] text-xs font-mono font-bold">
              <span>2026 JOURNAL</span>
              <span>SKETCHES</span>
            </div>
            <p className="text-xs font-handwriting text-neutral-800 leading-relaxed">
              Click to flip through field notes on mobile checkout, tactile micro-gestures, and haptic feedback loops!
            </p>
          </motion.div>

          {/* Draggable Object 2: Minolta Camera */}
          <motion.div
            key={`sh-cam-${resetKey}`}
            drag
            dragConstraints={deskCanvasRef}
            dragElastic={0.1}
            whileTap={{ scale: 1.05 }}
            className="absolute top-36 right-24 w-52 p-4 rounded-2xl bg-white border-2 border-[#1624d6] shadow-[6px_6px_0px_#1624d6] rotate-[6deg] z-20 cursor-grab active:cursor-grabbing"
          >
            <div className="text-[10px] font-mono font-bold text-[#1624d6]">MINOLTA TC-1</div>
            <div className="h-24 bg-blue-50 rounded-xl border border-blue-200 flex items-center justify-center my-2">
              <span className="text-4xl">📸</span>
            </div>
            <span className="text-[11px] font-handwriting text-neutral-600 block">35mm point &amp; shoot</span>
          </motion.div>

          {/* Draggable Object 3: Pastel Rubik's Cube */}
          <motion.div
            key={`sh-cube-${resetKey}`}
            drag
            dragConstraints={deskCanvasRef}
            dragElastic={0.1}
            whileTap={{ scale: 1.05 }}
            className="absolute bottom-16 right-16 w-36 p-4 rounded-2xl bg-[#fef08a] border-2 border-[#1624d6] shadow-[6px_6px_0px_#1624d6] rotate-[12deg] z-20 cursor-grab active:cursor-grabbing"
          >
            <div className="grid grid-cols-3 gap-1 aspect-square p-2 bg-white rounded-lg border border-neutral-300">
              <div className="bg-pink-400 rounded-sm" />
              <div className="bg-cyan-400 rounded-sm" />
              <div className="bg-yellow-400 rounded-sm" />
              <div className="bg-purple-400 rounded-sm" />
              <div className="bg-pink-400 rounded-sm" />
              <div className="bg-green-400 rounded-sm" />
              <div className="bg-yellow-400 rounded-sm" />
              <div className="bg-cyan-400 rounded-sm" />
              <div className="bg-pink-400 rounded-sm" />
            </div>
            <div className="text-[10px] font-mono text-center font-bold text-neutral-700 mt-2">RUBIK'S CUBE</div>
          </motion.div>

          {/* Draggable Object 4: Mechanical Pen */}
          <motion.div
            key={`sh-pen-${resetKey}`}
            drag
            dragConstraints={deskCanvasRef}
            dragElastic={0.1}
            whileTap={{ scale: 1.05 }}
            className="absolute top-64 left-1/3 p-2 px-6 rounded-full bg-white border-2 border-[#1624d6] shadow-[4px_4px_0px_#1624d6] rotate-[22deg] z-10 text-xs font-mono font-bold cursor-grab active:cursor-grabbing"
          >
            🖊️ Pilot G2 0.38mm (Blue Ink)
          </motion.div>

          {/* Bottom Reset Desk Button */}
          <button
            onClick={resetDesk}
            className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-white border-2 border-[#1624d6] shadow-[4px_4px_0px_#1624d6] text-xs font-mono font-bold hover:bg-neutral-50 transition-all z-30 cursor-pointer"
          >
            Reset Desk ↺
          </button>
        </div>
      </div>
    </div>
  );
};
