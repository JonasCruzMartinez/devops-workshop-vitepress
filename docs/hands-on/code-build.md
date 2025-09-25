# Code & Build Hands-On

## Step 1: Branch and Edit
Create a feature branch and edit index.md.

## Step 2: Add CI/CD Workflow
Create .github/workflows/ci-cd.yml with build job.

```yaml
name: CI/CD Pipeline
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with:
          version: 8
      - run: pnpm install
      - run: pnpm build
      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: .vitepress/dist
```
