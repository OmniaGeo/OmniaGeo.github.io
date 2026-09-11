export type Locale = "ka" | "en";

export const site = {
  name: "OMNIA",
  displayName: "OMNIA • ციფრული მომსახურება",
  email: "contact.omniage@proton.me",
  instagram: "https://www.instagram.com/omniageorgia",
  facebook: "https://www.facebook.com/omniageorgia",
  messenger: "https://m.me/omniageorgia",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://omnia.ge",
  responsePromise: {
    ka: "ვპასუხობთ მაქსიმუმ 1 სამუშაო დღის განმავლობაში.",
    en: "We reply within 1 business day."
  },
  description: {
    ka: "OMNIA ქმნის თანამედროვე ვებსაიტებსა და ციფრულ სისტემებს ქართული ბიზნესებისთვის — სტრატეგიული დიზაინით, სწრაფი გამოცდილებით და მკაფიო ბიზნეს მიზნებით.",
    en: "OMNIA builds modern websites and digital systems for businesses in Georgia — with strategic design, fast experiences and clear commercial goals."
  },
  shortDescription: {
    ka: "ყველაფერი ციფრული. შენი ბიზნესისთვის.",
    en: "Everything digital. For your business."
  }
} as const;

export const navCopy = {
  ka: {
    services: "სერვისები",
    work: "ჩვენი ნამუშევრები",
    contact: "კონტაქტი",
    start: "დაიწყე პროექტი",
    menu: "მენიუ",
    close: "დახურვა",
    language: "EN"
  },
  en: {
    services: "Services",
    work: "Our Work",
    contact: "Contact",
    start: "Start a project",
    menu: "Menu",
    close: "Close",
    language: "KA"
  }
} as const;

export const homeCopy = {
  ka: {
    heroTop: "ციფრული პროდუქტები ბიზნესისთვის",
    heroLine1: "ყველაფერი",
    heroLine2: "ციფრული.",
    heroIntro:
      "ვქმნით თანამედროვე ვებსაიტებსა და ციფრულ პროდუქტებს ბიზნესისთვის.",
    primaryCta: "დაიწყე პროექტი",
    secondaryCta: "ჩვენი ნამუშევრები",
    dynamicLead: "ვქმნით",
    dynamicWords: ["ვებსაიტებს", "ონლაინ მაღაზიებს", "ჯავშნის სისტემებს", "ციფრულ სასაჩუქრე ბარათებს", "ციფრულ სისტემებს"],
    servicesTitle: "სერვისები",
    servicesIntro: "",
    manifesto:
      "კარგი ციფრული გამოცდილება არ გთხოვს ყურადღებას. ის პირველივე წამიდან გაჩვენებს ვინ ხარ, რატომ უნდა დაგიჯერონ და რა უნდა გააკეთოს მომხმარებელმა შემდეგ.",
    workTitle: "ჩვენი ნამუშევრები",
    workNote: "",
    allWork: "ყველა ნამუშევარი",
    faqTitle: "ხშირი კითხვები",
    faqIntro: "",
    finalTitle: "თუ იდეა ციფრულია, შეგვიძლია ერთად ავაწყოთ.",
    finalCta: "მოგვიყევი პროექტზე"
  },
  en: {
    heroTop: "Digital products for business",
    heroLine1: "Everything",
    heroLine2: "digital.",
    heroIntro:
      "We build modern websites and digital products for businesses.",
    primaryCta: "Start a project",
    secondaryCta: "View work",
    dynamicLead: "We build",
    dynamicWords: ["websites", "online stores", "booking systems", "digital gift cards", "digital systems"],
    servicesTitle: "Services",
    servicesIntro: "",
    manifesto:
      "A strong digital experience never asks for attention. It earns it by making who you are, why you matter and what to do next immediately clear.",
    workTitle: "Our Work",
    workNote: "",
    allWork: "View all work",
    faqTitle: "Frequently asked questions",
    faqIntro: "",
    finalTitle: "If the idea is digital, we can build it together.",
    finalCta: "Tell us about it"
  }
} as const;

