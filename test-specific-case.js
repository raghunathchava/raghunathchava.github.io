// Test the specific failing case mentioned
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import { SEO } from "./src/components/seo/SEO.js";

const TestWrapper = ({ children }) =>
  React.createElement(HelmetProvider, null, children);

// Test the specific counter-example: [" "," ","http://a.aa"]
try {
  const result = render(
    React.createElement(
      TestWrapper,
      null,
      React.createElement(SEO, {
        title: " ",
        description: " ",
        canonical: "http://a.aa",
      })
    )
  );

  console.log("✅ Test passed - no errors thrown");

  // Check if meta tags are in the DOM
  const titleElement = document.querySelector("title");
  const descElement = document.querySelector('meta[name="description"]');
  const canonicalElement = document.querySelector('link[rel="canonical"]');

  console.log("Title element:", titleElement?.textContent);
  console.log("Description element:", descElement?.getAttribute("content"));
  console.log("Canonical element:", canonicalElement?.getAttribute("href"));
} catch (error) {
  console.log("❌ Test failed with error:", error.message);
}
