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
  GraduationCap,
  CheckCircle
} from "lucide-react";

const seo = getPageSEO("/about");

export function About() {
  const expertise = [
    {
      icon: Zap,
      title: "AI & Agentic Systems",
      description:
        "Agentic architecture, multi-agent orchestration, LLMOps (versioning, staged rollout, rollback, inference failover), RAG and knowledge engineering, LLM evaluation harnesses, CPU-native small models, MCP tool protocols",
    },
    {
      icon: Shield,
      title: "AI Governance & Responsible AI",
      description:
        "EU AI Act, ISO/IEC 42001, and NIST AI RMF alignment — graduated-autonomy ladders, human-in-the-loop gates, guardrails, data-boundary enforcement, and immutable audit evidence",
    },
    {
      icon: TrendingUp,
      title: "AI FinOps & Unit Economics",
      description:
        "Per-request cost telemetry, token and latency budgets enforced in the hot path, per-tenant consumption, and CFO-grade transparency across cloud, infrastructure, and platform services",
    },
    {
      icon: Code,
      title: "Architecture & Engineering",
      description:
        "Event-driven control planes, schema-first contracts, and distributed systems in Python, TypeScript, Rust, and .NET — FastAPI, Airflow, Kubernetes/OpenShift, PostgreSQL/pgvector, Terraform",
    },
    {
      icon: Cloud,
      title: "Cloud & Platform Modernization",
      description:
        "Multi-year Azure and AWS transformation under banking regulation, OpenStack and container modernization, and platform reliability engineered for clearing and settlement workloads",
    },
    {
      icon: Users,
      title: "Operations & Organization",
      description:
        "AIOps and SRE, ITIL incident/problem/change/release, ServiceNow and ITSM automation, and the leadership of 300+ engineer organizations across global delivery",
    },
  ];

  const achievements = [
    "Built an eleven-platform automation and AI estate — orchestration, AIOps, agentic operations, packaging, voice, infrastructure, and AI-gateway fabrics",
    "$50M multi-year Azure and AWS transformation for European-regulated payment and financial-risk platforms",
    "99.95%+ sustained uptime across mission-critical BFSI environments",
    "18–25% YoY run-rate cost reduction through enterprise FinOps and TBM programs",
    "Founded an engineering Center of Excellence — standards enforced in every engineer's IDE, plus an internal AI and automation academy",
    "Led and scaled 300+ engineers across cloud, SRE, security, network, and platform operations",
    "30% operational efficiency gain and 20% infrastructure cost reduction through automation and modernization",
    "2,400+ commits authored across 26 platform repositories in six months — strategy set and architecture shipped",
  ];

  const certifications = [
    "RHCE (Red Hat Certified Engineer)",
    "Introduction to Large Language Models",
    "Introduction to Generative AI Studio",
  ];

  const education = [
    {
      institution: "Indian Institute of Management, Ahmedabad",
      credential: "Business Administration & Management",
      year: "2017",
    },
    {
      institution: "India School of Business Management & Administration",
      credential: "MBA — Information Technology & Project Management",
      year: "2007 – 2009",
    },
    {
      institution: "State Board of Technical Education, AP",
      credential: "Diploma — Computer Engineering",
      year: "1995 – 1998",
    },
  ];

  const awards = [
    "Award of Excellence",
    "SDQE — Service Delivery Quality Excellence",
    "Best Defect Prevention Process",
    "Team of the Quarter",
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
                Senior Director — Automation, AI, Architecture &amp; Innovation | Hitachi Digital Services
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
                  Raghunath Chava is an engineering-led technology executive with 27 years building systems that enterprises trust in production. He owns the automation and AI charter for Hitachi Digital Services' Managed Services practice end to end — strategy, architecture, engineering, and governance — and is accountable for enterprise technology direction: architecture, standards, organizational capability, and P&amp;L.
                </p>
                <p>
                  His work turns GenAI and automation from pilots into <span className="text-foreground font-medium">operating capability</span>: control-plane architecture, evidence-backed execution, runtime governance, and unit economics that survive a CFO and an auditor in the same room. Rather than per-client bespoke work, the practice runs on a small set of reusable fabrics — RunFabric for orchestration, DWFabric for packaging and application lifecycle, OpsFabric for operations intelligence, and AIOpsFabric for signal-to-incident reasoning under a provable autonomy ladder.
                </p>
                <p>
                  He sets the strategy and ships the architecture. In six months he personally authored 2,400+ commits across 26 platform repositories, holding every one to a non-negotiable bar: ≥90% test coverage and mutation score, strict typing, zero-bypass commit gates, ADR-governed design, and correlation-ID traceability from first signal to last audit event. Governance is a product capability in his systems, not a policy document — confidence thresholds, human-in-the-loop approval, staged rollout with rollback, and evidence that refuses to ship once its proof has gone stale.
                </p>
                <p>
                  He founded the practice's engineering Center of Excellence, putting standards enforcement in every engineer's IDE and an AI and automation academy behind the bench that sustains it. As Founder &amp; Chief of AI at BuildWorks.AI, he leads an enterprise GenAI platform with runtime governance, tenant isolation, and end-to-end observability, and is the engineering lead for open-source governance assets under Apache 2.0.
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

        {/* Education Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 p-4 rounded-lg bg-card border border-border"
                  >
                    <div className="flex items-start gap-3 sm:w-1/2">
                      <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="font-semibold text-foreground">{item.institution}</p>
                    </div>
                    <p className="text-muted-foreground flex-1 pl-8 sm:pl-0">{item.credential}</p>
                    <p className="text-sm text-muted-foreground pl-8 sm:pl-0 sm:text-right sm:w-28">
                      {item.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Awards Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Certifications &amp; Recognition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                  <div className="space-y-4">
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
                <div>
                  <h3 className="text-xl font-semibold mb-4">Awards</h3>
                  <div className="space-y-4">
                    {awards.map((award, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
                      >
                        <Target className="w-5 h-5 text-primary flex-shrink-0" />
                        <p className="text-muted-foreground">{award}</p>
                      </div>
                    ))}
                  </div>
                </div>
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
                Governed AI, agentic operations, or industrializing automation across an enterprise estate — happy to compare notes.
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
