"use client";

export type StoryItem = {
  emoji: string;
  label: string;
  targetId: string;
};

export const defaultStories: StoryItem[] = [
  { emoji: "👋", label: "Hi bestie", targetId: "hero" },
  { emoji: "📖", label: "The lore", targetId: "about" },
  { emoji: "💼", label: "Villain era", targetId: "exp_amazon" },
  { emoji: "🛠️", label: "The toolkit", targetId: "skills" },
  { emoji: "⚡", label: "Projects", targetId: "proj_claims" },
  { emoji: "💬", label: "Connect", targetId: "contact" },
];

export default function GenZStoriesBar({
  onSelect,
  activeId,
}: {
  onSelect: (targetId: string) => void;
  activeId?: string;
}) {
  return (
    <div className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 select-none">
      <div className="flex gap-3 sm:gap-4 overflow-x-auto gz-scrollbar-hidden pl-4 pr-36 sm:pr-48 py-2.5 items-center">
        {defaultStories.map((s) => {
          const isActive = activeId === s.targetId;
          return (
            <button
              key={s.targetId}
              type="button"
              onClick={() => onSelect(s.targetId)}
              className="flex flex-col items-center gap-1 min-w-[56px] sm:min-w-[62px] focus:outline-none group cursor-pointer"
              aria-label={`Jump to ${s.label}`}
            >
              <div
                className={`relative h-12 w-12 sm:h-13 sm:w-13 rounded-full p-[2px] transition-transform duration-200 group-hover:scale-105 group-active:scale-95 ${
                  isActive
                    ? "gz-gradient-ring shadow-[0_0_12px_rgba(244,114,182,0.6)]"
                    : "bg-gradient-to-br from-white/20 to-white/5 group-hover:from-pink-500/50 group-hover:to-purple-500/50"
                }`}
              >
                <div className="h-full w-full rounded-full bg-black p-[2px] flex items-center justify-center">
                  <div className="h-full w-full rounded-full bg-zinc-900 flex items-center justify-center text-xl leading-none">
                    {s.emoji}
                  </div>
                </div>
              </div>
              <span
                className={`text-[10px] sm:text-[11px] font-semibold tracking-tight whitespace-nowrap transition-colors ${
                  isActive ? "text-pink-300 font-bold drop-shadow-sm" : "text-slate-100 group-hover:text-white font-semibold drop-shadow-sm"
                }`}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
