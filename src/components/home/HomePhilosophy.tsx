import { FloatingMarks } from "@/components/ui/FloatingMarks";
import { Reveal } from "@/components/ui/Reveal";

const pillars = ["Discipline", "Strength", "Skill", "Progression"] as const;

export function HomePhilosophy() {
  return (
    <section
      className="relative overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]"
      aria-labelledby="home-philosophy"
    >
      <FloatingMarks tone="light" density="section" />
      <div className="bf-shell relative z-[2] bf-section">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="bf-index mb-4">
              <span className="bf-index__num">03</span>
              <span className="mx-2 opacity-40">/</span>
              The standard
            </p>
            <h2
              id="home-philosophy"
              className="bf-display-lg max-w-[14ch] text-[var(--bf-text)]"
            >
              Beyond appearance.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="bf-lede lg:ml-auto">
              Training is discipline, strength, skill, and consistency —
              practised under one standard.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--bf-line)] pt-8">
          {pillars.map((item, i) => (
            <Reveal key={item} delay={0.04 * i}>
              <li className="flex items-baseline gap-3">
                <span className="bf-num bf-meta text-[var(--bf-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="bf-display text-[clamp(1.5rem,3vw,2rem)] text-[var(--bf-text)]">
                  {item}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
