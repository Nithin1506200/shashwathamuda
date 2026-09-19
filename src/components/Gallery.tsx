const albums = [
  { key: 'yoga', title: 'Yoga', count: 6, from: 'from-peacock-400', to: 'to-feather-500' },
  { key: 'music', title: 'Music', count: 4, from: 'from-knot-500', to: 'to-plume-500' },
  { key: 'workshops', title: 'Workshops', count: 5, from: 'from-gold-400', to: 'to-saffron-400' },
  { key: 'community', title: 'Community', count: 6, from: 'from-feather-500', to: 'to-peacock-600' },
  { key: 'events', title: 'Events', count: 4, from: 'from-plume-500', to: 'to-knot-600' },
  { key: 'youth', title: 'Youth Programs', count: 3, from: 'from-saffron-400', to: 'to-gold-500' },
];

/**
 * Placeholder gallery. Replace each tile with an <img> once photographs are
 * available (see README → Gallery).
 */
export default function Gallery() {
  return (
    <div className="not-prose space-y-14">
      {albums.map((a) => (
        <section key={a.key} id={a.key} className="scroll-mt-24">
          <div className="reveal flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold text-peacock-800">{a.title}</h2>
            <span className="text-xs uppercase tracking-wider text-ink-500">{a.count} photos</span>
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: a.count }).map((_, i) => (
              <li
                key={i}
                className={`reveal reveal-delay-${(i % 4) + 1} feather-texture group relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br ${a.from} ${a.to}`}
              >
                <span className="absolute inset-0 flex items-center justify-center text-white/70 transition-transform duration-500 group-hover:scale-110">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="9" cy="10" r="2" />
                    <path d="m21 16-5-5-8 8" />
                  </svg>
                </span>
                <span className="absolute bottom-2 left-3 text-xs font-medium text-white/90">{a.title} · {i + 1}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
