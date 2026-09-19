"use client";

import { SpotifyTrack } from "@/lib/genzSlides";
import { useSpotify } from "./SpotifyPlayer";

export default function GenZSoundTicker({ sound }: { sound: SpotifyTrack }) {
  const { isPlaying, togglePlay } = useSpotify();

  return (
    <button
      type="button"
      onClick={togglePlay}
      className="flex items-center gap-2 bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs text-white max-w-[260px] sm:max-w-[320px] transition group cursor-pointer"
      title="Click to toggle audio"
    >
      {/* Dancing Equalizer Bars */}
      <div className="flex items-end gap-[2px] h-3.5 w-3.5 shrink-0 text-pink-400">
        <span
          className={`w-[2.5px] bg-current rounded-full ${
            isPlaying ? "animate-[gz-equalizer-1_0.8s_ease-in-out_infinite]" : "h-1"
          }`}
        />
        <span
          className={`w-[2.5px] bg-current rounded-full ${
            isPlaying ? "animate-[gz-equalizer-2_0.7s_ease-in-out_infinite]" : "h-2"
          }`}
        />
        <span
          className={`w-[2.5px] bg-current rounded-full ${
            isPlaying ? "animate-[gz-equalizer-3_0.9s_ease-in-out_infinite]" : "h-1.5"
          }`}
        />
        <span
          className={`w-[2.5px] bg-current rounded-full ${
            isPlaying ? "animate-[gz-equalizer-2_0.6s_ease-in-out_infinite]" : "h-2.5"
          }`}
        />
      </div>

      {/* Marquee Ticker */}
      <div className="overflow-hidden whitespace-nowrap text-[11px] font-mono font-medium text-slate-200">
        <span className="inline-block animate-[gz-marquee_12s_linear_infinite]">
          🎵 {sound.title} by {sound.artist} &nbsp;•&nbsp; Original Audio &nbsp;•&nbsp; 🎵 {sound.title} by {sound.artist} &nbsp;•&nbsp;
        </span>
      </div>
    </button>
  );
}
