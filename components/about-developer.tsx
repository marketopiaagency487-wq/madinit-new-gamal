import Reveal from "./reveal";

const points = [
  {
    title: "شركة مساهمة مدرجة",
    body: "مدينة مصر للإسكان والتعمير (MNHD سابقًا) مقيّدة بالبورصة المصرية، وقوائمها المالية منشورة للعامة.",
  },
  {
    title: "تسليمات فعلية على الأرض",
    body: "مراحل مستلمة ومأهولة بالسكان في تاج سيتي وسراي، مش مجرد مشاريع على الورق.",
  },
  {
    title: "موقع واحد متصل",
    body: "كل المشاريع على طريق السويس وامتداداته ومحور الأمل، قريبة من مدينة نصر ومصر الجديدة والعاصمة الإدارية.",
  },
];

export default function AboutDeveloper() {
  return (
    <section id="developer" className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <p className="eyebrow">The Developer</p>
            <h2 className="mt-3 text-2xl md:text-4xl">
              الشركة اللي خططت مدينة نصر… بتبني دلوقتي شرق القاهرة
            </h2>
            <p className="mt-6 leading-8 text-stone-2">
              تأسست مدينة مصر للإسكان والتعمير سنة <span className="num">1959</span>{" "}
              وكانت مسؤولة عن تخطيط مدينة نصر. بعد أكتر من{" "}
              <span className="num">65</span> سنة، الشركة نقلت نفس الخبرة لمجتمعات
              الجيل الرابع في القاهرة الجديدة ومستقبل سيتي، وطوّرت أكتر من{" "}
              <span className="num">5.4</span> مليون متر مربع.
            </p>

            <div className="ribbon-rule mt-8" />

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <p className="num text-2xl text-wood-2">65+</p>
                <p className="mt-1 text-sm text-stone-2">سنة خبرة</p>
              </div>
              <div>
                <p className="num text-2xl text-wood-2">32,000</p>
                <p className="mt-1 text-sm text-stone-2">أسرة متوقعة</p>
              </div>
              <div>
                <p className="num text-2xl text-wood-2">1M m²</p>
                <p className="mt-1 text-sm text-stone-2">مسطحات خضراء بسراي</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="slab-dark p-6">
                  <h3 className="text-lg">{p.title}</h3>
                  <p className="mt-2 leading-7 text-stone-2">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
