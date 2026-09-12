"use client";

import { motion } from "motion/react";
import { useEffect, useState, type FormEvent } from "react";
import { site, type Locale } from "@/lib/site";

const copy = {
  ka: {
    name: "სახელი *",
    email: "ელფოსტა *",
    business: "ბიზნესი / ბრენდი",
    service: "რა გჭირდება? *",
    choose: "აირჩიე მიმართულება",
    message: "მოკლედ მოგვიყევი პროექტზე *",
    submit: "მოთხოვნის გაგზავნა",
    sending: "იგზავნება…",
    response: "მოთხოვნა პირდაპირ OMNIA-ს ელფოსტაზე გამოიგზავნება.",
    success: "მადლობა — მოთხოვნა მიღებულია. მაქსიმუმ 1 სამუშაო დღეში გიპასუხებთ.",
    error: "შეავსე სავალდებულო ველები სწორად. პროექტის აღწერა მინიმუმ 20 სიმბოლო უნდა იყოს.",
    sendError: "მოთხოვნის გაგზავნა ვერ მოხერხდა. სცადე ხელახლა ან მოგვწერე ელფოსტაზე."
  },
  en: {
    name: "Name *",
    email: "Email *",
    business: "Business / brand",
    service: "What do you need? *",
    choose: "Choose a service",
    message: "Tell us briefly about the project *",
    submit: "Send request",
    sending: "Sending…",
    response: "Your request is sent directly to OMNIA by email.",
    success: "Thanks — your request has been received. We'll reply within 1 business day.",
    error: "Please complete the required fields correctly. The project description must be at least 20 characters.",
    sendError: "We couldn't send your request. Please try again or email us directly."
  }
} as const;

const serviceLabels: Record<string, { ka: string; en: string }> = {
  website: { ka: "ვებსაიტი", en: "Website" },
  commerce: { ka: "ონლაინ გაყიდვები", en: "E-commerce" },
  booking: { ka: "ჯავშნის სისტემა", en: "Booking system" },
  "gift-card": { ka: "ციფრული სასაჩუქრე ბარათები", en: "Digital gift cards" },
  system: { ka: "სხვა ციფრული სისტემა", en: "Other digital system" }
};

type FormStatus = "idle" | "sending" | "success" | "validation-error" | "send-error";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [status, setStatus] = useState<FormStatus>("idle");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service") || "";
    if (requested in serviceLabels) setSelectedService(requested);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("validation-error");
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const business = String(data.get("business") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();
    const honey = String(data.get("_honey") || "").trim();

    if (!name || !email || !service || message.length < 20) {
      setStatus("validation-error");
      return;
    }

    if (honey) {
      setStatus("success");
      form.reset();
      setSelectedService("");
      return;
    }

    const label = serviceLabels[service]?.[locale] || service;
    const subject = locale === "ka"
      ? `OMNIA — ახალი პროექტი: ${business || name}`
      : `OMNIA — New project: ${business || name}`;

    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          business: business || "—",
          service: label,
          message,
          language: locale === "ka" ? "Georgian" : "English",
          page: window.location.href,
          _subject: subject,
          _replyto: email,
          _template: "table",
          _honey: honey
        })
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success === false) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      form.reset();
      setSelectedService("");
    } catch {
      setStatus("send-error");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate aria-busy={status === "sending"}>
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />

      <div className="form-grid">
        <label>
          <span>{t.name}</span>
          <input name="name" autoComplete="name" required minLength={2} />
        </label>
        <label>
          <span>{t.email}</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <label>
        <span>{t.business}</span>
        <input name="business" autoComplete="organization" />
      </label>

      <label>
        <span>{t.service}</span>
        <select
          name="service"
          required
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="" disabled>{t.choose}</option>
          {Object.entries(serviceLabels).map(([value, labels]) => (
            <option key={value} value={value}>{labels[locale]}</option>
          ))}
        </select>
      </label>

      <label>
        <span>{t.message}</span>
        <textarea name="message" required minLength={20} rows={6} />
      </label>

      <div className="form-actions">
        <motion.button
          type="submit"
          className="primary-button"
          disabled={status === "sending"}
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.985 }}
        >
          {status === "sending" ? t.sending : <>{t.submit}<span>↗</span></>}
        </motion.button>
        <p className="response-note" aria-live="polite">{t.response}</p>
      </div>

      {status === "success" && (
        <div className="form-message" role="status">{t.success}</div>
      )}

      {status === "validation-error" && (
        <div className="form-message error" role="alert">
          {t.error} <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      )}

      {status === "send-error" && (
        <div className="form-message error" role="alert">
          {t.sendError} <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      )}
    </form>
  );
}
