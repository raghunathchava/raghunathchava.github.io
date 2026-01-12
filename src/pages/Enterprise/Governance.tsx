/**
 * https://raghunathchava.com
 * Enterprise Governance Page
 *
 * Requirements: 2.4
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { getPageSEO } from "@/data/seo";
import { Shield, UserCheck, FileText, AlertTriangle } from "lucide-react";

const seo = getPageSEO("/enterprise/governance");

const governanceFeatures = [
  {
    icon: UserCheck,
    title: "Role-Based Access Control (RBAC)",
    description:
      "Granular permissions with role hierarchies. Define custom roles with specific permissions for different business functions.",
  },
  {
    icon: Shield,
    title: "Separation of Duties (SoD)",
    description:
      "Enforce SoD controls to prevent conflicts of interest. Define incompatible roles that cannot be assigned to the same user.",
  },
  {
    icon: FileText,
    title: "Immutable Audit Logs",
    description:
      "Comprehensive audit trails for all sensitive operations. Logs are tamper-proof and provide complete audit history.",
  },
  {
    icon: AlertTriangle,
    title: "Policy Enforcement",
    description:
      "Automated policy enforcement with configurable rules. Real-time monitoring and alerts for policy violations.",
  },
];

export function EnterpriseGovernance() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Enterprise Governance & Controls
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive governance controls including RBAC, SoD, audit
              logging, and policy enforcement.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {governanceFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="p-2 bg-deepBlue/10 rounded-lg">
                        <Icon className="w-6 h-6 text-deepBlue" />
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  Separation of Duties (SoD)
                </h2>
                <p className="text-muted-foreground mb-4">
                  SoD controls prevent conflicts of interest by ensuring that
                  critical business functions are not controlled by a single
                  individual.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Define incompatible role combinations</li>
                  <li>Automated SoD violation detection</li>
                  <li>Approval workflows for SoD exceptions</li>
                  <li>Regular SoD compliance reporting</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Audit Logging</h2>
                <p className="text-muted-foreground mb-4">
                  Comprehensive audit trails capture all sensitive operations
                  with immutable logs that cannot be modified or deleted.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>User authentication and authorization events</li>
                  <li>Data access and modification logs</li>
                  <li>Configuration changes</li>
                  <li>Export and download activities</li>
                  <li>Retention policies and archival</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Policy Management</h2>
                <p className="text-muted-foreground mb-4">
                  Define and enforce organizational policies with automated
                  monitoring and compliance reporting.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Password policies and complexity requirements</li>
                  <li>Session timeout and idle timeout policies</li>
                  <li>Data retention and deletion policies</li>
                  <li>Access review and recertification schedules</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
