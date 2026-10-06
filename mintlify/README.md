# First Bank DRC CIB Guide (Mintlify)

User guide for First Bank DRC's Corporate Internet Banking platform, covering the Web Portal, Mobile App, and Host-to-Host channels.

## Structure

| Folder | Content |
|---|---|
| `/` | Home (`index.mdx`), platform overview, support |
| `web-portal/` | Sign-up, dashboard, accounts, payments, approvals, administration, settings |
| `mobile/` | Mobile app guide |
| `host-to-host/` | H2H integration guide for corporate IT teams |
| `images/` | Screenshots, grouped by channel and page |
| `logo/`, `favicon.png` | First Bank DRC branding |

Navigation, colours, and redirects from old URLs are all in `docs.json`.

## Preview locally

```bash
npm i -g mint
mint dev
```

Open http://localhost:3000.

## Checks before every push

```bash
mint validate       # build check
mint broken-links   # internal link check
```

Then run `git status` and make sure every new image under `images/` is staged.

## Publishing

Connect this repo to Mintlify with the GitHub app (dashboard.mintlify.com > Settings > GitHub app). Every push to the default branch deploys automatically.

## Writing style

- Active voice, second person ("you")
- Sentence case for headings
- Bold for UI labels: select **Confirm Transfer**
- No em dashes
- Only document what is visible in the product or confirmed by the bank. Unconfirmed drafts live outside this folder.
