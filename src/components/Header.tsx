import { useEffect, useState } from 'react';
import type { NavItem } from '../data/site';

type Props = { items: NavItem[]; current: string };

export default function Header({ items, current }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => (href === '/' ? current === '/' : current.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-sand-50/90 shadow-sm shadow-peacock-900/5 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-20">
        <a href="/" className="group flex shrink-0 items-center gap-3" aria-label="Shashwatamuda home">
          <img
            src="/icons/icon-192.png"
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 rounded-full ring-1 ring-gold-400/40 transition-transform duration-500 group-hover:rotate-12 sm:h-11 sm:w-11"
          />
          <span className="leading-tight">
            <span className="font-display block text-xl font-semibold tracking-wide text-peacock-800 sm:text-2xl xl:text-xl">
              Shashwatamuda
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-gold-600 sm:block">
              The Truth of Eternal Joy
            </span>
          </span>
        </a>

        <nav className="hidden shrink-0 items-center gap-0.5 xl:flex" aria-label="Primary">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              aria-current={isActive(it.href) ? 'page' : undefined}
              className={`relative rounded-full px-2.5 py-2 text-[12px] font-medium uppercase tracking-wider transition-colors hover:text-peacock-600 ${
                isActive(it.href) ? 'text-peacock-700' : 'text-ink-700'
              }`}
            >
              {it.label}
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-px bg-gold-500 transition-transform duration-300 ${
                  isActive(it.href) ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
          <a href="/programs" className="btn-gold ml-2 whitespace-nowrap px-5 py-2 text-xs">
            Join Us
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 items-center justify-center rounded-full text-peacock-800 hover:bg-peacock-50 xl:hidden"
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 top-0 h-0.5 w-6 rounded bg-current transition-all duration-300 ${open ? 'top-[7px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-6 rounded bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-6 rounded bg-current transition-all duration-300 ${open ? 'top-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 top-16 z-40 bg-sand-50/98 backdrop-blur transition-all duration-300 xl:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="container-x flex h-full flex-col gap-1 overflow-y-auto pb-10 pt-6" aria-label="Mobile">
          {items.map((it, i) => (
            <a
              key={it.href}
              href={it.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              className={`font-display rounded-xl px-4 py-3 text-2xl transition-all duration-300 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              } ${isActive(it.href) ? 'bg-peacock-50 text-peacock-700' : 'text-ink-900 hover:bg-peacock-50'}`}
            >
              {it.label}
            </a>
          ))}
          <a href="/programs" onClick={() => setOpen(false)} className="btn-gold mt-4 self-start">
            Join Us
          </a>
        </nav>
      </div>
    </header>
  );
}
