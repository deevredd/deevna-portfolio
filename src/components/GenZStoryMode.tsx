"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { useGenZ } from "@/context/GenZContext";
import { slides, Slide } from "@/lib/genzSlides";
import GenZStoriesBar from "./genz/GenZStoriesBar";
import GenZActionsRail from "./genz/GenZActionsRail";
import GenZReceiptCard from "./genz/GenZReceiptCard";
import { SpotifyProvider } from "./genz/SpotifyPlayer";
import { LiveBadge, LiveToasts } from "./genz/GenZLiveOverlay";
import GenZDMSimulator from "./genz/GenZDMSimulator";
import GenZToggle from "./GenZToggle";
import GenZSoundTicker from "./genz/GenZSoundTicker";
import { SparkleStar } from "./genz/GenZDoodles";
import GenZTiltCard from "./genz/GenZTiltCard";
import { playPop, playHeart, playSparkle, playWoosh } from "@/lib/soundFx";

const burstEmojis = ["❤️", "🔥", "✨", "💖", "💅", "🫶", "💯", "🎀", "😭", "💀", "👑", "⚡"];

function SlideWrapper({
  children,
  className = "",
  onDoubleTap,
}: {
  children: React.ReactNode;
  className?: string;
  onDoubleTap?: () => void;
}) {
  const [clickParticles, setClickParticles] = useState<
    { id: number; x: number; y: number; emoji: string; drift: number }[]
  >([]);
  const [heartBursts, setHeartBursts] = useState<
    { id: number; x: number; y: number }[]
  >([]);
  const [trailParticles, setTrailParticles] = useState<
    { id: number; x: number; y: number }[]
  >([]);
  const lastClickRef = useRef<{ time: number; x: number; y: number }>({ time: 0, x: 0, y: 0 });
  const idRef = useRef(0);
  const lastMoveRef = useRef(0);

  const spawnHeartBurst = useCallback((x: number, y: number) => {
    const burstId = ++idRef.current;
    setHeartBursts((prev) => [...prev.slice(-4), { id: burstId, x, y }]);
    playHeart();

    const ringEmojis = ["💖", "✨", "🔥", "💅", "💯", "🫶", "⚡", "🎀"];
    const ringItems = ringEmojis.map((emoji, i) => {
      const angle = (i / ringEmojis.length) * Math.PI * 2;
      return {
        id: ++idRef.current,
        x: x + Math.cos(angle) * 32,
        y: y + Math.sin(angle) * 32,
        emoji,
        drift: Math.cos(angle) * 90,
      };
    });
    setClickParticles((prev) => [...prev.slice(-20), ...ringItems]);

    setTimeout(() => {
      setHeartBursts((prev) => prev.filter((b) => b.id !== burstId));
    }, 1000);
  }, []);

  const spawnParticles = useCallback((clientX: number, clientY: number, count = 3) => {
    const newItems = Array.from({ length: count }).map(() => ({
      id: ++idRef.current,
      x: clientX + (Math.random() - 0.5) * 40,
      y: clientY,
      emoji: burstEmojis[Math.floor(Math.random() * burstEmojis.length)],
      drift: (Math.random() - 0.5) * 120,
    }));

    setClickParticles((prev) => [...prev.slice(-18), ...newItems]);
    const ids = newItems.map((n) => n.id);
    setTimeout(() => {
      setClickParticles((prev) => prev.filter((p) => !ids.includes(p.id)));
    }, 1600);
  }, []);

  // Periodic floating hearts
  useEffect(() => {
    const interval = setInterval(() => {
      spawnParticles(window.innerWidth - 60, window.innerHeight * (0.5 + 0.4 * Math.random()), 1);
    }, 3800);
    return () => clearInterval(interval);
  }, [spawnParticles]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a") || target.closest("input")) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = Date.now();
    const last = lastClickRef.current;
    const isDouble = now - last.time < 350 && Math.hypot(x - last.x, y - last.y) < 60;

    if (isDouble) {
      spawnHeartBurst(x, y);
      onDoubleTap?.();
      lastClickRef.current = { time: 0, x: 0, y: 0 };
    } else {
      lastClickRef.current = { time: now, x, y };
      playPop();
      spawnParticles(x, y, 3);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = performance.now();
    if (now - lastMoveRef.current < 70) return;
    lastMoveRef.current = now;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const starId = ++idRef.current;
    setTrailParticles((prev) => [...prev.slice(-6), { id: starId, x, y }]);
    setTimeout(() => {
      setTrailParticles((prev) => prev.filter((s) => s.id !== starId));
    }, 600);
  };

  return (
    <div
      className={`relative ${className}`}
      onPointerDown={handlePointerDown}
      onMouseMove={handleMouseMove}
    >
      {children}

      {/* Big Glowing Heart Burst on Double Tap */}
      {heartBursts.map((hb) => (
        <div
          key={hb.id}
          className="pointer-events-none absolute z-50 animate-[gz-heart-burst_0.9s_ease-out_forwards]"
          style={{ left: `${hb.x}px`, top: `${hb.y}px` }}
        >
          <div className="relative flex flex-col items-center justify-center">
            <span className="text-7xl sm:text-8xl select-none filter drop-shadow-[0_0_40px_rgba(244,114,182,0.95)]">
              💖
            </span>
            <span className="mt-1 bg-pink-500 text-white font-black text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-lg border border-white/40">
              +1 Vibe
            </span>
          </div>
        </div>
      ))}

      {/* Floating particles container */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-40">
        {clickParticles.map((p) => (
          <span
            key={p.id}
            className="absolute select-none text-2xl animate-[gz-float-up_1.5s_ease-out_forwards]"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              transform: "translate(-50%, -50%)",
              filter: "drop-shadow(0 0 10px rgba(244,114,182,0.6))",
              // @ts-expect-error CSS variable
              "--drift": `${p.drift}px`,
            }}
          >
            {p.emoji}
          </span>
        ))}
      </div>

      {/* Cursor Sparkle Trail on desktop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-30 hidden sm:block">
        {trailParticles.map((tp) => (
          <span
            key={tp.id}
            className="absolute select-none text-xs text-yellow-300 animate-ping opacity-70"
            style={{
              left: `${tp.x}px`,
              top: `${tp.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            ✨
          </span>
        ))}
      </div>
    </div>
  );
}

// Hero Slide
function HeroSlide({
  slide,
  onDoubleTap,
}: {
  slide: Extract<Slide, { kind: "hero" }>;
  onDoubleTap?: () => void;
}) {
  const [followed, setFollowed] = useState(false);
  const [followerCount, setFollowerCount] = useState("240K");
  const [avatarIdx, setAvatarIdx] = useState(0);
  const [avatarWobble, setAvatarWobble] = useState(false);
  const [aura, setAura] = useState(2400);
  const [auraFloaters, setAuraFloaters] = useState<{ id: number; text: string }[]>([]);
  const avatarList = ["🎀", "✨", "👑", "💅", "⚡", "🔥", "🚀"];

  const handleAvatarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playPop();
    setAvatarIdx((prev) => (prev + 1) % avatarList.length);
    setAvatarWobble(true);
    setTimeout(() => setAvatarWobble(false), 400);
  };

  const handleBoostAura = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSparkle();
    setAura((prev) => prev + 100);
    const newId = Date.now();
    setAuraFloaters((prev) => [...prev, { id: newId, text: "+100 Aura ✨" }]);
    setTimeout(() => {
      setAuraFloaters((prev) => prev.filter((a) => a.id !== newId));
    }, 1200);
  };

  return (
    <SlideWrapper
      className="h-full w-full flex flex-col justify-center items-center text-center px-6"
      onDoubleTap={onDoubleTap}
    >
      <div className="absolute inset-0 bg-[#0b0614]" />
      <div className="absolute -top-24 -right-24 h-[450px] w-[450px] rounded-full bg-pink-500/30 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 gz-noise" />

      <div className="relative z-10 max-w-md w-full flex flex-col items-center">
        {/* Profile Avatar with Gradient Ring & Doodles */}
        <div className="relative mb-4">
          <SparkleStar className="absolute -left-7 top-2 text-3xl" />
          <SparkleStar className="absolute -right-6 bottom-3 text-2xl" style={{ animationDelay: "1.2s" }} />

          <button
            type="button"
            onClick={handleAvatarClick}
            title="Tap to switch avatar mood"
            className={`relative h-36 w-36 sm:h-40 sm:w-40 rounded-full gz-gradient-ring p-[3.5px] shadow-[0_0_35px_rgba(244,114,182,0.6)] cursor-pointer active:scale-95 transition-transform ${
              avatarWobble ? "animate-[gz-shake_0.4s_ease]" : "hover:scale-105"
            }`}
          >
            <div className="h-full w-full rounded-full bg-black p-[3px] flex items-center justify-center">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-pink-500/40 via-purple-600/40 to-indigo-600/40 flex items-center justify-center text-6xl select-none">
                {avatarList[avatarIdx]}
              </div>
            </div>
          </button>
          <span className="gz-tape absolute -top-3 -right-6 h-5 w-16 shadow-md pointer-events-none" />
          <div className="absolute -right-8 -top-3 gz-font-hand text-2xl sm:text-3xl text-yellow-300 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] rotate-[12deg] select-none pointer-events-none">
            {slide.sticker}!
          </div>
        </div>

        {/* Username with verified badge */}
        <div className="flex items-center gap-1.5 text-white mb-2">
          <span className="text-base sm:text-lg font-bold lowercase tracking-wide text-white drop-shadow-sm">
            {slide.username}
          </span>
          <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-cyan-400 text-black text-[10px] font-bold shadow-xs">
            ✓
          </span>
        </div>

        {/* Big Bungee Headline with highlighter */}
        <h1 className="gz-font-display text-5xl sm:text-7xl text-white leading-none mb-3 lowercase drop-shadow-lg">
          <span className="gz-highlight">{slide.headingWord}</span>
        </h1>

        {/* Punchy High Contrast Bio in Frosted Glass Pill */}
        <div className="bg-black/75 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/25 mb-3 max-w-md shadow-2xl">
          <p className="text-white text-sm sm:text-base font-semibold gz-font-caption leading-relaxed drop-shadow-sm" style={{ color: "#ffffff" }}>
            {slide.bio}
          </p>
        </div>

        {/* Interactive Aura Counter Pill */}
        <div className="relative mb-4">
          <button
            type="button"
            onClick={handleBoostAura}
            className="inline-flex items-center gap-2 bg-purple-950/80 hover:bg-purple-900/90 border border-purple-400/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-yellow-300 shadow-lg cursor-pointer transition hover:scale-105 active:scale-95"
          >
            <span>⚡ Aura: {aura.toLocaleString()}</span>
            <span className="text-[10px] bg-yellow-300 text-black px-1.5 py-0.5 rounded-full font-black">
              + TAP
            </span>
          </button>

          {/* Floating Aura numbers */}
          {auraFloaters.map((af) => (
            <span
              key={af.id}
              className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 text-sm font-black text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.9)] animate-[gz-aura-float_1.2s_ease-out_forwards] whitespace-nowrap"
            >
              {af.text}
            </span>
          ))}
        </div>

        {/* Interactive Vibe tags */}
        <div className="flex flex-wrap justify-center gap-2 max-w-sm mb-5">
          {slide.vibeTags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                playPop();
              }}
              className="rounded-full bg-white/20 hover:bg-white/30 border border-white/30 px-3.5 py-1 text-xs text-white font-bold transition-all hover:scale-110 active:scale-95 shadow-md backdrop-blur-sm cursor-pointer"
            >
              {t}
            </button>
          ))}
        </div>

        {/* Follow Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            playSparkle();
            setFollowed((prev) => !prev);
            setFollowerCount((prev) => (prev === "240K" ? "240.1K" : "240K"));
          }}
          className={`rounded-full font-bold px-8 py-2.5 text-sm transition-all duration-200 cursor-pointer shadow-xl ${
            followed
              ? "bg-neutral-800 text-white border border-white/30 shadow-white/10"
              : "bg-white text-black hover:scale-105 active:scale-95 shadow-pink-500/40"
          }`}
        >
          {followed ? `following (${followerCount}) ✓` : `+ follow (${followerCount})`}
        </button>

        <p className="mt-5 flex flex-col items-center gap-1 text-[10px] tracking-[0.25em] text-slate-100 font-mono font-bold uppercase drop-shadow-sm animate-pulse">
          Double tap screen to like
          <span className="text-xs">💖</span>
        </p>
      </div>
    </SlideWrapper>
  );
}

// About / Lore Drop Slide
function AboutSlide({
  slide,
  onDoubleTap,
}: {
  slide: Extract<Slide, { kind: "about" }>;
  onDoubleTap?: () => void;
}) {
  const [cardIdx, setCardIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const currentCard = slide.cards[cardIdx];

  const nextCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    playWoosh();
    setAnimKey((prev) => prev + 1);
    setCardIdx((prev) => (prev + 1) % slide.cards.length);
  };

  return (
    <SlideWrapper
      className="h-full w-full flex items-center justify-center p-6 bg-gradient-to-br from-indigo-950 via-purple-950 to-fuchsia-950"
      onDoubleTap={onDoubleTap}
    >
      <div className="absolute inset-0 gz-noise" />
      <div className="absolute top-28 left-1/2 -translate-x-1/2 h-[340px] w-[340px] rounded-full bg-fuchsia-500/30 blur-[110px]" />

      <div className="relative w-full max-w-md">
        {/* Visual Stack Cards Underneath for physical deck depth */}
        <div className="absolute inset-0 gz-sticker-pink rounded-sm opacity-60 rotate-2 translate-y-2 pointer-events-none" />
        <div className="absolute inset-0 gz-sticker-yellow rounded-sm opacity-40 -rotate-3 translate-y-4 pointer-events-none" />

        <GenZTiltCard
          key={animKey}
          maxTilt={12}
          onClick={nextCard}
          className="relative text-left w-full gz-sticker-white rounded-sm p-7 sm:p-8 shadow-2xl rotate-[-1.5deg] animate-[gz-bounce-in_0.4s_ease]"
        >
          <div className="gz-tape absolute -top-3 left-6 h-5 w-18" />
          <div className="text-5xl mb-4 leading-none select-none">{currentCard.emoji}</div>
          <h2 className="text-2xl sm:text-3xl font-black gz-font-display mb-2 lowercase leading-tight text-neutral-900">
            {currentCard.title}
          </h2>
          <p className="text-neutral-900 text-sm sm:text-base leading-relaxed gz-font-caption mb-6 font-medium">
            {currentCard.text}
          </p>
          <div className="flex items-center justify-between text-xs text-neutral-800 border-t border-neutral-200 pt-3">
            <span className="uppercase tracking-wider font-bold text-pink-600 flex items-center gap-1.5">
              <span>Tap for next card</span>
              <span className="animate-pulse">➜</span>
            </span>
            <span className="font-mono font-bold">
              {cardIdx + 1} / {slide.cards.length}
            </span>
          </div>
        </GenZTiltCard>
      </div>
    </SlideWrapper>
  );
}

