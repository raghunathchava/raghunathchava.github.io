/**
 * https://raghunathchava.com
 * Enterprise Scalability Page
 *
 * Requirements: 2.4
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { getPageSEO } from "@/data/seo";
import { TrendingUp, Database, Globe2, Zap } from "lucide-react";

const seo = getPageSEO("/enterprise/scalability");

const scalabilityFeatures = [
  {
    icon: Database,
    title: "Multi-Tenant Architecture",
    description:
      "Row-level multi-tenancy with tenant_id filtering. Deploy one instance for thousands of customers with complete data isolation.",
  },
  {
    icon: TrendingUp,
    title: "Horizontal Scaling",
    description:
      "Scale horizontally by adding application servers. Database connection pooling and read replicas for high availability.",
  },
  {
    icon: Globe2,
    title: "Global Deployment",
    description:
      "Region-based deployment options for data residency requirements. CDN integration for global content delivery.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimized queries, caching strategies, and database indexing. Sub-50ms API response times at p99.",
  },
];

export function EnterpriseScalability() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Scalability & Performance
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Multi-tenant architecture scales to millions of users. 99.99%
              uptime SLA with horizontal scaling and performance optimization.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {scalabilityFeatures.map((feature) => {
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
                  Multi-Tenant Architecture
                </h2>
                <p className="text-muted-foreground mb-4">
                  Row-level multi-tenancy ensures complete data isolation while
                  enabling efficient resource utilization across tenants.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Tenant_id filtering at database level</li>
                  <li>Automatic tenant context in all queries</li>
                  <li>Cross-tenant data access prevention</li>
                  <li>Tenant-specific configuration and customization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Performance SLAs</h2>
                <div className="bg-card border border-border rounded-xl p-6 mb-4">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-2xl font-bold text-deepBlue mb-1">
                        ≤50ms
                      </div>
                      <div className="text-sm text-muted-foreground">
                        API Read (p99)
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-deepBlue mb-1">
                        ≤200ms
                      </div>
                      <div className="text-sm text-muted-foreground">
                        API Write (p99)
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-deepBlue mb-1">
                        99.99%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Uptime SLA
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  Scaling Capabilities
                </h2>
                <p className="text-muted-foreground mb-4">
                  Raghunath Chava scales from small deployments to enterprise-scale
                  installations with millions of users.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Horizontal scaling with load balancing</li>
                  <li>Database sharding and read replicas</li>
                  <li>Redis caching for session and data</li>
                  <li>CDN integration for static assets</li>
                  <li>Auto-scaling based on load metrics</li>
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
