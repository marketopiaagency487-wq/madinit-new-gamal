import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "من نحن | " + site.agency,
  description:
    "معلومات عن الجهة المسؤولة عن هذه الصفحة التسويقية وطرق التواصل معها.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-20 pt-32">
      <p className="eyebrow">About Us</p>
      <h1 className="mt-3 text-3xl">من نحن</h1>
      <div className="ribbon-rule my-8" />

      <div className="space-y-5 leading-8 text-ink-2">
        <p>
          {site.agency} شركة تسويق عقاري تعمل في السوق المصري وتقدم استشارات
          للمشترين والمستثمرين الباحثين عن وحدات سكنية وتجارية في القاهرة
          الجديدة ومستقبل سيتي والمدن الجديدة.
        </p>
        <p>
          هذه الصفحة مخصصة لعرض مشاريع شركة مدينة مصر للإسكان والتعمير. نحن لسنا
          المطور العقاري، ولا نمثل الشركة المطورة قانونيًا، ودورنا يقتصر على
          التسويق وترتيب المعاينات وتوصيل العميل بإدارة مبيعات المطور.
        </p>
        <h2 className="pt-4 text-xl">خدماتنا</h2>
        <ul className="list-disc space-y-2 pr-5">
          <li>استشارة مجانية لاختيار المشروع والوحدة المناسبة للميزانية.</li>
          <li>توفير كتالوجات الأسعار وجداول الأقساط المحدّثة.</li>
          <li>ترتيب معاينة على الأرض ومتابعة إجراءات الحجز مع المطور.</li>
        </ul>

        <h2 className="pt-4 text-xl">التواصل</h2>
        <p>
          الهاتف:{" "}
          <a href={`tel:${site.phoneIntl}`} className="num underline">
            {site.phone}
          </a>
          <br />
          البريد الإلكتروني:{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          <br />
          مقر العمل: القاهرة، جمهورية مصر العربية.
        </p>
      </div>
    </article>
  );
}
