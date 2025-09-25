# Welcome to Your DevOps Workshop Site

This interactive VitePress site guides you through DevOps principles (CALMS: Culture, Automation, Lean, Measurement, Sharing) with a focus on CI/CD using GitHub Actions. Fork the repo, edit pages (Code phase), and automate build/test/release/deploy. Your changes trigger the pipeline—see live updates on GitHub Pages (e.g., https://{{username}}.github.io/devops-workshop-vitepress/).

## DevOps Overview
DevOps accelerates delivery holistically: Culture fosters collaboration (e.g., PRs); Automation streamlines via GitHub Actions; Lean optimizes processes; Measurement tracks metrics (e.g., coverage); Sharing promotes knowledge (e.g., feedback). Core phases (automated with Actions):
- **Code**: Collaborate via Git/PRs (Culture/Sharing). Why? Ensures team reviews before changes go live.
- **Build**: Generate artifacts (e.g., pnpm build; Automation). What’s an artifact? Compiled, production-ready files (like static HTML/JS from Markdown source)—why build? Source is editable but slow; artifacts are optimized for speed/security across machines.
- **Test**: Validate with Jest (Measurement). Why? Checks artifact quality before release/deploy.
- **Release**: Version snapshots (e.g., tagged ZIPs; Lean). Why tag? Builds create artifacts every time, but tags create versioned copies (e.g., v1.0.0 ZIP) for milestones, audits, or sharing—avoids cluttering with every minor change.
- **Deploy**: Publish to Pages (Automation). Why? Makes artifact live for users; rollbacks use prior versions.

Follow the sidebar: Theory explains (with why/how), Hands-On implements (step-by-step with recaps).

## Quick Start
1. Fork `main` branch on GitHub.
2. Clone: `git clone https://github.com/{{username}}/devops-workshop-vitepress.git`.
3. Install: `pnpm install`.
4. Preview: `pnpm dev` (localhost:5173; edits auto-reload).
5. Enable Pages: Repo Settings > Pages > Source: `gh-pages` branch.
6. Proceed to /setup.md.

## Your Progress Tracker (Edit & Deploy!)
Update via PR—watch it live! Reflection: Track phases to see how Code leads to Build (artifact creation), then Test/Release (validation/versioning), and Deploy (live site).

| Phase   | Status | Notes                          | Timestamp |
|---------|--------|--------------------------------|-----------|
| Code    | ⏳     | Forked; edited index.md        |           |
| Build   | ⏳     | YAML added; artifact verified (compiled files ready)  |           |
| Test    | ⏳     | Jest passes on content         |           |
| Release | ⏳     | Tagged v1.0.0; ZIP downloaded (versioned artifact)  |           |
| Deploy  | ⏳     | Site live; pipeline green      |           |

**Pro Tip**: Branch for changes (`git checkout -b feat-notes`). Search site for refs.

---

*Powered by your CI/CD pipeline—automation in action!*
