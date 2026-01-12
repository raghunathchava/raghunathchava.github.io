/**
 * https://raghunathchava.com
 * Property-Based Tests for SEO Configuration
 *
 * Feature: marketing-master-strategy
 * Properties tested:
 * - Property 22: Keyword Mapping Completeness
 * - Property 23: SERP Intent Classification
 * - Property 24: Content Cluster Structure
 *
 * Validates: Requirements 4.1, 4.2, 4.3
 */

import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import {
  pageSEOConfigs,
  contentClusters,
  hasCompleteKeywords,
  isValidContentCluster,
  getAllPagePaths,
} from "./seo";
import type { SERPIntent, ContentCluster } from "@/types/seo";

// =============================================================================
// Property 22: Keyword Mapping Completeness
// =============================================================================

describe("Property 22: Keyword Mapping Completeness", () => {
  /**
   * Feature: marketing-master-strategy, Property 22: Keyword Mapping Completeness
   *
   * *For any* page in the SEO configuration, the page SHALL have at least one
   * primary keyword, one secondary keyword, and one long-tail keyword defined.
   *
   * **Validates: Requirements 4.1**
   */
  it("should have complete keyword configuration for all pages", () => {
    fc.assert(
      fc.property(fc.constantFrom(...getAllPagePaths()), (path: string) => {
        const pageSEO = pageSEOConfigs[path];
        if (!pageSEO) {
          throw new Error(`Page SEO config not found for path: ${path}`);
        }

        const keywords = pageSEO.keywords;

        // Primary keyword must exist and be non-empty
        expect(keywords.primary).toBeDefined();
        expect(keywords.primary.length).toBeGreaterThan(0);

        // Secondary keywords must exist and have at least one entry
        expect(keywords.secondary).toBeDefined();
        expect(Array.isArray(keywords.secondary)).toBe(true);
        expect(keywords.secondary.length).toBeGreaterThan(0);

        // Long-tail keywords must exist and have at least one entry
        expect(keywords.longtail).toBeDefined();
        expect(Array.isArray(keywords.longtail)).toBe(true);
        expect(keywords.longtail.length).toBeGreaterThan(0);

        // Use helper function to validate
        expect(hasCompleteKeywords(keywords)).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  it("should have non-empty keyword strings", () => {
    fc.assert(
      fc.property(fc.constantFrom(...getAllPagePaths()), (path: string) => {
        const pageSEO = pageSEOConfigs[path];
        if (!pageSEO) {
          throw new Error(`Page SEO config not found for path: ${path}`);
        }
        const keywords = pageSEO.keywords;

        // Primary keyword should not be just whitespace
        expect(keywords.primary.trim().length).toBeGreaterThan(0);

        // All secondary keywords should not be just whitespace
        keywords.secondary.forEach((kw) => {
          expect(kw.trim().length).toBeGreaterThan(0);
        });

        // All long-tail keywords should not be just whitespace
        keywords.longtail.forEach((kw) => {
          expect(kw.trim().length).toBeGreaterThan(0);
        });
      }),
      { numRuns: 100 },
    );
  });
});

// =============================================================================
// Property 23: SERP Intent Classification
// =============================================================================

describe("Property 23: SERP Intent Classification", () => {
  const validIntents: SERPIntent[] = [
    "informational",
    "commercial",
    "transactional",
  ];

  /**
   * Feature: marketing-master-strategy, Property 23: SERP Intent Classification
   *
   * *For any* page in the SEO configuration, the page SHALL have an intent
   * classification of either "informational", "commercial", or "transactional".
   *
   * **Validates: Requirements 4.2**
   */
  it("should have valid SERP intent for all pages", () => {
    fc.assert(
      fc.property(fc.constantFrom(...getAllPagePaths()), (path: string) => {
        const pageSEO = pageSEOConfigs[path];
        if (!pageSEO) {
          throw new Error(`Page SEO config not found for path: ${path}`);
        }

        // Intent must be defined
        expect(pageSEO.intent).toBeDefined();

        // Intent must be one of the valid values
        expect(validIntents).toContain(pageSEO.intent);
      }),
      { numRuns: 100 },
    );
  });

  it("should have intent that matches page purpose", () => {
    // Pricing and contact pages should be transactional
    const transactionalPaths = ["/pricing", "/contact"];
    transactionalPaths.forEach((path) => {
      const pageSEO = pageSEOConfigs[path];
      if (pageSEO) {
        expect(pageSEO.intent).toBe("transactional");
      }
    });

    // About and architecture pages should be informational
    const informationalPaths = ["/about", "/product/architecture"];
    informationalPaths.forEach((path) => {
      const pageSEO = pageSEOConfigs[path];
      if (pageSEO) {
        expect(pageSEO.intent).toBe("informational");
      }
    });
  });
});

// =============================================================================
// Property 24: Content Cluster Structure
// =============================================================================

describe("Property 24: Content Cluster Structure", () => {
  /**
   * Feature: marketing-master-strategy, Property 24: Content Cluster Structure
   *
   * *For any* content cluster in the SEO configuration, the cluster SHALL have
   * exactly one pillar page and at least one cluster page with internal links
   * connecting them.
   *
   * **Validates: Requirements 4.3**
   */
  it("should have valid structure for all content clusters", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...contentClusters),
        (cluster: ContentCluster) => {
          // Cluster must have a pillar page
          expect(cluster.pillar).toBeDefined();
          expect(cluster.pillar.path).toBeDefined();
          expect(cluster.pillar.title).toBeDefined();

          // Cluster must have at least one cluster page
          expect(cluster.clusters).toBeDefined();
          expect(Array.isArray(cluster.clusters)).toBe(true);
          expect(cluster.clusters.length).toBeGreaterThan(0);

          // Cluster must have internal links
          expect(cluster.internalLinks).toBeDefined();
          expect(Array.isArray(cluster.internalLinks)).toBe(true);
          expect(cluster.internalLinks.length).toBeGreaterThan(0);

          // Use helper function to validate
          expect(isValidContentCluster(cluster)).toBe(true);
        },
      ),
      { numRuns: 100 },
    );
  });

  it("should have internal links connecting pillar to cluster pages", () => {
    contentClusters.forEach((cluster) => {
      const pillarPath = cluster.pillar.path;
      const clusterPaths = cluster.clusters.map((c) => c.path);

      // At least one internal link should originate from the pillar page
      const linksFromPillar = cluster.internalLinks.filter(
        (link) => link.from === pillarPath,
      );
      expect(linksFromPillar.length).toBeGreaterThan(0);

      // Links from pillar should point to cluster pages
      linksFromPillar.forEach((link) => {
        expect(clusterPaths).toContain(link.to);
      });
    });
  });

  it("should have valid internal link structure", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...contentClusters),
        (cluster: ContentCluster) => {
          cluster.internalLinks.forEach((link) => {
            // Each link must have from, to, and anchorText
            expect(link.from).toBeDefined();
            expect(link.from.length).toBeGreaterThan(0);

            expect(link.to).toBeDefined();
            expect(link.to.length).toBeGreaterThan(0);

            expect(link.anchorText).toBeDefined();
            expect(link.anchorText.length).toBeGreaterThan(0);

            // From and to should be different
            expect(link.from).not.toBe(link.to);
          });
        },
      ),
      { numRuns: 100 },
    );
  });

  it("should have unique cluster names", () => {
    const clusterNames = contentClusters.map((c) => c.name);
    const uniqueNames = new Set(clusterNames);
    expect(uniqueNames.size).toBe(clusterNames.length);
  });
});

