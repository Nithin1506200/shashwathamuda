import { useEffect, useState } from "react";

const interests = [
  "Yoga classes",
  "Personalised one-to-one sessions",
  "Prenatal yoga",
  "Therapeutic Yoga / Consultation",
  "Pranayama & Meditation",
  "Carnatic Veena / Music",
  "Workshops & Training",
  "Research collaboration",
  "Institutional / Corporate program",
  "Volunteering",
  "Other",
];

type Props = { whatsapp: string };

export default function ContactForm({ whatsapp }: Props) {
  const [form, setForm] = useState({ name: "", interest: interests[0], message: "" });

  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get("interest");
    if (interest) setForm((current) => ({ ...current, interest }));
  }, []);

  const update =
    (key: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((current) => ({ ...current, [key]: event.target.value }));

  const field =
    "w-full rounded-xl border border-sand-200 bg-white/80 px-4 py-3 text-ink-900 placeholder:text-ink-500/70 transition focus:border-peacock-400 focus:outline-none focus:ring-2 focus:ring-peacock-200";

  return (
    <form className="grid gap-4" onSubmit={(event) => {
      event.preventDefault();
      const lines = [
        "Reaching out from an enquiry on the Shashwatamuda website.",
        `Hello, I am interested in ${form.interest}.`,
        form.name.trim() && `Name: ${form.name.trim()}`,
        form.message.trim() && `Message: ${form.message.trim()}`,
      ].filter(Boolean);
      window.open(`${whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    }}>
      <label className="grid gap-1.5 text-sm font-medium text-ink-700">
        Name (optional)
        <input className={field} value={form.name} onChange={update("name")} placeholder="Your name" autoComplete="name" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-ink-700">
        Area of interest
        <select className={field} value={form.interest} onChange={update("interest")}>
          {!interests.includes(form.interest) && <option value={form.interest}>{form.interest}</option>}
          {interests.map((interest) => <option key={interest}>{interest}</option>)}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-ink-700">
        Message (optional)
        <textarea rows={5} className={field} value={form.message} onChange={update("message")} placeholder="Tell us a little about what you are looking for." />
      </label>
      <button type="submit" className="btn-primary justify-self-start">Continue on WhatsApp</button>
      <p className="text-xs text-ink-500">WhatsApp will open in a new tab with your enquiry ready to send.</p>
    </form>
  );
}
