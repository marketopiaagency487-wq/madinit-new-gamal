"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie-consent")) setShow(true);
    } catch {
      /* التخزين مش متاح */
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("cookie-consent", "1");
    } catch {
      /* تجاهل */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-3 bottom-20 z-50 rounded-2xl border border-stone-2 bg-paper p-4 shadow-xl md:inset-x-auto md:bottom-6 md:right-6 md:max-w-sm">
      <p className="text-sm leading-7 text-ink-2">
        بنستخدم كوكيز لتحسين تجربة التصفح وقياس أداء الإعلانات. باستمرارك في
        التصفح أنت موافق على الاستخدام ده.{" "}
        <a href="/privacy" className="underline">
          سياسة الخصوصية
        </a>
      </p>
      <button
        onClick={accept}
        className="mt-3 w-full rounded-full bg-ink py-2.5 text-sm font-semibold text-paper"
      >
        موافق
      </button>
    </div>
  );
}
