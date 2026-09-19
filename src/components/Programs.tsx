import { programGroups } from '../data/programs';

export function ProgramGroups({ only }: { only?: string[] }) {
  const groups = only ? programGroups.filter((g) => only.includes(g.key)) : programGroups;
  return (
    <div className="not-prose space-y-16">
      {groups.map((g) => (
        <div key={g.key} id={g.key} className="scroll-mt-24">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-peacock-800">{g.title}</h2>
              <p className="mt-1 max-w-xl text-ink-700">{g.intro}</p>
            </div>
            <a href={g.href} className="text-sm font-semibold text-peacock-600 hover:underline">Learn more →</a>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((it, i) => (
              <li key={it.title} className={`card reveal reveal-delay-${(i % 3) + 1}`}>
                <h3 className="font-display text-xl font-semibold text-peacock-800">{it.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{it.blurb}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-gold-600">{it.format}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ProgramList({ group }: { group: string }) {
  const g = programGroups.find((x) => x.key === group);
  if (!g) return null;
  return (
    <ul className="not-prose grid gap-4 sm:grid-cols-2">
      {g.items.map((it, i) => (
        <li key={it.title} className={`card reveal reveal-delay-${(i % 2) + 1}`}>
          <h3 className="font-display text-lg font-semibold text-peacock-800">{it.title}</h3>
          <p className="mt-1.5 text-sm text-ink-700">{it.blurb}</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wider text-gold-600">{it.format}</p>
        </li>
      ))}
    </ul>
  );
}
