/**
 * https://raghunathchava.com
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./index.css";

// Error boundary for better error handling
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// Log app initialization for debugging
console.log("🚀 Raghunath Chava Website: Initializing React app...");

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </HelmetProvider>
    </React.StrictMode>,
  );
  console.log("✅ Raghunath Chava Website: React app initialized successfully");
} catch (error) {
  console.error("❌ Raghunath Chava Website: Failed to initialize React app", error);
  throw error;
}
