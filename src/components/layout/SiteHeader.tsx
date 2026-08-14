"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { nav } from "@/content/site";
import { dur, easeOut } from "@/lib/motion";

/**
 * Header chrome is always void/black so the metallic silver logo reads.
 * Page bodies stay light via PageChrome — only this bar is black.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = nav.filter((item) => !("cta" in item && item.cta));
  const cta = nav.find((item) => "cta" in item && item.cta);

  const headerBg =
    scrolled || open
      ? "border-[rgba(243,241,236,0.12)] bg-[rgba(7,7,7,0.96)] backdrop-blur-md"
      : "border-transparent bg-[rgba(7,7,7,0.88)]";

  return (
    <header
      className={`bf-on-void fixed inset-x-0 top-0 z-50 border-b text-[var(--bf-bone)] transition-[background,border-color] duration-300 ${headerBg}`}
      data-nav-chrome="dark"
    >
      <div
        className="bf-shell flex items-center justify-between gap-4"
        style={{ height: "var(--bf-nav-h)" }}
      >
        <Link
          href="/"
          className="relative z-10 shrink-0"
          aria-label="Beyond Fitness Manjeri home"
          onClick={() => setOpen(false)}
        >
          <BrandLogo surface="dark" size="nav" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`bf-link text-[0.75rem] ${
                  active
                    ? "text-[var(--bf-accent)]"
                    : "text-[var(--bf-bone-dim)] hover:text-[var(--bf-bone)]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          {cta && (
            <Link
              href={cta.href}
              className="bf-btn bf-btn--primary !min-h-10 !px-4 !text-[0.7rem]"
            >
              <span className="bf-btn__mark" aria-hidden />
              {cta.label}
            </Link>
          )}
        </nav>

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center text-[var(--bf-bone)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: dur.base, ease: easeOut }}
            className="max-h-[calc(100dvh-var(--bf-nav-h))] overflow-y-auto border-t border-[rgba(243,241,236,0.12)] bg-[rgba(7,7,7,0.98)] pb-[env(safe-area-inset-bottom)] text-[var(--bf-bone)] lg:hidden"
          >
            <nav className="bf-shell flex flex-col gap-1 py-6" aria-label="Mobile">
              {nav.map((link, i) => {
                const active = pathname === link.href;
                const isCta = "cta" in link && link.cta;
                if (isCta) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="bf-btn bf-btn--primary mt-6 w-full"
                    >
                      <span className="bf-btn__mark" aria-hidden />
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 * i,
                      duration: dur.base,
                      ease: easeOut,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`bf-display block border-b border-[rgba(243,241,236,0.12)] py-3.5 text-[clamp(1.85rem,8vw,2.25rem)] ${
                        active ? "text-[var(--bf-accent)]" : "text-[var(--bf-bone)]"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
