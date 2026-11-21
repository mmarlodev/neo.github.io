import { useState } from "react";
import { Check, Copy, Download as DownloadIcon, MonitorDown, ExternalLink } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { NeoPet } from "../components/NeoPet";
import { product } from "../data/product";

const requirements = [
  "Windows 10 (64-bit) or later",
  "4 GB RAM minimum",
  "Stable internet connection for AI features",
  "Screen-capture permission for screen understanding",
];

const steps = [
  { title: "Download the installer", body: "Grab the latest Neo release for Windows below." },
  { title: "Run the installer", body: "Double-click the downloaded file and follow the prompts." },
  { title: "Launch Neo", body: "Neo appears on your desktop. Grant screen access only if you want screen understanding." },
];

function DownloadButton({ large = false }: { large?: boolean }) {
  const href = product.downloadUrl || product.releasesUrl;
  const pending = !product.downloadUrl;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-fog-100 font-semibold text-ink-950 transition-all duration-200 hover:bg-white hover:shadow-[0_0_36px_rgba(255,255,255,0.35)] ${
        large ? "px-8 py-4 text-[15px]" : "px-6 py-3 text-[14px]"
      }`}
    >
      <MonitorDown className={large ? "h-5 w-5" : "h-4 w-4"} />
      {pending ? "View latest release" : "Download for Windows"}
      <DownloadIcon className={`transition-transform duration-200 group-hover:translate-y-0.5 ${large ? "h-4 w-4" : "h-3.5 w-3.5"}`} />
    </a>
  );
}

export function Download() {
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText("winget install neo");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-14 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <img src="./assets/neo-logo.png" alt="Neo logo" className="mx-auto h-20 w-20" />
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-fog-100 sm:text-5xl">Get Neo</h1>
            <p className="mx-auto mt-4 max-w-md text-[15.5px] leading-relaxed text-fog-500">
              Your personal AI companion for Windows. Currently v{product.version} — {product.status.toLowerCase()}.
            </p>
            <div className="mt-9 flex justify-center">
              <DownloadButton large />
            </div>
            {!product.downloadUrl && (
              <p className="mx-auto mt-4 flex max-w-md items-center justify-center gap-1.5 text-[12.5px] text-fog-600">
                <ExternalLink className="h-3.5 w-3.5" />
                The Windows installer isn't published yet — this opens the releases page. The link updates automatically once a release ships.
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Windows section */}
      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12.5px] text-fog-500">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                    <path d="M3 5.5 10.5 4.4v7.1H3V5.5Zm0 13 7.5 1.1v-7.2H3v6.1Zm8.5-13L21 3v8.5h-9.5V5.5Zm0 13.5V12.5H21V21l-9.5-1.5Z" />
                  </svg>
                  Windows
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-fog-100 sm:text-3xl">
                  Neo for Windows
                </h2>
                <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-fog-500">
                  Neo runs natively on Windows desktops. macOS and Linux support are on the roadmap.
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
                  {[
                    ["Version", `v${product.version}`],
                    ["Platform", product.platform],
                    ["Channel", "Development"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[11.5px] font-semibold uppercase tracking-wider text-fog-600">{k}</dt>
                      <dd className="mt-1 text-[14px] font-medium text-fog-100">{v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-9">
                  <DownloadButton />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="flex justify-center">
              <div className="relative">
                <div className="animate-glow absolute -inset-16 rounded-full bg-white/[0.05] blur-3xl" />
                <NeoPet size="lg" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Install + requirements */}
      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-fog-100 sm:text-3xl">Installation</h2>
              <ol className="mt-8 space-y-6">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-[13px] font-semibold text-fog-100">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[15px] font-medium text-fog-100">{s.title}</p>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-fog-500">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-white/[0.07] bg-ink-900 p-7">
                <h3 className="text-[15px] font-semibold text-fog-100">System requirements</h3>
                <ul className="mt-5 space-y-3">
                  {requirements.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-[13.5px] text-fog-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-fog-500" />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-white/[0.06] pt-5">
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-fog-600">Package manager</p>
                  <button
                    onClick={copyCommand}
                    className="mt-2.5 flex w-full items-center justify-between rounded-lg border border-white/10 bg-ink-950 px-4 py-2.5 font-mono text-[13px] text-fog-300 transition-colors hover:border-white/20"
                  >
                    <span>winget install neo</span>
                    {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-fog-600" />}
                  </button>
                  <p className="mt-2 text-[11.5px] text-fog-600">
                    Available once Neo is published to WinGet — coming soon.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
