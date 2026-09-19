"use client";

export function SparkleStar({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <span
      className={`inline-block select-none pointer-events-none text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] animate-[gz-spin-star_6s_ease-in-out_infinite] ${className}`}
      style={style}
    >
      ✦
    </span>
  );
}

export function WashiTape({ className = "", color = "yellow" }: { className?: string; color?: "yellow" | "pink" | "cyan" }) {
  const colors = {
    yellow: "bg-yellow-300/85",
    pink: "bg-pink-400/85",
    cyan: "bg-cyan-300/85",
  };
  return (
    <span
      aria-hidden="true"
      className={`absolute h-4 w-14 shadow-sm select-none pointer-events-none -rotate-6 backdrop-blur-[1px] ${colors[color]} ${className}`}
      style={{
        clipPath: "polygon(0 5%, 95% 0, 100% 95%, 5% 100%)",
      }}
    />
  );
}

export function StickerBadge({
  text,
  color = "yellow",
  rotate = -3,
  className = "",
}: {
  text: string;
  color?: "yellow" | "pink" | "cyan" | "lime" | "white";
  rotate?: number;
  className?: string;
}) {
  const styles = {
    yellow: "gz-sticker-yellow",
    pink: "gz-sticker-pink",
    cyan: "gz-sticker-cyan",
    lime: "gz-sticker-lime",
    white: "gz-sticker-white",
  };

  return (
    <div
      className={`relative inline-flex items-center px-3 py-1 text-xs font-black rounded-xs border-2 border-black shadow-lg uppercase select-none ${styles[color]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {text}
    </div>
  );
}
