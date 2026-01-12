/**
 * https://raghunathchava.com
 * Company Contact Page
 *
 * Contact information for BuildWorks.AI and Raghunath Chava
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { getPageSEO } from "@/data/seo";
import {
  Mail,
  MapPin,
  Building2,
  Clock,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

const seo = getPageSEO("/company/contact");

export function CompanyContact() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="min-h-screen bg-background/20 backdrop-blur-sm text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with the BuildWorks.AI team. We're here to help with
              Raghunath Chava inquiries, support, partnerships, and more.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-deepBlue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">
                    <a
                      href="mailto:info@buildworks.ai"
                      className="text-deepBlue hover:underline"
                    >
                      info@buildworks.ai
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For general inquiries, support, and partnerships
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-deepBlue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Company</h3>
                  <p className="text-muted-foreground mb-2">
                    BuildFlow Consultancy Private Limited
                  </p>
                  <p className="text-sm text-muted-foreground">
                    CIN: U62099TS2025PTC201319
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <section className="mb-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-deepBlue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    BuildFlow Consultancy Private Limited
                    <br />
                    Hafeez Pet, Miyapur
                    <br />
                    Hyderabad- 500049
                    <br />
                    Telangana, India
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact by Purpose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Contact by Purpose</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">General Inquiries</h3>
                <p className="text-muted-foreground mb-2">
                  <a
                    href="mailto:info@buildworks.ai"
                    className="text-deepBlue hover:underline"
                  >
                    info@buildworks.ai
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  Questions about Raghunath Chava, features, licensing, or general
                  information
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Security Issues</h3>
                <p className="text-muted-foreground mb-2">
                  <a
                    href="mailto:security@buildworks.ai"
                    className="text-deepBlue hover:underline"
                  >
                    security@buildworks.ai
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  Report security vulnerabilities or security-related concerns
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Compliance</h3>
                <p className="text-muted-foreground mb-2">
                  <a
                    href="mailto:compliance@buildworks.ai"
                    className="text-deepBlue hover:underline"
                  >
                    compliance@buildworks.ai
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  Compliance inquiries, certifications, and audit requests
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Partnerships</h3>
                <p className="text-muted-foreground mb-2">
                  <a
                    href="mailto:partners@buildworks.ai"
                    className="text-deepBlue hover:underline"
                  >
                    partners@buildworks.ai
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  Partnership opportunities, integrations, and collaborations
                </p>
              </div>
            </div>
          </section>

          {/* Social Links & Business Hours */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/buildworks-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center hover:bg-deepBlue/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-deepBlue" />
                </a>
                <a
                  href="https://x.com/Buildworks_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center hover:bg-deepBlue/20 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-5 h-5 text-deepBlue" />
                </a>
                <a
                  href="https://github.com/buildworksai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center hover:bg-deepBlue/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-deepBlue" />
                </a>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-deepBlue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div>
                      <strong className="text-foreground">
                        Monday - Friday:
                      </strong>{" "}
                      9:00 AM - 6:00 PM IST
                    </div>
                    <div>
                      <strong className="text-foreground">AI Support:</strong>{" "}
                      24/7 Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Support */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Community Support</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                For community support, questions, and discussions about Raghunath Chava:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">
                    GitHub Discussions:
                  </strong>{" "}
                  <a
                    href="https://github.com/buildworksai/saraise-application/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-deepBlue hover:underline"
                  >
                    Join the community
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">GitHub Issues:</strong>{" "}
                  <a
                    href="https://github.com/buildworksai/saraise-application/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-deepBlue hover:underline"
                  >
                    Report bugs and request features
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Documentation:</strong>{" "}
                  <a
                    href="https://github.com/buildworksai/saraise-application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-deepBlue hover:underline"
                  >
                    Read the documentation
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Response Times */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Response Times</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                We aim to respond to all inquiries within:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Security Issues:</strong>{" "}
                  Within 48 hours
                </li>
                <li>
                  <strong className="text-foreground">
                    General Inquiries:
                  </strong>{" "}
                  Within 3-5 business days
                </li>
                <li>
                  <strong className="text-foreground">
                    Compliance Requests:
                  </strong>{" "}
                  Within 5-7 business days
                </li>
                <li>
                  <strong className="text-foreground">
                    Partnership Inquiries:
                  </strong>{" "}
                  Within 5-7 business days
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
