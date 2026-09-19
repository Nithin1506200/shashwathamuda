export type Event = {
  slug: string;
  title: string;
  date: string; // ISO date
  endDate?: string;
  time?: string;
  location: string;
  type: 'Workshop' | 'Yoga Camp' | 'Music Program' | 'Lecture' | 'Community' | 'International Yoga Day';
  summary: string;
  fee?: string;
  registration?: string;
};

export const events: Event[] = [
  {
    slug: 'pranayama-foundations-oct-2026',
    title: 'Pranayama Foundations — 6-week course',
    date: '2026-10-05',
    endDate: '2026-11-13',
    time: '6:30 – 7:30 am',
    location: 'Shashwatamuda Centre, Bengaluru & online',
    type: 'Workshop',
    summary: 'A structured six-week journey through the classical pranayama techniques, with safe home-practice guidance.',
    fee: '₹ 2,500',
    registration: '/contact?interest=Pranayama%20Foundations',
  },
  {
    slug: 'veena-and-stillness-oct-2026',
    title: 'Veena & Stillness — an evening of Nāda',
    date: '2026-10-18',
    time: '6:00 – 7:30 pm',
    location: 'Shashwatamuda Centre, Bengaluru',
    type: 'Music Program',
    summary: 'A raga-based relaxation session with live Veena, guided breathing and quiet listening.',
    fee: 'Free · registration required',
    registration: '/contact?interest=Veena%20%26%20Stillness',
  },
  {
    slug: 'youth-yoga-camp-nov-2026',
    title: 'Youth Yoga & Leadership Camp',
    date: '2026-11-21',
    endDate: '2026-11-23',
    location: 'Partner school campus, Bengaluru',
    type: 'Yoga Camp',
    summary: 'Three days of yoga, music, teamwork and leadership activities for students aged 13–18.',
    fee: 'Institutional booking',
    registration: '/collaborate',
  },
  {
    slug: 'yoga-therapy-research-lecture-dec-2026',
    title: 'Lecture: What the evidence says about Yoga Therapy',
    date: '2026-12-06',
    time: '11:00 am – 12:30 pm',
    location: 'Online',
    type: 'Lecture',
    summary: 'An accessible overview of current research in integrative medicine and yoga therapy, followed by Q&A.',
    fee: 'Free',
    registration: '/contact?interest=Lecture',
  },
  // Past events
  {
    slug: 'international-yoga-day-2026',
    title: 'International Yoga Day 2026 — Common Yoga Protocol',
    date: '2026-06-21',
    time: '6:00 – 8:00 am',
    location: 'Community park, Bengaluru',
    type: 'International Yoga Day',
    summary: 'Open-air practice of the Common Yoga Protocol with over 200 participants, followed by a Carnatic music interlude.',
  },
  {
    slug: 'school-wellness-week-2026',
    title: 'School Wellness Week',
    date: '2026-07-14',
    endDate: '2026-07-18',
    location: 'Partner schools, Bengaluru',
    type: 'Community',
    summary: 'Daily yoga and music sessions across three partner schools reaching 600 students.',
  },
  {
    slug: 'backcare-workshop-aug-2026',
    title: 'Yoga for Back Care — weekend workshop',
    date: '2026-08-22',
    endDate: '2026-08-23',
    location: 'Shashwatamuda Centre, Bengaluru',
    type: 'Workshop',
    summary: 'A two-day therapeutic workshop on posture, spinal mobility and everyday habits.',
  },
];

export function splitEvents(today = new Date()) {
  const t = today.toISOString().slice(0, 10);
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  return {
    upcoming: sorted.filter((e) => (e.endDate ?? e.date) >= t),
    past: sorted.filter((e) => (e.endDate ?? e.date) < t).reverse(),
  };
}

export function formatDate(iso: string, endIso?: string) {
  const fmt = (d: string) =>
    new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  if (!endIso) return fmt(iso);
  const a = new Date(iso + 'T00:00:00');
  const b = new Date(endIso + 'T00:00:00');
  if (a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear()) {
    return `${a.getDate()}–${b.getDate()} ${a.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}`;
  }
  return `${fmt(iso)} – ${fmt(endIso)}`;
}
