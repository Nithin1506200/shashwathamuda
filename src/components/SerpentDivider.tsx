/** Snake-inspired serpentine divider with a slow "slither" animation. */
export default function SerpentDivider({ className = '', tone = 'gold' }: { className?: string; tone?: 'gold' | 'peacock' }) {
  const stroke = tone === 'gold' ? 'var(--color-gold-500)' : 'var(--color-peacock-400)';
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 sm:w-20" style={{ background: stroke, opacity: 0.5 }} />
      <svg width="140" height="18" viewBox="0 0 140 18" fill="none" className="overflow-visible">
        <path
          d="M2 9 C 14 -2, 26 20, 38 9 S 62 -2, 74 9 S 98 20, 110 9 S 134 -2, 138 9"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="6 4"
          className="animate-slither"
        />
        <circle cx="138" cy="9" r="2.4" fill={stroke} />
        <circle cx="2" cy="9" r="1.6" fill={stroke} opacity=".6" />
      </svg>
      <span className="h-px w-10 sm:w-20" style={{ background: stroke, opacity: 0.5 }} />
    </div>
  );
}
