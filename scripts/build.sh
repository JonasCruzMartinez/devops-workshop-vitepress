#!/bin/bash
pnpm build
echo "Build complete: $(ls -la docs/.vitepress/dist/)"
