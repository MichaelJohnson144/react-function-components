import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

const viteConfig = defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/vitest-setup.ts'],
  },
});

export default viteConfig;
