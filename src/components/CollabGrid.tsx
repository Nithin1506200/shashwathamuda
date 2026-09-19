const partners = [
  ['Schools & Colleges', 'Yoga camps, wellness weeks, music programs and youth leadership.'],
  ['Universities', 'Research collaborations, guest lectures and student wellness.'],
  ['Hospitals & Healthcare Institutions', 'Integrative yoga therapy programs and evidence-informed modules.'],
  ['Wellness Centres', 'Faculty, curated programs and raga-based relaxation sessions.'],
  ['NGOs', 'Community outreach, rehabilitation settings and special populations.'],
  ['Corporates', 'Workplace wellness, stress and breath programs, retreats.'],
  ['Cultural Organizations', 'Carnatic music programs, festivals and lecture-demonstrations.'],
  ['Researchers', 'Joint studies, protocol design and data collection support.'],
  ['Yoga & Music Professionals', 'Teaching opportunities, continuing education and mentorship.'],
];

export default function CollabGrid() {
  return (
    <ul className="not-prose grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {partners.map(([t, d], i) => (
        <li key={t} className={`card reveal reveal-delay-${(i % 3) + 1}`}>
          <h3 className="font-display text-xl font-semibold text-peacock-800">{t}</h3>
          <p className="mt-2 text-sm text-ink-700">{d}</p>
        </li>
      ))}
    </ul>
  );
}
