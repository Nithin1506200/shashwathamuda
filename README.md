# Shashwatamuda — website

Static site for **Shashwatamuda — The Truth of Eternal Joy** (Yoga · Music · Wisdom · Well-being).

Built with **MDX + React + Tailwind CSS**, compiled to plain static HTML by [Astro](https://astro.build).
The only `.astro` file is `src/layouts/Layout.astro`, the document shell (head tags, header/footer, FAQ block).
Everything else is MDX content or React components.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/
```

## Where things live

| What | Where |
| --- | --- |
| Pages | `src/pages/*.mdx` (frontmatter `layout: ../layouts/Layout.astro`) |
| Blog posts | `src/pages/blog/*.mdx` (`type: post` + `title, description, date, category, author, tags`) |
| FAQs | `src/content/faq/*.mdx` — one question per file |
| React components | `src/components/*.tsx` |
| Site data (nav, programs, events, team) | `src/data/*.ts` |
| Theme (colours, fonts, animations) | `src/styles/global.css` (`@theme`) |
| Crawler files | `public/site.webmanifest`, `public/humans.txt`; `robots.txt`, `sitemap-index.xml` and `rss.xml` are generated |

### Adding a FAQ

Create `src/content/faq/my-question.mdx`:

```mdx
---
question: "Do I need prior experience to join a class?"
topic: Yoga               # grouping on the /faq page
pages: ["/programs"]   # or ["all"] to show on every page
order: 10                 # lower shows first
---
No. Most programs welcome complete beginners.
```

Page-specific FAQs appear first, then the `all` FAQs. Every page shows its FAQ block automatically.

### Adding a blog post

Create `src/pages/blog/my-post.mdx` with `layout: ../../layouts/Layout.astro` and `type: post`.
It gets its own static page, appears in `/blog`, `/blog/index.json` (fetched lazily by the home page) and `/rss.xml`.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds the site and publishes `dist/` on every push to `main`.

1. Push the repository to GitHub.
2. In the repo go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Set **Settings → Pages → Custom domain** to `shashwatamuda.com`, then push to `main` (or run the workflow manually from the **Actions** tab).

The build reads two environment variables, which the workflow fills in automatically:

| Variable | Project site (default) | Custom domain |
| --- | --- | --- |
| `SITE_URL` | `https://shashwatamuda.com` | Set a repository variable to override |
| `BASE_PATH` | `/` | Set a repository variable to override |

When `BASE_PATH` is not `/`, the build rewrites every root-relative link, image, manifest entry, sitemap and canonical URL to include it, so the source stays free of base-path plumbing.

**Custom domain:** `public/CNAME` contains `shashwatamuda.com` and is copied to the build output. Because this site deploys through GitHub Actions, GitHub Pages ignores that file for domain configuration; enter `shashwatamuda.com` under **Settings → Pages → Custom domain**. At your DNS provider, point the apex (`@`) to GitHub Pages with the four `A` records, and optionally point `www` to `nithin1506200.github.io` with a `CNAME` record.

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME (optional) | `www` | `nithin1506200.github.io` |

To test a sub-path build locally: `BASE_PATH=/shashwathamuda SITE_URL=https://nithin1506200.github.io npm run build`.

### Before going live

- Set the real domain via the `SITE_URL` variable (or the default in `astro.config.mjs`). `robots.txt` and the sitemap follow it.
- Update contact details and social links in `src/data/site.ts`.
- Replace gallery placeholders in `src/components/Gallery.tsx` with real photographs.
- The contact form opens the visitor's mail client; wire it to a form service (e.g. Formspree) if you prefer server-side submissions.
