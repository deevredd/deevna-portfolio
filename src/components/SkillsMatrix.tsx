"use client";

import React from "react";

export const SkillsMatrix: React.FC = () => {
  const pillars = [
    {
      title: "Core Languages",
      color: "border-orange-500",
      skills: ["Java", "Python", "C++", "TypeScript", "SQL", "Bash"],
      note: "Primary languages used for distributed backend microservices, on-device native C++ inference, and data pipelines.",
    },
    {
      title: "Data & Applied ML",
      color: "border-blue-500",
      skills: [
        "PyTorch",
        "Scikit-learn",
        "Multi-Agent RAG",
        "SHAP Interpretability",
        "LiDAR Point Cloud Processing",
        "FastEmbed",
        "NLP / LLMs",
      ],
      note: "Architectures for multimodal late fusion, document extraction validation, and sequence anomaly detection.",
    },
    {
      title: "Cloud & Distributed Scale",
      color: "border-emerald-500",
      skills: [
        "AWS (Lambda, S3, DynamoDB, EC2)",
        "Docker",
        "CI/CD Pipelines",
        "Policy Engine",
        "Linux",
        "Microservices",
        "JDK 17",
      ],
      note: "High-throughput compliance infrastructure handling 50M+ users with zero-downtime rolling upgrades.",
    },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-300">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block">
            04 / ARCHITECTURE &amp; CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-neutral-900 mt-1">
            Technical Skills Matrix.
          </h2>
        </div>
        <p className="text-sm text-neutral-600 max-w-md font-sans">
          Classified engineering pillars across backend distributed systems, on-device native models, and cloud compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className={`bg-white rounded-3xl border border-neutral-300 p-8 space-y-6 shadow-sm border-t-4 ${pillar.color}`}
          >
            <div>
              <h3 className="text-lg font-bold font-sans text-neutral-900">{pillar.title}</h3>
              <p className="text-xs text-neutral-500 font-sans mt-1 leading-relaxed">{pillar.note}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {pillar.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-neutral-100 border border-neutral-200 text-xs font-mono font-semibold text-neutral-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