// Experience Slide
function ExperienceSlide({
  slide,
  onDoubleTap,
}: {
  slide: Extract<Slide, { kind: "experience" }>;
  onDoubleTap?: () => void;
}) {
  const emojiCycle = slide.emojiList || [slide.emoji];
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [wobble, setWobble] = useState(false);
  const [auditRunning, setAuditRunning] = useState(false);
  const [auditResult, setAuditResult] = useState<string | null>(null);
  const [ragQuery, setRagQuery] = useState<string | null>(null);
  const [droneScan, setDroneScan] = useState(false);

  const currentEmoji = emojiCycle[emojiIndex % emojiCycle.length];

  const handleEmojiClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playPop();
    setEmojiIndex((prev) => prev + 1);
    setWobble(true);
    setTimeout(() => setWobble(false), 450);
  };

  const handleRunAudit = (e: React.MouseEvent) => {
    e.stopPropagation();
    playPop();
    setAuditRunning(true);
    setAuditResult("Scanning 50M+ Alexa records...");
    setTimeout(() => {
      setAuditRunning(false);
      playSparkle();
      setAuditResult("100% DSAR Compliant · 0ms Downtime");
    }, 900);
  };

  const handleRagQuery = (e: React.MouseEvent, q: string, res: string) => {
    e.stopPropagation();
    playPop();
    setRagQuery(`${q} ➔ ${res}`);
    setTimeout(() => {
      playSparkle();
    }, 400);
  };

  const handleDroneScan = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSparkle();
    setDroneScan(true);
    setTimeout(() => setDroneScan(false), 2000);
  };

  return (
    <SlideWrapper
      className={`h-full w-full bg-gradient-to-br ${slide.gradient}`}
      onDoubleTap={onDoubleTap}
    >
      <div className="absolute inset-0 gz-noise" />
      <div className="absolute inset-0 bg-black/45" />

      {/* Massive Watermark Emoji in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[440px] sm:text-[540px] opacity-[0.09] leading-none animate-[gz-spin-slow_60s_linear_infinite]">
          {currentEmoji}
        </span>
      </div>

      {/* Top Header Pill */}
      <div className="absolute top-20 sm:top-24 left-4 right-4 z-20 flex items-center justify-between max-w-lg mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-black/80 text-white rounded-md border border-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-md">
          <span>💼</span> Villain era · {slide.index + 1}/3
        </div>
        <div className="bg-black/80 text-white rounded-md border border-white/20 px-3 py-1 text-[11px] font-bold tabular-nums shadow-md">
          {slide.views} views
        </div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-14 max-w-md mx-auto z-10">
        {/* HUGE Glowing Holographic Emoticon Showcase */}
        <div className="relative mb-2 flex items-center justify-center">
          <div className="absolute -inset-4 rounded-full bg-white/15 blur-xl animate-pulse pointer-events-none" />
          
          <button
            type="button"
            onClick={handleEmojiClick}
            title="Tap to switch villain aura"
            className={`relative h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-black/70 backdrop-blur-md border-2 border-white/30 shadow-[0_0_45px_rgba(255,255,255,0.35)] flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 ${
              wobble ? "animate-[gz-shake_0.4s_ease]" : ""
            }`}
          >
            <span className="text-5xl sm:text-7xl select-none leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)] filter">
              {currentEmoji}
            </span>
            <span className="absolute -bottom-1 bg-neutral-950 text-yellow-300 font-bold text-[9px] px-2 py-0.5 rounded-full border border-white/20 uppercase tracking-widest shadow-md">
              TAP VIBE
            </span>
          </button>
        </div>

        {/* Highlight Achievement Badges */}
        {slide.highlights && (
          <div className="flex flex-wrap justify-center gap-1.5 mb-2">
            {slide.highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-1 bg-black/80 backdrop-blur-md text-amber-300 border border-amber-400/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm"
              >
                <span>⚡</span>
                <span>{h}</span>
              </span>
            ))}
          </div>
        )}

        <h2 className="text-xl sm:text-3xl font-black gz-font-display text-white drop-shadow leading-tight mb-0.5 lowercase">
          {slide.role}
        </h2>
        <p className="text-white text-xs sm:text-sm font-bold mb-2 font-mono drop-shadow-sm">
          @ {slide.company} · {slide.location}
        </p>

        {/* Domain Specific Interactive HUD for each company */}
        {slide.id === "exp_amazon" && (
          <div className="w-full bg-black/80 backdrop-blur-md border border-amber-500/30 rounded-xl p-2.5 mb-2 text-left shadow-lg">
            <div className="flex items-center justify-between text-[10px] font-mono text-amber-400 mb-1.5">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                ALEXA COMPLIANCE ENGINE
              </span>
              <span className="text-white font-bold">50M+ USERS</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={handleRunAudit}
                disabled={auditRunning}
                className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black text-[10px] font-black px-2.5 py-1 rounded-md transition active:scale-95 cursor-pointer shadow-sm"
              >
                {auditRunning ? "Auditing..." : "⚡ Run Audit Test"}
              </button>
              <span className="text-[10px] text-white font-mono truncate">
                {auditResult || "JDK 17 Runtime: +20% Boost"}
              </span>
            </div>
          </div>
        )}

        {slide.id === "exp_agilisium" && (
          <div className="w-full bg-black/80 backdrop-blur-md border border-purple-500/30 rounded-xl p-2.5 mb-2 text-left shadow-lg">
            <div className="flex items-center justify-between text-[10px] font-mono text-pink-400 mb-1.5">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
                RAG KNOWLEDGE RETRIEVAL
              </span>
              <span className="text-white font-bold">40% CUT</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-1">
              <button
                type="button"
                onClick={(e) => handleRagQuery(e, "Policy Search", "40% Time Saved")}
                className="bg-white/10 hover:bg-white/20 text-white text-[9px] font-bold px-2 py-0.5 rounded transition cursor-pointer"
              >
                Policy Search
              </button>
              <button
                type="button"
                onClick={(e) => handleRagQuery(e, "Vector Query", "Found in 12ms")}
                className="bg-white/10 hover:bg-white/20 text-white text-[9px] font-bold px-2 py-0.5 rounded transition cursor-pointer"
              >
                Vector Query
              </button>
            </div>
            <p className="text-[10px] text-purple-200 font-mono truncate">
              {ragQuery || "Interactive HR Query Stream Ready"}
            </p>
          </div>
        )}

        {slide.id === "exp_reude" && (
          <div className="w-full bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-xl p-2.5 mb-2 text-left shadow-lg">
            <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-1.5">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                DRONE SPATIAL TELEMETRY
              </span>
              <span className="text-white font-bold">+20% ACC</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={handleDroneScan}
                className="bg-cyan-500 hover:bg-cyan-400 text-black text-[10px] font-black px-2.5 py-1 rounded-md transition active:scale-95 cursor-pointer shadow-sm"
              >
                {droneScan ? "Scanning..." : "📡 Scan Point Cloud"}
              </button>
              <span className="text-[10px] text-white font-mono truncate">
                {droneScan ? "LiDAR Fusion: 1.2M Points" : "GPS Locked · 120m Alt"}
              </span>
            </div>
          </div>
        )}

        {/* 3D Tilt Sticker Card Description */}
        <GenZTiltCard
          maxTilt={8}
          className="relative max-w-md gz-sticker-white px-4 py-3 rounded-sm -rotate-[1deg] mb-2 shadow-2xl text-left"
        >
          <div className="gz-tape absolute -top-2.5 right-6 h-4 w-14" />
          <p className="gz-font-caption text-neutral-900 text-xs sm:text-sm leading-relaxed font-medium">
            {slide.description}
          </p>
        </GenZTiltCard>

        {/* Tech tags */}
        <div className="flex flex-wrap justify-center gap-1.5 max-w-sm mb-1.5">
          {slide.tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                playPop();
              }}
              className="rounded-md bg-black/70 hover:bg-black/90 border border-white/25 px-2 py-0.5 text-[10px] font-mono text-white font-medium shadow-sm transition hover:scale-105 active:scale-95 cursor-pointer"
            >
              {t}
            </button>
          ))}
        </div>
        <p className="text-[11px] text-slate-200 font-mono font-semibold">{slide.dates}</p>
      </div>
    </SlideWrapper>
  );
}

