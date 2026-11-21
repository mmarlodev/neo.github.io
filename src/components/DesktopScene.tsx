import { NeoPet } from "./NeoPet";

/**
 * A stylized CSS desktop environment showcasing Neo in context —
 * editor window, contextual assistant panel, and Neo on the desktop.
 */
export function DesktopScene({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      {/* Wallpaper */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_0%,#1c1c22_0%,#101013_55%,#0a0a0c_100%)]" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.05] blur-3xl" />

      {/* Window chrome */}
      <div className="relative flex items-center gap-2 border-b border-white/[0.07] bg-ink-850/80 px-4 py-3 backdrop-blur">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-4 flex-1 rounded-md bg-white/[0.05] px-3 py-1 text-[11px] text-fog-600">
          project — Visual Studio Code
        </div>
      </div>

      <div className="relative grid grid-cols-5 gap-4 p-5 sm:p-6">
        {/* Code editor */}
        <div className="col-span-3 overflow-hidden rounded-lg border border-white/[0.07] bg-ink-950/80">
          <div className="flex gap-1.5 border-b border-white/[0.05] px-3 py-2">
            {["App.tsx", "styles.css", "README.md"].map((f, i) => (
              <span
                key={f}
                className={`rounded px-2 py-0.5 text-[10px] ${
                  i === 0 ? "bg-white/10 text-fog-100" : "text-fog-600"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
          <div className="space-y-1.5 p-3 font-mono text-[10.5px] leading-relaxed sm:text-[11px]">
            <p><span className="text-[#c792ea]">import</span> <span className="text-fog-300">{"{ useState }"}</span> <span className="text-[#c792ea]">from</span> <span className="text-[#c3e88d]">"react"</span></p>
            <p><span className="text-[#c792ea]">const</span> <span className="text-fog-300">NeoApp</span> <span className="text-fog-500">=</span> <span className="text-[#c792ea]">()</span> <span className="text-fog-500">=&gt;</span> <span className="text-[#c792ea]">&#123;</span></p>
            <p className="pl-4"><span className="text-[#c792ea]">const</span> <span className="text-fog-300">[status, setStatus]</span> <span className="text-fog-500">=</span> <span className="text-fog-300">useState</span><span className="text-fog-500">(</span><span className="text-[#c3e88d]">"listening"</span><span className="text-fog-500">)</span></p>
            <p className="pl-4"><span className="text-[#c792ea]">return</span> <span className="text-fog-500">&lt;</span><span className="text-[#82aaff]">Desktop</span><span className="text-fog-500">&gt;</span></p>
            <p className="pl-8"><span className="text-fog-500">&lt;</span><span className="text-[#82aaff]">NeoPet</span> <span className="text-[#f07178]">state</span><span className="text-fog-500">=</span><span className="text-[#c792ea]">&#123;</span><span className="text-fog-300">status</span><span className="text-[#c792ea]">&#125;</span> <span className="text-fog-500">/&gt;</span></p>
            <p className="pl-4"><span className="text-fog-500">&lt;/</span><span className="text-[#82aaff]">Desktop</span><span className="text-fog-500">&gt;</span></p>
            <p><span className="text-[#c792ea]">&#125;</span></p>
          </div>
        </div>

        {/* Neo assistant panel */}
        <div className="col-span-2 flex flex-col rounded-lg border border-white/[0.07] bg-ink-850/80">
          <div className="flex items-center gap-2 border-b border-white/[0.05] px-3 py-2">
            <img src="./assets/neo-logo.png" alt="" className="h-4 w-4" />
            <span className="text-[11px] font-medium text-fog-300">Neo</span>
            <span className="ml-auto flex items-center gap-1 text-[9px] text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              watching screen
            </span>
          </div>
          <div className="flex-1 space-y-2.5 p-3 text-[10.5px] leading-relaxed sm:text-[11px]">
            <div className="rounded-lg rounded-tl-sm bg-white/[0.07] px-2.5 py-2 text-fog-300">
              I can see you're editing App.tsx.
            </div>
            <div className="rounded-lg rounded-tl-sm bg-white/[0.07] px-2.5 py-2 text-fog-300">
              Want me to explain that hook?
            </div>
            <div className="rounded-lg rounded-tr-sm bg-fog-100 px-2.5 py-2 text-ink-950">
              yes please
            </div>
          </div>
        </div>
      </div>

      {/* Taskbar */}
      <div className="relative flex items-center justify-between border-t border-white/[0.07] bg-ink-850/80 px-4 py-2.5 backdrop-blur">
        <div className="flex items-center gap-3">
          <img src="./assets/neo-logo.png" alt="" className="h-4 w-4 opacity-80" />
          <span className="hidden text-[10px] text-fog-600 sm:block">Search</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-fog-600">
          <span>9:41 AM</span>
          <span className="h-3 w-px bg-white/10" />
          <span>Wi-Fi</span>
        </div>
      </div>

      {/* Neo himself, sitting on the desktop */}
      <NeoPet size="sm" className="absolute bottom-12 right-6 hidden sm:block" />
    </div>
  );
}
