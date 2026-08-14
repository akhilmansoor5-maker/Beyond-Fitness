"use client";

import { motion, useReducedMotion } from "framer-motion";
import { dur, easeOut } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

/** Scroll reveal — opacity + transform only. Stillness is the default. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: dur.slow, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
