# Hands-On: Test & Release (20 Min)

Add tests (quality gates) and release (version snapshot). Builds on prior.

## Step 1: Test Phase (10 min)
Validate content with Jest.
1. Branch: `git checkout -b feat-test`.
2. Create/update `tests/site.test.js` (Jest validates docs/):
   ```javascript
   const fs = require('fs');
   const path = require('path');

   describe('Workshop Site', () => {
     const docsDir = path.join(__dirname, '../docs');
     test('Theory pages have sections', () => {
       const files = ['theory/code.md', 'theory/build.md'];  // Add more
       files.forEach(file => {
         const content = fs.readFileSync(path.join(docsDir, file), 'utf8');
         expect(content).toContain('What is the');
         expect(content.length).toBeGreaterThan(500);
       });
     });
     test('Index has tracker', () => {
       const content = fs.readFileSync(path.join(docsDir, 'index.md'), 'utf8');
       expect(content).toContain('| Phase |');
     });
   });
   ```
3. Add `jest.config.js`: 
   ```javascript
   module.exports = {
     testEnvironment: 'node',
     collectCoverageFrom: ['docs/**/*.md'],
     coverageThreshold: { global: { branches: 80, functions: 80, lines: 80 } }
   };
   ```
4. Local: `pnpm test` (Expected: 2 passed, coverage report).
5. Commit/Push/PR/Merge: `git add . && git commit -m "feat: add content tests" && ...`.
**Expected**: Actions > Test job green (runs after build). **Verify**: Coverage >80%; fail by shortening a page → Fix.

**Simulation**: Edit theory.md poorly → Test fails in PR → Correct.

## Step 2: Release Phase (10 min)
Create tagged snapshot.
1. Branch: `git checkout -b feat-release` (from main).
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
   `chmod +x scripts/release.sh`.
4. Commit/Push/PR/Merge.
5. Tag: `git tag v1.0.0 && git push origin v1.0.0`.
**Expected**: Releases tab > v1.0.0 with ZIP (download/unzip → site works). **Verify**: Notes show commits; no deploy conflict (release = snapshot).

Next: /hands-on/deploy.md (add deploy).
