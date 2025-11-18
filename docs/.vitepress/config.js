import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'DevOps Workshop',
    description: 'Interactive CI/CD Workshop with GitHub Actions',
    base: '/devops-workshop-vitepress/',

    ignoreDeadLinks: true,

    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'theme-color', content: '#2563eb' }]
    ],

    themeConfig: {
      logo: '/logo.png',

      nav: [
        { text: 'Home', link: '/' },
        { text: 'Setup', link: '/setup' },
        {
          text: 'DevOps Theory',
          items: [
            { text: 'CI/CD Overview', link: '/theory/cicd' },
            { text: 'Code Phase Theory', link: '/theory/code' },
            { text: 'Build Phase Theory', link: '/theory/build' },
            { text: 'Test Phase Theory', link: '/theory/test' },
            { text: 'Release Phase Theory', link: '/theory/release' },
            { text: 'Deploy Phase Theory', link: '/theory/deploy' }
          ]
        },
        {
          text: 'Workshop Phases',
          items: [
            { text: '1. Code Phase', link: '/phases/01-code' },
            { text: '2. Build Phase', link: '/phases/02-build' },
            { text: '3. Test Phase', link: '/phases/03-test' },
            { text: '4. Release Phase', link: '/phases/04-release' },
            { text: '5. Deploy Phase', link: '/phases/05-deploy' }
          ]
        },
        {
          text: 'Resources',
          items: [
            { text: 'Troubleshooting', link: '/resources/troubleshooting' },
            { text: 'Extensions', link: '/resources/extensions' },
            { text: 'Feedback', link: '/resources/feedback' }
          ]
        }
      ],

      sidebar: {
        '/': [
          {
            text: 'Getting Started',
            items: [
              { text: 'Welcome', link: '/' },
              { text: 'Setup & Prerequisites', link: '/setup' },
              { text: 'Workshop Schedule', link: '/schedule' },
              { text: 'Your Progress', link: '/progress' }
            ]
          },
          {
            text: 'DevOps Theory',
            items: [
              { text: 'CI/CD Overview', link: '/theory/cicd' },
              { text: 'Code Phase Theory', link: '/theory/code' },
              { text: 'Build Phase Theory', link: '/theory/build' },
              { text: 'Test Phase Theory', link: '/theory/test' },
              { text: 'Release Phase Theory', link: '/theory/release' },
              { text: 'Deploy Phase Theory', link: '/theory/deploy' }
            ]
          },
          {
            text: 'Workshop Phases',
            items: [
              { text: '1. Code Phase', link: '/phases/01-code' },
              { text: '2. Build Phase', link: '/phases/02-build' },
              { text: '3. Test Phase', link: '/phases/03-test' },
              { text: '4. Release Phase', link: '/phases/04-release' },
              { text: '5. Deploy Phase', link: '/phases/05-deploy' }
            ]
          },
          {
            text: 'Resources',
            items: [
              { text: 'Troubleshooting', link: '/resources/troubleshooting' },
              { text: 'Extensions', link: '/resources/extensions' },
              { text: 'Feedback', link: '/resources/feedback' }
            ]
          }
        ]
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/undead2146/devops-workshop-vitepress' }
      ],

      footer: {
        message: 'DevOps Workshop - Learn by Doing',
        copyright: '© 2025 GeneralsHub'
      },

      search: {
        provider: 'local'
      }
    },

    markdown: {
      lineNumbers: true,
      container: {
        tipLabel: '💡 Tip',
        warningLabel: '⚠️ Warning',
        dangerLabel: '🚨 Important',
        infoLabel: 'ℹ️ Info',
        detailsLabel: 'Details'
      }
    }
  }),

  // Mermaid configuration
  {
    theme: 'default'
  }
)
