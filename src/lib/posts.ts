import { readingTime } from './readingTime';
import { parse } from 'yaml';

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

// Read metadata without importing compiled MDX pages. Those pages import Layout,
// which imports this module; loading them here creates a circular dependency that
// can leave components undefined during development-server updates.
export function getPosts(): Post[] {
  const sources = import.meta.glob<string>('../pages/blog/*.mdx', { query: '?raw', import: 'default', eager: true });
  return Object.entries(sources)
    .filter(([file]) => !file.endsWith('/index.mdx'))
    .flatMap(([file, source]) => {
      const yaml = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1];
      if (!yaml) return [];
      const frontmatter = parse(yaml) as PostFrontmatter | null;
      if (frontmatter?.type !== 'post' || frontmatter.draft) return [];
      const slug = file.split('/').pop()!.replace(/\.mdx$/, '');
      return [{
        ...frontmatter,
        // frontmatter dates may arrive as Date objects or strings; normalise to YYYY-MM-DD
        date: new Date(frontmatter.date).toISOString().slice(0, 10),
        author: frontmatter.author ?? 'Shashwatamuda',
        tags: frontmatter.tags ?? [],
        slug,
        url: `/blog/${slug}`,
        readingTime: readingTime(source),
      }];
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(url: string): Post | undefined {
  const clean = url.replace(/\/$/, '');
  return getPosts().find((p) => p.url === clean);
}
