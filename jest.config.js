module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!next.config.js',
    '!src/pages/**',
    '!src/__tests__/e2e/**'
  ],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/config/setupTests.ts'],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.ts',
  },
  transformIgnorePatterns: ['./node_modules/'],
  testPathIgnorePatterns: [
    '<rootDir>/src/__tests__/e2e',
    '<rootDir>/src/__tests__/config',
    '<rootDir>/src/__mocks__',
    '<rootDir>/src/styles',
    '<rootDir>/src/pages'
  ]
}
