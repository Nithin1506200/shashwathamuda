import Mandala from './Mandala';
import SerpentDivider from './SerpentDivider';

type Props = { eyebrow?: string; title: string; lead?: string; sanskrit?: string };

export default function PageHero({ eyebrow, title, lead, sanskrit }: Props) {
  return (
    <section className="bg-mandala relative overflow-hidden">
      <Mandala className="pointer-events-none absolute -right-40 -top-40 opacity-70 sm:-right-24" size={460} />
      <div className="container-x relative py-16 sm:py-24">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow animate-fade-up">{eyebrow}</p>}
          <h1 className="font-display mt-3 break-words text-[clamp(2.25rem,9vw,3.75rem)] font-semibold leading-[1.05] text-peacock-900 animate-fade-up" style={{ animationDelay: '.1s' }}>
            {title}
            {sanskrit && <span className="ml-3 align-middle text-2xl font-normal text-gold-600 sm:text-3xl">{sanskrit}</span>}
          </h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-lg text-ink-700 animate-fade-up sm:text-xl" style={{ animationDelay: '.2s' }}>
              {lead}
            </p>
          )}
        </div>
        <SerpentDivider className="mt-10" />
      </div>
    </section>
  );
}
