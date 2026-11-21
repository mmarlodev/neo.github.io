import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Eye,
  MessageSquare,
  MonitorSmartphone,
  Cpu,
  FlaskConical,
} from "lucide-react";
import { Reveal } from "../components/Reveal";
import { DesktopScene } from "../components/DesktopScene";
import { product } from "../data/product";

const features = [
  {
    icon: MonitorSmartphone,
    title: "Desktop companion",
    body: "A persistent, lightweight presence on your desktop that stays out of your way until you need it.",
  },
  {
    icon: Bot,
    title: "AI assistance",
    body: "Neo connects to remote AI inference to answer questions and help you work — no local model required.",
  },
  {
    icon: Eye,
    title: "Screen understanding",
    body: "With your permission, Neo can capture and interpret what's on your screen to provide context-aware help.",
  },
  {
    icon: MessageSquare,
    title: "Contextual conversations",
    body: "Talk to Neo about what you're doing. Context carries over, so you never re-explain your situation.",
  },
  {
    icon: Cpu,
    title: "Built for what comes next",
    body: "Neo's architecture is designed to grow from software companion into a physical AI-powered robot.",
  },
  {
    icon: FlaskConical,
    title: "Experiments in progress",
    body: "New capabilities are being explored and shipped incrementally. Check Updates for the latest.",
  },
];

export function Dashboard() {
  return (
    <>
      <section className="pt-32 pb-14 sm:pt-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <img src="./assets/neo-logo.png" alt="Neo logo" className="h-16 w-16" />
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-semibold tracking-tight text-fog-100 sm:text-4xl">Neo</h1>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[12px] font-medium text-emerald-300">
                    {product.status}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[12px] text-fog-500">
                    v{product.version}
                  </span>
                </div>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-fog-500">{product.description}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature overview */}
      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-fog-100 sm:text-3xl">Feature overview</h2>
            <p className="mt-2 max-w-lg text-[14.5px] text-fog-500">
              What Neo is becoming. Some capabilities are still in development — check Updates for status.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-white/[0.07] bg-ink-900 p-6 transition-colors duration-200 hover:border-white/[0.14]">
                  <f.icon className="h-5 w-5 text-fog-300" strokeWidth={1.75} />
                  <h3 className="mt-4 text-[15px] font-semibold text-fog-100">{f.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-fog-500">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product preview */}
      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-fog-100 sm:text-3xl">Product preview</h2>
            <p className="mt-2 max-w-lg text-[14.5px] text-fog-500">
              Neo running on a Windows desktop — a companion beside your work, not inside another tab.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <DesktopScene />
          </Reveal>
        </div>
      </section>

      {/* Development status */}
      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-fog-100 sm:text-3xl">Development status</h2>
                <p className="mt-4 text-[14.5px] leading-relaxed text-fog-500">
                  Neo is under active development. AI inference runs remotely — nothing large runs on your
                  machine, and Neo only sees your screen when you allow it.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Desktop companion: in development",
                    "Screen understanding: in development, permission-gated",
                    "AI assistance: powered by remote inference (Duck.ai integration in progress)",
                    "Physical robot: long-term goal, not yet available",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-fog-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fog-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Reveal delay={120}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.07] bg-ink-900 p-8">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-fog-600">Current build</p>
                    <p className="mt-2 font-mono text-2xl text-fog-100">v{product.version}</p>
                    <p className="mt-1 text-[13.5px] text-fog-500">
                      {product.platform} · {product.status}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to="/download"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-fog-100 px-5 py-2.5 text-[13.5px] font-semibold text-ink-950 transition-all duration-200 hover:bg-white"
                    >
                      Download Neo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/updates"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[13.5px] font-medium text-fog-100 transition-colors hover:bg-white/[0.04]"
                    >
                      View updates
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
