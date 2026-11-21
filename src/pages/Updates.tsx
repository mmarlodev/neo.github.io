import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { changelog, type ChangelogCategory } from "../data/changelog";

const categories: ("All" | ChangelogCategory)[] = [
  "All",
  "New Features",
  "Improvements",
  "Bug Fixes",
  "Experiments",
  "Announcements",
];

const categoryStyles: Record<ChangelogCategory, string> = {
  "New Features": "border-sky-400/30 bg-sky-400/10 text-sky-300",
  Improvements: "border-violet-400/30 bg-violet-400/10 text-violet-300",
  "Bug Fixes": "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  Experiments: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  Announcements: "border-fog-500/30 bg-fog-500/10 text-fog-300",
};

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function Updates() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [openVersion, setOpenVersion] = useState<string | null>(
    changelog[0]?.version ?? null
  );

  const entries = useMemo(
    () =>
      [...changelog]
        .sort((a, b) => b.date.localeCompare(a.date))
        .filter((e) => filter === "All" || e.category === filter),
    [filter]
  );

  return (
    <>
      <section className="pt-36 pb-10 sm:pt-44">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <h1 className="text-4xl font-semibold tracking-tight text-fog-100 sm:text-5xl">
              What's new with Neo.
            </h1>
            <p className="mt-4 text-[15.5px] leading-relaxed text-fog-500">
              Follow Neo's development, improvements, and upcoming features.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-all duration-200 ${
                    filter === c
                      ? "border-fog-100 bg-fog-100 text-ink-950"
                      : "border-white/10 text-fog-500 hover:border-white/25 hover:text-fog-100"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Entries */}
          <div className="mt-10 space-y-4">
            {entries.map((entry, i) => {
              const open = openVersion === entry.version;
              return (
                <Reveal key={entry.version} delay={i * 50}>
                  <article className="overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-900 transition-colors duration-200 hover:border-white/[0.14]">
                    <button
                      onClick={() => setOpenVersion(open ? null : entry.version)}
                      className="flex w-full items-start gap-4 p-6 text-left"
                      aria-expanded={open}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-mono text-[13px] font-semibold text-fog-100">
                            v{entry.version}
                          </span>
                          <span
                            className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${categoryStyles[entry.category]}`}
                          >
                            {entry.category}
                          </span>
                        </div>
                        <h2 className="mt-2 text-[16px] font-semibold text-fog-100">{entry.title}</h2>
                        <p className="mt-1 text-[12.5px] text-fog-600">{formatDate(entry.date)}</p>
                      </div>
                      <ChevronDown
                        className={`mt-1 h-4 w-4 shrink-0 text-fog-600 transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/[0.06] px-6 pb-6 pt-4">
                          <p className="text-[14px] leading-relaxed text-fog-400">{entry.description}</p>
                          {entry.items && entry.items.length > 0 && (
                            <ul className="mt-4 space-y-2">
                              {entry.items.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-fog-400">
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fog-600" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
            {entries.length === 0 && (
              <p className="rounded-2xl border border-white/[0.07] bg-ink-900 p-8 text-center text-[14px] text-fog-500">
                No updates in this category yet.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
