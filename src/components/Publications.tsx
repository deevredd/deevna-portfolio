"use client";

import React from "react";

export const Publications: React.FC = () => {
  return (
    <section id="publications" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-300">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block">
            03 / PEER-REVIEWED RESEARCH &amp; PUBLICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-neutral-900 mt-1">
            Applied ML &amp; Healthcare AI.
          </h2>
        </div>
        <p className="text-sm text-neutral-600 max-w-md font-sans">
          First-author published research bridging deep visual neural networks with molecular genomics and clinical statistical fairness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Paper 1: IEEE ICCDS 2025 */}
        <div className="case-study-card bg-white rounded-3xl border border-neutral-300 p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 font-bold border border-blue-200">
                IEEE ICCDS 2025 • 1ST AUTHOR
              </span>
              <span className="text-emerald-600 font-bold">98.32% ACCURACY</span>
            </div>

            <h3 className="text-xl font-bold font-serif text-neutral-900 leading-snug">
              Genomic &amp; Imaging Biomarker Analysis for Lung Cancer Subtyping
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
              Clinicians cannot act on black-box predictions. Engineered a dual-branch late-fusion architecture: DenseNet121 + Grad-CAM extracts spatial visual cues from ~53K LIDC-IDRI CT scans, while Random Forest + SHAP interprets ~798 TCGA RNA-seq samples. Hit 98.32% accuracy and 0.99 AUC across LUAD, LUSC, and Normal.
            </p>

            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 font-mono text-xs space-y-2">
              <div className="flex justify-between text-neutral-500 text-[11px]">
                <span>TOP SHAP BIOMARKERS:</span>
                <span className="text-neutral-800 font-bold">EGFR (94%), TP63 (81%), NKX2.1 (73%)</span>
              </div>
              <div className="flex justify-between text-neutral-500 text-[11px]">
                <span>FUSED MODALITIES:</span>
                <span className="text-neutral-800 font-bold">DenseNet121 (CT) + RNA-seq (512D)</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono">
            <span className="text-neutral-400">IEEE CONFERENCE PROCEEDINGS</span>
            <span className="text-blue-600 font-bold hover:underline cursor-pointer">
              View Citation ↗
            </span>
          </div>
        </div>

        {/* Paper 2: Springer Nature */}
        <div className="case-study-card bg-white rounded-3xl border border-neutral-300 p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 font-bold border border-amber-200">
                SPRINGER NATURE • CHAPTER AUTHOR
              </span>
              <span className="text-amber-700 font-bold">p &lt; 0.001</span>
            </div>

            <h3 className="text-xl font-bold font-serif text-neutral-900 leading-snug">
              Ethnic Disparities in Autism Spectrum Disorder (ASD) Among Toddlers
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
              Traditional screening algorithms underrepresent minority ethnic cohorts, leading to late clinical referrals. Conducted extensive hypothesis testing and supervised classification on behavioral screening indicators, establishing calibrated baselines for equitable pediatric diagnostic frameworks.
            </p>

            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 font-mono text-xs space-y-2">
              <div className="flex justify-between text-neutral-500 text-[11px]">
                <span>SCREENING TOOL:</span>
                <span className="text-neutral-800 font-bold">Q-CHAT-10 Scoring Variance</span>
              </div>
              <div className="flex justify-between text-neutral-500 text-[11px]">
                <span>COHORT FOCUS:</span>
                <span className="text-neutral-800 font-bold">Early Toddler Milestone Delays</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono">
            <span className="text-neutral-400">SPRINGER NATURE PUBLISHING</span>
            <span className="text-amber-700 font-bold hover:underline cursor-pointer">
              View Chapter ↗
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
