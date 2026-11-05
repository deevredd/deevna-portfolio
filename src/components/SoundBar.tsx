"use client";

import React, { useState } from "react";

export const SoundBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);

    // Optional subtle pleasant Web Audio micro-chime
    if (typeof window !== "undefined" && window.AudioContext) {
      try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(isPlaying ? 220 : 440, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } catch {
        // audio context blocked or unsupported
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={toggleSound}
        className="px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-lg hover:shadow-xl flex items-center gap-3 text-xs font-mono font-bold text-neutral-800 transition-all cursor-pointer select-none group"
        title="Toggle Ambient Audio Experience"
      >
        {/* Equalizer Waveform Bars */}
        <div className="flex items-end gap-[2.5px] h-4">
          <span
            className="eq-bar"
            style={{ animationPlayState: isPlaying ? "running" : "paused" }}
          />
          <span
            className="eq-bar"
            style={{ animationPlayState: isPlaying ? "running" : "paused" }}
          />
          <span
            className="eq-bar"
            style={{ animationPlayState: isPlaying ? "running" : "paused" }}
          />
          <span
            className="eq-bar"
            style={{ animationPlayState: isPlaying ? "running" : "paused" }}
          />
        </div>

        {/* Status Label */}
        <span className="tracking-tight text-[11px] group-hover:text-black">
          {isPlaying ? "SOUND ON" : "SOUND MUTED"}
        </span>

        {/* Samay-style mini toggle switch glyph */}
        <div
          className={`w-6 h-3.5 rounded-full p-0.5 transition-colors flex items-center ${
            isPlaying ? "bg-[#ff4d2e]" : "bg-neutral-300"
          }`}
        >
          <div
            className={`w-2.5 h-2.5 rounded-full bg-white shadow-sm transition-transform ${
              isPlaying ? "translate-x-2.5" : "translate-x-0"
            }`}
          />
        </div>
      </button>
    </div>
  );
};
