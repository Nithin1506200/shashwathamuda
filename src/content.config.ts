import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * FAQs live as one MDX file per question in src/content/faq/.
 *
 *   ---
 *   question: "Do I need prior experience?"
 *   topic: Yoga                # grouping used on the /faq page
 *   pages: ["/yoga", "/programs"]   # or ["all"] to show on every page
 *   order: 10                  # lower shows first
 *   ---
 *   The answer, written in Markdown/MDX.
 */
const faq = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    topic: z.string().default('General'),
    pages: z.array(z.string()).default(['all']),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { faq };
