"use client";

import React, { useEffect, useState } from "react";

export const ScrollProgress: React.FC = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const current = Math.min(100, Math.max(0, Math.round((window.scrollY / total) * 100)));
        setPercent(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-2 text-[10px] font-mono text-neutral-400 select-none pointer-events-none">
      {/* Pencil Icon */}
      <span className="text-xs transform -rotate-45">✏️</span>
      
      {/* Vertical Track Line */}
      <div className="w-[1px] h-24 bg-neutral-300 relative overflow-hidden">
        <div
          className="w-full bg-[#ff4d2e] transition-all duration-150"
          style={{ height: `${percent}%` }}
        />
      </div>

      {/* Percentage */}
      <span className="font-bold text-[9px]">{percent}%</span>
    </div>
  );
};
