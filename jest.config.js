module.exports = {
  preset: 'ts-jest',
  coverageDirectory: "coverage",
  clearMocks: true,
  testMatch: [
    "<rootDir>/tests/**/*.test.(ts|tsx)"
  ],
  setupFiles: ["./tests/setupTests.ts"]
};
