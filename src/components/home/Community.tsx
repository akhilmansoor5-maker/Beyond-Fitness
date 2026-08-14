import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";

export function Community() {
  return (
    <section
      id="community"
      className="relative isolate overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-void)]"
      aria-labelledby="community-heading"
    >
      <div className="bf-shell bf-section">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="bf-index mb-4">
              <span className="bf-index__num">07</span>
              <span className="mx-2 text-[var(--bf-faint)]">/</span>
              People
            </p>
            <h2
              id="community-heading"
              className="bf-display-lg text-[var(--bf-bone)]"
            >
              Built by people.
            </h2>
            <p className="bf-lede mt-6">
              Members. Coaches. Shared sessions. The culture is human — not
              empty equipment.
            </p>
            <p className="bf-meta mt-8 text-[var(--bf-mute)]">
              Names, roles, and stories — placeholders until client provides.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8 lg:gap-4">
            <Reveal className="sm:col-span-2">
              <PhotoFrame
                label="PEOPLE — GROUP TRAINING / COMMUNITY"
                tone="community"
                aspect="aspect-[16/9]"
              />
            </Reveal>
            <Reveal delay={0.06}>
              <PhotoFrame
                label="PEOPLE — COACH / TRAINER PORTRAIT"
                tone="fitness"
                aspect="aspect-[4/5]"
              />
              <div className="mt-3 border-t border-[var(--bf-line)] pt-3">
                <p className="bf-display text-[1.5rem] text-[var(--bf-bone)]">
                  Coach
                </p>
                <p className="bf-meta mt-1">[ Name forthcoming ]</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <PhotoFrame
                label="PEOPLE — MEMBER / TRAINING MOMENT"
                tone="combat"
                aspect="aspect-[4/5]"
              />
              <div className="mt-3 border-t border-[var(--bf-line)] pt-3">
                <p className="bf-display text-[1.5rem] text-[var(--bf-bone)]">
                  Member
                </p>
                <p className="bf-meta mt-1">[ Name forthcoming ]</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
