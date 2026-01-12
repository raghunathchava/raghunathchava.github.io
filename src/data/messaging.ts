/**
 * https://raghunathchava.com
 * Messaging Hierarchy Data for Raghunath Chava Marketing Website
 *
 * This file contains the centralized messaging hierarchy used across all pages.
 * All marketing copy should reference this data structure for consistency.
 *
 * Requirements: 9.1, 1.4, 1.3
 */

import type { ICP, CTAConfig } from "@/types/components";

// =============================================================================
// Value Proposition Types
// =============================================================================

/**
 * Value proposition with outcome-focused messaging
 */
export interface ValueProp {
  /** Outcome-focused headline */
  headline: string;
  /** Supporting subheadline */
  subheadline: string;
  /** Proof point or evidence */
  proof: string;
  /** Associated icon (lucide-react) */
  icon?: string;
}

/**
 * Objection handling
 */
export interface Objection {
  /** The concern/objection */
  concern: string;
  /** Response to the objection */
  response: string;
  /** Supporting proof point */
  proof?: string;
  /** Link to more information */
  link?: string;
}

/**
 * Audience-specific messaging
 */
export interface AudienceMessaging {
  /** ICP identifier */
  icp: ICP;
  /** Display name */
  displayName: string;
  /** Buyer type classification */
  buyerType: "technical" | "economic";
  /** Pain points this audience experiences */
  painPoints: string[];
  /** Benefits that resonate with this audience */
  benefits: string[];
  /** Common objections from this audience */
  objections: Objection[];
  /** CTAs tailored for this audience */
  ctas: CTAConfig[];
  /** Key messages for this audience */
  keyMessages: string[];
}

/**
 * Complete messaging hierarchy
 */
export interface MessagingHierarchy {
  brand: {
    /** Company name */
    name: string;
    /** Brand tagline */
    tagline: string;
    /** Category positioning statement */
    positioning: string;
    /** Core value propositions */
    valueProps: ValueProp[];
    /** Mission statement */
    mission: string;
    /** Vision statement */
    vision: string;
  };
  audiences: Record<ICP, AudienceMessaging>;
}

// =============================================================================
// Brand Messaging
// =============================================================================

export const brandMessaging = {
  name: "Raghunath Chava",
  tagline: "AI-Ready ERP for the Modern Enterprise",
  positioning:
    "Raghunath Chava is the AI-ready, open-source ERP platform that gives enterprises complete control over their business operations while preparing them for autonomous AI-driven workflows.",
  mission:
    "To democratize enterprise software by providing an open-source, AI-ready ERP platform that any organization can deploy, customize, and scale.",
  vision:
    "A future where AI agents run business operations autonomously, with humans focusing on strategy and innovation.",
  valueProps: [
    {
      headline: "Deploy in Minutes, Scale to Millions",
      subheadline:
        "Self-hosted or SaaS—your choice. No vendor lock-in, no hidden costs.",
      proof: "Production-ready Docker deployment with 99.9% uptime SLA",
      icon: "Rocket",
    },
    {
      headline: "Open Source, Enterprise Ready",
      subheadline:
        "Open-source core with enterprise-grade security and compliance.",
      proof: "SOC 2 Type II compliant with full audit logging",
      icon: "Shield",
    },
    {
      headline: "AI-Ready Architecture",
      subheadline:
        "Built from the ground up for AI agents to automate business processes.",
      proof: "65+ modules designed for autonomous operation",
      icon: "Brain",
    },
    {
      headline: "Modular by Design",
      subheadline:
        "Start with what you need, add modules as you grow. No bloat, no waste.",
      proof: "22 Foundation + 21 Core + 65+ Industry modules",
      icon: "Blocks",
    },
  ],
} as const;

// =============================================================================
// Audience-Specific Messaging
// =============================================================================

