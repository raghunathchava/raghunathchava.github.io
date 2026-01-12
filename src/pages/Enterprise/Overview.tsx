/**
 * https://raghunathchava.com
 * Enhanced Enterprise Overview Page
 *
 * Requirements: 3.3
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { Hero } from "@/components/Hero";
import { ROICalculator } from "@/components/ROICalculator";
import { ComplianceBadges } from "@/components/ComplianceBadges";
import { SocialProof } from "@/components/SocialProof";
import { CTASegment } from "@/components/CTASegment";
import { Enterprise } from "@/components/Enterprise";
import { getPageSEO } from "@/data/seo";
import { socialProofData } from "@/data/socialProof";
import type { CTAConfig } from "@/types/components";

const seo = getPageSEO("/enterprise");

export function EnterpriseOverview() {
  const contactCTAs: CTAConfig = {
    label: "Contact Sales",
    href: "/company/contact?type=enterprise",
    variant: "primary",
    trackingId: "cta_enterprise_contact",
    icpTarget: "cfo",
  };

  const demoCTA: CTAConfig = {
    label: "Request Demo",
    href: "/company/contact?type=demo",
    variant: "secondary",
    trackingId: "cta_enterprise_demo",
    icpTarget: "ceo",
  };

  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main>
        <Hero
          variant="enterprise"
          headline="Enterprise-Grade ERP Platform"
          subheadline="Security, compliance, and support for large organizations"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* ROI Calculator Above the Fold */}
            <section id="roi-calculator">
              <ROICalculator variant="full" />
            </section>

            {/* Compliance Badges */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Compliance & Certifications
              </h2>
              <ComplianceBadges layout="grid" />
            </section>

            {/* Enterprise Features */}
            <Enterprise />

            {/* Case Studies Preview */}
            {socialProofData.caseStudies &&
              socialProofData.caseStudies.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    Customer Success Stories
                  </h2>
                  <SocialProof
                    variant="case-studies"
                    caseStudies={socialProofData.caseStudies}
                  />
                </section>
              )}

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our enterprise sales team to discuss your requirements
                and get a custom quote.
              </p>
              <CTASegment
                icp={["cfo", "ceo", "coo"]}
                primaryCTA={contactCTAs}
                secondaryCTA={demoCTA}
                layout="horizontal"
              />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
