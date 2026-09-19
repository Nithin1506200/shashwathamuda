import { readingTime } from './readingTime';

export type PostFrontmatter = {
  type?: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author?: string;
  tags?: string[];
  draft?: boolean;
};

export type Post = PostFrontmatter & { slug: string; url: string; readingTime: string };

// Blog posts are plain MDX pages in src/pages/blog/. The compiled modules give us
// frontmatter; the `?raw` glob gives the source so reading time can be estimated.
//
// The globs are evaluated inside the function (not at module top level) because the
// layout imports this file and every post imports the layout — a cycle that is only
// safe once all modules have finished initialising.
export function getPosts(): Post[] {
  const modules = import.meta.glob<{ frontmatter: PostFrontmatter; url: string }>('../pages/blog/*.mdx', { eager: true });
  const sources = import.meta.glob<string>('../pages/blog/*.mdx', { query: '?raw', import: 'default', eager: true });
  return Object.entries(modules)
    .filter(([file, mod]) => !file.endsWith('/index.mdx') && mod.frontmatter?.type === 'post')
    .map(([file, mod]) => {
      const slug = file.split('/').pop()!.replace(/\.mdx$/, '');
      return {
        ...mod.frontmatter,
        // frontmatter dates may arrive as Date objects or strings; normalise to YYYY-MM-DD
        date: new Date(mod.frontmatter.date).toISOString().slice(0, 10),
        author: mod.frontmatter.author ?? 'Shashwatamuda',
        tags: mod.frontmatter.tags ?? [],
        slug,
        url: `/blog/${slug}`,
        readingTime: readingTime(sources[file]),
      };
    })
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(url: string): Post | undefined {
  const clean = url.replace(/\/$/, '');
  return getPosts().find((p) => p.url === clean);
}
