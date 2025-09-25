# Setup Instructions

Verify prerequisites, then fork/clone. Time: 10 min. Stuck? See /troubleshooting.md. Basics: Git tracks changes (like undo history); pnpm manages packages efficiently (faster installs than npm).

## Prerequisites
- GitHub account (free; 2FA recommended). Why? Hosts repo for collaboration (DevOps Culture).
- Node.js v18+ (`node -v` → ≥18.0.0; download from nodejs.org). Why? Runs JavaScript (our site's language).
- pnpm (`npm install -g pnpm`; `pnpm -v` → ≥8.0.0; faster than npm). Why? Efficient dependency manager—uses lockfile for consistent builds (Lean).
- Git (`git --version`; configure: `git config --global user.name "Your Name" && git config --global user.email "your@email.com"`). Why? Versions code (prevents "local-only" issues).
- VS Code (extensions: GitHub Pull Requests and Review, GitHub Actions, Markdown All in One). Why? Edits code; integrates with Actions for automation.
- Browser (Chrome/Firefox for Pages preview). Why? Views deployed site.

## Fork, Clone, Install
1. Fork repo (main branch) → Name: `devops-workshop-vitepress`. Why fork? Creates your copy for safe edits (Code phase start).
2. Clone: `git clone https://github.com/{{username}}/devops-workshop-vitepress.git` (Expected: Clones ~5MB). Why clone? Gets source code locally.
3. `cd devops-workshop-vitepress`.
4. `pnpm install` (Expected: Installs vitepress/jest/mermaid; creates node_modules/, pnpm-lock.yaml). Why install? Prepares tools for build (e.g., VitePress compiles Markdown to HTML).
5. `pnpm dev` (Expected: "VitePress dev server running at http://localhost:5173"; open—see homepage). Why dev? Previews site locally (like testing before deploy).
6. GitHub Pages: Settings > Pages > Source: Deploy from `gh-pages` > Save (Actions will create branch). Why? Enables auto-deploy later.

## Verification
- Site loads? Edit index.md (add note) → Save → Auto-reload shows change. Reflection: You're in Code phase—edits are source; next, build transforms to artifact (compiled files).
- Issues? `pnpm build` (Expected: Generates .vitepress/dist/ with HTML/JS/CSS). Why build? Creates artifact for production (faster, secure).
- Next: /agenda.md for schedule; /progress.md to track. Reflection: Setup done—fork/clone enables Code; install prepares for Build (artifact creation).

**Virtual Tip**: Share screen for clone; pair if stuck.

## Common Setup Issues
- pnpm not found: Reinstall globally.
- Port conflict: `pnpm dev --port 3000`.
- Virtual workshop: Share your screen for clone commands.

**Next**: Read /agenda.md, then dive into /theory/code.md.
