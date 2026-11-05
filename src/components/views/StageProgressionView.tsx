"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const StageProgressionView: React.FC = () => {
  const deskMatRef = useRef<HTMLDivElement>(null);
  const [resetKey, setResetKey] = useState(0);

  const resetDesk = () => {
    setResetKey((k) => k + 1);
  };

  return (
    <div className="bg-[#f4f3ef] min-h-screen text-[#18181b] pb-24">
      {/* ================= STAGE 1: SAMAY MAURYA HERO ================= */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-bold text-xs bg-amber-300 shadow-[2px_2px_0px_#000] rotate-[-4deg]">
              DR
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-neutral-900 block leading-none">
                deevna reddy.
              </span>
              <span className="text-[11px] text-neutral-500 font-serif italic">
                design systems architect
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs font-semibold text-neutral-700">
            <a href="#s1-desk" className="hover:text-black">the desk</a>
            <a href="#s1-canvas" className="hover:text-black">tokens &amp; system</a>
            <a href="#s1-works" className="hover:text-black">work</a>
            <a
              href="mailto:deevna@vibecode.design"
              className="px-4 py-1.5 rounded-full bg-[#facc15] text-black font-bold border border-black shadow-[2px_2px_0px_#000]"
            >
              say hey ↗
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase font-mono">
              PRODUCT DESIGNER &amp; DESIGN SYSTEMS ENGINEER
            </div>

            <div className="font-serif italic text-3xl sm:text-5xl text-neutral-800 flex items-center gap-3">
              <span>hey, I'm</span>
              <svg className="w-24 h-5 text-orange-500 fill-none stroke-current stroke-2" viewBox="0 0 100 20">
                <path d="M 0,10 Q 25,0 50,10 T 100,10" />
              </svg>
            </div>

            <div className="relative inline-block">
              <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tight text-neutral-900 leading-none">
                deevna<span className="text-[#ff4d2e]">.</span>
              </h1>
              {/* Resting Cat Illustration */}
              <div className="absolute -top-10 right-4 select-none pointer-events-none">
                <svg className="w-14 h-14" viewBox="0 0 40 40" fill="none">
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

            <p className="text-lg text-neutral-600 max-w-xl font-normal leading-relaxed pt-2">
              I design digital products. I also like making them{" "}
              <span className="relative font-bold text-neutral-900 px-1 inline-block">
                work.
                <svg className="absolute -inset-1 w-full h-full text-[#ff4d2e] stroke-current fill-none stroke-2 pointer-events-none" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <path d="M 5,25 C 5,5 95,5 95,25 C 95,45 5,45 2,25 C 2,15 45,5 92,15" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-orange-500 font-bold ml-1">✦</span>
            </p>

            {/* Experiences Strip */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-500">
              <span className="uppercase tracking-widest text-[10px] font-bold text-neutral-400">EXPERIENCES</span>
              <span className="font-bold text-neutral-800 flex items-center gap-1.5">
                Juspay <span className="px-2 py-0.5 rounded-full bg-orange-500 text-white text-[9px] font-bold">CURRENT</span>
              </span>
              <span>/</span>
              <span className="font-bold text-neutral-800">AR Genie</span>
              <span>/</span>
              <span className="font-bold text-neutral-800">Thinkific</span>
            </div>
          </div>

          {/* Polaroid Stack */}
          <div className="lg:col-span-4 relative h-72">
            <div className="absolute top-0 right-8 p-3 rounded-xl bg-white w-52 rotate-[-5deg] z-10 shadow-lg">
              <div className="tape-strip -top-3 left-12" />
              <div className="aspect-square rounded-lg bg-neutral-100 overflow-hidden">
                <img src="/assets/samay.avif" alt="Photo" className="w-full h-full object-cover" />
              </div>
              <div className="pt-2 font-handwriting text-neutral-700 text-sm">
                roots: bengaluru.<br />
                <span className="text-xs text-neutral-400 font-sans">happiest when pixels snap.</span>
              </div>
            </div>

            <div className="absolute top-12 right-0 p-3 rounded-xl bg-white w-48 rotate-[8deg] z-20 shadow-xl">
              <div className="tape-strip -top-3 right-8" />
              <div className="aspect-square rounded-lg bg-neutral-100 overflow-hidden">
                <img src="/assets/simon_thai.avif" alt="Photo" className="w-full h-full object-cover" />
              </div>
              <div className="pt-2 font-handwriting text-neutral-700 text-sm">
                structure first.<br />
                <span className="text-xs text-blue-600 font-sans font-bold">that's me ↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STAGE 2: SHELBY'S INTERACTIVE DESK MAT ================= */}
      <div id="s1-desk" className="border-t-2 border-b-2 border-neutral-300 bg-[#e8e6dc] py-16 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-300 text-xs font-mono text-neutral-700 mb-2">
                <span className="text-blue-600 font-bold">STAGE 02</span>
                <span>• Shelby Kho's Tactile Desk Metaphor</span>
              </div>
              <h2 className="text-3xl font-extrabold font-serif text-neutral-900">
                Deevna's Physical Studio Desk.
              </h2>
            </div>
            <button
              onClick={resetDesk}
              className="px-4 py-2 rounded-xl bg-white border border-neutral-300 font-mono text-xs font-bold text-blue-600 hover:bg-neutral-50 shadow-sm self-start cursor-pointer"
            >
              Reset Desk Items ↺
            </button>
          </div>

          {/* Full Desk Surface Area with Draggable Real Objects */}
          <div
            ref={deskMatRef}
            className="bg-[#f0eee4] rounded-3xl p-8 border-2 border-neutral-300 shadow-inner relative min-h-[440px] overflow-hidden"
          >
            {/* MINICOM Character */}
            <div className="absolute top-8 left-8 p-4 rounded-2xl bg-white border-2 border-[#1624d6] shadow-[6px_6px_0px_#1624d6] max-w-sm z-30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-100 border-2 border-[#1624d6] flex items-center justify-center cursor-pointer">
                  <svg className="w-7 h-7 text-[#1624d6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="13" rx="2" fill="#fff" />
                    <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor" />
                    <circle cx="15.5" cy="10.5" r="1.5" fill="currentColor" />
                    <path d="M9 13 Q 12 15 15 13" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#1624d6] block">MINICOM GUIDE</span>
                  <p className="text-xs text-neutral-800 font-medium">"Drag the camera, sticky notes, or sketchbook around!"</p>
                </div>
              </div>
            </div>

            {/* Draggable Item: Vintage Camera */}
            <motion.div
              key={`camera-${resetKey}`}
              drag
              dragConstraints={deskMatRef}
              dragElastic={0.1}
              whileTap={{ scale: 1.05 }}
              className="absolute top-12 right-20 p-4 rounded-2xl bg-white border-2 border-[#1624d6] shadow-[6px_6px_0px_#1624d6] w-56 rotate-[4deg] z-20 cursor-grab active:cursor-grabbing"
            >
              <div className="text-[10px] font-mono text-[#1624d6] font-bold uppercase mb-1">MINOLTA TC-1</div>
              <div className="h-20 bg-neutral-100 rounded-lg flex items-center justify-center border border-neutral-200">
                <span className="text-3xl">📷</span>
              </div>
              <p className="text-xs font-handwriting text-neutral-600 mt-2">"Used for design field research &amp; spatial scans."</p>
            </motion.div>

            {/* Draggable Item: Yellow Sticky Note */}
            <motion.div
              key={`sticky-${resetKey}`}
              drag
              dragConstraints={deskMatRef}
              dragElastic={0.1}
              whileTap={{ scale: 1.05 }}
              className="absolute bottom-12 left-16 p-4 rounded-lg bg-[#fef08a] border border-amber-300 shadow-md w-44 rotate-[-6deg] z-20 font-handwriting text-sm leading-tight text-neutral-800 cursor-grab active:cursor-grabbing"
            >
              <span className="text-[10px] font-mono uppercase font-bold text-amber-700 block mb-1">TODAY'S SPRINT</span>
              • Review 8pt spatial tokens<br />
              • Fix payment haptic curve<br />
              • Water the desk fern 🌿
            </motion.div>

            {/* Draggable Item: Spiral Sketchbook */}
            <motion.div
              key={`book-${resetKey}`}
              drag
              dragConstraints={deskMatRef}
              dragElastic={0.1}
              whileTap={{ scale: 1.05 }}
              className="absolute bottom-8 right-32 p-5 rounded-2xl bg-white border-2 border-neutral-800 shadow-xl w-64 rotate-[-2deg] z-20 cursor-grab active:cursor-grabbing"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-200 text-xs font-mono">
                <span className="font-bold text-orange-600">📓 ACTIVE SKETCHBOOK</span>
                <span className="text-neutral-400">P. 12</span>
              </div>
              <p className="text-xs text-neutral-700 font-serif italic">
                "When financial tools feel cold, users experience acute anxiety. Warm, tactile UI restores human agency."
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= STAGE 3: SIMON THAI ARCHITECTURAL FIGMA CANVAS ================= */}
      <div id="s1-canvas" className="py-20 px-6 border-b-2 border-neutral-300">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 mb-2">
                <span className="font-bold">STAGE 03</span>
                <span>• Simon Thai's Architectural Design System</span>
              </div>
              <h2 className="text-3xl font-extrabold font-serif text-neutral-900">
                "Structure first, finishes last."
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-md font-mono">
              Like physical architecture, scalable digital products require load-bearing foundational tokens before aesthetic paint is applied.
            </p>
          </div>

          {/* Figma Frame with Live Selection Handles */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200 figma-selected shadow-xl relative">
            <div className="figma-handle tl" /><div className="figma-handle tr" />
            <div className="figma-handle bl" /><div className="figma-handle br" />
            <div className="figma-handle tm" /><div className="figma-handle bm" />
            <div className="figma-handle ml" /><div className="figma-handle mr" />

            <div className="absolute -top-6 left-0 bg-[#0d99ff] text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-t flex items-center gap-1.5 shadow-sm">
              <span>Frame: DesignTokenMatrix (1024 x 380)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Button States Matrix */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block">01 / BUTTON MATRIX</span>
                <button className="w-full py-3 rounded-xl bg-cyan-500 text-black font-bold text-xs uppercase tracking-wider shadow-sm cursor-pointer">
                  Primary Action (Default)
                </button>
                <button className="w-full py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer">
                  Primary Action (Hovered)
                </button>
                <button className="w-full py-3 rounded-xl border-2 border-neutral-800 text-neutral-800 font-bold text-xs uppercase tracking-wider cursor-pointer">
                  Secondary Outline
                </button>
              </div>

              {/* Spatial Scale */}
              <div className="space-y-3 font-mono text-xs">
                <span className="font-bold text-neutral-400 uppercase tracking-widest block">02 / 8PT SPATIAL SCALE</span>
                <div className="p-3 bg-neutral-50 rounded-xl flex items-center justify-between border border-neutral-200">
                  <span className="text-neutral-500">space/16</span>
                  <span className="h-3 w-4 bg-blue-500 rounded" />
                  <strong>16px</strong>
                </div>
                <div className="p-3 bg-neutral-50 rounded-xl flex items-center justify-between border border-neutral-200">
                  <span className="text-neutral-500">space/24</span>
                  <span className="h-3 w-6 bg-blue-500 rounded" />
                  <strong>24px</strong>
                </div>
                <div className="p-3 bg-neutral-50 rounded-xl flex items-center justify-between border border-neutral-200">
                  <span className="text-neutral-500">space/32</span>
                  <span className="h-3 w-8 bg-blue-500 rounded" />
                  <strong>32px</strong>
                </div>
              </div>

              {/* Scalability ROI */}
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block">03 / VERIFIED IMPACT</span>
                <div>
                  <div className="text-4xl font-extrabold text-blue-600 font-mono">-45%</div>
                  <div className="text-xs text-neutral-500 font-mono">Design Drift Across 14 Squads</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-emerald-600 font-mono">100%</div>
                  <div className="text-xs text-neutral-500 font-mono">Automated CI/CD Token Sync</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STAGE 4: SAMAY MAURYA WIDESCREEN WORKS ================= */}
      <div id="s1-works" className="max-w-6xl mx-auto pt-20 px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest block">
              STAGE 04 • WIDESCREEN PRODUCT BREAKDOWNS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 mt-1">
              Engineered for millions of daily taps.
            </h2>
          </div>
        </div>

        <article className="bg-white rounded-3xl border border-neutral-300 p-8 sm:p-12 shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
              JUSPAY PAYMENT ORCHESTRATION
            </span>
            <span className="text-neutral-500">PRODUCTION LIVE • 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-3xl font-extrabold text-neutral-900">
                One-Click Biometric Settlement Sheet
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Eliminated multi-hop redirects by designing an inline biometric settlement drawer that decreased transaction drop-offs by 34.2%.
              </p>
              <div className="flex gap-4 text-xs font-mono pt-2">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-neutral-400 block text-[10px]">CONVERSION</span>
                  <strong className="text-emerald-600 text-base">+34.2%</strong>
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="text-neutral-400 block text-[10px]">P99 LATENCY</span>
                  <strong className="text-blue-600 text-base">118ms</strong>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-neutral-300 shadow-md">
              <div className="px-3 py-2 bg-neutral-100 border-b border-neutral-200 flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-2">juspay.design/settlement</span>
              </div>
              <img src="/assets/samay.avif" alt="Case Study" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
