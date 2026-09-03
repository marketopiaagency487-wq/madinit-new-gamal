"use client";

import { waLink } from "@/lib/site";
import { trackWhatsapp } from "@/lib/track";

export default function WaButton({
  children,
  className = "",
  message,
}: {
  children: React.ReactNode;
  className?: string;
  message?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsapp}
      className={className}
    >
      {children}
    </a>
  );
}
