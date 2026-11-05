"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const Playground: React.FC = () => {
  // Claims Agent Simulation State
  const [pipelineState, setPipelineState] = useState<"idle" | "running" | "extracted">("idle");

  // TradeShield Simulator State
  const [anomalyScenario, setAnomalyScenario] = useState<"clean" | "suspicious" | "attack">("clean");

  const runClaimsTest = () => {
    setPipelineState("running");
    setTimeout(() => {
      setPipelineState("extracted");
    }, 1200);
  };

  return (
    <section id="lab" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-300">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block">
            06 / INTERACTIVE LAB &amp; SIMULATORS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-neutral-900 mt-1">
            Live System Simulators.
          </h2>
        </div>
        <p className="text-sm text-neutral-600 max-w-md font-sans">
          Test interactive prototypes of my multi-agent PII redaction pipeline and real-time fraud scoring models.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Simulator 1: Claims Agent Pipeline */}
        <div className="bg-white rounded-3xl border border-neutral-300 p-8 space-y-6 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-3 border-b border-neutral-200">
              <span>SIMULATOR 01 / CLAIMS AGENT</span>
              <span className="text-orange-600 font-bold">Multi-Agent RAG</span>
            </div>

            <h4 className="text-xl font-bold font-serif text-neutral-900">
              Live PII Masking &amp; Field Extraction Pipeline
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
              Click below to pass a messy claim document through our four pipeline stages: Ingest &amp; Mask PII → Extract 15 Fields → LLM Validation Gate → Auto-Triage Queue.
            </p>

            {/* Pipeline Stage Visualizer */}
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">1. Ingest Raw PDF &amp; Mask PII</span>
                <span className={pipelineState !== "idle" ? "text-emerald-600 font-bold" : "text-neutral-400"}>
                  {pipelineState === "idle" ? "○ Pending" : "✓ 100% Redacted"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">2. Extract 15 Structured Fields</span>
                <span className={pipelineState === "extracted" ? "text-emerald-600 font-bold" : pipelineState === "running" ? "text-amber-500 animate-pulse font-bold" : "text-neutral-400"}>
                  {pipelineState === "extracted" ? "✓ 9/9 Validated" : pipelineState === "running" ? "⟳ Parsing..." : "○ Pending"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">3. LLM Confidence Gate</span>
                <span className={pipelineState === "extracted" ? "text-emerald-600 font-bold" : "text-neutral-400"}>
                  {pipelineState === "extracted" ? "✓ Passed (0.94)" : "○ Pending"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">4. Auto Triage Routing</span>
                <span className={pipelineState === "extracted" ? "text-blue-600 font-bold" : "text-neutral-400"}>
                  {pipelineState === "extracted" ? "⚡ Auto-Approved" : "○ Pending"}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={runClaimsTest}
              className="w-full py-3 rounded-full bg-neutral-900 hover:bg-black text-white font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
            >
              {pipelineState === "running" ? "Running Agent Pipeline..." : "⚡ Run Live Extraction Test"}
            </button>
            <div className="text-[11px] font-mono text-neutral-400 text-center">
              “80% auto-routed • 20% ambiguous fields flagged for human review”
            </div>
          </div>
        </div>

        {/* Simulator 2: TradeShield Anomaly Scoring */}
        <div className="bg-white rounded-3xl border border-neutral-300 p-8 space-y-6 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-3 border-b border-neutral-200">
              <span>SIMULATOR 02 / TRADESHIELD</span>
              <span className="text-blue-600 font-bold">FastAPI &lt; 1s Latency</span>
            </div>

            <h4 className="text-xl font-bold font-serif text-neutral-900">
              Real-Time Behavioral Fraud Scoring
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
              Test how sequence anomaly detection flags slow-burn transfers that simple logistic regression baselines miss.
            </p>

            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              <button
                onClick={() => setAnomalyScenario("clean")}
                className={`py-2 px-3 rounded-xl border transition-all cursor-pointer ${
                  anomalyScenario === "clean"
                    ? "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold"
                    : "bg-neutral-50 border-neutral-200 text-neutral-600"
                }`}
              >
                Normal Flow
              </button>
              <button
                onClick={() => setAnomalyScenario("suspicious")}
                className={`py-2 px-3 rounded-xl border transition-all cursor-pointer ${
                  anomalyScenario === "suspicious"
                    ? "bg-amber-50 border-amber-500 text-amber-800 font-bold"
                    : "bg-neutral-50 border-neutral-200 text-neutral-600"
                }`}
              >
                Spaced Transfers
              </button>
              <button
                onClick={() => setAnomalyScenario("attack")}
                className={`py-2 px-3 rounded-xl border transition-all cursor-pointer ${
                  anomalyScenario === "attack"
                    ? "bg-red-50 border-red-500 text-red-800 font-bold"
                    : "bg-neutral-50 border-neutral-200 text-neutral-600"
                }`}
              >
                Account Takeover
              </button>
            </div>

            {/* Readout */}
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 font-mono text-xs space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">RISK TIER:</span>
                <span
                  className={`font-bold uppercase ${
                    anomalyScenario === "clean"
                      ? "text-emerald-600"
                      : anomalyScenario === "suspicious"
                      ? "text-amber-600"
                      : "text-red-600"
                  }`}
                >
                  {anomalyScenario === "clean"
                    ? "Tier 1: Low Risk (0.04)"
                    : anomalyScenario === "suspicious"
                    ? "Tier 2: Review (0.61)"
                    : "Tier 4: Auto-Block (0.97)"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">ACTION TAKEN:</span>
                <span className="text-neutral-800 font-bold">
                  {anomalyScenario === "clean"
                    ? "Instant Settlement Permitted"
                    : anomalyScenario === "suspicious"
                    ? "Route to Risk Desk Queue"
                    : "Immediate Account Freeze Triggered"}
                </span>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-neutral-400 text-center">
            Sub-second score calculated over multi-step transaction history
          </div>
        </div>
      </div>
    </section>
  );
};
