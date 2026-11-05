"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Milestone data ───────────────────────────────────────────────
interface Stop {
  id: string;
  year: string;
  title: string;
  sub: string;
  orbit: 0 | 1; // 0 = inner, 1 = outer
  angleDeg: number;
  color: string;
}

const stops: Stop[] = [
  {
    id: "ieee",
    year: "2025",
    title: "IEEE ICCDS",
    sub: "First-author paper",
    orbit: 1,
    angleDeg: -120,
    color: "#c8c8b4",
  },
  {
    id: "openroles",
    year: "NOW",
    title: "Open to roles",
    sub: "Chennai, IN",
    orbit: 1,
    angleDeg: -15,
    color: "#c8c8b4",
  },
  {
    id: "kindle",
    year: "JAN 2025",
    title: "Kindle Scribe",
    sub: "SDE · Amazon",
    orbit: 0,
    angleDeg: -20,
    color: "#c8c8b4",
  },
  {
    id: "btech",
    year: "2021",
    title: "B.Tech begins",
    sub: "Data Analytics",
    orbit: 1,
    angleDeg: 155,
    color: "#c8c8b4",
  },
  {
    id: "alexa",
    year: "JAN 2025",
    title: "Alexa Calendar",
    sub: "SDE · Amazon",
    orbit: 1,
    angleDeg: 95,
    color: "#c8c8b4",
  },
  {
    id: "agilisium",
    year: "2024",
    title: "Agilisium",
    sub: "GenAI · RAG",
    orbit: 1,
    angleDeg: -175,
    color: "#c8c8b4",
  },
  {
    id: "reude",
    year: "2023",
    title: "REUDE Tech",
    sub: "LiDAR · Drone",
    orbit: 1,
    angleDeg: -145,
    color: "#c8c8b4",
  },
];

// ─── Static star field (deterministic) ────────────────────────────
const STARS = Array.from({ length: 160 }, (_, i) => {
  const theta = (i * 137.508 * Math.PI) / 180;
  const r = Math.sqrt(i / 160);
  return {
    x: 50 + r * 48 * Math.cos(theta),
    y: 50 + r * 48 * Math.sin(theta),
    size: i % 17 === 0 ? 1.6 : i % 7 === 0 ? 1.2 : 0.8,
    opacity: 0.15 + (i % 9) * 0.045,
    twinkleDur: 2 + (i % 6),
    twinkleDelay: (i % 11) * 0.3,
  };
});

// ─── Orbital maths ────────────────────────────────────────────────
function orbitPoint(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  tiltDeg: number,
  angleDeg: number
) {
  const a = (angleDeg * Math.PI) / 180;
  const t = (tiltDeg * Math.PI) / 180;
  // Rotate the ellipse by tilt
  const ex = rx * Math.cos(a);
  const ey = ry * Math.sin(a);
  return {
    x: cx + ex * Math.cos(t) - ey * Math.sin(t),
    y: cy + ex * Math.sin(t) + ey * Math.cos(t),
  };
}

