import { Link } from "react-router-dom";

export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return <img src="./assets/neo-logo.png" alt="Neo logo" className={`${className} object-contain`} />;
}

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <LogoMark className="h-7 w-7 transition duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.55)]" />
      <span className={`text-[17px] font-semibold tracking-tight ${light ? "text-fog-100" : "text-ink-950"}`}>
        Neo
      </span>
    </Link>
  );
}
