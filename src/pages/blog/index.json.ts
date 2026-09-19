import type { APIRoute } from 'astro';
import { getPosts } from '../../lib/posts';

/** Static JSON feed of blog metadata, fetched lazily by the home page. */
export const GET: APIRoute = () =>
  new Response(JSON.stringify(getPosts().map(({ slug, title, description, date, category, readingTime }) => ({ slug, title, description, date, category, readingTime }))), {
    headers: { 'Content-Type': 'application/json' },
  });
