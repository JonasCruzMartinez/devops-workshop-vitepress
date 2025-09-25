# Setup Instructions

Verify prerequisites, then fork/clone. Time: 10 min. Stuck? See /troubleshooting.md.

## Prerequisites
- GitHub account (free; 2FA recommended).
- Node.js v18+ (`node -v` → ≥18.0.0; download from nodejs.org).
- pnpm (`npm install -g pnpm`; `pnpm -v` → ≥8.0.0; faster than npm).
- Git (`git --version`; configure: `git config --global user.name "Your Name" && git config --global user.email "your@email.com"`).
- VS Code (extensions: GitHub Pull Requests and Review, GitHub Actions, Markdown All in One).
- Browser (Chrome/Firefox for Pages preview).

## Fork, Clone, Install
1. Fork repo (main branch) → Name: `devops-workshop-vitepress`.
2. Clone: `git clone https://github.com/{{username}}/devops-workshop-vitepress.git` (Expected: Clones ~5MB).
3. `cd devops-workshop-vitepress`.
4. `pnpm install` (Expected: Installs vitepress/jest/mermaid; creates node_modules/, pnpm-lock.yaml).
5. `pnpm dev` (Expected: "VitePress dev server running at http://localhost:5173"; open—see homepage).
6. GitHub Pages: Settings > Pages > Source: Deploy from `gh-pages` > Save (Actions will create branch).

## Verification
- Site loads? Edit index.md (add note) → Save → Auto-reload shows change.
- Issues? `pnpm build` (Expected: Generates .vitepress/dist/ with HTML/JS/CSS).
- Next: /agenda.md for schedule; /progress.md to track.

**Virtual Tip**: Share screen for clone; pair if stuck.

## Common Setup Issues
- pnpm not found: Reinstall globally.
- Port conflict: `pnpm dev --port 3000`.
- Virtual workshop: Share your screen for clone commands.

**Next**: Read /agenda.md, then dive into /theory/code.md.