// Skills Slide
function SkillsSlide({
  slide,
  onDoubleTap,
}: {
  slide: Extract<Slide, { kind: "skills" }>;
  onDoubleTap?: () => void;
}) {
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);

  const handlePickRandom = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSparkle();
    const randomSkill = slide.skills[Math.floor(Math.random() * slide.skills.length)].name;
    setHighlightedSkill(randomSkill);
    setTimeout(() => setHighlightedSkill(null), 2500);
  };

  return (
    <SlideWrapper
      className="h-full w-full bg-[#0a1411] overflow-hidden flex flex-col items-center justify-center px-4 py-16"
      onDoubleTap={onDoubleTap}
    >
      <div className="absolute inset-0 gz-noise opacity-60" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(16,185,129,0.25) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.2) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-xl w-full flex flex-col items-center text-center">
        {/* Header Badges */}
        <p className="text-emerald-400 text-xs tracking-[0.28em] font-mono font-bold uppercase mb-1 drop-shadow-sm">
          {slide.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-5xl font-black gz-font-display text-white lowercase mb-1 drop-shadow-md">
          <span className="text-emerald-300 mr-2">
            {slide.title}
          </span>
          🛠️
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm font-medium gz-font-caption mb-4 drop-shadow-sm">
          {slide.subtitle}
        </p>

        {/* Tech Savvy Developer Terminal Console */}
        <div className="w-full bg-black/85 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 rounded-2xl shadow-2xl text-left mb-4">
          {/* Console Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <span className="text-slate-400 font-bold ml-2">deevna@devstation: ~/toolkit</span>
            </div>
            <span className="text-emerald-400 font-bold text-[11px] flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              SYS LIVE
            </span>
          </div>

          {/* Aligned 2/3 Column Tech Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full">
            {slide.skills.map((s) => {
              const isPicked = highlightedSkill === s.name;
              return (
                <button
                  key={s.name}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    playPop();
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isPicked
                      ? "bg-amber-400/20 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.6)] scale-105 z-20 animate-[gz-shake_0.4s_ease]"
                      : "bg-white/[0.05] hover:bg-white/[0.12] border-white/15 hover:border-emerald-400/50 hover:scale-102"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-xs text-white">
                    <span className="text-base">{s.emoji}</span>
                    <span className="truncate">{s.name}</span>
                  </div>
                  <p className="text-[10px] text-emerald-300 font-mono font-medium mt-1 truncate">
                    {s.slangLevel}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Controls Bar */}
        <div className="flex items-center justify-between w-full max-w-xl px-1">
          <button
            type="button"
            onClick={handlePickRandom}
            className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs px-4 py-2 rounded-full shadow-lg border border-black cursor-pointer hover:scale-105 active:scale-95 transition"
          >
            <span>🎲</span>
            <span>Roll random tech stack</span>
          </button>

          <div className="inline-flex items-center gap-1.5 bg-black/80 border border-white/20 text-yellow-300 px-3 py-1.5 rounded-full font-mono text-[11px] font-bold shadow-md">
            <span>⚡</span> {slide.rating}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

// Project Slide
function ProjectSlide({
  slide,
  onDoubleTap,
}: {
  slide: Extract<Slide, { kind: "project" }>;
  onDoubleTap?: () => void;
}) {
  return (
    <SlideWrapper
      className={`h-full w-full bg-gradient-to-br ${slide.gradient} overflow-hidden flex flex-col items-center justify-center`}
      onDoubleTap={onDoubleTap}
    >
      <div className="absolute inset-0 gz-noise opacity-70" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Top Project Indicator Pill */}
      <div className="absolute top-20 sm:top-24 left-4 right-4 z-20 flex items-center justify-between max-w-lg mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-black/80 text-white rounded-md border border-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-md">
          <span>⚡</span> Project · {slide.index + 1}/3
        </div>
        <div className="bg-black/80 text-white rounded-md border border-white/20 px-3 py-1 text-[11px] font-bold tabular-nums shadow-md">
          {slide.views} views
        </div>
      </div>

      {/* Center 3D Tilt Project Card */}
      <div className="relative z-10 w-full px-4 pt-14 pb-16 sm:py-0 flex flex-col items-center justify-center">
        <GenZTiltCard maxTilt={8}>
          <GenZReceiptCard slide={slide} />
        </GenZTiltCard>
      </div>
    </SlideWrapper>
  );
}

