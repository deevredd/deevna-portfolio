"use client";

import { useEffect, useState } from "react";
import { liveToasts, SlideToast } from "@/lib/genzSlides";

export function LiveBadge() {
  const [viewers, setViewers] = useState<number>(1420);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.floor(Math.random() * 21) - 10;
        return Math.max(980, prev + delta);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 px-3 py-1 text-white shadow-lg select-none">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
      </span>
      <span className="text-[10px] font-bold uppercase tracking-wider text-white">LIVE</span>
      <span className="text-white/70">·</span>
      <span className="text-[11px] font-bold tabular-nums text-white">
        👁 {viewers.toLocaleString()}
      </span>
    </div>
  );
}

export function LiveToasts() {
  const [toast, setToast] = useState<(SlideToast & { id: number }) | null>(null);

  useEffect(() => {
    let isMounted = true;
    const showToast = () => {
      if (!isMounted) return;
      const item = liveToasts[Math.floor(Math.random() * liveToasts.length)];
      setToast({ ...item, id: Date.now() });

      setTimeout(() => {
        if (isMounted) setToast(null);
      }, 3400);
    };

    const initialTimer = setTimeout(showToast, 3500);
    const interval = setInterval(showToast, 8500);

    return () => {
      isMounted = false;
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!toast) return null;

  return (
    <div className="fixed top-20 sm:top-24 left-3 sm:left-6 z-40 pointer-events-none select-none">
      <div className="flex items-center gap-2.5 bg-black/95 border border-white/20 border-l-4 border-l-pink-500 rounded-r-xl pl-2.5 pr-4 py-2 shadow-2xl max-w-[280px] animate-[slideIn_0.35s_cubic-bezier(0.16,1,0.3,1)]">
        <div className="h-7 w-7 rounded-full bg-pink-500/20 flex items-center justify-center text-sm shrink-0">
          {toast.emoji}
        </div>
        <div className="text-xs text-white min-w-0">
          <span className="font-bold text-pink-300">{toast.user}</span>{" "}
          <span className="text-slate-100 font-medium">{toast.action}</span>
        </div>
      </div>
    </div>
  );
}
