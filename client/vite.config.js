import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression'; // Сжатие ресурсов
import { visualizer } from 'rollup-plugin-visualizer'; // Визуализация бандла

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    visualizer({
      open: true,
      filename: 'stats.html',
    }),
  ],
  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: { 
          react: ['react', 'react-dom'],
          vendor: ['lodash', 'axios'],
        },
      },
    },
    terserOptions: { 
      compress: {
        drop_console: true,
        pure_funcs: ['console.info'],
      },
    },
  },
  server: {
    open: true, 
  },
});
