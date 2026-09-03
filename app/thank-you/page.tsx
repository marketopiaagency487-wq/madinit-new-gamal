import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import WaButton from "@/components/wa-button";

export const metadata: Metadata = {
  title: "تم استلام بياناتك | " + site.name,
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="mx-auto flex min-h-[80svh] max-w-2xl flex-col justify-center px-4 pb-20 pt-32 text-center">
      <p className="eyebrow mx-auto">Received</p>
      <h1 className="mt-4 text-3xl">وصلتنا بياناتك</h1>
      <p className="mt-5 leading-8 text-ink-3">
        مستشار عقاري هيتواصل معاك خلال دقائق في مواعيد العمل، ومعاه كتالوج
        الأسعار وجدول الأقساط للمشروع اللي اخترته.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <WaButton className="rounded-full bg-ink px-7 py-3.5 font-semibold text-paper">
          كلمنا على واتساب دلوقتي
        </WaButton>
        <Link
          href="/"
          className="rounded-full border border-stone-2 px-7 py-3.5 font-semibold"
        >
          رجوع للصفحة الرئيسية
        </Link>
      </div>
    </section>
  );
}
