# First Bank DRC CIB Guide

One set of content, two outputs:

| Folder | What it is |
|---|---|
| `mintlify/` | **Source of truth.** The Mintlify docs site (MDX pages, `docs.json`, screenshots, logos). |
| `react-site/` | Docusaurus (React) build of the same content, for hosting on the bank's own web servers. |
| `tools/` | `sync-docusaurus.mjs` copies `mintlify/` into `react-site/`. Runs automatically on build. |
| `drafts/` | Unverified pages kept off the site until screenshots or bank confirmation are available. |

## Connecting Mintlify

In the Mintlify dashboard, connect this GitHub repo and set the docs path to `mintlify` (monorepo setting). Pushes to the default branch deploy automatically.

## Building the self-hosted site

See `react-site/README.md`. In short: `cd react-site && npm ci && npm run build`, then copy `react-site/build/` to the web server.
