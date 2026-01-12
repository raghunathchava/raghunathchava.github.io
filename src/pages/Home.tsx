/**
 * https://raghunathchava.com
 * Personal Portfolio Home Page
 */
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { SEO } from "../components/seo/SEO";
import { getPageSEO } from "../data/seo";
import { Briefcase, Code, Award, BookOpen, Target, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const seo = getPageSEO("/");

export function Home() {
  const coreFocus = [
    {
      icon: Zap,
      title: "GenAI Platform Operations",
      description: "End-to-end LLMOps with model onboarding, versioning, staged rollout, and inference failover",
    },
    {
      icon: Code,
      title: "LLMOps & Responsible AI",
      description: "Runtime governance, prompt filtering, role-based model access, and immutable AI audit trails",
    },
    {
      icon: Target,
      title: "Multi-Tenant Reliability",
      description: "99.9%+ uptime using Kubernetes autoscaling, health probes, and SRE practices",
    },
    {
      icon: Briefcase,
      title: "AI FinOps",
      description: "Live monitoring of latency, token consumption, per-tenant usage, and cost-per-request",
    },
  ];

  const keyProjects = [
    {
      name: "Aistrale",
      description: "Open-source GenAI governance & LLMOps control plane for secure model lifecycle management",
      link: "https://github.com/buildworksai/aistrale",
      badge: "Apache 2.0",
    },
    {
      name: "SARAISE",
      description: "Enterprise AI governance fabric implementing RBAC, ABAC, Resource-Level Permissions, and Zero-Trust authorization",
      link: "https://github.com/buildworksai/saraise",
      badge: "Apache 2.0",
    },
  ];

  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="space-y-0">
        <Hero variant="home" />
        
        {/* Core Focus Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Focus</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Specializing in converting GenAI from experimentation into stable, 
                  governable, and scalable enterprise infrastructure
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Open-Source Platforms</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Architect of enterprise-grade platforms for GenAI governance and AI operations
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyProjects.map((project, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {project.badge}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      View on GitHub
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">27+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.9%+</div>
                  <div className="text-sm text-muted-foreground">Platform Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">18-25%</div>
                  <div className="text-sm text-muted-foreground">YoY Cost Reduction</div>
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
                Interested in GenAI platform operations, LLMOps, or Responsible AI? 
                Let's discuss how we can work together.
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
                  href="mailto:raghunath.chava@gmail.com"
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
