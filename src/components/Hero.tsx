"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const [catPurring, setCatPurring] = useState(false);

  return (
    <section className="relative max-w-7xl mx-auto px-6 sm:px-12 pt-6 pb-20 overflow-hidden">
      {/* Background Ambient Watercolor Glow */}
      <div className="misty-silhouette absolute inset-0 -top-24 z-0 pointer-events-none" />

      {/* Top Metadata Bar */}
      <div className="relative z-20 mb-8 flex items-center justify-between flex-wrap gap-3">
        <div className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase font-mono">
          SOFTWARE DEVELOPMENT ENGINEER &bull; BACKEND &amp; APPLIED ML
        </div>
        <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-neutral-600 font-medium">CHENNAI, IN &bull; OPEN TO ROLES</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FULL-WIDTH EDITORIAL HERO (OPTION 3 + DESIGN A)                            */}
      {/* ========================================================================= */}
      <div className="relative z-10 space-y-10 pt-2">
        
        {/* Top Full-Width Typography */}
        <div className="space-y-4">
          
          {/* "hey, I'm" in Huge Serif Italic */}
          <div className="font-serif italic text-6xl sm:text-8xl lg:text-9xl text-neutral-900 flex items-center gap-5">
            <span>hey, I'm</span>
            <svg
              className="w-36 sm:w-52 h-8 sm:h-12 text-[#ff4d2e] fill-none stroke-current stroke-[3]"
              viewBox="0 0 120 24"
            >
              <path d="M 4,14 Q 32,2 62,14 T 116,14" strokeLinecap="round" />
            </svg>
          </div>

          {/* Giant Full-Width Name */}
          <div className="relative inline-block select-none">
            <h1 className="text-8xl sm:text-[12rem] lg:text-[15rem] font-extrabold tracking-[-0.05em] text-[#19191d] leading-[0.82]">
              deevna<span className="text-[#ff4d2e]">.</span>
            </h1>

            {/* Perched Interactive Ginger Cat */}
            <motion.div
              onMouseEnter={() => setCatPurring(true)}
              onMouseLeave={() => setCatPurring(false)}
              onClick={() => setCatPurring(!catPurring)}
              animate={catPurring ? { y: [-3, 3, -3], rotate: [0, 2, -2, 0] } : { y: 0 }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="absolute -top-16 sm:-top-24 lg:-top-32 right-12 sm:right-32 cursor-pointer select-none z-20 group"
              title="pet the cat 🐾"
            >
              <svg className="w-24 h-24 sm:w-32 sm:h-32 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 44 44" fill="none">
                <ellipse cx="22" cy="26" rx="15" ry="12" fill="#fbb040" />
                <path d="M 12,24 Q 15,18 20,24" fill="#f15a24" />
                <path d="M 28,22 Q 33,18 35,26" fill="#f15a24" />
                <polygon points="10,16 16,6 19,17" fill="#f15a24" />
                <polygon points="34,16 28,6 25,17" fill="#f15a24" />
                <polygon points="12,15 16,9 18,16" fill="#ffd199" />
                <polygon points="32,15 28,9 26,16" fill="#ffd199" />
                {catPurring ? (
                  <>
                    <path d="M 15,24 Q 18,21 21,24" stroke="#222" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M 24,24 Q 27,21 30,24" stroke="#222" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </>
                ) : (
                  <>
                    <circle cx="17" cy="24" r="1.5" fill="#222" />
                    <circle cx="27" cy="24" r="1.5" fill="#222" />
                  </>
                )}
                <polygon points="21,26 23,26 22,27.5" fill="#e0523d" />
                <path d="M 20,28 Q 22,30 24,28" stroke="#222" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <line x1="9" y1="25" x2="2" y2="23" stroke="#222" strokeWidth="1" strokeLinecap="round" />
                <line x1="9" y1="27" x2="3" y2="28" stroke="#222" strokeWidth="1" strokeLinecap="round" />
                <line x1="35" y1="25" x2="42" y2="23" stroke="#222" strokeWidth="1" strokeLinecap="round" />
                <line x1="35" y1="27" x2="41" y2="28" stroke="#222" strokeWidth="1" strokeLinecap="round" />
              </svg>
              {catPurring && (
                <div className="absolute -top-3 -right-2 font-handwriting text-xs text-[#ff4d2e] rotate-12 whitespace-nowrap">
                  purr... 🐾
                </div>
              )}
            </motion.div>
          </div>

        </div>

        {/* ================= STATEMENT ROW: DESIGN A (PURE SAMAY EDITORIAL) ================= */}
        <div className="pt-8 border-t border-neutral-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline pt-2 pb-2">
            
            {/* Left Column: Hand-drawn loop statement */}
            <div className="lg:col-span-7 space-y-2">
              <div className="text-2xl sm:text-4xl text-neutral-900 leading-snug font-normal tracking-tight">
                I build backend systems.<br />
                I also like making them{" "}
                <span className="relative font-bold text-neutral-900 px-2.5 py-0.5 inline-block">
                  work.
                  <svg
                    className="absolute -inset-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] text-[#ff4d2e] stroke-current fill-none stroke-2 pointer-events-none"
                    viewBox="0 0 100 50"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 6,25 C 6,6 94,4 94,24 C 94,44 6,46 3,25 C 2,12 40,3 96,14"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[#ff4d2e] text-2xl ml-1.5 select-none align-middle">✣</span>
              </div>
            </div>

            {/* Right Column: Editorial description with dotted links & status */}
            <div className="lg:col-span-5 space-y-3.5 text-sm sm:text-base text-neutral-600 leading-relaxed font-sans lg:pl-4">
              <p>
                <span className="dotted-link font-medium text-neutral-900">Compliance infrastructure</span> for 50M+ Alexa users,{" "}
                <span className="dotted-link font-medium text-neutral-900">native C++ edge inference</span>, and{" "}
                <span className="dotted-link font-medium text-neutral-900">multi-agent RAG pipelines</span>.
              </p>
              <div className="pt-1 flex items-center gap-3 text-xs font-mono text-neutral-500 flex-wrap">
                <span className="flex items-center gap-2 text-neutral-900 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Full-Time Roles</span>
                </span>
                <span className="text-neutral-300">•</span>
                <span>Chennai, IN (UTC +5:30)</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ================= EXPERIENCES TICKER (BOTTOM ANCHOR) ================= */}
      <div className="pt-8 border-t border-neutral-300 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-neutral-500 mt-10">
        <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
          <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-neutral-400">
            EXPERIENCES
          </span>

          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-[#ff9900] text-black font-extrabold flex items-center justify-center text-[10px] shadow-sm">
              a
            </span>
            <span className="font-bold text-sm text-neutral-900 font-sans">Amazon</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#ff4d2e] text-white text-[9px] font-bold tracking-wider font-mono uppercase shadow-sm">
              • SDE @ ALEXA &amp; KINDLE
            </span>
          </div>

          <span className="text-neutral-300">/</span>

          <div className="flex items-center gap-2 text-neutral-800 font-bold font-sans">
            <span className="text-blue-600">⚡</span>
            <span>Agilisium</span>
            <span className="text-neutral-400 font-normal text-xs font-mono">AI &amp; RAG</span>
          </div>

          <span className="text-neutral-300">/</span>

          <div className="flex items-center gap-2 text-neutral-800 font-bold font-sans">
            <span className="text-emerald-600">◈</span>
            <span>REUDE Tech</span>
            <span className="text-neutral-400 font-normal text-xs font-mono">LiDAR / Drone</span>
          </div>

          <span className="text-neutral-300">/</span>

          <div className="flex items-center gap-2 text-neutral-800 font-bold font-sans">
            <span className="text-indigo-600">📄</span>
            <span>IEEE ICCDS '25</span>
            <span className="text-neutral-400 font-normal text-xs font-mono">1st Author</span>
          </div>
        </div>

        <div className="text-[11px] text-neutral-400 font-mono hidden xl:block">
          📍 CHENNAI, INDIA • OPEN TO FULL-TIME ROLES
        </div>
      </div>

    </section>
  );
};
