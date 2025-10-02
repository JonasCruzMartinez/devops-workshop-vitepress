# Hands-On: Test & Release (20 Min)

Add tests (quality gates) and release (version snapshot). Builds on prior. Reflection: From Code/Build, we have an artifact—now test validates it; release versions for milestones.

## Step 1: Test Phase (10 min)
Validate content with Jest.
1. Branch: `git checkout -b feat-test`. Why? Isolates testing from prior changes.
2. Create/update `tests/site.test.js` (Jest validates docs/):
   ```javascript
   const fs = require('fs');
   const path = require('path');

   describe('Workshop Site', () => {
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
   Why tests? Ensures artifact (built files) matches source—no breaks from compilation.
3. Add `jest.config.js`: 
   ```javascript
   module.exports = {
     testEnvironment: 'node',
     collectCoverageFrom: ['docs/**/*.md'],
     coverageThreshold: { global: { branches: 80, functions: 80, lines: 80 } }
   };
   ```
   Why config? Sets rules (e.g., 80% coverage) for quality (Measurement).
4. Local: `pnpm test` (Expected: 2 passed, coverage report). Why local? Quick feedback before CI.
5. Commit/Push/PR/Merge: `git add . && git commit -m "feat: add content tests" && ...`.
**Expected**: Actions > Test job green (runs after build). **Verify**: Coverage >80%; fail by shortening a page → Fix. Reflection: Tested artifact—ensures it's reliable; next, release versions it (e.g., ZIP for sharing).

**Simulation**: Edit theory.md poorly → Test fails in PR → Correct. Why? Mimics real bugs in artifact.

## Step 2: Release Phase (10 min)
Create tagged snapshot.
1. Branch: `git checkout -b feat-release` (from main). Why from main? Builds on merged code.
2. Update YAML (add release job after test; if: startsWith(github.ref, 'refs/tags/v')):
   ```yaml
   release:
     if: startsWith(github.ref, 'refs/tags/v')
     needs: [build, test]
     runs-on: ubuntu-latest
     steps:
       - uses: actions/checkout@v4
       - uses: pnpm/action-setup@v2  # As in build
       - uses: actions/setup-node@v4  # As in build
       - run: pnpm install --frozen-lockfile
       - run: pnpm build
       - run: chmod +x scripts/release.sh && ./scripts/release.sh ${{ github.ref_name }}
   ```
   Why conditional? Triggers only on tags (milestones), not every push.
3. Create `scripts/release.sh`:
   ```bash
   #!/bin/bash
   VERSION=$1
   if [ -z "$VERSION" ]; then VERSION=$(git describe --tags --abbrev=0); fi
   git tag $VERSION
   git push origin $VERSION
   pnpm build
   zip -r dist.zip .vitepress/dist/
   gh release create $VERSION --title "v$VERSION" --notes "$(git log --oneline $(git describe --tags --abbrev=0)..HEAD)" dist.zip
   if [ $? -ne 0 ]; then echo "Release failed"; exit 1; fi
   echo "Release v$VERSION created!"
   ```
   `chmod +x scripts/release.sh`. Why ZIP/changelog? Packages artifact with change history for audits (Sharing).
4. Commit/Push/PR/Merge.
5. Tag: `git tag v1.0.0 && git push origin v1.0.0`. Why tag? Marks milestone—creates versioned ZIP from artifact.
**Expected**: Releases tab > v1.0.0 with ZIP (download/unzip → site works). **Verify**: Notes show commits; no deploy conflict (release = snapshot). Reflection: Released versioned artifact—why tag vs. build? Builds are frequent; tags for stable shares; next, deploy publishes latest.

Next: /hands-on/deploy.md (add deploy). Reflection: Test/Release: Validated/versioned artifact—now publish live.
