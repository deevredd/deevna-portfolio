"use client";

import { useState } from "react";
import { contact, socials } from "@/lib/content";
import { playPop, playSparkle } from "@/lib/soundFx";

type InquiryIntent = "role" | "backend" | "ml" | "coffee";

interface IntentOption {
  id: InquiryIntent;
  label: string;
  emoji: string;
  subject: string;
  defaultBody: string;
}

const intentOptions: IntentOption[] = [
  {
    id: "role",
    label: "SWE & Backend",
    emoji: "💼",
    subject: "Software Engineering Opportunity for Deevna Reddy",
    defaultBody:
      "Hi Deevna, saw your work on Alexa compliance and research. We would love to discuss an engineering opportunity with you.",
  },
  {
    id: "backend",
    label: "Backend Systems",
    emoji: "⚡",
    subject: "Distributed Backend Architecture Inquiry",
    defaultBody:
      "Hi Deevna, interested in your experience with high throughput Java services and zero downtime migrations. Let's discuss backend architectures.",
  },
  {
    id: "ml",
    label: "Machine Learning / RAG",
    emoji: "🧠",
    subject: "Applied AI & Multimodal Fusion Inquiry",
    defaultBody:
      "Hi Deevna, impressed by your published multimodal model and RAG agent pipelines. Would love to collaborate on AI systems.",
  },
  {
    id: "coffee",
    label: "Tech Coffee Chat",
    emoji: "☕",
    subject: "Tech Coffee Chat with Deevna",
    defaultBody:
      "Hi Deevna, would love to connect and chat about software engineering, distributed systems, and your recent work!",
  },
];

