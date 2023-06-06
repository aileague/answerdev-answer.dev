// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Answer',
  tagline: 'Build Q&A Community with Answer',
  url: 'https://answer.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'answerdev', // Usually your GitHub org/user name.
  projectName: 'Answer', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'Answer Logo',
          src: 'img/logo.svg',
        },
        style: 'primary',
        items: [
          {
            label: 'Docs',
            to: '/docs',

          },
          {
            label: 'Issue',
            to: 'https://github.com/answerdev/answer/issues',
          },
          {
            label: 'Roadmap',
            to: 'https://github.com/orgs/answerdev/projects/1',
          },
          {
            label: 'Community',
            to: 'https://meta.answer.dev',
          },
          {
            label: 'Blog',
            to: '/blog',
          },
          {
            src: 'img/discord.svg',
            className: 'header-discord-link',
            to: 'https://discord.gg/a6PZZbfnFx',
            position: 'right',
          },
          {
            href: 'https://github.com/answerdev/answer',
            src: 'img/github.svg',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Lexend:wght@400..700&display=swap',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    // Use custom blog plugin
    [
      "./plugins/blog-plugin",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
        blogTitle: 'Answer Blog',
        blogDescription: 'Learn everything about Answer and leverage your Q&A community.',
        blogSidebarCount: 0,
        postsPerPage: 4,
        showReadingTime: true,
        remarkPlugins: [math],
        rehypePlugins: [katex],
        // blogListComponent: "@site/src/components/BlogList",
        // blogTagsListComponent: "@site/src/components/BlogTagsList",
        // blogTagsPostsComponent: "@site/src/components/BlogTagsPosts",
      },
    ],
  ],
};

module.exports = config;
