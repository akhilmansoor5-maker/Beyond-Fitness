import { Button } from "@/components/ui/Button";
import { OfferBanner } from "@/components/ui/OfferBanner";
import { Reveal } from "@/components/ui/Reveal";
import { contact, membership, offer, personalTraining } from "@/content/site";

export function MembershipView() {
  const waText = encodeURIComponent(
    `Beyond Fitness — Membership enquiry\nI'd like plan details.${
      offer.active ? `\nOffer code: ${offer.code}` : ""
    }`,
  );

  return (
    <main className="pt-[var(--bf-nav-h)]">
      <section className="bf-theme-dark border-b border-[rgba(244,244,241,0.1)] bg-[var(--bf-void)] text-[var(--bf-bone)]">
        <div className="bf-shell bf-section">
          <Reveal>
            <p className="bf-index mb-3">
              <span className="bf-index__num">01</span>
              <span className="mx-2 opacity-40">/</span>
              Plans
            </p>
            <h1 className="bf-display-lg">
              Membership.
              <br />
              Clear pricing.
            </h1>
            <p className="bf-lede mt-4 !text-[var(--bf-mute)] md:mt-5">
              Join Beyond Fitness Manjeri with straightforward plans — plus
              student and couple offers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[var(--bf-line)] bg-[var(--bf-page-alt)]">
        <div className="bf-shell py-6 md:py-8">
          <div className="flex flex-col gap-2 border border-[var(--bf-line)] bg-[var(--bf-page)] p-4 sm:flex-row sm:items-end sm:justify-between md:p-6">
            <div>
              <p className="bf-meta text-[var(--bf-accent)]">One-time</p>
              <p className="bf-display mt-1 text-[clamp(1.5rem,5vw,2.5rem)] text-[var(--bf-text)]">
                {membership.admission.title}
              </p>
              <p className="mt-1 text-[0.9rem] text-[var(--bf-text-mute)]">
                {membership.admission.note}
              </p>
            </div>
            <p className="bf-display text-[clamp(1.85rem,6vw,2.75rem)] text-[var(--bf-text)]">
              {membership.admission.priceDisplay}
            </p>
          </div>
        </div>
      </section>

      <section className="bf-shell bf-section">
        <Reveal>
          <p className="bf-index mb-3">
            <span className="bf-index__num">02</span>
            <span className="mx-2 opacity-40">/</span>
            Membership
          </p>
          <h2 className="bf-display text-[clamp(1.75rem,5vw,3rem)] text-[var(--bf-text)]">
            Training plans
          </h2>
        </Reveal>

        <ol className="mt-6 border-t border-[var(--bf-line)]">
          {membership.plans.map((plan, i) => (
            <Reveal key={plan.title} delay={0.03 * i}>
              <li className="bf-price-row">
                <span className="bf-num bf-meta text-[var(--bf-accent)]">
                  {plan.num}
                </span>
                <div className="min-w-0">
                  <h3 className="bf-display text-[clamp(1.25rem,4vw,2rem)] text-[var(--bf-text)]">
                    {plan.title}
                  </h3>
                  <p className="bf-meta mt-1">{plan.cadence}</p>
                </div>
                <p className="bf-display text-[clamp(1.25rem,4vw,2rem)] text-[var(--bf-text)]">
                  {plan.priceDisplay}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]">
        <div className="bf-shell bf-section">
          <Reveal>
            <p className="bf-index mb-3">
              <span className="bf-index__num">03</span>
              <span className="mx-2 opacity-40">/</span>
              Specials
            </p>
            <h2 className="bf-display text-[clamp(1.75rem,5vw,3rem)] text-[var(--bf-text)]">
              Student & couple
            </h2>
          </Reveal>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {membership.specials.map((item) => (
              <div
                key={item.title}
                className="border border-[var(--bf-line)] bg-[var(--bf-page)] p-4 md:p-6"
              >
                <p className="bf-meta text-[var(--bf-accent)]">{item.num}</p>
                <p className="bf-display mt-2 text-[clamp(1.35rem,4vw,2rem)] text-[var(--bf-text)]">
                  {item.title}
                </p>
                <p className="bf-display mt-3 text-[clamp(1.65rem,5vw,2.35rem)] text-[var(--bf-text)]">
                  {item.priceDisplay}
                </p>
                <p className="mt-2 text-[0.9rem] text-[var(--bf-text-mute)]">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--bf-line)]">
        <div className="bf-shell bf-section">
          <Reveal>
            <p className="bf-index mb-3">
              <span className="bf-index__num">04</span>
              <span className="mx-2 opacity-40">/</span>
              Personal training
            </p>
            <h2 className="bf-display text-[clamp(1.75rem,5vw,3rem)] text-[var(--bf-text)]">
              PT packages
            </h2>
          </Reveal>

          <ol className="mt-6 border-t border-[var(--bf-line)]">
            {personalTraining.packages.map((pkg, i) => (
              <Reveal key={pkg.title} delay={0.03 * i}>
                <li className="bf-price-row">
                  <span className="bf-num bf-meta text-[var(--bf-accent)]">
                    {pkg.num}
                  </span>
                  <div className="min-w-0">
                    <h3 className="bf-display text-[clamp(1.25rem,4vw,2rem)] text-[var(--bf-text)]">
                      {pkg.title}
                    </h3>
                    <p className="mt-1 text-[0.85rem] text-[var(--bf-text-mute)]">
                      {pkg.note}
                    </p>
                  </div>
                  <p className="bf-display text-[clamp(1.25rem,4vw,2rem)] text-[var(--bf-text)]">
                    {pkg.priceDisplay}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          {offer.active && (
            <div className="mt-8">
              <OfferBanner compact />
            </div>
          )}

          <p className="mt-6 text-[0.85rem] text-[var(--bf-text-mute)]">
            {membership.disclaimer}
          </p>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
            <Button
              href={`${contact.whatsappUrl}?text=${waText}`}
              external
              className="w-full justify-center sm:w-auto"
            >
              Enquire on WhatsApp
            </Button>
            <Button
              href="/start-training"
              variant="ghost"
              className="w-full justify-center sm:w-auto"
            >
              Start training form
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
