/**
 * https://raghunathchava.com
 * Enhanced Pricing Page with ROI Calculator
 *
 * Requirements: 3.2
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { Pricing as PricingComponent } from "@/components/Pricing";
import { ROICalculator } from "@/components/ROICalculator";
import { getPageSEO } from "@/data/seo";

const seo = getPageSEO("/pricing");

export function Pricing() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto">
            {/* ROI Calculator Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Calculate Your ROI</h2>
                <p className="text-muted-foreground">
                  See how much you can save by switching to Raghunath Chava
                </p>
              </div>
              <ROICalculator variant="full" />
            </div>

            {/* Pricing Component */}
            <PricingComponent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
