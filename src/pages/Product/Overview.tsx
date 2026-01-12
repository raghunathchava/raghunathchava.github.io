/**
 * https://raghunathchava.com
 * Enhanced Product Overview Page
 *
 * Requirements: 1.2, 2.1
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SEO } from "@/components/seo/SEO";
import { InfoCard } from "@/components/sections/InfoCard";
import { getPageSEO } from "@/data/seo";
import { messagingHierarchy } from "@/data/messaging";
import { Building2, Brain, Shield, Blocks, Code, Zap } from "lucide-react";

const seo = getPageSEO("/product");

export function ProductOverview() {
  const heroConfig = {
    headline: "AI-Ready ERP Platform Built for Modern Enterprises",
    subheadline: messagingHierarchy.brand.positioning,
    primaryCTA: {
      label: "View Architecture",
      href: "/product/architecture",
      variant: "primary" as const,
      trackingId: "cta_product_architecture",
      icpTarget: "cto" as const,
    },
    secondaryCTA: {
      label: "Explore Modules",
      href: "/product/modules",
      variant: "secondary" as const,
      trackingId: "cta_product_modules",
    },
    variant: "product" as const,
  };

  const productHighlights = [
    {
      icon: Building2,
      title: "Multi-Tenant Architecture",
      description:
        "Secure SaaS deployment with complete tenant isolation and data sovereignty.",
      cta: {
        label: "Learn More",
        href: "/product/architecture",
      },
    },
    {
      icon: Brain,
      title: "AI-Ready Framework",
      description:
        "Built-in support for AI agents to automate business processes and workflows.",
      cta: {
        label: "Explore AI Features",
        href: "/product/ai-ready",
      },
    },
    {
      icon: Blocks,
      title: "Modular Design",
      description:
        "108+ modules (22 Foundation + 21 Core + 65+ Industry) covering all business needs.",
      cta: {
        label: "View Modules",
        href: "/product/modules",
      },
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "SOC 2 Type II, GDPR, HIPAA compliant with comprehensive audit logging.",
      cta: {
        label: "Security Details",
        href: "/enterprise/security",
      },
    },
    {
      icon: Code,
      title: "REST & GraphQL APIs",
      description:
        "Comprehensive API coverage for seamless integration with any system.",
      cta: {
        label: "API Documentation",
        href: "https://docs.saraise.com",
        external: true,
      },
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description:
        "Visual workflow builder to automate repetitive tasks and processes.",
      cta: {
        label: "View Features",
        href: "/product/features",
      },
    },
  ];

  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main>
        <Hero {...heroConfig} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Product Overview</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive ERP solution with modular architecture, AI-ready
                design, and enterprise-grade security.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productHighlights.map((highlight, index) => (
                <InfoCard
                  key={index}
                  icon={highlight.icon}
                  title={highlight.title}
                  description={highlight.description}
                  cta={highlight.cta}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
