// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const footer = require('./footer.config');
const navbar = require('./navbar.config');
const blog = require('./blog.config');
const i18n = require('./locale.config');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Voting IO',
  favicon: 'img/favicon.ico',
  url: 'https://voting-io.github.io/',
  baseUrl: '/docs',
  organizationName: 'voting-io',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  i18n,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: { routeBasePath: '/', sidebarPath: require.resolve('./sidebars.js') },
        theme: { customCss: require.resolve('./src/css/custom.css') },
        blog,
      }),
    ],
    [
      'redocusaurus',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        specs: [{ spec: 'openapi.yaml', route: '/api/' }],
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
  themeConfig:
    ({
      colorMode: { disableSwitch: false, respectPrefersColorScheme: true },
      image: 'img/logo.png',
      navbar,
      footer,
      prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
    }),
};

module.exports = config;
