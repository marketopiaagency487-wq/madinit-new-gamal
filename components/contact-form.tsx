"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { site } from "@/lib/site";
import { trackForm } from "@/lib/track";
import { projects } from "@/lib/projects";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot
    if ((data.get("botcheck") as string)?.length) return;

    data.append("access_key", site.web3formsKey);
    data.append("subject", "عميل جديد — صفحة مشاريع مدينة مصر");
    data.append("from_name", site.name);
    data.append("page", typeof window !== "undefined" ? window.location.href : "");

    setState("sending");
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        trackForm();
        form.reset();
        router.push("/thank-you");
      } else {
        setState("error");
        setError("الإرسال ما تمّش. جرّب تاني أو كلمنا على الواتساب.");
      }
    } catch {
      setState("error");
      setError("في مشكلة في الاتصال. جرّب تاني أو كلمنا على الواتساب.");
    }
  };

  const field =
    "w-full rounded-xl border border-stone-2 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-3/50 focus:border-wood";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm">
            الاسم
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={3}
            placeholder="اسمك بالكامل"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm">
            رقم الموبايل
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            pattern="[0-9+\s]{8,20}"
            inputMode="tel"
            placeholder="01xxxxxxxxx"
            className={`${field} num text-right`}
            dir="ltr"
          />
        </div>
      </div>

      <div className={compact ? "" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor="project" className="mb-1.5 block text-sm">
            المشروع المهتم بيه
          </label>
          <select id="project" name="project" className={field} defaultValue="">
            <option value="">كل المشاريع</option>
            {projects.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        {!compact && (
          <div>
            <label htmlFor="budget" className="mb-1.5 block text-sm">
              الميزانية التقريبية
            </label>
            <select id="budget" name="budget" className={field} defaultValue="">
              <option value="">اختياري</option>
              <option>أقل من 7 مليون</option>
              <option>7 – 12 مليون</option>
              <option>12 – 20 مليون</option>
              <option>أكتر من 20 مليون</option>
            </select>
          </div>
        )}
      </div>

      {!compact && (
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm">
            ملاحظات
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="نوع الوحدة، المساحة المطلوبة، وقت التسليم…"
            className={field}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full rounded-full bg-wood px-7 py-3.5 font-semibold text-paper transition-colors hover:bg-wood-2 hover:text-ink disabled:opacity-60"
      >
        {state === "sending" ? "جاري الإرسال…" : "ابعت البيانات واستلم الكتالوج"}
      </button>

      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}

      <p className="text-xs leading-6 text-ink-3/70">
        بإرسال بياناتك أنت موافق إن مستشار عقاري من {site.agency} يتواصل معاك
        بخصوص الاستفسار. بنستخدم البيانات لغرض الرد على الاستفسار فقط — راجع{" "}
        <a href="/privacy" className="underline">
          سياسة الخصوصية
        </a>
        .
      </p>
    </form>
  );
}
