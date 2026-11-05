"use client";

import React, { useState } from "react";

export const FigmaAiBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"research" | "design" | "deliver">("deliver");

  return (
    <div className="mt-14 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl p-4 border border-black/10 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-lg">✨</span>
          <div>
            <div className="text-xs font-bold text-neutral-900">What can we build together today?</div>
            <div className="text-[11px] text-neutral-400 font-mono">Simon 3.0 • Maximum Effort Systems</div>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs font-mono">
          <button 
            onClick={() => setActiveTab("research")}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              activeTab === "research" ? "bg-blue-50 text-blue-600 font-bold border border-blue-200" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            + Research
          </button>
          <button 
            onClick={() => setActiveTab("design")}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              activeTab === "design" ? "bg-blue-50 text-blue-600 font-bold border border-blue-200" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            Design
          </button>
          <button 
            onClick={() => setActiveTab("deliver")}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              activeTab === "deliver" ? "bg-blue-50 text-blue-600 font-bold border border-blue-200" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            Deliver ⚡
          </button>
        </div>
      </div>
    </div>
  );
};
