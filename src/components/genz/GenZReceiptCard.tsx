"use client";

import { useState } from "react";
import { Slide } from "@/lib/genzSlides";
import { playPop, playSparkle, playHeart } from "@/lib/soundFx";

interface GenZReceiptCardProps {
  slide: Extract<Slide, { kind: "project" }>;
}

export default function GenZReceiptCard({ slide }: GenZReceiptCardProps) {
  // Common reaction state
  const [reactions, setReactions] = useState(
    slide.reactions.map((r) => ({
      ...r,
      clicked: false,
      countNum: parseInt(r.count.replace("k", "00"), 10) || 500,
    }))
  );

  // Showcase 1: Claims Agent Pipeline State
  const [claimDocIndex, setClaimDocIndex] = useState(0);
  const [isProcessingDoc, setIsProcessingDoc] = useState(false);
  const [processProgress, setProcessProgress] = useState(100);

  // Showcase 2: TradeShield Fraud Radar State
  const [fraudSimState, setFraudSimState] = useState<{
    status: "safe" | "fraud" | "idle";
    score: number;
    latency: string;
    action: string;
  }>({
    status: "safe",
    score: 0.02,
    latency: "1.4ms",
    action: "Approved · Normal Baseline",
  });
  const [algoMode, setAlgoMode] = useState<"forest" | "xgboost" | "fastapi">("fastapi");

  // Showcase 3: Lung Cancer AI Diagnostic State
  const [patientCase, setPatientCase] = useState<"LUAD" | "LUSC" | "Normal">("LUAD");
  const [activeModality, setActiveModality] = useState<"ct" | "genomics">("ct");
  const [stamped, setStamped] = useState(false);

  const handleReact = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    const isNowClicked = !reactions[idx].clicked;
    if (isNowClicked) {
      playHeart();
    } else {
      playPop();
    }
    setReactions((prev) =>
      prev.map((r, i) =>
        i === idx
          ? {
              ...r,
              clicked: !r.clicked,
              countNum: r.clicked ? r.countNum - 1 : r.countNum + 1,
            }
          : r
      )
    );
  };

  const handleRunClaimPipeline = (e: React.MouseEvent) => {
    e.stopPropagation();
    playPop();
    setIsProcessingDoc(true);
    setProcessProgress(20);

    setTimeout(() => {
      setProcessProgress(60);
      playPop();
    }, 300);

    setTimeout(() => {
      setProcessProgress(100);
      setIsProcessingDoc(false);
      playSparkle();
    }, 700);
  };

  const handleInjectTransaction = (type: "fraud" | "safe") => {
    if (type === "fraud") {
      playPop();
      setFraudSimState({
        status: "fraud",
        score: 0.96,
        latency: "1.2ms",
        action: "Anomaly Detected · Transaction Blocked",
      });
    } else {
      playSparkle();
      setFraudSimState({
        status: "safe",
        score: 0.02,
        latency: "1.4ms",
        action: "Legitimate · Approved Instantly",
      });
    }
  };

  // SHOWCASE 1: CLAIMS AGENT (AUTONOMOUS AGENT WORKSTATION & DOC SCANNER)
  if (slide.variant === "chaos") {
    const claimSamples = [
      {
        title: "Auto Collision Claim",
        file: "vehicle_damage_report_948.pdf",
        loss: "$14,250",
        policy: "POL 849281",
        risk: "Low Risk · 0.02",
        decision: "Auto Approved",
        fields: "18 fields extracted",
      },
      {
        title: "Medical Expense Form",
        file: "health_inpatient_receipts.pdf",
        loss: "$3,800",
        policy: "MED 194820",
        risk: "Low Risk · 0.01",
        decision: "Auto Approved",
        fields: "24 fields extracted",
      },
      {
        title: "Commercial Property Damage",
        file: "facility_structural_loss.pdf",
        loss: "$42,100",
        policy: "COM 948172",
        risk: "Moderate · Specialist Routed",
        decision: "Auto Routed to Lead Adjuster",
        fields: "31 fields extracted",
      },
    ];

    const currentDoc = claimSamples[claimDocIndex];

    return (
      <div className="relative w-full max-w-sm sm:max-w-md mx-auto select-none text-left">
        <div className="absolute inset-0 translate-y-2 translate-x-1.5 bg-fuchsia-500/20 rounded-2xl blur-xl pointer-events-none" />

        <div className="relative rounded-2xl bg-neutral-950/95 border border-fuchsia-500/30 p-4 sm:p-5 shadow-2xl backdrop-blur-2xl text-white">
          {/* Workstation Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="text-[11px] font-mono text-slate-300 font-bold ml-1.5">
                Claims Autonomous Agent
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold bg-fuchsia-500/20 text-fuchsia-300 px-2 py-0.5 rounded-full border border-fuchsia-500/30">
              AUTOPILOT
            </span>
          </div>

          {/* Project Title & Summary */}
          <div className="mb-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                {slide.name}
              </h4>
              <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Multi Agent
              </span>
            </div>
            <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed">
              {slide.description}
            </p>
          </div>

          {/* Sample Document Selector Buttons */}
          <div className="mb-3">
            <p className="text-[10px] font-mono text-fuchsia-300 font-bold uppercase tracking-wider mb-1.5">
              Select Sample Document
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              {claimSamples.map((sample, idx) => (
                <button
                  key={sample.title}
                  type="button"
                  onClick={() => {
                    playPop();
                    setClaimDocIndex(idx);
                  }}
                  className={`p-1.5 rounded-lg border text-left transition cursor-pointer active:scale-95 ${
                    claimDocIndex === idx
                      ? "bg-fuchsia-500/25 border-fuchsia-400 text-white shadow-sm"
                      : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-400"
                  }`}
                >
                  <p className="text-[10px] font-bold truncate">{sample.title}</p>
                  <p className="text-[9px] font-mono text-fuchsia-300">{sample.loss}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Live Document Pipeline Processing Box */}
          <div className="bg-black/70 rounded-xl p-3 border border-white/10 mb-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-base">📄</span>
                <span className="text-xs font-mono font-bold text-white truncate max-w-[170px]">
                  {currentDoc.file}
                </span>
              </div>
              <button
                type="button"
                onClick={handleRunClaimPipeline}
                disabled={isProcessingDoc}
                className="bg-fuchsia-500 hover:bg-fuchsia-400 disabled:opacity-50 text-black font-black text-[10px] px-2.5 py-1 rounded-md transition active:scale-95 cursor-pointer shadow-md"
              >
                {isProcessingDoc ? "Processing..." : "⚡ Run Triage"}
              </button>
            </div>

            {/* Live Progress Bar */}
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-fuchsia-500 to-pink-500 transition-all duration-300"
                style={{ width: `${processProgress}%` }}
              />
            </div>

            {/* Live Extracted Fields Grid */}
            <div className="grid grid-cols-2 gap-1.5 pt-1 text-[10px] font-mono">
              <div className="bg-white/5 p-1.5 rounded border border-white/5">
                <span className="text-slate-400">Policy:</span>{" "}
                <span className="text-white font-bold">{currentDoc.policy}</span>
              </div>
              <div className="bg-white/5 p-1.5 rounded border border-white/5">
                <span className="text-slate-400">Loss:</span>{" "}
                <span className="text-amber-300 font-bold">{currentDoc.loss}</span>
              </div>
              <div className="bg-white/5 p-1.5 rounded border border-white/5">
                <span className="text-slate-400">Extraction:</span>{" "}
                <span className="text-emerald-300 font-bold">{currentDoc.fields}</span>
              </div>
              <div className="bg-white/5 p-1.5 rounded border border-white/5 truncate">
                <span className="text-slate-400">Decision:</span>{" "}
                <span className="text-cyan-300 font-bold truncate">{currentDoc.decision}</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {slide.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] font-bold bg-fuchsia-950/60 border border-fuchsia-500/30 px-2 py-0.5 rounded-md text-fuchsia-200"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Button & Reactions */}
          <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
            {slide.repo && (
              <a
                href={slide.repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  playPop();
                }}
                className="rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-extrabold text-xs px-3.5 py-1.5 flex items-center gap-1.5 shadow-lg active:scale-95 transition"
              >
                <span>View GitHub repo</span>
                <span>↗</span>
              </a>
            )}

            <div className="flex items-center gap-1.5">
              {reactions.map((r, i) => (
                <button
                  key={r.emoji}
                  type="button"
                  onClick={(e) => handleReact(e, i)}
                  className={`inline-flex items-center gap-1 border rounded-full px-2.5 py-1 text-[11px] font-bold cursor-pointer transition active:scale-90 ${
                    r.clicked
                      ? "bg-fuchsia-600 border-fuchsia-500 text-white"
                      : "bg-white/10 border-white/15 text-slate-200 hover:bg-white/20"
                  }`}
                >
                  <span>{r.emoji}</span>
                  <span>{r.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // SHOWCASE 2: TRADESHIELD (CYBER FRAUD RADAR & LIVE INJECTION SIMULATOR)
  if (slide.variant === "radar") {
    const isFraud = fraudSimState.status === "fraud";

    return (
      <div className="relative w-full max-w-sm sm:max-w-md mx-auto select-none text-left">
        <div className="absolute inset-0 translate-y-2 translate-x-1.5 bg-emerald-500/20 rounded-2xl blur-xl pointer-events-none" />

        <div className="relative rounded-2xl bg-[#081014] border border-emerald-500/40 p-4 sm:p-5 shadow-2xl backdrop-blur-2xl text-emerald-400 font-mono">
          {/* Cyber Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-emerald-500/30 mb-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-bold text-white tracking-wide uppercase">
                TradeShield Security Radar
              </span>
            </div>
            <span className="text-[10px] font-bold bg-emerald-500 text-black px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]">
              FASTAPI 24/7
            </span>
          </div>

          {/* Project Name & Description */}
          <div className="mb-3">
            <h4 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {slide.name}
            </h4>
            <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed">
              {slide.description}
            </p>
          </div>

          {/* Live Radar Threat Scanner Display */}
          <div className="bg-black/90 rounded-xl p-3 border border-emerald-500/30 mb-3">
            <div className="flex items-center justify-between mb-2 text-xs">
              <span className="text-[10px] text-slate-400 uppercase font-bold">
                Radar Feed // Stream
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  isFraud ? "bg-red-500/20 text-red-400" : "bg-emerald-500/20 text-emerald-300"
                }`}
              >
                Score: {fraudSimState.score.toFixed(2)}
              </span>
            </div>

            {/* Radar Animation Box */}
            <div className="flex items-center gap-3 bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-500/20 mb-2">
              <div className="relative h-12 w-12 flex items-center justify-center shrink-0">
                <span
                  className={`absolute inset-0 rounded-full border animate-ping ${
                    isFraud ? "border-red-400/60" : "border-emerald-400/50"
                  }`}
                />
                <span
                  className={`absolute inset-1.5 rounded-full border ${
                    isFraud ? "border-red-400" : "border-emerald-400/60"
                  }`}
                />
                <span
                  className={`relative h-2.5 w-2.5 rounded-full ${
                    isFraud ? "bg-red-400" : "bg-emerald-400"
                  }`}
                />
              </div>

              <div className="flex-1 text-left">
                <p
                  className={`text-xs font-bold truncate ${
                    isFraud ? "text-red-400" : "text-emerald-300"
                  }`}
                >
                  {fraudSimState.action}
                </p>
                <div className="flex justify-between items-center text-[10px] text-slate-400 mt-0.5">
                  <span>Latency: {fraudSimState.latency}</span>
                  <span className="text-cyan-300 font-bold">+25% PR AUC</span>
                </div>
              </div>
            </div>

            {/* Interactive Threat Injection Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleInjectTransaction("fraud")}
                className="bg-red-600/30 hover:bg-red-600/40 border border-red-500/50 text-red-300 font-bold text-[10px] py-1.5 px-2 rounded-lg transition active:scale-95 cursor-pointer flex items-center justify-center gap-1"
              >
                <span>🚨</span>
                <span>Inject Fraud</span>
              </button>
              <button
                type="button"
                onClick={() => handleInjectTransaction("safe")}
                className="bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-bold text-[10px] py-1.5 px-2 rounded-lg transition active:scale-95 cursor-pointer flex items-center justify-center gap-1"
              >
                <span>🛡️</span>
                <span>Normal Stream</span>
              </button>
            </div>
          </div>

          {/* Algorithm Mode Switcher */}
          <div className="flex gap-1.5 mb-3">
            {(["fastapi", "forest", "xgboost"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => {
                  playPop();
                  setAlgoMode(mode);
                }}
                className={`flex-1 text-[9px] font-bold py-1 px-1.5 rounded transition cursor-pointer uppercase ${
                  algoMode === mode
                    ? "bg-emerald-500 text-black shadow-sm"
                    : "bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-900/40"
                }`}
              >
                {mode === "fastapi" ? "FastAPI Live" : mode === "forest" ? "Isolation Forest" : "XGBoost"}
              </button>
            ))}
          </div>

          {/* Action Button & Reactions */}
          <div className="pt-2 border-t border-emerald-500/30 flex flex-wrap items-center justify-between gap-2">
            {slide.repo && (
              <a
                href={slide.repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  playPop();
                }}
                className="rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs px-3.5 py-1.5 flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.5)] active:scale-95 transition"
              >
                <span>View GitHub repo</span>
                <span>↗</span>
              </a>
            )}

            <div className="flex items-center gap-1.5">
              {reactions.map((r, i) => (
                <button
                  key={r.emoji}
                  type="button"
                  onClick={(e) => handleReact(e, i)}
                  className={`inline-flex items-center gap-1 border rounded-full px-2.5 py-1 text-[11px] font-bold cursor-pointer transition active:scale-90 ${
                    r.clicked
                      ? "bg-emerald-500 border-emerald-400 text-black"
                      : "bg-emerald-950/40 border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/50"
                  }`}
                >
                  <span>{r.emoji}</span>
                  <span>{r.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // SHOWCASE 3: LUNG CANCER AI (CLINICAL BIOMARKER DIAGNOSTIC SUITE & IEEE PAPER)
  const patientData = {
    LUAD: {
      subheading: "Lung Adenocarcinoma Subtype",
      accuracy: "98.32% Multimodal Confidence",
      shapDrivers: [
        { gene: "EGFR", value: 0.42 },
        { gene: "NKX2.1", value: 0.35 },
      ],
      ctFeatures: "Upper lobe ground glass nodule density 0.88",
    },
    LUSC: {
      subheading: "Lung Squamous Cell Carcinoma Subtype",
      accuracy: "97.80% Multimodal Confidence",
      shapDrivers: [
        { gene: "TP63", value: 0.48 },
        { gene: "SOX2", value: 0.39 },
      ],
      ctFeatures: "Central cavitary bronchial lesion localization",
    },
    Normal: {
      subheading: "Non Malignant Control Sample",
      accuracy: "99.10% Normal Baseline",
      shapDrivers: [
        { gene: "Baseline Genomics", value: 0.08 },
        { gene: "Clean Parenchyma", value: 0.05 },
      ],
      ctFeatures: "Clear lung parenchyma with zero nodular density",
    },
  };

  const currentPatient = patientData[patientCase];

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto select-none text-left">
      <div className="absolute inset-0 translate-y-2 translate-x-1.5 bg-teal-500/20 rounded-2xl blur-xl pointer-events-none" />

      <div className="relative rounded-2xl bg-[#091519] border-2 border-teal-500/40 p-4 sm:p-5 shadow-2xl backdrop-blur-2xl text-slate-100 font-mono">
        {/* IEEE Research Header */}
        <div className="flex items-center justify-between pb-3 border-b border-teal-500/30 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="text-base">🧬</span>
            <span className="text-[11px] font-bold text-teal-300 uppercase">
              Clinical AI Lab // IEEE ICCDS 2025
            </span>
          </div>
          <span className="text-[10px] font-bold bg-amber-500/20 border border-amber-400/40 text-amber-300 px-2 py-0.5 rounded-full">
            1st AUTHOR
          </span>
        </div>

        {/* Project Title & Description */}
        <div className="mb-3">
          <h4 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            {slide.name}
          </h4>
          <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed">
            {slide.description}
          </p>
        </div>

        {/* Interactive Patient Case Selector */}
        <div className="mb-3">
          <p className="text-[10px] font-mono text-teal-300 font-bold uppercase tracking-wider mb-1.5">
            Select Patient Case Study
          </p>
          <div className="grid grid-cols-3 gap-1.5">
            {(["LUAD", "LUSC", "Normal"] as const).map((caseName) => (
              <button
                key={caseName}
                type="button"
                onClick={() => {
                  playPop();
                  setPatientCase(caseName);
                }}
                className={`p-1.5 rounded-lg border text-center transition cursor-pointer active:scale-95 ${
                  patientCase === caseName
                    ? "bg-teal-500/30 border-teal-400 text-white shadow-sm font-bold"
                    : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-400"
                }`}
              >
                <p className="text-[10px] font-bold">{caseName}</p>
                <p className="text-[9px] text-teal-300 font-mono">Sample</p>
              </button>
            ))}
          </div>
        </div>

        {/* Dual Modality Diagnostic Visualizer */}
        <div className="bg-black/70 rounded-xl p-3 border border-teal-500/30 mb-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white">{currentPatient.subheading}</span>
            <span className="text-[10px] font-bold text-yellow-300 font-mono">
              {currentPatient.accuracy}
            </span>
          </div>

          {/* Modality Tabs */}
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => {
                playPop();
                setActiveModality("ct");
              }}
              className={`flex-1 text-[10px] font-bold py-1 px-2 rounded transition cursor-pointer ${
                activeModality === "ct"
                  ? "bg-teal-500 text-black"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              🔬 CT Slices (DenseNet121)
            </button>
            <button
              type="button"
              onClick={() => {
                playPop();
                setActiveModality("genomics");
              }}
              className={`flex-1 text-[10px] font-bold py-1 px-2 rounded transition cursor-pointer ${
                activeModality === "genomics"
                  ? "bg-teal-500 text-black"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              🧬 RNA seq (SHAP)
            </button>
          </div>

          {/* Modality Content Preview */}
          {activeModality === "ct" ? (
            <div className="bg-teal-950/20 p-2 rounded border border-teal-500/20 text-xs">
              <p className="text-slate-300 text-[11px]">{currentPatient.ctFeatures}</p>
              <div className="flex justify-between items-center text-[10px] text-teal-300 font-bold mt-1">
                <span>Grad CAM Localization</span>
                <span>98.32% Fused Accuracy</span>
              </div>
            </div>
          ) : (
            <div className="bg-teal-950/20 p-2 rounded border border-teal-500/20 space-y-1.5 text-xs">
              {currentPatient.shapDrivers.map((driver) => (
                <div key={driver.gene} className="space-y-0.5">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-white font-bold">{driver.gene} Expression</span>
                    <span className="text-teal-300 font-mono">+{driver.value} SHAP</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-teal-400"
                      style={{ width: `${driver.value * 180}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DOI Barcode & Citation */}
        <div className="text-center pb-2 text-[10px] font-mono text-slate-400">
          DOI: 10.1109/ICCDS.2025.11209732 · Peer Reviewed Publication
        </div>

        {/* Action Button & Reactions */}
        <div className="pt-2 border-t border-teal-500/30 flex flex-wrap items-center justify-between gap-2">
          {slide.repo && (
            <a
              href={slide.repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                playPop();
              }}
              className="rounded-full bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-xs px-3.5 py-1.5 flex items-center gap-1.5 shadow-lg active:scale-95 transition"
            >
              <span>View IEEE Paper</span>
              <span>↗</span>
            </a>
          )}

          <div className="flex items-center gap-1.5">
            {reactions.map((r, i) => (
              <button
                key={r.emoji}
                type="button"
                onClick={(e) => handleReact(e, i)}
                className={`inline-flex items-center gap-1 border rounded-full px-2.5 py-1 text-[11px] font-bold cursor-pointer transition active:scale-90 ${
                  r.clicked
                    ? "bg-teal-600 border-teal-500 text-white"
                    : "bg-white/10 border-white/15 text-slate-200 hover:bg-white/20"
                }`}
              >
                <span>{r.emoji}</span>
                <span>{r.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

