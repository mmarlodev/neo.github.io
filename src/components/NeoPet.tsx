import { LogoMark } from "./Logo";

interface NeoPetProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { body: "h-28 w-24", eye: "h-4 w-2.5", logo: "h-5 w-5" },
  md: { body: "h-40 w-32", eye: "h-6 w-3.5", logo: "h-7 w-7" },
  lg: { body: "h-56 w-44", eye: "h-8 w-5", logo: "h-9 w-9" },
};

/**
 * CSS-rendered Neo desktop companion — a soft glowing presence
 * with the signature white sparkle identity.
 */
export function NeoPet({ className = "", size = "md" }: NeoPetProps) {
  const s = sizes[size];
  return (
    <div className={`relative ${className}`}>
      {/* Ambient glow */}
      <div className="animate-glow absolute -inset-10 rounded-full bg-white/[0.07] blur-3xl" />

      {/* Floating sparkles */}
      <LogoMark className={`animate-drift absolute -left-10 top-2 ${s.logo}`} />
      <LogoMark className={`animate-drift absolute -right-9 top-10 opacity-70 [animation-delay:-5s] ${s.logo}`} />
      <LogoMark className={`animate-drift absolute -top-8 left-8 opacity-50 [animation-delay:-9s] ${s.logo.replace("h-", "h-").replace("w-", "w-")}`} />

      {/* Body */}
      <div
        className={`animate-float relative ${s.body} rounded-[46%_46%_42%_42%/52%_52%_48%_48%] border border-white/15 bg-gradient-to-b from-ink-700 via-ink-800 to-ink-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_24px_60px_-20px_rgba(0,0,0,0.8)]`}
      >
        {/* Specular highlight */}
        <div className="absolute left-[18%] top-[10%] h-[18%] w-[34%] rounded-full bg-white/25 blur-md" />
        {/* Eyes */}
        <div className="absolute inset-x-0 top-[38%] flex justify-center gap-[22%]">
          <span className={`animate-blink ${s.eye} rounded-full bg-fog-100 shadow-[0_0_10px_rgba(255,255,255,0.6)]`} />
          <span className={`animate-blink ${s.eye} rounded-full bg-fog-100 shadow-[0_0_10px_rgba(255,255,255,0.6)]`} />
        </div>
        {/* Smile */}
        <div className="absolute bottom-[22%] left-1/2 h-[10%] w-[26%] -translate-x-1/2 rounded-b-full border-b-2 border-white/50" />
      </div>
    </div>
  );
}
