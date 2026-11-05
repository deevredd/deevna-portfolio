"use client";

import React from "react";

export const AboutPhilosophy: React.FC = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Story */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block">
            05 / ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 leading-tight">
            Building systems that hold up under real-world constraints.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-neutral-700 font-sans leading-relaxed">
            <p>
              Hi, I'm Deevna! I build backend systems and ML-driven products that hold up under real-world constraints — whether that's regulatory compliance deadlines, corporate audit cycles, or millions of users hitting a service concurrently.
            </p>
            <p>
              I studied Computer Science Engineering (AI &amp; Data Analytics) at Sri Ramachandra Institute of Higher Education &amp; Research in Chennai. Most of what I know beyond that came from shipping production systems at <strong>Amazon</strong>: closing out compliance risk on a service used by 50M+ people, migrating a stack of microservices with zero downtime, and teaching an on-device native C++ model to read handwriting off a Kindle Scribe.
            </p>
            <p>
              Outside of enterprise services, I like building multi-agent systems that make messy, unstructured data tractable: claims documents, financial fraud sequences, and clinical multimodal biomarkers. My research has been published in <strong>IEEE ICCDS 2025 (First Author)</strong> and <strong>Springer Nature</strong>.
            </p>
          </div>
        </div>

        {/* Right Column: Quick Facts Card in Samay Style */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-neutral-300 p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
            <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest">
              QUICK FACTS
            </span>
            <span className="text-xs font-mono text-emerald-600 font-bold">200 OK</span>
          </div>

          <div className="space-y-4 text-xs font-sans">
            <div className="flex items-start gap-3">
              <span className="text-base">📍</span>
              <div>
                <strong className="text-neutral-900 block font-bold">Location:</strong>
                <span className="text-neutral-600 font-mono">Chennai, India (Open to Remote &amp; Relocation)</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-base">🎓</span>
              <div>
                <strong className="text-neutral-900 block font-bold">Education:</strong>
                <span className="text-neutral-600">
                  B.Tech in Computer Science Engineering (AI &amp; Data Analytics)<br />
                  <span className="text-[11px] text-neutral-400">Sri Ramachandra Institute of Higher Education &amp; Research</span>
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-base">💼</span>
              <div>
                <strong className="text-neutral-900 block font-bold">Experience:</strong>
                <span className="text-neutral-600 font-mono">Software Development Engineer @ Amazon</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-base">🧠</span>
              <div>
                <strong className="text-neutral-900 block font-bold">Specialization:</strong>
                <span className="text-neutral-600 font-mono">Distributed Backend • Applied ML / RAG</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-base">📄</span>
              <div>
                <strong className="text-neutral-900 block font-bold">Publications:</strong>
                <span className="text-neutral-600 font-mono">2x Published (IEEE ICCDS 2025 1st Author &amp; Springer Nature)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
