// jest.config.js
module.exports = {
  testEnvironment: 'node',  // Use Node.js environment for file system tests
  collectCoverage: true,    // Generate coverage reports
  coverageDirectory: 'coverage',  // Where to save coverage reports
  coverageReporters: ['text', 'lcov', 'html'],  // Multiple report formats
  coverageThreshold: {
    global: {
      branches: 80,      // 80% branch coverage
      functions: 80,     // 80% function coverage
      lines: 80,         // 80% line coverage
      statements: 80     // 80% statement coverage
    }
  },
  testMatch: ['**/tests/**/*.test.js'],  // Test file pattern
  testTimeout: 10000,  // 10 second timeout for tests
  verbose: true  // Show detailed test output
};