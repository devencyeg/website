import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Devency',
  tagline: 'Software Development and Technology Consulting',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.devency.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'devencyeg', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Devency',
      logo: {
        alt: 'Devency Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/about', label: 'About', position: 'left'},
        {to: '/services', label: 'Services', position: 'left'},
        {to: '/careers', label: 'Careers', position: 'left'},
        {
          href: 'https://github.com/devencyeg',
          position: 'right',
          className: "header-github-link",
          "aria-label": "GitHub"
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Links',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Services',
              to: '/services',
            },
            {
              label: 'Careers',
              to: '/careers',
            },
          ],
        },
        {
          title: 'Find us',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/devencyeg',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/devencyeg',
            },
            {
              label: 'X',
              href: 'https://x.com/devencyeg',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/devencyeg',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Devency L.L.C.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
