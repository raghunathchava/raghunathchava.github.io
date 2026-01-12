/**
 * https://raghunathchava.com
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3004,
    host: "0.0.0.0", // Listen on all interfaces inside container
    strictPort: false,
    hmr: {
      // HMR uses the same port as the dev server (3004)
      // WebSocket upgrade happens on the same port
    },
    watch: {
      // Watch for file changes when using volumes
      usePolling: true,
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: process.env.NODE_ENV !== "production",
    outDir: "dist",
    assetsDir: "assets",
    // Generate manifest for better caching
    manifest: false,
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "router-vendor": ["react-router-dom"],
        },
      },
    },
  },
  // Base path for production (empty for root domain)
  base: "/",
});
