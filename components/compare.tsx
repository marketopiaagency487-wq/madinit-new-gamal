import { projects } from "@/lib/projects";

export default function Compare() {
  const rows = projects.filter((p) => p.tag === "سكني");

  return (
    <section className="bg-ink py-16 text-paper md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="eyebrow">Quick Compare</p>
        <h2 className="mt-3 text-2xl md:text-3xl">مقارنة سريعة بين المشاريع السكنية</h2>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] text-right text-sm">
            <thead>
              <tr className="border-b border-white/15 text-stone-2">
                <th scope="col" className="py-3 pl-4 font-semibold">المشروع</th>
                <th scope="col" className="py-3 pl-4 font-semibold">الموقع</th>
                <th scope="col" className="py-3 pl-4 font-semibold">المساحة</th>
                <th scope="col" className="py-3 pl-4 font-semibold">تبدأ من</th>
                <th scope="col" className="py-3 font-semibold">السداد</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.slug} className="border-b border-white/8">
                  <th scope="row" className="py-4 pl-4 text-right font-semibold text-wood-2">
                    {p.name}
                  </th>
                  <td className="py-4 pl-4 text-stone-2">{p.location}</td>
                  <td className="py-4 pl-4 text-stone-2">{p.area}</td>
                  <td className="py-4 pl-4">
                    {p.priceFrom === "—" ? (
                      <span className="text-stone-2">حسب الوحدة</span>
                    ) : (
                      <>
                        <span className="num">{p.priceFrom}</span>{" "}
                        <span className="text-stone-2">ج.م</span>
                      </>
                    )}
                  </td>
                  <td className="py-4 text-stone-2">{p.plan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-xs text-stone-2/70">
          بيانات استرشادية للمقارنة فقط، وبتتغير حسب المرحلة وتاريخ الطرح.
        </p>
      </div>
    </section>
  );
}
