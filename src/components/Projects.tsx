"use client";

import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects, Project } from "@/lib/content";
import { useGenZ } from "@/context/GenZContext";
import { playPop, playSparkle } from "@/lib/soundFx";

const accents = [
  { text: "text-mauve", bg: "bg-mauve/10", border: "border-mauve/40", bar: "bg-mauve", glow: "hover:shadow-[0_0_30px_rgba(203,166,247,0.15)]" },
  { text: "text-peach", bg: "bg-peach/10", border: "border-peach/40", bar: "bg-peach", glow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]" },
  { text: "text-sky", bg: "bg-sky/10", border: "border-sky/40", bar: "bg-sky", glow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]" },
];

function ExtractPanel({ a }: { a: (typeof accents)[0] }) {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [extractedCount, setExtractedCount] = useState(9);
  const [latencyText, setLatencyText] = useState("Status: Ready");

  const fields = ["Policy #", "Claimant", "Incident date", "Damage type", "Est. cost", "Coverage", "Adjuster", "Priority", "Status"];

  const handleRunTest = () => {
    if (isRunning) return;
    setIsRunning(true);
    playPop();
    setExtractedCount(0);
    setActiveStage(1);
    setLatencyText("Ingesting claim scan...");

    setTimeout(() => {
      playPop();
      setActiveStage(2);
      setExtractedCount(5);
      setLatencyText("Extracting structured fields...");
    }, 400);

    setTimeout(() => {
      playPop();
      setExtractedCount(9);
      setActiveStage(3);
      setLatencyText("Validating consistency gate...");
    }, 850);

    setTimeout(() => {
      playSparkle();
      setActiveStage(4);
      setLatencyText("Latency: 142ms · Auto Triage: 80%");
      setIsRunning(false);
    }, 1250);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <p className="font-mono text-xs font-bold tracking-wider text-slate-200">
          FIELD SCHEMA · {extractedCount} / 9 EXTRACTED
        </p>
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      <div className="grid grid-cols-3 gap-2 mb-5">
        {fields.map((f, idx) => {
          const isExtracted = idx < extractedCount;
          return (
            <div
              key={f}
              className={`rounded-lg border px-2 py-2.5 text-center transition-all duration-300 ${
                isExtracted
                  ? "border-emerald-500/40 bg-surface0 text-slate-100 shadow-xs"
                  : "border-surface2/40 bg-mantle/40 text-slate-500 opacity-60"
              }`}
            >
              <p className="font-mono text-xs font-semibold">{f}</p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between mb-2">
        <p className="font-mono text-xs font-bold tracking-wider text-slate-200">PIPELINE STAGES</p>
        <span className="font-mono text-[11px] text-emerald-300 font-bold">{latencyText}</span>
      </div>

      <div className="space-y-2 mb-5 font-mono text-xs">
        {["1. Ingest Raw PDF", "2. Extract 15 Structured Fields", "3. LLM Validation Gate", "4. Auto Triage Queue"].map((s, i) => {
          const isDone = activeStage > i + 1;
          const isCurrent = activeStage === i + 1;
          return (
            <div
              key={s}
              className={`flex items-center justify-between p-2 rounded-lg border transition-all duration-200 ${
                isCurrent
                  ? "border-emerald-400 bg-emerald-500/10 text-white"
                  : isDone
                  ? "border-surface2 bg-mantle text-emerald-400"
                  : "border-surface2/60 bg-mantle/60 text-slate-400"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className={`h-2 w-2 rounded-full ${isCurrent ? "bg-yellow-400 animate-ping" : isDone ? "bg-emerald-400" : "bg-slate-600"}`} />
                <span className="font-semibold">{s}</span>
              </div>
              <span className="text-[10px] font-bold">
                {isCurrent ? "Active..." : isDone ? "Done" : "Pending"}
              </span>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={handleRunTest}
        disabled={isRunning}
        className="w-full mb-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-black font-extrabold text-xs py-2.5 font-mono transition-all active:scale-95 shadow-md shadow-emerald-500/20 cursor-pointer flex items-center justify-center gap-2"
      >
        <span>⚡</span>
        <span>{isRunning ? "Running Pipeline..." : "Run Live Extraction Test"}</span>
      </button>

      <blockquote className={`border-l-2 ${a.border} pl-3 text-xs italic text-slate-100 leading-relaxed bg-surface0/30 py-2 pr-2 rounded-r`}>
        &ldquo;The 20% that do not auto route are not random, they cluster on ambiguous damage type fields, which is exactly where a human should be looking anyway.&rdquo;
      </blockquote>
    </>
  );
}

function ScorePanel({ a }: { a: (typeof accents)[0] }) {
  const [isScoring, setIsScoring] = useState(false);
  const [scoreResult, setScoreResult] = useState<string>("Low Risk (0.04)");

  const handleSimulateScore = () => {
    if (isScoring) return;
    setIsScoring(true);
    playPop();
    setScoreResult("Analyzing sequence...");

    setTimeout(() => {
      playSparkle();
      setScoreResult("High Risk Flagged (0.94)");
      setIsScoring(false);
    }, 650);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <p className="font-mono text-xs font-bold tracking-wider text-slate-200">PRECISION RECALL AUC</p>
        <span className="h-2 w-2 rounded-full bg-peach animate-pulse" />
      </div>
      <div className="flex items-end gap-6 mb-5">
        <div className="text-center">
          <div className="h-20 w-14 rounded-lg bg-surface1 border border-surface2 transition-all" />
          <p className="mt-2 font-mono text-xs text-slate-200 font-semibold">Baseline</p>
        </div>
        <div className="text-center">
          <div className={`h-28 w-14 rounded-lg ${a.bar} shadow-lg shadow-peach/20 transition-all hover:scale-105`} />
          <p className={`mt-2 font-mono text-xs font-bold ${a.text}`}>TradeShield</p>
        </div>
        <span className="rounded-full bg-emerald-400/20 border border-emerald-400/30 px-3 py-1 font-mono text-xs font-bold text-emerald-300 shadow-sm animate-pulse">
          +25% AUC
        </span>
      </div>

      <div className="flex items-center justify-between mb-2">
        <p className="font-mono text-xs font-bold tracking-wider text-slate-200">RISK TIERS · LIVE SCORING</p>
        <span className="font-mono text-[11px] text-peach font-bold">{scoreResult}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {["low risk", "review", "high risk", "auto block"].map((t) => (
          <span
            key={t}
            className="rounded-full border border-surface2 bg-mantle/90 px-3 py-1 font-mono text-xs text-slate-100 font-semibold hover:border-peach/50 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={handleSimulateScore}
        disabled={isScoring}
        className="w-full mb-4 rounded-xl bg-peach hover:bg-peach/90 disabled:opacity-50 text-black font-extrabold text-xs py-2.5 font-mono transition-all active:scale-95 shadow-md shadow-peach/20 cursor-pointer flex items-center justify-center gap-2"
      >
        <span>🛡️</span>
        <span>{isScoring ? "Evaluating Model..." : "Simulate Anomaly Scoring"}</span>
      </button>

      <blockquote className={`border-l-2 ${a.border} pl-3 text-xs italic text-slate-100 leading-relaxed bg-surface0/30 py-2 pr-2 rounded-r`}>
        &ldquo;The behavioral model scores sequences, not single transactions: the same account making five small, spaced out transfers is where the baseline went blind.&rdquo;
      </blockquote>
    </>
  );
}

function ModelPanel({ a }: { a: (typeof accents)[0] }) {
  const features = [
    { name: "EGFR", v: 94 },
    { name: "TP63", v: 81 },
    { name: "NKX2.1", v: 73 },
    { name: "Grad CAM nodule region", v: 68 },
  ];
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <p className="font-mono text-xs font-bold tracking-wider text-slate-200">TOP SHAP FEATURES</p>
        <span className="h-2 w-2 rounded-full bg-sky animate-pulse" />
      </div>
      <div className="space-y-3 mb-5">
        {features.map((f) => (
          <div key={f.name}>
            <div className="flex justify-between mb-1">
              <span className="text-xs text-slate-100 font-semibold">{f.name}</span>
              <span className="font-mono text-xs text-slate-200 font-bold">{f.v}%</span>
            </div>
            <div className="h-2 rounded-full bg-surface1 overflow-hidden">
              <div className={`h-full rounded-full ${a.bar} transition-all duration-1000`} style={{ width: `${f.v}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="font-mono text-xs font-bold tracking-wider text-slate-200 mb-3">MODALITIES FUSED</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {["DenseNet121 CT branch", "RF + SHAP gene branch", "512D fused"].map((m) => (
          <span
            key={m}
            className="rounded-full border border-surface2 bg-mantle/90 px-3 py-1 font-mono text-xs text-slate-100 font-semibold hover:border-sky/50 transition-colors"
          >
            {m}
          </span>
        ))}
      </div>
      <blockquote className={`border-l-2 ${a.border} pl-3 text-xs italic text-slate-100 leading-relaxed bg-surface0/30 py-2 pr-2 rounded-r`}>
        &ldquo;EGFR signaling topped the pathway enrichment, matching known lung cancer biology, which is what actually made the accuracy number trustworthy.&rdquo;
      </blockquote>
    </>
  );
}

function Panel({ type, a }: { type: Project["panel"]; a: (typeof accents)[0] }) {
  if (type === "extract") return <ExtractPanel a={a} />;
  if (type === "score") return <ScorePanel a={a} />;
  return <ModelPanel a={a} />;
}

export default function Projects() {
  const { t, genz } = useGenZ();
  return (
    <Section id="projects" num="03" heading={genz ? "Projects (the plug)" : "Projects"}>
      <p className="max-w-xl text-white -mt-4 mb-12 text-sm sm:text-base leading-relaxed font-normal" style={{ color: "#ffffff" }}>
        Problem, approach, outcome, and what I&apos;d change. Numbers only where I can explain how they were measured.
      </p>
      <div className="space-y-20">
        {projects.map((project, idx) => {
          const a = accents[idx % accents.length];
          return (
            <Reveal key={project.name} delay={idx * 120}>
              <div
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                }}
                className={`group relative rounded-2xl border border-surface1/80 bg-mantle/70 p-6 sm:p-9 transition-all duration-300 hover:border-surface2 ${a.glow} hover:-translate-y-1`}
              >
                {/* Top Badge & Number */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className={`rounded-full ${a.bg} border ${a.border} px-3.5 py-1 font-mono text-xs font-bold tracking-wide ${a.text}`}>
                    {project.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-200 shrink-0 font-bold">0{idx + 1}</span>
                </div>

                {/* Project Title & Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl sm:text-3xl" aria-hidden>
                    {project.icon}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight">
                    {project.name}
                  </h3>
                </div>

                {/* Tagline */}
                <p className="max-w-2xl text-white text-sm sm:text-base leading-relaxed mb-6 font-normal" style={{ color: "#ffffff" }}>
                  {t(project.tagline)}
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-surface2 bg-surface0/60 px-4 py-3 min-w-[120px] transition-all duration-200 hover:scale-105 hover:border-white/30 shadow-md"
                    >
                      <p className="text-xl font-bold text-white">{s.value}</p>
                      <p className="font-mono text-[11px] text-slate-200 font-bold tracking-wider mt-0.5">{s.label.toUpperCase()}</p>
                    </div>
                  ))}
                </div>

                {/* Main Grid: Interactive Panel + Breakdown */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="rounded-xl border border-surface2 bg-surface0/40 p-6 shadow-inner">
                    <Panel type={project.panel} a={a} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="group/item">
                      <p className="font-mono text-xs tracking-wider text-rose-400 font-bold border-t border-rose-400/40 pt-2.5 mb-2">
                        PROBLEM
                      </p>
                      <p className="text-sm text-white leading-relaxed font-normal" style={{ color: "#ffffff" }}>{project.problem}</p>
                    </div>
                    <div className="group/item">
                      <p className="font-mono text-xs tracking-wider text-sky-300 font-bold border-t border-sky-400/40 pt-2.5 mb-2">
                        APPROACH
                      </p>
                      <p className="text-sm text-white leading-relaxed font-normal" style={{ color: "#ffffff" }}>{project.approach}</p>
                    </div>
                    <div className="group/item">
                      <p className="font-mono text-xs tracking-wider text-emerald-400 font-bold border-t border-emerald-400/40 pt-2.5 mb-2">
                        OUTCOME
                      </p>
                      <p className="text-sm text-white leading-relaxed font-normal" style={{ color: "#ffffff" }}>{project.outcome}</p>
                    </div>
                    <div className="group/item">
                      <p className="font-mono text-xs tracking-wider text-amber-300 font-bold border-t border-amber-400/40 pt-2.5 mb-2">
                        WHAT I&apos;D CHANGE
                      </p>
                      <p className="text-sm text-white leading-relaxed font-normal" style={{ color: "#ffffff" }}>{project.whatIdChange}</p>
                    </div>
                  </div>
                </div>

                {/* Tags & External Links */}
                <div className="mt-8 pt-4 border-t border-surface1/60 flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border border-surface2 bg-mantle/90 px-3 py-1 font-mono text-xs font-medium ${a.text} hover:border-white/40 transition-colors`}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className={`ml-auto flex items-center gap-1.5 font-mono text-xs font-semibold ${a.text} hover:underline hover:scale-105 transition-transform`}
                    >
                      {project.repoLabel || "View source"}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

