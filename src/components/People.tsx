import { team, testimonials } from '../data/team';

export function TeamGrid() {
  const groups = [...new Set(team.map((m) => m.group))];
  return (
    <div className="not-prose space-y-12">
      {groups.map((g) => (
        <div key={g}>
          <h2 className="font-display reveal text-2xl font-semibold text-peacock-800">{g}</h2>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.filter((m) => m.group === g).map((m, i) => (
              <li key={m.name} className={`card reveal reveal-delay-${(i % 3) + 1} flex gap-4`}>
                <span className="font-display flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-peacock-500 to-knot-600 text-xl font-semibold text-white">
                  {m.initials}
                </span>
                <div>
                  <h3 className="font-semibold text-ink-900">{m.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-gold-600">{m.role}</p>
                  <p className="mt-2 text-sm text-ink-700">{m.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Testimonials({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <ul className="not-prose grid gap-5 md:grid-cols-2">
      {list.map((t, i) => (
        <li key={t.name + t.program} className={`card reveal reveal-delay-${(i % 2) + 1} relative`}>
          <span className="font-display absolute right-6 top-4 text-6xl leading-none text-gold-300/60" aria-hidden="true">“</span>
          <p className="font-display text-xl leading-relaxed text-ink-900">{t.quote}</p>
          <p className="mt-5 text-sm text-ink-500">
            <span className="font-semibold text-peacock-700">{t.name}</span> · {t.program} · {t.year}
          </p>
        </li>
      ))}
    </ul>
  );
}
