#!/bin/bash
VERSION=$1
if [ -z "$VERSION" ]; then VERSION=$(git describe --tags --abbrev=0); fi
git tag $VERSION
git push origin $VERSION
pnpm build
zip -r dist.zip .vitepress/dist/
gh release create $VERSION --title "v$VERSION" --notes "$(git log --oneline $(git describe --tags --abbrev=0)..HEAD)" dist.zip