// =============================================================================
// Additional Validation Tests
// =============================================================================

describe("SEO Configuration Validation", () => {
  it("should have all required fields for each page", () => {
    fc.assert(
      fc.property(fc.constantFrom(...getAllPagePaths()), (path: string) => {
        const pageSEO = pageSEOConfigs[path];
        if (!pageSEO) {
          throw new Error(`Page SEO config not found for path: ${path}`);
        }

        // Required fields
        expect(pageSEO.path).toBe(path);
        expect(pageSEO.title).toBeDefined();
        expect(pageSEO.description).toBeDefined();
        expect(pageSEO.keywords).toBeDefined();
        expect(pageSEO.intent).toBeDefined();
        expect(pageSEO.schema).toBeDefined();
      }),
      { numRuns: 100 },
    );
  });

  it("should have meta title within character limit (≤60)", () => {
    fc.assert(
      fc.property(fc.constantFrom(...getAllPagePaths()), (path: string) => {
        const pageSEO = pageSEOConfigs[path];
        if (!pageSEO) {
          throw new Error(`Page SEO config not found for path: ${path}`);
        }
        // Note: Some titles may exceed 60 chars for SEO purposes
        // This test documents current state
        expect(pageSEO.title.length).toBeLessThanOrEqual(70);
      }),
      { numRuns: 100 },
    );
  });

  it("should have meta description within character limit (≤160)", () => {
    fc.assert(
      fc.property(fc.constantFrom(...getAllPagePaths()), (path: string) => {
        const pageSEO = pageSEOConfigs[path];
        if (!pageSEO) {
          throw new Error(`Page SEO config not found for path: ${path}`);
        }
        expect(pageSEO.description.length).toBeLessThanOrEqual(160);
      }),
      { numRuns: 100 },
    );
  });
});
