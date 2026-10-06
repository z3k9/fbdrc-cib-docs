# First Bank DRC CIB Guide: self-hosted React site

This is the Docusaurus (React) build of the CIB user guide, for hosting on First Bank DRC's own web servers. It builds to plain static HTML, CSS, and JS: no Node.js server, database, or internet access is needed at runtime. Search, icons, diagrams, and fonts are all bundled.

## How content flows

The Mintlify project in `../mintlify` is the single source of truth. Never edit `docs/`, `doc-assets/`, or `sidebars.js` here by hand: they are regenerated from `../mintlify` by `../tools/sync-docusaurus.mjs`, which runs automatically before every build.

Mintlify components (Card, Steps, Tabs, Frame, Note, and so on) are re-implemented in `src/components/mintlify/`, so the same MDX renders in both places.

## Build

Requires Node.js 20 or later, on a build machine (not the web server).

```bash
npm ci
SITE_URL=https://cib.firstbankdrc.com BASE_URL=/guide/ npm run build
```

- `SITE_URL`: the public origin of the site
- `BASE_URL`: the path it's served under. Use `/` if it has its own host name.

The finished site is in `build/`. Copy that folder's contents to the web server.

To preview locally: `npm run serve` (after a build) or `npm start` (live reload).

## Web server set-up

Every page is a folder with an `index.html`, so no rewrite rules are needed.

- **IIS:** copy `build/` into the site folder. Make sure `index.html` is a default document and that the `.json` and `.woff2` MIME types are allowed.
- **Nginx:** `root /var/www/cib-guide; index index.html; error_page 404 /404.html;`
- **Apache:** `DirectoryIndex index.html` and `ErrorDocument 404 /404.html`

Old URLs from the previous site redirect automatically (static redirect pages are generated at build time).

## Updating content

1. Edit the MDX in `../mintlify` (and `docs.json` for navigation).
2. Run `npm run build` here.
3. Redeploy `build/`.
