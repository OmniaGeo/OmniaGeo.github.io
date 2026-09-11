import { Breadcrumbs } from "@/components/Breadcrumbs";
import { localizePath } from "@/lib/i18n";
import { site, type Locale } from "@/lib/site";

type Kind = "privacy" | "terms" | "cookies";

const privacy = {
  ka: {
    title: "კონფიდენციალურობის პოლიტიკა",
    intro: "ეს გვერდი განმარტავს რა ინფორმაციას ამუშავებს OMNIA-ს საჯარო ვებსაიტი და როგორ მუშაობს კონტაქტი.",
    sections: [
      ["კონტაქტი", "საკონტაქტო ფორმა მონაცემებს OMNIA-ს სერვერზე არ აგზავნის. გაგზავნისას იხსნება შენი ელფოსტის აპი უკვე გამზადებული წერილით და ინფორმაცია იგზავნება მხოლოდ მაშინ, როცა წერილს თავად აგზავნი."],
      ["ანალიტიკა", "Google Analytics მხოლოდ იმ შემთხვევაში იტვირთება, თუ შესაბამისი საზომი იდენტიფიკატორი კონფიგურირებულია და მომხმარებელი ცალკე დაეთანხმება ანალიტიკურ ქუქი-ფაილებს. არჩევანის შეცვლა შესაძლებელია საიტის ქვედა ნაწილიდან ქუქი-ფაილების პარამეტრების გახსნით."],
      ["მესამე მხარეები", "საიტი შეიძლება შეიცავდეს ბმულებს Messenger-ზე, ელფოსტის პროვაიდერებზე და სხვა მესამე მხარის სერვისებზე. მათი კონფიდენციალურობის წესები OMNIA-ს კონტროლს არ ექვემდებარება."],
      ["კონტაქტი", `კონფიდენციალურობასთან დაკავშირებული შეკითხვებისთვის მოგვწერე ${site.email}-ზე.`]
    ]
  },
  en: {
    title: "Privacy policy",
    intro: "This page explains what the public OMNIA website processes and how contact works.",
    sections: [
      ["Contact", "The contact form does not send data to an OMNIA backend. Submitting it opens your email app with a prepared message; information is sent only when you choose to send that email."],
      ["Analytics", "Google Analytics loads only when a valid Measurement ID is configured and the visitor separately accepts analytics cookies. Cookie preferences can be reopened from the site footer."],
      ["Third parties", "The site may link to Messenger, email providers and other third-party services. Their privacy practices are outside OMNIA's control."],
      ["Contact", `For privacy questions, email ${site.email}.`]
    ]
  }
} as const;

const terms = {
  ka: {
    title: "გამოყენების პირობები",
    intro: "OMNIA-ს ვებსაიტის გამოყენებით ეთანხმები ქვემოთ მოცემულ ძირითად პირობებს.",
    sections: [
      ["საიტის მიზანი", "ვებსაიტზე წარმოდგენილი ინფორმაცია აღწერს OMNIA-ს სერვისებს, მიდგომას და ნამუშევრებს. კონკრეტული პროექტის ფასი, ვადა და მოცულობა დგინდება ცალკე შეთავაზებით."],
      ["ყოველთვიური ვებსაიტის მოდელი", "ყოველთვიური ვებსაიტის სტანდარტული შეთავაზება მოიცავს მაქსიმუმ 5 სტანდარტულ გვერდს, ჰოსტინგს, ტექნიკურ მოვლას და თვეში მაქსიმუმ 2 მცირე კონტენტის ან დიზაინის ცვლილების მოთხოვნას. საწყისი ვალდებულება არის 3 თვე; ამის შემდეგ გაუქმება შესაძლებელია შეთანხმებული პირობებით. ახალი გვერდები, ონლაინ მაღაზია, ჯავშნის სისტემა, მართვის პანელები და ინდივიდუალური ინტეგრაციები ცალკე ფასდება."],
      ["კონცეპტუალური ნამუშევრები", "გაშვების ეტაპზე ნაჩვენები ზოგი ნამუშევარი კონცეპტუალურია. ისინი არ წარმოადგენს გამოგონილ კლიენტურ პროექტებს ან შედეგების მტკიცებას."],
      ["ინტელექტუალური საკუთრება", "OMNIA-ს ბრენდინგი, საიტის დიზაინი, ტექსტი და ორიგინალური ვიზუალური მასალა დაცულია შესაბამისი უფლებებით, თუ ცალკე სხვაგვარად არ არის მითითებული."],
      ["გარე ბმულები", "საიტი შეიძლება შეიცავდეს მესამე მხარის ბმულებს. მათი კონტენტი და ხელმისაწვდომობა OMNIA-ს კონტროლს არ ექვემდებარება."],
      ["კონტაქტი", `პირობებთან დაკავშირებული შეკითხვებისთვის მოგვწერე ${site.email}-ზე.`]
    ]
  },
  en: {
    title: "Terms of use",
    intro: "By using the OMNIA website, you agree to the basic terms below.",
    sections: [
      ["Purpose of this site", "This website describes OMNIA's services, approach and work. Project scope, pricing and timelines are agreed separately in a specific proposal."],
      ["Monthly website model", "The standard monthly website offer covers up to 5 standard pages, hosting, technical maintenance and up to 2 small content or design update requests per month. The initial commitment is 3 months; cancellation afterwards follows the agreed proposal. New pages, e-commerce, booking, dashboards and custom integrations are quoted separately."],
      ["Concept studies", "Some work shown at launch is conceptual. It is not presented as fabricated client work or as evidence of results that did not occur."],
      ["Intellectual property", "OMNIA branding, website design, copy and original visual material are protected by applicable rights unless stated otherwise."],
      ["External links", "The website may include links to third-party services. OMNIA does not control their content or availability."],
      ["Contact", `For questions about these terms, email ${site.email}.`]
    ]
  }
} as const;