export const services = [
  {
    id: "websites",
    title: { ka: "ვებსაიტები", en: "Websites" },
    kicker: { ka: "ბრენდის მთავარი ციფრული სივრცე", en: "Your brand's primary digital space" },
    description: {
      ka: "სწრაფი, გამართული და ბრენდზე მორგებული საიტები — ერთგვერდიანი საიტიდან სრულ ბიზნეს ვებსაიტამდე.",
      en: "Fast, focused and brand-specific websites — from a single landing page to a complete business site."
    },
    bullets: {
      ka: ["ერთგვერდიანი საიტები", "მრავალგვერდიანი საიტები", "ყველა ეკრანზე მორგებული დიზაინი", "საძიებო სისტემებისთვის გამზადებული სტრუქტურა"],
      en: ["Landing pages", "Multi-page websites", "Responsive design", "SEO-ready structure"]
    }
  },
  {
    id: "commerce",
    title: { ka: "ონლაინ გაყიდვები", en: "Commerce" },
    kicker: { ka: "პროდუქტიდან შეკვეთამდე", en: "From product to purchase" },
    description: {
      ka: "ონლაინ მაღაზიები და პროდუქტის გამოცდილებები, სადაც ვიზუალი, ნავიგაცია და შეკვეთის გაფორმება ერთ გაყიდვის პროცესად მუშაობს.",
      en: "Online stores and product experiences where visuals, navigation and checkout work as one sales journey."
    },
    bullets: {
      ka: ["პროდუქტის კატალოგი", "ონლაინ მაღაზიის გამოცდილება", "შეკვეთის გაფორმების პროცესი", "კონვერსიაზე ორიენტირებული მოქმედებები"],
      en: ["Product catalogues", "E-commerce UX", "Checkout flows", "Conversion-focused CTAs"]
    }
  },
  {
    id: "booking",
    title: { ka: "ონლაინ ჯავშანი", en: "Booking" },
    kicker: { ka: "ნაკლები ჩატი. მეტი დადასტურებული ვიზიტი.", en: "Less messaging. More confirmed appointments." },
    description: {
      ka: "ჯავშნისა და შეხვედრების ნაკადები მომსახურების ბიზნესებისთვის — მობილურზე სწრაფი და გასაგები.",
      en: "Booking and appointment flows for service businesses — designed to be fast and clear on mobile."
    },
    bullets: {
      ka: ["სერვისის არჩევა", "კალენდრის პროცესი", "დადასტურების მდგომარეობები", "მობილურზე ორიენტირებული ჯავშანი"],
      en: ["Service selection", "Calendar flow", "Confirmation states", "Mobile-first booking"]
    }
  },
  {
    id: "gift-cards",
    title: { ka: "ციფრული სასაჩუქრე ბარათები", en: "Digital gift cards" },
    kicker: { ka: "საჩუქარი, რომელიც პირდაპირ ბიზნესში ბრუნდება", en: "A gift that brings value back to your business" },
    description: {
      ka: "ბრენდირებული ციფრული ბარათები მარტივი ყიდვის, გაგზავნისა და გამოყენების გამოცდილებით.",
      en: "Branded digital gift cards with a simple purchase, delivery and redemption experience."
    },
    bullets: {
      ka: ["ბრენდირებული ბარათები", "QR-კოდით გამოყენება", "მიმღების გამოცდილება", "საჩუქარზე ორიენტირებული გამოცდილება"],
      en: ["Branded cards", "QR / code redemption", "Recipient flow", "Gift-first UX"]
    }
  },
  {
    id: "systems",
    title: { ka: "ციფრული სისტემები", en: "Digital systems" },
    kicker: { ka: "პატარა ხელსაწყოები, დიდი დროის ეკონომიით", en: "Small tools that save serious time" },
    description: {
      ka: "QR მენიუები, ლიდების ფორმები, მიკრო-ავტომატიზაცია და ბიზნესზე მორგებული ციფრული ხელსაწყოები.",
      en: "QR menus, lead flows, lightweight automation and custom digital tools built around your workflow."
    },
    bullets: {
      ka: ["QR მენიუები", "ლიდების ფორმები", "მარტივი ავტომატიზაციები", "ინდივიდუალური მიკრო-ხელსაწყოები"],
      en: ["QR menus", "Lead forms", "Simple automations", "Custom micro-tools"]
    }
  }
] as const;

