/**
 * https://raghunathchava.com
 * Enhanced Enterprise Component with Compliance Badges and ROI Calculator Link
 *
 * Requirements: 2.3
 */
import { useId } from "react";
import { Lock, UserCheck, FileText, Key, Globe2, Database } from "lucide-react";
import { ComplianceBadges } from "./ComplianceBadges";
import { CTASegment } from "./CTASegment";
import type { CTAConfig } from "@/types/components";

const enterpriseFeatures = [
  {
    icon: Lock,
    title: "SOC 2 Aligned",
    description:
      "Security controls aligned with SOC 2 Type II compliance framework",
  },
  {
    icon: UserCheck,
    title: "Advanced RBAC",
    description:
      "Role-based access control with granular permissions and audit trails",
  },
  {
    icon: FileText,
    title: "Immutable Audit Logs",
    description:
      "Comprehensive audit trails for all sensitive operations and data access",
  },
  {
    icon: Key,
    title: "SSO Integration",
    description:
      "SAML/OIDC single sign-on with Azure AD, Google Workspace, Okta",
  },
  {
    icon: Globe2,
    title: "Data Residency",
    description: "Region-based deployment and tenant isolation for compliance",
  },
  {
    icon: Database,
    title: "Backup & Recovery",
    description:
      "Automated backups with point-in-time recovery and disaster recovery",
  },
];

export function Enterprise() {
  const enterpriseSectionId = useId();
  const roiCTA: CTAConfig = {
    label: "Calculate Your ROI",
    href: "/enterprise#roi-calculator",
    variant: "primary",
    trackingId: "cta_enterprise_roi",
    icpTarget: "cfo",
  };

  return (
    <section
      id={enterpriseSectionId}
      className="py-24 bg-background/20 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
            Enterprise-Ready
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Built with security and compliance in mind
          </p>
          <div className="flex justify-center">
            <CTASegment
              icp={["cfo", "ceo", "coo"]}
              primaryCTA={roiCTA}
              layout="horizontal"
            />
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Compliance & Certifications
          </h3>
          <ComplianceBadges layout="grid" />
        </div>

        {/* SLA Metrics */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Service Level Agreements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent mb-2">
                99.99%
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                Uptime SLA
              </div>
              <div className="text-xs text-muted-foreground">
                Enterprise tier
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent mb-2">
                15 min
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                Response Time
              </div>
              <div className="text-xs text-muted-foreground">
                Critical issues
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                Support
              </div>
              <div className="text-xs text-muted-foreground">
                Enterprise tier
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Features */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Enterprise Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }} // Dynamic delay - must use inline style
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-deepBlue" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Support Tiers */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Support Tiers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg p-6">
              <h4 className="font-bold mb-2">Community</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Free tier support
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Community forums</li>
                <li>• Documentation</li>
                <li>• GitHub issues</li>
              </ul>
            </div>
            <div className="border border-deepBlue rounded-lg p-6 bg-deepBlue/5">
              <h4 className="font-bold mb-2">Professional</h4>
              <p className="text-sm text-muted-foreground mb-4">$299/month</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Priority email support</li>
                <li>• 99.9% uptime SLA</li>
                <li>• Business hours response</li>
              </ul>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h4 className="font-bold mb-2">Enterprise</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Custom pricing
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dedicated support engineer</li>
                <li>• 99.99% uptime SLA</li>
                <li>• 15-minute response time</li>
                <li>• 24/7 support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
