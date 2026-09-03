"use client";

import { site, waLink } from "@/lib/site";
import { trackCall, trackWhatsapp } from "@/lib/track";

export default function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-ink text-paper md:hidden">
      <a
        href={`tel:${site.phoneIntl}`}
        onClick={trackCall}
        className="py-3.5 text-center text-sm font-semibold"
      >
        اتصل
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsapp}
        className="border-x border-white/10 py-3.5 text-center text-sm font-semibold text-wood-2"
      >
        واتساب
      </a>
      <a href="#lead" className="py-3.5 text-center text-sm font-semibold">
        احجز
      </a>
    </div>
  );
}
