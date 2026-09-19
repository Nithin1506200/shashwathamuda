import { splitEvents, formatDate, type Event } from '../data/events';

function EventCard({ event, past = false }: { event: Event; past?: boolean }) {
  const d = new Date(event.date + 'T00:00:00');
  return (
    <article className={`card reveal flex gap-5 ${past ? 'opacity-90' : ''}`}>
      <div className="flex h-20 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-peacock-600 text-white">
        <span className="font-display text-2xl font-semibold leading-none">{d.getDate()}</span>
        <span className="mt-1 text-[11px] uppercase tracking-widest">{d.toLocaleDateString('en-IN', { month: 'short' })}</span>
      </div>
      <div className="min-w-0">
        <p className="eyebrow">{event.type}</p>
        <h3 className="font-display mt-1 text-xl font-semibold text-peacock-800">{event.title}</h3>
        <p className="mt-1 text-sm text-ink-500">
          {formatDate(event.date, event.endDate)}
          {event.time && ` · ${event.time}`} · {event.location}
        </p>
        <p className="mt-3 text-ink-700">{event.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          {event.fee && <span className="rounded-full bg-gold-300/40 px-3 py-1 text-ink-700">{event.fee}</span>}
          {!past && event.registration && (
            <a href={event.registration} className="font-semibold text-peacock-600 hover:underline">Register →</a>
          )}
        </div>
      </div>
    </article>
  );
}

export function UpcomingEvents({ limit }: { limit?: number }) {
  const { upcoming } = splitEvents();
  const list = limit ? upcoming.slice(0, limit) : upcoming;
  if (!list.length) return <p className="not-prose text-ink-500">No upcoming events right now. Follow us on Instagram for announcements.</p>;
  return (
    <div className="not-prose grid gap-5 md:grid-cols-2">
      {list.map((e) => <EventCard key={e.slug} event={e} />)}
    </div>
  );
}

export function PastEvents() {
  const { past } = splitEvents();
  return (
    <div className="not-prose grid gap-5 md:grid-cols-2">
      {past.map((e) => <EventCard key={e.slug} event={e} past />)}
    </div>
  );
}
