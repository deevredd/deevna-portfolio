"use client";

import React, { useState } from "react";

export const SamayEditorialView: React.FC = () => {
  const [soundPlaying, setSoundPlaying] = useState(true);

  return (
    <div className="bg-[#f4f3ef] min-h-screen text-[#18181b] pb-28">
      {/* Samay Minimal Header */}
      <header className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
        <div className="font-bold text-2xl tracking-tight text-neutral-900">
          deevna<span className="text-orange-500">.</span>
        </div>

        <nav className="flex items-center gap-8 text-xs font-semibold text-neutral-700">
          <a href="#work" className="hover:text-black">work</a>
          <a href="#about" className="hover:text-black flex items-center gap-1">
            about me <span className="text-orange-500">✦</span>
          </a>
          <a href="#resume" className="hover:text-black">resume ↓</a>
          <a href="mailto:deevna@vibecode.design" className="hover:text-black">say hey ↗</a>
        </nav>
      </header>

      {/* Samay Expansive Hero */}
      <main className="max-w-6xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase font-mono">
              PRODUCT DESIGNER &amp; DESIGN ENGINEER
            </div>

            <div className="font-serif italic text-4xl sm:text-6xl text-neutral-800 flex items-center gap-3">
              <span>hey, I'm</span>
              <svg className="w-28 h-6 text-orange-500 fill-none stroke-current stroke-2" viewBox="0 0 100 20">
                <path d="M 0,10 Q 25,0 50,10 T 100,10" />
              </svg>
            </div>

            <div className="relative inline-block">
              <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tight text-neutral-900 leading-none">
                deevna<span className="text-[#ff4d2e]">.</span>
              </h1>
              
              {/* Sleeping Orange Cat Resting on "y" / "a" */}
              <div className="absolute -top-12 right-2 pointer-events-none">
                <svg className="w-16 h-16" viewBox="0 0 40 40" fill="none">
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

            <div className="text-xl sm:text-2xl text-neutral-800 leading-relaxed max-w-xl font-normal">
              I design products.<br />
              I also like making them{" "}
              <span className="relative font-bold text-neutral-900 px-1 inline-block">
                work.
                <svg className="absolute -inset-1 w-full h-full text-[#ff4d2e] stroke-current fill-none stroke-2 pointer-events-none" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <path d="M 5,25 C 5,5 95,5 95,25 C 95,45 5,45 2,25 C 2,15 45,5 92,15" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-orange-500 font-bold ml-1">✦</span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-500 font-mono">
              Dashboards, mobile apps &amp; the occasional detour into AR/VR.
            </p>

            {/* Company Strip */}
            <div className="pt-8 border-t border-neutral-200 flex flex-wrap items-center gap-8 text-xs font-mono text-neutral-500">
              <span className="uppercase tracking-widest text-[10px] font-bold text-neutral-400">EXPERIENCES</span>
              <div className="flex items-center gap-2 text-neutral-800 font-bold">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">J</span>
                <span>Juspay</span>
                <span className="px-2 py-0.5 rounded-full bg-[#ff4d2e] text-white text-[9px] font-bold">CURRENTLY HERE</span>
              </div>
              <span>/</span>
              <span className="text-neutral-800 font-bold">AR Genie</span>
              <span>/</span>
              <span className="text-neutral-800 font-bold">PositoCabs</span>
            </div>
          </div>

          {/* Polaroid Tilted Cards Stack */}
          <div className="lg:col-span-4 relative h-80">
            <div className="absolute top-0 right-10 p-3 rounded-xl bg-white w-56 rotate-[-6deg] z-10 shadow-lg">
              <div className="tape-strip -top-3 left-14" />
              <div className="aspect-square rounded-lg bg-neutral-100 overflow-hidden">
                <img src="/assets/samay.avif" alt="Photo" className="w-full h-full object-cover" />
              </div>
              <div className="pt-2 font-handwriting text-neutral-700 text-sm">
                roots: dehradun.<br />
                <span className="text-xs text-neutral-400 font-sans">usually thinking about an interaction.</span>
              </div>
            </div>

            <div className="absolute top-16 right-0 p-3 rounded-xl bg-white w-52 rotate-[7deg] z-20 shadow-xl">
              <div className="tape-strip -top-3 right-10" />
              <div className="aspect-square rounded-lg bg-neutral-100 overflow-hidden">
                <img src="/assets/simon_thai.avif" alt="Photo" className="w-full h-full object-cover" />
              </div>
              <div className="pt-2 font-handwriting text-neutral-700 text-sm">
                happiest a little higher up.<br />
                <span className="text-xs text-orange-600 font-sans font-bold">that's me ↗</span>
              </div>
            </div>
          </div>
        </div>

        {/* Widescreen Case Studies Section */}
        <div id="work" className="mt-28 space-y-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest">
              SELECTED WORK • 2025 — 2026
            </span>
            <span className="text-xs font-mono text-neutral-500">3 FEATURED SHIPS</span>
          </div>

          <div className="bg-white rounded-3xl border border-neutral-300 p-8 sm:p-12 shadow-2xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
                  JUSPAY CHECKOUT ENGINE
                </span>
                <span className="text-neutral-400">FINTECH</span>
              </div>
              <span className="text-emerald-600 font-bold">SHIPPED TO 14M USERS</span>
            </div>

            <h3 className="text-4xl font-extrabold font-serif text-neutral-900 leading-tight">
              Autonomous Multi-Rail Settlement Drawer
            </h3>

            <div className="rounded-2xl overflow-hidden border border-neutral-300 shadow-md">
              <div className="px-4 py-2.5 bg-neutral-100 border-b border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-2">api.juspay.io/settlement</span>
                </div>
                <span className="text-blue-600 font-bold">P99: 118ms</span>
              </div>
              <img src="/assets/samay.avif" alt="Juspay Case Study" className="w-full aspect-[16/9] object-cover" />
            </div>
          </div>
        </div>
      </main>

      {/* Floating Sound Bar in Corner */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setSoundPlaying(!soundPlaying)}
          className="px-3.5 py-2 rounded-full bg-white border border-neutral-300 shadow-lg flex items-center gap-2.5 text-xs font-mono font-bold text-neutral-800 cursor-pointer"
        >
          <div className="flex items-end gap-[2px] h-4">
            <span className="eq-bar" style={{ animationPlayState: soundPlaying ? "running" : "paused" }} />
            <span className="eq-bar" style={{ animationPlayState: soundPlaying ? "running" : "paused" }} />
            <span className="eq-bar" style={{ animationPlayState: soundPlaying ? "running" : "paused" }} />
            <span className="eq-bar" style={{ animationPlayState: soundPlaying ? "running" : "paused" }} />
          </div>
          <span>{soundPlaying ? "SOUND ON" : "SOUND MUTED"}</span>
        </button>
      </div>
    </div>
  );
};
