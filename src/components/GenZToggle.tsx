"use client";

import { useState } from "react";
import { useGenZ } from "@/context/GenZContext";

const burstEmojis = ["💅", "💖", "✨", "🔥", "🦋", "🫶", "😭", "💯", "🎀"];

export default function GenZToggle({ compact = false }: { compact?: boolean }) {
  const { mode, toggle, ready } = useGenZ();
  const isGenZ = mode === "genz";
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; emoji: string }[]
  >([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isGenZ) {
      const rect = e.currentTarget.getBoundingClientRect();
      const now = Date.now();
      setParticles(
        Array.from({ length: 8 }).map((_, i) => ({
          id: now + i,
          x: rect.width * (0.2 + 0.6 * Math.random()),
          y: rect.height / 2 + (Math.random() - 0.5) * 12,
          emoji: burstEmojis[Math.floor(Math.random() * burstEmojis.length)],
        }))
      );
      setTimeout(() => setParticles([]), 1600);
    }
    toggle();
  };

  if (!ready) {
    return (
      <div
        aria-hidden="true"
        className={compact ? "h-11 w-[140px]" : "h-9 w-[130px]"}
      />
    );
  }

  // Gen-Z Active: "exit gen-z" button
  if (isGenZ) {
    return (
      <button
        type="button"
        onClick={handleClick}
        role="switch"
        aria-checked={true}
        aria-label="Exit Gen-Z mode"
        className="relative inline-flex items-center gap-1.5 rounded-full bg-white text-black font-bold px-4 py-2.5 min-h-[44px] shadow-lg shadow-black/40 ring-1 ring-black/10 hover:scale-[1.03] active:scale-95 transition-transform duration-150 cursor-pointer select-none"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        <span className="text-xs font-bold tracking-wide whitespace-nowrap">
          Exit Gen Z
        </span>
      </button>
    );
  }

  // Pro Mode: "Gen Z mode" toggle switch
  const knobSize = compact ? 12 : 14;
  return (
    <button
      type="button"
      onClick={handleClick}
      role="switch"
      aria-checked={false}
      aria-label="Gen Z mode"
      className={`group relative inline-flex items-center gap-2 rounded-full select-none transition bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 cursor-pointer shadow-md ${
        compact ? "px-2.5 py-1.5" : "px-3 py-2"
      }`}
    >
      <span
        className={`${
          compact ? "text-[11px]" : "text-xs"
        } font-bold whitespace-nowrap transition-colors text-white group-hover:text-pink-300`}
      >
        Gen Z mode
      </span>
      <span
        className="relative rounded-full transition-colors duration-200 bg-white/15 border border-white/10"
        style={{ width: compact ? 30 : 34, height: compact ? 16 : 18 }}
      >
        <span
          className="absolute top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md transition-all duration-200 ease-out"
          style={{ width: knobSize, height: knobSize, left: 2 }}
        />
      </span>

      {/* Floating Emoji Particles */}
      <span className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute text-base animate-[gz-float-up_1.5s_ease-out_forwards]"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {p.emoji}
          </span>
        ))}
      </span>
    </button>
  );
}

