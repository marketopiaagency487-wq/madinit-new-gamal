import Ribbon from "./ribbon";
import { site } from "@/lib/site";
import CallButton from "./call-button";

const stats = [
  { value: "1959", label: "سنة التأسيس" },
  { value: "5.4M m²", label: "مساحة مطوّرة" },
  { value: "12 سنة", label: "أقصى مدة تقسيط" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <div
          className="kenburns h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero.svg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ink/95 via-ink/80 to-ink/40" />
      </div>

      <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-4 pt-24 pb-16">
        <p className="eyebrow">Madinet Masr · Since 1959</p>
        <h1 className="mt-4 max-w-3xl text-3xl leading-[1.3] md:text-5xl md:leading-[1.25]">
          محفظة مدينة مصر كاملة في صفحة واحدة:
          <br />
          تاج سيتي، سراي، ذا بترفلاي، تلالا ومول D2N
        </h1>
        <Ribbon className="mt-6" />

        <p className="mt-6 max-w-xl text-stone-2 leading-8">
          مقارنة سريعة بين المشاريع من حيث الموقع والمساحات وأنظمة السداد، مع
          كتالوج أسعار محدّث يوصلك على واتساب في دقائق.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#lead"
            className="rounded-full bg-wood-2 px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-wood"
          >
            اطلب كتالوج الأسعار
          </a>
          <CallButton className="rounded-full border border-wood-2/60 px-7 py-3.5 font-semibold text-wood-2 transition-colors hover:bg-wood-2 hover:text-ink">
            اتصل بنا <span className="num">{site.phone}</span>
          </CallButton>
        </div>

        <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="num text-xl text-wood-2 md:text-2xl">{s.value}</dt>
              <dd className="mt-1 text-xs text-stone-2 md:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
