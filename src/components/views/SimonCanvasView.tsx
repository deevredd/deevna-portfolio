"use client";

import React, { useState } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";

export const SimonCanvasView: React.FC = () => {
  const [selectedFrame, setSelectedFrame] = useState(true);

  return (
    <div className="bg-[#fafafa] min-h-screen text-neutral-900 relative pb-28">
      {/* Figma Canvas Top Control Bar */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-neutral-200">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-[#0d99ff] text-white flex items-center justify-center font-mono font-bold text-xs shadow-md">
            ST
          </div>
          <div>
            <span className="text-sm font-bold text-neutral-900 block leading-tight">Simon D. Thai</span>
            <span className="text-xs text-neutral-400 font-mono">Architecture • Design Systems Staff</span>
          </div>
        </div>

        <div className="bg-blue-600 text-white font-mono font-bold text-xs px-4 py-1.5 rounded-xl shadow-sm">
          Figma Workspace v3.6.17
        </div>
      </header>

      {/* Simon Thai Open Canvas with Connected Nodes */}
      <div className="max-w-7xl mx-auto px-6 py-14 relative min-h-[700px]">
        {/* Connecting Bezier Curved Vector Arrow */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block" viewBox="0 0 1200 700">
          <path d="M 450,220 C 560,180 620,120 700,140" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
          <polygon points="700,140 688,135 690,145" fill="#000" />
          
          <path d="M 450,380 C 560,460 700,480 820,440" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
          <polygon points="820,440 808,435 810,445" fill="#000" />
        </svg>

        {/* Center Node: Simon Architectural Bio */}
        <div 
          onClick={() => setSelectedFrame(!selectedFrame)}
          className={`w-full max-w-md bg-white rounded-2xl p-8 border border-neutral-200 shadow-2xl relative z-20 cursor-pointer transition-all ${
            selectedFrame ? "figma-selected" : "hover:border-blue-400"
          }`}
        >
          {selectedFrame && (
            <>
              <div className="figma-handle tl" /><div className="figma-handle tr" />
              <div className="figma-handle bl" /><div className="figma-handle br" />
              <div className="figma-handle tm" /><div className="figma-handle bm" />
              <div className="figma-handle ml" /><div className="figma-handle mr" />

              <div className="absolute -top-6 left-0 bg-[#0d99ff] text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-t flex items-center gap-1.5">
                <span>Frame: SimonBioNode (440 x 360)</span>
              </div>
            </>
          )}

          <h2 className="text-3xl font-extrabold font-sans text-neutral-900 tracking-tight">
            Hey, I'm Simon
          </h2>
          
          <p className="mt-4 text-sm text-neutral-700 leading-relaxed font-normal">
            I trained in architecture, so I design systems like buildings: 
            <strong className="text-blue-600 block mt-1">"Structure first, finishes last."</strong>
          </p>

          <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
            I'm a product designer and design systems designer. I enjoy building the blocks people use. I start with deep research and load-bearing pieces, then set up governance so the system holds as teams grow and change.
          </p>
        </div>

        {/* Node 2: Floating AI Bar (Top Right) */}
        <div className="mt-8 md:mt-0 md:absolute top-14 right-12 w-full md:w-96 bg-white rounded-2xl p-5 border border-neutral-200 shadow-xl z-20">
          <span className="text-xs font-bold text-neutral-900 block mb-1">What can we build together today?</span>
          <div className="mt-3 flex items-center justify-between text-xs font-mono">
            <div className="flex gap-2">
              <span className="px-2 py-1 rounded bg-neutral-100 text-neutral-600">+ Research</span>
              <span className="px-2 py-1 rounded bg-neutral-100 text-neutral-600">Design</span>
              <span className="px-2 py-1 rounded bg-blue-50 text-blue-600 font-bold border border-blue-200">Deliver</span>
            </div>
            <span className="text-[10px] text-neutral-400 font-mono">Simon 3.0</span>
          </div>
        </div>

        {/* Node 3: Design Tokens Tree (Bottom Left) */}
        <div className="mt-8 md:mt-0 md:absolute bottom-16 left-8 space-y-2 z-20 font-mono text-xs">
          <div className="px-3 py-1.5 rounded-lg bg-white border border-neutral-300 shadow-sm flex items-center gap-2">
            <span className="font-bold text-neutral-400">#</span>
            <span>spacing/sm: 8px</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white border border-neutral-300 shadow-sm flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-black inline-block" />
            <span>text/primary: #111827</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white border border-neutral-300 shadow-sm flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-[#0d99ff] inline-block" />
            <span>action/primary: #0d99ff</span>
          </div>
        </div>

        {/* Node 4: Tilted Architecture Photo (Bottom Right) */}
        <div className="mt-8 md:mt-0 md:absolute bottom-12 right-20 w-72 rounded-2xl bg-white p-3 border border-neutral-200 shadow-2xl rotate-[-3deg] z-20">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100">
            <img src="/assets/simon_thai.avif" alt="Simon" className="w-full h-full object-cover" />
          </div>
          <div className="pt-2 text-xs font-mono text-neutral-500 flex justify-between">
            <span>Simon D. Thai</span>
            <span className="text-blue-600 font-bold">100% HUMAN</span>
          </div>
        </div>

        {/* Simon Thai Floating iOS Bottom Dock */}
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-xl border border-neutral-200 shadow-2xl px-6 py-3 rounded-2xl flex items-center gap-8 text-neutral-700">
          <a href="#" className="hover:text-black font-bold text-xs flex items-center gap-1.5">
            <Home className="w-4 h-4" /> Home
          </a>
          <a href="#" className="hover:text-black font-bold text-xs flex items-center gap-1.5">
            <User className="w-4 h-4" /> About
          </a>
          <a href="#" className="hover:text-black font-bold text-xs flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" /> Work
          </a>
          <a href="mailto:deevna@vibecode.design" className="hover:text-black font-bold text-xs flex items-center gap-1.5">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </nav>
      </div>
    </div>
  );
};
