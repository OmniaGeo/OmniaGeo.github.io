import Link from "next/link";
import { BrandIntroHero } from "@/components/BrandIntroHero";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FaqList } from "@/components/FaqList";
import { FaqSchema } from "@/components/FaqSchema";
import { KineticServices } from "@/components/KineticServices";
import { HowItWorks } from "@/components/HowItWorks";
import { LocalSchema } from "@/components/LocalSchema";
import { MagneticLink } from "@/components/MagneticLink";
import { localizePath } from "@/lib/i18n";
import { caseStudies, faqs, homeCopy, type Locale } from "@/lib/site";

export function HomePageContent({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];

  return (
    <div lang={locale} className={`locale-${locale}`}>
      <LocalSchema locale={locale} />
      <FaqSchema items={faqs[locale]} />

      <BrandIntroHero locale={locale} />

      <section className="services-home-new" id="services">
        <div className="section-intro-new section-intro-minimal">
          <h2>{copy.servicesTitle}</h2>
        </div>
        <KineticServices locale={locale} />
      </section>


      <HowItWorks locale={locale} />

      <section className="work-home-new" id="work">
        <div className="section-intro-new section-intro-minimal work-intro-new">
          <h2>{copy.workTitle}</h2>
          <Link href={localizePath("/work", locale)} className="secondary-link large-link">{copy.allWork}<span>↗</span></Link>
        </div>
        <div className="case-grid-new">
          {caseStudies.map((study) => (
            <CaseStudyCard study={study} locale={locale} key={study.slug} compact />
          ))}
        </div>
      </section>

      <section className="faq-home-new" id="faq">
        <div className="section-intro-new section-intro-minimal faq-intro-new">
          <h2>{copy.faqTitle}</h2>
        </div>
        <FaqList items={faqs[locale]} />
      </section>

      <section className="final-cta-new">
        <h2>{copy.finalTitle}</h2>
        <MagneticLink href={localizePath("/contact", locale)} className="cream-button large">
          {copy.finalCta}<span>↗</span>
        </MagneticLink>
      </section>
    </div>
  );
}
