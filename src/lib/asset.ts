/** Prefix public asset paths for GitHub Pages basePath deploys. */
export function asset(path: string): string {
  if (!path || path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
