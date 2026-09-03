export type Project = {
  slug: string;
  name: string;
  latin: string;
  location: string;
  area: string;
  types: string[];
  priceFrom: string;
  plan: string;
  blurb: string;
  image: string;
  tag: "سكني" | "تجاري";
};

export const projects: Project[] = [
  {
    slug: "taj-city",
    name: "تاج سيتي",
    latin: "Taj City",
    location: "القاهرة الجديدة — طريق السويس",
    area: "900 فدان",
    types: ["استوديو", "شقق", "دوبلكس", "تاون هاوس", "فيلات"],
    priceFrom: "5,900,000",
    plan: "مقدم يبدأ من 5% وتقسيط حتى 12 سنة",
    blurb:
      "أكبر مجتمعات مدينة مصر السكنية، على بُعد دقائق من مطار القاهرة ومصر الجديدة. مراحل متعددة بين شقق جاهزة للاستلام وفيلات على البحيرات.",
    image: "/images/taj-city.svg",
    tag: "سكني",
  },
  {
    slug: "sarai",
    name: "سراي",
    latin: "Sarai",
    location: "القاهرة الجديدة — محور الأمل",
    area: "1,359 فدان",
    types: ["شقق", "دوبلكس", "تاون هاوس", "توين هاوس", "فيلات"],
    priceFrom: "6,300,000",
    plan: "مقدم يبدأ من 5% وتقسيط حتى 12 سنة",
    blurb:
      "مدينة متكاملة على محور الأمل أمام مدينتي، بمليون متر مسطحات خضراء ومراحل متتابعة تناسب السكن والاستثمار.",
    image: "/images/sarai.svg",
    tag: "سكني",
  },
  {
    slug: "butterfly",
    name: "ذا بترفلاي",
    latin: "The Butterfly",
    location: "مستقبل سيتي — محور الأمل",
    area: "200 فدان",
    types: ["شقق", "دوبلكس", "تاون هاوس", "فيلات"],
    priceFrom: "7,200,000",
    plan: "مقدم 10% وتقسيط حتى 8 سنوات",
    blurb:
      "أحدث إطلاقات مدينة مصر في مستقبل سيتي، على الجانب المقابل لسراي ومواجه لمدينتي مباشرة، بتصميم مفتوح على المساحات الخضراء.",
    image: "/images/butterfly.svg",
    tag: "سكني",
  },
  {
    slug: "talala",
    name: "تلالا",
    latin: "Talala",
    location: "القاهرة الجديدة",
    area: "مرحلة سكنية جديدة",
    types: ["شقق", "دوبلكس", "فيلات"],
    priceFrom: "8,500,000",
    plan: "مقدم يبدأ من 5% وتقسيط على سنوات",
    blurb:
      "مجتمع سكني جديد ضمن محفظة مدينة مصر بالقاهرة الجديدة، بمساحات محدودة وطرح على مراحل.",
    image: "/images/talala.svg",
    tag: "سكني",
  },
  {
    slug: "d2n-mall",
    name: "مول D2N",
    latin: "D2N Mall",
    location: "داخل كمبوند سراي — محور الأمل",
    area: "مركز تجاري وإداري وطبي",
    types: ["محلات", "مكاتب", "عيادات"],
    priceFrom: "—",
    plan: "أنظمة سداد ممتدة",
    blurb:
      "الذراع التجاري لكمبوند سراي: وحدات تجارية وإدارية وطبية تخدم مجتمعًا سكنيًا ضخمًا قيد التسليم.",
    image: "/images/d2n.svg",
    tag: "تجاري",
  },
  {
    slug: "zahw",
    name: "زهو",
    latin: "Zahw",
    location: "أسيوط",
    area: "توسع إقليمي",
    types: ["شقق", "فيلات"],
    priceFrom: "—",
    plan: "أنظمة سداد مرنة",
    blurb:
      "أول خروج لمدينة مصر خارج القاهرة الكبرى، بمجتمع سكني متكامل في صعيد مصر.",
    image: "/images/zahw.svg",
    tag: "سكني",
  },
];
