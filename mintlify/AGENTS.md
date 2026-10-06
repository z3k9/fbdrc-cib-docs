# Documentation project instructions

- Mintlify site for First Bank DRC's Corporate Internet Banking (CIB) platform. Pages are MDX with YAML frontmatter; config is `docs.json`.
- Three tabs: Web Portal (`web-portal/`), Mobile App (`mobile/`), Host-to-Host (`host-to-host/`).
- The same MDX also builds the self-hosted React (Docusaurus) site in `../react-site` via `../tools/sync-docusaurus.mjs`. Only use components that script's shims support: Card, CardGroup, Columns, Steps, Step, Tabs, Tab, Accordion, AccordionGroup, Frame, Note, Info, Tip, Warning, Check.
- Images: absolute paths under `/images/<channel>/<page>/`. Mobile screenshots use `style={{ maxWidth: "300px" }}`.

## Terminology

- "First Bank DRC" (not FBN, FB DRC) in customer-facing text
- Officer roles: Initiator, Authorizer, Initiator-Authorizer; codes `ROLE_INITIATOR`, `ROLE_AUTHORIZER`, `ROLE_INITIATOR_AUTHORIZER`
- Queues: Transaction Queue (payments), Activities Queue (Web Portal) / Activity Queue (mobile app label)

## Style

- Active voice, second person, one idea per sentence
- Sentence case headings
- Bold for UI elements; code format for file names, XML elements, and codes
- No em dashes
- Never document behaviour that isn't visible in screenshots or confirmed by the bank
