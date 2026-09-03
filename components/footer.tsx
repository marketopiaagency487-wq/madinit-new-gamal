import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink-2 py-14 text-stone-2">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="block h-7 w-1 bg-wood-2" aria-hidden />
              <span className="display text-paper text-lg">مدينة مصر</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7">
              صفحة تسويقية تعرض مشاريع شركة مدينة مصر للإسكان والتعمير في
              القاهرة الجديدة ومستقبل سيتي وأسيوط.
            </p>
          </div>

          <div>
            <h3 className="text-sm text-paper">تواصل</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`tel:${site.phoneIntl}`} className="num hover:text-wood-2">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-wood-2">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-paper">صفحات</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-wood-2">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-wood-2">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-wood-2">
                  إخلاء المسؤولية
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="ribbon-rule my-8" />

        <p className="text-xs leading-7">
          {site.agency} شركة تسويق عقاري مستقلة وليست المطور العقاري. جميع
          العلامات التجارية وأسماء المشاريع ملك لأصحابها. الأسعار والمساحات
          وأنظمة السداد المعروضة استرشادية وقابلة للتغيير من المطور دون إشعار
          مسبق، ولا تُعد إيجابًا أو عرضًا تعاقديًا. التعاقد يتم مباشرة مع
          الشركة المطورة.
        </p>
        <p className="mt-4 text-xs">
          © <span className="num">{new Date().getFullYear()}</span> {site.agency}
        </p>
      </div>
    </footer>
  );
}
