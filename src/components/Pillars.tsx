import { pillars } from '../data/programs';
import { SectionHeading } from './Section';

const icons: Record<string, string> = {
  yoga: 'M12 3c1.5 3 1.5 6 0 9-1.5-3-1.5-6 0-9zm0 9c3 1.5 6 1.5 9 0-3-1.5-6-1.5-9 0zm0 0c-3 1.5-6 1.5-9 0 3-1.5 6-1.5 9 0zm0 0c1.5 3 1.5 6 0 9-1.5-3-1.5-6 0-9z',
  music: 'M9 18V6l11-2v12M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm11-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
  jnana: 'M4 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H4zm16 0h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z',
  research: 'M10 3v6L5 18a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M9 3h6',
  seva: 'M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z',
};

export default function Pillars({ heading = true }: { heading?: boolean }) {
  return (
    <div>
      {heading && (
        <SectionHeading
          eyebrow="Our pillars"
          title="Five pathways, one truth"
          lead="Shashwatamuda is broader than a yoga centre. Each pillar draws on the same source and serves the same end: a settled, joyful mind."
          className="mb-12"
        />
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <a
            key={p.key}
            href={p.href}
            className={`card reveal group reveal-delay-${(i % 4) + 1} ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-peacock-50 text-peacock-600 transition-colors group-hover:bg-peacock-600 group-hover:text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icons[p.key]} />
                </svg>
              </span>
              <span className="font-display text-xl text-gold-500">{p.sanskrit}</span>
            </div>
            <h3 className="font-display mt-5 text-2xl font-semibold text-peacock-800">{p.title}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-peacock-500">{p.line}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {p.items.map((it) => (
                <li key={it} className="rounded-full border border-sand-200 bg-sand-50 px-2.5 py-1 text-xs text-ink-700">
                  {it}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </div>
  );
}
