import { Reveal } from "@/components/ui/Reveal";

const slots = [
  {
    id: "01",
    quote:
      "[ Member review forthcoming — short, specific, real. ]",
    name: "[ Name ]",
    meta: "Member · Manjeri",
    rating: "—.—",
  },
  {
    id: "02",
    quote:
      "[ Second review placeholder — combat, coaching, or community. ]",
    name: "[ Name ]",
    meta: "Member · Manjeri",
    rating: "—.—",
  },
] as const;

export function SocialProof() {
  return (
    <section
      id="proof"
      className="relative isolate overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-void)]"
      aria-labelledby="proof-heading"
    >
      <div className="bf-shell bf-section">
        <Reveal>
          <p className="bf-index mb-4">
            <span className="bf-index__num">09</span>
            <span className="mx-2 text-[var(--bf-faint)]">/</span>
            Signal
          </p>
          <h2
            id="proof-heading"
            className="bf-display-lg max-w-[12ch] text-[var(--bf-bone)]"
          >
            From the floor.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-0 border-t border-[var(--bf-line)]">
          {slots.map((slot, i) => (
            <Reveal key={slot.id} delay={0.06 * i}>
              <blockquote
                className={`grid gap-6 border-b border-[var(--bf-line)] py-10 md:grid-cols-12 md:gap-8 md:py-14 ${
                  i === 0 ? "" : ""
                }`}
              >
                <div className="md:col-span-2">
                  <p className="bf-num bf-meta text-[var(--bf-accent)]">
                    {slot.id}
                  </p>
                  <p className="bf-meta mt-4 text-[var(--bf-mute)]">
                    Rating
                  </p>
                  <p className="bf-display mt-1 text-[2rem] text-[var(--bf-bone-dim)]">
                    {slot.rating}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p className="bf-display bf-display--plain text-[clamp(1.65rem,4vw,2.85rem)] text-[var(--bf-bone)]">
                    {slot.quote}
                  </p>
                </div>
                <footer className="md:col-span-2 md:text-right">
                  <cite className="not-italic">
                    <span className="bf-meta text-[var(--bf-bone-dim)]">
                      {slot.name}
                    </span>
                    <span className="bf-meta mt-2 block">{slot.meta}</span>
                  </cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="bf-meta mt-8 text-[var(--bf-mute)]">
            Real Google / member reviews will replace these slots.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
