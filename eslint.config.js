import json from '@eslint/json';
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import functional from 'eslint-plugin-functional';
import jsdoc from 'eslint-plugin-jsdoc';
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import node from 'eslint-plugin-n';
import importP from 'eslint-plugin-import';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDom from 'eslint-plugin-jest-dom';
import storybook from 'eslint-plugin-storybook';
import security from 'eslint-plugin-security';
import pluginPromise from 'eslint-plugin-promise';
import tailwindCSS from 'eslint-plugin-tailwindcss';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

const eslintConfig = tsEslint.config(
  { files: ['**/*.{html,js,xml,json,jsx,ts,tsx}'] },
  {
    files: ['**/*.json'],

    // Enforce JSON-specific rules:
    ...json.configs.recommended,
    ignores: ['package.json'],
    language: 'json/json',
  },

  // Enforce ESLint and TypeScript-specific rules:
  eslint.configs.recommended,
  tsEslint.configs.stylisticTypeChecked,

  // Enforce best practice documentation and functional programming:
  functional.configs.strict,
  jsdoc.configs['flat/recommended-typescript-error'],

  // Enforce React-specific rules and best practices:
  react.configs.flat.recommended,
  hooks.configs['recommended-latest'],
  jsxA11y.flatConfigs.recommended,

  // Enforce Node.js rules and import/export best practices:
  node.configs['flat/recommended-module'],
  importP.flatConfigs.typescript,

  // Enforce unit-testing rules and Storybook best practices:
  testingLibrary.configs['flat/react'],
  jestDom.configs['flat/recommended'],
  storybook.configs['flat/recommended'],

  // Enforce security and reliable async best practices:
  security.configs.recommended,
  pluginPromise.configs['flat/recommended'],

  // Enforce consistent CSS style and best "opinionated" code formatting practices:
  tailwindCSS.configs['flat/recommended'],
  prettier,
  { ignores: ['node_modules/', 'build/', '!.storybook/', 'src/stories/assets/'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.esnext,
        ...globals.jest,
        ...globals.node,
      },
      parser: tsEslint.parser,
      parserOptions: {
        ecmaFeatures: { impliedStrict: true, jsx: true },
        ecmaVersion: 'latest',
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Stylistic rules:
      'eol-last': ['error', 'always'],

      /**
       * @fileoverview ESLint configuration designed to unify ESLint core rules with TypeScript-aware equivalents
       * and Prettier formatting.
       *
       * Notes:
       * - Disable several ESLint core rules in favor of their corresponding `@typescript-eslint` counterparts,
       *   ensuring accurate type-aware linting.
       * - Include `eslint-config-prettier` as the final extension to automatically disable conflicting style-based
       *   rules and delegate code formatting to Prettier.
       * - This approach prevents duplicate warnings, improves code quality, and maintains a consistent,
       *   professional codebase.
       */
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': ['error'],

      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': ['error'],

      'init-declarations': 'off',
      '@typescript-eslint/init-declarations': ['error'],

      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': ['error'],

      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': ['error'],

      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': ['error'],

      'no-implied-eval': 'off',
      '@typescript-eslint/no-implied-eval': ['error'],

      'no-invalid-this': 'off',
      '@typescript-eslint/no-invalid-this': ['error'],

      'no-loss-of-precision': 'off',
      '@typescript-eslint/no-loss-of-precision': ['error'],

      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': ['error'],

      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': ['error'],

      'no-restricted-imports': 'off',
      '@typescript-eslint/no-restricted-imports': ['error'],

      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],

      'no-throw-literal': 'off',
      '@typescript-eslint/no-throw-literal': ['error'],

      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': ['error'],

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],

      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],

      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': ['error'],

      'require-await': 'off',
      '@typescript-eslint/require-await': ['error'],

      'return-await': 'off',
      '@typescript-eslint/return-await': ['error'],

      // React-specific rules:
      'react/react-in-jsx-scope': 'off',

      /* Configure `eslint-plugin-n`'s `n/no-missing-import` rule to include these file extensions in its
       resolution logic: */
      'n/no-missing-import': ['error', { tryExtensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.node'] }],

      /* Enforce explicit assertions in tests to ensure every test case has a clear, reliable condition, improving
       clarity and reliability when using React Testing Library through `eslint-plugin-testing-library`: */
      'testing-library/prefer-explicit-assert': 'error',
    },

    // Use the TypeScript resolver to handle imports correctly:
    settings: {
      'import/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: './tsconfig.json',
        }),
      ],
    },
  },
);

export default eslintConfig;
