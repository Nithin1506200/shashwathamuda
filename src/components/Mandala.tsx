/** Decorative slowly rotating ring of peacock eyes. Ornamental only. */
export default function Mandala({ className = '', size = 520 }: { className?: string; size?: number }) {
  const eyes = Array.from({ length: 16 }, (_, i) => (i * 360) / 16);
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={`animate-spin-slow ${className}`} aria-hidden="true" fill="none">
      <circle cx="100" cy="100" r="62" stroke="var(--color-gold-400)" strokeOpacity=".35" strokeWidth=".6" strokeDasharray="2 3" />
      <circle cx="100" cy="100" r="46" stroke="var(--color-peacock-300)" strokeOpacity=".35" strokeWidth=".6" />
      {eyes.map((deg) => (
        <g key={deg} transform={`rotate(${deg} 100 100) translate(100 22)`}>
          <ellipse rx="6" ry="9" fill="var(--color-feather-500)" fillOpacity=".22" />
          <ellipse rx="3.6" ry="5.4" cy="1" fill="var(--color-gold-400)" fillOpacity=".35" />
          <ellipse rx="2" ry="3" cy="1.6" fill="var(--color-plume-500)" fillOpacity=".55" />
          <ellipse rx="1" ry="1.4" cy="2" fill="var(--color-knot-600)" fillOpacity=".8" />
        </g>
      ))}
    </svg>
  );
}
