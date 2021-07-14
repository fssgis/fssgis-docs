module.exports = {
  lang: 'en-US',
  title: 'FSSGIS',
  description: 'FSSGIS',

  themeConfig: {
    repo: 'vuejs/vitepress',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },

    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      // {
      //   text: 'Config Reference',
      //   link: '/config/basics',
      //   activeMatch: '^/config/'
      // },
      {
        text: 'Release Notes',
        link: 'https://github.com/fssgis'
      }
    ],

    sidebar: {
      // '/guide/': getGuideSidebar(),
      // '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    // {
    //   text: 'Introduction',
    //   children: [
    //     { text: 'What is VitePress?', link: '/' },
    //     { text: 'Getting Started', link: '/guide/getting-started' },
    //     { text: 'Configuration', link: '/guide/configuration' },
    //     { text: 'Asset Handling', link: '/guide/assets' },
    //     { text: 'Markdown Extensions', link: '/guide/markdown' },
    //     { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
    //     { text: 'Deploying', link: '/guide/deploy' }
    //   ]
    // },
    // {
    //   text: 'Advanced',
    //   children: [
    //     { text: 'Frontmatter', link: '/guide/frontmatter' },
    //     { text: 'Theming', link: '/guide/theming' },
    //     { text: 'API Reference', link: '/guide/api' },
    //     {
    //       text: 'Differences from Vuepress',
    //       link: '/guide/differences-from-vuepress'
    //     }
    //   ]
    // },
    {
      text: '@fssg/core',
      children: [
        { text: '基础工具集', link: '/guide/fssg.core/base-utils' },
      ]
    },
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}
