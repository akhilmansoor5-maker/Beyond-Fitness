"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { easeOut } from "@/lib/motion";

export function TrainingInMotion() {
  const reduce = useReducedMotion();

  return (
    <section
      id="motion"
      className="relative isolate overflow-hidden border-t border-[var(--bf-line)] bg-[var(--bf-ink)]"
      aria-labelledby="motion-heading"
    >
      <div className="bf-grain opacity-[0.04]" aria-hidden />

      <div className="bf-shell bf-section">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="bf-index mb-4">
              <span className="bf-index__num">06</span>
              <span className="mx-2 text-[var(--bf-faint)]">/</span>
              Training in motion
            </p>
            <h2
              id="motion-heading"
              className="bf-display-lg max-w-[12ch] text-[var(--bf-bone)]"
            >
              The floor speaks.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="bf-lede">
              A photography sequence — not a gallery. Real training, real
              crops, ready for client assets.
            </p>
          </Reveal>
        </div>

        {/* Sequence composition */}
        <div className="grid gap-3 md:grid-cols-12 md:gap-4">
          <Reveal className="md:col-span-8">
            <motion.div
              initial={reduce ? false : { clipPath: "inset(0 12% 0 12%)" }}
              whileInView={reduce ? undefined : { clipPath: "inset(0 0% 0 0%)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: easeOut }}
            >
              <PhotoFrame
                label="MOTION — WIDE TRAINING FLOOR / ATMOSPHERE"
                tone="fitness"
                aspect="aspect-[16/11] md:aspect-[16/10]"
              />
            </motion.div>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-4 md:pt-16">
            <PhotoFrame
              label="MOTION — DETAIL CROP / HANDS OR STANCE"
              tone="detail"
              aspect="aspect-[3/4]"
            />
            <p className="bf-meta mt-4 text-[var(--bf-mute)]">
              Frame 02 · Detail
            </p>
          </Reveal>

          <Reveal delay={0.05} className="md:col-span-5 md:-mt-8">
            <PhotoFrame
              label="MOTION — COMBAT / FOOTWORK OR STRIKE"
              tone="combat"
              aspect="aspect-[4/5]"
            />
          </Reveal>

          <div className="flex flex-col justify-end gap-4 md:col-span-7 md:pl-6">
            <Reveal delay={0.1}>
              <p
                className="bf-display text-[clamp(2.5rem,7vw,5rem)] text-[var(--bf-bone)]"
              >
                Train.
                <br />
                Reset.
                <br />
                Advance.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <PhotoFrame
                label="MOTION — GROUP SESSION / ENERGY"
                tone="community"
                aspect="aspect-[16/9]"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
