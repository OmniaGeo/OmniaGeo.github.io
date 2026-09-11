import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ServiceMotionScene } from "@/components/ServiceMotionScene";
import { localizePath } from "@/lib/i18n";
import { services, type Locale } from "@/lib/site";

export function ServicesPageContent({ locale }: { locale: Locale }) {
  return (
    <div lang={locale} className={`locale-${locale}`}>
      <section className="page-hero-new page-hero-minimal">
        <div className="page-hero-copy">
          <Breadcrumbs items={[
            { label: locale === "ka" ? "მთავარი" : "Home", href: localizePath("/", locale) },
            { label: locale === "ka" ? "სერვისები" : "Services" }
          ]} />
          <h1>{locale === "ka" ? <>ციფრული პროდუქტები.<br />მარტივად.</> : <>Digital products.<br />Made clear.</>}</h1>
        </div>
      </section>

      <section className="services-detail-new services-detail-visual">
        {services.map((service) => (
          <article className="service-detail-new service-detail-visual-row" id={service.id} key={service.id}>
            <Reveal>
              <div className="service-detail-title-new">
                <h2>{service.title[locale]}</h2>
                <p>{service.description[locale]}</p>
                <div className="service-list-actions">
                  <Link href={localizePath(`/services/${service.id}`, locale)} className="secondary-link">
                    {locale === "ka" ? "სერვისის ნახვა" : "Explore service"}<span>↗</span>
                  </Link>
                  <Link href={`${localizePath("/contact", locale)}?service=${service.id === "websites" ? "website" : service.id === "gift-cards" ? "gift-card" : service.id === "systems" ? "system" : service.id}`} className="service-inline-request">
                    {locale === "ka" ? "მოითხოვე" : "Request"}
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.04}>
              <div className="service-detail-motion-wrap">
                <ServiceMotionScene id={service.id} locale={locale} />
              </div>
            </Reveal>
          </article>
        ))}
      </section>

      <section className="final-cta-new">
        <h2>{locale === "ka" ? "გაქვს სხვა ციფრული იდეა?" : "Have another digital idea?"}</h2>
        <Link href={localizePath("/contact", locale)} className="cream-button large">
          {locale === "ka" ? "მოგვწერე" : "Tell us"}<span>↗</span>
        </Link>
      </section>
    </div>
  );
}
