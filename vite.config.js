import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false, // Enable if you need source maps in production
  },
  server: {
    port: 3000, // or any port you prefer
  },
});