export const audienceMessaging: Record<ICP, AudienceMessaging> = {
  developer: {
    icp: "developer",
    displayName: "Developer",
    buyerType: "technical",
    painPoints: [
      "Proprietary ERPs are black boxes with poor APIs",
      "Legacy systems are impossible to extend or customize",
      "Vendor lock-in limits technology choices",
      "Documentation is outdated or non-existent",
      "Integration with modern tools is painful",
    ],
    benefits: [
      "Full source code access",
      "Modern tech stack: Django, React, PostgreSQL",
      "Comprehensive REST APIs with OpenAPI specs",
      "Extensive documentation and code examples",
      "Active community and contributor ecosystem",
    ],
    objections: [
      {
        concern: "Open source means no support",
        response:
          "Enterprise support tiers available with SLAs up to 99.99% uptime and 15-minute response times.",
        proof: "Enterprise customers receive dedicated support engineers",
      },
      {
        concern: "Will this scale for our needs?",
        response:
          "Multi-tenant architecture handles millions of transactions. Horizontal scaling built-in.",
        proof: "Benchmarked at 10,000+ concurrent users per instance",
      },
    ],
    ctas: [
      {
        label: "View on GitHub",
        href: "https://github.com/buildworksai/saraise-application",
        variant: "primary",
        trackingId: "cta_developer_github",
        icpTarget: "developer",
        external: true,
      },
      {
        label: "Read the Docs",
        href: "https://docs.saraise.com",
        variant: "secondary",
        trackingId: "cta_developer_docs",
        icpTarget: "developer",
        external: true,
      },
    ],
    keyMessages: [
      "Full source code access—no black boxes",
      "Modern stack you already know",
      "APIs first, UI second",
      "Contribute and shape the roadmap",
    ],
  },

  cto: {
    icp: "cto",
    displayName: "CTO",
    buyerType: "technical",
    painPoints: [
      "Technical debt from legacy ERP systems",
      "Difficulty integrating with modern architecture",
      "Vendor roadmaps don't align with business needs",
      "Security and compliance concerns with SaaS",
      "Lack of control over data and infrastructure",
    ],
    benefits: [
      "Self-hosted option for complete data sovereignty",
      "Modern microservices architecture",
      "API-first design for seamless integration",
      "Transparent security model with full audit capability",
      "Roadmap influenced by community and enterprise customers",
    ],
    objections: [
      {
        concern: "How do we migrate from our current ERP?",
        response:
          "Migration tools and professional services available. Phased migration approach minimizes risk.",
        proof: "Average migration completed in 8-12 weeks",
      },
      {
        concern: "What about long-term viability?",
        response:
          "Open-source approach ensures you can fork and maintain if needed. Active development with regular releases.",
        proof: "Monthly releases with 18-month LTS versions",
      },
    ],
    ctas: [
      {
        label: "View Architecture",
        href: "/product/architecture",
        variant: "primary",
        trackingId: "cta_cto_architecture",
        icpTarget: "cto",
      },
      {
        label: "Schedule Technical Review",
        href: "/contact?type=technical",
        variant: "secondary",
        trackingId: "cta_cto_technical_review",
        icpTarget: "cto",
      },
    ],
    keyMessages: [
      "Own your infrastructure and data",
      "Modern architecture, not legacy wrapped in APIs",
      "Security you can audit yourself",
      "Roadmap transparency and influence",
    ],
  },

  "vp-engineering": {
    icp: "vp-engineering",
    displayName: "VP of Engineering",
    buyerType: "technical",
    painPoints: [
      "Team productivity lost to ERP workarounds",
      "Difficulty hiring developers for legacy systems",
      "Integration projects always over budget",
      "Vendor dependencies slow down releases",
      "Technical debt accumulating faster than it's paid down",
    ],
    benefits: [
      "Standard tech stack attracts talent",
      "Modular architecture enables parallel development",
      "Comprehensive testing framework included",
      "CI/CD ready with Docker and Kubernetes support",
      "Clear module boundaries reduce complexity",
    ],
    objections: [
      {
        concern: "My team doesn't have ERP experience",
        response:
          "Built on Django and React—skills your team already has. Comprehensive onboarding and training available.",
        proof: "Average developer productive in 2 weeks",
      },
      {
        concern: "How do we maintain this alongside our core product?",
        response:
          "Managed SaaS option available. Or use our professional services for maintenance.",
        proof: "SaaS customers spend zero time on infrastructure",
      },
    ],
    ctas: [
      {
        label: "Request Demo",
        href: "/contact?type=demo",
        variant: "primary",
        trackingId: "cta_vp_demo",
        icpTarget: "vp-engineering",
      },
      {
        label: "View Integration Guide",
        href: "https://docs.saraise.com/integrations",
        variant: "secondary",
        trackingId: "cta_vp_integrations",
        icpTarget: "vp-engineering",
        external: true,
      },
    ],
    keyMessages: [
      "Your team already knows the stack",
      "Ship faster with modular architecture",
      "Reduce integration complexity",
      "Attract and retain engineering talent",
    ],
  },

  "solution-architect": {
    icp: "solution-architect",
    displayName: "Solution Architect",
    buyerType: "technical",
    painPoints: [
      "ERPs don't fit into modern cloud architecture",
      "Data silos prevent unified views",
      "Event-driven patterns not supported",
      "Scaling requires expensive vertical upgrades",
      "Multi-region deployment is complex",
    ],
    benefits: [
      "Cloud-native design with Kubernetes support",
      "Event-driven architecture with message queues",
      "Horizontal scaling with read replicas",
      "Multi-tenant isolation at database level",
      "API gateway integration ready",
    ],
    objections: [
      {
        concern: "How does this fit with our existing systems?",
        response:
          "REST and GraphQL APIs, webhook support, and pre-built connectors for common systems.",
        proof: "50+ pre-built integrations available",
      },
    ],
    ctas: [
      {
        label: "Download Architecture Guide",
        href: "/resources/architecture-guide",
        variant: "primary",
        trackingId: "cta_architect_guide",
        icpTarget: "solution-architect",
      },
      {
        label: "View API Documentation",
        href: "https://docs.saraise.com/api",
        variant: "secondary",
        trackingId: "cta_architect_api",
        icpTarget: "solution-architect",
        external: true,
      },
    ],
    keyMessages: [
      "Cloud-native, not cloud-washed",
      "Event-driven by design",
      "Scale horizontally, not vertically",
      "Fits your architecture, not the other way around",
    ],
  },

  ciso: {
    icp: "ciso",
    displayName: "CISO",
    buyerType: "technical",
    painPoints: [
      "SaaS vendors won't share security details",
      "Compliance requirements vary by region",
      "Audit trails are incomplete or inaccessible",
      "Third-party risk from vendor dependencies",
      "Data residency requirements are hard to meet",
    ],
    benefits: [
      "Self-hosted option for complete control",
      "Full audit logging with tamper-proof storage",
      "SOC 2 Type II compliant infrastructure",
      "Role-based access with separation of duties",
      "Data encryption at rest and in transit",
    ],
    objections: [
      {
        concern: "Open source means more vulnerabilities",
        response:
          "Transparent security model means vulnerabilities are found and fixed faster. Regular security audits and bug bounty program.",
        proof: "Zero critical vulnerabilities in production releases",
      },
      {
        concern: "How do we meet compliance requirements?",
        response:
          "Pre-built compliance frameworks for SOC 2, GDPR, HIPAA. Compliance documentation and audit support included.",
        proof: "Compliance certification support for enterprise customers",
      },
    ],
    ctas: [
      {
        label: "Download Security Whitepaper",
        href: "/resources/security-whitepaper",
        variant: "primary",
        trackingId: "cta_ciso_security",
        icpTarget: "ciso",
      },
      {
        label: "Request Security Review",
        href: "/contact?type=security",
        variant: "secondary",
        trackingId: "cta_ciso_review",
        icpTarget: "ciso",
      },
    ],
    keyMessages: [
      "Security you can verify yourself",
      "Compliance built-in, not bolted-on",
      "Your data, your infrastructure, your control",
      "Transparent security model",
    ],
  },

  cfo: {
    icp: "cfo",
    displayName: "CFO",
    buyerType: "economic",
    painPoints: [
      "ERP costs are unpredictable and always rising",
      "Per-user licensing doesn't scale",
      "Implementation projects go over budget",
      "ROI is hard to measure",
      "Switching costs create vendor lock-in",
    ],
    benefits: [
      "Predictable pricing with no per-user fees",
      "Self-hosted option eliminates SaaS costs",
      "Modular approach—pay only for what you use",
      "Open source core reduces total cost of ownership",
      "No vendor lock-in—your data is always yours",
    ],
    objections: [
      {
        concern: "Free sounds too good to be true",
        response:
          "Core is free forever. Revenue from enterprise support, SaaS hosting, and premium modules.",
        proof: "Sustainable business model with enterprise customers",
      },
      {
        concern: "What's the total cost of ownership?",
        response:
          "TCO calculator available. Typical savings of 40-60% vs. traditional ERPs.",
        proof: "Case studies with detailed cost comparisons",
        link: "/resources/tco-calculator",
      },
    ],
    ctas: [
      {
        label: "Calculate ROI",
        href: "/resources/roi-calculator",
        variant: "primary",
        trackingId: "cta_cfo_roi",
        icpTarget: "cfo",
      },
      {
        label: "View Pricing",
        href: "/pricing",
        variant: "secondary",
        trackingId: "cta_cfo_pricing",
        icpTarget: "cfo",
      },
    ],
    keyMessages: [
      "Predictable costs, no surprises",
      "Pay for value, not seats",
      "Reduce TCO by 40-60%",
      "No vendor lock-in",
    ],
  },

  coo: {
    icp: "coo",
    displayName: "COO",
    buyerType: "economic",
    painPoints: [
      "Operations data is siloed across systems",
      "Manual processes slow down operations",
      "Visibility into operations is limited",
      "Scaling operations requires more headcount",
      "Process changes take months to implement",
    ],
    benefits: [
      "Unified platform for all operations",
      "Workflow automation reduces manual work",
      "Real-time dashboards and reporting",
      "AI-ready for autonomous operations",
      "Modular design enables rapid process changes",
    ],
    objections: [
      {
        concern: "How long until we see results?",
        response:
          "Quick wins in 30 days. Full implementation in 8-12 weeks. Phased approach minimizes disruption.",
        proof: "Average 25% efficiency gain in first quarter",
      },
    ],
    ctas: [
      {
        label: "See Operations Demo",
        href: "/contact?type=demo&focus=operations",
        variant: "primary",
        trackingId: "cta_coo_demo",
        icpTarget: "coo",
      },
      {
        label: "View Case Studies",
        href: "/enterprise/case-studies",
        variant: "secondary",
        trackingId: "cta_coo_cases",
        icpTarget: "coo",
      },
    ],
    keyMessages: [
      "One platform, complete visibility",
      "Automate the mundane, focus on strategy",
      "Scale operations, not headcount",
      "AI-ready for the future",
    ],
  },

  ceo: {
    icp: "ceo",
    displayName: "CEO",
    buyerType: "economic",
    painPoints: [
      "Digital transformation initiatives stall",
      "Technology decisions create long-term risk",
      "Competitive advantage erodes with legacy systems",
      "Board expects AI strategy",
      "Talent leaves for more modern companies",
    ],
    benefits: [
      "Future-proof technology investment",
      "AI-ready platform for competitive advantage",
      "Attract top talent with modern stack",
      "Reduce technology risk with open source",
      "Strategic flexibility with modular approach",
    ],
    objections: [
      {
        concern: "Is open source enterprise-ready?",
        response:
          "Linux, Kubernetes, PostgreSQL—the enterprise runs on open source. Raghunath Chava follows the same model.",
        proof: "Fortune 500 companies use open source ERP",
      },
    ],
    ctas: [
      {
        label: "Schedule Executive Briefing",
        href: "/contact?type=executive",
        variant: "primary",
        trackingId: "cta_ceo_briefing",
        icpTarget: "ceo",
      },
      {
        label: "Read Vision Paper",
        href: "/resources/vision-paper",
        variant: "secondary",
        trackingId: "cta_ceo_vision",
        icpTarget: "ceo",
      },
    ],
    keyMessages: [
      "Future-proof your business",
      "AI-ready, not AI-someday",
      "Strategic flexibility, not vendor lock-in",
      "Attract the best talent",
    ],
  },
};

