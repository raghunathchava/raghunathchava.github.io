/**
 * https://raghunathchava.com
 * Enterprise Hub Page
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
import { Link } from "react-router-dom";
import {
  Shield,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import type { CTAConfig } from "@/types/components";

const seo = getPageSEO("/enterprise");

export function EnterpriseOverview() {
  const heroConfig = {
    headline: "Enterprise-Grade ERP Platform",
    subheadline: "Security, compliance, and support for large organizations",
    primaryCTA: {
      label: "Contact Sales",
      href: "/company/contact?type=enterprise",
      variant: "primary" as const,
      trackingId: "cta_enterprise_contact",
      icpTarget: "cfo" as const,
    },
    variant: "enterprise" as const,
  };

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

  const successMetrics = [
    {
      icon: TrendingUp,
      metric: "60%",
      label: "Cost Reduction",
      description: "vs. proprietary ERP solutions",
    },
    {
      icon: Zap,
      metric: "99.99%",
      label: "Uptime SLA",
      description: "Enterprise tier availability",
    },
    {
      icon: Users,
      metric: "50+",
      label: "Enterprise Customers",
      description: "Trust Raghunath Chava for their operations",
    },
    {
      icon: Shield,
      metric: "100%",
      label: "Compliance",
      description: "SOC 2, GDPR, HIPAA, ISO 27001",
    },
  ];

  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main>
        <Hero {...heroConfig} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Why Enterprise Section */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Why Choose Raghunath Chava Enterprise?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Built for organizations that demand the highest standards of
                  security, compliance, scalability, and support. Raghunath Chava
                  Enterprise delivers enterprise-grade ERP with the flexibility
                  of open source.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Complete Control, Zero Lock-in
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Unlike proprietary ERP solutions, Raghunath Chava gives you complete
                    control over your business operations. With open-source
                    licensing, you're never locked into a vendor.
                    Deploy self-hosted or choose our managed SaaS—the choice is
                    yours.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Full source code access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Self-hosted or SaaS deployment options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No vendor lock-in, no hidden costs</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    AI-Ready for the Future
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Raghunath Chava is built from the ground up for AI agents to operate
                    autonomously. As AI becomes central to business operations,
                    Raghunath Chava ensures you're ready. Our AI agent framework enables
                    autonomous workflows, intelligent automation, and predictive
                    analytics.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Native AI agent framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Autonomous business process automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Future-proof architecture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Success Metrics */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Enterprise Success Metrics
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {successMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 text-center"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-deepBlue" />
                      </div>
                      <div className="text-3xl font-bold text-deepBlue mb-2">
                        {metric.metric}
                      </div>
                      <div className="font-semibold mb-1">{metric.label}</div>
                      <div className="text-sm text-muted-foreground">
                        {metric.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ROI Calculator */}
            <section id="roi-calculator">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Calculate Your ROI</h2>
                <p className="text-muted-foreground">
                  See how much you can save by switching to Raghunath Chava Enterprise
                </p>
              </div>
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
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Enterprise Features
              </h2>
              <Enterprise />
            </section>

            {/* Key Benefits */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Key Enterprise Benefits
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Security & Compliance
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Enterprise-grade security with SOC 2 Type II, GDPR, HIPAA,
                    and ISO 27001 compliance. Comprehensive audit logging and
                    role-based access control.
                  </p>
                  <Link
                    to="/enterprise/security"
                    className="inline-flex items-center gap-2 text-deepBlue hover:text-teal font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Scalability & Performance
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Multi-tenant architecture scales to millions of users.
                    99.99% uptime SLA with horizontal scaling and performance
                    optimization.
                  </p>
                  <Link
                    to="/enterprise/scalability"
                    className="inline-flex items-center gap-2 text-deepBlue hover:text-teal font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Comprehensive Support
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Dedicated support engineer, 15-minute response time for
                    critical issues, and 24/7 support portal access. Custom
                    training and onboarding included.
                  </p>
                  <Link
                    to="/enterprise/support"
                    className="inline-flex items-center gap-2 text-deepBlue hover:text-teal font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>

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
                  <div className="text-center mt-8">
                    <Link
                      to="/enterprise/case-studies"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-teal transition-colors"
                    >
                      View All Case Studies
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </section>
              )}

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Enterprise Operations?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our enterprise sales team to discuss your requirements,
                see a custom demo, and get a tailored quote for your
                organization.
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
