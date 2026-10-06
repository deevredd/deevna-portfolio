"use client";

import { useState, useEffect } from "react";
import { SpinningVinyl } from "./SpotifyPlayer";
import { playHeart, playPop, playSparkle } from "@/lib/soundFx";

export default function GenZActionsRail({
  likes: initialLikes,
  saves: initialSaves,
  shares: sharesCount,
  isLikedExternal,
}: {
  likes: string;
  saves: string;
  shares: string;
  isLikedExternal?: boolean;
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [likeParticles, setLikeParticles] = useState<{ id: number; emoji: string }[]>([]);

  useEffect(() => {
    if (isLikedExternal) {
      setIsLiked(true);
      const now = Date.now();
      setLikeParticles([
        { id: now, emoji: "❤️" },
        { id: now + 1, emoji: "🔥" },
        { id: now + 2, emoji: "✨" },
      ]);
      setTimeout(() => setLikeParticles([]), 1500);
    }
  }, [isLikedExternal]);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextState = !isLiked;
    setIsLiked(nextState);
    if (nextState) {
      playHeart();
      const now = Date.now();
      setLikeParticles([
        { id: now, emoji: "❤️" },
        { id: now + 1, emoji: "🔥" },
        { id: now + 2, emoji: "✨" },
      ]);
      setTimeout(() => setLikeParticles([]), 1500);
    } else {
      playPop();
    }
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved((prev) => !prev);
    playSparkle();
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    playPop();
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="absolute right-3 sm:right-6 bottom-28 sm:bottom-32 z-30 flex flex-col gap-4 items-center text-white select-none">
      {/* Copied Toast */}
      {copied && (
        <div className="absolute -left-36 top-1/2 -translate-y-1/2 bg-black/90 text-white border border-white/20 text-xs px-3 py-1.5 rounded-full shadow-2xl animate-[fadeIn_0.2s_ease] whitespace-nowrap">
          Link copied! 📋✨
        </div>
      )}

      {/* LIKE BUTTON */}
      <button
        type="button"
        onClick={handleLike}
        className="relative flex flex-col items-center group cursor-pointer"
        aria-label="Like this post"
      >
        <div className="relative p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/15 group-active:scale-90 transition-transform">
          <svg
            viewBox="0 0 24 24"
            fill={isLiked ? "#f472b6" : "none"}
            stroke={isLiked ? "#f472b6" : "currentColor"}
            strokeWidth="2"
            className={`h-6 w-6 transition-all duration-200 ${
              isLiked ? "scale-110 drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]" : "text-white"
            }`}
          >
            <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 2.5 5 6 5c2 0 3.5 1.2 4 2 0.5-0.8 2-2 4-2 3.5 0 5.5 3.5 3.5 7.5C19 16.65 12 21 12 21z" />
          </svg>

          {/* Floating Emoji Particles on Like */}
          {likeParticles.map((p, idx) => (
            <span
              key={p.id}
              className="absolute inset-0 flex items-center justify-center text-2xl pointer-events-none animate-[gz-float-up_1.3s_ease-out_forwards]"
              style={{
                left: `${(idx - 1) * 20}px`,
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {p.emoji}
            </span>
          ))}
        </div>
        <span className="text-xs font-bold mt-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          {isLiked ? "Liked" : initialLikes}
        </span>
      </button>

      {/* SAVE BUTTON */}
      <button
        type="button"
        onClick={handleSave}
        className="flex flex-col items-center group cursor-pointer"
        aria-label="Save post"
      >
        <div className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/15 group-active:scale-90 transition-transform">
          <svg
            viewBox="0 0 24 24"
            fill={isSaved ? "#fde047" : "none"}
            stroke={isSaved ? "#fde047" : "currentColor"}
            strokeWidth="2"
            className={`h-6 w-6 transition-all duration-200 ${
              isSaved ? "scale-110 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]" : "text-white"
            }`}
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <span className="text-xs font-bold mt-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          {isSaved ? "Saved" : initialSaves}
        </span>
      </button>

      {/* SHARE BUTTON */}
      <button
        type="button"
        onClick={handleShare}
        className="flex flex-col items-center group cursor-pointer"
        aria-label="Share post"
      >
        <div className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/15 group-active:scale-90 transition-transform">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6 text-white"
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </div>
        <span className="text-xs font-bold mt-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          {sharesCount}
        </span>
      </button>

      {/* SPINNING VINYL DISC */}
      <SpinningVinyl />
    </div>
  );
}
