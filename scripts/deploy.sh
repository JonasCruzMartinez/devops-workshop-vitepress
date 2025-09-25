#!/bin/bash
pnpm build
npx gh-pages -d .vitepress/dist
echo "Deployed! Visit https://${GITHUB_REPOSITORY_OWNER}.github.io/devops-workshop-vitepress/"
