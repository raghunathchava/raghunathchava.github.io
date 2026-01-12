/**
 * https://raghunathchava.com
 * SEO Configuration Data for Raghunath Chava Marketing Website
 *
 * This file contains SEO configurations for all pages including:
 * - Page SEO configs with meta tags
 * - Keyword mappings (primary, secondary, long-tail)
 * - SERP intent classification
 * - Content clusters with internal linking
 *
 * Requirements: 4.1, 4.2, 4.3
 */

import type {
  PageSEO,
  ContentCluster,
  SERPIntent,
  SchemaMarkup,
  KeywordConfig,
} from "@/types/seo";

// =============================================================================
// Base Configuration
// =============================================================================

export const BASE_URL = "https://raghunathchava.com";
export const SITE_NAME = "Raghunath Chava";
export const DEFAULT_OG_IMAGE = "/assets/og-default.png";

// =============================================================================
// Person Schema (used across all pages)
// =============================================================================

export const personSchema: SchemaMarkup = {
  type: "Person",
  data: {
    "@type": "Person",
    name: "Raghunath Chava",
    url: BASE_URL,
    jobTitle: "Sr Director – GenAI Platform Operations | Founder, BuildWorks.AI",
    description: "Leading production-grade GenAI platform operations with full ownership of reliability, LLMOps, Responsible AI enforcement, and financial governance",
    email: "info@raghunathchava.com",
    telephone: "+919666953366",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/raghunathchava",
      "https://github.com/raghunathchava",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Indian Institute of Management, Ahmedabad",
      },
    ],
  },
};

// =============================================================================
// Page SEO Configurations
// =============================================================================

