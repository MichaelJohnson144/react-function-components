import { createRequire } from 'node:module';
import { dirname } from 'node:path';

const _require = createRequire(import.meta.url);
const getAbsolutePath = (packageName) => {
  try {
    return dirname(_require.resolve(`${packageName}/package.json`));
  } catch (error) {
    console.error(`Failed to resolve package: ${packageName}`, error);
    throw error;
  }
};

const prettierConfig = {
  printWidth: 120,
  singleQuote: true,
  jsxSingleQuote: true,
  proseWrap: 'always',
  plugins: [getAbsolutePath('prettier-plugin-tailwindcss'), getAbsolutePath('@prettier/plugin-xml')],
  tailwindPreserveWhitespace: true,
  tailwindStylesheet: '@/index.css',
  xmlWhitespaceSensitivity: 'ignore',
  xmlSelfClosingSpace: true,
  bracketSameLine: false,
};

export default prettierConfig;
