"use client";

import { useEffect } from "react";

export type PageTheme = "light" | "dark" | "combat";

type PageChromeProps = {
  theme?: PageTheme;
  children: React.ReactNode;
  className?: string;
};

/** Sets document theme tokens for the current route. */
export function PageChrome({
  theme = "light",
  children,
  className = "",
}: PageChromeProps) {
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    return () => {
      document.documentElement.dataset.theme = "light";
    };
  }, [theme]);

  return (
    <div className={`min-h-dvh bg-[var(--bf-page)] text-[var(--bf-text)] ${className}`.trim()} data-page-theme={theme}>
      {children}
    </div>
  );
}
