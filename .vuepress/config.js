module.exports = {
  base: '/hjgbshjfbsdhjbfsekhjbfdkhsbfehb/',
  title: 'MinetopiaSDB Docs',
  theme: 'default-prefers-color-scheme',
  head: [
    ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '194x194', href: '/favicon-194x194.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#5a6b89'}],
    ['link', {rel: 'manifest', href: '/site.webmanifest'}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['meta', {name: 'msapplication-TileColor', content: '#5a6b89'}],
    ['meta', { name: 'msapplication-TileImage', content: '/mstile-150x150.png'}],
    ['meta', {name: 'theme-color', content: '#5a6b89'}]
  ],
  locales: {
    '/': {
      lang: 'nl-NL',
      title: 'MinetopiaSDB',
      description: 'Het Minecraft systeem, opnieuw uitgevonden'
    },
    '/en/': {
      lang: 'en-US',
      title: 'MinetopiaSDB',
      description: 'The Minecraft system, reinvented.',
    }
  },
  themeConfig: {
    logo: '/favicon-32x32.png',
    repo: 'minetopiasdb/docs',
    repoLabel: 'Contribute',
    editLinks: true,
    nextLinks: true,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'Nederlands',
        editLinkText: 'Bewerk deze pagina op GitHub',
        lastUpdated: 'Laatst geüpdatet',
        serviceWorker: {
          updatePopup: {
            message: "Nieuwe content beschikbaar.",
            buttonText: "Ververs"
          }
        },
        sidebar: [
          {
            title: 'SDB',
            collapsable: false,
            children: [
              '/',
              '/setup',
              '/bungeecord',
              '/faq',
              '/permissions'
            ]
          },
          {
            title: 'Commands',
            collapsable: false,
            children: [
              '/commands/player',
              '/commands/admin',
              '/commands/banking'
            ]
          },
          {
            title: 'Placeholders',
            collapsable: false,
            children: [
              '/placeholders/integrated',
              '/placeholders/placeholderapi'
            ]
          },
          {
            title: 'Tutorials',
            collapsable: false,
            children: [
              '/tutorials/detectiongate',
              '/tutorials/levelchecknpc'
            ]
          },
        ]
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: [
          {
            title: 'SDB',
            collapsable: false,
            children: [
              '/en/',
              '/en/setup',
              '/en/bungeecord',
              '/en/faq',
              '/en/permissions'
            ]
          },
          {
            title: 'Commands',
            collapsable: false,
            children: [
              '/en/commands/player',
              '/en/commands/admin',
              '/en/commands/banking'
            ]
          },
          {
            title: 'Placeholders',
            collapsable: false,
            children: [
              '/en/placeholders/integrated',
              '/en/placeholders/placeholderapi'
            ]
          },
          {
            title: 'Tutorials',
            collapsable: false,
            children: [
              '/en/tutorials/detectiongate',
              '/en/tutorials/levelchecknpc'
            ]
          },
        ]
      }
    }
  },
  postcss: {
      plugins: [
        require('css-prefers-color-scheme/postcss'), 
        require('autoprefixer')
      ]
    }
  }
