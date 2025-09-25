# Troubleshooting

Edit/PR fixes here! Common issues with steps.

| Issue | Cause | Diagnostic | Fix |
|-------|-------|------------|-----|
| pnpm install fails | Network/lockfile | `pnpm -v`; logs | `rm pnpm-lock.yaml && pnpm install`; VPN if needed |
| Build errors | Config/dep issue | Actions logs; local `pnpm build` | Fix .vitepress/config.js; `pnpm add vitepress` |
| Test fails | Content mismatch | `pnpm test --verbose`; coverage | Ensure "What is?" in theory.md; mock fs |
| No deploy to Pages | Branch/token | Settings > Pages; deploy logs | Merge to main; GITHUB_TOKEN auto |
| Release no ZIP | Tag/script | Releases tab; `echo $VERSION` in sh | `git push --tags`; Debug release.sh |
| Slow Actions | No cache | Logs: "cache hit?" | Already in setup-node; add manual if needed |
| Site not reloading dev | Port/watch | `pnpm dev --force` | Restart; Check .gitignore |
| PR no CI trigger | Branch filter | YAML 'on' section | Ensure branches: [main] |
| Coverage low | No thresholds | `jest --coverage` | Add to jest.config.js; Test more pages |
| Mermaid not rendering | Plugin | Build logs | Ensure vitepress-plugin-mermaid in deps/config |

## Advanced
- Pipeline timeout: Increase job timeout in YAML.
- Private repo: Add PAT secret for deploy.
- Still stuck? Share Actions log snippet in chat/PR to repo.

Contribute: Add row via PR!
