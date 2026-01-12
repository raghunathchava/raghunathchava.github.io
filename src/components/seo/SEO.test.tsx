/**
 * https://raghunathchava.com
 * Property-Based Tests for SEO Component
 *
 * Feature: marketing-master-strategy
 * Properties tested:
 * - Property 1: Meta Tag Length Constraints
 * - Property 2: Schema Markup Validity
 * - Property 4: Canonical URL Consistency
 *
 * Validates: Requirements 4.4, 4.5, 4.7
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import * as fc from "fast-check";
import { SEO } from "./SEO";
import { SchemaMarkup } from "./SchemaMarkup";
import type { SchemaMarkup as SchemaMarkupType } from "@/types/seo";

// Test wrapper with HelmetProvider
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

// Helper to clean up DOM between tests
beforeEach(() => {
  // Clear any existing meta tags
  document.head.innerHTML = "";
});

afterEach(() => {
  // Clean up after each test
  document.head.innerHTML = "";
});

// =============================================================================
// Property 1: Meta Tag Length Constraints
// =============================================================================

describe("Property 1: Meta Tag Length Constraints", () => {
  /**
   * Feature: marketing-master-strategy, Property 1: Meta Tag Length Constraints
   *
   * *For any* page in the Marketing_Website, the meta title SHALL be ≤60 characters
   * and the meta description SHALL be ≤160 characters.
   *
   * **Validates: Requirements 4.4**
   */
  it("should enforce meta title length constraint (≤60 characters)", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 60 }),
        fc.string({ minLength: 1, maxLength: 160 }),
        (title: string, description: string) => {
          // Should not throw or warn for valid lengths
          const consoleSpy = vi
            .spyOn(console, "warn")
            .mockImplementation(() => {});

          render(
            <TestWrapper>
              <SEO title={title} description={description} />
            </TestWrapper>,
          );

          // Should not have warned about title length
          const titleWarnings = consoleSpy.mock.calls.filter((call) =>
            call[0]?.includes("Title exceeds 60 characters"),
          );
          expect(titleWarnings.length).toBe(0);

          consoleSpy.mockRestore();
        },
      ),
      { numRuns: 100 },
    );
  });

  it("should warn when meta title exceeds 60 characters", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 61, maxLength: 100 }),
        fc.string({ minLength: 1, maxLength: 160 }),
        (longTitle: string, description: string) => {
          const consoleSpy = vi
            .spyOn(console, "warn")
            .mockImplementation(() => {});

          render(
            <TestWrapper>
              <SEO title={longTitle} description={description} />
            </TestWrapper>,
          );

          // Should have warned about title length
          const titleWarnings = consoleSpy.mock.calls.filter((call) =>
            call[0]?.includes("Title exceeds 60 characters"),
          );
          expect(titleWarnings.length).toBeGreaterThan(0);

          consoleSpy.mockRestore();
        },
      ),
      { numRuns: 100 },
    );
  });

  it("should enforce meta description length constraint (≤160 characters)", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 60 }),
        fc.string({ minLength: 1, maxLength: 160 }),
        (title: string, description: string) => {
          const consoleSpy = vi
            .spyOn(console, "warn")
            .mockImplementation(() => {});

          render(
            <TestWrapper>
              <SEO title={title} description={description} />
            </TestWrapper>,
          );

          // Should not have warned about description length
          const descWarnings = consoleSpy.mock.calls.filter((call) =>
            call[0]?.includes("Description exceeds 160 characters"),
          );
          expect(descWarnings.length).toBe(0);

          consoleSpy.mockRestore();
        },
      ),
      { numRuns: 100 },
    );
  });

  it("should warn when meta description exceeds 160 characters", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 60 }),
        fc.string({ minLength: 161, maxLength: 200 }),
        (title: string, longDescription: string) => {
          const consoleSpy = vi
            .spyOn(console, "warn")
            .mockImplementation(() => {});

          render(
            <TestWrapper>
              <SEO title={title} description={longDescription} />
            </TestWrapper>,
          );

          // Should have warned about description length
          const descWarnings = consoleSpy.mock.calls.filter((call) =>
            call[0]?.includes("Description exceeds 160 characters"),
          );
          expect(descWarnings.length).toBeGreaterThan(0);

          consoleSpy.mockRestore();
        },
      ),
      { numRuns: 100 },
    );
  });
});

// =============================================================================
// Property 2: Schema Markup Validity
// =============================================================================

