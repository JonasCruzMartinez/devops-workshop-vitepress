# Setup Instructions

## Prerequisites (Check Before Starting)
- GitHub account (free; enable 2FA for security).
- Node.js v18+ (download from nodejs.org; verify: `node -v`).
- pnpm: `npm install -g pnpm` (faster than npm; verify: `pnpm -v`).
- Git: Installed and configured (`git config --global user.name "Your Name"`).
- Editor: VS Code recommended (extensions: GitHub Pull Requests, Actions, Markdown Preview).
- Browser: For site preview and GitHub UI.

## Fork, Clone, and Local Setup
1. Fork the repo (main branch) on GitHub—name it `devops-workshop-vitepress`.
2. Clone your fork: `git clone https://github.com/{{username}}/devops-workshop-vitepress.git`.
3. Navigate: `cd devops-workshop-vitepress`.
4. Install deps: `pnpm install` (creates node_modules/, pnpm-lock.yaml).
5. Local dev server: `pnpm dev` – Site at http://localhost:5173. Edit any .md and see auto-reload.
6. GitHub Pages: In your fork's Settings > Pages, select "Deploy from a branch" > `gh-pages` > Save. (Actions will populate it.)

## Common Setup Issues
- pnpm not found: Reinstall globally.
- Port conflict: `pnpm dev --port 3000`.
- Virtual workshop: Share your screen for clone commands.

**Next**: Read /agenda.md, then dive into /theory/code.md.
