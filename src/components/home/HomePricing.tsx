import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { membership, personalTraining } from "@/content/site";

export function HomePricing() {
  return (
    <section
      className="border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]"
      aria-labelledby="home-pricing"
    >
      <div className="bf-shell bf-section">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-5">
            <p className="bf-index mb-3">
              <span className="bf-index__num">03</span>
              <span className="mx-2 opacity-40">/</span>
              Plans
            </p>
            <h2
              id="home-pricing"
              className="bf-display-lg text-[var(--bf-text)]"
            >
              Clear pricing.
            </h2>
            <p className="bf-lede mt-4">
              Admission {membership.admission.priceDisplay}. Monthly from{" "}
              {membership.plans[0].priceDisplay}. PT from{" "}
              {personalTraining.packages[0].priceDisplay}.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <div className="flex items-end justify-between gap-4 border-b border-[var(--bf-line)] pb-4">
              <div>
                <p className="bf-meta text-[var(--bf-accent)]">One-time</p>
                <p className="bf-display mt-1 text-[clamp(1.35rem,4vw,2rem)] text-[var(--bf-text)]">
                  {membership.admission.title}
                </p>
              </div>
              <p className="bf-display text-[clamp(1.5rem,4vw,2.25rem)] text-[var(--bf-text)]">
                {membership.admission.priceDisplay}
              </p>
            </div>

            <ol>
              {membership.plans.map((plan) => (
                <li key={plan.title} className="bf-price-row">
                  <span className="bf-num bf-meta text-[var(--bf-accent)]">
                    {plan.num}
                  </span>
                  <div>
                    <p className="bf-display text-[clamp(1.15rem,3.5vw,1.75rem)] text-[var(--bf-text)]">
                      {plan.title}
                    </p>
                    <p className="bf-meta mt-0.5">{plan.cadence}</p>
                  </div>
                  <p className="bf-display text-[clamp(1.15rem,3.5vw,1.75rem)] text-[var(--bf-text)]">
                    {plan.priceDisplay}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-8">
          {membership.specials.map((item) => (
            <div
              key={item.title}
              className="border border-[var(--bf-line)] bg-[var(--bf-page)] p-4 md:p-5"
            >
              <p className="bf-meta text-[var(--bf-accent)]">{item.title}</p>
              <p className="bf-display mt-2 text-[clamp(1.35rem,4vw,1.85rem)] text-[var(--bf-text)]">
                {item.priceDisplay}
              </p>
              <p className="mt-1.5 text-[0.85rem] text-[var(--bf-text-mute)]">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <Button href="/membership" className="w-full justify-center sm:w-auto">
            All membership plans
          </Button>
        </div>
      </div>
    </section>
  );
}
