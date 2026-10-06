"use client";

import { useEffect, useState } from "react";
import { hero, socials } from "@/lib/content";
import { useGenZ } from "@/context/GenZContext";
import { socialIcon } from "./Header";

const wordColors = ["text-sky", "text-peach", "text-green", "text-pink"];

export default function Hero() {
  const { t, genz } = useGenZ();
  const words = genz ? hero.words.genz : hero.words.normal;
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section
      id="top"
      className="min-h-[calc(100vh-73px)] flex flex-col items-start justify-center text-left px-6 sm:px-10 py-16 relative overflow-hidden"
    >
      {/* Dynamic Animated Ambient Mesh Orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] h-80 w-80 rounded-full bg-mauve/30 blur-[110px] animate-[pro-float-slow_12s_ease-in-out_infinite]" />
        <div className="absolute top-[20%] right-[8%] h-72 w-72 rounded-full bg-pink/25 blur-[120px] animate-[pro-pulse-glow_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-5%] left-[30%] h-96 w-96 rounded-full bg-sky/20 blur-[130px] animate-[pro-float-slow_16s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-[15%] right-[20%] h-64 w-64 rounded-full bg-green/15 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-6xl w-full">
        <div className="max-w-2xl w-full mx-auto flex flex-col items-start">
          {/* Availability Status Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-surface2 bg-mantle/80 px-3.5 py-1.5 backdrop-blur-md shadow-md mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="font-mono text-xs font-semibold text-slate-100">
              {t(hero.eyebrow)} · Open for Full Time Roles
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] bg-gradient-to-br from-mauve via-pink to-lavender bg-clip-text text-transparent drop-shadow-sm">
            Deevna
            <br />
            Reddy
          </h1>

          <p className="mt-6 max-w-xl text-lg sm:text-xl text-white font-normal leading-relaxed" style={{ color: "#ffffff" }}>
            Building systems that hold up under real world constraints.
            <br />
            Specializing in{" "}
            <span
              key={i}
              className={`font-semibold inline-block transition-all duration-300 ${wordColors[i % wordColors.length]}`}
            >
              {words[i]}
            </span>
            .
          </p>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-mauve via-pink to-peach px-7 py-3.5 text-sm font-bold text-crust shadow-[0_0_25px_rgba(203,166,247,0.35)] hover:shadow-[0_0_35px_rgba(244,114,182,0.5)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {t(hero.cta)}
            </a>
            <ul className="flex items-center gap-4">
              {socials.map((s, idx) => {
                const hoverColor = ["hover:text-sky hover:border-sky/40", "hover:text-mauve hover:border-mauve/40", "hover:text-peach hover:border-peach/40"][idx % 3];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={s.label}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-surface2 bg-mantle/80 text-slate-100 ${hoverColor} hover:text-white hover:scale-110 transition-all duration-200 shadow-sm`}
                    >
                      {socialIcon(s.label)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Executive Metrics Highlight Grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full font-mono text-xs">
            <div className="rounded-2xl border border-surface1 bg-mantle/80 p-4 backdrop-blur-md transition-all hover:border-mauve/40 hover:-translate-y-1 shadow-md">
              <span className="text-slate-400 text-[10px] uppercase font-bold block">Alexa Calendar</span>
              <span className="text-white font-extrabold text-xl mt-1 block">50M+</span>
              <span className="text-slate-300 text-[11px]">Users Supported</span>
            </div>
            <div className="rounded-2xl border border-surface1 bg-mantle/80 p-4 backdrop-blur-md transition-all hover:border-green/40 hover:-translate-y-1 shadow-md">
              <span className="text-slate-400 text-[10px] uppercase font-bold block">DSAR Compliance</span>
              <span className="text-green font-extrabold text-xl mt-1 block">70%</span>
              <span className="text-slate-300 text-[11px]">Manual Ops Reduced</span>
            </div>
            <div className="rounded-2xl border border-surface1 bg-mantle/80 p-4 backdrop-blur-md transition-all hover:border-sky/40 hover:-translate-y-1 shadow-md">
              <span className="text-slate-400 text-[10px] uppercase font-bold block">JDK 17 Upgrades</span>
              <span className="text-sky font-extrabold text-xl mt-1 block">15+</span>
              <span className="text-slate-300 text-[11px]">Zero Downtime Rollouts</span>
            </div>
            <div className="rounded-2xl border border-surface1 bg-mantle/80 p-4 backdrop-blur-md transition-all hover:border-pink/40 hover:-translate-y-1 shadow-md">
              <span className="text-slate-400 text-[10px] uppercase font-bold block">Research Citations</span>
              <span className="text-pink font-extrabold text-xl mt-1 block">2x Papers</span>
              <span className="text-slate-300 text-[11px]">Springer &amp; IEEE Published</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-200 hover:text-mauve transition-colors animate-bounce"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
          <path d="M12 4v16m0 0-6-6m6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}

