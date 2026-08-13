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
    description: "Open-source LLM engineering platform",
    longDescription:
      "Aistrale turns AI from a black box into an engineered system — an LLM engineering platform for managing model inference, telemetry tracking, and observability, with support for the HuggingFace Hub and OpenAI SDK, secure token management, and distributed tracing.",
    githubUrl: "https://github.com/buildworksai/aistrale",
    badge: "Apache 2.0",
    icon: Zap,
    features: [
      "Model inference management",
      "Telemetry tracking & observability",
      "Distributed tracing",
      "Secure token management",
      "HuggingFace Hub & OpenAI SDK support",
      "Performance monitoring",
    ],
    highlights: [
      "Engineered system, not a black box",
      "Production-grade LLM observability",
      "Provider-agnostic inference",
      "Built by BuildWorks.AI",
    ],
  },
  {
    name: "SARAISE",
    description: "Enterprise ERP platform with intelligent automation",
    longDescription:
      "SARAISE is a modern, enterprise-grade ERP platform combining intelligent automation with flexible customization. Built for the cloud era, it lets organizations streamline operations and scale while retaining complete control over their own data and processes.",
    githubUrl: "https://github.com/buildworksai/saraise-application",
    badge: "Open Source",
    icon: Shield,
    features: [
      "Modular enterprise ERP suite",
      "Intelligent process automation",
      "Flexible customization model",
      "Cloud-era, self-hostable architecture",
      "Complete data ownership",
      "Scalable multi-entity operations",
    ],
    highlights: [
      "Automation built into the core",
      "No lock-in on data or process",
      "Self-hosted or cloud deployment",
      "Enterprise-grade extensibility",
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
                An eleven-platform enterprise automation and AI estate, plus open-source work
              </p>
            </div>
          </div>
        </section>

        {/* Featured: The Fabric Estate (Hitachi Proprietary) */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-lg bg-card border border-border p-8 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold">Featured: The Fabric Estate</h2>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                    <Lock className="w-3.5 h-3.5" />
                    Hitachi Proprietary
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  An eleven-platform automation and AI estate built for Hitachi Digital Services — designed for audit committees and CISOs: every automated action produces traceable evidence, AI is confidence-gated with human-in-the-loop, and rollback and continuity are engineered in rather than retrofitted.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A small set of reusable fabrics instead of per-client bespoke work, connected by strict API contracts. Each is held to the same bar: ≥90% coverage and mutation score, strict typing, ADR-governed design, and correlation-ID traceability end to end.
                </p>
              </div>

              {/* The estate - by the numbers */}
              <h3 className="text-xl font-semibold mb-4">The Estate (by the numbers)</h3>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full min-w-[720px] text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-3 font-medium w-36">Platform</th>
                      <th className="text-left p-3 font-medium">What it does</th>
                      <th className="text-left p-3 font-medium">Scale &amp; stack</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">RunFabric</td>
                      <td className="p-3">Event-driven execution control plane — the sole gateway to external systems</td>
                      <td className="p-3">62 adapters, 100 workflows, 25 operators · Python 3.12, React 19, Airflow</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">DWFabric</td>
                      <td className="p-3">Application packaging and lifecycle factory with CAB governance and deployment rings</td>
                      <td className="p-3">28 AI agents, 145 business engines · Python, TypeScript, PowerShell</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">OpsFabric</td>
                      <td className="p-3">Operations intelligence — conversational AI, RAG, operational agents, ML pipelines</td>
                      <td className="p-3">Stage-gated autonomy governance · Python, FastAPI, React 19</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">AIOpsFabric</td>
                      <td className="p-3">Signal-to-incident platform: compress noise, investigate on evidence, remediate under a proven autonomy ladder</td>
                      <td className="p-3">Seven planes, 29 ADRs · Rust collection/telemetry/sense, Python reasoning</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">VoiceFabric</td>
                      <td className="p-3">Multilingual voice service desk with DTMF language routing and SOP-grounded conversation</td>
                      <td className="p-3">P50 ≤ 800 ms, P95 ≤ 1.3 s mouth-to-ear · streaming VAD → ASR → LLM → TTS</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">RouteFabric</td>
                      <td className="p-3">Governed self-hosted AI gateway — one policy-controlled endpoint in front of every approved provider</td>
                      <td className="p-3">OpenAI ⇄ Anthropic ⇄ Gemini translation, circuit breakers, spend quotas · Rust</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">InfraFabric</td>
                      <td className="p-3">Infrastructure lifecycle intelligence — inventory, maintenance windows, compliance posture, drift</td>
                      <td className="p-3">Cross-domain risk scoring and closed-loop evidence · Python, FastAPI</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">FabriCat</td>
                      <td className="p-3">Host-agnostic Channels + Hooks SDK giving every fabric two typed extensibility surfaces</td>
                      <td className="p-3">1,024 tests, 97.9% coverage, mypy-strict, 21 plugins · Python</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">Packaging Factory SDK</td>
                      <td className="p-3">Evidence-gated packaging for locked-down VDI — refuses to ship a package whose proof has gone stale</td>
                      <td className="p-3">361 tests passing · .NET 10, PSAppDeployToolkit 4, TypeScript</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">TLM</td>
                      <td className="p-3">Technical Language Model — turns observability noise into actionable, explainable signal</td>
                      <td className="p-3">CPU-native, no GPU required · llama.cpp/ollama, pgvector, FastAPI</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-foreground">DevEngine</td>
                      <td className="p-3">Development Center of Excellence — standards enforcement inside the IDE</td>
                      <td className="p-3">VS Code/Cursor extension · TypeScript 5.7, React 18, Redux Toolkit</td>
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
                <strong className="text-foreground">Stack:</strong> Python 3.12, FastAPI, SQLAlchemy 2.0 async, Alembic, Celery, Rust, .NET 10, React 19, TypeScript, Chakra UI v3, Tailwind CSS 4, Chart.js, PostgreSQL 16, pgvector, Redis, MinIO, Apache Airflow, Docker, Kubernetes, Helm, Terraform, Prometheus, Grafana, OpenTelemetry, Sentry
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
                <li><strong className="text-foreground">Architect and technical owner.</strong> I set the bar for architecture, governance, and production readiness — and then write the code that meets it. In six months: 2,400+ commits across 26 platform repositories. No handoff to “someone else's stack.”</li>
                <li><strong className="text-foreground">Full vertical accountability.</strong> From strategy and board-facing risk posture down to database schemas, APIs, and dashboards. Owning the full stack is what keeps governance, resilience, and delivery aligned instead of negotiated.</li>
                <li><strong className="text-foreground">Production-grade from day one.</strong> Evidence packs, audit trails, rollback procedures, SLO/SLA definitions, error budgets, and incident runbooks are engineered in — not retrofitted when an auditor asks.</li>
                <li><strong className="text-foreground">AI that knows its limits.</strong> Agents run under confidence scoring and a graduated autonomy ladder: high confidence auto-applies, low confidence routes to human review, below threshold the system refuses to act. Built for risk committees, not demos.</li>
                <li><strong className="text-foreground">Platforms, not projects.</strong> Eleven reusable fabrics connected by strict API contracts, so each new client engagement composes existing capability instead of starting over — capability that compounds rather than headcount that scales linearly.</li>
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
                Built at BuildWorks.AI — LLM engineering infrastructure and an enterprise ERP platform, both open to inspection
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