export const pageSEOConfigs: Record<string, PageSEO> = {
  // -------------------------------------------------------------------------
  // Home Page
  // -------------------------------------------------------------------------
  "/": {
    path: "/",
    title: "Raghunath Chava | GenAI Platform Operations | BuildWorks.AI",
    description:
      "GenAI platform operations expert with 27+ years experience. Specializing in LLMOps, Responsible AI, and enterprise AI governance.",
    canonical: BASE_URL,
    keywords: {
      primary: "GenAI platform operations",
      secondary: ["LLMOps", "Responsible AI", "AI governance", "multi-tenant AI platforms"],
      longtail: [
        "GenAI platform operations expert",
        "LLMOps specialist",
        "Responsible AI implementation",
        "enterprise AI governance",
      ],
    },
    intent: "informational",
    schema: [
      personSchema,
      {
        type: "WebPage",
        data: {
          "@type": "WebPage",
          name: "Raghunath Chava - AI-Ready Open-Source ERP Platform",
          description:
            "Deploy a modern, AI-ready ERP in minutes. Open-source core, modular design, enterprise-grade security.",
          url: BASE_URL,
        },
      },
      {
        type: "FAQ",
        data: {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is Raghunath Chava ERP?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Raghunath Chava is an AI-ready, open-source ERP platform with 65+ modules for modern enterprises. It offers a free self-hosted tier and paid SaaS options.",
              },
            },
            {
              "@type": "Question",
              name: "Is Raghunath Chava free?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Raghunath Chava offers a free self-hosted tier with all Foundation and Core modules. Professional and Enterprise tiers are available with additional features and support.",
              },
            },
            {
              "@type": "Question",
              name: "What makes Raghunath Chava AI-ready?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Raghunath Chava is designed for AI agents to operate autonomously. It includes workflow automation, API-first design, and a data model optimized for AI consumption.",
              },
            },
            {
              "@type": "Question",
              name: "Is Raghunath Chava suitable for enterprise use?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Raghunath Chava is enterprise-ready with SOC 2 Type II compliance, multi-tenant architecture, 99.99% uptime SLA, and dedicated support options.",
              },
            },
          ],
        },
      },
      {
        type: "BreadcrumbList",
        data: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: BASE_URL,
            },
          ],
        },
      },
    ],
    openGraph: {
      title: "Raghunath Chava | GenAI Platform Operations",
      description:
        "GenAI platform operations expert with 27+ years experience. Specializing in LLMOps, Responsible AI, and enterprise AI governance.",
      image: DEFAULT_OG_IMAGE,
      type: "profile",
    },
    targetICP: [],
    primaryCTA: "Learn More",
  },

  // -------------------------------------------------------------------------
  // Product Pages
  // -------------------------------------------------------------------------
  "/product": {
    path: "/product",
    title: "Product Overview | Raghunath Chava ERP Platform",
    description:
      "Explore Raghunath Chava ERP features: 65+ modules, AI-ready architecture, multi-tenant design. Built for modern enterprises.",
    keywords: {
      primary: "ERP software features",
      secondary: [
        "ERP modules",
        "enterprise software",
        "business management software",
      ],
      longtail: [
        "ERP software with AI capabilities",
        "modular ERP system features",
        "enterprise resource planning modules",
      ],
    },
    intent: "commercial",
    schema: [
      {
        type: "Product",
        data: {
          "@type": "Product",
          name: "Raghunath Chava ERP Platform",
          description:
            "AI-ready, open-source ERP platform with 65+ modules for modern enterprises",
          brand: {
            "@type": "Brand",
            name: "Raghunath Chava",
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
    ],
    targetICP: ["cto", "vp-engineering", "solution-architect"],
    primaryCTA: "View Features",
  },

  "/product/features": {
    path: "/product/features",
    title: "ERP Features & Capabilities | Raghunath Chava",
    description:
      "Comprehensive ERP features: CRM, accounting, inventory, HR, and more. AI-ready automation, real-time analytics, enterprise security.",
    keywords: {
      primary: "ERP features",
      secondary: [
        "ERP capabilities",
        "business software features",
        "enterprise features",
      ],
      longtail: [
        "ERP system with CRM integration",
        "ERP software with inventory management",
        "enterprise software with AI automation",
      ],
    },
    intent: "commercial",
    schema: [],
    targetICP: ["cto", "vp-engineering"],
    primaryCTA: "Explore Modules",
  },

  "/product/modules": {
    path: "/product/modules",
    title: "ERP Modules Catalog | Raghunath Chava",
    description:
      "65+ ERP modules: 22 Foundation, 21 Core, and industry-specific modules for manufacturing, healthcare, retail, and more.",
    keywords: {
      primary: "ERP modules",
      secondary: [
        "ERP module catalog",
        "business modules",
        "enterprise modules",
      ],
      longtail: [
        "ERP modules for manufacturing",
        "healthcare ERP modules",
        "retail ERP modules list",
      ],
    },
    intent: "commercial",
    schema: [],
    targetICP: ["cto", "solution-architect"],
    primaryCTA: "Browse Modules",
  },

  "/product/architecture": {
    path: "/product/architecture",
    title: "Technical Architecture | Raghunath Chava ERP",
    description:
      "Raghunath Chava technical architecture: microservices, multi-tenant, API-first design. Django, React, PostgreSQL stack.",
    keywords: {
      primary: "ERP architecture",
      secondary: [
        "ERP technical design",
        "enterprise architecture",
        "software architecture",
      ],
      longtail: [
        "microservices ERP architecture",
        "multi-tenant ERP design",
        "API-first ERP platform",
      ],
    },
    intent: "informational",
    schema: [],
    targetICP: ["cto", "solution-architect", "developer"],
    primaryCTA: "View Documentation",
  },

  "/product/ai-ready": {
    path: "/product/ai-ready",
    title: "AI-Ready ERP | Future-Proof Your Business",
    description:
      "Raghunath Chava is built for AI agents. Automate invoice reconciliation, inventory forecasting, and customer service with AI-powered workflows.",
    keywords: {
      primary: "AI-ready ERP",
      secondary: ["AI-powered ERP", "ERP with AI", "AI agents ERP"],
      longtail: [
        "AI-powered ERP software",
        "ERP with AI capabilities",
        "AI agents for business automation",
      ],
    },
    intent: "commercial",
    schema: [
      {
        type: "SoftwareApplication",
        data: {
          "@type": "SoftwareApplication",
          name: "Raghunath Chava ERP Platform",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        },
      },
    ],
    targetICP: ["cto", "ceo", "vp-engineering"],
    primaryCTA: "Learn About AI Agents",
  },

  // -------------------------------------------------------------------------
  // Solutions Pages (by Industry)
  // -------------------------------------------------------------------------
  "/solutions/manufacturing": {
    path: "/solutions/manufacturing",
    title: "Manufacturing ERP Software | Raghunath Chava",
    description:
      "Manufacturing ERP with production planning, shop floor control, quality management, and MRP. AI-ready for Industry 4.0.",
    keywords: {
      primary: "manufacturing ERP",
      secondary: [
        "production planning software",
        "MRP system",
        "shop floor control",
      ],
      longtail: [
        "open source manufacturing ERP",
        "AI-ready manufacturing software",
        "Industry 4.0 ERP solution",
      ],
    },
    intent: "commercial",
    schema: [],
    targetICP: ["coo", "cto"],
    primaryCTA: "See Manufacturing Demo",
  },

  "/solutions/healthcare": {
    path: "/solutions/healthcare",
    title: "Healthcare ERP Software | Raghunath Chava",
    description:
      "Healthcare ERP with patient management, clinical workflows, billing, and HIPAA compliance. Secure and scalable.",
    keywords: {
      primary: "healthcare ERP",
      secondary: [
        "hospital management software",
        "clinical ERP",
        "healthcare software",
      ],
      longtail: [
        "HIPAA compliant ERP software",
        "healthcare management system",
        "hospital ERP solution",
      ],
    },
    intent: "commercial",
    schema: [],
    targetICP: ["coo", "ciso"],
    primaryCTA: "See Healthcare Demo",
  },

  "/solutions/retail": {
    path: "/solutions/retail",
    title: "Retail ERP & POS Software | Raghunath Chava",
    description:
      "Retail ERP with POS, inventory management, e-commerce integration, and omnichannel support. Scale from one store to thousands.",
    keywords: {
      primary: "retail ERP",
      secondary: ["POS software", "retail management", "inventory management"],
      longtail: [
        "omnichannel retail ERP",
        "retail POS with inventory",
        "e-commerce ERP integration",
      ],
    },
    intent: "commercial",
    schema: [],
    targetICP: ["coo", "cfo"],
    primaryCTA: "See Retail Demo",
  },

  "/solutions/professional-services": {
    path: "/solutions/professional-services",
    title: "Professional Services ERP | Raghunath Chava",
    description:
      "PSA software with resource planning, time tracking, project management, and billing. Optimize utilization and profitability.",
    keywords: {
      primary: "professional services ERP",
      secondary: [
        "PSA software",
        "resource planning",
        "project management ERP",
      ],
      longtail: [
        "professional services automation software",
        "consulting firm ERP",
        "time and billing software",
      ],
    },
    intent: "commercial",
    schema: [],
    targetICP: ["coo", "cfo"],
    primaryCTA: "See PSA Demo",
  },

  "/solutions/hospitality": {
    path: "/solutions/hospitality",
    title: "Hospitality ERP Software | Raghunath Chava",
    description:
      "Hospitality ERP with property management, reservations, F&B, and guest services. Multi-property support included.",
    keywords: {
      primary: "hospitality ERP",
      secondary: [
        "hotel management software",
        "property management system",
        "hospitality software",
      ],
      longtail: [
        "hotel ERP software",
        "multi-property hospitality management",
        "restaurant management ERP",
      ],
    },
    intent: "commercial",
    schema: [],
    targetICP: ["coo", "cfo"],
    primaryCTA: "See Hospitality Demo",
  },

  // -------------------------------------------------------------------------
  // Pricing Page
  // -------------------------------------------------------------------------
  "/pricing": {
    path: "/pricing",
    title: "Pricing & Plans | Raghunath Chava ERP",
    description:
      "Raghunath Chava pricing: Free self-hosted, Professional, and Enterprise plans. No per-user fees. Transparent pricing with no surprises.",
    keywords: {
      primary: "ERP pricing",
      secondary: [
        "ERP cost",
        "enterprise software pricing",
        "ERP subscription",
      ],
      longtail: [
        "free open source ERP",
        "ERP software pricing comparison",
        "enterprise ERP cost calculator",
      ],
    },
    intent: "transactional",
    schema: [],
    targetICP: ["cfo", "ceo"],
    primaryCTA: "Get Started Free",
  },

  // -------------------------------------------------------------------------
  // Enterprise Pages
  // -------------------------------------------------------------------------
  "/enterprise": {
    path: "/enterprise",
    title: "Enterprise Solutions | Raghunath Chava",
    description:
      "Enterprise-grade ERP with dedicated support, SLAs, security certifications, and professional services. Built for scale.",
    keywords: {
      primary: "enterprise ERP",
      secondary: ["enterprise software", "corporate ERP", "large business ERP"],
      longtail: [
        "enterprise ERP with SLA",
        "corporate ERP solution",
        "enterprise-grade business software",
      ],
    },
    intent: "commercial",
    schema: [],
    targetICP: ["ceo", "cfo", "cto"],
    primaryCTA: "Contact Enterprise Sales",
  },

  "/enterprise/security": {
    path: "/enterprise/security",
    title: "Security & Compliance | Raghunath Chava Enterprise",
    description:
      "Enterprise security: SOC 2 Type II, GDPR, HIPAA compliance. Full audit logging, encryption, and access controls.",
    keywords: {
      primary: "ERP security",
      secondary: ["enterprise security", "ERP compliance", "data security"],
      longtail: [
        "SOC 2 compliant ERP",
        "HIPAA compliant ERP software",
        "enterprise ERP security features",
      ],
    },
    intent: "informational",
    schema: [],
    targetICP: ["ciso", "cto"],
    primaryCTA: "Download Security Whitepaper",
  },

  "/enterprise/support": {
    path: "/enterprise/support",
    title: "Enterprise Support | Raghunath Chava",
    description:
      "Enterprise support tiers: 24/7 availability, dedicated engineers, SLAs up to 99.99% uptime. Professional services included.",
    keywords: {
      primary: "ERP support",
      secondary: ["enterprise support", "ERP SLA", "technical support"],
      longtail: [
        "enterprise ERP support plans",
        "24/7 ERP technical support",
        "dedicated ERP support engineer",
      ],
    },
    intent: "commercial",
    schema: [],
    targetICP: ["cto", "coo"],
    primaryCTA: "View Support Plans",
  },

  "/enterprise/case-studies": {
    path: "/enterprise/case-studies",
    title: "Customer Success Stories | Raghunath Chava",
    description:
      "See how enterprises use Raghunath Chava: case studies from manufacturing, healthcare, retail, and professional services.",
    keywords: {
      primary: "ERP case studies",
      secondary: [
        "ERP success stories",
        "customer testimonials",
        "ERP implementation",
      ],
      longtail: [
        "ERP implementation case study",
        "manufacturing ERP success story",
        "enterprise software ROI case study",
      ],
    },
    intent: "commercial",
    schema: [],
    targetICP: ["ceo", "coo", "cfo"],
    primaryCTA: "Read Case Studies",
  },

  "/enterprise/compliance": {
    path: "/enterprise/compliance",
    title: "ERP Compliance | GDPR, HIPAA, SOC 2",
    description:
      "Raghunath Chava meets GDPR, HIPAA, SOC 2 Type II, and ISO 27001 requirements. Automated compliance reporting and audit trails.",
    keywords: {
      primary: "ERP compliance",
      secondary: ["GDPR compliant ERP", "HIPAA ERP", "SOC 2 ERP"],
      longtail: [
        "ERP compliance requirements",
        "GDPR compliant ERP software",
        "HIPAA compliant ERP system",
      ],
    },
    intent: "informational",
    schema: [],
    targetICP: ["cfo", "ciso", "ceo"],
    primaryCTA: "Download Security Whitepaper",
  },

  "/enterprise/governance": {
    path: "/enterprise/governance",
    title: "Enterprise Governance | SoD, RBAC, Audit",
    description:
      "Comprehensive governance controls including RBAC, SoD, audit logging, and policy enforcement for enterprise compliance.",
    keywords: {
      primary: "ERP governance",
      secondary: ["SoD ERP", "RBAC ERP", "audit logging ERP"],
      longtail: [
        "ERP separation of duties",
        "ERP role-based access control",
        "ERP audit trail software",
      ],
    },
    intent: "informational",
    schema: [],
    targetICP: ["ciso", "cfo", "ceo"],
    primaryCTA: "Learn About Governance",
  },

  "/enterprise/scalability": {
    path: "/enterprise/scalability",
    title: "ERP Scalability | Multi-Tenant Architecture",
    description:
      "Multi-tenant architecture scales to millions of users. 99.99% uptime SLA with horizontal scaling and performance optimization.",
    keywords: {
      primary: "multi-tenant ERP",
      secondary: ["scalable ERP", "ERP performance", "ERP architecture"],
      longtail: [
        "scalable ERP platform",
        "multi-tenant ERP architecture",
        "high-performance ERP system",
      ],
    },
    intent: "informational",
    schema: [],
    targetICP: ["cto", "vp-engineering", "solution-architect"],
    primaryCTA: "View Architecture",
  },

  "/enterprise/integrations": {
    path: "/enterprise/integrations",
    title: "Enterprise Integrations | SSO, API, Workflows",
    description:
      "Connect Raghunath Chava with your existing tools. SSO, REST API, workflow automation, and data integration options.",
    keywords: {
      primary: "ERP integrations",
      secondary: ["ERP SSO", "ERP API", "ERP connectors"],
      longtail: [
        "ERP single sign-on integration",
        "ERP REST API documentation",
        "ERP workflow automation",
      ],
    },
    intent: "commercial",
    schema: [],
    targetICP: ["cto", "vp-engineering", "solution-architect"],
    primaryCTA: "View API Docs",
  },

  // -------------------------------------------------------------------------
  // Resources Pages
  // -------------------------------------------------------------------------
  "/resources": {
    path: "/resources",
    title: "Resources & Documentation | Raghunath Chava",
    description:
      "Raghunath Chava resources: documentation, guides, webinars, and blog. Everything you need to succeed with Raghunath Chava ERP.",
    keywords: {
      primary: "ERP resources",
      secondary: [
        "ERP documentation",
        "ERP guides",
        "enterprise software resources",
      ],
      longtail: [
        "ERP implementation guide",
        "ERP best practices documentation",
        "enterprise software learning resources",
      ],
    },
    intent: "informational",
    schema: [],
    targetICP: ["developer", "cto", "solution-architect"],
    primaryCTA: "Browse Resources",
  },

  // -------------------------------------------------------------------------
  // Company Pages
  // -------------------------------------------------------------------------
  "/about": {
    path: "/about",
    title: "About Raghunath Chava | GenAI Platform Operations Expert",
    description:
      "Sr Director – GenAI Platform Operations with 27+ years of experience. Leading production-grade GenAI platform operations, LLMOps, Responsible AI, and multi-tenant AI platforms.",
    keywords: {
      primary: "Raghunath Chava",
      secondary: [
        "GenAI platform operations",
        "LLMOps expert",
        "Responsible AI",
        "AI governance",
      ],
      longtail: [
        "GenAI platform operations specialist",
        "LLMOps consultant",
        "Responsible AI implementation expert",
      ],
    },
    intent: "informational",
    schema: [personSchema],
    targetICP: [],
    primaryCTA: "View Experience",
  },

  "/experience": {
    path: "/experience",
    title: "Professional Experience | Raghunath Chava",
    description:
      "27+ years of experience across enterprise platforms, cloud, AIOps, FinOps, and regulated environments. Former Delivery Head at Wipro, Head of Cloud Infrastructure at Societe Generale.",
    keywords: {
      primary: "Raghunath Chava experience",
      secondary: [
        "GenAI platform operations",
        "enterprise cloud infrastructure",
        "AIOps FinOps",
      ],
      longtail: [
        "GenAI platform operations career",
        "enterprise cloud transformation expert",
      ],
    },
    intent: "informational",
    schema: [personSchema],
    targetICP: [],
    primaryCTA: "View Projects",
  },

  "/projects": {
    path: "/projects",
    title: "Open-Source Projects | Aistrale & SARAISE",
    description:
      "Architect of two open-source, enterprise-grade platforms: Aistrale (GenAI governance & LLMOps) and SARAISE (enterprise AI governance fabric).",
    keywords: {
      primary: "Aistrale SARAISE",
      secondary: [
        "GenAI governance",
        "LLMOps platform",
        "AI governance fabric",
      ],
      longtail: [
        "open source GenAI governance platform",
        "enterprise AI governance open source",
      ],
    },
    intent: "informational",
    schema: [personSchema],
    targetICP: [],
    primaryCTA: "View on GitHub",
  },

  "/contact": {
    path: "/contact",
    title: "Contact Raghunath Chava | Get In Touch",
    description:
      "Get in touch with Raghunath Chava. Interested in discussing GenAI platform operations, LLMOps, or Responsible AI? Let's connect.",
    keywords: {
      primary: "contact Raghunath Chava",
      secondary: ["GenAI consultation", "LLMOps expert", "AI governance"],
      longtail: [
        "contact GenAI platform operations expert",
        "LLMOps consultant contact",
      ],
    },
    intent: "transactional",
    schema: [personSchema],
    targetICP: [],
    primaryCTA: "Send Email",
  },

  // -------------------------------------------------------------------------
  // Company Pages (new routes)
  // -------------------------------------------------------------------------
  "/company/about": {
    path: "/company/about",
    title: "About BuildWorks.AI & Raghunath Chava | Enterprise AI Company",
    description:
      "BuildWorks.AI builds enterprise-grade AI products with open source innovation. Learn about Raghunath Chava, our flagship AI-enabled ERP platform.",
    keywords: {
      primary: "about BuildWorks.AI",
      secondary: [
        "BuildWorks.AI company",
        "Raghunath Chava company",
        "enterprise AI company",
      ],
      longtail: [
        "about BuildWorks.AI",
        "Raghunath Chava ERP company information",
        "enterprise AI software company India",
      ],
    },
    intent: "informational",
    schema: [personSchema],
    targetICP: ["ceo", "cto"],
    primaryCTA: "Learn More",
  },

  "/company/contact": {
    path: "/company/contact",
    title: "Contact BuildWorks.AI | Raghunath Chava Support & Sales",
    description:
      "Contact BuildWorks.AI for Raghunath Chava inquiries, support, partnerships, and enterprise sales. Email, address, and business hours.",
    keywords: {
      primary: "contact BuildWorks.AI",
      secondary: [
        "Raghunath Chava contact",
        "ERP support contact",
        "enterprise software contact",
      ],
      longtail: [
        "contact Raghunath Chava support",
        "BuildWorks.AI email address",
        "Raghunath Chava ERP customer service",
      ],
    },
    intent: "transactional",
    schema: [],
    targetICP: ["ceo", "cfo", "cto"],
    primaryCTA: "Get in Touch",
  },

  "/company/careers": {
    path: "/company/careers",
    title: "Careers at BuildWorks.AI | Join Our Team",
    description:
      "Join BuildWorks.AI and help build the future of enterprise AI. Careers in AI, ERP development, and enterprise software.",
    keywords: {
      primary: "BuildWorks.AI careers",
      secondary: [
        "Raghunath Chava jobs",
        "ERP developer jobs",
        "enterprise AI careers",
      ],
      longtail: [
        "jobs at BuildWorks.AI",
        "Raghunath Chava ERP developer positions",
        "enterprise software engineering jobs",
      ],
    },
    intent: "informational",
    schema: [],
    targetICP: ["developer", "cto"],
    primaryCTA: "View Careers",
  },

  // -------------------------------------------------------------------------
  // Blog Articles (Content Clusters)
  // -------------------------------------------------------------------------
  "/resources/blog/open-source-erp-benefits": {
    path: "/resources/blog/open-source-erp-benefits",
    title: "10 Benefits of Open Source ERP | Raghunath Chava",
    description:
      "Discover why open-source ERP solutions offer cost savings, flexibility, and innovation for modern businesses.",
    keywords: {
      primary: "open source ERP benefits",
      secondary: ["open source ERP advantages", "ERP cost savings"],
      longtail: [
        "benefits of open source ERP software",
        "why choose open source ERP",
      ],
    },
    intent: "informational",
    schema: [
      {
        type: "Article",
        data: {
          "@type": "Article",
          headline: "10 Benefits of Open Source ERP for Modern Businesses",
          author: {
            "@type": "Organization",
            name: "Raghunath Chava",
          },
        },
      },
    ],
    targetICP: ["cfo", "cto"],
    primaryCTA: "Learn More",
  },

  "/resources/blog/self-hosted-vs-saas": {
    path: "/resources/blog/self-hosted-vs-saas",
    title: "Self-Hosted vs SaaS ERP Comparison | Raghunath Chava",
    description:
      "Compare self-hosted and SaaS ERP deployment models to determine the best fit for your organization.",
    keywords: {
      primary: "self-hosted vs SaaS ERP",
      secondary: ["ERP deployment models", "ERP hosting options"],
      longtail: ["self-hosted ERP vs cloud ERP", "SaaS ERP vs on-premise ERP"],
    },
    intent: "informational",
    schema: [
      {
        type: "Article",
        data: {
          "@type": "Article",
          headline: "Self-Hosted vs SaaS ERP: Which is Right for You?",
          author: {
            "@type": "Organization",
            name: "Raghunath Chava",
          },
        },
      },
    ],
    targetICP: ["cto", "cfo"],
    primaryCTA: "Compare Options",
  },

  "/resources/blog/ai-agents-in-erp": {
    path: "/resources/blog/ai-agents-in-erp",
    title: "AI Agents in ERP: The Future | Raghunath Chava",
    description:
      "Explore how AI agents are transforming ERP systems, automating business operations, and enabling autonomous workflows.",
    keywords: {
      primary: "AI agents in ERP",
      secondary: ["AI-powered ERP", "ERP automation"],
      longtail: ["AI agents for business automation", "future of ERP with AI"],
    },
    intent: "informational",
    schema: [
      {
        type: "Article",
        data: {
          "@type": "Article",
          headline: "AI Agents in ERP: The Future of Business Automation",
          author: {
            "@type": "Organization",
            name: "Raghunath Chava",
          },
        },
      },
    ],
    targetICP: ["cto", "ceo"],
    primaryCTA: "Learn About AI",
  },

  "/resources/blog/erp-security-best-practices": {
    path: "/resources/blog/erp-security-best-practices",
    title: "ERP Security Best Practices | Raghunath Chava",
    description:
      "Essential security practices for protecting your ERP system and sensitive business data in enterprise deployments.",
    keywords: {
      primary: "ERP security best practices",
      secondary: ["ERP security", "enterprise security"],
      longtail: ["ERP security guidelines", "enterprise ERP security measures"],
    },
    intent: "informational",
    schema: [
      {
        type: "Article",
        data: {
          "@type": "Article",
          headline: "ERP Security Best Practices for Enterprise Deployments",
          author: {
            "@type": "Organization",
            name: "Raghunath Chava",
          },
        },
      },
    ],
    targetICP: ["ciso", "cto"],
    primaryCTA: "View Security",
  },

  "/resources/blog/roi-calculation": {
    path: "/resources/blog/roi-calculation",
    title: "ERP ROI Calculation Guide | Raghunath Chava",
    description:
      "Learn how to calculate ERP ROI, including direct cost savings and efficiency gains. Use our ROI calculator.",
    keywords: {
      primary: "ERP ROI calculation",
      secondary: ["ERP ROI", "ERP cost savings"],
      longtail: [
        "how to calculate ERP ROI",
        "ERP return on investment calculator",
      ],
    },
    intent: "informational",
    schema: [
      {
        type: "Article",
        data: {
          "@type": "Article",
          headline: "ROI Calculation: When Does ERP Pay for Itself?",
          author: {
            "@type": "Organization",
            name: "Raghunath Chava",
          },
        },
      },
    ],
    targetICP: ["cfo", "ceo"],
    primaryCTA: "Calculate ROI",
  },
};

// =============================================================================
// Content Clusters
// =============================================================================

export const contentClusters: ContentCluster[] = [
  // -------------------------------------------------------------------------
  // ERP Platform Cluster
  // -------------------------------------------------------------------------
  {
    name: "ERP Platform",
    topic: "Enterprise Resource Planning Software",
    pillar: pageSEOConfigs["/product"] as PageSEO,
    clusters: [
      pageSEOConfigs["/product/features"] as PageSEO,
      pageSEOConfigs["/product/modules"] as PageSEO,
      pageSEOConfigs["/product/architecture"] as PageSEO,
    ],
    internalLinks: [
      {
        from: "/product",
        to: "/product/features",
        anchorText: "Explore all features",
        context: "Feature overview section",
      },
      {
        from: "/product",
        to: "/product/modules",
        anchorText: "Browse module catalog",
        context: "Module overview section",
      },
      {
        from: "/product",
        to: "/product/architecture",
        anchorText: "View technical architecture",
        context: "Technical section",
      },
      {
        from: "/product/features",
        to: "/product/modules",
        anchorText: "See available modules",
        context: "Feature to module connection",
      },
      {
        from: "/product/modules",
        to: "/product/architecture",
        anchorText: "Learn about the architecture",
        context: "Technical deep-dive",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Industry Solutions Cluster
  // -------------------------------------------------------------------------
  {
    name: "Industry Solutions",
    topic: "Industry-Specific ERP Solutions",
    pillar: {
      path: "/solutions",
      title: "Industry Solutions | Raghunath Chava ERP",
      description:
        "Industry-specific ERP solutions for manufacturing, healthcare, retail, professional services, and hospitality.",
      keywords: {
        primary: "industry ERP solutions",
        secondary: ["vertical ERP", "industry software", "specialized ERP"],
        longtail: [
          "ERP for specific industries",
          "vertical market ERP software",
          "industry-specific business software",
        ],
      },
      intent: "commercial",
      schema: [],
      targetICP: ["coo", "ceo"],
      primaryCTA: "Find Your Solution",
    },
    clusters: [
      pageSEOConfigs["/solutions/manufacturing"] as PageSEO,
      pageSEOConfigs["/solutions/healthcare"] as PageSEO,
      pageSEOConfigs["/solutions/retail"] as PageSEO,
      pageSEOConfigs["/solutions/professional-services"] as PageSEO,
      pageSEOConfigs["/solutions/hospitality"] as PageSEO,
    ],
    internalLinks: [
      {
        from: "/solutions",
        to: "/solutions/manufacturing",
        anchorText: "Manufacturing ERP",
        context: "Industry card",
      },
      {
        from: "/solutions",
        to: "/solutions/healthcare",
        anchorText: "Healthcare ERP",
        context: "Industry card",
      },
      {
        from: "/solutions",
        to: "/solutions/retail",
        anchorText: "Retail & POS",
        context: "Industry card",
      },
      {
        from: "/solutions",
        to: "/solutions/professional-services",
        anchorText: "Professional Services",
        context: "Industry card",
      },
      {
        from: "/solutions",
        to: "/solutions/hospitality",
        anchorText: "Hospitality",
        context: "Industry card",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Enterprise Cluster
  // -------------------------------------------------------------------------
  {
    name: "Enterprise",
    topic: "Enterprise ERP Solutions",
    pillar: pageSEOConfigs["/enterprise"] as PageSEO,
    clusters: [
      pageSEOConfigs["/enterprise/security"] as PageSEO,
      pageSEOConfigs["/enterprise/support"] as PageSEO,
      pageSEOConfigs["/enterprise/case-studies"] as PageSEO,
    ],
    internalLinks: [
      {
        from: "/enterprise",
        to: "/enterprise/security",
        anchorText: "Security & Compliance",
        context: "Enterprise features section",
      },
      {
        from: "/enterprise",
        to: "/enterprise/support",
        anchorText: "Enterprise Support",
        context: "Support section",
      },
      {
        from: "/enterprise",
        to: "/enterprise/case-studies",
        anchorText: "Customer Success Stories",
        context: "Social proof section",
      },
      {
        from: "/enterprise/security",
        to: "/enterprise/support",
        anchorText: "Learn about support options",
        context: "CTA section",
      },
      {
        from: "/enterprise/case-studies",
        to: "/contact",
        anchorText: "Contact us to learn more",
        context: "CTA section",
      },
    ],
  },
];

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Get SEO config for a specific page path
 * Returns a default config if the path is not found
 */
export function getPageSEO(path: string): PageSEO {
  const config = pageSEOConfigs[path];
  if (config) {
    return config;
  }

  // Default SEO config for pages without explicit config
  return {
    path,
    title: `Raghunath Chava | ${path.split("/").pop() || "Page"}`,
    description: `Raghunath Chava - GenAI platform operations expert with 27+ years experience.`,
    canonical: `${BASE_URL}${path}`,
    keywords: {
      primary: "Raghunath Chava ERP",
      secondary: ["open source ERP", "AI-ready ERP"],
      longtail: ["Raghunath Chava ERP platform"],
    },
    intent: "informational",
    schema: [personSchema],
    openGraph: {
      title: `Raghunath Chava | ${path.split("/").pop() || "Page"}`,
      description: `Raghunath Chava - GenAI platform operations expert.`,
      image: DEFAULT_OG_IMAGE,
      type: "website",
    },
    targetICP: ["developer"],
    primaryCTA: "Get Started",
  };
}

/**
 * Get all pages with a specific SERP intent
 */
export function getPagesByIntent(intent: SERPIntent): PageSEO[] {
  return Object.values(pageSEOConfigs).filter((page) => page.intent === intent);
}

/**
 * Get content cluster by name
 */
export function getContentCluster(name: string): ContentCluster | undefined {
  return contentClusters.find((cluster) => cluster.name === name);
}

/**
 * Get all internal links for a page
 */
export function getInternalLinksFrom(
  path: string,
): ContentCluster["internalLinks"] {
  const links: ContentCluster["internalLinks"] = [];
  for (const cluster of contentClusters) {
    links.push(...cluster.internalLinks.filter((link) => link.from === path));
  }
  return links;
}

/**
 * Get all pages that link to a specific page
 */
export function getInternalLinksTo(
  path: string,
): ContentCluster["internalLinks"] {
  const links: ContentCluster["internalLinks"] = [];
  for (const cluster of contentClusters) {
    links.push(...cluster.internalLinks.filter((link) => link.to === path));
  }
  return links;
}

/**
 * Validate that a page has complete keyword configuration
 */
export function hasCompleteKeywords(keywords: KeywordConfig): boolean {
  return (
    keywords.primary.length > 0 &&
    keywords.secondary.length > 0 &&
    keywords.longtail.length > 0
  );
}

/**
 * Validate that a content cluster has proper structure
 */
export function isValidContentCluster(cluster: ContentCluster): boolean {
  return (
    cluster.pillar !== undefined &&
    cluster.clusters.length > 0 &&
    cluster.internalLinks.length > 0
  );
}

/**
 * Get all page paths
 */
export function getAllPagePaths(): string[] {
  return Object.keys(pageSEOConfigs);
}

/**
 * Check if meta title is within character limit
 */
export function isValidMetaTitle(title: string): boolean {
  return title.length <= 60;
}

/**
 * Check if meta description is within character limit
 */
export function isValidMetaDescription(description: string): boolean {
  return description.length <= 160;
}
