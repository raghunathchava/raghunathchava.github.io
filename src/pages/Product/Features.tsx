/**
 * https://raghunathchava.com
 * Product Features Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { getPageSEO } from "@/data/seo";
import { Link } from "react-router-dom";
import { Shield, Zap, Database, Globe2 } from "lucide-react";

const seo = getPageSEO("/product/features");

const features = [
  {
    title: "Multi-Tenant Architecture",
    capability: "Row-level multi-tenancy with complete data isolation",
    outcome:
      "Secure SaaS deployment supporting thousands of organizations in a single instance",
    icon: "Building",
    details:
      "Raghunath Chava's multi-tenant architecture uses row-level security with tenant_id filtering at both database and application levels. This enables efficient resource utilization while ensuring complete data isolation. Deploy one instance for thousands of customers with zero risk of cross-tenant data access.",
    useCase:
      "SaaS providers can serve multiple customers from a single deployment, reducing infrastructure costs by up to 70% compared to single-tenant architectures.",
  },
  {
    title: "AI Agent Framework",
    capability:
      "Native support for autonomous AI agents to automate business processes",
    outcome: "Reduce manual work by 60-80% through intelligent automation",
    icon: "Brain",
    details:
      "Raghunath Chava's AI agent framework enables autonomous business operations. AI agents can read and write business data through comprehensive APIs, execute workflows, make decisions, and learn from feedback. Built-in approval workflows ensure human oversight when needed.",
    useCase:
      "Manufacturing companies use AI agents to automatically reconcile invoices, forecast inventory needs, and optimize production schedules—freeing staff to focus on strategic initiatives.",
  },
  {
    title: "Modular Design",
    capability:
      "108+ modules (22 Foundation + 21 Core + 65+ Industry) with pay-as-you-grow model",
    outcome:
      "Start with what you need, add modules as you grow—no bloat, no waste",
    icon: "Blocks",
    details:
      "Raghunath Chava's modular architecture allows you to install only the modules you need. Foundation modules (always free) provide platform infrastructure. Core modules (free for single company) cover universal business operations. Industry modules (paid) add vertical-specific functionality. All modules integrate seamlessly.",
    useCase:
      "A startup begins with Foundation and Core modules, then adds Manufacturing modules as production scales, and Healthcare modules when expanding into medical device manufacturing—paying only for what's needed.",
  },
  {
    title: "REST & GraphQL APIs",
    capability:
      "Comprehensive API coverage with full CRUD operations for all entities",
    outcome:
      "Integrate with any system seamlessly—workflow platforms, BI tools, custom applications",
    icon: "Code",
    details:
      "Raghunath Chava provides both REST and GraphQL APIs with complete OpenAPI documentation. All entities support full CRUD operations. Webhooks enable real-time event notifications. OAuth 2.0 and API key authentication supported. Rate limiting and throttling ensure fair usage.",
    useCase:
      "Organizations integrate Raghunath Chava with Zapier for workflow automation, Power BI for advanced analytics, and custom mobile apps for field operations—all through standardized APIs.",
  },
  {
    title: "Real-Time Analytics",
    capability:
      "Live dashboards, reports, and business intelligence with sub-second query performance",
    outcome:
      "Make data-driven decisions instantly with up-to-the-minute business insights",
    icon: "TrendingUp",
    details:
      "Raghunath Chava's analytics engine provides real-time dashboards, customizable reports, and business intelligence. Optimized queries with database indexing ensure sub-50ms response times. Pre-built reports for finance, sales, inventory, and operations. Custom reports can be created without code.",
    useCase:
      "CFOs access real-time cash flow dashboards, sales managers track pipeline performance, and operations teams monitor inventory levels—all with data updated in real-time.",
  },
  {
    title: "Workflow Automation",
    capability:
      "Visual workflow builder with AI agent integration and approval workflows",
    outcome:
      "Automate 70-80% of repetitive tasks, reducing cycle times by 60-70%",
    icon: "Workflow",
    details:
      "Raghunath Chava's visual workflow builder enables business users to create automated workflows without code. Workflows can include AI agents for intelligent decision-making, approval steps for human oversight, and integrations with external systems. Event-driven architecture enables real-time workflow execution.",
    useCase:
      "Order-to-cash workflows automatically process orders, check inventory, generate invoices, and update accounting—with AI agents handling exceptions and routing only complex cases to humans.",
  },
];

const additionalFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II, GDPR, HIPAA compliant with comprehensive audit logging, RBAC, and SoD controls",
    link: "/enterprise/security",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Sub-50ms API response times (p99), 99.99% uptime SLA, horizontal scaling, and Redis caching",
    link: "/enterprise/scalability",
  },
  {
    icon: Database,
    title: "Modern Data Architecture",
    description:
      "PostgreSQL 17 with optimized queries, read replicas, and point-in-time recovery",
    link: "/product/architecture",
  },
  {
    icon: Globe2,
    title: "Global Deployment",
    description:
      "Region-based deployment options for data residency, CDN integration, and multi-region support",
    link: "/enterprise/scalability",
  },
];

export function ProductFeatures() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Product Features</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Powerful features designed for modern business operations.
                Raghunath Chava combines enterprise-grade capabilities with the
                flexibility of open-source software.
              </p>
            </div>

            {/* Main Features */}
            <FeatureSection features={features} layout="grid" />

            {/* Detailed Feature Descriptions */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Feature Details
              </h2>
              <div className="space-y-12">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-8"
                  >
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.details}
                    </p>
                    <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold mb-2">
                        Real-World Use Case:
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {feature.useCase}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Features */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Additional Enterprise Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {additionalFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Link
                      key={index}
                      to={feature.link}
                      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepBlue/10 to-teal/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-deepBlue" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* CTA Section */}
            <section className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Explore Raghunath Chava Features?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                See how Raghunath Chava's features can transform your business
                operations. Schedule a demo or explore our modules.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/company/contact?type=demo"
                  className="px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-teal transition-colors"
                >
                  Request Demo
                </Link>
                <Link
                  to="/product/modules"
                  className="px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:shadow-md transition-shadow"
                >
                  Explore Modules
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
