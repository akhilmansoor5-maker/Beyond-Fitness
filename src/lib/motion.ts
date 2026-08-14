/** Shared motion tokens — keep animations intentional and consistent. */
export const easeOut = [0.16, 1, 0.3, 1] as const;
export const easeImpact = [0.2, 0.8, 0.2, 1] as const;

export const dur = {
  fast: 0.18,
  base: 0.32,
  slow: 0.7,
  hero: 1.05,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.slow, ease: easeOut },
  },
};

export const clipReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: dur.hero, ease: easeImpact },
  },
};

export const maskWipe = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.1, ease: easeImpact },
  },
};

export const stagger = {
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};
