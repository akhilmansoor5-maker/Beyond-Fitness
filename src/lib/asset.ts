/** Prefix public asset paths for GitHub Pages basePath deploys. */
export function asset(path: string): string {
  if (
    !path ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  let normalized = path.startsWith("/") ? path : `/${path}`;
  // Avoid /Beyond-Fitness/Beyond-Fitness/... if already prefixed
  if (base && (normalized === base || normalized.startsWith(`${base}/`))) {
    return normalized;
  }
  return `${base}${normalized}`;
}
