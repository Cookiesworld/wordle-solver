
/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    port: 3022,
  },
  test: {
    api: {
      port: 3023,
    },
    environment: 'jsdom',
    setupFiles: [
      './test/setupTests.js',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  }
});
