"use client";

import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/lib/content";
import { useGenZ } from "@/context/GenZContext";

const dotColors = ["bg-mauve", "bg-peach", "bg-sky"];
const borderColors = ["border-mauve/40", "border-peach/40", "border-sky/40"];
const companyColors = ["text-mauve", "text-peach", "text-sky"];

export default function Experience() {
  const { t, genz } = useGenZ();
  return (
    <Section id="experience" num="02" heading={genz ? "Experience (receipts)" : "Experience"}>
      <div className="max-w-2xl space-y-12">
        {experience.map((job, i) => (
          <Reveal key={i} delay={i * 120}>
            <div
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
              }}
              className={`relative pl-7 border-l-2 ${borderColors[i % 3]} group p-4 rounded-r-2xl transition-all duration-300 hover:bg-surface0/30 hover:border-mauve/60`}
            >
              {/* Timeline Dot with pulsing ring */}
              <span className={`absolute -left-[7px] top-5 h-3 w-3 rounded-full ${dotColors[i % 3]} shadow-sm`}>
                {i === 0 && (
                  <span className={`absolute -inset-1 rounded-full ${dotColors[i % 3]} opacity-60 animate-ping`} />
                )}
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-xl font-bold text-white tracking-tight">{t(job.role)}</h3>
                <span className="font-mono text-xs font-bold text-slate-200 whitespace-nowrap">{job.dates}</span>
              </div>

              <p className="mt-1 text-sm font-medium">
                <span className={`font-bold text-base ${companyColors[i % 3]}`}>{job.company}</span>{" "}
                <span className="text-slate-200 font-semibold" style={{ color: "#e2e8f0" }}>
                  · {job.location} {job.flag}
                </span>
              </p>

              <p className="mt-3 text-white text-sm sm:text-base leading-relaxed font-normal" style={{ color: "#ffffff" }}>{t(job.description)}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <li
                    key={tag}
                    className={`rounded-full border border-surface2 bg-mantle/90 px-3 py-1 font-mono text-xs font-medium ${companyColors[i % 3]} hover:border-white/40 hover:scale-105 transition-all duration-200 shadow-xs`}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
