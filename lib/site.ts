// ————————————————————————————————————————————————
// عدّل القيم دي بس وهي هتتطبق على الصفحة كلها
// ————————————————————————————————————————————————
export const site = {
  name: "مدينة مصر للإسكان والتعمير",
  shortName: "مدينة مصر",
  domain: "https://madinet-masr-projects.com", // غيّر الدومين
  phone: "01001050018", // رقم الاتصال الظاهر
  phoneIntl: "+201001050018",
  whatsapp: "201001050018", // رقم الواتساب بصيغة دولية بدون +
  email: "leads@grandeur-spaces.com",
  agency: "Grandeur Spaces",
  // مفتاح Web3Forms — حط المفتاح بتاعك مكان القيمة دي
  web3formsKey: "REPLACE-WITH-YOUR-WEB3FORMS-KEY",
  // Google Ads
  gtagId: "AW-XXXXXXXXXX",
  conversions: {
    form: "AW-XXXXXXXXXX/FORM_LABEL",
    whatsapp: "AW-XXXXXXXXXX/WA_LABEL",
    call: "AW-XXXXXXXXXX/CALL_LABEL",
  },
};

export const waLink = (msg = "مرحبًا، عايز أعرف تفاصيل وأسعار مشاريع مدينة مصر") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
