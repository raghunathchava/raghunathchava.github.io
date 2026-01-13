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
        // Use consistent chunk file naming with single hash to avoid mismatches
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        // Use a function to ensure consistent chunk names
        manualChunks: (id) => {
          // Vendor chunks - group all node_modules together to reduce chunk count
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }
            if (id.includes("react-router")) {
              return "router-vendor";
            }
            return "vendor";
          }
        },
        // Prevent code splitting from creating too many intermediate chunks
        experimentalMinChunkSize: 20000,
      },
    },
    // Reduce chunk splitting to minimize hash mismatches
    chunkSizeWarningLimit: 1000,
  },
  // Base path for production (empty for root domain)
  base: "/",
});
