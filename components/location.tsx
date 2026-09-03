import Reveal from "./reveal";

const nearby = [
  { place: "مطار القاهرة الدولي", time: "5–10 دقائق" },
  { place: "مدينة نصر ومصر الجديدة", time: "10 دقائق" },
  { place: "الجامعة الأمريكية — التجمع", time: "15 دقيقة" },
  { place: "العاصمة الإدارية الجديدة", time: "20 دقيقة" },
];

export default function Location() {
  return (
    <section id="location" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Location</p>
            <h2 className="mt-3 text-2xl md:text-4xl">
              على طريق السويس ومحور الأمل
            </h2>
            <p className="mt-4 leading-8 text-ink-3">
              كل مشاريع مدينة مصر متمركزة في شرق القاهرة، على شبكة طرق بتوصل
              للمطار ومدينة نصر والعاصمة الإدارية من غير ما تخرج على الدائري
              الأوسطي.
            </p>

            <ul className="mt-8 divide-y divide-stone border-t border-stone">
              {nearby.map((n) => (
                <li
                  key={n.place}
                  className="flex items-center justify-between py-3.5"
                >
                  <span>{n.place}</span>
                  <span className="num text-wood">{n.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-3/70">
              المسافات تقديرية وتختلف حسب المشروع وحالة الطريق.
            </p>
          </div>

          <Reveal>
            <div className="frame h-[340px] md:h-[420px]">
              <iframe
                title="موقع مشاريع مدينة مصر"
                src="https://maps.google.com/maps?q=Taj%20City%20New%20Cairo&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
