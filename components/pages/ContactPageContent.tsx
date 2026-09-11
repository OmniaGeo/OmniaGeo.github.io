import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MessengerLogo } from "@/components/MessengerLogo";
import { ContactForm } from "@/components/ContactForm";
import { localizePath } from "@/lib/i18n";
import { site, type Locale } from "@/lib/site";

export function ContactPageContent({ locale }: { locale: Locale }) {
  return (
    <div lang={locale} className={`locale-${locale}`}>
      <section className="contact-page-new">
        <div className="contact-intro-new">
          <Breadcrumbs items={[
            { label: locale === "ka" ? "მთავარი" : "Home", href: localizePath("/", locale) },
            { label: locale === "ka" ? "კონტაქტი" : "Contact" }
          ]} />
          <h1>{locale === "ka" ? <>მოგვიყევი<br />რას აშენებ.</> : <>Tell us what<br />you are building.</>}</h1>
          <p>{locale === "ka" ? "საკმარისია იდეა, პრობლემა ან მიზანი. ზუსტი ტექნიკური აღწერა აუცილებელი არ არის." : "An idea, a problem or a goal is enough. You do not need a technical brief before reaching out."}</p>
          <div className="contact-direct-links" aria-label={locale === "ka" ? "პირდაპირი კონტაქტი" : "Direct contact"}>
            <a href={`mailto:${site.email}`} className="contact-email-new">{site.email}<span>↗</span></a>
            <a href={site.messenger} target="_blank" rel="noreferrer" className="contact-messenger-new">
              <MessengerLogo className="messenger-badge" aria-hidden="true" />
              <span>{locale === "ka" ? "მესენჯერში მოგვწერე" : "Message us on Messenger"}</span>
              <span>↗</span>
            </a>
          </div>
          <p className="contact-promise-new">{site.responsePromise[locale]}</p>
        </div>
        <div className="contact-form-wrap-new">
          <ContactForm locale={locale} />
        </div>
      </section>
    </div>
  );
}
