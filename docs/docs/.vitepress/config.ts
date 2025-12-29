import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DEV DOC',
  description: '我的第一个 VitePress 文档站',

  themeConfig: {
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '首页', link: '/' },
          { text: 'Hello', link: '/hello' }
        ]
      }
    ]
  }
})