// Contact / Connect Slide
function ContactSlide({
  slide,
  onDoubleTap,
}: {
  slide: Extract<Slide, { kind: "contact" }>;
  onDoubleTap?: () => void;
}) {
  return (
    <SlideWrapper
      className="h-full w-full bg-gradient-to-br from-[#0c051f] via-[#1a0826] to-[#24081c] overflow-y-auto gz-scrollbar-hidden flex flex-col items-center justify-center p-4 sm:p-6 pt-16 pb-12"
      onDoubleTap={onDoubleTap}
    >
      <div className="absolute inset-0 gz-noise opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full flex flex-col items-center text-center my-auto">
        <h2 className="text-3xl sm:text-5xl font-black gz-font-display text-white drop-shadow leading-tight mb-1">
          {slide.heading}
        </h2>
        <p className="text-pink-300 font-mono text-xs sm:text-sm font-semibold mb-3 drop-shadow-sm">
          {slide.subheading}
        </p>

        {/* Interactive Direct Connect simulator */}
        <GenZDMSimulator />
      </div>
    </SlideWrapper>
  );
}

// Main Gen-Z Mode Container
export default function GenZStoryMode() {
  const { mode } = useGenZ();
  const isGenZ = mode === "genz";
  const [activeIdx, setActiveIdx] = useState(0);
  const [likedSlides, setLikedSlides] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeSlide = useMemo(() => slides[activeIdx] || slides[0], [activeIdx]);

  const handleDoubleTapSlide = useCallback((slideId: string) => {
    setLikedSlides((prev) => ({ ...prev, [slideId]: true }));
  }, []);

  // Scroll into view helper
  const scrollToSlide = useCallback((targetId: string) => {
    if (!containerRef.current) return;
    const targetIdx = slides.findIndex((s) => s.id === targetId);
    if (targetIdx >= 0) {
      const el = containerRef.current.querySelector(`[data-slide-idx="${targetIdx}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // IntersectionObserver to detect currently visible slide
  useEffect(() => {
    if (!isGenZ) return;
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll("[data-slide-idx]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            const idx = Number((entry.target as HTMLElement).dataset.slideIdx);
            if (!Number.isNaN(idx)) {
              setActiveIdx(idx);
            }
          }
        });
      },
      { root: container, threshold: [0.55, 0.85] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isGenZ]);

  // Keyboard navigation
  useEffect(() => {
    if (!isGenZ) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        if (activeIdx < slides.length - 1) {
          const el = containerRef.current?.querySelector(`[data-slide-idx="${activeIdx + 1}"]`);
          el?.scrollIntoView({ behavior: "smooth" });
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        if (activeIdx > 0) {
          const el = containerRef.current?.querySelector(`[data-slide-idx="${activeIdx - 1}"]`);
          el?.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGenZ, activeIdx]);

  if (!isGenZ) return null;

  return (
    <SpotifyProvider activeTrack={activeSlide.sound}>
      <div className="fixed inset-0 z-50 bg-black text-white overflow-hidden select-none">
        {/* Top Right Exit Gen-Z button & Live Badge */}
        <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-[60] flex items-center gap-2.5">
          <LiveBadge />
          <GenZToggle compact={true} />
        </div>

        {/* Live Toasts sliding from left */}
        <LiveToasts />

        {/* Vertical Scroll-Snap Feed */}
        <div
          ref={containerRef}
          className="h-full w-full overflow-y-scroll gz-scrollbar-hidden gz-snap-y"
        >
          {/* Sticky Stories Bar at top */}
          <GenZStoriesBar onSelect={scrollToSlide} activeId={activeSlide.id} />

          {/* Slides */}
          {slides.map((slide, idx) => (
            <section
              key={slide.id}
              data-slide-idx={idx}
              className="relative h-[100dvh] w-full gz-snap-start overflow-hidden flex flex-col items-center justify-center"
            >
              {slide.kind === "hero" && (
                <HeroSlide slide={slide} onDoubleTap={() => handleDoubleTapSlide(slide.id)} />
              )}
              {slide.kind === "about" && (
                <AboutSlide slide={slide} onDoubleTap={() => handleDoubleTapSlide(slide.id)} />
              )}
              {slide.kind === "experience" && (
                <ExperienceSlide slide={slide} onDoubleTap={() => handleDoubleTapSlide(slide.id)} />
              )}
              {slide.kind === "skills" && (
                <SkillsSlide slide={slide} onDoubleTap={() => handleDoubleTapSlide(slide.id)} />
              )}
              {slide.kind === "project" && (
                <ProjectSlide slide={slide} onDoubleTap={() => handleDoubleTapSlide(slide.id)} />
              )}
              {slide.kind === "contact" && (
                <ContactSlide slide={slide} onDoubleTap={() => handleDoubleTapSlide(slide.id)} />
              )}

              {/* TikTok Right-side Actions Rail */}
              <GenZActionsRail
                likes={slide.likes}
                saves={slide.saves}
                shares={slide.shares}
                isLikedExternal={likedSlides[slide.id]}
              />

              {/* Bottom Caption Frosted Glass Card (hidden on contact slide so deck is completely unobstructed) */}
              {slide.kind !== "contact" && (
                <div className="absolute left-3 sm:left-6 bottom-4 sm:bottom-6 z-20 max-w-[290px] sm:max-w-md text-left pointer-events-auto flex flex-col gap-2.5">
                  <div className="bg-black/80 backdrop-blur-xl border border-white/20 p-3.5 sm:p-4 rounded-2xl shadow-2xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white tracking-wide">@deevna_reddy</span>
                      <span className="text-[10px] text-yellow-300 font-bold bg-yellow-300/20 px-2 py-0.5 rounded-full border border-yellow-300/30">
                        ORIGINAL
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-white font-semibold leading-snug drop-shadow-sm" style={{ color: "#ffffff" }}>
                      {slide.caption}
                    </p>
                    <p className="text-xs text-pink-300 font-bold drop-shadow-sm">
                      {slide.hashtags.join(" ")}
                    </p>
                    <div className="pt-1">
                      <GenZSoundTicker sound={slide.sound} />
                    </div>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Bottom Slide Dot Indicators */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-3 z-50 flex gap-1 items-center">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeIdx ? "w-6 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </SpotifyProvider>
  );
}
