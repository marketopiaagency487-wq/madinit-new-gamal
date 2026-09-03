"use client";

import { useEffect, useState } from "react";
import ContactForm from "./contact-form";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("lead-popup")) {
        setDone(true);
        return;
      }
    } catch {
      /* تجاهل */
    }

    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      setOpen(true);
      try {
        sessionStorage.setItem("lead-popup", "1");
      } catch {
        /* تجاهل */
      }
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };

    const onScroll = () => {
      const h = document.body.scrollHeight - window.innerHeight;
      if (h > 0 && window.scrollY / h >= 0.57) fire();
    };

    const timer = setTimeout(fire, 16000);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (done || !open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/70 p-4 backdrop-blur-sm md:items-center"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="اطلب كتالوج الأسعار"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl bg-paper p-6 md:p-8"
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="إغلاق"
          className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-stone-2 text-ink-3"
        >
          ✕
        </button>

        <p className="eyebrow">Price List</p>
        <h3 className="mt-2 text-xl">استلم كتالوج الأسعار المحدّث</h3>
        <p className="mt-2 text-sm leading-7 text-ink-3">
          سيب رقمك، وهنبعتلك جدول المساحات والأسعار وأنظمة السداد للمشروع اللي
          يهمك.
        </p>

        <div className="mt-5">
          <ContactForm compact />
        </div>
      </div>
    </div>
  );
}
