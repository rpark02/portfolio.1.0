import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    outDir: 'dist',          // Output directory
    assetsDir: 'assets',     // Subdirectory for assets
  },
  assetsInclude: [
    '**/*.ttf',  // Include .ttf font files
    '**/*.otf',  // Include .otf font files
    '**/*.png',  // Include .png image files
    '**/*.jpg',  // Include .jpg image files
    '**/*.jpeg', // Include .jpeg image files
    '**/*.gif',  // Include .gif image files
    '**/*.svg'   // Include .svg image files
  ],
});
