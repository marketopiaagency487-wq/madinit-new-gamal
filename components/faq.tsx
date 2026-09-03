const faqs = [
  {
    q: "إيه الفرق بين تاج سيتي وسراي؟",
    a: "تاج سيتي في القاهرة الجديدة على طريق السويس وأقرب للمطار ومصر الجديدة، وفيه مراحل مستلمة بالفعل. سراي أكبر مساحة وواقع على محور الأمل أمام مدينتي، وطرحه على مراحل متتابعة بمساحات خضراء أوسع.",
  },
  {
    q: "أقل مقدم للحجز كام؟",
    a: "بيبدأ من 5% في أغلب مراحل تاج سيتي وسراي مع تقسيط يوصل 12 سنة، و10% في ذا بترفلاي مع تقسيط 8 سنوات. الأنظمة بتتغير من مرحلة للتانية.",
  },
  {
    q: "الأسعار المعروضة نهائية؟",
    a: "لأ، دي أسعار استرشادية بتتغير حسب المرحلة والمساحة والدور وتاريخ الطرح. الأسعار النهائية بتتأكد من كتالوج المطور وقت الحجز.",
  },
  {
    q: "التعاقد بيتم مع مين؟",
    a: "التعاقد ودفع المقدم بيتم مباشرة مع شركة مدينة مصر للإسكان والتعمير. إحنا شركة تسويق عقاري بنساعدك في الاختيار والمعاينة والحجز.",
  },
  {
    q: "فيه وحدات استلام فوري؟",
    a: "أيوه، فيه مراحل مستلمة ومأهولة في تاج سيتي وسراي. التوافر بيتغير باستمرار، فاطلب قائمة الوحدات المتاحة حاليًا.",
  },
  {
    q: "المعاينة بفلوس؟",
    a: "لأ. الاستشارة والكتالوج والمعاينة على الأرض مجانية بالكامل.",
  },
];

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="bg-stone/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 text-2xl md:text-4xl">أسئلة بتتكرر كتير</h2>

        <div className="mt-10 divide-y divide-stone-2 border-y border-stone-2">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                {f.q}
                <span className="num shrink-0 text-wood transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-8 text-ink-3">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
