import Mandala from './Mandala';
import SerpentDivider from './SerpentDivider';
import { site } from '../data/site';

export default function Hero() {
  return (
    <section className="not-prose bg-mandala relative overflow-hidden">
      <Mandala className="pointer-events-none absolute -left-48 -top-32 opacity-60 sm:-left-24" size={420} />
      <div className="container-x relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:py-28">
        <div className="min-w-0">
          <p className="eyebrow animate-fade-up">Ancient Wisdom · Contemporary Well-being · Eternal Joy</p>
          <h1 className="font-display mt-4 whitespace-nowrap text-[clamp(1.75rem,8.8vw,4.25rem)] font-semibold lg:text-[clamp(2.5rem,4.7vw,4.25rem)] leading-[1] tracking-wide text-peacock-900 animate-fade-up" style={{ animationDelay: '.1s' }}>
            {site.name.toUpperCase()}
          </h1>
          <p className="font-display mt-3 text-2xl italic text-gold-600 animate-fade-up sm:text-3xl" style={{ animationDelay: '.2s' }}>
            {site.tagline}
          </p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-peacock-600 animate-fade-up" style={{ animationDelay: '.3s' }}>
            {site.pillarsLine}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700 animate-fade-up" style={{ animationDelay: '.4s' }}>
            {site.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '.5s' }}>
            <a href="/about" className="btn-primary">Explore Shashwatamuda</a>
            <a href="/programs" className="btn-gold">Our Programs</a>
            <a href="/community" className="btn-outline">Join Our Community</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-feather-300/30 via-plume-300/20 to-gold-300/30 blur-3xl" />
          <img
            src="/logo.jpg"
            alt="Shashwatamuda logo — a peacock feather mandala around an endless knot"
            width={800}
            height={800}
            fetchPriority="high"
            className="animate-float w-full rounded-full shadow-2xl shadow-peacock-600/20 ring-1 ring-gold-300/60"
          />
        </div>
      </div>
      <SerpentDivider className="justify-center pb-10" />
    </section>
  );
}
