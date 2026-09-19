"use client";

import { useState, useEffect, useRef, useTransition } from "react";
import { useGenZ } from "@/context/GenZContext";
import { contact, experience, projects } from "@/lib/content";
import { playPop, playSparkle } from "@/lib/soundFx";

interface TerminalLine {
  id: string;
  type: "command" | "output" | "error" | "info" | "success";
  text?: string;
  jsx?: React.ReactNode;
}

const COMMAND_SUGGESTIONS = [
  "help",
  "cat resume.md",
  "skills",
  "grep aws",
  "grep rag",
  "projects",
  "experience",
  "contact",
  "genz",
  "clear",
];

export default function CommandTerminal() {
  const { mode, setMode } = useGenZ();
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [, startTransition] = useTransition();

  // Initial welcome message
  useEffect(() => {
    setLines([
      {
        id: "banner-1",
        type: "info",
        text: "Deevna Reddy DevStation Console [Version 2.5.0]",
      },
      {
        id: "banner-2",
        type: "info",
        text: "Type 'help' to view available commands, 'cat resume.md' to inspect career, or 'grep <term>' to search.",
      },
    ]);
  }, []);

  // Global Keyboard Shortcuts (⌘K, Ctrl+K, /, Escape)
  useEffect(() => {
    if (mode === "genz") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        playPop();
        setIsOpen((prev) => !prev);
      } else if (e.key === "/" && !isOpen) {
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (activeTag !== "input" && activeTag !== "textarea") {
          e.preventDefault();
          playPop();
          setIsOpen(true);
        }
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleOpenCustom = () => {
      playPop();
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-terminal", handleOpenCustom);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-terminal", handleOpenCustom);
    };
  }, [isOpen, mode]);

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Scroll to bottom when lines change
  useEffect(() => {
    if (isOpen && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [lines, isOpen]);

  if (mode === "genz") return null;

  const executeCommand = (cmdRaw: string) => {
    const cmd = cmdRaw.trim();
    if (!cmd) return;

    playPop();
    const cmdId = `cmd-${Date.now()}`;
    setHistory((prev) => [...prev, cmd]);
    setHistoryIdx(-1);

    const newLines: TerminalLine[] = [
      { id: cmdId, type: "command", text: `deevna@devstation:~ $ ${cmd}` },
    ];

    const lower = cmd.toLowerCase();
    const parts = lower.split(/\s+/);
    const primary = parts[0];
    const arg = parts.slice(1).join(" ");

    if (primary === "clear" || primary === "cls") {
      setLines([]);
      setInputVal("");
      return;
    }

    if (primary === "exit" || primary === "close" || primary === "quit") {
      setIsOpen(false);
      setInputVal("");
      return;
    }

    if (primary === "help" || primary === "?") {
      newLines.push({
        id: `out-${Date.now()}`,
        type: "output",
        jsx: (
          <div className="space-y-1.5 py-1 text-xs">
            <p className="font-bold text-emerald-400">Available Terminal Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-2 font-mono">
              <div>
                <span className="text-yellow-300 font-bold">cat resume.md</span>
                <span className="text-slate-400 ml-2">Display career summary</span>
              </div>
              <div>
                <span className="text-yellow-300 font-bold">skills</span>
                <span className="text-slate-400 ml-2">Inspect technical stack</span>
              </div>
              <div>
                <span className="text-yellow-300 font-bold">grep &lt;term&gt;</span>
                <span className="text-slate-400 ml-2">Search across all data</span>
              </div>
              <div>
                <span className="text-yellow-300 font-bold">projects</span>
                <span className="text-slate-400 ml-2">List flagship systems</span>
              </div>
              <div>
                <span className="text-yellow-300 font-bold">experience</span>
                <span className="text-slate-400 ml-2">Amazon, Agilisium, REUDE</span>
              </div>
              <div>
                <span className="text-yellow-300 font-bold">contact</span>
                <span className="text-slate-400 ml-2">Email and social channels</span>
              </div>
              <div>
                <span className="text-yellow-300 font-bold">goto &lt;section&gt;</span>
                <span className="text-slate-400 ml-2">Navigate to page section</span>
              </div>
              <div>
                <span className="text-yellow-300 font-bold">genz</span>
                <span className="text-slate-400 ml-2">Switch to Gen Z story mode</span>
              </div>
              <div>
                <span className="text-yellow-300 font-bold">clear</span>
                <span className="text-slate-400 ml-2">Wipe terminal buffer</span>
              </div>
              <div>
                <span className="text-yellow-300 font-bold">exit</span>
                <span className="text-slate-400 ml-2">Close terminal console</span>
              </div>
            </div>
          </div>
        ),
      });
    } else if (lower === "cat resume.md" || primary === "resume") {
      playSparkle();
      newLines.push({
        id: `out-${Date.now()}`,
        type: "output",
        jsx: (
          <div className="space-y-3 py-2 text-xs font-mono border-l-2 border-emerald-400 pl-3">
            <div>
              <p className="text-sm font-black text-white">DEEVNA REDDY</p>
              <p className="text-emerald-400">Software Development Engineer · Backend & Machine Learning</p>
              <p className="text-slate-400">Chennai, IN · deevnared@gmail.com · github.com/deevredd</p>
            </div>

            <div>
              <p className="text-yellow-300 font-bold uppercase tracking-wider">EDUCATION</p>
              <p className="text-white font-semibold">B.Tech Computer Science Engineering (AI & Data Analytics)</p>
              <p className="text-slate-400">Sri Ramachandra Institute of Higher Education & Research · 2021 to 2025</p>
            </div>

            <div>
              <p className="text-yellow-300 font-bold uppercase tracking-wider">WORK EXPERIENCE</p>
              <div className="mt-1 space-y-1.5">
                <div>
                  <p className="text-white font-bold">Amazon · Software Development Engineer (Jan 2025 to Mar 2026)</p>
                  <p className="text-slate-300 pl-2">
                    Owned DSAR compliance for Alexa Calendar solo dolo (50M+ users). Cleared every policy engine risk item across two audit cycles. Led 15+ JDK 17 migrations with zero downtime rollouts (+20% runtime performance).
                  </p>
                </div>
                <div>
                  <p className="text-white font-bold">Agilisium Consulting · AI & ML Intern (Aug 2023 to Oct 2023)</p>
                  <p className="text-slate-300 pl-2">
                    Built enterprise HR AI assistant with NLP and RAG knowledge retrieval, cutting manual query workload by 40%.
                  </p>
                </div>
                <div>
                  <p className="text-white font-bold">REUDE Technologies · Data & Image Analyst (Sep 2023 to Apr 2024)</p>
                  <p className="text-slate-300 pl-2">
                    Processed aerial LiDAR point clouds and computer vision datasets, boosting spatial data accuracy by 20%.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-yellow-300 font-bold uppercase tracking-wider">PUBLICATIONS &amp; RESEARCH</p>
              <div className="mt-1 space-y-2">
                <div>
                  <p className="text-white font-semibold">1. IEEE ICCDS 2025 (First Author Publication)</p>
                  <p className="text-slate-300">
                    Multimodal Fusion of CT Slices and TCGA RNA seq Gene Expression for Subtype Classification (98.32% Accuracy, 0.99 ROC AUC). DOI: 10.1109/ICCDS.2025.11209732
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold">2. Springer Nature (Author Publication)</p>
                  <p className="text-slate-300">
                    Analysis of Ethnic Disparities in Autism Spectrum Disorder Among Toddlers · Statistical and machine learning evaluation of demographic screening markers. Published in Springer Nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
      });
    } else if (primary === "skills" || primary === "tech" || primary === "stack") {
      newLines.push({
        id: `out-${Date.now()}`,
        type: "output",
        jsx: (
          <div className="space-y-2 py-1 text-xs">
            <p className="font-bold text-emerald-400">Classified Technical Architecture Matrix:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono">
              <div className="bg-white/5 p-2.5 rounded border border-white/10">
                <p className="text-mauve font-bold">1. Core Languages</p>
                <p className="text-slate-200 mt-1 text-[11px]">Java (JDK 17), Python, C++, TypeScript, SQL, Bash</p>
              </div>
              <div className="bg-white/5 p-2.5 rounded border border-white/10">
                <p className="text-emerald-400 font-bold">2. Data &amp; Applied ML</p>
                <p className="text-slate-200 mt-1 text-[11px]">PyTorch, Scikit learn, Multi Agent RAG, SHAP, LiDAR Point Clouds, PII Redaction</p>
              </div>
              <div className="bg-white/5 p-2.5 rounded border border-white/10">
                <p className="text-sky font-bold">3. Cloud &amp; Scale</p>
                <p className="text-slate-200 mt-1 text-[11px]">AWS (Lambda, S3, DynamoDB), Docker, CI/CD, Policy Engine, Linux</p>
              </div>
            </div>
          </div>
        ),
      });
    } else if (primary === "grep" || primary === "find" || primary === "search") {
      if (!arg) {
        newLines.push({
          id: `out-${Date.now()}`,
          type: "error",
          text: "Usage: grep <keyword> (e.g. grep aws, grep java, grep rag, grep 50m)",
        });
      } else {
        const term = arg.toLowerCase();
        const matches: { context: string; detail: string }[] = [];

        // Search in experience
        experience.forEach((exp) => {
          const combined = `${exp.company} ${exp.role.normal} ${exp.description.normal} ${exp.tags.join(" ")}`.toLowerCase();
          if (combined.includes(term)) {
            matches.push({
              context: `Experience: @ ${exp.company} (${exp.role.normal})`,
              detail: exp.description.normal,
            });
          }
        });

        // Search in projects
        projects.forEach((proj) => {
          const combined = `${proj.name} ${proj.tagline.normal} ${proj.tags.join(" ")} ${proj.approach} ${proj.outcome}`.toLowerCase();
          if (combined.includes(term)) {
            matches.push({
              context: `Project: ${proj.name} (${proj.badge})`,
              detail: `${proj.outcome} | Tags: ${proj.tags.join(", ")}`,
            });
          }
        });

        if (matches.length === 0) {
          newLines.push({
            id: `out-${Date.now()}`,
            type: "error",
            text: `grep: no matches found for '${arg}'`,
          });
        } else {
          newLines.push({
            id: `out-${Date.now()}`,
            type: "output",
            jsx: (
              <div className="space-y-2 py-1 text-xs font-mono">
                <p className="text-emerald-400 font-bold">
                  Found {matches.length} matches for &apos;{arg}&apos;:
                </p>
                {matches.map((m, idx) => (
                  <div key={idx} className="bg-white/5 p-2 rounded border border-white/10">
                    <p className="text-yellow-300 font-bold">{m.context}</p>
                    <p className="text-slate-200 mt-0.5 leading-relaxed">{m.detail}</p>
                  </div>
                ))}
              </div>
            ),
          });
        }
      }
    } else if (primary === "projects" || primary === "ls") {
      newLines.push({
        id: `out-${Date.now()}`,
        type: "output",
        jsx: (
          <div className="space-y-2 py-1 text-xs font-mono">
            <p className="font-bold text-emerald-400">Flagship Systems & Repositories:</p>
            {projects.map((p) => (
              <div key={p.name} className="bg-white/5 p-2 rounded border border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-yellow-300 font-bold">{p.name}</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                    {p.badge}
                  </span>
                </div>
                <p className="text-slate-300 mt-1">{p.tagline.normal}</p>
                <div className="flex flex-wrap gap-2 text-[10px] text-cyan-300 mt-1.5">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-bold bg-white/5 px-2 py-0.5 rounded border border-white/10"
                    >
                      GitHub Repo ↗
                    </a>
                  )}
                  {p.links?.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-bold bg-white/5 px-2 py-0.5 rounded border border-white/10"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ),
      });
    } else if (primary === "experience" || primary === "history") {
      newLines.push({
        id: `out-${Date.now()}`,
        type: "output",
        jsx: (
          <div className="space-y-2 py-1 text-xs font-mono">
            <p className="font-bold text-emerald-400">Career History:</p>
            {experience.map((exp) => (
              <div key={exp.company} className="bg-white/5 p-2 rounded border border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-yellow-300 font-bold">{exp.company}</span>
                  <span className="text-slate-400">{exp.dates}</span>
                </div>
                <p className="text-white font-semibold">{exp.role.normal}</p>
                <p className="text-slate-300 mt-1 leading-relaxed">{exp.description.normal}</p>
              </div>
            ))}
          </div>
        ),
      });
    } else if (primary === "contact" || primary === "whoami") {
      newLines.push({
        id: `out-${Date.now()}`,
        type: "output",
        jsx: (
          <div className="space-y-1.5 py-1 text-xs font-mono">
            <p className="font-bold text-emerald-400">Direct Contact & Channels:</p>
            <p className="text-white">
              Email: <a href={`mailto:${contact.email}`} className="text-yellow-300 underline">{contact.email}</a>
            </p>
            <p className="text-white">
              LinkedIn: <a href="https://linkedin.com/in/deevnareddy" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">linkedin.com/in/deevnareddy ↗</a>
            </p>
            <p className="text-white">
              GitHub: <a href="https://github.com/deevredd" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">github.com/deevredd ↗</a>
            </p>
            <p className="text-white">
              IEEE Paper: <a href="https://ieeexplore.ieee.org/document/11209732" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">10.1109/ICCDS.2025.11209732 ↗</a>
            </p>
            <p className="text-white">
              Springer Paper: <a href="https://link.springer.com/chapter/10.1007/978-3-032-14908-4_37" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">View Springer Chapter ↗</a>
            </p>
          </div>
        ),
      });
    } else if (primary === "goto" || primary === "cd") {
      const target = arg || "top";
      const targetEl = document.getElementById(target);
      if (targetEl) {
        setIsOpen(false);
        targetEl.scrollIntoView({ behavior: "smooth" });
      } else {
        newLines.push({
          id: `out-${Date.now()}`,
          type: "error",
          text: `Section '${target}' not found. Available: about, experience, projects, contact`,
        });
      }
    } else if (primary === "genz" || primary === "vibe" || primary === "tiktok") {
      playSparkle();
      setIsOpen(false);
      startTransition(() => {
        setMode("genz");
      });
      return;
    } else {
      newLines.push({
        id: `out-${Date.now()}`,
        type: "error",
        text: `command not found: ${cmd}. Type 'help' for available commands.`,
      });
    }

    setLines((prev) => [...prev, ...newLines]);
    setInputVal("");
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (history.length > 0 && historyIdx !== -1) {
        const nextIdx = historyIdx + 1;
        if (nextIdx >= history.length) {
          setHistoryIdx(-1);
          setInputVal("");
        } else {
          setHistoryIdx(nextIdx);
          setInputVal(history[nextIdx] || "");
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (current) {
        const match = COMMAND_SUGGESTIONS.find((s) => s.startsWith(current));
        if (match) {
          setInputVal(match);
        }
      }
    }
  };

  return (
    <>
      {/* Floating ⌘K Trigger Button on Desktop/Mobile in Pro Mode */}
      <button
        type="button"
        onClick={() => {
          playPop();
          setIsOpen(true);
        }}
        title="Open Terminal (⌘K)"
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 bg-black/85 hover:bg-black text-white px-3.5 py-2 rounded-full border border-white/20 shadow-2xl backdrop-blur-md transition-transform hover:scale-105 active:scale-95 cursor-pointer font-mono text-xs font-semibold"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-emerald-400 font-bold">CLI</span>
        <span className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] text-slate-300">⌘K</span>
      </button>

      {/* Terminal Modal Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-[fadeIn_0.15s_ease]"
          onClick={() => setIsOpen(false)}
        >
          {/* Terminal Window Box */}
          <div
            className="w-full max-w-3xl h-[520px] max-h-[85vh] rounded-2xl bg-[#0d1117] border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-left font-mono"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Window Titlebar */}
            <div className="bg-[#161b22] px-4 py-3 border-b border-white/10 flex items-center justify-between select-none shrink-0">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="h-3 w-3 rounded-full bg-red-500/90 hover:bg-red-600 transition cursor-pointer"
                  title="Close Terminal"
                />
                <button
                  type="button"
                  onClick={() => setLines([])}
                  className="h-3 w-3 rounded-full bg-yellow-500/90 hover:bg-yellow-600 transition cursor-pointer"
                  title="Clear Buffer"
                />
                <button
                  type="button"
                  onClick={() => {
                    playSparkle();
                    setIsOpen(false);
                    startTransition(() => {
                      setMode("genz");
                    });
                  }}
                  className="h-3 w-3 rounded-full bg-green-500/90 hover:bg-green-600 transition cursor-pointer"
                  title="Launch Gen Z Story Mode"
                />
                <span className="text-slate-400 text-xs font-bold ml-2">
                  deevna@devstation: ~ (zsh)
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="hidden sm:inline text-[11px]">Press ESC to exit</span>
                <span className="bg-white/10 text-slate-300 text-[10px] px-1.5 py-0.5 rounded font-bold">
                  PRO CLI
                </span>
              </div>
            </div>

            {/* Terminal Output Log Area */}
            <div
              className="flex-1 p-4 overflow-y-auto space-y-2 text-slate-100 text-xs gz-scrollbar-hidden select-text"
              onClick={() => inputRef.current?.focus()}
            >
              {lines.map((line) => (
                <div key={line.id}>
                  {line.type === "command" && (
                    <p className="text-emerald-400 font-bold">{line.text}</p>
                  )}
                  {line.type === "info" && (
                    <p className="text-slate-400">{line.text}</p>
                  )}
                  {line.type === "error" && (
                    <p className="text-red-400">{line.text}</p>
                  )}
                  {line.type === "output" && (
                    line.jsx ? line.jsx : <p className="text-slate-200">{line.text}</p>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Quick Command Suggestion Bar */}
            <div className="bg-[#161b22]/70 px-4 py-2 border-t border-white/10 flex items-center gap-1.5 overflow-x-auto gz-scrollbar-hidden shrink-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                Suggestions:
              </span>
              {COMMAND_SUGGESTIONS.slice(0, 6).map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => executeCommand(cmd)}
                  className="bg-white/10 hover:bg-white/20 border border-white/10 text-slate-200 text-[11px] px-2.5 py-0.5 rounded-full transition whitespace-nowrap active:scale-95 cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Interactive Prompt Input Bar */}
            <div className="bg-[#090d13] px-4 py-3 border-t border-white/10 flex items-center gap-2 shrink-0">
              <span className="text-emerald-400 font-bold text-xs select-none">
                deevna@devstation:~ $
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDownInput}
                placeholder="Type a command (e.g. cat resume.md, grep aws, skills)..."
                className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder-slate-500 caret-emerald-400"
              />
              <button
                type="submit"
                onClick={() => executeCommand(inputVal)}
                disabled={!inputVal.trim()}
                className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-black font-extrabold text-[11px] px-3 py-1 rounded transition active:scale-95 cursor-pointer"
              >
                Run
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}