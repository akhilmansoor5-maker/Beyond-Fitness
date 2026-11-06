import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { membership, personalTraining } from "@/content/site";

export function HomePricing() {
  return (
    <section
      className="border-t border-[var(--bf-line)] bg-[var(--bf-page)]"
      aria-labelledby="home-pricing"
    >
      <div className="bf-shell bf-section">
        <Reveal>
          <p className="bf-index mb-4">
            <span className="bf-index__num">04</span>
            <span className="mx-2 opacity-40">/</span>
            Plans
          </p>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2
              id="home-pricing"
              className="bf-display-lg text-[var(--bf-text)]"
            >
              Clear pricing.
            </h2>
            <p className="bf-lede lg:!max-w-[34ch]">
              Admission {membership.admission.priceDisplay}. Monthly from{" "}
              {membership.plans[0].priceDisplay}. PT from{" "}
              {personalTraining.packages[0].priceDisplay}.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <Link
            href="/membership"
            className="bf-hover-card mt-8 flex flex-col gap-2 border border-[var(--bf-line)] bg-[var(--bf-page-alt)] p-5 sm:flex-row sm:items-end sm:justify-between md:mt-10 md:p-7"
          >
            <div>
              <p className="bf-meta text-[var(--bf-accent)]">One-time</p>
              <p className="bf-display mt-2 text-[clamp(1.5rem,4vw,2.35rem)] text-[var(--bf-text)]">
                {membership.admission.title}
              </p>
              <p className="mt-1 text-[0.9rem] text-[var(--bf-text-mute)]">
                {membership.admission.note}
              </p>
            </div>
            <p className="bf-display text-[clamp(1.85rem,5vw,2.75rem)] text-[var(--bf-text)]">
              {membership.admission.priceDisplay}
            </p>
          </Link>
        </Reveal>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {membership.plans.map((plan, i) => (
            <Reveal key={plan.title} delay={0.04 * i}>
              <Link
                href="/membership"
                className="bf-hover-card group flex h-full flex-col justify-between border border-[var(--bf-line)] bg-[var(--bf-page-alt)] p-4 md:p-5"
              >
                <div>
                  <p className="bf-meta text-[var(--bf-accent)]">{plan.num}</p>
                  <p className="bf-display mt-3 text-[clamp(1.25rem,3vw,1.65rem)] text-[var(--bf-text)] transition-colors duration-300 group-hover:text-[var(--bf-accent)]">
                    {plan.title}
                  </p>
                  <p className="bf-meta mt-2 text-[var(--bf-mute)]">
                    {plan.cadence}
                  </p>
                </div>
                <p className="bf-display mt-6 text-[clamp(1.35rem,3.5vw,1.85rem)] text-[var(--bf-text)]">
                  {plan.priceDisplay}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {membership.specials.map((item, i) => (
            <Reveal key={item.title} delay={0.04 * i}>
              <Link
                href="/membership"
                className="bf-hover-card group block border border-[var(--bf-line)] bg-[var(--bf-page-alt)] p-4 md:p-5"
              >
                <p className="bf-meta text-[var(--bf-accent)]">{item.title}</p>
                <p className="bf-display mt-2 text-[clamp(1.35rem,3.5vw,1.85rem)] text-[var(--bf-text)] transition-colors duration-300 group-hover:text-[var(--bf-accent)]">
                  {item.priceDisplay}
                </p>
                <p className="mt-1.5 text-[0.85rem] text-[var(--bf-text-mute)]">
                  {item.note}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
          <Button href="/membership" className="justify-center">
            All membership plans
          </Button>
          <Button
            href="/personal-training"
            variant="ghost"
            className="justify-center"
          >
            PT packages
          </Button>
        </div>
      </div>
    </section>
  );
}
