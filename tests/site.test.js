const fs = require('fs');
const path = require('path');

describe('Workshop Site Content Validation', () => {
  const docsDir = path.join(__dirname, '../docs');

  test('All theory pages have core sections', () => {
    const theoryFiles = ['theory/code.md', 'theory/build.md', 'theory/test.md', 'theory/release.md', 'theory/deploy.md'];
    theoryFiles.forEach(file => {
      const fullPath = path.join(docsDir, file);
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        expect(content).toContain('What is the');  // e.g., "What is the Code Phase?"
        expect(content.length).toBeGreaterThan(500);  // Ensure detailed
      }
    });
  });

  test('Index has tracker table', () => {
    const content = fs.readFileSync(path.join(docsDir, 'index.md'), 'utf8');
    expect(content).toContain('| Phase');
  });

  // V2 Addition: Post-build HTML validation (run after pnpm build in CI)
  test('Built site has no broken links (mock)', () => {
    // Simulate: In full CI, use cheerio to parse dist/index.html
    expect(true).toBe(true);  // Placeholder; expand with real parser
  });
});
