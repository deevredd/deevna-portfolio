"use client";

import { useEffect, useRef, useState, createContext, useContext } from "react";
import { SpotifyTrack } from "@/lib/genzSlides";

type ConsentState = "pending" | "enabled" | "declined";

type SpotifyContextType = {
  consent: ConsentState;
  isPlaying: boolean;
  activeTrack: SpotifyTrack;
  enable: () => void;
  decline: () => void;
  togglePlay: () => void;
  reopenConsent: () => void;
};

const SpotifyContext = createContext<SpotifyContextType | null>(null);

export function useSpotify() {
  const ctx = useContext(SpotifyContext);
  if (!ctx) throw new Error("useSpotify must be used within SpotifyProvider");
  return ctx;
}

export function SpotifyProvider({
  children,
  activeTrack,
}: {
  children: React.ReactNode;
  activeTrack: SpotifyTrack;
}) {
  const [consent, setConsent] = useState<ConsentState>("pending");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem("deevna_music_consent");
        if (saved === "enabled" || saved === "declined") {
          setConsent(saved);
          if (saved === "enabled") setIsPlaying(true);
        }
      } catch {
        // Ignore
      }
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  const enable = () => {
    setConsent("enabled");
    setIsPlaying(true);
    setShowModal(false);
    try {
      window.localStorage.setItem("deevna_music_consent", "enabled");
    } catch {
      // Ignore
    }
  };

  const decline = () => {
    setConsent("declined");
    setIsPlaying(false);
    setShowModal(false);
    try {
      window.localStorage.setItem("deevna_music_consent", "declined");
    } catch {
      // Ignore
    }
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const reopenConsent = () => {
    setShowModal(true);
  };

  return (
    <SpotifyContext.Provider
      value={{
        consent,
        isPlaying,
        activeTrack,
        enable,
        decline,
        togglePlay,
        reopenConsent,
      }}
    >
      {children}

      {/* Spotify Embed Controller (Invisible / Floating) */}
      {consent === "enabled" && (
        <div
          aria-hidden="true"
          className="fixed bottom-0 right-0 w-1 h-1 opacity-0 pointer-events-none -z-10"
        >
          <iframe
            ref={iframeRef}
            src={`https://open.spotify.com/embed/track/${activeTrack.spotifyTrackId}?utm_source=generator&theme=0&autoplay=1`}
            width="100%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify audio background player"
          />
        </div>
      )}

      {/* Floating Audio Pill at Bottom Right */}
      {consent === "enabled" && (
        <div className="fixed bottom-4 right-4 z-[55] flex items-center gap-2 rounded-full bg-black/90 backdrop-blur-md border border-white/20 px-3 py-2 shadow-2xl animate-[slideInRight_0.3s_ease]">
          <button
            type="button"
            onClick={togglePlay}
            className="flex items-center gap-2 text-xs font-semibold text-white focus:outline-none group cursor-pointer"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            <span className="relative flex h-3 w-3">
              <span
                className={`inline-flex h-full w-full rounded-full bg-green-400 ${
                  isPlaying ? "animate-ping opacity-75" : "opacity-30"
                }`}
              />
              <span
                className={`relative inline-flex h-3 w-3 rounded-full ${
                  isPlaying ? "bg-green-500" : "bg-neutral-600"
                }`}
              />
            </span>
            <div className="flex flex-col text-left">
              <span className="max-w-[120px] sm:max-w-[150px] truncate text-[11px] leading-tight font-bold text-white">
                {activeTrack.title}
              </span>
              <span className="text-[10px] text-slate-200 truncate leading-tight font-medium">
                {activeTrack.artist}
              </span>
            </div>
          </button>
          <button
            type="button"
            onClick={decline}
            className="ml-1 text-white/70 hover:text-white transition p-1 cursor-pointer"
            title="Silence music"
            aria-label="Silence music"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

    </SpotifyContext.Provider>
  );
}

export function SpinningVinyl() {
  const { consent, isPlaying, togglePlay, enable } = useSpotify();
  const isEnabled = consent === "enabled";

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isEnabled) {
      togglePlay();
    } else {
      enable();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isEnabled ? (isPlaying ? "Pause music" : "Play music") : "Enable music"}
      className={`mt-2 relative h-11 w-11 rounded-full gz-gradient-ring p-[2px] cursor-pointer transition-transform active:scale-90 ${
        isEnabled && isPlaying ? "animate-[gz-spin-slow_6s_linear_infinite]" : ""
      }`}
    >
      <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
        {isEnabled && isPlaying ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-pink-400">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <span className="text-sm">🎵</span>
        )}
      </div>
    </button>
  );
}
