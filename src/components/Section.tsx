import type { ReactNode } from "react";

const accents = ["text-mauve", "text-peach", "text-sky", "text-green"];

export default function Section({
  id,
  num,
  heading,
  children,
}: {
  id: string;
  num: string;
  heading: string;
  children: ReactNode;
}) {
  const accent = accents[(parseInt(num, 10) - 1) % accents.length];
  return (
    <section id={id} className="py-20 sm:py-28 scroll-mt-16">
      <div className="flex items-baseline gap-4 mb-10">
        <span className={`font-mono text-sm font-bold ${accent}`}>{num}.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{heading}</h2>
        <span className="hidden sm:block h-px flex-1 bg-surface2/60" />
      </div>
      {children}
    </section>
  );
}
