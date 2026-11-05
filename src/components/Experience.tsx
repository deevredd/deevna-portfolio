"use client";

import React from "react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-300">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block">
            02 / EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-neutral-900 mt-1">
            Shipping systems at scale.
          </h2>
        </div>
        <p className="text-sm text-neutral-600 max-w-md font-sans">
          Proven track record closing out compliance risk for 50M+ users, on-device native C++ inference, and zero-downtime distributed rollouts.
        </p>
      </div>

      <div className="space-y-8">
        {/* Amazon Role */}
        <div className="bg-white rounded-3xl border border-neutral-300 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-200">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold font-sans text-neutral-900">
                  Software Development Engineer
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-mono text-[10px] font-bold">
                  AMAZON
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-500 mt-0.5 block">
                Alexa Calendar &amp; Kindle Scribe • Chennai, IN 🇮🇳
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-neutral-400">
              Jan 2025 — Mar 2026
            </span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed">
            <p>
              • <strong>Kindle Scribe On-Device Inference:</strong> Built Python ETL pipelines converting raw stroke data into per-word feature datasets for handwriting recognition training. Ported the stroke-straightening model to native C++ for dependency-free, real-time on-device inference, boosting detection robustness by 25%.
            </p>
            <p>
              • <strong>Alexa Calendar DSAR Compliance:</strong> Owned end-to-end Data Subject Access Request compliance onboarding for a service supporting 50M+ users. Automated manual data retrieval and deletion pipelines, slashing operational processing time by 70%.
            </p>
            <p>
              • <strong>Audit Cycles &amp; Distributed Scale:</strong> Closed every outstanding policy engine risk item as sole contributor across two corporate audit cycles. Led 15+ JDK 8/11 → 17 service migrations with zero downtime, boosting runtime performance by 20%.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-200 flex flex-wrap gap-2 text-xs font-mono">
            {["Java", "AWS (Lambda, S3, DynamoDB, EC2)", "JDK 17", "CI/CD", "Policy Engine", "Python", "C++"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Agilisium Role */}
        <div className="bg-white rounded-3xl border border-neutral-300 p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-200">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold font-sans text-neutral-900">
                  AI &amp; ML Intern
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 font-mono text-[10px] font-bold">
                  AGILISIUM CONSULTING
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Chennai, IN 🇮🇳</span>
            </div>
            <span className="text-xs font-mono font-bold text-neutral-400">
              Aug 2023 — Oct 2023
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed">
            Architected an enterprise HR intelligence chatbot utilizing NLP and Retrieval-Augmented Generation (RAG) over structured internal repositories, cutting manual ticket query volume by 40%.
          </p>

          <div className="flex flex-wrap gap-2 text-xs font-mono pt-2">
            {["Python", "NLP", "Multi-Agent RAG", "Vector Search"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* REUDE Technologies */}
        <div className="bg-white rounded-3xl border border-neutral-300 p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-200">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold font-sans text-neutral-900">
                  Data &amp; Image Analyst
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-mono text-[10px] font-bold">
                  REUDE TECHNOLOGIES
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Chennai, IN 🇮🇳</span>
            </div>
            <span className="text-xs font-mono font-bold text-neutral-400">
              Sep 2023 — Apr 2024
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed">
            Processed aerial drone sensor acquisitions and 3D point cloud reconstructions, increasing spatial coordinate accuracy by 20% over raw uncalibrated sensor output.
          </p>

          <div className="flex flex-wrap gap-2 text-xs font-mono pt-2">
            {["Drone LiDAR", "Point Cloud Processing", "Spatial Calibration"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
