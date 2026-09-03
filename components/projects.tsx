import { projects } from "@/lib/projects";
import Reveal from "./reveal";
import WaButton from "./wa-button";

export default function Projects() {
  return (
    <section id="projects" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <p className="eyebrow">Portfolio</p>
        <h2 className="mt-3 text-2xl md:text-4xl">
          المشاريع المتاحة للحجز الآن
        </h2>
        <p className="mt-4 max-w-2xl leading-8 text-ink-3">
          ستة مشاريع بين القاهرة الجديدة ومستقبل سيتي وأسيوط، تختلف في الموقع
          والمساحة ونظام السداد. اختار اللي يناسبك واطلب تفاصيله.
        </p>
        <div className="ribbon-rule mt-8" />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 55}>
              <article className="slab h-full overflow-hidden">
                <div
                  className="h-44 w-full bg-cover bg-center md:h-52"
                  style={{ backgroundImage: `url(${p.image})` }}
                  role="img"
                  aria-label={`${p.name} — ${p.location}`}
                />
                <div className="p-6 md:p-7">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl md:text-2xl">{p.name}</h3>
                    <span className="eyebrow">{p.latin}</span>
                  </div>

                  <p className="mt-2 text-sm text-ink-3">{p.location}</p>
                  <p className="mt-4 leading-7 text-ink-2/90">{p.blurb}</p>

                  <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-stone pt-5 text-sm">
                    <div>
                      <dt className="text-ink-3/70">المساحة</dt>
                      <dd className="mt-1 font-semibold">{p.area}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-3/70">تبدأ من</dt>
                      <dd className="mt-1 font-semibold">
                        {p.priceFrom === "—" ? (
                          "حسب الوحدة"
                        ) : (
                          <>
                            <span className="num">{p.priceFrom}</span> ج.م
                          </>
                        )}
                      </dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-ink-3/70">نظام السداد</dt>
                      <dd className="mt-1 font-semibold">{p.plan}</dd>
                    </div>
                  </dl>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.types.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-stone/60 px-3 py-1 text-xs text-ink-2"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <WaButton
                    message={`مرحبًا، عايز تفاصيل وأسعار ${p.name}`}
                    className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink-3"
                  >
                    اطلب تفاصيل {p.name}
                  </WaButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-ink-3/70">
          الأسعار المعروضة استرشادية وقابلة للتغيير حسب المرحلة والمساحة وتاريخ
          الطرح، ولا تُعد عرضًا تعاقديًا.
        </p>
      </div>
    </section>
  );
}
