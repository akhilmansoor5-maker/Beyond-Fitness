"use client";

import { contact, offer } from "@/content/site";

/** Persistent WhatsApp entry — icon-first on mobile to reduce clutter */
export function WhatsAppSticky() {
  const text = encodeURIComponent(
    `Hi Beyond Fitness — I'd like to start training.${
      offer.active ? ` Offer code: ${offer.code}` : ""
    }`,
  );

  return (
    <a
      href={`${contact.whatsappUrl}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bf-wa-sticky"
      aria-label="Chat on WhatsApp"
    >
      <span className="bf-wa-sticky__mark" aria-hidden />
      <span className="bf-wa-sticky__label">WhatsApp</span>
    </a>
  );
}
