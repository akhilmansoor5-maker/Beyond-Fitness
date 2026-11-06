import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { trainingOfferings } from "@/content/site";

export function HomeTraining() {
  return (
    <section
      className="border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]"
      aria-labelledby="home-training"
    >
      <div className="bf-shell bf-section">
        <Reveal>
          <p className="bf-index mb-4">
            <span className="bf-index__num">02</span>
            <span className="mx-2 opacity-40">/</span>
            Training
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2
              id="home-training"
              className="bf-display-lg max-w-[14ch] text-[var(--bf-text)]"
            >
              What you train here.
            </h2>
            <p className="bf-lede md:!max-w-[32ch]">
              Weight, strength, competition prep, PT, conditioning, and combat
              skill — under one roof.
            </p>
          </div>
        </Reveal>

        <ol className="mt-8 border-t border-[var(--bf-line)] md:mt-10">
          {trainingOfferings.map((item, i) => (
            <Reveal key={item.title} delay={0.03 * i}>
              <li>
                <Link
                  href={
                    item.title.includes("Personal")
                      ? "/personal-training"
                      : item.title.includes("Combat")
                        ? "/astra"
                        : "/fitness"
                  }
                  className="bf-price-row group"
                >
                  <span className="bf-num bf-meta text-[var(--bf-accent)]">
                    {item.num}
                  </span>
                  <div className="min-w-0">
                    <p className="bf-display text-[clamp(1.25rem,3.8vw,2rem)] text-[var(--bf-text)] transition-colors duration-300 group-hover:text-[var(--bf-accent)]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[0.85rem] text-[var(--bf-text-mute)] md:text-[0.9rem]">
                      {item.note}
                    </p>
                  </div>
                  <span className="bf-meta text-[var(--bf-mute)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--bf-accent)]">
                    →
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-8">
          <Button href="/fitness" className="w-full justify-center sm:w-auto">
            Explore fitness
          </Button>
        </div>
      </div>
    </section>
  );
}
