/**
 * https://raghunathchava.com
 */
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { CheckCircle, FileText, Shield, Lock } from "lucide-react";

const complianceFrameworks = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    description:
      "Security controls aligned with SOC 2 framework for service organizations",
    status: "Aligned",
  },
  {
    icon: FileText,
    title: "GDPR",
    description:
      "General Data Protection Regulation compliance for EU data subjects",
    status: "Compliant",
  },
  {
    icon: Lock,
    title: "ISO 27001",
    description: "Information security management system best practices",
    status: "Aligned",
  },
  {
    icon: CheckCircle,
    title: "OWASP Top 10",
    description: "Protection against common web application security risks",
    status: "Implemented",
  },
];

export function Compliance() {
  return (
    <div className="min-h-screen bg-background/20 backdrop-blur-sm text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
            Compliance
          </h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: January 2025
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Compliance Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              BuildFlow Consultancy Private Limited is committed to maintaining
              compliance with applicable laws, regulations, and industry
              standards. Raghunath Chava is designed with compliance requirements in
              mind, enabling organizations to meet their regulatory obligations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              2. Compliance Frameworks
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {complianceFrameworks.map((framework) => {
                const Icon = framework.icon;
                return (
                  <div
                    key={framework.title}
                    className="bg-card border border-border rounded-lg p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-deepBlue" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold">
                            {framework.title}
                          </h3>
                          <span className="text-xs px-2 py-1 bg-green/10 text-green rounded-full font-semibold">
                            {framework.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {framework.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              3. Data Protection Compliance
            </h2>
            <h3 className="text-xl font-semibold mb-3">
              3.1 GDPR (General Data Protection Regulation)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Raghunath Chava supports GDPR compliance through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>
                <strong>Data Minimization:</strong> Collect only necessary data
              </li>
              <li>
                <strong>Purpose Limitation:</strong> Use data only for specified
                purposes
              </li>
              <li>
                <strong>Data Subject Rights:</strong> Support for access,
                rectification, erasure, and portability requests
              </li>
              <li>
                <strong>Data Processing Records:</strong> Audit logs for data
                processing activities
              </li>
              <li>
                <strong>Privacy by Design:</strong> Built-in privacy controls
                and default settings
              </li>
              <li>
                <strong>Data Breach Notification:</strong> Mechanisms for timely
                breach reporting
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              3.2 CCPA (California Consumer Privacy Act)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Raghunath Chava supports CCPA compliance through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of sale of personal information</li>
              <li>Non-discrimination for exercising privacy rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Security Compliance</h2>
            <h3 className="text-xl font-semibold mb-3">4.1 SOC 2 Type II</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Raghunath Chava implements security controls aligned with SOC 2 Type II
              framework:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>
                <strong>Security:</strong> Protection against unauthorized
                access
              </li>
              <li>
                <strong>Availability:</strong> System availability and
                performance monitoring
              </li>
              <li>
                <strong>Processing Integrity:</strong> Complete, valid,
                accurate, and timely processing
              </li>
              <li>
                <strong>Confidentiality:</strong> Protection of confidential
                information
              </li>
              <li>
                <strong>Privacy:</strong> Collection, use, retention, and
                disposal of personal information
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 ISO 27001</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Raghunath Chava follows ISO 27001 information security management
              principles:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Information security policies and procedures</li>
              <li>Risk assessment and treatment</li>
              <li>Access control and user management</li>
              <li>Cryptography and key management</li>
              <li>Incident management and business continuity</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Financial Compliance</h2>
            <h3 className="text-xl font-semibold mb-3">
              5.1 Accounting Standards
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Raghunath Chava supports compliance with accounting standards including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Generally Accepted Accounting Principles (GAAP)</li>
              <li>International Financial Reporting Standards (IFRS)</li>
              <li>Indian Accounting Standards (Ind AS)</li>
              <li>Tax compliance (GST, VAT, Income Tax)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              5.2 Audit Trail Requirements
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Raghunath Chava provides comprehensive audit trails for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>All financial transactions</li>
              <li>User access and authorization changes</li>
              <li>Data modifications and deletions</li>
              <li>System configuration changes</li>
              <li>Compliance with SOX, PCI-DSS, and other regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              6. Industry-Specific Compliance
            </h2>
            <h3 className="text-xl font-semibold mb-3">
              6.1 Healthcare (HIPAA)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For healthcare organizations, Raghunath Chava can be configured to support
              HIPAA compliance:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Protected Health Information (PHI) safeguards</li>
              <li>Access controls and audit logs</li>
              <li>Encryption of PHI in transit and at rest</li>
              <li>Business Associate Agreement (BAA) support</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              6.2 Financial Services
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For financial services organizations, Raghunath Chava supports:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>PCI-DSS compliance for payment card data</li>
              <li>SOX compliance for financial reporting</li>
              <li>Basel III capital adequacy requirements</li>
              <li>Anti-money laundering (AML) controls</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              7. Self-Hosted Compliance
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When self-hosting Raghunath Chava, compliance responsibility lies with
              you. You must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Ensure your deployment meets applicable compliance requirements
              </li>
              <li>Implement and maintain required security controls</li>
              <li>Conduct regular compliance assessments and audits</li>
              <li>Maintain documentation and evidence of compliance</li>
              <li>Train staff on compliance requirements</li>
              <li>Establish incident response procedures</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We provide compliance guidance and best practices documentation,
              but you are responsible for achieving and maintaining compliance
              in your environment.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              8. Compliance Certifications and Audits
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are committed to obtaining and maintaining compliance
              certifications:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Regular security assessments and penetration testing</li>
              <li>Third-party security audits</li>
              <li>Compliance gap analysis and remediation</li>
              <li>Continuous improvement of compliance posture</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Compliance certifications and audit reports are available upon
              request for enterprise customers under NDA.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              9. Compliance Documentation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We maintain comprehensive compliance documentation including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Security policies and procedures</li>
              <li>Data processing agreements</li>
              <li>Privacy impact assessments</li>
              <li>Incident response procedures</li>
              <li>Business continuity plans</li>
              <li>Compliance training materials</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              10. Contact Compliance Team
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For compliance-related inquiries:
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:compliance@buildworks.ai"
                  className="text-deepBlue hover:underline"
                >
                  compliance@buildworks.ai
                </a>
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>General Contact:</strong>{" "}
                <a
                  href="mailto:info@buildworks.ai"
                  className="text-deepBlue hover:underline"
                >
                  info@buildworks.ai
                </a>
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Company:</strong> BuildFlow Consultancy Private Limited
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>CIN:</strong> U62099TS2025PTC201319
              </p>
              <p className="text-muted-foreground">
                <strong>Address:</strong> Hafeez Pet, Miyapur, Hyderabad-
                500049, Telangana, India
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
