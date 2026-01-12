/**
 * https://raghunathchava.com
 * Investor Narrative Data for Raghunath Chava Marketing Website
 *
 * Requirements: 2.2, 3.1
 */
export interface MarketSize {
  market: string;
  size: string;
  growth: string;
  timeframe?: string;
}

export interface CompetitiveMoat {
  title: string;
  description: string;
}

export interface ExpansionPath {
  from: string;
  to: string;
  description: string;
  revenue?: string;
}

export const marketSize: MarketSize[] = [
  {
    market: "Global ERP market",
    size: "$50B+",
    growth: "10% CAGR",
  },
  {
    market: "Open-source ERP segment",
    size: "$2B+",
    growth: "accelerating",
  },
  {
    market: "AI in ERP",
    size: "$15B opportunity",
    growth: "by 2027",
    timeframe: "2027",
  },
];

export const whyNow = [
  "AI adoption reaching critical mass",
  "Cloud migration accelerating",
  "Open-source enterprise software maturity",
  "Developer-first buying behavior",
  "Cost optimization priorities",
];

export const competitiveMoat: CompetitiveMoat[] = [
  {
    title: "Open-Source Core",
    description:
      "Open-source approach creates adoption wedge. Free self-hosted tier removes friction for developers.",
  },
  {
    title: "Modular Ecosystem",
    description:
      "65+ modules create switching costs. Once integrated, customers build workflows around modules.",
  },
  {
    title: "AI Agents",
    description:
      "First-mover advantage in AI-ready ERP. Architecture designed for autonomous AI operations.",
  },
  {
    title: "Developer Experience",
    description:
      "Best-in-class DX attracts technical talent. Modern stack (Django, React, PostgreSQL) reduces onboarding time.",
  },
];

export const adoptionWedge = {
  description:
    "Free self-hosted tier removes friction. Developers can evaluate without procurement. Community adoption drives enterprise sales.",
  benefits: [
    "No procurement process required",
    "Full source code access",
    "Community-driven improvements",
    "Natural upgrade path to paid tiers",
  ],
};

export const expansionPaths: ExpansionPath[] = [
  {
    from: "Free",
    to: "Professional",
    description: "Support, SLAs, industry modules",
    revenue: "$299/month",
  },
  {
    from: "Self-Hosted",
    to: "SaaS",
    description: "Managed hosting, multi-tenant SaaS",
    revenue: "Custom pricing",
  },
  {
    from: "Core",
    to: "Industry Modules",
    description: "Vertical-specific modules",
    revenue: "$99-$149/month per module",
  },
  {
    from: "Professional",
    to: "Enterprise",
    description: "Custom integrations, dedicated support",
    revenue: "Custom pricing",
  },
];
