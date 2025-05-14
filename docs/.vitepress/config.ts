import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ca-ES',
  title: 'UF2. Representació d\'algoritmes',
  description: 'Unitat Formativa 02 - Representació d\'algoritmes',
  base: '/vitepress-template/',
  outDir: './dist',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
  ],
  themeConfig: {
    siteTitle: 'Representació d\'algoritmes',
    logo: '/img/logo.png',
    nav: [
      { text: '🏠 Inici', link: '/' },
      { text: '📋 Objectius', link: '/objectius' },
      { text: '📚 Continguts', items: [
        { text: '1. Introducció', link: '/1-introduccio' },
        { text: '2. Tipus de representació d\'algoritmes', link: '/2-representacio' },
        { text: '3. Instruccions bàsiques', link: '/3-instruccions' },
        { text: '4. Estructures de control', link: '/4-estructures' },
        { text: 'Exemples', link: '/5-exemples' },
        { text: 'Exercicis', link: '/6-enunciats' },
      ]}
    ],
    sidebar: [
      {
        text: '📚 Continguts',
        items: [
          { text: '📋 Objectius', link: '/objectius' },
          { text: '📚 1. Introducció', link: '/1-introduccio' },
          { text: '🔄 2. Tipus de representació d\'algoritmes', link: '/2-representacio' },
          { text: '⚡ 3. Instruccions bàsiques', link: '/3-instruccions' },
          { text: '📊 4. Estructures de control', link: '/4-estructures' },
          { text: '💡 Exemples', link: '/5-exemples' },
          { text: '✏️ Exercicis', link: '/6-enunciats' },
          { text: '<img src="/vitepress-template/img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
          { text: '<img src="/vitepress-template/img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: '' }
    ],
    footer: {
      message: "CEEDCV - Centre Específic d'Educació a Distància de la Comunitat Valenciana",
      copyright: 'Copyright © 2024-2025'
    },
    outline: {
      label: 'En aquesta pàgina'
    },
    docFooter: {
      prev: 'Anterior',
      next: 'Següent'
    },  
    
  },
})

