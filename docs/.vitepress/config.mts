import {
  type DefaultTheme,
  defineConfig,
  type MarkdownOptions,
} from 'vitepress';

const pkg = require('../../package.json');
const logo =
  'https://github.com/lightzane/my-test-cli/blob/main/assets/logo.png?raw=true';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my-test-cli/',
  lang: 'en-US',
  title: 'My Test CLI',
  description: 'CLI tool for unit tests and coverage',
  head: [['link', { rel: 'icon', href: logo }]],
  themeConfig: {
    logo,
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/docs/': { base: '/docs/', items: sidebarDocs() },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lightzane/my-test-cli' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      copyright: 'Copyright © 2025 Lightzane',
    },
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'dracula-soft',
    },
    config: markdownConfig,
  },
  cleanUrls: true,
  lastUpdated: true,
});

function markdownConfig(
  md: Parameters<NonNullable<MarkdownOptions['config']>>[0]
) {
  const user = 'lightzane';
  const repo = 'my-test-cli';
  const name = pkg.name;
  const version = pkg.version;
  const tgzPath = `https://github.com/${user}/${repo}/raw/main/${name}-${version}.tgz`;

  const defaultLinkOpen = md.renderer.rules.link_open;

  // Search for any "TGZ_PATH" in links and replace with the actual path
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const hrefIndex = token.attrIndex('href');

    if (hrefIndex >= 0 && token.attrs?.[hrefIndex][1] === 'TGZ_PATH') {
      token.attrs[hrefIndex][1] = tgzPath;
    }

    if (defaultLinkOpen) {
      return defaultLinkOpen(tokens, idx, options, env, self);
    }

    return self.renderToken(tokens, idx, options);
  };

  // Replace all TGZ_FULLNAME and TGZ_NAME with appropriate text in all markdown content
  md.core.ruler.push('replace_tgz_fullname', (state) => {
    state.tokens.forEach((token) => {
      // inline
      if (token.type === 'inline' && token.children) {
        token.children.forEach((child) => {
          if (child.content && typeof child.content === 'string') {
            child.content = child.content.replaceAll(
              'TGZ_FULLNAME',
              `${name}-${version}.tgz`
            );
            child.content = child.content.replaceAll('TGZ_NAME', name);
          }
        });
      }

      // string content
      else if (token.content && typeof token.content === 'string') {
        token.content = token.content.replaceAll(
          'TGZ_FULLNAME',
          `${name}-${version}.tgz`
        );
        token.content = token.content.replaceAll('TGZ_NAME', name);
      }
    });
  });
}

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
    { text: 'Docs', link: '/docs/introduction', activeMatch: '/docs/' },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/lightzane/my-test-cli/blob/main/CHANGELOG.md',
        },
      ],
    },
  ];
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'What is My Test CLI?', link: 'introduction' },
        { text: 'Getting Started', link: 'getting-started' },
      ],
    },
  ];
}
