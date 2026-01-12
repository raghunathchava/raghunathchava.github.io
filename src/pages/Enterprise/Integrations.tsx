/**
 * https://raghunathchava.com
 * Enterprise Integrations Page
 *
 * Requirements: 2.4
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { getPageSEO } from "@/data/seo";
import { Key, Globe2, Code, Zap } from "lucide-react";

const seo = getPageSEO("/enterprise/integrations");

const integrationCategories = [
  {
    icon: Key,
    title: "Single Sign-On (SSO)",
    description: "SAML 2.0 and OIDC support for enterprise identity providers.",
    providers: ["Azure AD", "Google Workspace", "Okta", "OneLogin"],
  },
  {
    icon: Code,
    title: "REST API",
    description:
      "Comprehensive REST API for custom integrations and automation.",
    providers: ["Custom integrations", "Webhooks", "API keys", "OAuth 2.0"],
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Connect with workflow automation platforms and business tools.",
    providers: ["Zapier", "Make", "n8n", "Custom workflows"],
  },
  {
    icon: Globe2,
    title: "Data Integration",
    description: "Import and export data with standard formats and connectors.",
    providers: [
      "CSV/Excel",
      "Database connectors",
      "ETL tools",
      "Data warehouses",
    ],
  },
];

export function EnterpriseIntegrations() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Enterprise Integrations</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect Raghunath Chava with your existing tools and systems. SSO, REST
              API, workflow automation, and data integration options.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {integrationCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.title}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="p-2 bg-deepBlue/10 rounded-lg">
                        <Icon className="w-6 h-6 text-deepBlue" />
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.providers.map((provider) => (
                        <span
                          key={provider}
                          className="px-3 py-1 bg-secondary rounded-md text-xs font-semibold"
                        >
                          {provider}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">SSO Integration</h2>
                <p className="text-muted-foreground mb-4">
                  Enable single sign-on with your enterprise identity provider
                  using SAML 2.0 or OpenID Connect (OIDC).
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>SAML 2.0 support with metadata import</li>
                  <li>OIDC/OAuth 2.0 authentication</li>
                  <li>Just-in-time (JIT) user provisioning</li>
                  <li>Attribute mapping and role assignment</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">REST API</h2>
                <p className="text-muted-foreground mb-4">
                  Comprehensive REST API with full CRUD operations for all
                  entities. API keys and OAuth 2.0 authentication supported.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>RESTful API with OpenAPI/Swagger documentation</li>
                  <li>API rate limiting and throttling</li>
                  <li>Webhook support for real-time events</li>
                  <li>API versioning and backward compatibility</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Custom Integrations</h2>
                <p className="text-muted-foreground mb-4">
                  Need a custom integration? Our team can help build
                  enterprise-specific connectors and workflows.
                </p>
                <a
                  href="/company/contact?type=integration"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-teal transition-colors"
                >
                  Contact Integration Team
                </a>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
