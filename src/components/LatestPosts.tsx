import { useEffect, useState } from 'react';

type PostMeta = { slug: string; title: string; description: string; date: string; category: string; readingTime: string };

/**
 * Blog metadata is *not* bundled with the page. The list is fetched from the
 * statically generated `/blog/index.json` only when this island becomes visible
 * (client:visible), keeping the initial page load small.
 */
export default function LatestPosts({ limit = 3 }: { limit?: number }) {
  const [posts, setPosts] = useState<PostMeta[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/blog/index.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: PostMeta[]) => setPosts(data.slice(0, limit)))
      .catch(() => setError(true));
  }, [limit]);

  if (error)
    return (
      <p className="text-ink-500">
        Visit the <a className="underline" href="/blog">blog</a> for the latest articles.
      </p>
    );

  if (!posts) {
    return (
      <div className="grid gap-6 sm:grid-cols-3" aria-busy="true" aria-label="Loading articles">
        {Array.from({ length: limit }).map((_, i) => (
          <div key={i} className="card animate-pulse">
            <div className="h-3 w-20 rounded bg-sand-200" />
            <div className="mt-4 h-5 w-3/4 rounded bg-sand-200" />
            <div className="mt-3 h-4 w-full rounded bg-sand-200" />
            <div className="mt-2 h-4 w-5/6 rounded bg-sand-200" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {posts.map((p, i) => (
        <a key={p.slug} href={`/blog/${p.slug}`} className="card group animate-fade-up" style={{ animationDelay: `${i * 90}ms` }}>
          <p className="eyebrow">{p.category}</p>
          <h3 className="mt-3 text-xl font-semibold text-peacock-800 transition-colors group-hover:text-peacock-600">{p.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm text-ink-700">{p.description}</p>
          <p className="mt-4 text-xs text-ink-500">
            {new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · {p.readingTime}
          </p>
        </a>
      ))}
    </div>
  );
}
