
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  }
});
