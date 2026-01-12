/**
 * https://raghunathchava.com
 * Enhanced Product Architecture Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { InfoCard } from "@/components/sections/InfoCard";
import { getPageSEO } from "@/data/seo";
import { Code, Database, Server, Network, Shield, Zap } from "lucide-react";

const seo = getPageSEO("/product/architecture");

export function ProductArchitecture() {
  const architectureComponents = [
    {
      icon: Code,
      title: "Technology Stack",
      description:
        "Python 3.10+, Django 5.0.6, React 18, TypeScript 5, PostgreSQL 17, Redis 7+",
      cta: {
        label: "View Tech Stack",
        href: "/product/architecture#tech-stack",
      },
    },
    {
      icon: Database,
      title: "Multi-Tenant Architecture",
      description:
        "Row-level security with tenant_id filtering for complete data isolation.",
      cta: {
        label: "Learn About Multi-Tenancy",
        href: "/enterprise/scalability",
      },
    },
    {
      icon: Server,
      title: "API-First Design",
      description:
        "Comprehensive REST and GraphQL APIs for seamless integration.",
      cta: {
        label: "API Documentation",
        href: "https://docs.saraise.com/api",
        external: true,
      },
    },
    {
      icon: Network,
      title: "Event-Driven Architecture",
      description:
        "Real-time event processing with webhooks and message queues.",
      cta: {
        label: "View Architecture",
        href: "/product/architecture#events",
      },
    },
    {
      icon: Zap,
      title: "Horizontal Scalability",
      description:
        "Scale from startup to enterprise with load balancing and auto-scaling.",
      cta: {
        label: "Scalability Details",
        href: "/enterprise/scalability",
      },
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with SOC 2, GDPR, HIPAA compliance.",
      cta: {
        label: "Security Overview",
        href: "/enterprise/security",
      },
    },
  ];

  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">
                Technical Architecture
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Modern, scalable architecture built for enterprise needs.
                Raghunath Chava's architecture is designed for AI-ready operations,
                multi-tenant scalability, and enterprise-grade security.
              </p>
            </div>

            {/* Architecture Components */}
            <section>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {architectureComponents.map((component, index) => (
                  <InfoCard
                    key={index}
                    icon={component.icon}
                    title={component.title}
                    description={component.description}
                    cta={component.cta}
                  />
                ))}
              </div>
            </section>

            {/* Technology Stack Details */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Technology Stack
              </h2>
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-deepBlue mt-1">•</span>
                        <span>
                          <strong>Python 3.10+</strong> - Modern Python with
                          type hints and async support
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-deepBlue mt-1">•</span>
                        <span>
                          <strong>Django 5.0.6</strong> - Battle-tested web
                          framework with built-in admin and ORM
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-deepBlue mt-1">•</span>
                        <span>
                          <strong>Django REST Framework 3.15.1</strong> -
                          Comprehensive API framework with serializers and
                          viewsets
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-deepBlue mt-1">•</span>
                        <span>
                          <strong>PostgreSQL 17</strong> - Advanced relational
                          database with JSON support and full-text search
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-deepBlue mt-1">•</span>
                        <span>
                          <strong>Redis 7+</strong> - In-memory data store for
                          sessions, caching, and message queues
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-deepBlue mt-1">•</span>
                        <span>
                          <strong>React 18</strong> - Modern UI library with
                          hooks and concurrent rendering
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-deepBlue mt-1">•</span>
                        <span>
                          <strong>TypeScript 5</strong> - Type-safe JavaScript
                          with advanced type inference
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-deepBlue mt-1">•</span>
                        <span>
                          <strong>Vite 6+</strong> - Fast build tool with HMR
                          and optimized production builds
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-deepBlue mt-1">•</span>
                        <span>
                          <strong>Tailwind CSS 3.4+</strong> - Utility-first CSS
                          framework for rapid UI development
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-deepBlue mt-1">•</span>
                        <span>
                          <strong>TanStack Query 5</strong> - Powerful data
                          synchronization for server state
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Architecture Principles */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Architecture Principles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">API-First Design</h3>
                  <p className="text-muted-foreground text-sm">
                    All functionality is exposed through comprehensive REST and
                    GraphQL APIs. The frontend is a first-class API consumer,
                    enabling mobile apps, third-party integrations, and AI
                    agents to access all capabilities.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Event-Driven Architecture
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Real-time event processing enables reactive workflows, AI
                    agent triggers, and system integrations. Webhooks and
                    message queues ensure reliable event delivery and
                    processing.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Modular & Extensible
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Module-based architecture allows independent development,
                    testing, and deployment. Modules can be added or removed
                    without affecting core functionality, enabling true
                    pay-as-you-grow scalability.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Security by Design</h3>
                  <p className="text-muted-foreground text-sm">
                    Security is built into every layer: row-level multi-tenancy,
                    RBAC/ABAC, immutable audit logs, encryption at rest and in
                    transit. Security is not an afterthought—it's foundational.
                  </p>
                </div>
              </div>
            </section>

            {/* Deployment Options */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Deployment Architecture
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Self-Hosted</h3>
                  <p className="text-muted-foreground mb-4">
                    Deploy on your own infrastructure with Docker Compose. Full
                    control over data, infrastructure, and customization.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">•</span>
                      <span>Docker-based deployment for easy setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">•</span>
                      <span>Single-tenant architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">•</span>
                      <span>Complete data sovereignty</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    SaaS (Multi-Tenant)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Managed SaaS deployment with multi-tenant architecture.
                    Automatic updates, scaling, and professional support
                    included.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">•</span>
                      <span>
                        Row-level multi-tenancy with complete data isolation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">•</span>
                      <span>Horizontal scaling with load balancing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-deepBlue mt-1">•</span>
                      <span>99.99% uptime SLA (Enterprise tier)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
