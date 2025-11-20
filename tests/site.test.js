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
    expect(content).toContain('progress-tracker');
  });

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
      if (link.startsWith('/') && link !== '/' && !link.includes('http') && !uniqueLinks.has(link)) {
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