export const CatGalaxy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 900, h: 560 });
  const [hovered, setHovered] = useState<string | null>(null);
  const [entered, setEntered] = useState(false);
  const [catBlink, setCatBlink] = useState(false);

  // Responsive sizing
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        setDims({ w, h: Math.round(w * 0.6) });
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Scroll-triggered reveal
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setEntered(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Cat blink
  useEffect(() => {
    const id = setInterval(() => {
      setCatBlink(true);
      setTimeout(() => setCatBlink(false), 160);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  const { w, h } = dims;

  // Orbit radii  — tuned to match the reference screenshot proportions
  const cx = w * 0.46;
  const cy = h * 0.52;
  const TILT = -12; // degree tilt of whole ellipse system (slight 3-D feel)

  const orbits = [
    { rx: w * 0.145, ry: h * 0.14 },  // inner
    { rx: w * 0.33, ry:  h * 0.30 },  // outer
  ];

  return (
    <section
      style={{
        background: "#0a0b0d",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top pill tabs — faithful to the original UI */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 28,
          paddingBottom: 0,
          gap: 0,
        }}
      >
        {["1 · Winding road", "2 · Mountain trail", "3 · Cat galaxy"].map(
          (label, i) => (
            <div
              key={label}
              style={{
                fontSize: 12,
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: i === 2 ? 700 : 400,
                color: i === 2 ? "#0a0b0d" : "rgba(255,255,255,0.35)",
                background: i === 2 ? "#f0f0ee" : "transparent",
                border: "1px solid",
                borderColor: i === 2 ? "#f0f0ee" : "rgba(255,255,255,0.12)",
                borderRadius: i === 0 ? "8px 0 0 8px" : i === 2 ? "0 8px 8px 0" : "0",
                padding: "5px 16px",
                marginLeft: i === 0 ? 0 : -1,
                letterSpacing: "0.02em",
                cursor: "default",
                userSelect: "none",
              }}
            >
              {label}
            </div>
          )
        )}
      </div>

      {/* Description subtitle */}
      <p
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: 12,
          color: "rgba(255,255,255,0.35)",
          lineHeight: 1.6,
          maxWidth: 320,
          padding: "16px 0 0 32px",
        }}
      >
        A night-sky version. The path spirals inward through the stars, and each
        stop sits on the orbit. The most dramatic and the most unusual.
      </p>

      {/* SVG Canvas */}
      <div ref={containerRef} style={{ width: "100%", position: "relative" }}>
        <svg
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          style={{ display: "block" }}
        >
          {/* ── Star field ── */}
          {STARS.map((s, i) => (
            <motion.circle
              key={i}
              cx={`${s.x}%`}
              cy={(s.y / 100) * h}
              r={s.size}
              fill="white"
              initial={{ opacity: 0 }}
              animate={
                entered
                  ? {
                      opacity: [s.opacity, s.opacity * 2.2, s.opacity],
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: s.twinkleDur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: s.twinkleDelay,
              }}
            />
          ))}

          {/* ── Orbital ellipses ── */}
          {orbits.map((o, oi) => {
            // Build ellipse path that respects our tilt
            // We draw it as a rotated SVG ellipse
            return (
              <motion.ellipse
                key={oi}
                cx={cx}
                cy={cy}
                rx={o.rx}
                ry={o.ry}
                transform={`rotate(${TILT}, ${cx}, ${cy})`}
                fill="none"
                stroke={oi === 0 ? "#6b7a4a" : "#7a8f52"}
                strokeWidth={1.1}
                strokeDasharray={oi === 0 ? "4 7" : "5 9"}
                opacity={0}
                initial={{ opacity: 0 }}
                animate={entered ? { opacity: oi === 0 ? 0.6 : 0.5 } : {}}
                transition={{ duration: 1.4, delay: 0.4 + oi * 0.3 }}
              />
            );
          })}

          {/* ── Milestone dots + labels ── */}
          {stops.map((stop, si) => {
            const o = orbits[stop.orbit];
            const pt = orbitPoint(cx, cy, o.rx, o.ry, TILT, stop.angleDeg);
            const isHov = hovered === stop.id;

            // Decide which side to put label
            const labelRight = pt.x > cx;
            const labelAbove = pt.y < cy;

            // Dot accent colour: "open to roles" gets a green tint
            const dotColor =
              stop.id === "openroles"
                ? "#ff6b35"
                : stop.id === "alexa"
                ? "#ff7a35"
                : "#c47a3a";

            // Label offset
            const LX = labelRight ? pt.x + 10 : pt.x - 10;
            const LY = labelAbove ? pt.y - 6 : pt.y + 6;
            const anchor = labelRight ? "start" : "end";

            return (
              <motion.g
                key={stop.id}
                onMouseEnter={() => setHovered(stop.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "default" }}
                initial={{ opacity: 0 }}
                animate={entered ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + si * 0.12 }}
              >
                {/* Dot */}
                <motion.circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHov ? 5 : 3.5}
                  fill={dotColor}
                  opacity={isHov ? 1 : 0.85}
                  transition={{ duration: 0.2 }}
                />

                {/* Year */}
                <text
                  x={LX}
                  y={LY - (labelAbove ? 16 : -2)}
                  textAnchor={anchor}
                  fill="rgba(255,255,255,0.35)"
                  fontSize={9}
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight={500}
                  letterSpacing="0.06em"
                >
                  {stop.year}
                </text>

                {/* Title */}
                <text
                  x={LX}
                  y={LY - (labelAbove ? 4 : 14)}
                  textAnchor={anchor}
                  fill={isHov ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.72)"}
                  fontSize={14}
                  fontFamily="Newsreader, Georgia, serif"
                  fontStyle="italic"
                  fontWeight={400}
                >
                  {stop.title}
                </text>

                {/* Sub */}
                <text
                  x={LX}
                  y={LY - (labelAbove ? 4 : 14) + 14}
                  textAnchor={anchor}
                  fill="rgba(255,255,255,0.28)"
                  fontSize={9}
                  fontFamily="JetBrains Mono, monospace"
                >
                  {stop.sub}
                </text>
              </motion.g>
            );
          })}

          {/* ── Cat at centre ── */}
          <motion.g
            initial={{ opacity: 0, scale: 0.5 }}
            animate={entered ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.3 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            {/* SVG cat (matches the screenshot cat emoji look) */}
            <g transform={`translate(${cx - 22}, ${cy - 22})`}>
              {/* Body */}
              <ellipse cx="22" cy="27" rx="16" ry="13" fill="#f5a623" />
              {/* Face blush */}
              <ellipse cx="15" cy="29" rx="4" ry="2.5" fill="#e8862a" opacity="0.5" />
              <ellipse cx="29" cy="29" rx="4" ry="2.5" fill="#e8862a" opacity="0.5" />
              {/* Ears */}
              <polygon points="8,13 14,3 18,14" fill="#f5a623" />
              <polygon points="36,13 30,3 26,14" fill="#f5a623" />
              <polygon points="10,12 14,6 17,13" fill="#ffd4a3" />
              <polygon points="34,12 30,6 27,13" fill="#ffd4a3" />
              {/* Eyes */}
              {catBlink ? (
                <>
                  <line x1="16" y1="23" x2="20" y2="23" stroke="#2d1a0a" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="25" y1="23" x2="29" y2="23" stroke="#2d1a0a" strokeWidth="1.6" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <ellipse cx="18" cy="23" rx="3" ry="3.2" fill="#2d1a0a" />
                  <ellipse cx="27" cy="23" rx="3" ry="3.2" fill="#2d1a0a" />
                  <circle cx="19" cy="22" r="1" fill="white" opacity="0.8" />
                  <circle cx="28" cy="22" r="1" fill="white" opacity="0.8" />
                </>
              )}
              {/* Nose */}
              <polygon points="21.5,27 23.5,27 22.5,28.5" fill="#e05a2b" />
              {/* Mouth */}
              <path d="M 20,29 Q 22.5,31 25,29" stroke="#2d1a0a" strokeWidth="1.1" strokeLinecap="round" fill="none" />
              {/* Whiskers */}
              <line x1="8" y1="25" x2="1" y2="23" stroke="#c8a060" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
              <line x1="8" y1="27" x2="2" y2="29" stroke="#c8a060" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
              <line x1="36" y1="25" x2="43" y2="23" stroke="#c8a060" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
              <line x1="36" y1="27" x2="42" y2="29" stroke="#c8a060" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
            </g>
          </motion.g>
        </svg>

        {/* Hover detail — small floating label near cursor position */}
        <AnimatePresence>
          {hovered && (() => {
            const stop = stops.find((s) => s.id === hovered)!;
            const o = orbits[stop.orbit];
            const pt = orbitPoint(cx, cy, o.rx, o.ry, TILT, stop.angleDeg);
            const pctX = (pt.x / w) * 100;
            const pctY = (pt.y / h) * 100;
            return (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: "absolute",
                  left: `${Math.min(Math.max(pctX, 10), 80)}%`,
                  top: `${Math.min(Math.max(pctY + 4, 5), 85)}%`,
                  transform: "translateX(-50%)",
                  pointerEvents: "none",
                  background: "rgba(20,22,28,0.92)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 10,
                  padding: "8px 14px",
                  backdropFilter: "blur(12px)",
                  zIndex: 10,
                }}
              >
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "#c47a3a", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 3 }}>
                  {stop.year}
                </div>
                <div style={{ fontFamily: "Newsreader, serif", fontStyle: "italic", fontSize: 15, color: "#f0f0ee", fontWeight: 400 }}>
                  {stop.title}
                </div>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
                  {stop.sub}
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>

      {/* Bottom fade to parchment */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          background: "linear-gradient(to bottom, transparent, #f5f4ef)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
};
