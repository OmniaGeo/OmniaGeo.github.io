"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/site";

const GEL_PER_USD = 2.7;

type Currency = "GEL" | "USD";

function money(gel: number, currency: Currency) {
  if (currency === "GEL") return `${gel.toLocaleString("en-US")} ₾`;
  return `$${Math.round(gel / GEL_PER_USD).toLocaleString("en-US")}`;
}

function CurrencyToggle({ currency, setCurrency, locale }: { currency: Currency; setCurrency: (currency: Currency) => void; locale: Locale }) {
  return (
    <div className="currency-toggle" role="group" aria-label={locale === "ka" ? "ვალუტის არჩევა" : "Choose currency"}>
      {(["GEL", "USD"] as Currency[]).map((item) => (
        <button
          type="button"
          key={item}
          className={currency === item ? "active" : ""}
          onClick={() => setCurrency(item)}
          aria-pressed={currency === item}
        >
          {locale === "ka" ? (item === "GEL" ? "₾ ლარი" : "$ დოლარი") : (item === "GEL" ? "₾ GEL" : "$ USD")}
          {currency === item && <motion.span layoutId="currency-pill" className="currency-toggle-pill" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
        </button>
      ))}
    </div>
  );
}

export function WebsitePricing({ locale }: { locale: Locale }) {
  const [currency, setCurrency] = useState<Currency>("GEL");
  const reduce = useReducedMotion();
  const requestHref = `${localizePath("/contact", locale)}?service=website`;

  const t = locale === "ka" ? {
    title: "ორი გზა. ორივე თავიდანვე ჩანს.",
    subtitle: "ყოველთვიური მოდელი დაბალ საწყის ხარჯს გაძლევს; ერთჯერადი მოდელი — სრულ საკუთრებას.",
    monthly: "ყოველთვიური",
    monthlyPrice: "თვეში",
    monthlySub: "პირველი 3 თვე მინიმალური ვადაა. ამის შემდეგ გააუქმე ნებისმიერ დროს.",
    monthlyScopeTitle: "ყოველთვიური გეგმის სტანდარტული მოცულობა",
    monthlyPoints: [
      "ინდივიდუალური ბიზნეს ვებსაიტი — მაქსიმუმ 5 სტანდარტული გვერდი",
      "OMNIA-ს მიერ მართული ქვედომენი",
      "ყველა ეკრანზე მორგებული აწყობა, საკონტაქტო ფორმა და საბაზისო ტექნიკური საძიებო ოპტიმიზაცია",
      "ჰოსტინგი და ტექნიკური მოვლა შედის",
      "თვეში მაქსიმუმ 2 მცირე კონტენტის ან დიზაინის ცვლილების მოთხოვნა"
    ],
    monthlyOutside: "ახალი გვერდები, ჯავშნის სისტემა, ონლაინ მაღაზია, მართვის პანელები და ინდივიდუალური ინტეგრაციები ყოველთვიური გეგმის სტანდარტულ მოცულობაში არ შედის და ცალკე ფასდება.",
    monthlyTermsTitle: "მოკლე პირობები",
    monthlyTerms: [
      "3-თვიანი საწყისი ვალდებულება",
      "მე-3 თვის შემდეგ გაუქმება ნებისმიერ დროს",
      "საიტი აქტიურია, სანამ გამოწერა გადახდილია",
      "ტექნიკური საკუთრება რჩება OMNIA-ს; ბიზნესის ბრენდი სრულად შენია",
      "სრული საკუთრების გამოსყიდვა შესაძლებელია ცალკე შეთავაზებით"
    ],
    oneTime: "ერთჯერადი / სრული საკუთრება",
    landing: "ერთგვერდიანი საიტი",
    business: "ბიზნეს ვებსაიტი",
    ecommerce: "ონლაინ მაღაზია",
    from: "დან",
    custom: "ინდივიდუალური ფასი",
    ownExclusive: [
      "შენი არჩევანის დომენი",
      "საიტისა და კოდის სრული საკუთრება",
      "შეგიძლია გადაიტანო, შეცვალო ან სხვა გუნდს გადააბარო",
      "OMNIA-ს სავალდებულო ყოველთვიური საფასური არ გაქვს"
    ],
    thirdParty: "დომენისა და ჰოსტინგის მესამე მხარის ხარჯები ცალკეა.",
    request: "მოითხოვე ეს სერვისი",
    quote: "მოითხოვე ფასი",
    approx: "დოლარში ნაჩვენები ფასები მიახლოებითია. საბოლოო შეთავაზება ფორმდება ლარში."
  } : {
    title: "Two ways to launch. Both visible upfront.",
    subtitle: "The monthly model lowers the upfront cost; the one-time model gives you full ownership.",
    monthly: "Monthly",
    monthlyPrice: "per month",
    monthlySub: "The first 3 months are the minimum term. After that, cancel whenever you want.",
    monthlyScopeTitle: "Standard monthly scope",
    monthlyPoints: [
      "A custom business website with up to 5 standard pages",
      "OMNIA-managed subdomain",
      "Responsive build, contact form and basic technical SEO",
      "Hosting and technical maintenance included",
      "Up to 2 small content or design update requests per month"
    ],
    monthlyOutside: "New pages, booking, e-commerce, dashboards and custom integrations are outside the standard monthly scope and are quoted separately.",
    monthlyTermsTitle: "Key terms",
    monthlyTerms: [
      "3-month initial commitment",
      "Cancel any time after month 3",
      "The site stays live while the subscription is paid",
      "Technical ownership stays with OMNIA; your business branding stays fully yours",
      "A full-ownership buyout can be quoted separately"
    ],
    oneTime: "One-time / full ownership",
    landing: "Landing page",
    business: "Business website",
    ecommerce: "E-commerce",
    from: "from",
    custom: "Custom quote",
    ownExclusive: [
      "Domain of your choice",
      "Full ownership of the website and code",
      "Move, modify or hand the site to another team whenever you want",
      "No mandatory recurring OMNIA website fee after handover"
    ],
    thirdParty: "Third-party domain / hosting costs are separate.",
    request: "Request this service",
    quote: "Request a quote",
    approx: "USD prices are approximate conversions. Final proposals are issued in GEL."
  };

  return (
    <section className="website-pricing-section" aria-labelledby="website-pricing-title">
      <div className="service-pricing-heading">
        <div>
          <span className="service-pricing-kicker">{locale === "ka" ? "ფასები" : "Pricing"}</span>
          <h2 id="website-pricing-title">{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
        <CurrencyToggle currency={currency} setCurrency={setCurrency} locale={locale} />
      </div>

      <div className="website-pricing-grid" aria-label={locale === "ka" ? "ვებსაიტის ფასების შედარება" : "Website pricing comparison"}>
        <motion.article
          className="pricing-plan pricing-plan-monthly"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduce ? undefined : { y: -5 }}
        >
          <div className="pricing-plan-topline">
            <h3>{t.monthly}</h3>
            <span className="pricing-plan-dot" aria-hidden="true" />
          </div>
          <div className="pricing-main-price" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.strong key={currency} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                {money(180, currency)}
              </motion.strong>
            </AnimatePresence>
            <span>{t.monthlyPrice}</span>
          </div>
          <p className="pricing-plan-lead">{t.monthlySub}</p>

          <div className="pricing-scope-block">
            <strong>{t.monthlyScopeTitle}</strong>
            <ul className="pricing-feature-list pricing-feature-list-neutral">
              {t.monthlyPoints.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <p className="pricing-scope-exclusion">{t.monthlyOutside}</p>
          </div>

          <div className="subscription-terms-summary">
            <strong>{t.monthlyTermsTitle}</strong>
            <ul>
              {t.monthlyTerms.map((term) => <li key={term}>{term}</li>)}
            </ul>
          </div>

          <Link href={requestHref} className="primary-button pricing-plan-cta">{t.request}<span>↗</span></Link>
        </motion.article>

        <motion.article
          className="pricing-plan pricing-plan-owned"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduce ? undefined : { y: -5 }}
        >
          <div className="pricing-plan-topline">
            <h3>{t.oneTime}</h3>
            <span className="pricing-plan-detach" aria-hidden="true"><i /><i /></span>
          </div>
          <div className="owned-price-list" aria-live="polite">
            <div><span>{t.landing}</span><strong><small>{t.from}</small> {money(650, currency)}</strong></div>
            <div><span>{t.business}</span><strong><small>{t.from}</small> {money(1200, currency)}</strong></div>
            <div><span>{t.ecommerce}</span><strong><small>{t.from}</small> {money(2800, currency)}</strong></div>
          </div>
          <ul className="pricing-feature-list ownership-exclusive-list">
            {t.ownExclusive.map((point) => <li key={point}>{point}</li>)}
          </ul>
          <p className="pricing-third-party-note">{t.thirdParty}</p>
          <Link href={requestHref} className="cream-button pricing-plan-cta">{t.quote}<span>↗</span></Link>
        </motion.article>
      </div>

      {currency === "USD" && <p className="currency-note">{t.approx}</p>}
    </section>
  );
}

export function BookingPricing({ locale }: { locale: Locale }) {
  const [currency, setCurrency] = useState<Currency>("GEL");
  const reduce = useReducedMotion();
  const requestHref = `${localizePath("/contact", locale)}?service=booking`;

  const t = locale === "ka" ? {
    kicker: "ჯავშნის ფასები",
    title: "დაიწყე მარტივად. გააფართოვე როცა დაგჭირდება.",
    subtitle: "საბაზისო გეგმა განკუთვნილია ერთი ლოკაციისა და მარტივი ჯავშნის პროცესისთვის. გაფართოებული გეგმა — უფრო რთული ოპერაციებისთვის.",
    essential: "საბაზისო ჯავშანი",
    essentialPrice: "საწყისი",
    essentialLead: "მცირე სალონის, სტუდიის, კლინიკის ან სხვა მომსახურების ბიზნესისთვის.",
    essentialItems: [
      "სერვისის არჩევა",
      "სპეციალისტის არჩევა",
      "თარიღი და ხელმისაწვდომი დროები",
      "სახელი, ტელეფონი / ელფოსტა და დადასტურება",
      "მარტივი ადმინისტრაციული მართვა — მიღება, გაუქმება და მოლოდინის სია"
    ],
    advanced: "გაფართოებული ჯავშანი",
    advancedPrice: "საწყისი",
    advancedLead: "როდესაც ჯავშანი უკვე ბიზნესის ყოველდღიური ოპერაციის ნაწილია და მეტი ლოგიკა გჭირდება.",
    advancedItems: [
      "ყველაფერი საბაზისო გეგმიდან",
      "რამდენიმე ფილიალი ან სპეციალისტების რთული განრიგი",
      "გადახდები, შეხსენებები ან კალენდართან სინქრონიზაცია",
      "მომხმარებლის ისტორია და უფრო ძლიერი ადმინისტრაციული მართვა",
      "ინდივიდუალური ინტეგრაციები და ხელმისაწვდომობის რთული ლოგიკა"
    ],
    custom: "თუ პროექტის მოცულობა ამ ორ ვარიანტს სცდება, ფასი ინდივიდუალურად ითვლება.",
    request: "მოითხოვე ჯავშნის სისტემა",
    approx: "დოლარში ნაჩვენები ფასები მიახლოებითია. საბოლოო შეთავაზება ფორმდება ლარში."
  } : {
    kicker: "Booking pricing",
    title: "Start simple. Expand when you need to.",
    subtitle: "Essential is for a single location and a straightforward appointment flow. Advanced is for more operational complexity.",
    essential: "Essential Booking",
    essentialPrice: "from",
    essentialLead: "For a small salon, studio, clinic or other appointment-based business.",
    essentialItems: [
      "Service selection",
      "Specialist selection",
      "Date and available time slots",
      "Name, phone / email and confirmation",
      "Simple admin management — accept / cancel / waitlist"
    ],
    advanced: "Advanced Booking",
    advancedPrice: "from",
    advancedLead: "For businesses where booking is already part of daily operations and needs more logic.",
    advancedItems: [
      "Everything in Essential",
      "Multiple branches or complex staff schedules",
      "Payments, reminders or calendar sync",
      "Customer history / richer admin tools",
      "Custom integrations and advanced availability logic"
    ],
    custom: "If your scope goes beyond these two options, we quote it individually.",
    request: "Request booking",
    approx: "USD prices are approximate conversions. Final proposals are issued in GEL."
  };

  return (
    <section className="booking-pricing-section" aria-labelledby="booking-pricing-title">
      <div className="service-pricing-heading">
        <div>
          <span className="service-pricing-kicker">{t.kicker}</span>
          <h2 id="booking-pricing-title">{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
        <CurrencyToggle currency={currency} setCurrency={setCurrency} locale={locale} />
      </div>

      <div className="booking-pricing-grid">
        {[
          { name: t.essential, price: 750, priceLabel: t.essentialPrice, lead: t.essentialLead, items: t.essentialItems, advanced: false },
          { name: t.advanced, price: 1500, priceLabel: t.advancedPrice, lead: t.advancedLead, items: t.advancedItems, advanced: true }
        ].map((plan, index) => (
          <motion.article
            key={plan.name}
            className={`booking-price-card ${plan.advanced ? "is-advanced" : ""}`}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="booking-price-head">
              <h3>{plan.name}</h3>
              <span>{plan.priceLabel}</span>
            </div>
            <div className="booking-price-number" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.strong key={currency} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -8 }}>
                  {money(plan.price, currency)}
                </motion.strong>
              </AnimatePresence>
            </div>
            <p>{plan.lead}</p>
            <ul>
              {plan.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Link href={requestHref} className={plan.advanced ? "cream-button pricing-plan-cta" : "primary-button pricing-plan-cta"}>{t.request}<span>↗</span></Link>
          </motion.article>
        ))}
      </div>
      <p className="booking-custom-note">{t.custom}</p>
      {currency === "USD" && <p className="currency-note">{t.approx}</p>}
    </section>
  );
}

export function ServiceStartingPrice({ locale, serviceValue, startingPriceGel }: { locale: Locale; serviceValue: string; startingPriceGel: number }) {
  const [currency, setCurrency] = useState<Currency>("GEL");
  const reduce = useReducedMotion();
  const requestHref = `${localizePath("/contact", locale)}?service=${encodeURIComponent(serviceValue)}`;

  return (
    <section className="custom-quote-pricing service-starting-price-section" aria-labelledby={`starting-price-${serviceValue}`}>
      <motion.div
        className="custom-quote-inner service-starting-price-inner"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="service-starting-price-topline">
          <span className="service-pricing-kicker" id={`starting-price-${serviceValue}`}>{locale === "ka" ? "საწყისი ფასი" : "Starting price"}</span>
          <CurrencyToggle currency={currency} setCurrency={setCurrency} locale={locale} />
        </div>

        <div className="service-starting-price-display" aria-live="polite">
          <span>{locale === "ka" ? "დან" : "from"}</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.strong
              key={currency}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {money(startingPriceGel, currency)}
            </motion.strong>
          </AnimatePresence>
        </div>

        <p>{locale === "ka" ? "ეს არის საწყისი ფასი. საბოლოო შეთავაზება დამოკიდებულია ფუნქციებზე, ინტეგრაციებსა და პროექტის სირთულეზე — უფრო დიდ მოცულობას ინდივიდუალურად ვაფასებთ." : "This is a starting price. Final pricing depends on features, integrations and project complexity — larger scopes are quoted individually."}</p>

        <div className="service-page-actions">
          <Link href={requestHref} className="primary-button">{locale === "ka" ? "მოითხოვე ეს სერვისი" : "Request this service"}<span>↗</span></Link>
          <Link href={requestHref} className="secondary-link large-link">{locale === "ka" ? "კონტაქტი / ინდივიდუალური ფასი" : "Contact / custom quote"}<span>↗</span></Link>
        </div>

        {currency === "USD" && <p className="currency-note">{locale === "ka" ? "დოლარში ნაჩვენები ფასი მიახლოებითია. საბოლოო შეთავაზება ფორმდება ლარში." : "USD pricing is an approximate conversion. Final proposals are issued in GEL."}</p>}
      </motion.div>
    </section>
  );
}
