/**
 * https://raghunathchava.com
 * Personal Portfolio Home Page
 */
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { SEO } from "../components/seo/SEO";
import { getPageSEO } from "../data/seo";
import { Code, Shield, Target, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const seo = getPageSEO("/");

export function Home() {
  const coreFocus = [
    {
      icon: Zap,
      title: "AI & Agentic Systems",
      description:
        "Agentic architecture, multi-agent orchestration, and LLMOps — versioning, staged rollout, rollback, inference failover, RAG and knowledge engineering, LLM evaluation harnesses",
    },
    {
      icon: Shield,
      title: "AI Governance & Responsible AI",
      description:
        "EU AI Act, ISO/IEC 42001, and NIST AI RMF alignment — graduated-autonomy ladders, human-in-the-loop gates, data-boundary enforcement, immutable audit evidence",
    },
    {
      icon: Code,
      title: "Architecture & Engineering",
      description:
        "Event-driven control planes, schema-first contracts, and distributed systems across Python, TypeScript, Rust, and .NET on Azure and AWS",
    },
    {
      icon: Target,
      title: "Operations & Delivery",
      description:
        "AIOps and SRE, ITIL incident/problem/change/release, ITSM automation, FinOps/TBM, and P&L ownership of global delivery at scale",
    },
  ];

  const keyProjects = [
    {
      name: "RunFabric",
      description:
        "Event-driven execution control plane — 62 system adapters, 100 workflows, 25 operators — turning signals into governed action across enterprise systems",
      link: "/projects",
      badge: "Hitachi Proprietary",
      internal: true,
    },
    {
      name: "DWFabric",
      description:
        "Application packaging and lifecycle factory — 28 AI agents, 145 business engines, CAB governance and deployment rings",
      link: "/projects",
      badge: "Hitachi Proprietary",
      internal: true,
    },
    {
      name: "Aistrale",
      description:
        "Open-source LLM engineering platform for inference management, telemetry, distributed tracing, and observability",
      link: "https://github.com/buildworksai/aistrale",
      badge: "Apache 2.0",
      internal: false,
    },
    {
      name: "SARAISE",
      description:
        "Enterprise ERP platform pairing intelligent automation with deep customization, built for self-hosted control over data and process",
      link: "https://github.com/buildworksai/saraise-application",
      badge: "Open Source",
      internal: false,
    },
  ];

  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="space-y-0 bg-transparent">
        <Hero variant="home" />
        
        {/* Core Focus Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Focus</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Governance, scale, and accountability — enterprise AI and automation aligned to board-level risk, compliance, and long-term strategy
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreFocus.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Platforms &amp; Open Source</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  An eleven-platform automation and AI estate built for Hitachi Digital Services, plus open-source work. <Link to="/projects" className="text-primary hover:underline">See the full estate</Link>.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyProjects.map((project, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      <span className="shrink-0 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {project.badge}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    {project.internal ? (
                      <Link
                        to={project.link}
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        Platform details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        View on GitHub
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">27</div>
                  <div className="text-sm text-muted-foreground">Years in Engineering &amp; Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$50M</div>
                  <div className="text-sm text-muted-foreground">Cloud Transformation Led</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.95%+</div>
                  <div className="text-sm text-muted-foreground">Sustained BFSI Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">300+</div>
                  <div className="text-sm text-muted-foreground">Engineers Led</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Building an AI Center of Excellence, industrializing automation, or putting governance around agents already in production? Let's talk.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Learn More About Me
                </Link>
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  View Experience
                </Link>
                <a
                  href="mailto:info@raghunathchava.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Get In Touch
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
