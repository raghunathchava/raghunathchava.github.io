/**
 * https://raghunathchava.com
 * Enterprise Security Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { getPageSEO } from "@/data/seo";
import {
  Shield,
  Lock,
  Eye,
  FileCheck,
  AlertTriangle,
  CheckCircle,
  Server,
  Key,
  Network,
} from "lucide-react";

const seo = getPageSEO("/enterprise/security");

export function EnterpriseSecurity() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
                Enterprise Security & Compliance
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Multi-layer security architecture with defense in depth. Built
                for enterprises that demand the highest standards of data
                protection and regulatory compliance.
              </p>
            </div>

            {/* Security Architecture */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Security Architecture</h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Raghunath Chava implements a defense-in-depth security model with
                  multiple layers of protection. Our architecture follows
                  industry best practices and zero-trust principles.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Application Layer</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Input validation and sanitization on all endpoints
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>SQL injection prevention via Django ORM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Cross-site scripting (XSS) protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          CSRF protection on all state-changing operations
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">
                      Infrastructure Layer
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Container security with minimal attack surface
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Network segmentation and isolation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>DDoS protection and rate limiting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Web Application Firewall (WAF) integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Data Protection</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Encryption at Rest
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>AES-256 encryption</strong> for all database
                        storage
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Encrypted file storage with automatic key rotation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Database-level encryption for sensitive fields
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Backup encryption with separate keys</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Encryption in Transit
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>TLS 1.3</strong> for all client-server
                        communications
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Perfect Forward Secrecy (PFS) enabled</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Certificate pinning for mobile applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Encrypted inter-service communication</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 mt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Key className="w-6 h-6 text-deepBlue" />
                  <h3 className="text-xl font-semibold">Key Management</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Hardware Security Modules (HSM) support for key storage
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Automatic key rotation every 90 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Separate encryption keys per tenant (multi-tenant
                      deployments)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Integration with AWS KMS, Azure Key Vault, and HashiCorp
                      Vault
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Access Control */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">
                  Access Control & Authorization
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Role-Based Access Control (RBAC)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Granular permissions at module, resource, and field
                        levels
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Custom role creation with permission inheritance
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Role templates for common job functions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Dynamic role assignment based on user attributes
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Attribute-Based Access Control (ABAC)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Policy-based access decisions using user, resource, and
                        environmental attributes
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Time-based access controls (business hours, time zones)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Location-based restrictions (IP whitelisting,
                        geofencing)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Device-based policies (managed vs. unmanaged devices)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Separation of Duties (SoD)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Automatic conflict detection for incompatible
                        permissions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Pre-defined SoD rules for financial and sensitive
                        operations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Custom SoD policies per organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Real-time violation alerts and blocking</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Just-In-Time (JIT) Privileges
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Temporary privilege elevation with automatic expiration
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Approval workflows for sensitive privilege requests
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Audit trail for all privilege escalations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Integration with PAM (Privileged Access Management)
                        systems
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Authentication */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Key className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Authentication</h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Session-Based Authentication
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Stateful sessions stored securely in Redis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>HTTP-only cookies prevent XSS attacks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Secure flag ensures HTTPS-only transmission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Configurable session timeout (default: 8 hours)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Multi-Factor Authentication (MFA)
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>TOTP (Time-based One-Time Password) support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>SMS and email-based verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Hardware security keys (FIDO2/WebAuthn)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Mandatory MFA for privileged accounts</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-xl font-semibold mb-4">
                    Single Sign-On (SSO) Integration
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Supported Protocols
                      </h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• SAML 2.0</li>
                        <li>• OpenID Connect (OIDC)</li>
                        <li>• OAuth 2.0</li>
                        <li>• LDAP/Active Directory</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Provider Support</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Microsoft Azure AD</li>
                        <li>• Google Workspace</li>
                        <li>• Okta</li>
                        <li>• OneLogin, Auth0, and more</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-xl font-semibold mb-4">
                    Password Policies
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Configurable complexity requirements (length, character
                        types)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Password history enforcement (prevent reuse)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Automatic password expiration and forced reset
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Integration with Have I Been Pwned for breach detection
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Network Security */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Network className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Network Security</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    DDoS Protection
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Cloudflare integration for DDoS mitigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Rate limiting per IP and per user</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Automatic IP blocking for suspicious activity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Geographic filtering and IP whitelisting</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Web Application Firewall (WAF)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>OWASP Top 10 protection rules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Custom rule creation for organization-specific threats
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Real-time threat intelligence integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Automated blocking of known malicious IPs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Audit & Compliance */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Audit & Compliance</h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-semibold mb-4">
                  Comprehensive Audit Logging
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Logged Events</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>
                        • All authentication attempts (success and failure)
                      </li>
                      <li>• Permission changes and role assignments</li>
                      <li>
                        • Data access, creation, modification, and deletion
                      </li>
                      <li>• Configuration changes and system settings</li>
                      <li>• API calls and external integrations</li>
                      <li>• Privilege escalations and JIT access grants</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Audit Features</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Immutable audit logs (tamper-proof storage)</li>
                      <li>• Real-time log streaming and alerting</li>
                      <li>• Advanced search and filtering capabilities</li>
                      <li>• Automated compliance report generation</li>
                      <li>
                        • Long-term retention (configurable, up to 7 years)
                      </li>
                      <li>
                        • Integration with SIEM systems (Splunk, ELK, etc.)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Compliance Certifications
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">SOC 2 Type II</div>
                        <div className="text-sm text-muted-foreground">
                          Annual audits covering security, availability,
                          processing integrity, confidentiality, and privacy
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">GDPR Compliant</div>
                        <div className="text-sm text-muted-foreground">
                          Full compliance with EU General Data Protection
                          Regulation, including data portability and right to
                          erasure
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">HIPAA Ready</div>
                        <div className="text-sm text-muted-foreground">
                          Technical safeguards for Protected Health Information
                          (PHI) with Business Associate Agreement (BAA)
                          available
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">ISO 27001 Aligned</div>
                        <div className="text-sm text-muted-foreground">
                          Information security management system aligned with
                          ISO 27001 standards
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">PCI DSS Ready</div>
                        <div className="text-sm text-muted-foreground">
                          Payment Card Industry Data Security Standard
                          compliance for payment processing
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Compliance Reporting
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Automated compliance dashboards and reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Custom report generation for specific regulations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Data processing impact assessments (DPIA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Breach notification workflows and documentation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Third-party audit support and evidence collection
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Vulnerability Management */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Vulnerability Management</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Security Scanning
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Automated dependency scanning (OWASP Dependency-Check)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Static Application Security Testing (SAST) in CI/CD
                        pipeline
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Dynamic Application Security Testing (DAST) on staging
                        environments
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Container image scanning for known vulnerabilities
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Penetration Testing & Bug Bounty
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Annual third-party penetration testing by certified
                        firms
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Bug bounty program with responsible disclosure
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Security vulnerability reporting via
                        security@saraise.com
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Rapid response SLA for critical vulnerabilities (24
                        hours)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Incident Response */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Incident Response</h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      24/7 Security Monitoring
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Real-time security event monitoring and alerting
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Anomaly detection using machine learning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Automated threat response and containment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Security Operations Center (SOC) integration
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Incident Response Procedures
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Documented incident response playbooks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Dedicated security incident response team</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Customer notification within 72 hours (GDPR
                          requirement)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Post-incident reviews and continuous improvement
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Self-Hosted Security */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Self-Hosted Security</h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  For organizations requiring complete data sovereignty, Raghunath Chava
                  offers self-hosted deployment options with the same security
                  features as our SaaS offering.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      On-Premise Deployment
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Complete data control within your infrastructure
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Docker-based deployment for easy installation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Integration with existing security infrastructure
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Support for air-gapped environments</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Air-Gapped Environments
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Offline authentication key validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Manual update distribution via secure channels
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Complete isolation from external networks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Custom security hardening guides</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-r from-deepBlue/10 to-teal/10 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Secure Your Enterprise?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our security team to discuss your specific requirements
                and get a detailed security whitepaper.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/company/contact"
                  className="px-8 py-3 bg-gradient-to-r from-deepBlue to-teal text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Contact Security Team
                </a>
                <a
                  href="/enterprise/support"
                  className="px-8 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-all"
                >
                  View Support Plans
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
