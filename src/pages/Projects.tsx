/**
 * https://raghunathchava.com
 * Projects Page - Featured Platform (Hitachi Proprietary) & Open-Source
 */
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SEO } from "../components/seo/SEO";
import { getPageSEO } from "../data/seo";
import { Code, Shield, Zap, TrendingUp, ExternalLink, Github, Lock, Layers, CheckCircle } from "lucide-react";

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
      <main className="min-h-screen bg-background/20 backdrop-blur-sm">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Projects & Platforms
              </h1>
              <p className="text-xl text-muted-foreground">
                Enterprise AI automation platforms and open-source governance
              </p>
            </div>
          </div>
        </section>

        {/* Featured: RunFabric + EAGLE (Hitachi Proprietary) */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-lg bg-card border border-border p-8 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold">Featured: RunFabric + EAGLE Ecosystem</h2>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                    <Lock className="w-3.5 h-3.5" />
                    Hitachi Proprietary
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  An AI-first enterprise IT automation platform built for Hitachi Digital Services — designed for audit committees and CISOs: every automated action produces traceable evidence; AI is confidence-gated with human-in-the-loop; rollback and continuity are built in.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Four interconnected repositories, one unified vision: replace manual IT operations with governed, auditable execution that strengthens compliance posture and reduces operational risk at scale.
                </p>
              </div>

              {/* What I Built - by the numbers (RunFabric | EAGLE | MCP Tooling only) */}
              <h3 className="text-xl font-semibold mb-4">What I Built (by the numbers)</h3>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full min-w-[640px] text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-3 font-medium w-24"></th>
                      <th className="text-left p-3 font-medium">RunFabric</th>
                      <th className="text-left p-3 font-medium">EAGLE</th>
                      <th className="text-left p-3 font-medium">MCP Tooling</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">What</td>
                      <td className="p-3">IT workflow orchestration engine</td>
                      <td className="p-3">Application lifecycle management platform</td>
                      <td className="p-3">5 MCP servers for AI-assisted development</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">Backend</td>
                      <td className="p-3">30+ adapters, 16 operators, 9 hooks, 75 workflow DAGs</td>
                      <td className="p-3">300+ API endpoints, 60+ DB models, 90 Alembic migrations, 51 services</td>
                      <td className="p-3">51 tools, 6 resources, AST-based introspection</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">AI</td>
                      <td className="p-3">Conversational AI, RAG, workflow generator, anomaly detection</td>
                      <td className="p-3">34 AI agents with confidence gating and human-in-the-loop</td>
                      <td className="p-3">Structured codebase intelligence for AI agents</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">Frontend</td>
                      <td className="p-3">358+ React components, analytics dashboards</td>
                      <td className="p-3">60+ pages, Agent Studio, MSI Studio, role-based dashboards</td>
                      <td className="p-3">—</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-foreground">Infra</td>
                      <td className="p-3">25 Docker services, Helm chart, Terraform</td>
                      <td className="p-3">Single-container full-stack deployment</td>
                      <td className="p-3">stdio transport, zero-network</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Depth */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Layers className="w-6 h-6 text-primary" />
                Technical Depth
              </h2>
              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">Stack:</strong> Python, FastAPI, SQLAlchemy 2.0 async, Alembic, Celery, React 19, TypeScript, Chakra UI v3, Tailwind CSS 4, Chart.js, PostgreSQL 16, pgvector, Redis, MinIO, Apache Airflow, Docker, Kubernetes, Helm, Terraform, Prometheus, Grafana, OpenTelemetry, Sentry
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Integrations (adapters built):</strong> ServiceNow, Jira SM, BMC Helix, Freshservice, Ansible, Terraform, Intune, Jamf, SCCM, Entra ID, CrowdStrike, CyberArk, Splunk, Sentinel, Qualys, Tenable, Azure, AWS, GCP, 1E Tachyon, OpenIT, and 10+ more
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Idempotent workflows with compensating actions
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Evidence packs on every execution (Merkle-style hashing)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Circuit breakers on all external calls; deferrable operators for async approvals
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Correlation IDs across every service boundary
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Confidence-gated AI (auto-apply / human-review / reject thresholds)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Ring-based deployments (Canary, Pilot, Broad) with auto-rollback
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Engineering Governance */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Engineering Governance</h2>
              <p className="text-muted-foreground mb-4">
                A governance framework mapped to international standards:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground mb-4">
                <li>ISO 27001/27002 — Security controls</li>
                <li>ISO 42001 — AI management systems</li>
                <li>ISO 22301 — Business continuity</li>
                <li>ISO 31000 — Risk management</li>
                <li>ISO 20000 — IT service management</li>
                <li>SLSA Level 3 — Supply chain security</li>
                <li>WCAG 2.1 AA — Accessibility</li>
              </ul>
              <p className="text-muted-foreground">
                24 codified engineering rules, 40+ development skills, and a six-principle philosophy (Kaizen, Monozukuri, Jidoka, Ordnung, Vorsprung durch Technik, Stabilitat) enforced through automated quality gates: 90%+ test coverage, pre-commit hooks, type checking, linting — no exceptions.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes This Different */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">What Makes This Different</h2>
              <ol className="space-y-4 text-muted-foreground list-decimal list-inside">
                <li><strong className="text-foreground">Architect and technical owner.</strong> I set the bar for architecture, governance, and production readiness. The platform is built to my specifications: evidence on every execution, rollback and continuity by design, confidence-gated AI — no handoff to “someone else’s stack.”</li>
                <li><strong className="text-foreground">Full vertical accountability.</strong> From strategy and board-facing risk posture to database schemas, APIs, and dashboards. I own the full stack so that governance, resilience, and delivery stay aligned.</li>
                <li><strong className="text-foreground">Production-grade from day one.</strong> Evidence packs, audit trails, rollback procedures, SLO/SLA definitions, error budgets, and incident runbooks are engineered in — not retrofitted for compliance.</li>
                <li><strong className="text-foreground">AI that knows its limits.</strong> 34 AI agents with confidence scoring: high-confidence auto-applies; low-confidence requires human review; below threshold the system refuses to act. Built for audit and risk committees, not demos.</li>
                <li><strong className="text-foreground">Developer tooling as strategic investment.</strong> 5 MCP servers (51 tools) so AI-assisted development uses structured APIs instead of ad-hoc discovery — a force multiplier for quality and consistency.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Open-Source Projects Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Open-Source Platforms</h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
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
