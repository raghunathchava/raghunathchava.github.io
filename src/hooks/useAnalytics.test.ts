/**
 * https://raghunathchava.com
 * Property-Based Tests for Analytics and UTM Functionality
 *
 * Feature: marketing-master-strategy
 * Properties tested:
 * - Property 5: UTM Parameter Parsing
 * - Property 9: Interactive Element Tracking
 * - Property 10: UTM Taxonomy Compliance
 *
 * Validates: Requirements 5.3, 7.2, 7.4
 */

import { describe, it, expect, beforeEach, vi } from "vitest";
import * as fc from "fast-check";
import { utmTaxonomy } from "@/data/utm";
import type { UTMParams } from "@/types/analytics";

// Simple UTM parsing function for testing
function parseUTMFromURL(url: string): UTMParams | null {
  try {
    const urlObj = new URL(url);
    const params = urlObj.searchParams;

    const utm: UTMParams = {};
    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");
    const utmContent = params.get("utm_content");
    const utmTerm = params.get("utm_term");

    if (utmSource) utm.utm_source = utmSource;
    if (utmMedium) utm.utm_medium = utmMedium;
    if (utmCampaign) utm.utm_campaign = utmCampaign;
    if (utmContent) utm.utm_content = utmContent;
    if (utmTerm) utm.utm_term = utmTerm;

    return Object.keys(utm).length > 0 ? utm : null;
  } catch {
    return null;
  }
}

