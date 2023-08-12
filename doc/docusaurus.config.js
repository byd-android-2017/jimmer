// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jimmer, revolutionary ORM for java & kotlin',
  tagline: 'Not only ORM, but also a complete integrated solution based on it(Include powerful cache management)',
  url: 'https://github.com',
  baseUrl: '/jimmer/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://raw.githubusercontent.com/babyfish-ct/jimmer/main/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'babyfish-ct', // Usually your GitHub org/user name.
  projectName: 'jimmer', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  themes:[
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/babyfish-ct/jimmer/tree/main/doc/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    navbar: {
      title: 'Jimmer documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'https://raw.githubusercontent.com/babyfish-ct/jimmer/main/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'overview/introduction',
          position: 'left',
          label: 'View more',
        },
        {
          type: 'localeDropdown',
          position: 'left',
        },
        {
          type: "search",
          position: 'right'
        },
        {
          href: 'https://github.com/babyfish-ct/jimmer',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/overview/introduction',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} jimmer, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['java', 'kotlin', 'groovy', 'sql', 'cpp', 'kotlin', 'graphql', 'json', 'csharp'],
    },
  })
};

module.exports = config;
