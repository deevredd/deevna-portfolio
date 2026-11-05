"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const TactileDeskMat: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey((k) => k + 1);
  };

  return (
    <div 
      ref={containerRef}
      className="bg-[#ecebe4] rounded-3xl p-6 border border-neutral-300 relative min-h-[380px] overflow-hidden shadow-inner"
    >
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2">
        <span>TACTILE DESK ITEMS (DRAG ME)</span>
        <button 
          onClick={handleReset}
          className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>Reset Desk ↺</span>
        </button>
      </div>

      {/* Item 1: Samay Maurya Polaroid #1 (Roots) */}
      <motion.div 
        key={`polaroid1-${resetKey}`}
        drag
        dragConstraints={containerRef}
        dragElastic={0.1}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.05, cursor: "grabbing" }}
        className="polaroid-card absolute top-12 left-6 p-3 rounded-xl w-44 rotate-[-6deg] z-20 cursor-grab"
      >
        <div className="tape-strip -top-3 left-10" />
        <div className="aspect-square w-full rounded-lg bg-neutral-100 overflow-hidden relative pointer-events-none">
          <img src="/assets/samay.avif" alt="Samay Work" className="w-full h-full object-cover" />
        </div>
        <div className="pt-2.5 font-handwriting text-neutral-700 text-sm leading-tight pointer-events-none">
          roots: dehradun. <br />
          <span className="text-xs text-neutral-400 font-sans">happiest when prototyping.</span>
        </div>
      </motion.div>

      {/* Item 2: Samay Maurya Polaroid #2 (Architecture Rule) */}
      <motion.div 
        key={`polaroid2-${resetKey}`}
        drag
        dragConstraints={containerRef}
        dragElastic={0.1}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.05, cursor: "grabbing" }}
        className="polaroid-card absolute top-20 right-6 p-3 rounded-xl w-48 rotate-[8deg] z-20 cursor-grab"
      >
        <div className="tape-strip -top-3 right-8" />
        <div className="aspect-square w-full rounded-lg bg-neutral-100 overflow-hidden relative pointer-events-none">
          <img src="/assets/simon_thai.avif" alt="Simon Systems" className="w-full h-full object-cover" />
        </div>
        <div className="pt-2.5 font-handwriting text-neutral-700 text-sm leading-tight pointer-events-none">
          structure first. finishes last.<br />
          <span className="text-xs text-blue-600 font-sans font-bold">that's the rule ↗</span>
        </div>
      </motion.div>

      {/* Item 3: Shelby Kho Draggable Sticky Note (Canary Yellow) */}
      <motion.div 
        key={`sticky-${resetKey}`}
        drag
        dragConstraints={containerRef}
        dragElastic={0.1}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.05, cursor: "grabbing" }}
        className="absolute bottom-6 left-10 w-40 p-4 rounded-lg bg-[#fef08a] border border-amber-300 shadow-md rotate-[4deg] z-30 font-handwriting text-neutral-800 text-sm leading-snug cursor-grab"
      >
        <div className="text-[10px] font-mono text-amber-700 uppercase tracking-widest font-bold mb-1 pointer-events-none">
          To-Do Today
        </div>
        • Ship 8pt spacing tokens<br />
        • Fix checkout haptic lag<br />
        • Water desk plant 🪴
      </motion.div>

      {/* Item 4: Draggable Design Token Chip Tag */}
      <motion.div 
        key={`token-${resetKey}`}
        drag
        dragConstraints={containerRef}
        dragElastic={0.1}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.05, cursor: "grabbing" }}
        className="absolute bottom-12 right-8 p-3 rounded-xl bg-white border-2 border-[#0d99ff] shadow-lg rotate-[-5deg] z-30 font-mono text-xs cursor-grab"
      >
        <div className="text-[9px] text-[#0d99ff] font-bold pointer-events-none">FIGMA ATOM</div>
        <div className="text-neutral-800 font-bold pointer-events-none">radius/lg: 16px</div>
      </motion.div>
    </div>
  );
};
