import type { APIRoute } from 'astro';
import { getPosts } from '../lib/posts';
import { site } from '../data/site';

const esc = (s: string) => s.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]!);

export const GET: APIRoute = ({ site: base }) => {
  const origin = (base?.toString().replace(/\/$/, '') ?? site.url) + import.meta.env.BASE_URL.replace(/\/$/, '');
  const items = getPosts()
    .map(
      (p) => `<item><title>${esc(p.title)}</title><link>${origin}${p.url}</link><guid>${origin}${p.url}</guid><pubDate>${new Date(p.date).toUTCString()}</pubDate><description>${esc(p.description)}</description><category>${esc(p.category)}</category></item>`,
    )
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(site.name)} Blog</title><link>${origin}/blog</link><description>${esc(site.description)}</description><language>en-in</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
