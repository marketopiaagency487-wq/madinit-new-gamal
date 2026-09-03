import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Compare from "@/components/compare";
import AboutDeveloper from "@/components/about-developer";
import Payment from "@/components/payment";
import Location from "@/components/location";
import LeadSection from "@/components/lead-section";
import Faq from "@/components/faq";
import LeadPopup from "@/components/lead-popup";
import { site } from "@/lib/site";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.agency,
    telephone: site.phoneIntl,
    email: site.email,
    areaServed: "Cairo, Egypt",
    url: site.domain,
  };

  return (
    <>
      <Hero />
      <Projects />
      <Compare />
      <AboutDeveloper />
      <Payment />
      <Location />
      <LeadSection />
      <Faq />
      <LeadPopup />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
