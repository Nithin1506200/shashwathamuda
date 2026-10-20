import { team, testimonials } from '../data/team';
import NikhilProfile from './NikhilProfile';
import DhruviProfile from './DhruviProfile';

export function TeamGrid() {
  const groups = [...new Set(team.map((m) => m.group))];
  return (
    <div className="not-prose space-y-12">
      {groups.map((g) => (
        <div key={g}>
          <h2 className="reveal flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-peacock-600">
            {g}<span aria-hidden="true" className="h-px flex-1 bg-sand-200" />
          </h2>
          <ul className="mt-6 grid gap-6">
            {team.filter((m) => m.group === g).map((m, i) => (
              <li key={m.name} id={m.name === 'Nikhil Srinivas' ? 'nikhil-srinivas' : m.name === 'Dhruvi Patel' ? 'dhruvi-patel' : undefined} className={`reveal reveal-delay-${(i % 3) + 1} relative scroll-mt-28 rounded-2xl border border-sand-200 bg-white shadow-sm`}>
                <span data-team-sentinel aria-hidden="true" className="pointer-events-none block h-px -mb-px" />
                <div data-team-identity className="team-identity sticky top-16 z-20 flex items-center gap-4 rounded-t-2xl border-b border-sand-200 bg-sand-50/95 px-6 py-7 backdrop-blur-md sm:top-20 sm:gap-6 sm:px-10 sm:py-8">
                  <div className="team-initials flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-sand-200 bg-sand-100 sm:h-16 sm:w-16">
                    {m.image ? (
                      <img src={m.image} alt={m.name} width={64} height={64} className="h-full w-full object-cover object-[50%_25%]" />
                    ) : (
                      <span aria-hidden="true" className="font-display text-2xl font-medium text-peacock-700 sm:text-3xl">
                        {m.initials}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="team-name font-display text-2xl font-semibold leading-tight text-peacock-900 sm:text-3xl">{m.name}</h3>
                    <p className="team-role mt-2 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-peacock-600 sm:text-xs">{m.role}</p>
                  </div>
                </div>
                <div className="space-y-5 px-7 py-8 text-base leading-8 text-ink-700 sm:px-10">
                  {m.bio && <p>{m.bio}</p>}
                  {m.personalStatement && <p>{m.personalStatement}</p>}
                  {m.education && (
                    <div>
                      <h4 className="font-semibold text-peacock-800">Education</h4>
                      <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-gold-600">
                        {m.education.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  )}
                  {m.experience && (
                    <div>
                      <h4 className="font-semibold text-peacock-800">Experience</h4>
                      <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-gold-600">
                        {m.experience.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
                {m.name === 'Nikhil Srinivas' && (
                  <div className="px-7 pb-8 sm:px-10">
                    <a className="btn-outline" href="/gallery#nikhil-srinivas">Explore Nikhil’s gallery <span aria-hidden="true">→</span></a>
                  </div>
                )}
                {m.name === 'Dhruvi Patel' && (
                  <div className="border-t border-sand-200 px-7 py-8 sm:px-10">
                    <DhruviProfile />
                  </div>
                )}
                {m.name === 'Nikhil Srinivas' && (
                  <details className="group border-t border-sand-200">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-b-2xl bg-sand-50 px-7 py-5 text-sm font-semibold text-peacock-700 transition-colors hover:bg-peacock-50 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-peacock-600 group-open:rounded-b-none sm:px-10 [&::-webkit-details-marker]:hidden">
                      Full profile & qualifications
                      <span aria-hidden="true" className="text-2xl transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="px-7 py-8 sm:p-10">
                      <NikhilProfile />
                    </div>
                  </details>
                )}
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
