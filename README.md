# مدينة مصر — لاندينج بيدج كل المشاريع

Next.js 16.3.4 · React 19 · Tailwind CSS 4 · Web3Forms · RTL · Static (○)

## التشغيل

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # كل الصفحات static
```

## اللي لازم تغيّره قبل النشر

كله في ملف واحد: `lib/site.ts`

| المفتاح | القيمة الحالية | المطلوب |
|---|---|---|
| `phone` / `phoneIntl` | 01001050018 | رقم الاتصال الفعلي |
| `whatsapp` | 201001050018 | رقم الواتساب بصيغة دولية بدون + |
| `web3formsKey` | REPLACE-WITH-YOUR-WEB3FORMS-KEY | المفتاح من web3forms.com |
| `gtagId` | AW-XXXXXXXXXX | تاج Google Ads |
| `conversions.form/whatsapp/call` | AW-XXXXXXXXXX/LABEL | لابل كل تحويل |
| `domain` | madinet-masr-projects.com | الدومين النهائي |

## بيانات المشاريع

`lib/projects.ts` — كل مشروع فيه الاسم والموقع والمساحة وأنواع الوحدات وسعر البداية ونظام السداد.
عدّل الأسعار من هنا وهي هتتحدث في الكروت وجدول المقارنة مع بعض.

## الصور

في `public/images/` صور SVG مؤقتة بألوان الاستايل. استبدلها بصور حقيقية بنفس الأسماء
(`hero.svg` → `hero.jpg` مع تعديل المسار في `components/hero.tsx` و `lib/projects.ts`).
المقاس المناسب: 1600×900 للهيرو، 1200×700 لكروت المشاريع.

## الخريطة

`components/location.tsx` فيه iframe لخرايط جوجل — غيّر الـ `q=` للموقع اللي عايزه.

## الالتزام بسياسات Google Ads

- صفحات `/about` و `/privacy` و `/disclaimer` موجودة ومربوطة في الفوتر.
- إفصاح إن الشركة وكيل تسويق مش المطور — في الفوتر وصفحة إخلاء المسؤولية.
- تنويه "أسعار استرشادية" تحت كروت المشاريع وجدول المقارنة وقسم السداد.
- Cookie consent + رابط سياسة الخصوصية تحت الفورم.
- `/thank-you` عليها `noindex` ومستثناة من robots.

## النشر على Vercel

ارفع المجلد على GitHub وبعدين Import في Vercel — من غير أي إعدادات إضافية.