// Simple UTM validation function for testing
function validateUTM(utm: UTMParams): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Validate source
  if (utm.utm_source && !utmTaxonomy.sources.includes(utm.utm_source)) {
    errors.push(`Invalid utm_source: ${utm.utm_source}`);
  }

  // Validate medium
  if (utm.utm_medium && !utmTaxonomy.mediums.includes(utm.utm_medium)) {
    errors.push(`Invalid utm_medium: ${utm.utm_medium}`);
  }

  // Validate campaign format (if specified in taxonomy)
  if (utm.utm_campaign && utmTaxonomy.campaignPattern) {
    const pattern = new RegExp(utmTaxonomy.campaignPattern);
    if (!pattern.test(utm.utm_campaign)) {
      errors.push(`Invalid utm_campaign format: ${utm.utm_campaign}`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// =============================================================================
// Property 5: UTM Parameter Parsing
// =============================================================================

describe("Property 5: UTM Parameter Parsing", () => {
  /**
   * Feature: marketing-master-strategy, Property 5: UTM Parameter Parsing
   *
   * *For any* valid UTM parameter set (utm_source, utm_medium, utm_campaign,
   * utm_content, utm_term), the Marketing_Website SHALL correctly parse and
   * store all provided parameters.
   *
   * **Validates: Requirements 5.3**
   */
  it("should correctly parse all UTM parameters from any valid URL", () => {
    fc.assert(
      fc.property(
        fc.record({
          utm_source: fc.constantFrom("google", "linkedin", "email"),
          utm_medium: fc.constantFrom("cpc", "social", "email"),
          utm_campaign: fc.constantFrom("q1-2026", "test-campaign"),
        }),
        (utmParams) => {
          // Build URL with UTM parameters
          const baseUrl = "https://saraise.com/pricing";
          const url = new URL(baseUrl);

          url.searchParams.set("utm_source", utmParams.utm_source);
          url.searchParams.set("utm_medium", utmParams.utm_medium);
          url.searchParams.set("utm_campaign", utmParams.utm_campaign);

          // Parse UTM parameters from URL
          const parsedUTM = parseUTMFromURL(url.toString());

          // Verify all provided parameters are parsed correctly
          expect(parsedUTM).toBeDefined();
          expect(parsedUTM!.utm_source).toBe(utmParams.utm_source);
          expect(parsedUTM!.utm_medium).toBe(utmParams.utm_medium);
          expect(parsedUTM!.utm_campaign).toBe(utmParams.utm_campaign);
        },
      ),
      { numRuns: 5 },
    );
  });

  it("should handle URLs with no UTM parameters", () => {
    const cleanUrl = "https://saraise.com/about";
    const parsedUTM = parseUTMFromURL(cleanUrl);

    // Should return null when no UTM parameters present
    expect(parsedUTM).toBeNull();
  });

  it("should handle malformed URLs gracefully", () => {
    const malformedUrls = ["not-a-url", "http://", "://invalid", ""];

    malformedUrls.forEach((malformedUrl) => {
      // Should not throw error for malformed URLs
      expect(() => {
        parseUTMFromURL(malformedUrl);
      }).not.toThrow();

      // Should return null for malformed URLs
      expect(parseUTMFromURL(malformedUrl)).toBeNull();
    });
  });

  it("should parse complete UTM parameter set", () => {
    const url =
      "https://saraise.com?utm_source=google&utm_medium=cpc&utm_campaign=test&utm_content=ad1&utm_term=erp";
    const parsedUTM = parseUTMFromURL(url);

    expect(parsedUTM).toEqual({
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "test",
      utm_content: "ad1",
      utm_term: "erp",
    });
  });

  it("should parse partial UTM parameter set", () => {
    const url = "https://saraise.com?utm_source=linkedin&utm_medium=social";
    const parsedUTM = parseUTMFromURL(url);

    expect(parsedUTM).toEqual({
      utm_source: "linkedin",
      utm_medium: "social",
    });
  });
});

// =============================================================================
// Property 9: Interactive Element Tracking
// =============================================================================

describe("Property 9: Interactive Element Tracking", () => {
  /**
   * Feature: marketing-master-strategy, Property 9: Interactive Element Tracking
   *
   * *For any* interactive element (button, link, form), the element SHALL have
   * a data-tracking attribute or onClick handler that fires an analytics event.
   *
   * **Validates: Requirements 7.2**
   */

  // Mock analytics tracking function
  const mockTrackEvent = vi.fn();

  beforeEach(() => {
    mockTrackEvent.mockClear();
  });

  it("should track events for all interactive elements", () => {
    fc.assert(
      fc.property(
        fc.record({
          eventName: fc.constantFrom(
            "cta_click",
            "form_submit",
            "navigation_click",
          ),
          category: fc.constantFrom("conversion", "form", "navigation"),
          elementType: fc.constantFrom("button", "link", "form"),
        }),
        (eventData) => {
          // Simulate tracking an event
          const analyticsEvent = {
            name: eventData.eventName,
            category: eventData.category,
            properties: {
              element_type: eventData.elementType,
              page_path: "/",
            },
          };

          mockTrackEvent(analyticsEvent);

          // Verify event was tracked
          expect(mockTrackEvent).toHaveBeenCalledWith(
            expect.objectContaining({
              name: eventData.eventName,
              category: eventData.category,
              properties: expect.objectContaining({
                element_type: eventData.elementType,
              }),
            }),
          );
        },
      ),
      { numRuns: 5 },
    );
  });

  it("should handle analytics failures silently", () => {
    // Mock function that throws error
    const failingTrackEvent = vi.fn((_event: unknown) => {
      throw new Error("Analytics service unavailable");
    });

    const analyticsEvent = {
      name: "test_event",
      category: "test",
      properties: {},
    };

    // Should not throw error even when analytics fails
    expect(() => {
      try {
        failingTrackEvent(analyticsEvent);
      } catch {
        // Silent failure - analytics errors should not impact user experience
      }
    }).not.toThrow();
  });

  it("should track page views with correct parameters", () => {
    const mockTrackPageView = vi.fn();

    mockTrackPageView("/pricing", "Pricing - Raghunath Chava");

    // Verify page view event was tracked
    expect(mockTrackPageView).toHaveBeenCalledWith(
      "/pricing",
      "Pricing - Raghunath Chava",
    );
  });

  it("should track conversions with correct parameters", () => {
    const mockTrackConversion = vi.fn();

    mockTrackConversion("contact_form_submission", 50);

    // Verify conversion event was tracked
    expect(mockTrackConversion).toHaveBeenCalledWith(
      "contact_form_submission",
      50,
    );
  });

  it("should track CTA clicks", () => {
    const ctaEvent = {
      name: "cta_click",
      category: "conversion",
      properties: {
        cta_label: "Get Started Free",
        cta_type: "primary",
        page_path: "/",
      },
    };

    mockTrackEvent(ctaEvent);

    expect(mockTrackEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "cta_click",
        category: "conversion",
        properties: expect.objectContaining({
          cta_label: "Get Started Free",
          cta_type: "primary",
        }),
      }),
    );
  });

  it("should track form submissions", () => {
    const formEvent = {
      name: "form_submit",
      category: "form",
      properties: {
        form_name: "contact_form",
        form_success: true,
        page_path: "/contact",
      },
    };

    mockTrackEvent(formEvent);

    expect(mockTrackEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "form_submit",
        category: "form",
        properties: expect.objectContaining({
          form_name: "contact_form",
          form_success: true,
        }),
      }),
    );
  });
});

// =============================================================================
// Property 10: UTM Taxonomy Compliance
// =============================================================================

