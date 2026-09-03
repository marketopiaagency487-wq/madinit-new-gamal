import ContactForm from "./contact-form";
import CallButton from "./call-button";
import WaButton from "./wa-button";
import { site } from "@/lib/site";

export default function LeadSection() {
  return (
    <section id="lead" className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div>
            <p className="eyebrow">Get the Catalog</p>
            <h2 className="mt-3 text-2xl md:text-4xl">
              كتالوج الأسعار وجدول الأقساط — مجانًا
            </h2>
            <p className="mt-5 leading-8 text-stone-2">
              سيب بياناتك ومستشار عقاري هيتواصل معاك، يبعتلك كتالوج PDF محدّث
              للمشروع اللي يهمك، ويرتّب معاينة على الأرض من غير أي رسوم.
            </p>

            <ul className="mt-8 space-y-3 text-stone-2">
              <li className="flex gap-3">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 bg-wood-2" />
                رد خلال دقائق في مواعيد العمل
              </li>
              <li className="flex gap-3">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 bg-wood-2" />
                مقارنة بين مرحلتين أو أكتر قبل ما تقرر
              </li>
              <li className="flex gap-3">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 bg-wood-2" />
                التعاقد بيتم مباشرة مع المطور
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton className="rounded-full border border-wood-2/60 px-6 py-3 text-sm font-semibold text-wood-2 hover:bg-wood-2 hover:text-ink">
                اتصل <span className="num">{site.phone}</span>
              </CallButton>
              <WaButton className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-paper hover:border-wood-2">
                واتساب
              </WaButton>
            </div>
          </div>

          <div className="rounded-2xl bg-paper p-6 text-ink md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
