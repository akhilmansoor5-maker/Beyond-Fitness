import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  { num: "01", title: "Discipline", note: "Show up. Repeat. Hold the line." },
  { num: "02", title: "Strength", note: "Load with intent. Progress with control." },
  { num: "03", title: "Skill", note: "Timing, reaction, and craft." },
  { num: "04", title: "Progression", note: "A standard you can measure." },
] as const;

export function HomePhilosophy() {
  return (
    <section
      className="border-t border-[var(--bf-line)] bg-[var(--bf-page)]"
      aria-labelledby="home-philosophy"
    >
      <div className="bf-shell bf-section">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="bf-index mb-4">
              <span className="bf-index__num">01</span>
              <span className="mx-2 opacity-40">/</span>
              Standard
            </p>
            <h2
              id="home-philosophy"
              className="bf-display-lg text-[var(--bf-text)]"
            >
              Beyond appearance.
            </h2>
            <p className="bf-lede mt-5">
              Training is discipline, strength, skill, and consistency — a
              culture that holds both fitness and combat under one standard.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {pillars.map((item, i) => (
              <Reveal key={item.title} delay={0.05 * i}>
                <Link
                  href="/arenas"
                  className="bf-hover-card group block border border-[var(--bf-line)] bg-[var(--bf-page-alt)] p-5 md:p-6"
                >
                  <p className="bf-meta text-[var(--bf-accent)]">{item.num}</p>
                  <p className="bf-display mt-3 text-[clamp(1.35rem,3vw,1.85rem)] text-[var(--bf-text)] transition-colors duration-300 group-hover:text-[var(--bf-accent)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[0.9rem] text-[var(--bf-text-mute)]">
                    {item.note}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
