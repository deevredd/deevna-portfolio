"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import type { Copy } from "@/lib/content";

export type SiteMode = "pro" | "genz";

type GenZContextValue = {
  mode: SiteMode;
  genz: boolean;
  ready: boolean;
  toggle: () => void;
  setMode: (mode: SiteMode) => void;
  t: (copy: Copy) => string;
};

const STORAGE_KEY = "deevna_site_mode";

const GenZContext = createContext<GenZContextValue | null>(null);

export function GenZProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<SiteMode>("pro");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === "genz" || saved === "pro") {
          setModeState(saved);
        }
      } catch {
        // Ignore local storage read errors
      }
      setReady(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  const setMode = useCallback((newMode: SiteMode) => {
    setModeState(newMode);
    try {
      window.localStorage.setItem(STORAGE_KEY, newMode);
    } catch {
      // Ignore local storage write errors
    }
  }, []);

  const toggle = useCallback(() => {
    setModeState((prev) => {
      const next: SiteMode = prev === "pro" ? "genz" : "pro";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore local storage write errors
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dataset.mode = mode;
    if (mode === "genz") {
      document.documentElement.classList.add("gz-active");
    } else {
      document.documentElement.classList.remove("gz-active");
    }
  }, [mode]);

  const genz = mode === "genz";

  const t = useCallback((copy: Copy) => (genz ? copy.genz : copy.normal), [genz]);

  const value = useMemo(
    () => ({
      mode,
      genz,
      ready,
      toggle,
      setMode,
      t,
    }),
    [mode, genz, ready, toggle, setMode, t]
  );

  return <GenZContext.Provider value={value}>{children}</GenZContext.Provider>;
}

export function useGenZ() {
  const ctx = useContext(GenZContext);
  if (!ctx) throw new Error("useGenZ must be used within GenZProvider");
  return ctx;
}