export default function GenZDMSimulator() {
  const [selectedIntent, setSelectedIntent] = useState<InquiryIntent>("role");
  const [customText, setCustomText] = useState(intentOptions[0].defaultBody);
  const [copied, setCopied] = useState(false);

  const currentOption =
    intentOptions.find((o) => o.id === selectedIntent) || intentOptions[0];

  const handleSelectIntent = (opt: IntentOption) => {
    playPop();
    setSelectedIntent(opt.id);
    setCustomText(opt.defaultBody);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSparkle();
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
    currentOption.subject
  )}&body=${encodeURIComponent(customText)}`;

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center select-none text-left">
      {/* Main Glassmorphic Dispatch Deck */}
      <div className="w-full rounded-3xl bg-neutral-950/90 border border-white/20 p-5 sm:p-6 shadow-2xl backdrop-blur-2xl relative overflow-hidden mb-4">
        {/* Ambient Top Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-20 bg-purple-600/25 rounded-full blur-2xl pointer-events-none" />

        {/* Developer Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400 p-[2px] shadow-lg">
              <div className="h-full w-full rounded-full bg-neutral-900 flex items-center justify-center text-xl">
                👩‍💻
              </div>
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-black animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span
                  className="font-extrabold text-white text-base tracking-tight drop-shadow-sm"
                  style={{ color: "#ffffff" }}
                >
                  Deevna Reddy
                </span>
                <span className="text-[10px] bg-cyan-400 text-black font-black px-1.5 py-0.5 rounded-full shadow-sm">
                  ✓ SDE
                </span>
              </div>
              <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open for SWE & ML Roles
              </p>
            </div>
          </div>

          {/* Quick Copy Email Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
            className="rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 text-xs text-white font-bold flex items-center gap-1.5 transition active:scale-95 cursor-pointer shadow-sm"
          >
            <span>{copied ? "✓" : "📋"}</span>
            <span className="hidden sm:inline">
              {copied ? "Copied!" : "Copy Email"}
            </span>
          </button>
        </div>

        {/* Impact Highlights Bar */}
        <div className="grid grid-cols-2 gap-2 mb-4 relative z-10">
          <div className="p-2 rounded-xl bg-white/[0.08] border border-white/15 flex items-center gap-2">
            <span className="text-base">🛡️</span>
            <span className="text-[11px] text-white font-mono font-semibold truncate">
              50M+ Alexa Users DSAR
            </span>
          </div>
          <div className="p-2 rounded-xl bg-white/[0.08] border border-white/15 flex items-center gap-2">
            <span className="text-base">🏆</span>
            <span className="text-[11px] text-white font-mono font-semibold truncate">
              IEEE & Springer Paper
            </span>
          </div>
        </div>

        {/* Intent Selector Tabs */}
        <div className="mb-3 relative z-10">
          <p className="text-[11px] font-mono font-bold text-pink-300 uppercase tracking-wider mb-2">
            Select Inquiry Focus
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {intentOptions.map((opt) => {
              const isSelected = selectedIntent === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectIntent(opt)}
                  className={`p-2 rounded-xl border text-left flex items-center gap-2 text-xs font-bold transition cursor-pointer active:scale-95 ${
                    isSelected
                      ? "bg-purple-600/30 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                      : "bg-white/5 hover:bg-white/10 border-white/15 text-white/90"
                  }`}
                >
                  <span className="text-sm">{opt.emoji}</span>
                  <span className="truncate">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Custom Message Box */}
        <div className="mb-4 relative z-10">
          <label className="block text-[11px] font-mono font-bold text-pink-200 mb-1.5">
            Message Preview
          </label>
          <textarea
            rows={3}
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="w-full rounded-2xl bg-black/70 border border-white/25 text-white text-xs p-3 leading-relaxed focus:outline-none focus:border-purple-400 focus:bg-black/90 transition resize-none font-sans font-medium placeholder:text-slate-400"
            placeholder="Write a custom note for Deevna..."
          />
        </div>

        {/* Direct Send Email Action Button */}
        <div className="relative z-10">
          <a
            href={mailtoUrl}
            onClick={playPop}
            className="w-full rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:opacity-95 text-white font-black text-sm py-3 px-4 flex items-center justify-center gap-2 shadow-xl active:scale-98 transition cursor-pointer"
          >
            <span>✉️</span>
            <span>Dispatch via Email Client</span>
            <span>➔</span>
          </a>
        </div>
      </div>

      {/* Direct Channel Tiles (No Call Options) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full">
        <a
          href={socials.find((s) => s.label === "LinkedIn")?.href || "https://linkedin.com/in/deevnareddy"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playPop}
          className="rounded-2xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 p-3 flex flex-col items-center justify-center text-center gap-1 text-white font-bold transition active:scale-95 shadow-md"
        >
          <span className="text-xl">💼</span>
          <span className="text-xs text-white font-bold">LinkedIn</span>
          <span className="text-[10px] text-pink-300 font-mono font-bold">Connect ↗</span>
        </a>

        <a
          href={socials.find((s) => s.label === "GitHub")?.href || "https://github.com/deevredd"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playPop}
          className="rounded-2xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 p-3 flex flex-col items-center justify-center text-center gap-1 text-white font-bold transition active:scale-95 shadow-md"
        >
          <span className="text-xl">🐙</span>
          <span className="text-xs text-white font-bold">GitHub</span>
          <span className="text-[10px] text-pink-300 font-mono font-bold">Repositories ↗</span>
        </a>

        <a
          href="https://ieeexplore.ieee.org/document/11209732"
          target="_blank"
          rel="noopener noreferrer"
          onClick={playPop}
          className="col-span-2 sm:col-span-1 rounded-2xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 p-3 flex flex-col items-center justify-center text-center gap-1 text-white font-bold transition active:scale-95 shadow-md"
        >
          <span className="text-xl">📄</span>
          <span className="text-xs text-white font-bold">Publications</span>
          <span className="text-[10px] text-pink-300 font-mono font-bold">IEEE & Springer ↗</span>
        </a>
      </div>

      {/* Clean Location & Status Pill */}
      <div className="mt-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-white font-medium text-center shadow-md">
        Based in Chennai · Open to global remote and on site opportunities
      </div>
    </div>
  );
}