export type Service = (typeof services)[number];

export type CaseStudy = {
  slug: string;
  title: string;
  sector: { ka: string; en: string };
  summary: { ka: string; en: string };
  image: string;
  alt: { ka: string; en: string };
  challenge: { ka: string; en: string };
  approach: { ka: string[]; en: string[] };
  outcome: { ka: string; en: string };
  liveUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "shanddar-momo",
    title: "Shanddar MoMo",
    sector: { ka: "რესტორანი / ვებსაიტი + QR მენიუ", en: "Restaurant / Website + QR menu" },
    summary: {
      ka: "თბილისის რესტორნისთვის განახლებული ციფრული გამოცდილება — ორი ფილიალის მენიუ, QR წვდომა და შეკვეთის მარტივი ნაკადი ერთ საიტში.",
      en: "A redesigned digital experience for a Tbilisi restaurant — two branch menus, QR access and a simpler ordering journey in one site."
    },
    image: "/work/shanddar-momo.webp",
    alt: {
      ka: "Shanddar MoMo-ს ახალი ვებსაიტის მთავარი გვერდის პრევიუ — მუქი სარედაქციო მთავარი ბლოკი და მომოს ფოტო",
      en: "Preview of the redesigned Shanddar MoMo website with a dark editorial hero and momo photography"
    },
    challenge: {
      ka: "არსებული საიტი სწრაფად იყო აწყობილი და ვიზუალურად ვერ ასახავდა რესტორნის ხასიათს. ამავე დროს, აუცილებელი იყო არსებული მენიუს მონაცემების, ფოტოების, ფილიალების, QR ნაკადის და შეკვეთის ფუნქციების სრულად შენარჩუნება.",
      en: "The original site had been built quickly and did not reflect the restaurant's personality. At the same time, all menu data, photography, branch logic, QR access and ordering functions had to remain intact."
    },
    approach: {
      ka: ["საკვების ვიზუალზე ორიენტირებული სარედაქციო სისტემა", "მობილურზე გამარტივებული მენიუ და შეკვეთის პროცესი", "ორი ფილიალის მონაცემებისა და QR მენიუს უცვლელი ფუნქციონალი", "ვოლტის, ბოლტის, ვოთსაფისა და ლოკაციის მოქმედებების მკაფიო ინტეგრაცია"],
      en: ["Food-first editorial visual direction", "Simplified mobile menu and ordering flow", "Preserved two-branch data and QR menu functionality", "Clear Wolt, Bolt, WhatsApp and location actions"]
    },
    outcome: {
      ka: "რეალური რესტორნის საიტი, რომელიც უფრო სანდოდ და დამაჯერებლად გამოიყურება, მაგრამ ძველი სისტემის ყველა მნიშვნელოვანი ფუნქცია კვლავ მუშაობს.",
      en: "A live restaurant website that feels more considered and trustworthy while preserving the important functionality of the original system."
    },
    liveUrl: "https://shanddarmomoweb.vercel.app"
  },
  {
    slug: "restaurant-direct",
    title: "Restaurant Direct",
    sector: { ka: "სტუმარმასპინძლობა / ვებსაიტის სისტემა", en: "Hospitality / Website system" },
    summary: {
      ka: "რესტორნის ციფრული გამოცდილება, რომელიც მენიუს, ჯავშანსა და პირდაპირ მოქმედებას ერთ მკაფიო ნაკადად აერთიანებს.",
      en: "A restaurant experience that turns menu discovery, booking and direct action into one clear flow."
    },
    image: "/work/restaurant-direct.webp",
    alt: {
      ka: "OMNIA-ს კონცეპტუალური რესტორნის ვებსაიტის ვიზუალური სისტემა ლურჯ და თბილ თეთრ ფერებში",
      en: "OMNIA conceptual restaurant website interface in deep blue and warm off-white"
    },
    challenge: {
      ka: "რესტორნის გვერდი ხშირად მხოლოდ ინფორმაციის საცავია. მიზანი იყო მომხმარებელს პირველივე ეკრანიდან სცოდნოდა სად არის მენიუ, როგორ დაჯავშნოს და რა გააკეთოს შემდეგ.",
      en: "Restaurant sites often become static information boards. The concept was designed so a guest instantly knows where to see the menu, how to book and what to do next."
    },
    approach: {
      ka: ["მობილურზე პირველადი მოქმედებების პრიორიტეტიზაცია", "მენიუსა და ჯავშნის მკაფიო შიდა ბმულები", "დიდი ტიპოგრაფია და მცირე რაოდენობის ძლიერი მოქმედების ღილაკები", "მსუბუქი ვიზუალური სისტემა ზედმეტი დეკორის გარეშე"],
      en: ["Prioritised primary actions on mobile", "Clear internal routes to menu and booking", "Large typography with a limited set of strong CTAs", "A lightweight visual system without decorative noise"]
    },
    outcome: {
      ka: "კონცეპტი აჩვენებს როგორ შეიძლება რესტორნის საიტი იყოს არა უბრალოდ ლამაზი, არამედ სტუმრის გადაწყვეტილების ნაწილი.",
      en: "The result demonstrates how a restaurant website can become part of the guest's decision rather than just a branded brochure."
    }
  },
  {
    slug: "beauty-booking",
    title: "Beauty Booking",
    sector: { ka: "სილამაზე / ჯავშნის პროცესი", en: "Beauty / Booking flow" },
    summary: {
      ka: "სილამაზის ბიზნესისთვის შექმნილი ჯავშანზე ორიენტირებული გამოცდილება, სადაც ვიზიტის დაჯავშნა მთავარი პროდუქტის ფუნქციაა.",
      en: "A booking-first experience for beauty businesses where scheduling is treated as the product's core action."
    },
    image: "/work/beauty-booking.webp",
    alt: {
      ka: "OMNIA-ს სილამაზის სერვისის ჯავშნის კონცეპტუალური ინტერფეისი კალენდრის გრაფიკით",
      en: "OMNIA conceptual beauty booking interface with service and calendar flow"
    },
    challenge: {
      ka: "როდესაც ყოველი ვიზიტი მესენჯერში იწყება, ბიზნესს ეკარგება დრო და მომხმარებელს — იმპულსი. კონცეფცია ჯავშანს საიტის ძირითად ღერძად აქცევს.",
      en: "When every appointment begins in a message thread, the business loses time and the customer loses momentum. The concept makes booking the primary website journey."
    },
    approach: {
      ka: ["სერვისის არჩევა ზედმეტი ნაბიჯების გარეშე", "ხელმისაწვდომობის მკაფიო ჩვენება", "მობილური მოქმედების ღილაკი ეკრანის ქვედა ზონაში", "ნდობის სიგნალები ფასისა და პროცესის გვერდით"],
      en: ["Service selection without unnecessary steps", "Clear availability states", "Persistent mobile booking CTA", "Trust signals beside pricing and process information"]
    },
    outcome: {
      ka: "კონცეპტი აჩვენებს როგორ შეიძლება ბრენდის საიტი და ჯავშნის სისტემა ერთ პროდუქტად გამოიყურებოდეს და არა ერთმანეთზე მიწებებულ ორ ინსტრუმენტად.",
      en: "The concept shows how a brand site and booking system can feel like one product rather than two tools stitched together."
    }
  },
  {
    slug: "professional-authority",
    title: "Professional Authority",
    sector: { ka: "პროფესიული მომსახურება / პოზიციონირება", en: "Professional services / Positioning" },
    summary: {
      ka: "საკონსულტაციო და პროფესიული სერვისებისთვის შექმნილი მკაფიო, სანდო და ნაკლებად ხმაურიანი ციფრული პოზიციონირება.",
      en: "A restrained digital presence for consulting and professional services, designed around clarity and authority."
    },
    image: "/work/professional-authority.webp",
    alt: {
      ka: "OMNIA-ს პროფესიული სერვისის კონცეპტუალური ვებსაიტის სარედაქციო ტიპოგრაფიული ვიზუალი",
      en: "OMNIA conceptual professional services website with an editorial typographic layout"
    },
    challenge: {
      ka: "პროფესიულ სერვისში დიზაინმა ნდობა უნდა შექმნას, მაგრამ არ უნდა გადაფაროს კომპეტენცია. აქ მთავარი იყო სტრუქტურა, მტკიცებულება და მკაფიო შემდეგი ნაბიჯი.",
      en: "In professional services, design has to establish trust without overpowering expertise. The priority was structure, evidence and a clear next step."
    },
    approach: {
      ka: ["დიდი, მშვიდი სარედაქციო ტიპოგრაფია", "სერვისების მოკლე და ზუსტი არქიტექტურა", "ქეისისა და პროცესის ბლოკები როგორც ნდობის მექანიზმი", "კონტაქტი ყველა მნიშვნელოვან მარშრუტში ხელმისაწვდომი"],
      en: ["Large, restrained editorial typography", "A short and precise service architecture", "Case-study and process content as trust mechanisms", "Contact access across every high-intent route"]
    },
    outcome: {
      ka: "კონცეპტი აჩვენებს როგორ შეიძლება პროფესიული კომპანიის საიტი იყოს პრემიუმ, სერიოზული და კომერციულად მკაფიო ერთდროულად.",
      en: "The concept demonstrates how a professional firm's site can feel premium, serious and commercially clear at the same time."
    }
  }
];

