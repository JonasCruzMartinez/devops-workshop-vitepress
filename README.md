# devops-workshop-vitepress

This repo builds a VitePress site for the DevOps Workshop on CI/CD with GitHub Actions.

## Quick Start

1. Fork this repo.
2. Clone your fork: `git clone <your-fork-url>`
3. Install dependencies: `pnpm install`
4. Run the dev server: `pnpm dev`
5. Build for production: `pnpm build`

## Branches

- `main`: Starter boilerplate for participants to fork.
- `progress`: Full implementation for facilitators.

## Deploy

The site deploys to GitHub Pages on pushes to `main`.

To deploy manually: `pnpm build && npx gh-pages -d .vitepress/dist`
