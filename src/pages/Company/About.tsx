/**
 * https://raghunathchava.com
 * Company About Page
 *
 * About BuildWorks.AI and Raghunath Chava with BuildWorks.AI branding
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { getPageSEO } from "@/data/seo";
import {
  Brain,
  Shield,
  Code,
  Globe,
  Building2,
  MapPin,
  Mail,
  ExternalLink,
} from "lucide-react";

const seo = getPageSEO("/company/about");

export function CompanyAbout() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="min-h-screen bg-background/20 backdrop-blur-sm text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
              About BuildWorks.AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              BuildWorks.AI (BuildFlow Consultancy Private Limited) builds
              enterprise-grade AI products with a commitment to open source
              innovation. We believe in democratizing AI for businesses
              worldwide.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-deepBlue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize AI-powered automation and make intelligent
                    systems accessible to businesses worldwide, while
                    maintaining the highest standards of privacy, security, and
                    ethical AI practices. We build open source first, enterprise
                    ready.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-deepBlue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the world's leading provider of enterprise AI
                    products, with a strong foundation in open source. We
                    envision a future where every business can leverage
                    AI-powered ERP, LLM engineering, and multi-agent
                    orchestration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Building2 className="w-8 h-8 text-deepBlue mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">
                BuildFlow Consultancy Pvt Ltd
              </h3>
              <p className="text-sm text-muted-foreground">
                Registered Company
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <MapPin className="w-8 h-8 text-deepBlue mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Made in India</h3>
              <p className="text-sm text-muted-foreground">
                Built for the World
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Shield className="w-8 h-8 text-deepBlue mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Enterprise Ready</h3>
              <p className="text-sm text-muted-foreground">
                SOC 2, GDPR, HIPAA Ready
              </p>
            </div>
          </div>

          {/* Raghunath Chava Product Focus */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Raghunath Chava: Our Flagship Product
            </h2>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    AI-Enabled Enterprise ERP
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Raghunath Chava is a modern, enterprise-grade ERP platform that
                    combines intelligent automation with flexible customization.
                    Built for the cloud era, Raghunath Chava offers 108+ modules (22
                    Foundation + 21 Core + 65+ Industry) covering Finance,
                    Inventory, CRM, HR, Manufacturing, Healthcare, Retail, and
                    more.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Raghunath Chava represents BuildWorks.AI's vision for the future of
                    enterprise software: open-source, AI-ready, and built for
                    autonomous business operations. Organizations have complete freedom to deploy, customize,
                    and scale without vendor lock-in.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-deepBlue" />
                      <span className="text-muted-foreground">
                        Fully Open Source
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-deepBlue" />
                      <span className="text-muted-foreground">
                        Built-in AI Agent Framework
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-deepBlue" />
                      <span className="text-muted-foreground">
                        Enterprise-Grade Security & Compliance
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">✓</span>
                      <span>
                        43 Foundation & Core Modules (22 Foundation + 21 Core)
                        plus 65+ Industry Modules
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">✓</span>
                      <span>
                        Multi-tenant Architecture with Row-Level Security
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">✓</span>
                      <span>AI-Powered Workflow Automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">✓</span>
                      <span>
                        REST & GraphQL APIs with Comprehensive Documentation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">✓</span>
                      <span>Real-Time Analytics & Reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">✓</span>
                      <span>
                        Modern Tech Stack (Django 5.0.6, DRF 3.15.1, React 18,
                        PostgreSQL 17)
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href="https://github.com/buildworksai/saraise-application"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-deepBlue to-teal text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      View on GitHub
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Company Story and Vision */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-4">
                BuildWorks.AI was founded with a clear mission: to democratize
                enterprise software by providing open-source, AI-ready solutions
                that any organization can deploy, customize, and scale. We
                believe that modern businesses deserve modern ERP software—fast,
                flexible, and built on open standards.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Raghunath Chava represents years of experience building enterprise
                software and a vision for the future where AI agents
                autonomously manage business operations. Built in India, serving
                enterprises worldwide, Raghunath Chava combines the best of open-source
                innovation with enterprise-grade capabilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to open source means that Raghunath Chava's Foundation
                and Core modules (43 modules) are available free forever. This removes barriers to adoption and
                ensures that organizations of all sizes can benefit from
                enterprise-grade ERP capabilities.
              </p>
            </div>
          </section>

          {/* Milestones and Achievements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Key Milestones
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-deepBlue mb-2">
                  108+
                </div>
                <div className="font-semibold mb-2">Modules Available</div>
                <div className="text-sm text-muted-foreground">
                  22 Foundation + 21 Core + 65+ Industry modules
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-deepBlue mb-2">50+</div>
                <div className="font-semibold mb-2">
                  Companies Using Raghunath Chava
                </div>
                <div className="text-sm text-muted-foreground">
                  From startups to enterprises
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-deepBlue mb-2">
                  99.99%
                </div>
                <div className="font-semibold mb-2">Uptime SLA</div>
                <div className="text-sm text-muted-foreground">
                  Enterprise tier availability
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-deepBlue" />
                </div>
                <h3 className="text-lg font-bold mb-2">AI-First Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Every solution built from the ground up with artificial
                  intelligence at the core
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-deepBlue" />
                </div>
                <h3 className="text-lg font-bold mb-2">Privacy & Security</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security with complete data isolation and
                  global compliance
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-deepBlue" />
                </div>
                <h3 className="text-lg font-bold mb-2">Open Source First</h3>
                <p className="text-sm text-muted-foreground">
                  Raghunath Chava is fully open source. Build,
                  modify, and deploy freely.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-deepBlue" />
                </div>
                <h3 className="text-lg font-bold mb-2">Global Reach</h3>
                <p className="text-sm text-muted-foreground">
                  Built in India, serving enterprises worldwide with 24/7
                  support
                </p>
              </div>
            </div>
          </section>

          {/* Company Details */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Company Information
            </h2>
            <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground mb-1">
                    <strong className="text-foreground">Company Name:</strong>{" "}
                    BuildFlow Consultancy Private Limited
                  </p>
                  <p className="text-muted-foreground mb-1">
                    <strong className="text-foreground">CIN:</strong>{" "}
                    U62099TS2025PTC201319
                  </p>
                </div>
                <div className="flex items-start gap-3 pt-4 border-t border-border">
                  <MapPin className="w-5 h-5 text-deepBlue mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Address:</strong>
                      <br />
                      Hafeez Pet, Miyapur
                      <br />
                      Hyderabad- 500049
                      <br />
                      Telangana, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-4 border-t border-border">
                  <Mail className="w-5 h-5 text-deepBlue mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground mb-1">
                      <strong className="text-foreground">Email:</strong>{" "}
                      <a
                        href="mailto:info@buildworks.ai"
                        className="text-deepBlue hover:underline"
                      >
                        info@buildworks.ai
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Website:</strong>{" "}
                      <a
                        href="https://buildworks.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-deepBlue hover:underline inline-flex items-center gap-1"
                      >
                        https://buildworks.ai
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Involved */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get Involved with Raghunath Chava
            </h2>
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-muted-foreground leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                Raghunath Chava is an open-source project, and we welcome contributions
                from the community. Join us in building the future of enterprise
                ERP.
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div>
                  <h3 className="text-lg font-bold mb-3">Ways to Contribute</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">•</span>
                      <span>Contribute code via pull requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">•</span>
                      <span>Report bugs and suggest features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">•</span>
                      <span>Improve documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">•</span>
                      <span>Join community discussions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">Resources</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <a
                        href="https://github.com/buildworksai/saraise-application"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-deepBlue hover:underline inline-flex items-center gap-1"
                      >
                        GitHub Repository
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/buildworksai/saraise-application/discussions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-deepBlue hover:underline inline-flex items-center gap-1"
                      >
                        Community Discussions
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/buildworksai/saraise-application/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-deepBlue hover:underline inline-flex items-center gap-1"
                      >
                        Report Issues
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
