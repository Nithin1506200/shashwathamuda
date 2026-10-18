type OfferingIcon = 'group' | 'advanced' | 'therapy' | 'corporate' | 'veena' | 'individual' | 'prenatal';

function ProgrammeIcon({ kind }: { kind: OfferingIcon }) {
  const drawings = {
    group: <>
      <circle cx="16" cy="7" r="2.5" />
      <path d="M16 12v7m-6-4 6-3 6 3m-6 4-6 6h12l-6-6" />
      <circle cx="5" cy="12" r="2" /><circle cx="27" cy="12" r="2" />
      <path d="m2 21 3-5 4 3m21 2-3-5-4 3M2 26h5m18 0h5" />
    </>,
    advanced: <>
      <circle cx="16" cy="6" r="2.5" />
      <path d="M16 11v10m0-8-6-5V3m6 10 6-5V3m-6 18v8m0-12 7 5-7 4M10 29h12" />
    </>,
    therapy: <>
      <path d="M16 27S4 20 4 12a7 7 0 0 1 12-4 7 7 0 0 1 12 4c0 8-12 15-12 15Z" />
      <path d="M7 16h5l2-5 4 10 2-5h5" />
    </>,
    corporate: <>
      <rect x="7" y="5" width="18" height="24" rx="2" />
      <path d="M3 29h26M12 10h2m4 0h2m-8 5h2m4 0h2m-8 5h2m4 0h2m-6 9v-5h4v5" />
    </>,
    veena: <>
      <path d="m12 19 10-14 4 3-10 14M22 5l1-2 5 4-2 1" />
      <path d="M12 19c-3-2-8 0-8 4a6 6 0 0 0 11 3c2-2 2-4 1-4" />
      <circle cx="20" cy="15" r="3" />
      <path d="m8 25 15-19m-9 9 4 3m-1-7 4 3M7 24l3 2" />
    </>,
    individual: <>
      <circle cx="8" cy="9" r="3" /><circle cx="24" cy="9" r="3" />
      <path d="M2 26v-5a6 6 0 0 1 12 0v5m4 0v-5a6 6 0 0 1 12 0v5M13 8h6m-2-2 2 2-2 2" />
    </>,
    prenatal: <>
      <circle cx="15" cy="6" r="3" />
      <path d="M12 12c-3 3-4 8-3 12l-2 5m9-17c1 2 1 3 3 4 4 1 6 4 5 7s-5 4-9 3l-1 3m-3-13 3 5h6M5 29h12" />
    </>,
  };
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {drawings[kind]}
    </svg>
  );
}

type Offering = {
  icon: OfferingIcon;
  title: string;
  description: string;
  interest: string;
  label: string;
  note?: string;
};

const programmes: Offering[] = [
  {
    title: 'General group yoga classes',
    icon: 'group',
    description: 'Practise yoga in a group setting with guidance in asana, breath awareness and relaxation.',
    interest: 'Yoga classes',
    label: 'Enquire about group classes',
  },
  {
    title: 'Advanced yoga practice',
    icon: 'advanced',
    description: 'Deepen your practice with guided advanced asana, alignment and breath work.',
    interest: 'Yoga classes',
    label: 'Enquire about advanced practice',
  },
  {
    title: 'Therapeutic yoga for ailments',
    icon: 'therapy',
    description: 'Explore adapted yoga practices to support your individual health needs. Contact us to discuss a suitable approach.',
    interest: 'Therapeutic Yoga / Consultation',
    label: 'Enquire about therapeutic yoga',
    note: 'Therapeutic yoga complements medical care and does not replace diagnosis or treatment by a qualified healthcare professional.',
  },
  {
    title: 'Corporate yoga',
    icon: 'corporate',
    description: "Bring yoga and well-being practices to your workplace. Contact us for more information and to discuss your team's requirements.",
    interest: 'Institutional / Corporate program',
    label: 'Contact us about corporate yoga',
  },
  {
    title: 'Carnatic Veena classes',
    icon: 'veena',
    description: 'Learn Carnatic music through guided Veena classes with Nikhil Srinivas.',
    interest: 'Carnatic Veena / Music',
    label: 'Enquire about Veena classes',
  },
];

const specialProgrammes: Offering[] = [
  {
    title: 'Personalised one-to-one sessions',
    icon: 'individual',
    description: 'Individual yoga sessions tailored to your goals, experience and pace, with dedicated guidance from your teacher.',
    interest: 'Personalised one-to-one sessions',
    label: 'Enquire about one-to-one sessions',
  },
  {
    title: 'Prenatal yoga',
    icon: 'prenatal',
    description: 'Dedicated yoga sessions for expectant mothers, with practice adapted to individual needs. Contact us to discuss the programme and suitability.',
    interest: 'Prenatal yoga',
    label: 'Enquire about prenatal yoga',
  },
];

export function ProgramHighlights() {
  return (
    <div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[...programmes, ...specialProgrammes].map((offering, index) => (
          <li key={offering.title} className={`reveal reveal-delay-${(index % 3) + 1}`}>
            <a href={`/programs#${offering.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="card group flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peacock-600">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-peacock-50 text-peacock-700">
                <ProgrammeIcon kind={offering.icon} />
              </span>
              {index >= programmes.length && <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold-600">Special programme</span>}
              <h3 className="font-display text-2xl font-semibold text-peacock-800 group-hover:text-peacock-600">{offering.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-700">{offering.description}</p>
              <span className="mt-auto pt-5 text-sm font-semibold text-gold-600">Explore <span aria-hidden="true">→</span></span>
            </a>
          </li>
        ))}
      </ul>
      <div className="reveal mt-8 text-center">
        <a href="/programs" className="btn-outline">All programmes & services</a>
      </div>
    </div>
  );
}

export default function ProgramOfferings({ special = false }: { special?: boolean }) {
  const offerings = special ? specialProgrammes : programmes;
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {offerings.map((offering, index) => (
        <li key={offering.title} id={offering.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className={`flex scroll-mt-28 flex-col rounded-2xl border bg-white p-7 shadow-sm sm:p-9 ${special ? 'border-gold-400/60' : 'border-sand-200'} ${!special && index === offerings.length - 1 ? 'md:col-span-2' : ''}`}>
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-peacock-700 ${special ? 'bg-gold-300/20' : 'bg-peacock-50'}`}>
              <ProgrammeIcon kind={offering.icon} />
            </span>
            <p className={`text-right text-xs font-semibold uppercase tracking-[0.18em] ${special ? 'text-peacock-600' : 'text-ink-500'}`}>
              {special ? 'Special programme' : `Programme ${String(index + 1).padStart(2, '0')}`}
            </p>
          </div>
          <h3 className="font-display text-3xl font-semibold leading-tight text-peacock-900">{offering.title}</h3>
          <p className="mt-4 text-base leading-7 text-ink-700">{offering.description}</p>
          {offering.note && <p className="mt-4 text-sm leading-6 text-ink-500">{offering.note}</p>}
          <div className="mt-auto pt-8">
            <a className="inline-flex items-center gap-3 rounded py-2 text-sm font-semibold text-peacock-700 underline-offset-4 transition-colors hover:text-peacock-500 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peacock-600" href={`/contact?interest=${encodeURIComponent(offering.interest)}`}>
              {offering.label}<span aria-hidden="true">→</span>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
