import { Button } from "@/components/ui/Button";
import { FloatingMarks } from "@/components/ui/FloatingMarks";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { contact, galleryItems, offer } from "@/content/site";

export function GalleryView() {
  return (
    <main className="pt-[var(--bf-nav-h)]">
      <section className="relative overflow-hidden border-b border-[var(--bf-line)]">
        <FloatingMarks tone="light" density="section" />
        <div className="bf-shell relative z-[2] bf-section">
          <Reveal>
            <p className="bf-index mb-4">
              <span className="bf-index__num">01</span>
              <span className="mx-2 opacity-40">/</span>
              Gallery
            </p>
            <h1 className="bf-display-lg text-[var(--bf-text)]">
              The floor.
              <br />
              The culture.
            </h1>
            <p className="bf-lede mt-6">
              Real facility photography from Beyond Fitness Manjeri — training
              spaces, community, and atmosphere. More on{" "}
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[var(--bf-accent)]"
              >
                {contact.instagramHandle}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bf-shell bf-section">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, i) => (
            <Reveal key={item.src} delay={0.03 * (i % 6)} className="mb-4 break-inside-avoid">
              <figure className="group relative overflow-hidden border border-[var(--bf-line)] bg-[var(--bf-page-alt)]">
                <PhotoFrame
                  label={item.label}
                  src={item.src}
                  tone="default"
                  aspect={
                    i % 3 === 0
                      ? "aspect-[4/5]"
                      : i % 3 === 1
                        ? "aspect-[16/10]"
                        : "aspect-square"
                  }
                />
                <figcaption className="flex items-center justify-between gap-3 border-t border-[var(--bf-line)] px-4 py-3">
                  <span className="bf-meta text-[var(--bf-text-mute)]">
                    {item.category}
                  </span>
                  <span className="text-[0.8rem] text-[var(--bf-text)]">
                    {item.label}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-4 border-t border-[var(--bf-line)] pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="bf-meta text-[var(--bf-accent)]">Seen enough?</p>
              <p className="bf-display mt-2 text-[clamp(1.75rem,4vw,2.75rem)] text-[var(--bf-text)]">
                Start training
                {offer.active ? ` · ${offer.percent}% web offer` : ""}.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/start-training">Start training</Button>
              <Button href={contact.mapsUrl} external variant="ghost">
                Open in Maps
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
