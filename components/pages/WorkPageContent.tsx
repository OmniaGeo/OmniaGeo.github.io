import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { localizePath } from "@/lib/i18n";
import { caseStudies, type Locale } from "@/lib/site";

export function WorkPageContent({ locale }: { locale: Locale }) {
  return (
    <div lang={locale} className={`locale-${locale}`}>
      <section className="page-hero-new page-hero-minimal">
        <div className="page-hero-copy">
          <Breadcrumbs items={[
            { label: locale === "ka" ? "მთავარი" : "Home", href: localizePath("/", locale) },
            { label: locale === "ka" ? "ჩვენი ნამუშევრები" : "Our Work" }
          ]} />
          <h1>{locale === "ka" ? <>ჩვენი ნამუშევრები,<br />არა პრეზენტაცია.</> : <>Work,<br />not a pitch deck.</>}</h1>
        </div>
        <p className="page-lead-new">
          {locale === "ka"
            ? "რეალური პროექტები და შერჩეული კონცეპტები, რომლებიც აჩვენებს როგორ ვაწყობთ ციფრულ გამოცდილებებს."
            : "Live projects and selected concepts showing how we build digital experiences."}
        </p>
      </section>
      <section className="case-grid-new work-page-grid-new">
        {caseStudies.map((study) => <CaseStudyCard study={study} locale={locale} key={study.slug} compact />)}
      </section>
    </div>
  );
}
