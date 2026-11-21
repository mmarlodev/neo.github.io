import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { NeoPet } from "../components/NeoPet";
import { DesktopScene } from "../components/DesktopScene";

export function About() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-10 sm:pt-44">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <h1 className="text-4xl font-semibold tracking-tight text-fog-100 sm:text-5xl">Meet Neo.</h1>
            <p className="mt-6 text-[16px] leading-relaxed text-fog-500 sm:text-[17px]">
              Neo is being built around a simple idea: AI should be accessible whenever you need it, without
              interrupting what you're doing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The idea */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-fog-100 sm:text-3xl">The idea</h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-fog-500">
              <p>
                Traditional AI assistants require you to open another application, switch tabs, and explain your
                situation from scratch every time.
              </p>
              <p>
                Neo aims to make AI feel like a natural part of your desktop — a companion that's already there,
                aware of what you're working on (with your permission), and ready to help in real time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="flex justify-center">
            <NeoPet size="lg" />
          </Reveal>
        </div>
      </section>

      {/* The technology */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <DesktopScene />
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold tracking-tight text-fog-100 sm:text-3xl">The technology</h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-fog-500">
              <p>
                Neo combines three things: a lightweight desktop companion, remote AI inference, and contextual
                screen understanding.
              </p>
              <p>
                Your computer doesn't run the AI — requests go to remote services, keeping Neo fast and your
                machine free. Screen capture is permission-gated, so Neo only sees what you allow.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The future */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-fog-100 sm:text-3xl">The future</h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-fog-500">
              <p>
                Neo is designed to eventually evolve beyond software into a physical AI-powered robot — a real
                presence in your space, not just on your screen.
              </p>
              <p className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 text-[13.5px] text-fog-400">
                The physical robot is a long-term goal. It is not a shipping product, and no hardware exists yet.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision + CTA */}
      <section className="border-t border-white/[0.06] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-ink-850 to-ink-900 px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl" />
            <p className="relative text-[12.5px] font-semibold uppercase tracking-[0.14em] text-fog-600">Our vision</p>
            <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-fog-100 sm:text-4xl">
              Making AI feel less like an application and more like a companion.
            </h2>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/download"
                className="inline-flex items-center gap-2 rounded-full bg-fog-100 px-6 py-3 text-[14.5px] font-semibold text-ink-950 transition-all duration-200 hover:bg-white hover:shadow-[0_0_32px_rgba(255,255,255,0.3)]"
              >
                Download Neo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/updates"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[14.5px] font-medium text-fog-100 transition-all duration-200 hover:border-white/30 hover:bg-white/[0.04]"
              >
                Follow development
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
