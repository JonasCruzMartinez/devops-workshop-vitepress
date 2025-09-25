# Extensions & Homework

Extend your pipeline/site post-workshop (1–3 hours). PR to original repo!

## Ideas
1. **Linting**: Add ESLint job. `pnpm add -D eslint`; YAML step: `pnpm lint`.
2. **Semantic Release**: Auto-tag. `pnpm add -D semantic-release`; Update release job.
3. **Notifications**: Slack on deploy. Add `uses: 007r/slack-notify@v1` with webhook secret.
4. **E2E Tests**: Playwright. `pnpm add -D playwright`; Test site nav in test job.
5. **Multi-Env**: Staging branch deploys to /staging/. Update YAML 'if' for branches.
6. **Metrics Badge**: Add to README: [![Pipeline Status](https://github.com/{{username}}/devops-workshop-vitepress/workflows/CI/CD/badge.svg)](https://github.com/{{username}}/devops-workshop-vitepress/actions) (links to Actions).

## Resources
- VitePress: [vitepress.dev](https://vitepress.dev/)
- Actions: [docs.github.com/en/actions](https://docs.github.com/en/actions)
- DevOps: "Accelerate" book; DORA metrics.

Experiment—share via [/resources/feedback](/resources/feedback)!
