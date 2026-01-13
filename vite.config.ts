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
    rollupOptions: {
      output: {
        // Use consistent chunk naming - prevent intermediate chunk references
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        // Aggressive chunking to prevent intermediate references
        manualChunks: (id) => {
          // Vendor chunks - keep separate for better caching
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
        // Prevent creating too many small chunks
        // This helps avoid intermediate chunk references
        inlineDynamicImports: false,
      },
    },
    // Increase chunk size limit to reduce fragmentation
    chunkSizeWarningLimit: 1000,
    // Disable code splitting warnings for better GitHub Pages compatibility
    reportCompressedSize: false,
  },
  // Base path for production (empty for root domain)
  base: "/",
});
