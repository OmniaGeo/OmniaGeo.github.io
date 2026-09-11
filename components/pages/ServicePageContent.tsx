import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ServiceMotionScene } from "@/components/ServiceMotionScene";
import { BookingPricing, ServiceStartingPrice, WebsitePricing } from "@/components/ServicePricing";
import { localizePath } from "@/lib/i18n";
import { getServicePage } from "@/lib/servicePages";
import { services, type Locale } from "@/lib/site";

export function ServicePageContent({ id, locale }: { id: string; locale: Locale }) {
  const page = getServicePage(id);
  const service = services.find((item) => item.id === id);
  if (!page || !service) return null;

  const requestHref = `${localizePath("/contact", locale)}?service=${encodeURIComponent(page.contactValue)}`;

  return (
    <div lang={locale} className={`locale-${locale} service-page-shell`}>
      <section className="service-page-hero">
        <div className="service-page-hero-copy">
          <Breadcrumbs items={[
            { label: locale === "ka" ? "მთავარი" : "Home", href: localizePath("/", locale) },
            { label: locale === "ka" ? "სერვისები" : "Services", href: localizePath("/services", locale) },
            { label: service.title[locale] }
          ]} />
          <span className="service-page-eyebrow">{page.eyebrow[locale]}</span>
          <h1>{page.headline[locale]}</h1>
          <p>{page.intro[locale]}</p>
          <div className="service-page-actions">
            <Link href={requestHref} className="primary-button">{locale === "ka" ? "მოითხოვე ეს სერვისი" : "Request this service"}<span>↗</span></Link>
            <Link href={requestHref} className="secondary-link large-link">{locale === "ka" ? "კონტაქტი" : "Contact"}<span>↗</span></Link>
          </div>
        </div>

        <Reveal delay={0.05}>
          <div className="service-page-hero-visual">
            <ServiceMotionScene id={service.id} locale={locale} />
          </div>
        </Reveal>
      </section>

      <section className="service-page-includes">
        <Reveal>
          <div>
            <span className="service-pricing-kicker">{locale === "ka" ? "რას იღებ" : "What is included"}</span>
            <h2>{locale === "ka" ? "სერვისი, რომელსაც ბიზნესის რეალური გამოყენება აქვს." : "A service designed around how your business will actually use it."}</h2>
          </div>
        </Reveal>
        <div className="service-includes-grid">
          {page.deliverables[locale].map((item, index) => (
            <Reveal delay={index * 0.04} key={item}>
              <div className="service-include-item"><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="service-timeline-section" aria-labelledby={`timeline-${id}`}>
        <div className="service-timeline-heading">
          <span className="service-pricing-kicker">{locale === "ka" ? "ტიპური ვადა" : "Typical timeline"}</span>
          <h2 id={`timeline-${id}`}>{locale === "ka" ? "ვადას პროექტის მოცულობის მიხედვით ვაფიქსირებთ." : "Timing follows the scope."}</h2>
          <p>{locale === "ka" ? "ეს ვადები საორიენტაციოა. კონკრეტულ პროექტზე ზუსტ თარიღს სამუშაოს დაწყებამდე ვადასტურებთ." : "These are working estimates. We confirm the exact delivery window before the project starts."}</p>
        </div>
        <div className="service-timeline-list">
          {page.timeline.map((item, index) => (
            <div className="service-timeline-item" key={`${item.label.en}-${index}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.label[locale]}</strong>
              <p>{item.value[locale]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-pricing-note"><p>{page.pricingNote[locale]}</p></section>

      {id === "websites" ? (
        <WebsitePricing locale={locale} />
      ) : id === "booking" ? (
        <BookingPricing locale={locale} />
      ) : (
        <ServiceStartingPrice locale={locale} serviceValue={page.contactValue} startingPriceGel={page.startingPriceGel ?? 0} />
      )}

      <section className="service-page-bottom-cta">
        <div>
          <span>{locale === "ka" ? "არ ხარ დარწმუნებული პროექტის მოცულობაში?" : "Not sure about the scope yet?"}</span>
          <h2>{locale === "ka" ? "მოგვწერე იდეა. სირთულეს და ფასს ჩვენ დაგილაგებთ." : "Send the idea. We will help define the scope and quote it."}</h2>
        </div>
        <div className="service-page-actions">
          <Link href={requestHref} className="cream-button large">{locale === "ka" ? "მოითხოვე ფასი" : "Request a quote"}<span>↗</span></Link>
          <Link href={requestHref} className="secondary-link large-link">{locale === "ka" ? "კონტაქტი" : "Contact"}<span>↗</span></Link>
        </div>
      </section>
    </div>
  );
}
