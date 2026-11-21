import { Link } from "react-router-dom";
import { ArrowRight, Download, Eye, MessageSquare, MonitorSmartphone, Sparkles } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { DesktopScene } from "../components/DesktopScene";
import { product } from "../data/product";

const features = [
  {
    icon: MonitorSmartphone,
    title: "A companion that lives on your desktop",
    body: "Neo sits on your screen as a lightweight desktop presence — no extra tab, no window to babysit.",
  },
  {
    icon: Eye,
    title: "Understands what you're doing",
    body: "With your permission, Neo can look at your screen to understand context and give relevant help.",
  },
  {
    icon: MessageSquare,
    title: "Answers in context",
    body: "Ask questions about what you're working on and get help without re-explaining the situation.",
  },
  {
    icon: Sparkles,
    title: "Always within reach",
    body: "AI assistance that stays by your side throughout the day, whenever you need it.",
  },
];

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12.5px] text-fog-500">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              {product.status} · v{product.version}
            </div>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-fog-100 sm:text-6xl">
              Your AI.
              <br />
              <span className="bg-gradient-to-b from-fog-100 to-fog-500 bg-clip-text text-transparent">
                Always by your side.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-fog-500 sm:text-[17px]">
              {product.description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/download"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-fog-100 px-6 py-3 text-[14.5px] font-semibold text-ink-950 transition-all duration-200 hover:bg-white hover:shadow-[0_0_32px_rgba(255,255,255,0.3)] sm:w-auto"
              >
                <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                Download Neo
              </Link>
              <Link
                to="/about"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[14.5px] font-medium text-fog-100 transition-all duration-200 hover:border-white/30 hover:bg-white/[0.04] sm:w-auto"
              >
                Discover Neo
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150} className="mx-auto mt-16 max-w-4xl sm:mt-20">
            <DesktopScene />
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/[0.06] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-fog-600">What Neo does</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fog-100 sm:text-4xl">
              An assistant that meets you where you are.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80} className="bg-ink-900 p-7">
                <f.icon className="h-5 w-5 text-fog-300" strokeWidth={1.75} />
                <h3 className="mt-5 text-[15px] font-semibold text-fog-100">{f.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-fog-500">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-ink-850 to-ink-900 px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl" />
            <h2 className="relative text-3xl font-semibold tracking-tight text-fog-100 sm:text-4xl">
              {product.tagline}
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-[15px] text-fog-500">
              Neo is in active development. Follow along on the Dashboard or grab the latest build.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/download"
                className="inline-flex items-center gap-2 rounded-full bg-fog-100 px-6 py-3 text-[14.5px] font-semibold text-ink-950 transition-all duration-200 hover:bg-white hover:shadow-[0_0_32px_rgba(255,255,255,0.3)]"
              >
                <Download className="h-4 w-4" />
                Get Neo
              </Link>
              <Link
                to="/updates"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[14.5px] font-medium text-fog-100 transition-all duration-200 hover:border-white/30 hover:bg-white/[0.04]"
              >
                See what's new
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
