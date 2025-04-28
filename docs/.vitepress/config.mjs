import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PIP's HandBook",
  description: "基本知识，经验传授，或者一些其他你想要的",
  lang: "zh-CN",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '/HandBook/',
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  rewrites: {
    'guide/T-962/T-962_instruction.md': 'T-962.md',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '硬件组ERP管理手册', link: '/guide/erp/intro' }
    ],

    sidebar: {
      "/guide/erp/": {
        text: "erp",
        items: [
          {text: "erp介绍", link: "/guide/erp/intro"},
          {text: "开始使用", link: "/guide/erp/start"},
          {text: "出入库管理", link: "/guide/erp/add_out_stock"}
        ]
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PIPClub/handbook' }
    ],
    footer: {
      copyright: 'Copyright © 2023-present <a href="https://github.com/PIPClub">PIPClub</a>'
    },
    search: {
      provider: 'local'
    }
  }
})
