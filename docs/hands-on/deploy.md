# Hands-On: Deploy & Full Pipeline (20 Min)

Finalize CD; run end-to-end. Builds on prior phases.

## Step 1: Deploy Phase (10 min)
Auto-publish to Pages.
1. Branch: `git checkout -b feat-deploy`.
2. Update YAML (add deploy job after test; if: github.ref == 'refs/heads/main'):
   ```yaml
   deploy:
     if: github.ref == 'refs/heads/main'
     needs: [build, test]
     runs-on: ubuntu-latest
     steps:
       - uses: actions/checkout@v4
       - uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: .vitepress/dist
   ```
3. Create `scripts/deploy.sh`:
   ```bash
   #!/bin/bash
   pnpm build
   npx gh-pages -d .vitepress/dist
   echo "Deployed to https://$GITHUB_REPOSITORY_OWNER.github.io/devops-workshop-vitepress/"
   if [ $? -ne 0 ]; then echo "Deploy failed"; exit 1; fi
   ```
   `chmod +x scripts/deploy.sh`.
4. Commit/Push/PR/Merge to main.
**Expected**: Actions > Deploy green; gh-pages branch created. **Verify**: Visit https://{{username}}.github.io/devops-workshop-vitepress/ — full site live!

## Step 2: Full Pipeline Run (10 min)
Test everything.
1. Edit e.g., /extensions.md (add note).
2. Branch/PR/Merge to main.
3. Tag v1.1.0: `git tag v1.1.0 && git push origin v1.1.0`.
**Expected**: CI/CD full: Build/test → Deploy (live update) + Release (new ZIP). **Verify**: Site refreshed; Releases has v1.1.0.

**Simulation**: Break deploy (e.g., invalid dir) → Fix/merge.

Workshop Complete! Edit /feedback.md; explore /extensions.md.
