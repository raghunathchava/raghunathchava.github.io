/**
 * https://raghunathchava.com
 * About Page - Professional Summary
 */
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SEO } from "../components/seo/SEO";
import { getPageSEO } from "../data/seo";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Code, 
  Cloud,
  Award,
  Target,
  CheckCircle
} from "lucide-react";

const seo = getPageSEO("/about");

export function About() {
  const expertise = [
    {
      icon: Zap,
      title: "GenAI Platform Operations",
      description: "End-to-end LLMOps including model onboarding, versioning, staged rollout, rollback, performance tuning, and inference failover",
    },
    {
      icon: Shield,
      title: "Responsible AI",
      description: "Prompt governance, role-based model access, data boundary enforcement, and immutable AI audit trails",
    },
    {
      icon: TrendingUp,
      title: "AI FinOps",
      description: "Live monitoring of latency, token consumption, per-tenant usage, throttling, and cost-per-request",
    },
    {
      icon: Users,
      title: "Multi-Tenant Reliability",
      description: "99.9%+ uptime using Kubernetes autoscaling, health probes, SRE practices, and ITIL-aligned incident management",
    },
    {
      icon: Code,
      title: "Enterprise AIOps",
      description: "Predictive incident detection, event correlation, proactive remediation, and AIOps-driven operations",
    },
    {
      icon: Cloud,
      title: "Cloud & Platform Modernization",
      description: "Large-scale cloud transformations, infrastructure modernization, and platform reliability",
    },
  ];

  const achievements = [
    "99.95%+ uptime across mission-critical BFSI environments",
    "18-25% YoY cost reduction through FinOps & TBM programs",
    "Led 300+ engineers across cloud, SRE, security, and platform operations",
    "Architect of two open-source, enterprise-grade platforms (Aistrale & SARAISE)",
    "30% operational efficiency gain through automation and capacity engineering",
    "20% infrastructure cost reduction through modernization",
  ];

  const certifications = [
    "RHCE (Red Hat Certified Engineer)",
    "Professional Cloud Architect",
    "Introduction to Large Language Models",
    "Introduction to Generative AI Studio",
    "Certified in Medicinal and Aromatic Plants",
  ];

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
                About Raghunath Chava
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Chief of Innovation, Automation, Transformation, Architecture & AI Practice | Hitachi Digital Services
              </p>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Raghunath Chava leads Innovation, Automation, Transformation, Architecture, and AI at Hitachi Digital Services. He is accountable for enterprise automation ecosystems that combine AI acceleration with governance rigor, operational resilience, and measurable business impact — aligned with board-level expectations for risk, compliance, and long-term strategy.
                </p>
                <p>
                  Under his leadership, Hitachi Digital Services delivers the RunFabric + EAGLE ecosystem (Hitachi Proprietary): an AI-first automation platform with built-in auditability, controlled AI adoption with human-in-the-loop, cross-ecosystem integration, and embedded risk controls. The platform is designed for audit committees and CISOs — every execution produces evidence; AI is confidence-gated; rollback and continuity are engineered in.
                </p>
                <p>
                  He holds software engineering as a discipline: idempotent workflows, evidence on every execution, confidence-gated AI, and rollback plans by design. As Founder & Chief of AI at BuildWorks.AI, he also drives a multi-tenant GenAI platform and is the architect of open-source Aistrale (Apache 2.0) and SARAISE (Apache 2.0) for GenAI governance and LLMOps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Core Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertise.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Key Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
                  >
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Interested in discussing GenAI platform operations, LLMOps, or Responsible AI?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:info@raghunathchava.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/raghunathchava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Connect on LinkedIn
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
