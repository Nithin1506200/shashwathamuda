import { useEffect, useMemo, useState } from "react";

const interests = [
  "Yoga classes",
  "Therapeutic Yoga / Consultation",
  "Pranayama & Meditation",
  "Carnatic Veena / Music",
  "Workshops & Training",
  "Research collaboration",
  "Institutional / Corporate program",
  "Volunteering",
  "Other",
];

type Props = { email: string };

/**
 * Static-site friendly contact form. Submissions open the visitor's mail client with a
 * pre-filled message. Swap `mode` to "endpoint" and set `endpoint` (e.g. a Formspree URL)
 * to POST instead.
 */
export default function ContactForm({ email }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: interests[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("interest");
    if (p)
      setForm((f) => ({
        ...f,
        interest: p,
        message: `I would like to know more about ${p}.`,
      }));
  }, []);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      `[Website] ${form.interest} — ${form.name || "Enquiry"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nArea of interest: ${form.interest}\n\n${form.message}`,
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [form, email]);

  const update =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const field =
    "w-full rounded-xl border border-sand-200 bg-white/80 px-4 py-3 text-ink-900 placeholder:text-ink-500/70 transition focus:border-peacock-400 focus:outline-none focus:ring-2 focus:ring-peacock-200";

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-ink-700">
          Name
          <input
            required
            className={field}
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-ink-700">
          Email
          <input
            required
            type="email"
            className={field}
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-ink-700">
          Phone
          <input
            type="tel"
            className={field}
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91"
            autoComplete="tel"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-ink-700">
          Area of interest
          <select
            className={field}
            value={form.interest}
            onChange={update("interest")}
          >
            {!interests.includes(form.interest) && (
              <option value={form.interest}>{form.interest}</option>
            )}
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium text-ink-700">
        Message
        <textarea
          required
          rows={5}
          className={field}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us a little about what you are looking for."
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary">
          Send message
        </button>
        {sent && (
          <p className="text-sm text-peacock-700">
            Your mail app should open with the message pre-filled. Thank you!
          </p>
        )}
      </div>
      <p className="text-xs text-ink-500">
        By writing to us you agree to be contacted about your enquiry. We never
        share your details.
      </p>
    </form>
  );
}
