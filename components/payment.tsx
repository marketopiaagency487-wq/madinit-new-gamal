import Reveal from "./reveal";
import WaButton from "./wa-button";

const plans = [
  {
    down: "5%",
    years: "12 سنة",
    note: "الأشهر في تاج سيتي وسراي، بأقساط متساوية بدون فوائد.",
  },
  {
    down: "10%",
    years: "8 سنوات",
    note: "نظام ذا بترفلاي في مستقبل سيتي، بقسط أقل على مدة أقصر.",
  },
  {
    down: "كاش / خصم",
    years: "دفعة واحدة",
    note: "خصومات على السداد الكاش أو الدفعات المقدمة الأعلى.",
  },
];

export default function Payment() {
  return (
    <section id="payment" className="bg-stone/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <p className="eyebrow">Payment Plans</p>
        <h2 className="mt-3 text-2xl md:text-4xl">أنظمة السداد المتاحة</h2>
        <p className="mt-4 max-w-2xl leading-8 text-ink-3">
          الأنظمة بتختلف من مشروع للتاني ومن مرحلة للتانية. دي الصورة العامة،
          والتفاصيل الدقيقة بتتحدد وقت الحجز.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.down} delay={i * 60}>
              <div className="slab h-full p-7">
                <p className="eyebrow">Down Payment</p>
                <p className="num mt-3 text-4xl text-ink">{p.down}</p>
                <p className="mt-4 border-t border-stone pt-4 text-lg font-semibold">
                  تقسيط {p.years}
                </p>
                <p className="mt-2 leading-7 text-ink-3">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <WaButton
            message="مرحبًا، عايز جدول الأقساط المحدث لمشاريع مدينة مصر"
            className="rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition-colors hover:bg-ink-3"
          >
            اطلب جدول الأقساط
          </WaButton>
          <p className="text-xs text-ink-3/70">
            الأسعار وأنظمة السداد استرشادية وقابلة للتغيير من المطور دون إشعار
            مسبق.
          </p>
        </div>
      </div>
    </section>
  );
}
