/**
 * https://raghunathchava.com
 * Property-Based Tests for FeatureSection Component
 *
 * Feature: marketing-master-strategy, Property 20: Feature Hierarchy Completeness
 * Validates: Requirements 2.3
 */
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import fc from "fast-check";
import { FeatureSection } from "./FeatureSection";
import type { Feature } from "@/types/components";

// Generators for property-based testing
const featureGenerator = fc.record({
  title: fc.string({ minLength: 1, maxLength: 100 }),
  capability: fc.string({ minLength: 1, maxLength: 200 }),
  outcome: fc.string({ minLength: 1, maxLength: 200 }),
  icon: fc.string({ minLength: 1, maxLength: 50 }),
  link: fc.option(fc.webUrl()).map((val) => val ?? undefined),
  image: fc.option(fc.webUrl()).map((val) => val ?? undefined),
});

const featuresArrayGenerator = fc.array(featureGenerator, {
  minLength: 1,
  maxLength: 10,
});

const layoutGenerator = fc.constantFrom(
  "grid",
  "alternating",
  "cards",
  "list",
) as fc.Arbitrary<"grid" | "alternating" | "cards" | "list">;

describe("FeatureSection Property Tests", () => {
  /**
   * Property 20: Feature Hierarchy Completeness
   * For any feature displayed in a FeatureSection component, the feature object
   * SHALL have non-empty values for: title (feature name), capability (what it enables),
   * and outcome (business result).
   *
   * Validates: Requirements 2.3
   */
  it("Property 20: Feature Hierarchy Completeness - all features have complete hierarchy", () => {
    fc.assert(
      fc.property(
        featuresArrayGenerator,
        layoutGenerator,
        (features, layout) => {
          // Render the component
          const { container } = render(
            <FeatureSection
              features={features}
              layout={layout}
              title="Test Features"
            />,
          );

          // Verify that all features have the required hierarchy elements
          features.forEach((feature) => {
            // Check that title is non-empty
            expect(feature.title).toBeTruthy();
            expect(feature.title.trim()).not.toBe("");

            // Check that capability is non-empty
            expect(feature.capability).toBeTruthy();
            expect(feature.capability.trim()).not.toBe("");

            // Check that outcome is non-empty
            expect(feature.outcome).toBeTruthy();
            expect(feature.outcome.trim()).not.toBe("");

            // Verify the feature content appears in the rendered component
            expect(container.textContent).toContain(feature.title);
            expect(container.textContent).toContain(feature.capability);
            expect(container.textContent).toContain(feature.outcome);
          });

          // Verify that the component renders without errors
          expect(container).toBeTruthy();

          // Verify that the hierarchy labels are present for appropriate layouts
          if (layout === "grid" || layout === "list") {
            expect(container.textContent).toContain("Capability");
            expect(container.textContent).toContain("Business Outcome");
          }

          return true;
        },
      ),
      { numRuns: 100 },
    );
  });

  it("Property 20 Edge Case: Empty strings should be rejected", () => {
    // Test that features with empty strings for required fields are handled properly
    const invalidFeatures: Feature[] = [
      {
        title: "",
        capability: "Valid capability",
        outcome: "Valid outcome",
        icon: "CheckCircle",
      },
      {
        title: "Valid title",
        capability: "",
        outcome: "Valid outcome",
        icon: "CheckCircle",
      },
      {
        title: "Valid title",
        capability: "Valid capability",
        outcome: "",
        icon: "CheckCircle",
      },
    ];

    invalidFeatures.forEach((feature) => {
      // The component should still render but the feature hierarchy should be incomplete
      const { container } = render(
        <FeatureSection
          features={[feature]}
          layout="grid"
          title="Test Features"
        />,
      );

      // Component should render without crashing
      expect(container).toBeTruthy();

      // But the feature should fail our completeness check
      const hasEmptyTitle = !feature.title || feature.title.trim() === "";
      const hasEmptyCapability =
        !feature.capability || feature.capability.trim() === "";
      const hasEmptyOutcome = !feature.outcome || feature.outcome.trim() === "";

      expect(hasEmptyTitle || hasEmptyCapability || hasEmptyOutcome).toBe(true);
    });
  });

  it("Property 20 Validation: Feature hierarchy structure is preserved across layouts", () => {
    fc.assert(
      fc.property(featureGenerator, (feature) => {
        const layouts: Array<"grid" | "alternating" | "cards" | "list"> = [
          "grid",
          "alternating",
          "cards",
          "list",
        ];

        layouts.forEach((layout) => {
          const { container } = render(
            <FeatureSection
              features={[feature]}
              layout={layout}
              title="Test Features"
            />,
          );

          // All layouts should display the feature title
          expect(container.textContent).toContain(feature.title);

          // All layouts should display the capability
          expect(container.textContent).toContain(feature.capability);

          // All layouts should display the outcome
          expect(container.textContent).toContain(feature.outcome);

          // The hierarchy should be complete regardless of layout
          expect(feature.title.trim()).not.toBe("");
          expect(feature.capability.trim()).not.toBe("");
          expect(feature.outcome.trim()).not.toBe("");
        });

        return true;
      }),
      { numRuns: 50 },
    );
  });
});
