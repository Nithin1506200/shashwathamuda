// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Deployment target is configured through environment variables so the same code
 * works for a custom domain and for a GitHub Pages project site:
 *
 *   SITE_URL   e.g. https://shashwatamuda.org  or  https://<owner>.github.io
 *   BASE_PATH  e.g. /                          or  /<repo-name>
 *
 * The GitHub Actions workflow in .github/workflows/deploy.yml sets both.
 */
const SITE = process.env.SITE_URL || 'https://shashwatamuda.org';
const BASE = (process.env.BASE_PATH || '/').replace(/\/+$/, '') || '/';

/**
 * When the site lives under a sub-path, every root-relative URL in the built
 * output ("/about", "/logo.jpg", "/icons/…") is prefixed with the base path.
 * This keeps the source code free of base-path plumbing.
 */
function prefixBase() {
  return {
    name: 'prefix-base',
    hooks: {
      'astro:build:done': ({ dir }) => {
        if (BASE === '/') return;
        const root = dir.pathname;
        const walk = (d) => {
          for (const name of readdirSync(d)) {
            const p = join(d, name);
            if (statSync(p).isDirectory()) walk(p);
            else if (/\.(html|webmanifest)$/.test(name)) {
              let s = readFileSync(p, 'utf8');
              // skip protocol-relative URLs and URLs Astro already prefixed (its own assets)
              const already = BASE.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?:/|$|")';
              s = name.endsWith('.webmanifest')
                ? s.replace(new RegExp(`"/(?!/|${already})`, 'g'), `"${BASE}/`)
                : s.replace(new RegExp(`\\b(href|src|content|action|poster)="/(?!/|${already})`, 'g'), `$1="${BASE}/`);
              writeFileSync(p, s);
            }
          }
        };
        walk(root);
        console.log(`[prefix-base] rewrote root-relative URLs with base "${BASE}"`);
      },
    },
  };
}

// Static site: every page is pre-rendered to plain HTML at build time.
export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  trailingSlash: 'never',
  // "file" emits /about.html instead of /about/index.html, which GitHub Pages
  // serves at /about without a trailing-slash redirect.
  build: { format: 'file', inlineStylesheets: 'auto' },
  integrations: [react(), mdx(), sitemap(), prefixBase()],
  vite: { plugins: [tailwindcss()] },
});
