import type { Post } from '../lib/posts';

export default function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <ul className="not-prose grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p, i) => (
        <li key={p.slug} className={`reveal reveal-delay-${(i % 3) + 1}`}>
          <a href={p.url} className="card group block h-full">
            <p className="eyebrow">{p.category}</p>
            <h2 className="font-display mt-3 text-2xl font-semibold leading-snug text-peacock-800 transition-colors group-hover:text-peacock-600">{p.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm text-ink-700">{p.description}</p>
            <p className="mt-4 text-xs text-ink-500">
              {new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · {p.readingTime}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}
