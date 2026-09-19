import type { ReactNode } from 'react';

type SectionProps = { children: ReactNode; className?: string; id?: string; tone?: 'plain' | 'tint' | 'dark' };

/** Full-width section wrapper for use inside MDX pages (opts out of prose styling). */
export function Section({ children, className = '', id, tone = 'plain' }: SectionProps) {
  const bg = tone === 'tint' ? 'bg-sand-100/70' : tone === 'dark' ? 'bg-peacock-800 text-peacock-50' : '';
  return (
    <section id={id} className={`not-prose ${bg} ${className}`}>
      <div className="container-x py-16 sm:py-20">{children}</div>
    </section>
  );
}

type HeadingProps = { eyebrow?: string; title: string; lead?: string; align?: 'center' | 'left'; className?: string; light?: boolean };

export function SectionHeading({ eyebrow, title, lead, align = 'center', className = '', light }: HeadingProps) {
  return (
    <div className={`reveal ${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && <p className={`eyebrow ${light ? 'text-gold-300' : ''}`}>{eyebrow}</p>}
      <h2 className={`font-display mt-2 text-3xl font-semibold leading-tight sm:text-4xl ${light ? 'text-white' : 'text-peacock-800'}`}>{title}</h2>
      {lead && <p className={`mt-4 text-lg ${light ? 'text-peacock-100' : 'text-ink-700'}`}>{lead}</p>}
    </div>
  );
}

export function Cta({ title, text, primary, secondary }: { title: string; text?: string; primary: { label: string; href: string }; secondary?: { label: string; href: string } }) {
  return (
    <div className="not-prose reveal relative overflow-hidden rounded-3xl bg-peacock-700 px-6 py-12 text-center text-white sm:px-12">
      <div className="feather-texture absolute inset-0 opacity-30" />
      <div className="relative">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
        {text && <p className="mx-auto mt-3 max-w-xl text-peacock-100">{text}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={primary.href} className="btn-gold">{primary.label}</a>
          {secondary && <a href={secondary.href} className="btn border border-white/40 text-white hover:bg-white/10">{secondary.label}</a>}
        </div>
      </div>
    </div>
  );
}
