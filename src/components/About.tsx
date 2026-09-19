"use client";

import Section from "./Section";
import Reveal from "./Reveal";
import { about } from "@/lib/content";
import { useGenZ } from "@/context/GenZContext";

export default function About() {
  const { t } = useGenZ();
  return (
    <Section id="about" num="01" heading={t(about.heading)}>
      <Reveal>
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="space-y-5 text-white leading-relaxed text-base sm:text-lg font-normal" style={{ color: "#ffffff" }}>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed" style={{ color: "#ffffff" }}>
                {t(p)}
              </p>
            ))}
            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-surface2 bg-mantle/80 px-6 py-3.5 text-sm font-semibold text-white hover:border-mauve/80 hover:text-mauve hover:shadow-[0_0_20px_rgba(203,166,247,0.2)] hover:scale-105 transition-all duration-200"
              >
                More about my work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M5 12h14m0 0-6-6m6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm rounded-2xl bg-gradient-to-br from-mauve/30 via-pink/20 to-sky/20 p-[1.5px] shadow-xl hover:shadow-[0_0_35px_rgba(203,166,247,0.25)] hover:-translate-y-1 transition-all duration-300">
            <div className="rounded-2xl bg-mantle/95 p-7 space-y-4 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-surface1 pb-3 mb-2">
                <p className="font-mono text-xs font-bold tracking-wider text-slate-100">QUICK FACTS</p>
                <span className="h-2 w-2 rounded-full bg-mauve animate-pulse" />
              </div>
              {[
                ["📍", "Chennai, India"],
                ["🎓", "CS Engineering, AI & Data Analytics"],
                ["💼", "SDE @ Amazon"],
                ["🧠", "Backend · ML / RAG"],
                ["📄", "2x Published (Springer & IEEE)"],
              ].map(([icon, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-3 text-sm text-slate-100 font-medium py-1 hover:translate-x-1.5 transition-transform"
                >
                  <span className="text-xl shrink-0">{icon}</span>
                  <span className="text-slate-100">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categorized Technical Skills Matrix */}
        <div className="mt-12 pt-8 border-t border-surface1/60 space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs font-bold tracking-wider text-slate-200 uppercase">
              Technical Skills &amp; Architecture Matrix
            </p>
            <span className="font-mono text-[11px] text-mauve font-bold">Classified Pillars</span>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-2xl border border-surface2 bg-mantle/80 backdrop-blur-md transition-all hover:border-mauve/50 shadow-sm">
              <span className="text-mauve font-bold text-sm block mb-2">Core Languages</span>
              <p className="text-slate-300 leading-relaxed font-sans text-xs">
                Java, Python, C++, TypeScript, SQL, Bash
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-surface2 bg-mantle/80 backdrop-blur-md transition-all hover:border-green/50 shadow-sm">
              <span className="text-green font-bold text-sm block mb-2">Data &amp; Applied ML</span>
              <p className="text-slate-300 leading-relaxed font-sans text-xs">
                PyTorch, Scikit learn, Multi Agent RAG, SHAP, LiDAR Point Cloud Processing, FastEmbed, NLP
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-surface2 bg-mantle/80 backdrop-blur-md transition-all hover:border-sky/50 shadow-sm">
              <span className="text-sky font-bold text-sm block mb-2">Cloud &amp; Distributed Scale</span>
              <p className="text-slate-300 leading-relaxed font-sans text-xs">
                AWS (Lambda, S3, DynamoDB, EC2), Docker, CI/CD, Policy Engine, Linux, Microservices
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