// =============================================================================
// Complete Messaging Hierarchy Export
// =============================================================================

export const messagingHierarchy: MessagingHierarchy = {
  brand: {
    name: brandMessaging.name,
    tagline: brandMessaging.tagline,
    positioning: brandMessaging.positioning,
    mission: brandMessaging.mission,
    vision: brandMessaging.vision,
    valueProps: [...brandMessaging.valueProps],
  },
  audiences: audienceMessaging,
};

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Get messaging for a specific ICP
 */
export function getAudienceMessaging(icp: ICP): AudienceMessaging {
  return audienceMessaging[icp];
}

/**
 * Get CTAs for a specific ICP
 */
export function getICPCTAs(icp: ICP): CTAConfig[] {
  return audienceMessaging[icp].ctas;
}

/**
 * Get primary CTA for a specific ICP
 */
export function getPrimaryCTA(icp: ICP): CTAConfig | undefined {
  return audienceMessaging[icp].ctas[0];
}

/**
 * Get all technical buyer ICPs
 */
export function getTechnicalBuyerICPs(): ICP[] {
  return Object.values(audienceMessaging)
    .filter((a) => a.buyerType === "technical")
    .map((a) => a.icp);
}

/**
 * Get all economic buyer ICPs
 */
export function getEconomicBuyerICPs(): ICP[] {
  return Object.values(audienceMessaging)
    .filter((a) => a.buyerType === "economic")
    .map((a) => a.icp);
}

/**
 * Get objection response for a specific ICP and concern
 */
export function getObjectionResponse(
  icp: ICP,
  concernKeyword: string,
): Objection | undefined {
  const audience = audienceMessaging[icp];
  return audience.objections.find((o) =>
    o.concern.toLowerCase().includes(concernKeyword.toLowerCase()),
  );
}
