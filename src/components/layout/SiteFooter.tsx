import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { brand, contact, nav } from "@/content/site";

/** Footer chrome is always void/black — metallic logo + light type. */
export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(243,241,236,0.12)] bg-[var(--bf-void)] text-[var(--bf-bone)]">
      <div className="bf-shell grid gap-8 py-10 md:grid-cols-12 md:gap-8 md:py-12">
        <div className="md:col-span-5">
          <Link href="/" aria-label={`${brand.name} home`}>
            <BrandLogo surface="dark" size="footer" />
          </Link>
          <p className="bf-meta mt-4 text-[var(--bf-bone-dim)] md:mt-5">{brand.tagline}</p>
          <p className="bf-meta mt-2 text-[var(--bf-mute)]">{brand.location}</p>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <p className="bf-meta mb-3 text-[var(--bf-accent)] md:mb-4">Navigate</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:block sm:space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="bf-link text-[0.8rem] text-[var(--bf-bone-dim)] hover:text-[var(--bf-bone)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="bf-meta mb-4 text-[var(--bf-accent)]">Visit</p>
          <p className="text-[0.95rem] leading-relaxed text-[var(--bf-bone-dim)]">
            {contact.addressSingle}
          </p>
          <p className="mt-3">
            <a
              href={contact.phoneHref}
              className="text-[0.95rem] text-[var(--bf-bone)] underline-offset-4 hover:underline"
            >
              {contact.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a
              href={contact.whatsappUrl}
              className="text-[0.95rem] text-[var(--bf-bone-dim)] underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {contact.whatsappDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a
              href={contact.instagram}
              className="text-[0.95rem] text-[var(--bf-bone-dim)] underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram {contact.instagramHandle}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-[rgba(243,241,236,0.12)]">
        <div className="bf-shell flex flex-col gap-2 py-5 sm:flex-row sm:justify-between">
          <p className="bf-meta text-[var(--bf-mute)]">
            © {new Date().getFullYear()} {brand.name}
          </p>
          <p className="bf-meta text-[var(--bf-mute)]">{brand.philosophy}</p>
        </div>
      </div>
    </footer>
  );
}