const cookies = {
  ka: {
    title: "ქუქი-ფაილების პოლიტიკა",
    intro: "ეს გვერდი აღწერს რა ქუქი-ფაილებს იყენებს OMNIA-ს საჯარო საიტი და რატომ.",
    sections: [
      ["რა არის ქუქი-ფაილი", "ქუქი-ფაილი არის მცირე ტექსტური ჩანაწერი, რომელსაც საიტი ბრაუზერში ინახავს. ის შეიძლება გამოყენებულ იქნეს არჩევანის დასამახსოვრებლად ან საიტის გამოყენების გასაგებად."],
      ["ანალიტიკური ქუქი-ფაილები", "Google Analytics არ იტვირთება მანამ, სანამ მომხმარებელი არ აირჩევს „ანალიტიკის მიღებას“. თუ აირჩევ მხოლოდ აუცილებელ ქუქი-ფაილებს, ანალიტიკური სკრიპტები არ იტვირთება."],
      ["თანხმობის ქუქი-ფაილი", "omnia_cookie_consent იმახსოვრებს შენს არჩევანს — ანალიტიკა ან მხოლოდ აუცილებელი — რათა თანხმობის ფანჯარა ყოველ ვიზიტზე არ გამოჩნდეს. არჩევანის ხელახლა გახსნა შესაძლებელია საიტის ქვედა ნაწილის ქუქი-ფაილების პარამეტრებიდან."],
      ["ქუქი-ფაილების წაშლა", "ქუქი-ფაილების წაშლა ან დაბლოკვა შეგიძლია ბრაუზერის პარამეტრებიდან."],
      ["კონტაქტი", `ქუქი-ფაილებთან დაკავშირებული შეკითხვებისთვის მოგვწერე ${site.email}-ზე.`]
    ]
  },
  en: {
    title: "Cookie policy",
    intro: "This page explains which cookies the public OMNIA site uses and why.",
    sections: [
      ["What a cookie is", "A cookie is a small text record stored by a website in your browser. It can remember a preference or help understand how a site is used."],
      ["Analytics cookies", "Google Analytics does not load until the visitor chooses “Accept analytics”. If Necessary only is selected, analytics scripts are not loaded."],
      ["Consent cookie", "omnia_cookie_consent remembers whether you selected analytics or necessary-only cookies so the consent prompt does not appear on every visit. Preferences can be reopened from Cookie settings in the footer."],
      ["Deleting cookies", "You can delete or block cookies from your browser settings."],
      ["Contact", `For questions about cookies, email ${site.email}.`]
    ]
  }
} as const;

export function LegalPageContent({ locale, kind }: { locale: Locale; kind: Kind }) {
  const content = kind === "privacy" ? privacy[locale] : kind === "terms" ? terms[locale] : cookies[locale];
  const label = content.title;
  return (
    <div lang={locale} className={`locale-${locale}`}>
      <section className="legal-page-new">
        <Breadcrumbs items={[
          { label: locale === "ka" ? "მთავარი" : "Home", href: localizePath("/", locale) },
          { label }
        ]} />
        <h1>{content.title}</h1>
        <p className="legal-intro-new">{content.intro}</p>
        <div className="legal-sections-new">
          {content.sections.map(([heading, text], index) => (
            <section key={`${heading}-${index}`}>
              <h2>{heading}</h2>
              <p>{text}</p>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
