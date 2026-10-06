// @ts-check
// Self-hosted build of the First Bank DRC CIB Guide.
// Content comes from ../mintlify via tools/sync-docusaurus.mjs (npm run sync).
import {themes as prismThemes} from 'prism-react-renderer';
import nav from './src/generated-nav.json';

// Set these for the bank's web server, e.g. SITE_URL=https://cib.firstbankdrc.com BASE_URL=/docs/
const url = process.env.SITE_URL || 'https://docs.example.com';
const baseUrl = process.env.BASE_URL || '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'First Bank DRC | CIB Guide',
  tagline: 'Corporate Internet Banking user guide',
  favicon: 'favicon.png',
  url,
  baseUrl,
  trailingSlash: true, // every page is folder/index.html, so any static web server works without rewrite rules
  onBrokenLinks: 'throw',
  markdown: {mermaid: true, hooks: {onBrokenMarkdownLinks: 'throw'}},
  future: {v4: true, faster: true},
  i18n: {defaultLocale: 'en', locales: ['en']},
  themes: [
    '@docusaurus/theme-mermaid',
    [
      // Search index is built at compile time and runs fully offline
      '@easyops-cn/docusaurus-search-local',
      {hashed: true, indexBlog: false, docsRouteBasePath: '/', highlightSearchTermsOnTargetPage: true},
    ],
  ],
  plugins: [
    ['@docusaurus/plugin-client-redirects', {redirects: nav.redirects}],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {routeBasePath: '/', sidebarPath: './sidebars.js', breadcrumbs: true},
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {respectPrefersColorScheme: true},
      metadata: [{name: 'robots', content: 'noindex'}],
      navbar: {
        logo: {alt: 'First Bank DRC', src: 'logo/light.png', srcDark: 'logo/dark.png'},
        items: [
          ...nav.tabs.map((t) => ({type: 'docSidebar', sidebarId: t.id, label: t.label, position: 'left'})),
          {to: '/support', label: 'Support', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {title: 'Guides', items: nav.tabs.map((t) => ({label: t.label, to: '/' + (t.first === 'index' ? '' : t.first)}))},
          {title: 'Help', items: [{label: 'Support', to: '/support'}, {label: 'Platform overview', to: '/overview'}]},
        ],
        copyright: `© ${new Date().getFullYear()} First Bank DRC S.A.`,
      },
      docs: {sidebar: {hideable: true}},
      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ['bash']},
      mermaid: {theme: {light: 'neutral', dark: 'dark'}},
    }),
};

export default config;
