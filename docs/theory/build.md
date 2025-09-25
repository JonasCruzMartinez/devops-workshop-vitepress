# Build Phase Theory

## What is the Build Phase?
Build transforms source into deployable artifacts. For VitePress: `pnpm build` generates static site (.vitepress/dist/: HTML/CSS/JS from Markdown). Automates compilation—key for reproducibility. In DevOps, supports Automation (pipelines) and Lean (fast builds); GitHub Actions handles caching for efficiency.

## Why Build Phase?
Source code (e.g., Markdown) is human-readable but not optimized—Build creates artifacts (compiled outputs) for production: Faster loading, secure (no source exposure), consistent across machines. Why not skip? Raw source deploys slowly/ insecurely; artifacts enable testing/release/deploy. Analogy: Cooking ingredients (source) into a meal (artifact)—edible but not ready-to-serve without prep. Next: Test validates the artifact.

## Key Concepts
- **pnpm Advantages**: Parallel installs, symlinks (3x faster than npm); lockfile ensures consistency (`--frozen-lockfile` in CI). Why lockfile? Prevents version mismatches (Measurement).
- **Artifacts**: dist/ bundle; upload for inspection/download (e.g., verify offline). Why upload? Allows review/rollback without rebuilding; in CI, shares for team (Sharing).
- **VitePress Specifics**: Bundles assets, optimizes (chunking); pitfalls: Missing deps (check pnpm-lock.yaml), large files (Vite config: build.rollupOptions). Why optimize? Lean—reduces load times.

```mermaid
graph TD
  A[Source Code e.g., docs/] --> B[pnpm install --frozen-lockfile]
  B --> C[pnpm build VitePress]
  C --> D[Artifact: .vitepress/dist/ HTML/JS/CSS]
  D --> E[Test/Deploy]
```

## Benefits & Maturity
Catches compile errors early; metrics: Build time <2 min. Level 2: Scripted builds; Level 3: Cached deps (Actions speeds this).

**Pitfalls**: Invalid config.js → Fail; fix locally first. Why? Ensures artifact is valid before pipeline (Lean).

Hands-On: /hands-on/code-build.md – Add build job to YAML! Reflection: Build creates artifact from code—next, test checks it.

### Artifacts
- For VitePress: `.vitepress/dist/` contains static files (HTML, CSS, JS).
- Uploaded as artifacts in CI for inspection or manual download.
- Pitfalls: Missing deps (check pnpm-lock.yaml), large bundles (optimize with Vite's chunking).

**Hands-On Tie-In**: In /hands-on/code-build.md, you'll create a workflow that builds and uploads this artifact.
