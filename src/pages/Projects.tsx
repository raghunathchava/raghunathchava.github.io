/**
 * https://raghunathchava.com
 * Projects Page - Open-Source Platforms
 */
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SEO } from "../components/seo/SEO";
import { getPageSEO } from "../data/seo";
import { Code, Shield, Zap, TrendingUp, ExternalLink, Github } from "lucide-react";

const seo = getPageSEO("/projects");

interface Project {
  name: string;
  description: string;
  longDescription: string;
  githubUrl: string;
  badge: string;
  features: string[];
  icon: typeof Code;
  highlights: string[];
}

const projects: Project[] = [
  {
    name: "Aistrale",
    description: "Open-source GenAI governance & LLMOps control plane",
    longDescription: "Aistrale is a GenAI governance & LLMOps control plane for secure model lifecycle management, inference routing, telemetry, and compliance logging. It converts GenAI from PoC to enterprise-deployable infrastructure.",
    githubUrl: "https://github.com/buildworksai/aistrale",
    badge: "Apache 2.0",
    icon: Zap,
    features: [
      "Model lifecycle management",
      "Secure inference routing",
      "GenAI observability & telemetry",
      "Compliance logging",
      "Staged rollout & rollback",
      "Performance tuning",
    ],
    highlights: [
      "Enterprise-grade GenAI governance",
      "Zero-downtime model deployments",
      "Full audit trail for AI operations",
      "Multi-tenant support",
    ],
  },
  {
    name: "SARAISE",
    description: "Enterprise AI governance fabric with Zero-Trust authorization",
    longDescription: "SARAISE is an enterprise AI governance fabric implementing RBAC, ABAC, Resource-Level Permissions (row isolation), Separation of Duties, and Just-in-Time access, enforcing Zero-Trust authorization inside GenAI runtime.",
    githubUrl: "https://github.com/buildworksai/saraise",
    badge: "Apache 2.0",
    icon: Shield,
    features: [
      "RBAC & ABAC implementation",
      "Resource-Level Permissions (row isolation)",
      "Separation of Duties (SoD)",
      "Just-in-Time (JIT) access",
      "Zero-Trust authorization",
      "GenAI runtime integration",
    ],
    highlights: [
      "Enterprise-grade access control",
      "Row-level data isolation",
      "Auditable authorization decisions",
      "Integrated with GenAI runtime",
    ],
  },
];

export function Projects() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Open-Source Projects
              </h1>
              <p className="text-xl text-muted-foreground">
                Architect of enterprise-grade platforms for GenAI governance and AI operations
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-16">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div
                    key={index}
                    className="rounded-lg bg-card border border-border p-8 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-lg bg-primary/10">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
                          <p className="text-lg text-muted-foreground">{project.description}</p>
                        </div>
                      </div>
                      <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                        {project.badge}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.longDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="font-semibold mb-3 text-foreground">Key Features</h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <Code className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3 text-foreground">Highlights</h3>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Interested in Contributing?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Both projects are open-source and welcome contributions. 
                Check out the GitHub repositories to get started.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://github.com/buildworksai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  <Github className="w-5 h-5" />
                  Visit BuildWorks.AI on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
