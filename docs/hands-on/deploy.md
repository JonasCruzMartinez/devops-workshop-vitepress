# Hands-On: Deploy & Full Pipeline (20 Min)

Finalize CD; run end-to-end. Builds on prior phases. Reflection: From Code/Build/Test/Release, we have validated/versioned artifacts—now deploy publishes them live.

## Step 1: Deploy Phase (10 min)
Auto-publish to Pages.
1. Branch: `git checkout -b feat-deploy`. Why? Finalizes pipeline.
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
   Why after test? Ensures only validated artifacts deploy (Lean).
3. Create `scripts/deploy.sh`:
   ```bash
   #!/bin/bash
   pnpm build
   npx gh-pages -d .vitepress/dist
   echo "Deployed to https://$GITHUB_REPOSITORY_OWNER.github.io/devops-workshop-vitepress/"
   if [ $? -ne 0 ]; then echo "Deploy failed"; exit 1; fi
   ```
   `chmod +x scripts/deploy.sh`. Why script? Automates publishing artifact.
4. Commit/Push/PR/Merge to main. Why main? Triggers deploy on stable code.
**Expected**: Actions > Deploy green; gh-pages branch created. **Verify**: Visit https://{{username}}.github.io/devops-workshop-vitepress/ — full site live! Reflection: Deployed artifact live—why rollback? If issues, revert to prior tag's ZIP (safety).

## Step 2: Full Pipeline Run (10 min)
Test everything.
1. Edit e.g., /extensions.md (add note). Why? Simulates ongoing changes.
2. Branch/PR/Merge to main. Why merge? Activates full CI/CD.
3. Tag v1.1.0: `git tag v1.1.0 && git push origin v1.1.0`. Why tag now? Creates new versioned release.
**Expected**: CI/CD full: Build/test → Deploy (live update) + Release (new ZIP). **Verify**: Site refreshed; Releases has v1.1.0. Reflection: End-to-end: Code change → artifact build/test → versioned release → live deploy. Why full? Shows automation flow.

**Simulation**: Break deploy (e.g., invalid dir) → Fix/merge. Why? Teaches rollback (revert to last good artifact).

Workshop Complete! Edit /feedback.md; explore /extensions.md. Reflection: You've built a full DevOps pipeline—code to live site with artifacts/tags for control.
