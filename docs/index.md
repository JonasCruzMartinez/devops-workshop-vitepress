# Welcome to Your DevOps Workshop Site

This interactive VitePress site guides you through DevOps principles (CALMS: Culture, Automation, Lean, Measurement, Sharing) with a focus on CI/CD using GitHub Actions. Fork the repo, edit pages (Code phase), and automate build/test/release/deploy. Your changes trigger the pipeline—see live updates on GitHub Pages (e.g., https://{{username}}.github.io/devops-workshop-vitepress/).

## DevOps Overview
DevOps accelerates delivery holistically: Culture fosters collaboration (e.g., PRs); Automation streamlines via GitHub Actions; Lean optimizes processes; Measurement tracks metrics (e.g., coverage); Sharing promotes knowledge (e.g., feedback). Core phases (automated with Actions):
- **Code**: Collaborate via Git/PRs (Culture/Sharing).
- **Build**: Generate artifacts (e.g., pnpm build; Automation).
- **Test**: Validate with Jest (Measurement).
- **Release**: Version snapshots (e.g., tagged ZIPs; Lean).
- **Deploy**: Publish to Pages (Automation).

Follow the sidebar: Theory explains, Hands-On implements.

## Quick Start
1. Fork `main` branch on GitHub.
2. Clone: `git clone https://github.com/{{username}}/devops-workshop-vitepress.git`.
3. Install: `pnpm install`.
4. Preview: `pnpm dev` (localhost:5173; edits auto-reload).
5. Enable Pages: Repo Settings > Pages > Source: `gh-pages` branch.
6. Proceed to /setup.md.

## Your Progress Tracker (Edit & Deploy!)
Update via PR—watch it live!

| Phase   | Status | Notes                          | Timestamp |
|---------|--------|--------------------------------|-----------|
| Code    | ⏳     | Forked; edited index.md        |           |
| Build   | ⏳     | YAML added; artifact verified  |           |
| Test    | ⏳     | Jest passes on content         |           |
| Release | ⏳     | Tagged v1.0.0; ZIP downloaded  |           |
| Deploy  | ⏳     | Site live; pipeline green      |           |

**Pro Tip**: Branch for changes (`git checkout -b feat-notes`). Search site for refs.

---

*Powered by your CI/CD pipeline—automation in action!*
