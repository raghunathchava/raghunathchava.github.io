/**
 * https://raghunathchava.com
 * Enterprise Compliance Page
 *
 * Requirements: 2.4
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { ComplianceBadges } from "@/components/ComplianceBadges";
import { getPageSEO } from "@/data/seo";

const seo = getPageSEO("/enterprise/compliance");

export function EnterpriseCompliance() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Enterprise Compliance & Certifications
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Raghunath Chava meets GDPR, HIPAA, SOC 2 Type II, and ISO 27001
              requirements. Automated compliance reporting and audit trails.
            </p>

            <div className="mb-12">
              <ComplianceBadges layout="grid" />
            </div>

            <div className="space-y-8">
              <section id="soc2">
                <h2 className="text-2xl font-bold mb-4">SOC 2 Type II</h2>
                <p className="text-muted-foreground mb-4">
                  Raghunath Chava maintains SOC 2 Type II compliance through
                  comprehensive security controls, regular audits, and
                  continuous monitoring.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Annual SOC 2 Type II audits</li>
                  <li>Security controls documentation</li>
                  <li>Access controls and monitoring</li>
                  <li>Incident response procedures</li>
                </ul>
              </section>

              <section id="gdpr">
                <h2 className="text-2xl font-bold mb-4">GDPR Compliance</h2>
                <p className="text-muted-foreground mb-4">
                  Raghunath Chava is GDPR compliant with data protection measures,
                  privacy controls, and user rights management.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Data encryption at rest and in transit</li>
                  <li>Right to access and deletion</li>
                  <li>Data processing agreements</li>
                  <li>Privacy policy and consent management</li>
                </ul>
              </section>

              <section id="hipaa">
                <h2 className="text-2xl font-bold mb-4">HIPAA Ready</h2>
                <p className="text-muted-foreground mb-4">
                  Raghunath Chava is HIPAA-ready with administrative, physical, and
                  technical safeguards for protected health information (PHI).
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Business Associate Agreements (BAA)</li>
                  <li>Access controls and audit logs</li>
                  <li>Data encryption requirements</li>
                  <li>Workforce training and policies</li>
                </ul>
              </section>

              <section id="iso27001">
                <h2 className="text-2xl font-bold mb-4">ISO 27001 Aligned</h2>
                <p className="text-muted-foreground mb-4">
                  Raghunath Chava security controls are aligned with ISO 27001
                  information security management standards.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Information security management system (ISMS)</li>
                  <li>Risk assessment and treatment</li>
                  <li>Security controls implementation</li>
                  <li>Continuous improvement processes</li>
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
