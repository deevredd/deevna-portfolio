"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GenZStoryMode from "@/components/GenZStoryMode";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandTerminal from "@/components/CommandTerminal";
import { useGenZ } from "@/context/GenZContext";

export default function Home() {
  const { mode } = useGenZ();
  const isGenZ = mode === "genz";

  return (
    <>
      {isGenZ ? (
        <GenZStoryMode />
      ) : (
        <div className="relative min-h-screen selection:bg-mauve selection:text-crust">
          {/* Ambient Floating Glow Aura */}
          <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div className="absolute top-[10%] left-[15%] h-96 w-96 rounded-full bg-mauve/15 blur-[130px] animate-[pro-float-slow_16s_ease-in-out_infinite]" />
            <div className="absolute top-[35%] right-[10%] h-96 w-96 rounded-full bg-sky/15 blur-[140px] animate-[pro-pulse-glow_12s_ease-in-out_infinite]" />
            <div className="absolute bottom-[20%] left-[25%] h-[420px] w-[420px] rounded-full bg-green/10 blur-[150px] animate-[pro-float-slow_20s_ease-in-out_infinite_reverse]" />
          </div>

          <div className="relative z-10">
            <Header />
            <Hero />
            <main className="mx-auto max-w-6xl px-6 sm:px-10">
              <About />
              <Experience />
              <Projects />
              <Contact />
              <Footer />
            </main>
            <CommandTerminal />
          </div>
        </div>
      )}
    </>
  );
}

