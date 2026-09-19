import { site, footerNav } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  const social = [
    { href: site.social.instagram, label: 'Instagram', d: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></> },
    { href: site.social.facebook, label: 'Facebook', d: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" /> },
    { href: site.social.youtube, label: 'YouTube', d: <><rect x="3" y="6" width="18" height="12" rx="4" /><path d="M10 9.5v5l4.5-2.5z" fill="currentColor" /></> },
  ];
  return (
    <footer className="relative mt-8 border-t border-sand-200 bg-peacock-900 text-peacock-100">
      <div className="feather-texture pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <a href="/" className="flex items-center gap-3">
            <img src="/icons/icon-192.png" alt="" width={52} height={52} className="h-13 w-13 rounded-full ring-1 ring-gold-400/50" />
            <span>
              <span className="font-display block text-2xl font-semibold text-white">{site.name}</span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold-300">{site.tagline}</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-peacock-200">Ancient Wisdom. Contemporary Well-being. Eternal Joy.</p>
          <p className="mt-3 text-sm text-peacock-200">{site.location}</p>
          <div className="mt-6 flex gap-3">
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label} className="rounded-full border border-peacock-700 p-2.5 transition hover:border-gold-400 hover:text-gold-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{s.d}</svg>
              </a>
            ))}
          </div>
        </div>
        {footerNav.map((col) => (
          <div key={col.heading}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">{col.heading}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.items.map((it) => (
                <li key={it.href}>
                  <a href={it.href} className="text-peacock-100 transition hover:text-white hover:underline">{it.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative border-t border-peacock-800">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-peacock-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Wellness and educational programs are not a substitute for medical care.</p>
        </div>
      </div>
    </footer>
  );
}
