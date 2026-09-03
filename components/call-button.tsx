"use client";

import { site } from "@/lib/site";
import { trackCall } from "@/lib/track";

export default function CallButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={`tel:${site.phoneIntl}`} onClick={trackCall} className={className}>
      {children}
    </a>
  );
}
