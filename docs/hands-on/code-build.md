# Hands-On: Code & Build (20 Min)

Implement Code (edits/PR) and Build (YAML/artifact). Verify at each step. Reflection: Code creates source; Build transforms it into an **artifact** (the compiled, deployable website) — why? To prepare it for testing, release, and deployment.

## Step 1: Code Phase (5–7 min)
Practice collaboration—edit site!
1. Branch: `git checkout -b feat-code`. Why branch? Safe changes without affecting main.
2. Edit e.g., /index.md: Add row to tracker "| Code | ✅ | PR created | [date] |". Why edit? Simulates real code changes.
3. Lint: `pnpm lint` (if ESLint: `pnpm add -D eslint-plugin-markdown`). Why lint? Catches errors early (Measurement).
4. Commit/Push: `git add . && git commit -m "feat: update tracker" && git push origin feat-code`. Why commit? Versions your code.
5. PR: GitHub > Create PR to main > Merge (squash for clean history). Why PR? Reviews ensure quality (Culture).
**Expected**: PR shows diff; merge succeeds. **Verify**: Refresh Pages—edits live? (If not, check Settings > Pages.) Reflection: Code phase done—your edits are versioned; next, Build creates an artifact from them.

**Simulation**: Add invalid Markdown → PR lint fails → Fix. Why? Teaches error catching before build.

## Step 2: Build Phase (10–13 min)
Automate artifact creation.
1. New branch: `git checkout -b feat-build`. Why new? Builds on Code without mixing.
2. Create `.github/workflows/ci-cd.yml` (copy-paste; customize if needed):

   ```yaml
   name: CI/CD Pipeline
   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: pnpm/action-setup@v2
           with:
             version: 8
         - uses: actions/setup-node@v4
           with:
             node-version: 18
             cache: 'pnpm'
         - run: pnpm install --frozen-lockfile
         - run: pnpm build
         - uses: actions/upload-artifact@v4
           with:
             name: workshop-site
             path: .vitepress/dist/
   ```

   Why YAML? Defines pipeline (Automation); why upload artifact? Shares compiled files for review (Sharing).
3. Create `scripts/build.sh`: 
   ```bash
   #!/bin/bash
   pnpm build
   echo "Build complete: $(ls -la .vitepress/dist/)"
   ```
   Make executable: `chmod +x scripts/build.sh`. Why script? Reusable for local/CI.
4. Commit/Push/PR/Merge: `git add . && git commit -m "feat: add build job" && git push && PR/merge`.
**Expected**: Actions tab > Green build; "Upload workshop-site" step. **Verify**: Download artifact > Unzip > Open index.html (site works offline). Reflection: Built artifact from code—why upload? Enables testing without local build every time; next, test validates it.

**Troubleshoot**: Build fail? Check logs for dep errors; run local `pnpm build`. Why local? Catches issues before CI.

Next: /hands-on/test-release.md (add test/release). Reflection: Code→Build: Source to artifact—now ensure it's quality-tested.