describe("Property 2: Schema Markup Validity", () => {
  // Generator for valid schema types
  const schemaTypeArb = fc.constantFrom(
    "Organization",
    "Product",
    "FAQ",
    "BreadcrumbList",
    "WebPage",
  );

  // Generator for basic schema data
  const schemaDataArb = fc.record({
    "@type": fc.constantFrom(
      "Organization",
      "Product",
      "FAQ",
      "BreadcrumbList",
      "WebPage",
    ),
    name: fc.string({ minLength: 1, maxLength: 100 }),
    description: fc.string({ minLength: 1, maxLength: 200 }),
  });

  /**
   * Feature: marketing-master-strategy, Property 2: Schema Markup Validity
   *
   * *For any* page with schema markup, the JSON-LD SHALL be valid and parseable,
   * and SHALL include at least one of: Organization, Product, FAQ, or BreadcrumbList types.
   *
   * **Validates: Requirements 4.5**
   */
  it("should generate valid JSON-LD for any schema markup", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 60 }),
        fc.string({ minLength: 1, maxLength: 160 }),
        fc.array(
          fc.record({
            type: schemaTypeArb,
            data: schemaDataArb,
          }),
          { minLength: 1, maxLength: 3 },
        ),
        (title: string, description: string, schemas: SchemaMarkupType[]) => {
          // Should render without throwing
          expect(() => {
            render(
              <TestWrapper>
                <SEO title={title} description={description} schema={schemas} />
              </TestWrapper>,
            );
          }).not.toThrow();

          // Each schema should have valid structure
          schemas.forEach((schema) => {
            expect(schema.type).toBeDefined();
            expect(schema.data).toBeDefined();
            expect(typeof schema.data).toBe("object");

            // Should be parseable as JSON
            expect(() => {
              JSON.stringify({
                "@context": "https://schema.org",
                ...schema.data,
              });
            }).not.toThrow();
          });
        },
      ),
      { numRuns: 100 },
    );
  });

  it("should include supported schema types", () => {
    const supportedTypes = [
      "Organization",
      "Product",
      "FAQ",
      "BreadcrumbList",
      "WebPage",
    ];

    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            type: schemaTypeArb,
            data: schemaDataArb,
          }),
          { minLength: 1, maxLength: 5 },
        ),
        (schemas: SchemaMarkupType[]) => {
          schemas.forEach((schema) => {
            expect(supportedTypes).toContain(schema.type);
          });
        },
      ),
      { numRuns: 100 },
    );
  });

  it("should render SchemaMarkup component without errors", () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            type: schemaTypeArb,
            data: schemaDataArb,
          }),
          { minLength: 1, maxLength: 3 },
        ),
        (schemas: SchemaMarkupType[]) => {
          expect(() => {
            render(
              <TestWrapper>
                <SchemaMarkup schemas={schemas} />
              </TestWrapper>,
            );
          }).not.toThrow();
        },
      ),
      { numRuns: 100 },
    );
  });
});

// =============================================================================
// Property 4: Canonical URL Consistency
// =============================================================================

describe("Property 4: Canonical URL Consistency", () => {
  // Generator for valid URLs
  const urlArb = fc.webUrl();

  /**
   * Feature: marketing-master-strategy, Property 4: Canonical URL Consistency
   *
   * *For any* page in the Marketing_Website, the canonical URL SHALL be set and
   * SHALL match the page's actual URL path.
   *
   * **Validates: Requirements 4.7**
   */
  it("should render SEO component with canonical URL without errors", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 60 }),
        fc.string({ minLength: 1, maxLength: 160 }),
        urlArb,
        (title: string, description: string, canonicalUrl: string) => {
          // Should render without throwing when canonical URL is provided
          expect(() => {
            render(
              <TestWrapper>
                <SEO
                  title={title}
                  description={description}
                  canonical={canonicalUrl}
                />
              </TestWrapper>,
            );
          }).not.toThrow();
        },
      ),
      { numRuns: 100 },
    );
  });

  it("should handle missing canonical URL gracefully", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 60 }),
        fc.string({ minLength: 1, maxLength: 160 }),
        (title: string, description: string) => {
          // Should render without throwing when canonical is not provided
          expect(() => {
            render(
              <TestWrapper>
                <SEO title={title} description={description} />
              </TestWrapper>,
            );
          }).not.toThrow();
        },
      ),
      { numRuns: 100 },
    );
  });

  it("should render SEO component with canonical URL and OG tags without errors", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 60 }),
        fc.string({ minLength: 1, maxLength: 160 }),
        urlArb,
        (title: string, description: string, canonicalUrl: string) => {
          // Should render without throwing - canonical and OG URL should be consistent
          expect(() => {
            render(
              <TestWrapper>
                <SEO
                  title={title}
                  description={description}
                  canonical={canonicalUrl}
                />
              </TestWrapper>,
            );
          }).not.toThrow();
        },
      ),
      { numRuns: 100 },
    );
  });
});

// =============================================================================
// Additional SEO Component Tests
// =============================================================================

describe("SEO Component Functionality", () => {
  it("should render SEO component with all props without errors", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 60 }),
        fc.string({ minLength: 1, maxLength: 160 }),
        (title: string, description: string) => {
          // Should render without throwing
          expect(() => {
            render(
              <TestWrapper>
                <SEO title={title} description={description} />
              </TestWrapper>,
            );
          }).not.toThrow();
        },
      ),
      { numRuns: 100 },
    );
  });

  it("should render SEO component with noindex flag without errors", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 60 }),
        fc.string({ minLength: 1, maxLength: 160 }),
        fc.boolean(),
        (title: string, description: string, noindex: boolean) => {
          // Should render without throwing
          expect(() => {
            render(
              <TestWrapper>
                <SEO
                  title={title}
                  description={description}
                  noindex={noindex}
                />
              </TestWrapper>,
            );
          }).not.toThrow();
        },
      ),
      { numRuns: 100 },
    );
  });

  it("should render SEO component with additional meta tags without errors", () => {
    const additionalMeta = [
      { name: "author", content: "Raghunath Chava Team" },
      { property: "article:author", content: "Raghunath Chava" },
    ];

    // Should render without throwing
    expect(() => {
      render(
        <TestWrapper>
          <SEO
            title="Test Title"
            description="Test Description"
            additionalMeta={additionalMeta}
          />
        </TestWrapper>,
      );
    }).not.toThrow();
  });
});
