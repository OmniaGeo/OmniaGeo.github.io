import type { Locale } from "./site";

export type ServicePageId = "websites" | "commerce" | "booking" | "gift-cards" | "systems";

export type ServiceTimelineItem = {
  label: Record<Locale, string>;
  value: Record<Locale, string>;
};

export type ServicePageData = {
  id: ServicePageId;
  contactValue: "website" | "commerce" | "booking" | "gift-card" | "system";
  eyebrow: Record<Locale, string>;
  headline: Record<Locale, string>;
  intro: Record<Locale, string>;
  deliverables: Record<Locale, string[]>;
  pricingNote: Record<Locale, string>;
  timeline: ServiceTimelineItem[];
  startingPriceGel?: number;
};

export const servicePages: Record<ServicePageId, ServicePageData> = {
  websites: {
    id: "websites",
    contactValue: "website",
    eyebrow: { ka: "ვებსაიტები", en: "Websites" },
    headline: {
      ka: "აირჩიე როგორ გინდა გაუშვა — გამოწერით ან სრულად შენს საკუთრებაში.",
      en: "Choose how you launch — subscribe monthly or own the website outright."
    },
    intro: {
      ka: "ვქმნით სწრაფ, ბრენდზე მორგებულ ვებსაიტებს — ერთგვერდიანი საიტიდან სრულ ბიზნეს ვებსაიტამდე. დიზაინი, მობილური გამოცდილება და კონვერსიის ლოგიკა ერთ სისტემად მუშაობს.",
      en: "We build fast, brand-specific websites — from one landing page to a complete business site. Design, mobile experience and conversion logic work as one system."
    },
    deliverables: {
      ka: ["ინდივიდუალური ვიზუალური მიმართულება", "მობილურზე მორგებული აწყობა", "საძიებო სისტემებისთვის გამზადებული სტრუქტურა", "გაშვების მხარდაჭერა"],
      en: ["Custom visual direction", "Responsive build", "SEO-ready structure", "Launch support"]
    },
    pricingNote: {
      ka: "ერთჯერადი პროექტის ფასი დამოკიდებულია გვერდების რაოდენობაზე, ფუნქციებსა და კონტენტის მოცულობაზე. ყოველთვიურ მოდელს აქვს მკაფიო სტანდარტული მოცულობა, რათა ფასი პროგნოზირებადი დარჩეს.",
      en: "One-time project pricing depends on page count, functionality and content scope. The monthly model has a defined standard scope so the price stays predictable."
    },
    timeline: [
      { label: { ka: "ერთგვერდიანი საიტი", en: "Landing page" }, value: { ka: "ჩვეულებრივ 5–10 სამუშაო დღე", en: "Typically 5–10 business days" } },
      { label: { ka: "ბიზნეს ვებსაიტი", en: "Business website" }, value: { ka: "ჩვეულებრივ 1–3 კვირა", en: "Typically 1–3 weeks" } },
      { label: { ka: "ყოველთვიური საიტი", en: "Monthly website" }, value: { ka: "ჩვეულებრივ 1–3 კვირა", en: "Typically 1–3 weeks" } }
    ]
  },
  commerce: {
    id: "commerce",
    startingPriceGel: 2800,
    contactValue: "commerce",
    eyebrow: { ka: "ონლაინ გაყიდვები", en: "Commerce" },
    headline: {
      ka: "ონლაინ მაღაზია, რომელიც პროდუქტს შეკვეთამდე სწორ გზას აძლევს.",
      en: "An online store designed around the path from product to purchase."
    },
    intro: {
      ka: "ვაწყობთ ონლაინ მაღაზიებს პროდუქტის კატალოგით, ფილტრებით, შეკვეთის გაფორმების პროცესით და საჭირო ინტეგრაციებით. პროექტი იგეგმება კონკრეტულად შენი პროდუქტისა და ოპერაციების მიხედვით.",
      en: "We build e-commerce experiences with product catalogues, filters, checkout flows and the integrations your operation actually needs."
    },
    deliverables: {
      ka: ["პროდუქტის კატალოგის გამოცდილება", "შეკვეთის გაფორმების პროცესი", "გადახდისა და მიწოდების ინტეგრაციები", "მობილურზე მორგებული მაღაზია"],
      en: ["Product catalogue UX", "Checkout flow", "Payment / delivery integrations", "Mobile commerce"]
    },
    pricingNote: {
      ka: "ონლაინ მაღაზიის პროექტები იწყება 2,800 ლარიდან. საბოლოო ფასი დამოკიდებულია კატალოგის ზომაზე, გადახდებზე, მიწოდების ლოგიკასა და ინტეგრაციებზე.",
      en: "E-commerce projects start from 2,800 GEL. Final pricing depends on catalogue size, payments, delivery logic and integrations."
    },
    timeline: [
      { label: { ka: "სტანდარტული ონლაინ მაღაზია", en: "Standard online store" }, value: { ka: "ჩვეულებრივ 2–5 კვირა", en: "Typically 2–5 weeks" } },
      { label: { ka: "რთული ინტეგრაციები", en: "Complex integrations" }, value: { ka: "ვადა პროექტის მოცულობის განსაზღვრის შემდეგ ფიქსირდება", en: "Timeline confirmed after scope" } }
    ]
  },
  booking: {
    id: "booking",
    startingPriceGel: 750,
    contactValue: "booking",
    eyebrow: { ka: "ონლაინ ჯავშანი", en: "Booking" },
    headline: {
      ka: "ჯავშანი, რომელიც მომხმარებელს ნაკლებ კითხვას უტოვებს.",
      en: "Booking that leaves the customer with fewer questions and fewer steps."
    },
    intro: {
      ka: "სერვისის არჩევა, სპეციალისტი, თარიღი, დრო და დადასტურება — ვაწყობთ ამ ყველაფერს ერთ სწრაფ, მობილურზე ორიენტირებულ პროცესად. მარტივი ბიზნესისთვის შეგიძლია დაიწყო საბაზისო ვერსიით და რთული პროცესებისთვის გადავიდეთ გაფართოებულ სისტემაზე.",
      en: "Service, specialist, date, time and confirmation — designed as one fast, mobile-first journey. Smaller businesses can start with Essential; more complex operations can move to an Advanced system."
    },
    deliverables: {
      ka: ["სერვისისა და სპეციალისტის არჩევა", "კალენდარი და ხელმისაწვდომი დროები", "მომხმარებლის მონაცემების ნაკადი", "ადმინისთვის გამზადებული მართვა"],
      en: ["Service and specialist selection", "Calendar & availability flow", "Customer details", "Admin-ready management"]
    },
    pricingNote: {
      ka: "საბაზისო ჯავშნის სისტემა იწყება 750 ლარიდან. გაფართოებული ჯავშნის სისტემა იწყება 1,500 ლარიდან. საბოლოო ფასი დამოკიდებულია ფილიალებზე, სპეციალისტებზე, გადახდებზე, შეხსენებებსა და გარე ინტეგრაციებზე.",
      en: "Essential booking starts from 750 GEL. Advanced booking starts from 1,500 GEL. Final pricing depends on branches, specialists, payments, reminders and external integrations."
    },
    timeline: [
      { label: { ka: "საბაზისო ჯავშანი", en: "Essential Booking" }, value: { ka: "ჩვეულებრივ 1–2 კვირა", en: "Typically 1–2 weeks" } },
      { label: { ka: "გაფართოებული ჯავშანი", en: "Advanced Booking" }, value: { ka: "ჩვეულებრივ 2–4 კვირა", en: "Typically 2–4 weeks" } }
    ]
  },
  "gift-cards": {
    id: "gift-cards",
    startingPriceGel: 1400,
    contactValue: "gift-card",
    eyebrow: { ka: "ციფრული სასაჩუქრე ბარათები", en: "Digital gift cards" },
    headline: {
      ka: "ბრენდირებული საჩუქარი, რომელიც პირდაპირ შენს ბიზნესში ბრუნდება.",
      en: "A branded gift experience that brings value directly back to your business."
    },
    intro: {
      ka: "ვაწყობთ ციფრული სასაჩუქრე ბარათის გამოცდილებას ყიდვიდან მიღებამდე და გამოყენებამდე — შენი ბრენდის ვიზუალით და გამოყენების მარტივი პროცესით.",
      en: "We design the complete digital gift-card journey from purchase to delivery and redemption, fully aligned with your brand."
    },
    deliverables: {
      ka: ["ბრენდირებული ბარათის ინტერფეისი", "მიმღების გამოცდილება", "QR / კოდით გამოყენება", "გადახდისთვის გამზადებული არქიტექტურა"],
      en: ["Branded gift-card UI", "Recipient flow", "QR / code redemption", "Payment-ready architecture"]
    },
    pricingNote: {
      ka: "ციფრული სასაჩუქრე ბარათის სისტემა იწყება 1,400 ლარიდან. საბოლოო ფასი განისაზღვრება გადახდის, გამოყენების, ადმინისტრირებისა და ინტეგრაციების საჭიროების მიხედვით.",
      en: "Digital gift-card systems start from 1,400 GEL. Final pricing depends on payment, redemption, administration and integration requirements."
    },
    timeline: [
      { label: { ka: "სტანდარტული სასაჩუქრე ბარათის პროცესი", en: "Standard gift-card flow" }, value: { ka: "ჩვეულებრივ 2–3 კვირა", en: "Typically 2–3 weeks" } },
      { label: { ka: "გადახდა / რთული გამოყენების პროცესი", en: "Payments / advanced redemption" }, value: { ka: "ვადა პროექტის მოცულობის განსაზღვრის შემდეგ ფიქსირდება", en: "Timeline confirmed after scope" } }
    ]
  },
  systems: {
    id: "systems",
    startingPriceGel: 1500,
    contactValue: "system",
    eyebrow: { ka: "ციფრული სისტემები", en: "Digital systems" },
    headline: {
      ka: "პატარა ციფრული ხელსაწყოები, რომლებიც ყოველდღიურ პროცესს ამარტივებს.",
      en: "Focused digital tools that remove friction from everyday business processes."
    },
    intro: {
      ka: "QR მენიუ, ლიდების პროცესი, შიდა მართვის პანელი, მარტივი ავტომატიზაცია ან სპეციალურად შენს პროცესზე მორგებული მიკრო-პროდუქტი — ვიწყებთ პრობლემიდან და არა შაბლონიდან.",
      en: "QR menus, lead flows, internal dashboards, lightweight automation or a custom micro-product — we start from the workflow, not a template."
    },
    deliverables: {
      ka: ["ბიზნეს პროცესის გააზრება", "ინდივიდუალური ინტერფეისი", "მარტივი ავტომატიზაცია", "ინტეგრაციებისთვის გამზადებული სისტემა"],
      en: ["Workflow mapping", "Custom interface", "Lightweight automation", "Integration-ready build"]
    },
    pricingNote: {
      ka: "ციფრული სისტემები იწყება 1,500 ლარიდან. საბოლოო ფასი ითვლება ფუნქციების, მონაცემების, ინტეგრაციებისა და ადმინისტრირების სირთულის მიხედვით.",
      en: "Custom digital systems start from 1,500 GEL. Final pricing depends on features, data, integrations and administration complexity."
    },
    timeline: [
      { label: { ka: "მცირე მიკრო-სისტემა", en: "Focused micro-system" }, value: { ka: "ჩვეულებრივ 1–3 კვირა", en: "Typically 1–3 weeks" } },
      { label: { ka: "მრავალფუნქციური სისტემა", en: "Multi-feature system" }, value: { ka: "ვადა პროექტის მოცულობის განსაზღვრის შემდეგ ფიქსირდება", en: "Timeline confirmed after scope" } }
    ]
  }
};

export const servicePageIds = Object.keys(servicePages) as ServicePageId[];

export function getServicePage(id: string) {
  return servicePages[id as ServicePageId];
}
