import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `bf-btn bf-btn--${variant} ${className}`.trim();

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bf-btn__mark" aria-hidden />
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      <span className="bf-btn__mark" aria-hidden />
      {children}
    </Link>
  );
}
