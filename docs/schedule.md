# Workshop Schedule

**Total Duration:** 2 hours (120 minutes)  
**Format:** Interactive hands-on workshop  
**Participants:** 5-20 people

## Timeline Overview

<div class="progress-bar">
  <div class="progress-fill" style="width: 0%"></div>
</div>

| Time | Duration | Activity | Presenter | Participants |
|------|----------|----------|-----------|--------------|
| 0:00-0:10 | 10 min | [Introduction & Setup](#introduction-setup) | P1 | Fork & clone |
| 0:10-0:25 | 15 min | [Theory: DevOps & Code Phase](#theory-devops-code) | P1 | Read & note-take |
| 0:25-0:40 | 15 min | [Hands-On: Code Phase](#hands-on-code) | P2 | Edit site & PR |
| 0:40-0:55 | 15 min | [Theory & Hands-On: Build Phase](#build-phase) | P2 | Add CI workflow |
| 0:55-1:05 | 10 min | **Break** | All | Stretch & Q&A |
| 1:05-1:20 | 15 min | [Theory & Hands-On: Test Phase](#test-phase) | P2 | Add tests |
| 1:20-1:35 | 15 min | [Theory & Hands-On: Release Phase](#release-phase) | P3 | Create releases |
| 1:35-1:50 | 15 min | [Theory & Hands-On: Deploy Phase](#deploy-phase) | P3 | Deploy to Pages |
| 1:50-2:00 | 10 min | [Wrap-up & Next Steps](#wrap-up) | All | Showcase & feedback |

## Detailed Schedule

### Introduction & Setup
**Time:** 0:00-0:10 (10 minutes)  
**Presenter:** P1  
**Objective:** Get everyone set up and oriented

#### Script for Presenter 1:
> "Welcome to our DevOps workshop! Today you'll learn by building a real CI/CD pipeline. This very website will be your project - every edit you make practices DevOps principles. Let's start by getting everyone set up."

#### Participant Activities:
1. **Fork the repository** (2 min)
   - Go to the workshop GitHub repository
   - Click "Fork" button
   - Keep default settings

2. **Clone locally** (3 min)
   ```bash
   git clone https://github.com/YOUR_USERNAME/devops-workshop-vitepress.git
   cd devops-workshop-vitepress
   ```

3. **Install and preview** (3 min)
   ```bash
   pnpm install
   pnpm dev
   ```
   - Open localhost:5173
   - Verify site loads

4. **Enable GitHub Pages** (2 min)
   - Go to Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` (will be created later)

#### Success Criteria:
- ✅ Everyone has the site running locally
- ✅ GitHub Pages is configured
- ✅ Poll: "Type ✅ in chat if you're ready"

---

### Theory: DevOps & Code Phase
**Time:** 0:10-0:25 (15 minutes)  
**Presenter:** P1  
**Objective:** Understand DevOps CALMS and Code phase fundamentals

#### Presenter Script:
> "Now let's understand what DevOps really means. Open the Theory section in your local site and follow along."

#### Content to Cover:
1. **CALMS Framework** (5 min)
   - Culture: Collaboration over silos
   - Automation: Reduce manual work  
   - Lean: Optimize flow and eliminate waste
   - Measurement: Data-driven decisions
   - Sharing: Knowledge and feedback loops

2. **Code Phase Deep Dive** (7 min)
   - Why version control matters
   - Git workflow: branch → commit → PR → merge
   - How this enables collaboration
   - Connection to DevOps Culture & Sharing

3. **Workshop Context** (3 min)
   - How editing this site = practicing Code phase
   - Preview of full pipeline we'll build

#### Participant Activities:
- Read `/theory/overview` and `/theory/cicd`
- Take notes in the margins (edit locally)
- Ask questions in chat

---

### Hands-On: Code Phase
**Time:** 0:25-0:40 (15 minutes)  
**Presenter:** P2  
**Objective:** Practice collaborative development

<div class="warning-box">
⚠️ <strong>Presenter Handoff:</strong> P1 says "P2, take us through the Code phase hands-on!"
</div>

#### Step-by-Step Instructions:

<div class="step-counter">1</div> **Create a feature branch** (2 min)

```bash
git checkout -b feat/personalize-site
```

<div class="step-counter">2</div> **Make your first edit** (5 min)

Edit `docs/progress.md` and add your personal notes:

```markdown
## My Workshop Notes
- Started at: [current time]
- Goal: Learn DevOps by doing
- Expectation: Build a real pipeline

## Personal Tracker
- [ ] Code phase completed
- [ ] Build phase completed  
- [ ] Test phase completed
- [ ] Release phase completed
- [ ] Deploy phase completed
```

<div class="step-counter">3</div> **Commit and push** (3 min)

```bash
git add .
git commit -m "feat: add personal workshop tracker"
git push origin feat/personalize-site
```

<div class="step-counter">4</div> **Create Pull Request** (3 min)

1. Go to your GitHub repo
2. Click "Compare & pull request"
3. Title: "Add personal workshop tracker"
4. Description: "Practicing the Code phase by adding my progress tracker"
5. Click "Create pull request"

<div class="step-counter">5</div> **Merge Pull Request** (2 min)

1. Review the changes in the PR
2. Click "Merge pull request"
3. Click "Confirm merge"
4. Delete the feature branch

#### Success Criteria:
- ✅ PR created and merged successfully
- ✅ Changes visible in main branch
- ✅ Understanding of Git workflow

<div class="success-box">
🎉 <strong>Phase Complete!</strong> You've just practiced the Code phase of DevOps - collaborative development through version control!
</div>

---

### Build Phase
**Time:** 0:40-0:55 (15 minutes)  
**Presenter:** P2  
**Objective:** Automate artifact creation

#### Theory Overview (5 min)
- What are artifacts? (Compiled, production-ready files)
- Why build? (Optimization, consistency, security)
- VitePress: Markdown → Static HTML/CSS/JS

#### Hands-On Implementation (10 min):

<div class="step-counter">1</div> **Create workflow file** (3 min)

Create `.github/workflows/ci.yml`:

```yaml
name: CI Pipeline
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
          name: site-dist
          path: .vitepress/dist/
```

<div class="step-counter">2</div> **Test locally first** (2 min)

```bash
pnpm build
ls -la .vitepress/dist/  # Should see HTML files
```

<div class="step-counter">3</div> **Commit and push** (3 min)

```bash
git add .
git commit -m "feat: add CI build pipeline"
git push origin main
```

<div class="step-counter">4</div> **Verify in GitHub Actions** (2 min)

1. Go to your repo's "Actions" tab
2. Watch the build run
3. Download the artifact when complete

#### Success Criteria:
- ✅ Workflow runs successfully
- ✅ Artifact contains built site files
- ✅ Understanding of build automation

---

### 10-Minute Break
**Time:** 0:55-1:05  

> "Great progress! Take a 10-minute break. When we return, we'll add testing to ensure our builds are high quality."

---

### Test Phase  
**Time:** 1:05-1:20 (15 minutes)  
**Presenter:** P2  
**Objective:** Add quality gates with automated testing

#### Theory (3 min):
- Why test? (Catch issues early, ensure quality)
- Types: Unit, Integration, E2E
- Coverage: Measure how much code is tested

#### Implementation (12 min):

<div class="step-counter">1</div> **Create test file** (4 min)

Create `tests/site.test.js`:

```javascript
const fs = require('fs');
const path = require('path');

describe('Workshop Site Content Validation', () => {
  const docsDir = path.join(__dirname, '../docs');

  // DevOps Quality Gate: Check for dead links in config.js (ensures navigation to existing docs before build/deploy)
  test('Config.js links point to existing files (no dead links)', () => {
    const configPath = path.join(docsDir, '.vitepress/config.js');
    expect(fs.existsSync(configPath)).toBe(true);
    
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Simple regex to extract unique link paths from nav and sidebar (e.g., '/theory/build')
    const linkRegex = /link:\s*'([^']+)'/g;
    let match;
    const uniqueLinks = new Set();
    
    while ((match = linkRegex.exec(configContent)) !== null) {
      const link = match[1];
      if (link.startsWith('/') && !link.includes('http') && !uniqueLinks.has(link)) {
        uniqueLinks.add(link);
      }
    }
    
    // For each link, check if corresponding .md file exists (VitePress convention)
    uniqueLinks.forEach(link => {
      const filePath = path.join(docsDir, link.replace(/^\//, '') + '.md');
      // DevOps Focus: Fail fast if link broken—prevents deploy of invalid navigation (Lean: early detection)
      expect(fs.existsSync(filePath)).toBe(true, `Dead link in config.js: ${link} (missing ${filePath})`);
    });
  });
});
```

<div class="step-counter">2</div> **Add test configuration** (2 min)

Create `jest.config.js`:

```javascript
module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html']
};
```

<div class="step-counter">3</div> **Update CI workflow** (3 min)

Add test job to `.github/workflows/ci.yml`:

```yaml
  test:
    needs: build
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
      - run: pnpm test
```

<div class="step-counter">4</div> **Test and commit** (3 min)

```bash
pnpm test  # Run locally first
git add .
git commit -m "feat: add automated testing"
git push origin main
```

#### Success Criteria:
- ✅ Tests pass locally and in CI
- ✅ Coverage report generated
- ✅ Build fails if tests fail

---

### Release Phase
**Time:** 1:20-1:35 (15 minutes)  
**Presenter:** P3  
**Objective:** Create versioned releases

<div class="warning-box">
⚠️ <strong>Presenter Handoff:</strong> P2 says "P3, show them how to create professional releases!"
</div>

#### Theory (3 min):
- Semantic Versioning (MAJOR.MINOR.PATCH)
- Releases vs Deployments
- Why version? (Rollbacks, auditing, distribution)

#### Implementation (12 min):

<div class="step-counter">1</div> **Add release job to CI** (5 min)

Update `.github/workflows/ci.yml`:

```yaml
  release:
    if: startsWith(github.ref, 'refs/tags/v')
    needs: [build, test]
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
      - name: Create Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          draft: false
          prerelease: false
```

<div class="step-counter">2</div> **Create first release** (4 min)

```bash
git add .
git commit -m "feat: add release automation"
git push origin main

# Create and push tag
git tag v1.0.0
git push origin v1.0.0
```

<div class="step-counter">3</div> **Verify release** (3 min)

1. Go to repo's "Releases" section
2. See v1.0.0 release created automatically
3. Download release assets

#### Success Criteria:
- ✅ Release created automatically on tag
- ✅ Release includes built artifacts
- ✅ Understanding of versioning strategy

---

### Deploy Phase
**Time:** 1:35-1:50 (15 minutes)  
**Presenter:** P3  
**Objective:** Automatically deploy to production

#### Theory (3 min):
- Continuous Deployment vs Delivery
- GitHub Pages as production environment
- Rollback strategies

#### Implementation (12 min):

<div class="step-counter">1</div> **Add deploy job** (6 min)

Update `.github/workflows/ci.yml`:

```yaml
  deploy:
    if: github.ref == 'refs/heads/main'
    needs: [build, test]
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
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .vitepress/dist
          cname: ${{ secrets.CNAME }}  // Optional custom domain
```

<div class="step-counter">2</div> **Deploy and test** (4 min)

```bash
git add .
git commit -m "feat: add automatic deployment"
git push origin main
```

<div class="step-counter">3</div> **Verify deployment** (2 min)

1. Wait for Actions to complete
2. Visit `https://YOUR_USERNAME.github.io/devops-workshop-vitepress/`
3. Confirm site is live!

#### Success Criteria:
- ✅ Site deploys automatically on main branch changes
- ✅ Live site accessible at GitHub Pages URL
- ✅ Full CI/CD pipeline working end-to-end

<div class="success-box">
🚀 <strong>Congratulations!</strong> You've built a complete CI/CD pipeline! Every change to main now automatically builds, tests, and deploys your site.
</div>

---

### Wrap-up & Next Steps
**Time:** 1:50-2:00 (10 minutes)  
**All Presenters**

#### Showcase Time (5 min):
- Volunteers share their live sites
- Quick demo of making a change and seeing it deploy
- Celebrate the working pipelines!

#### Key Takeaways (3 min):
1. **Culture**: Collaboration through PRs and code review
2. **Automation**: Full pipeline runs without manual intervention  
3. **Lean**: Fast feedback loops and streamlined process
4. **Measurement**: Test coverage and deployment metrics
5. **Sharing**: Documentation and knowledge transfer

#### Next Steps (2 min):
- Complete extensions for extra credit
- Customize your site and add more features
- Apply these concepts to your real projects
- Provide feedback to improve the workshop

---

## Presenter Notes

### Preparation Checklist:
- [ ] All presenters have demo repos ready
- [ ] Backup slides prepared for any technical issues
- [ ] Zoom breakout rooms configured (if virtual)
- [ ] Participant GitHub usernames collected
- [ ] Workshop repository forked by all facilitators

### Troubleshooting Quick Reference:
- **pnpm not found**: `npm install -g pnpm`
- **Permission errors**: Use `sudo` or configure npm properly
- **Actions failing**: Check YAML indentation and GitHub token permissions
- **Site not deploying**: Verify Pages settings and branch name

### Timing Flexibility:
- If running behind: Skip some theory sections and focus on hands-on
- If ahead of schedule: Add more Q&A and deeper exploration
- Always keep the final deployment demo - it's the most satisfying part!