export const faqs = {
  ka: [
    {
      q: "რა ტიპის ვებსაიტებს ქმნით?",
      a: "ერთგვერდიან საიტებს, მრავალგვერდიან ბიზნეს საიტებს, ონლაინ მაღაზიებს და სხვა ციფრულ პროდუქტებს, რომლებიც კონკრეტულ ბიზნეს მიზანს ემსახურება."
    },
    {
      q: "შეიძლება საიტი ერთჯერადად ვიყიდო ან ყოველთვიურად გადავიხადო?",
      a: "დიახ. პროექტის მიხედვით შესაძლებელია როგორც ერთჯერადი პროექტი, ისე ყოველთვიური მოდელი, სადაც საიტის მოვლა და მხარდაჭერა ერთ გეგმაშია."
    },
    {
      q: "რამდენ ხანში მზადდება საიტი?",
      a: "ვადა მოცულობაზეა დამოკიდებული. მცირე საიტები სწრაფად მზადდება, ხოლო მრავალგვერდიანი ან სისტემური პროექტისთვის ზუსტ ვადას მოთხოვნების შეთანხმების შემდეგ ვაფიქსირებთ."
    },
    {
      q: "მობილურზე ოპტიმიზაციაც შედის?",
      a: "ყოველთვის. დიზაინი და ფუნქციონალი თავიდანვე მობილურის, ტაბლეტისა და დესკტოპის ეკრანებისთვის იგეგმება."
    },
    {
      q: "თუ ზუსტად არ ვიცი რა მჭირდება?",
      a: "მოგვწერე ბიზნესის მიზანი ან პრობლემა. ჯერ ვარკვევთ რა უნდა შეიცვალოს, შემდეგ ვწყვეტთ რა ფორმატის პროდუქტი ღირს აშენებად."
    }
  ],
  en: [
    {
      q: "What kinds of websites do you build?",
      a: "Landing pages, multi-page business websites, online stores and other digital products built around a specific business goal."
    },
    {
      q: "Can I buy the website outright or pay monthly?",
      a: "Yes. Depending on the project, we can work as a one-time build or on a monthly model that includes ongoing maintenance and support."
    },
    {
      q: "How long does a website take?",
      a: "Timing depends on scope. Smaller websites move quickly; multi-page or systems-heavy projects receive a fixed timeline after the brief."
    },
    {
      q: "Is mobile optimisation included?",
      a: "Always. Layout, interaction and content hierarchy are planned for mobile, tablet and desktop from the start."
    },
    {
      q: "What if I am not sure what I need?",
      a: "Tell us the business goal or problem. We define what needs to change before deciding which format is worth building."
    }
  ]
} as const;
