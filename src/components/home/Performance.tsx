import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  {
    num: "01",
    title: "Discipline",
    line: "Show up. Repeat the standard.",
  },
  {
    num: "02",
    title: "Consistency",
    line: "Progress is a pattern, not a spike.",
  },
  {
    num: "03",
    title: "Strength",
    line: "Capacity built under control.",
  },
  {
    num: "04",
    title: "Skill",
    line: "Precision before power.",
  },
] as const;

export function Performance() {
  return (
    <section
      id="performance"
      className="relative isolate overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-ink)]"
      aria-labelledby="performance-heading"
    >
      <div className="bf-grain opacity-[0.035]" aria-hidden />

      <div className="bf-shell bf-section">
        <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="bf-index mb-4">
              <span className="bf-index__num">08</span>
              <span className="mx-2 text-[var(--bf-faint)]">/</span>
              Performance interface
            </p>
            <h2
              id="performance-heading"
              className="bf-display-lg text-[var(--bf-bone)]"
            >
              Progression.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-5">
            <p className="bf-lede md:ml-auto">
              A sports-performance reading of the culture — no fabricated
              statistics. Principles only.
            </p>
          </Reveal>
        </div>

        <div className="border border-[var(--bf-line)] bg-[var(--bf-void)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--bf-line)] px-4 py-3 md:px-6">
            <p className="bf-meta text-[var(--bf-bone-dim)]">
              BF · PROTOCOL READOUT
            </p>
            <p className="bf-meta">
              <span className="text-[var(--bf-accent)]">LIVE</span>
              <span className="mx-2 text-[var(--bf-faint)]">/</span>
              CONCEPTUAL
            </p>
          </div>

          <ul className="grid md:grid-cols-2">
            {metrics.map((item, i) => (
              <Reveal key={item.title} delay={0.05 * i}>
                <li
                  className={`relative min-h-[11rem] border-[var(--bf-line)] p-5 md:min-h-[13rem] md:p-7 ${
                    i % 2 === 0 ? "md:border-r" : ""
                  } ${i < 2 ? "border-b" : ""} ${i === 2 ? "border-b md:border-b-0" : ""}`}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <span className="bf-num text-[clamp(2.5rem,6vw,4rem)] leading-none tracking-tight text-[var(--bf-accent)]">
                        {item.num}
                      </span>
                      <span className="bf-meta mt-1">PARAM</span>
                    </div>
                    <div>
                      <h3 className="bf-display text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--bf-bone)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[28ch] text-[0.9rem] text-[var(--bf-mute)]">
                        {item.line}
                      </p>
                      {/* Progress bar — visual only, not a real metric */}
                      <div
                        className="mt-5 h-px w-full bg-[var(--bf-faint)]"
                        aria-hidden
                      >
                        <div
                          className="h-px bg-[var(--bf-accent)]"
                          style={{ width: `${55 + i * 12}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
