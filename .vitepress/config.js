import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
    defineConfig({
        title: 'DevOps Workshop',
        description: 'Interactive workshop on CI/CD with GitHub Actions and VitePress',
        base: '/devops-workshop-vitepress/',

        ignoreDeadLinks: true,

        head: [
            ['link', { rel: 'icon', href: '/assets/icon.png' }]
        ],

        themeConfig: {
            logo: './assets/logo.png',

            nav: [
                { text: 'Home', link: '/' },
                { text: 'Theory', items: [
                    { text: 'Code Phase', link: '/theory/code' },
                    { text: 'Build Phase', link: '/theory/build' },
                    { text: 'Test Phase', link: '/theory/test' },
                    { text: 'Release Phase', link: '/theory/release' },
                    { text: 'Deploy Phase', link: '/theory/deploy' },
                    { text: 'CI/CD Overview', link: '/theory/cicd' }
                ]},
                { text: 'Hands-On', items: [
                    { text: 'Code & Build', link: '/hands-on/code-build' },
                    { text: 'Test & Release', link: '/hands-on/test-release' },
                    { text: 'Deploy', link: '/hands-on/deploy' }
                ]},
                { text: 'Resources', link: '/troubleshooting' }
            ],

            sidebar: [
                { text: 'Introduction', link: '/index' },
                { text: 'Setup', link: '/setup' },
                { text: 'Agenda', link: '/agenda' },
                { text: 'Progress', link: '/progress' },
                {
                  text: 'Theory',
                  items: [
                    { text: 'Code Phase', link: '/theory/code' },
                    { text: 'Build Phase', link: '/theory/build' },
                    { text: 'Test Phase', link: '/theory/test' },
                    { text: 'Release Phase', link: '/theory/release' },
                    { text: 'Deploy Phase', link: '/theory/deploy' },
                    { text: 'CI/CD Overview', link: '/theory/cicd' }
                  ]
                },
                {
                  text: 'Hands-On',
                  items: [
                    { text: 'Code & Build', link: '/hands-on/code-build' },
                    { text: 'Test & Release', link: '/hands-on/test-release' },
                    { text: 'Deploy', link: '/hands-on/deploy' }
                  ]
                },
                {
                  text: 'Resources',
                  items: [
                    { text: 'Troubleshooting', link: '/troubleshooting' },
                    { text: 'Extensions', link: '/extensions' },
                    { text: 'Feedback', link: '/feedback' }
                  ]
                }
            ],

            socialLinks: [
                { icon: 'github', link: 'https://github.com/undead2146/devops-workshop-vitepress' }
            ],

            footer: {
                message: 'GeneralsHub Docs',
                copyright: '© 2025 GeneralsHub'
            }
        },

        // Mermaid configuration
        mermaid: {
            theme: 'default',
            themeVariables: {
                primaryColor: '#7c3aed',
                primaryTextColor: '#fff',
                primaryBorderColor: '#6b46c1',
                lineColor: '#5f5f5f',
                secondaryColor: '#2ed573',
                tertiaryColor: '#1e90ff'
            }
        },

        // Optional: Configure mermaid for dark mode
        mermaidPlugin: {
            class: 'mermaid my-class'
        }
    }),

    // Mermaid configuration
    {
        theme: 'default'
    }
)
