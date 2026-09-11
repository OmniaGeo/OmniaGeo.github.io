"use client";

import { motion } from "motion/react";
import { useEffect, useState, type FormEvent } from "react";
import { site, type Locale } from "@/lib/site";

const copy = {
  ka: { name:"სახელი *", email:"ელფოსტა *", business:"ბიზნესი / ბრენდი", service:"რა გჭირდება? *", choose:"აირჩიე მიმართულება", message:"მოკლედ მოგვიყევი პროექტზე *", submit:"ელფოსტის აპში გახსნა", opening:"იხსნება…", response:"ფორმა გახსნის შენს ელფოსტის აპს უკვე გამზადებული წერილით.", error:"შეავსე სავალდებულო ველები სწორად. პროექტის აღწერა მინიმუმ 20 სიმბოლო უნდა იყოს." },
  en: { name:"Name *", email:"Email *", business:"Business / brand", service:"What do you need? *", choose:"Choose a service", message:"Tell us briefly about the project *", submit:"Open in email app", opening:"Opening…", response:"The form opens your email app with a prepared message.", error:"Please complete the required fields correctly. The project description must be at least 20 characters." }
} as const;

const serviceLabels: Record<string, {ka:string;en:string}> = { website:{ka:"ვებსაიტი",en:"Website"}, commerce:{ka:"ონლაინ გაყიდვები",en:"E-commerce"}, booking:{ka:"ჯავშნის სისტემა",en:"Booking system"}, "gift-card":{ka:"ციფრული სასაჩუქრე ბარათები",en:"Digital gift cards"}, system:{ka:"სხვა ციფრული სისტემა",en:"Other digital system"} };

export function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [status, setStatus] = useState<"idle"|"opening"|"error">("idle");
  const [selectedService, setSelectedService] = useState("");
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service") || "";
    if (requested in serviceLabels) setSelectedService(requested);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("error");
      return;
    }

    setStatus("opening");
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const business = String(data.get("business") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !service || message.length < 20) { setStatus("error"); return; }
    const label = serviceLabels[service]?.[locale] || service;
    const subject = locale === "ka" ? `OMNIA — ახალი პროექტი: ${business || name}` : `OMNIA — New project: ${business || name}`;
    const body = locale === "ka"
      ? `სახელი: ${name}\nელფოსტა: ${email}\nბიზნესი / ბრენდი: ${business || "—"}\nსერვისი: ${label}\n\nპროექტი:\n${message}`
      : `Name: ${name}\nEmail: ${email}\nBusiness / brand: ${business || "—"}\nService: ${label}\n\nProject:\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => setStatus("idle"), 700);
  }

  return <form className="contact-form" onSubmit={onSubmit} noValidate aria-busy={status === "opening"}>
    <div className="form-grid"><label><span>{t.name}</span><input name="name" autoComplete="name" required minLength={2}/></label><label><span>{t.email}</span><input name="email" type="email" autoComplete="email" required/></label></div>
    <label><span>{t.business}</span><input name="business" autoComplete="organization"/></label>
    <label><span>{t.service}</span><select name="service" required value={selectedService} onChange={(e)=>setSelectedService(e.target.value)}><option value="" disabled>{t.choose}</option>{Object.entries(serviceLabels).map(([value, labels])=><option key={value} value={value}>{labels[locale]}</option>)}</select></label>
    <label><span>{t.message}</span><textarea name="message" required minLength={20} rows={6}/></label>
    <div className="form-actions"><motion.button type="submit" className="primary-button" disabled={status === "opening"} whileHover={{x:3}} whileTap={{scale:.985}}>{status === "opening" ? t.opening : <>{t.submit}<span>↗</span></>}</motion.button><p className="response-note" aria-live="polite">{t.response}</p></div>
    {status === "error" && <div className="form-message error" role="alert">{t.error} <a href={`mailto:${site.email}`}>{site.email}</a></div>}
  </form>;
}
