import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    minify: "esbuild",
    target: "es2020",
    chunkSizeWarningLimit: 500,
    reportCompressedSize: false,
    ssrManifest: true,
    rollupOptions: {
      output: {
        // Aggressive code splitting for best caching
        manualChunks: (id) => {
          // Core React ecosystem - separate chunk
          if (id.includes('node_modules/react')) {
            return 'react-core';
          }
          // Routing - separate chunk
          if (id.includes('react-router')) {
            return 'router';
          }
          // UI components - separate chunk
          if (id.includes('@radix-ui')) {
            return 'radix-ui';
          }
          // Form handling - separate chunk
          if (id.includes('@hookform') || id.includes('react-hook-form') || id.includes('zod')) {
            return 'forms';
          }
          // Query and state management
          if (id.includes('@tanstack/react-query')) {
            return 'query';
          }
          // Dialog and UI utilities
          if (id.includes('sonner') || id.includes('cmdk')) {
            return 'ui-utils';
          }
        },
      },
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  // Optimize module parsing
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
  },
});