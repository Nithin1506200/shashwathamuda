import type { ReactNode } from 'react';
export default function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="not-prose my-8 rounded-2xl border border-peacock-200 bg-peacock-50/70 p-6">
      {title && <p className="eyebrow mb-2">{title}</p>}
      <div className="text-ink-700 [&>p]:m-0">{children}</div>
    </aside>
  );
}
