module.exports = {
  base: '/hjgbshjfbsdhjbfsekhjbfdkhsbfehb/',
  title: 'MinetopiaSDB Docs',
  theme: 'default-prefers-color-scheme',
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
    logo: '/logo.png',
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
              '/faq'
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
            title: 'Permissions',
            collapsable: false,
            children: [
              '/perms/player',
              '/perms/government',
              '/perms/staff'
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
              '/en/faq'
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
            title: 'Permissions',
            collapsable: false,
            children: [
              '/en/perms/player',
              '/en/perms/government',
              '/en/perms/staff'
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
