/** @type {import('ts-jest').JestConfigWithTsJest} */
const jestConfig = {
  /*
   * For a detailed explanation regarding each configuration property and type check, visit:
   * https://jestjs.io/docs/configuration
   */

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  /* An array of glob patterns
   indicating a set of files for which coverage information should be collected */
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.tsx',
    '!<rootDir>/src/components/**/*.stories.tsx',
    '!<rootDir>/src/components/pages/**/*.tsx',
    '!<rootDir>/src/components/Form/FormField/**/*.tsx',
    '<rootDir>/src/lib/utils/**/*.ts',
    '!<rootDir>/node_modules/**',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/coverage/',

  // An array of regexp pattern strings used to skip coverage-collection
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['clover', 'json', 'lcov', 'text'],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: { global: { lines: 90 } },

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', '<rootDir>/'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'mjs', 'cjs', 'json', 'node'],

  /* A map from regular expressions to module names or to arrays of module names that allow to stub out
   resources with a single module */
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^/components/(.*)$': '<rootDir>/src/components/$1',
    '^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
    '^[./a-zA-Z0-9$_-]+\\.png$': '<rootDir>/images/$1',
    '\\.(css|less)$': 'identity-obj-proxy',
  },

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The root directory that Jest should scan for tests and modules within
  rootDir: './',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>'],

  /* A list of paths to modules that run some code to configure or set up the testing framework before
   each test */
  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/*.spec.ts?(x)'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(t)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/config/fileTransformer.config.cjs',
  },

  /* An array of regexp pattern strings that are matched against all source file paths before
   transformation. */
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates whether each test should be reported during the run
  verbose: true,

  // Whether to use watchman for file crawling
  watchman: true,
};

module.exports = jestConfig;
