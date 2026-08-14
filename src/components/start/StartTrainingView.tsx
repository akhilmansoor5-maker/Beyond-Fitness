"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { contact, images } from "@/content/site";

const intents = [
  { id: "fitness", label: "Fitness" },
  { id: "pt", label: "Personal training" },
  { id: "combat", label: "Combat / Sport" },
  { id: "astra", label: "Astra" },
  { id: "unsure", label: "Not sure yet" },
] as const;

type IntentId = (typeof intents)[number]["id"];

export function StartTrainingView() {
  const [intent, setIntent] = useState<IntentId | null>(null);

  return (
    <main className="pt-[var(--bf-nav-h)]">
      <section className="bf-theme-dark relative overflow-hidden bg-[var(--bf-void)] text-[var(--bf-bone)]">
        <div className="absolute inset-0 opacity-45">
          <PhotoFrame
            label={images.startHero.label}
            src={images.startHero.src}
            tone="community"
            aspect="absolute inset-0 h-full !aspect-auto"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(7,7,7,0.92)] to-[rgba(7,7,7,0.55)]" />
        <div className="bf-shell relative bf-section">
          <p className="bf-meta mb-4 text-[var(--bf-accent)]">
            <span className="bf-num">01</span>
            <span className="mx-2 opacity-40">/</span>
            Onboarding
          </p>
          <h1 className="bf-display-lg">Start training.</h1>
          <p className="bf-lede mt-6 !text-[var(--bf-mute)]">
            Choose your path. We&apos;ll connect via WhatsApp or call — form
            backend lands next.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--bf-line)] bg-[var(--bf-page)]">
        <div className="bf-shell bf-section">
          <Reveal>
            <p className="bf-index mb-4">
              <span className="bf-index__num">02</span>
              <span className="mx-2 opacity-40">/</span>
              Intent
            </p>
            <h2 className="bf-display text-[clamp(2rem,5vw,3.25rem)] text-[var(--bf-text)]">
              What are you looking for?
            </h2>
          </Reveal>

          <div
            className="mt-10 grid gap-px bg-[var(--bf-line)] sm:grid-cols-2 lg:grid-cols-3"
            role="group"
            aria-label="Training intent"
          >
            {intents.map((item) => {
              const active = intent === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIntent(item.id)}
                  aria-pressed={active}
                  className={`min-h-[7rem] bg-[var(--bf-page)] p-6 text-left transition-colors ${
                    active
                      ? "bg-[var(--bf-page-alt)]"
                      : "hover:bg-[var(--bf-page-alt)]"
                  }`}
                >
                  <span className="bf-meta text-[var(--bf-accent)]">
                    {active ? "Selected" : "Select"}
                  </span>
                  <span className="bf-display mt-3 block text-[clamp(1.5rem,3.5vw,2.25rem)] text-[var(--bf-text)]">
                    {item.label}
                  </span>
                  <span
                    className={`mt-4 block h-[3px] bg-[var(--bf-accent)] transition-all ${
                      active ? "w-full" : "w-0"
                    }`}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--bf-line)] bg-[var(--bf-page-alt)]">
        <div className="bf-shell bf-section">
          <Reveal>
            <p className="bf-index mb-4">
              <span className="bf-index__num">03</span>
              <span className="mx-2 opacity-40">/</span>
              Details
            </p>
            <h2 className="bf-display text-[clamp(2rem,5vw,3.25rem)] text-[var(--bf-text)]">
              How do we reach you?
            </h2>
          </Reveal>

          <form
            className="mt-10 grid gap-6 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = String(data.get("name") || "");
              const phone = String(data.get("phone") || "");
              const message = String(data.get("message") || "");
              const preference =
                intents.find((i) => i.id === intent)?.label ?? "Not specified";
              const text = encodeURIComponent(
                `Beyond Fitness enquiry\nName: ${name}\nPhone: ${phone}\nInterest: ${preference}\nGoal: ${message}`,
              );
              window.open(`${contact.whatsappUrl}?text=${text}`, "_blank");
            }}
          >
            <label className="block">
              <span className="bf-meta text-[var(--bf-accent)]">Name</span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className="mt-2 w-full border border-[var(--bf-line-strong)] bg-[var(--bf-page)] px-4 py-3 text-[var(--bf-text)] outline-none focus-visible:border-[var(--bf-accent)]"
              />
            </label>
            <label className="block">
              <span className="bf-meta text-[var(--bf-accent)]">Phone</span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="Your phone"
                className="mt-2 w-full border border-[var(--bf-line-strong)] bg-[var(--bf-page)] px-4 py-3 text-[var(--bf-text)] outline-none focus-visible:border-[var(--bf-accent)]"
              />
            </label>
            <label className="block md:col-span-2">
              <span className="bf-meta text-[var(--bf-accent)]">
                Preferred training
              </span>
              <input
                name="preference"
                type="text"
                readOnly
                value={
                  intent
                    ? intents.find((i) => i.id === intent)?.label ?? ""
                    : "Select an intent above"
                }
                className="mt-2 w-full border border-[var(--bf-line-strong)] bg-[var(--bf-page)] px-4 py-3 text-[var(--bf-text-mute)] outline-none"
              />
            </label>
            <label className="block md:col-span-2">
              <span className="bf-meta text-[var(--bf-accent)]">
                Message / goal
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="What do you want to train for?"
                className="mt-2 w-full resize-y border border-[var(--bf-line-strong)] bg-[var(--bf-page)] px-4 py-3 text-[var(--bf-text)] outline-none focus-visible:border-[var(--bf-accent)]"
              />
            </label>

            <div className="md:col-span-2 flex flex-wrap items-center gap-4 pt-2">
              <button type="submit" className="bf-btn bf-btn--primary">
                <span className="bf-btn__mark" aria-hidden />
                Send via WhatsApp
              </button>
              <Button href={contact.phoneHref} variant="ghost">
                Call {contact.phoneDisplay}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
