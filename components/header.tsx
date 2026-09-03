"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { trackCall } from "@/lib/track";

const links = [
  { href: "/#projects", label: "المشاريع" },
  { href: "/#developer", label: "عن المطور" },
  { href: "/#payment", label: "أنظمة السداد" },
  { href: "/#location", label: "الموقع" },
  { href: "/#faq", label: "أسئلة شائعة" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-ink/95 backdrop-blur border-b border-white/10"
          : "bg-gradient-to-b from-ink/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20">
        <Link href="/" className="flex items-center gap-3">
          <span className="block h-8 w-1 bg-wood-2" aria-hidden />
          <span className="display text-paper text-lg md:text-xl">
            مدينة مصر
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-stone hover:text-wood-2 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneIntl}`}
            onClick={trackCall}
            className="hidden rounded-full border border-wood-2/60 px-5 py-2 text-sm text-wood-2 hover:bg-wood-2 hover:text-ink transition-colors md:inline-block"
          >
            <span className="num">{site.phone}</span>
          </a>
          <a
            href="#lead"
            className="hidden rounded-full bg-wood-2 px-5 py-2 text-sm font-semibold text-ink hover:bg-wood transition-colors md:inline-block"
          >
            احجز معاينة
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="فتح القائمة"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-paper md:hidden"
          >
            <span className="sr-only">القائمة</span>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-4 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-stone"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#lead"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-wood-2 py-3 text-center font-semibold text-ink"
            >
              احجز معاينة مجانية
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