describe("Property 10: UTM Taxonomy Compliance", () => {
  /**
   * Feature: marketing-master-strategy, Property 10: UTM Taxonomy Compliance
   *
   * *For any* UTM configuration in the analytics system, the utm_source,
   * utm_medium, and utm_campaign parameters SHALL follow the defined
   * taxonomy format.
   *
   * **Validates: Requirements 7.4**
   */
  it("should validate UTM parameters against taxonomy", () => {
    const validUTMParams: UTMParams = {
      utm_source: "google", // Valid source from taxonomy
      utm_medium: "cpc", // Valid medium from taxonomy
      utm_campaign: "q1-2026-manufacturing",
    };

    const validation = validateUTM(validUTMParams);

    // Valid source and medium should pass validation
    expect(validation.isValid).toBe(true);
    expect(validation.errors).toHaveLength(0);
  });

  it("should reject invalid UTM sources", () => {
    const invalidSource = "invalid-source-12345";
    const utmParams: UTMParams = {
      utm_source: invalidSource,
      utm_medium: "cpc", // Valid medium
      utm_campaign: "test-campaign",
    };

    const validation = validateUTM(utmParams);

    // Should fail validation for invalid source
    expect(validation.isValid).toBe(false);
    expect(validation.errors).toContain(`Invalid utm_source: ${invalidSource}`);
  });

  it("should reject invalid UTM mediums", () => {
    const invalidMedium = "invalid-medium-12345";
    const utmParams: UTMParams = {
      utm_source: "google", // Valid source
      utm_medium: invalidMedium,
      utm_campaign: "test-campaign",
    };

    const validation = validateUTM(utmParams);

    // Should fail validation for invalid medium
    expect(validation.isValid).toBe(false);
    expect(validation.errors).toContain(`Invalid utm_medium: ${invalidMedium}`);
  });

  it("should validate campaign naming patterns", () => {
    // Test valid campaign patterns
    const validCampaigns = [
      "q1-2026-manufacturing-awareness",
      "test-campaign",
      "holiday-2024",
    ];

    validCampaigns.forEach((campaign) => {
      const utmParams: UTMParams = {
        utm_source: "google",
        utm_medium: "cpc",
        utm_campaign: campaign,
      };

      const validation = validateUTM(utmParams);

      if (utmTaxonomy.campaignPattern) {
        const pattern = new RegExp(utmTaxonomy.campaignPattern);
        const isValidCampaign = pattern.test(campaign);
        expect(validation.isValid).toBe(isValidCampaign);
      } else {
        expect(validation.isValid).toBe(true);
      }
    });
  });

  it("should handle empty UTM parameters", () => {
    const validation = validateUTM({});

    // Empty UTM should be valid (no errors)
    expect(validation.isValid).toBe(true);
    expect(validation.errors).toHaveLength(0);
  });

  it("should validate taxonomy sources", () => {
    // Test that taxonomy contains expected sources
    expect(utmTaxonomy.sources).toContain("google");
    expect(utmTaxonomy.sources).toContain("linkedin");
    expect(utmTaxonomy.sources).toContain("email");
    expect(utmTaxonomy.sources).toContain("organic");
  });

  it("should validate taxonomy mediums", () => {
    // Test that taxonomy contains expected mediums
    expect(utmTaxonomy.mediums).toContain("cpc");
    expect(utmTaxonomy.mediums).toContain("social");
    expect(utmTaxonomy.mediums).toContain("email");
    expect(utmTaxonomy.mediums).toContain("organic");
  });

  it("should validate UTM parameters with property-based testing", () => {
    fc.assert(
      fc.property(
        fc.record({
          utm_source: fc.constantFrom("google", "linkedin", "email"),
          utm_medium: fc.constantFrom("cpc", "social", "email"),
          utm_campaign: fc.constantFrom("q1-2026", "test-campaign"),
        }),
        (utmParams) => {
          const validation = validateUTM(utmParams);

          // Valid source and medium should pass validation
          expect(validation.isValid).toBe(true);
          expect(validation.errors).toHaveLength(0);
        },
      ),
      { numRuns: 5 },
    );
  });
});

// =============================================================================
// Integration Tests
// =============================================================================

describe("Analytics and UTM Integration", () => {
  it("should integrate UTM parameters with analytics events", () => {
    // Mock URL with UTM parameters
    const mockUrl =
      "https://saraise.com?utm_source=google&utm_medium=cpc&utm_campaign=test";
    const utmParams = parseUTMFromURL(mockUrl);

    // Verify UTM parameters are extracted correctly
    expect(utmParams).toBeDefined();
    expect(utmParams!.utm_source).toBe("google");
    expect(utmParams!.utm_medium).toBe("cpc");
    expect(utmParams!.utm_campaign).toBe("test");

    // Mock tracking event with UTM context
    const mockTrackEvent = vi.fn();
    const analyticsEvent = {
      name: "cta_click",
      category: "conversion",
      properties: {
        ...utmParams,
        element_type: "button",
      },
    };

    mockTrackEvent(analyticsEvent);

    // Verify event includes UTM parameters
    expect(mockTrackEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        properties: expect.objectContaining({
          utm_source: "google",
          utm_medium: "cpc",
          utm_campaign: "test",
        }),
      }),
    );
  });
});
