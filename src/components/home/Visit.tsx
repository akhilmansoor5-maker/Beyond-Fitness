import { Reveal } from "@/components/ui/Reveal";
import { PhotoFrame } from "@/components/ui/PhotoFrame";

const fields = [
  {
    label: "Address",
    value: "[ Exact address forthcoming ]",
    hint: "UA Mall area · Manjeri, Kerala",
  },
  {
    label: "Hours",
    value: "[ Opening hours forthcoming ]",
    hint: "Confirm with client before publish",
  },
  {
    label: "Phone",
    value: "[ Phone forthcoming ]",
    hint: "Call placeholder",
  },
  {
    label: "WhatsApp",
    value: "[ WhatsApp forthcoming ]",
    hint: "Primary local CTA",
  },
] as const;

export function Visit() {
  return (
    <section
      id="visit"
      className="relative isolate overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-ink)]"
      aria-labelledby="visit-heading"
    >
      <div className="bf-shell bf-section">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="bf-index mb-4">
                <span className="bf-index__num">10</span>
                <span className="mx-2 text-[var(--bf-faint)]">/</span>
                Visit
              </p>
              <h2
                id="visit-heading"
                className="bf-display-lg text-[var(--bf-bone)]"
              >
                Manjeri.
              </h2>
              <p className="bf-lede mt-6">
                Find the training house. Structured fields below wait for
                confirmed client details.
              </p>
            </Reveal>

            <dl className="mt-10 border-t border-[var(--bf-line)]">
              {fields.map((field, i) => (
                <Reveal key={field.label} delay={0.04 * i}>
                  <div className="grid gap-1 border-b border-[var(--bf-line)] py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
                    <dt className="bf-meta text-[var(--bf-accent)]">
                      {field.label}
                    </dt>
                    <dd>
                      <p className="text-[1.05rem] text-[var(--bf-bone)]">
                        {field.value}
                      </p>
                      <p className="bf-meta mt-1">{field.hint}</p>
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative border border-[var(--bf-line)]">
              <PhotoFrame
                label="VISIT — EXTERIOR / MALL APPROACH OR MAP STILL"
                tone="community"
                aspect="aspect-[4/3] lg:aspect-[16/11]"
              />
              <div className="absolute left-4 top-4 z-10 border border-[var(--bf-line-strong)] bg-[rgba(7,7,7,0.75)] px-3 py-2 backdrop-blur-sm">
                <p className="bf-meta text-[var(--bf-bone-dim)]">
                  Map embed
                </p>
                <p className="bf-meta mt-1 text-[var(--bf-mute)]">
                  [ Google Maps placeholder ]
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
