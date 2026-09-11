import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { localizePath } from "@/lib/i18n";
import type { CaseStudy, Locale } from "@/lib/site";

export function CaseStudyPageContent({ study, locale }: { study: CaseStudy; locale: Locale }) {
  return (
    <div lang={locale} className={`locale-${locale}`}>
      <article className="case-study-page-new">
        <header className="case-study-hero-new">
          <Breadcrumbs items={[
            { label: locale === "ka" ? "მთავარი" : "Home", href: localizePath("/", locale) },
            { label: locale === "ka" ? "ჩვენი ნამუშევრები" : "Our Work", href: localizePath("/work", locale) },
            { label: study.title }
          ]} />
          <p className="case-study-sector-new">{study.sector[locale]}</p>
          <h1>{study.title}</h1>
          <p className="case-study-summary-new">{study.summary[locale]}</p>
          {study.liveUrl && (
            <div className="case-study-live-action">
              <a href={study.liveUrl} target="_blank" rel="noreferrer" className="primary-button">
                {locale === "ka" ? "რეალური საიტის ნახვა" : "View live website"}<span>↗</span>
              </a>
            </div>
          )}
        </header>

        <div className="case-study-image-new">
          <Image src={study.image} width={1600} height={1000} alt={study.alt[locale]} priority sizes="100vw" />
        </div>

        <section className="case-study-body-new">
          <div>
            <h2>{locale === "ka" ? "ამოცანა" : "The challenge"}</h2>
            <p>{study.challenge[locale]}</p>
          </div>
          <div>
            <h2>{locale === "ka" ? "მიდგომა" : "The approach"}</h2>
            <ul>{study.approach[locale].map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h2>{locale === "ka" ? "შედეგი" : "The outcome"}</h2>
            <p>{study.outcome[locale]}</p>
          </div>
        </section>

        <section className="case-study-end-new">
          <h2>{locale === "ka" ? "გინდა მსგავსი მიმართულების პროექტი?" : "Building something in a similar space?"}</h2>
          <Link href={localizePath("/contact", locale)} className="primary-button large">
            {locale === "ka" ? "მოგვიყევი" : "Tell us about it"}<span>↗</span>
          </Link>
        </section>
      </article>
    </div>
  );
}
