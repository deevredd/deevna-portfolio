"use client";

import React, { useState } from "react";

export const WidescreenWorks: React.FC = () => {
  // Claims Agent interactive demo
  const [activeClaimTab, setActiveClaimTab] = useState<"extracted" | "raw" | "validation">("extracted");

  // Kindle stroke straightening interactive toggle
  const [straightenStroke, setStraightenStroke] = useState(true);

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 sm:px-12 pt-20 pb-28 border-t border-neutral-300">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-[0.2em] block">
            SELECTED ENGINEERING ARCHITECTURE • 2024 — 2026
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold font-serif text-neutral-900 mt-2 tracking-tight">
            Engineered under real-world constraints.
          </h2>
        </div>
        <p className="text-sm text-neutral-600 max-w-md font-sans leading-relaxed">
          Problem, approach, outcome, and reflections. Hard numbers only where they were measured and verified in production.
        </p>
      </div>

      <div className="space-y-24">
        {/* ========================================================================= */}
        {/* CASE STUDY 01: CLAIMS AGENT (MULTI-AGENT PII MASKING & TRIAGE)             */}
        {/* ========================================================================= */}
        <article className="case-study-hero bg-white rounded-3xl border border-neutral-300 p-6 sm:p-12 lg:p-14 space-y-10">
          
          {/* Metadata Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-orange-50 text-orange-700 font-bold border border-orange-200 uppercase tracking-wider">
                01 / AI/ML • MULTI-AGENT ARCHITECTURE
              </span>
              <span className="text-neutral-400">DATA GOVERNANCE</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-500">
              <span>STACK: Python • RAG • FastEmbed • PII Redaction</span>
              <span className="text-emerald-600 font-bold">STATUS: PRODUCTION READY</span>
            </div>
          </div>

          {/* Title & Headline Impact Readout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 leading-[1.15]">
                Claims Agent: Turning Messy Claim PDFs into Auto-Routed Decisions
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base font-sans font-light">
                Claims adjusters drown in unstructured PDFs, scans, and emails containing sensitive policyholder PII. Designed an agentic multi-stage pipeline (Ingest &amp; Mask PII → Extract → Validate → Route → Queue) that automatically extracts 15+ structured fields with an LLM validation gate so ambiguous damage fields get routed to human reviewers instead of failing silently.
              </p>
            </div>

            {/* 3 Verified Production KPI Cards */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3.5 font-mono">
              <div className="flex justify-between items-baseline border-b border-neutral-200 pb-2.5">
                <span className="text-xs text-neutral-500">Auto-Triaged Volume:</span>
                <span className="text-xl font-bold text-emerald-600">80%</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-neutral-200 pb-2.5">
                <span className="text-xs text-neutral-500">Structured Fields:</span>
                <span className="text-xl font-bold text-blue-600">15+ Fields</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-neutral-500">PII Redaction:</span>
                <span className="text-xl font-bold text-neutral-900">100% Zero Leak</span>
              </div>
            </div>
          </div>

          {/* Widescreen Titanium Browser Mockup */}
          <div className="rounded-2xl overflow-hidden border border-neutral-300 shadow-xl bg-[#0b0d14]">
            {/* Browser Header Chrome */}
            <div className="px-5 py-3 bg-[#131622] border-b border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-[11px] text-neutral-400">agent.claims.internal/orchestrator/v2</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                  PII MASKED
                </span>
                <span className="text-neutral-500 font-mono text-[10px]">1 HUMAN GATE</span>
              </div>
            </div>

            {/* Simulated Live Claims Dashboard */}
            <div className="p-6 sm:p-10 text-white font-mono text-xs space-y-6">
              
              {/* Tab Selector inside mock */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveClaimTab("extracted")}
                    className={`px-3 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                      activeClaimTab === "extracted"
                        ? "bg-white/15 text-white font-bold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Structured Schema (9/9)
                  </button>
                  <button
                    onClick={() => setActiveClaimTab("raw")}
                    className={`px-3 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                      activeClaimTab === "raw"
                        ? "bg-white/15 text-white font-bold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Raw Masked Text
                  </button>
                  <button
                    onClick={() => setActiveClaimTab("validation")}
                    className={`px-3 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                      activeClaimTab === "validation"
                        ? "bg-white/15 text-white font-bold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    LLM Gate Confidence
                  </button>
                </div>

                <span className="text-emerald-400 text-[11px] font-bold hidden sm:inline">
                  ⚡ Pipeline Latency: 1.4s
                </span>
              </div>

              {/* Dynamic View based on Tab */}
              {activeClaimTab === "extracted" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-neutral-400 text-[10px] block font-bold">POLICY NUMBER</span>
                    <strong className="text-white text-sm">POL-89412-X</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-neutral-400 text-[10px] block font-bold">CLAIMANT NAME</span>
                    <strong className="text-cyan-300 text-sm">J*** D** [MASKED]</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-neutral-400 text-[10px] block font-bold">DAMAGE CLASSIFICATION</span>
                    <strong className="text-amber-300 text-sm">Front Bumper Impact</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-neutral-400 text-[10px] block font-bold">ESTIMATED REPAIR COST</span>
                    <strong className="text-emerald-400 text-sm">$3,420.00 USD</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-neutral-400 text-[10px] block font-bold">COVERAGE APPLICABLE</span>
                    <strong className="text-white text-sm">Comprehensive Gold (0 Ded)</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-neutral-400 text-[10px] block font-bold">TRIAGE ROUTING</span>
                    <strong className="text-blue-400 text-sm">Fast-Track Auto Settlement</strong>
                  </div>
                </div>
              )}

              {activeClaimTab === "raw" && (
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-neutral-300 space-y-2 leading-relaxed">
                  <p>
                    <span className="text-emerald-400">[PII_FILTER_PASS]</span>: Sanitized SSN (***-**-6712) and phone number (+1-***-***-8841).
                  </p>
                  <p className="text-neutral-400">
                    "Insured was operating vehicle on Highway 101 when sudden debris struck front bumper area causing sensor fracture. Estimate received from certified repair partner on Oct 24th for $3,420.00."
                  </p>
                </div>
              )}

              {activeClaimTab === "validation" && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-neutral-400">Damage Description vs. Repair Line Items:</span>
                    <span className="text-emerald-400 font-bold">0.96 Confidence (Pass)</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-neutral-400">Policyholder Active Coverage Verification:</span>
                    <span className="text-emerald-400 font-bold">1.00 Active (Pass)</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-neutral-400">Threshold Ambiguity Gate:</span>
                    <span className="text-cyan-300 font-bold">Clear for Auto-Route (Queue 1)</span>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* 4-Stage Architectural Strip (Samay Maurya Methodology) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <span className="text-neutral-400 block text-[10px] font-bold">STAGE 01</span>
              <strong className="text-neutral-900 font-sans font-bold text-sm">Friction Audit</strong>
              <p className="text-neutral-600 text-xs mt-1 font-sans font-light leading-relaxed">
                Adjusters spent 30+ minutes manually redacting SSNs and cross-checking damaged parts against coverage PDFs.
              </p>
            </div>
            <div>
              <span className="text-neutral-400 block text-[10px] font-bold">STAGE 02</span>
              <strong className="text-neutral-900 font-sans font-bold text-sm">Ingest &amp; Masking</strong>
              <p className="text-neutral-600 text-xs mt-1 font-sans font-light leading-relaxed">
                Zero-leak regex + named entity recognition sanitizes policyholder records before LLM prompt transmission.
              </p>
            </div>
            <div>
              <span className="text-neutral-400 block text-[10px] font-bold">STAGE 03</span>
              <strong className="text-neutral-900 font-sans font-bold text-sm">Validation Gate</strong>
              <p className="text-neutral-600 text-xs mt-1 font-sans font-light leading-relaxed">
                Cross-field schema consistency checker flags ambiguous repair anomalies directly to human adjuster desks.
              </p>
            </div>
            <div>
              <span className="text-emerald-600 block text-[10px] font-bold">STAGE 04</span>
              <strong className="text-emerald-600 font-sans font-bold text-sm">80% Auto-Triage</strong>
              <p className="text-neutral-600 text-xs mt-1 font-sans font-light leading-relaxed">
                4 out of 5 clean claims route straight to settlement queues without human intervention.
              </p>
            </div>
          </div>

        </article>


        {/* ========================================================================= */}
        {/* CASE STUDY 02: AMAZON SDE (ALEXA CALENDAR DSAR & KINDLE SCRIBE NATIVE C++)  */}
        {/* ========================================================================= */}
        <article className="case-study-hero bg-white rounded-3xl border border-neutral-300 p-6 sm:p-12 lg:p-14 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 font-bold border border-amber-300 uppercase tracking-wider">
                02 / AMAZON • BACKEND &amp; ON-DEVICE SYSTEMS
              </span>
              <span className="text-neutral-400">DISTRIBUTED SCALE</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-500">
              <span>ROLE: SDE (Alexa Calendar &amp; Kindle Scribe)</span>
              <span className="text-emerald-600 font-bold">SHIPPED TO 50M+ USERS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 leading-[1.15]">
                Amazon: Alexa Compliance (50M+ Users) &amp; Kindle Scribe Native C++
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base font-sans font-light">
                Led end-to-end Data Subject Access Request (DSAR) compliance onboarding for Alexa Calendar, automating data retrieval and deletion across distributed stores to reduce manual ops by 70%. For Kindle Scribe, engineered Python ETL pipelines converting raw stroke trajectories into feature datasets, then ported the stroke-straightening model to native C++ for dependency-free, on-device real-time inference.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3.5 font-mono">
              <div className="flex justify-between items-baseline border-b border-neutral-200 pb-2.5">
                <span className="text-xs text-neutral-500">Manual Ops Reduction:</span>
                <span className="text-xl font-bold text-[#ff4d2e]">-70% Ops</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-neutral-200 pb-2.5">
                <span className="text-xs text-neutral-500">Kindle Detection Lift:</span>
                <span className="text-xl font-bold text-blue-600">+25% Robustness</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-neutral-500">JDK 17 Upgrades:</span>
                <span className="text-xl font-bold text-neutral-900">15+ Zero Downtime</span>
              </div>
            </div>
          </div>

          {/* Interactive Kindle Scribe & Alexa Widescreen Mockup */}
          <div className="rounded-2xl overflow-hidden border border-neutral-300 shadow-xl bg-[#0d0f17]">
            <div className="px-5 py-3 bg-[#141724] border-b border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-[11px] text-neutral-400">aws.amazon.com/alexa/dsar-pipeline</span>
              </div>
              <span className="text-amber-400 font-bold">50M+ ACTIVE SCALE</span>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white font-mono text-xs">
              
              {/* Alexa Compliance Card */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-neutral-400 font-bold uppercase">ALEXA CALENDAR DSAR ENGINE</span>
                  <span className="text-emerald-400 font-bold">AUDIT READY</span>
                </div>
                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Policy Engine Risk Items:</span>
                    <strong className="text-emerald-400">0 Outstanding (Sole Contributor)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Manual Request Processing Time:</span>
                    <strong className="text-white">Cut from 48h → 14m (-70%)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Service Runtime Migration:</span>
                    <strong className="text-blue-400">JDK 8/11 → 17 (+20% perf)</strong>
                  </div>
                </div>
              </div>

              {/* Kindle Scribe On-Device C++ Simulator */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-neutral-400 font-bold uppercase">KINDLE SCRIBE ON-DEVICE C++</span>
                  <button
                    onClick={() => setStraightenStroke(!straightenStroke)}
                    className="px-2.5 py-1 rounded bg-[#ff9900] text-black font-bold text-[10px] cursor-pointer hover:bg-amber-300"
                  >
                    {straightenStroke ? "Stroke Straightening: ON" : "Raw Stroke: OFF"}
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center min-h-[90px]">
                  {straightenStroke ? (
                    <div className="text-center space-y-1">
                      <span className="font-handwriting text-2xl text-cyan-300">
                        "Real-time stroke calibrated on C++"
                      </span>
                      <span className="text-[10px] text-neutral-500 block font-mono">
                        Native zero-latency edge inference (+25% baseline detection)
                      </span>
                    </div>
                  ) : (
                    <div className="text-center space-y-1 opacity-60">
                      <span className="font-handwriting text-2xl text-neutral-400 line-through">
                        "Raw jittery stylus stroke trajectory"
                      </span>
                      <span className="text-[10px] text-neutral-500 block font-mono">
                        Raw sensor coordinate noise before straightening model
                      </span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

        </article>


        {/* ========================================================================= */}
        {/* CASE STUDY 03: TRADESHIELD (FINTECH ANOMALY DETECTION)                    */}
        {/* ========================================================================= */}
        <article className="case-study-hero bg-white rounded-3xl border border-neutral-300 p-6 sm:p-12 lg:p-14 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 font-bold border border-blue-200 uppercase tracking-wider">
                03 / FINTECH • BEHAVIORAL ANOMALY DETECTION
              </span>
              <span className="text-neutral-400">REAL-TIME FASTAPI</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-500">
              <span>STACK: Python • Scikit-learn • FastAPI • Next.js</span>
              <span className="text-emerald-600 font-bold">24/7 INGESTION</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 leading-[1.15]">
                TradeShield: Catching Fraud Patterns a Logistic Regression Misses
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base font-sans font-light">
                A plain logistic regression flags obvious high-velocity fraud fine, but misses behavioral sequences: the same account making small, spaced-out, plausible-looking transfers that only look wrong in aggregate. Pattern recognition on transaction sequences served via FastAPI delivers sub-second risk tier scoring to operational dashboards.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3.5 font-mono">
              <div className="flex justify-between items-baseline border-b border-neutral-200 pb-2.5">
                <span className="text-xs text-neutral-500">Precision-Recall AUC:</span>
                <span className="text-xl font-bold text-emerald-600">+25% Lift</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-neutral-200 pb-2.5">
                <span className="text-xs text-neutral-500">Scoring Latency:</span>
                <span className="text-xl font-bold text-blue-600">&lt; 1.0s</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-neutral-500">Risk Hierarchy:</span>
                <span className="text-xl font-bold text-neutral-900">4 Tiers</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-white border border-neutral-200">
              <span className="text-emerald-600 block text-[10px] font-bold">TIER 1 (0.04)</span>
              <strong className="text-neutral-900 font-sans font-bold">Low Risk Pass</strong>
              <p className="text-neutral-500 text-[11px] mt-1 font-sans">Normal checkout velocities.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-neutral-200">
              <span className="text-amber-600 block text-[10px] font-bold">TIER 2 (0.48)</span>
              <strong className="text-neutral-900 font-sans font-bold">Review Desk</strong>
              <p className="text-neutral-500 text-[11px] mt-1 font-sans">New IP address or device drift.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-neutral-200">
              <span className="text-orange-600 block text-[10px] font-bold">TIER 3 (0.79)</span>
              <strong className="text-neutral-900 font-sans font-bold">Step-Up Auth</strong>
              <p className="text-neutral-500 text-[11px] mt-1 font-sans">Micro spaced-out sequence anomalies.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-neutral-200">
              <span className="text-red-600 block text-[10px] font-bold">TIER 4 (0.97)</span>
              <strong className="text-neutral-900 font-sans font-bold">Auto-Block</strong>
              <p className="text-neutral-500 text-[11px] mt-1 font-sans">Blacklisted card and credential stuff.</p>
            </div>
          </div>

        </article>

      </div>
    </section>
  );
};
