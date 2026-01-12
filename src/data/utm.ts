/**
 * https://raghunathchava.com
 * UTM Taxonomy Configuration for Raghunath Chava Marketing Website
 *
 * This file contains UTM parameter taxonomy and campaign templates.
 * Defines valid sources, mediums, and campaign naming conventions.
 *
 * Requirements: 5.3, 7.4
 */

import type { CampaignTemplate } from "@/types/analytics";
import type { ICP } from "@/types/components";

// =============================================================================
// UTM Taxonomy Configuration
// =============================================================================

/**
 * UTM taxonomy defining valid parameter values
 */
export interface UTMTaxonomy {
  /** Valid traffic sources */
  sources: string[];
  /** Valid marketing mediums */
  mediums: string[];
  /** Campaign naming pattern (regex) */
  campaignPattern?: string;
  /** Content naming pattern (regex) */
  contentPattern?: string;
  /** Term naming pattern (regex) */
  termPattern?: string;
}

/**
 * Raghunath Chava UTM taxonomy
 * Following standard UTM conventions with Raghunath Chava-specific additions
 */
export const utmTaxonomy: UTMTaxonomy = {
  sources: [
    // Search Engines
    "google",
    "bing",
    "yahoo",
    "duckduckgo",
    "baidu",

    // Social Media
    "linkedin",
    "twitter",
    "facebook",
    "youtube",
    "reddit",
    "hackernews",
    "dev.to",
    "stackoverflow",

    // Email
    "email",
    "newsletter",
    "mailchimp",
    "sendgrid",

    // Referral & Partnership
    "referral",
    "partner",
    "affiliate",
    "integration",

    // Direct & Organic
    "direct",
    "organic",

    // Content & PR
    "blog",
    "press",
    "podcast",
    "webinar",
    "whitepaper",

    // Events
    "conference",
    "meetup",
    "workshop",
    "tradeshow",

    // Advertising Networks
    "adwords",
    "facebook-ads",
    "linkedin-ads",
    "twitter-ads",
    "display",
    "retargeting",

    // Developer Platforms
    "github",
    "gitlab",
    "docker",
    "npm",
    "pypi",

    // Community
    "community",
    "forum",
    "slack",
    "discord",
  ],

  mediums: [
    // Paid Advertising
    "cpc", // Cost per click
    "cpm", // Cost per mille
    "cpa", // Cost per acquisition
    "display", // Display advertising
    "video", // Video advertising
    "shopping", // Shopping ads
    "retargeting", // Retargeting campaigns

    // Organic
    "organic", // Organic search
    "referral", // Referral traffic
    "direct", // Direct traffic

    // Social Media
    "social", // General social media
    "social-organic", // Organic social posts
    "social-paid", // Paid social promotion

    // Email Marketing
    "email", // Email campaigns
    "newsletter", // Newsletter
    "automation", // Email automation

    // Content Marketing
    "blog", // Blog posts
    "content", // Content marketing
    "seo", // SEO content
    "guest-post", // Guest posting

    // Events & PR
    "event", // Events
    "webinar", // Webinars
    "podcast", // Podcasts
    "press", // Press releases
    "pr", // Public relations

    // Partnerships
    "partnership", // Partnerships
    "integration", // Integration partnerships
    "affiliate", // Affiliate marketing

    // Developer Marketing
    "developer", // Developer marketing
    "api", // API documentation
    "sdk", // SDK promotion
    "open-source", // Open source promotion
  ],

  // Campaign naming convention: {quarter}-{year}-{target}-{type}
  // Example: q1-2026-manufacturing-awareness
  campaignPattern: "^(q[1-4]-20[2-9][0-9]|[a-z0-9-]+)$",

  // Content naming convention: {type}-{variant}
  // Example: text-ad-1, banner-hero, video-demo
  contentPattern: "^[a-z0-9-]+$",

  // Term naming convention: lowercase with hyphens
  // Example: erp-software, open-source-erp
  termPattern: "^[a-z0-9-\\s]+$",
};

// =============================================================================
// Campaign Templates
// =============================================================================

/**
 * Pre-defined campaign templates for common marketing activities
 */
export const campaignTemplates: CampaignTemplate[] = [
  // =============================================================================
  // Google Ads Campaigns
  // =============================================================================
  {
    name: "google-ads-erp-software",
    source: "google",
    medium: "cpc",
    content: "text-ad",
    term: "erp software",
    targetICP: "cto",
    intent: "consideration",
  },
  {
    name: "google-ads-open-source-erp",
    source: "google",
    medium: "cpc",
    content: "text-ad",
    term: "open source erp",
    targetICP: "developer",
    intent: "awareness",
  },
  {
    name: "google-ads-manufacturing-erp",
    source: "google",
    medium: "cpc",
    content: "text-ad",
    term: "manufacturing erp",
    targetICP: "coo",
    intent: "consideration",
  },
  {
    name: "google-ads-enterprise-erp",
    source: "google",
    medium: "cpc",
    content: "text-ad",
    term: "enterprise erp",
    targetICP: "cfo",
    intent: "conversion",
  },

  // =============================================================================
  // LinkedIn Campaigns
  // =============================================================================
  {
    name: "linkedin-cto-targeting",
    source: "linkedin",
    medium: "social-paid",
    content: "sponsored-post",
    targetICP: "cto",
    intent: "consideration",
  },
  {
    name: "linkedin-cfo-targeting",
    source: "linkedin",
    medium: "social-paid",
    content: "sponsored-post",
    targetICP: "cfo",
    intent: "conversion",
  },
  {
    name: "linkedin-developer-targeting",
    source: "linkedin",
    medium: "social-paid",
    content: "carousel-ad",
    targetICP: "developer",
    intent: "awareness",
  },
  {
    name: "linkedin-vp-engineering-targeting",
    source: "linkedin",
    medium: "social-paid",
    content: "video-ad",
    targetICP: "vp-engineering",
    intent: "consideration",
  },

  // =============================================================================
  // Email Campaigns
  // =============================================================================
  {
    name: "email-newsletter-weekly",
    source: "email",
    medium: "newsletter",
    content: "weekly-digest",
    intent: "awareness",
  },
  {
    name: "email-product-announcement",
    source: "email",
    medium: "email",
    content: "product-update",
    intent: "consideration",
  },
  {
    name: "email-webinar-invitation",
    source: "email",
    medium: "email",
    content: "webinar-invite",
    intent: "consideration",
  },
  {
    name: "email-trial-nurture",
    source: "email",
    medium: "automation",
    content: "trial-sequence",
    intent: "conversion",
  },

  // =============================================================================
  // Content Marketing
  // =============================================================================
  {
    name: "blog-organic-seo",
    source: "organic",
    medium: "blog",
    content: "article",
    intent: "awareness",
  },
  {
    name: "guest-post-promotion",
    source: "referral",
    medium: "guest-post",
    content: "article",
    intent: "awareness",
  },
  {
    name: "whitepaper-download",
    source: "content",
    medium: "content",
    content: "whitepaper",
    intent: "consideration",
  },

  // =============================================================================
  // Social Media Organic
  // =============================================================================
  {
    name: "twitter-organic-engagement",
    source: "twitter",
    medium: "social-organic",
    content: "post",
    intent: "awareness",
  },
  {
    name: "linkedin-organic-thought-leadership",
    source: "linkedin",
    medium: "social-organic",
    content: "article",
    intent: "awareness",
  },
  {
    name: "reddit-community-engagement",
    source: "reddit",
    medium: "social-organic",
    content: "comment",
    intent: "awareness",
  },

  // =============================================================================
  // Developer Marketing
  // =============================================================================
  {
    name: "github-open-source-promotion",
    source: "github",
    medium: "developer",
    content: "repository",
    targetICP: "developer",
    intent: "awareness",
  },
  {
    name: "stackoverflow-developer-engagement",
    source: "stackoverflow",
    medium: "developer",
    content: "answer",
    targetICP: "developer",
    intent: "awareness",
  },
  {
    name: "dev-to-technical-content",
    source: "dev.to",
    medium: "developer",
    content: "article",
    targetICP: "developer",
    intent: "consideration",
  },

  // =============================================================================
  // Events & Webinars
  // =============================================================================
  {
    name: "webinar-erp-modernization",
    source: "webinar",
    medium: "event",
    content: "registration",
    intent: "consideration",
  },
  {
    name: "conference-booth-qr-code",
    source: "conference",
    medium: "event",
    content: "qr-code",
    intent: "awareness",
  },
  {
    name: "meetup-sponsorship",
    source: "meetup",
    medium: "event",
    content: "sponsorship",
    intent: "awareness",
  },

  // =============================================================================
  // Partnerships & Integrations
  // =============================================================================
  {
    name: "partner-referral-program",
    source: "partner",
    medium: "partnership",
    content: "referral",
    intent: "conversion",
  },
  {
    name: "integration-marketplace",
    source: "integration",
    medium: "partnership",
    content: "listing",
    intent: "consideration",
  },

  // =============================================================================
  // Retargeting Campaigns
  // =============================================================================
  {
    name: "retargeting-website-visitors",
    source: "google",
    medium: "retargeting",
    content: "display-ad",
    intent: "conversion",
  },
  {
    name: "retargeting-trial-users",
    source: "facebook",
    medium: "retargeting",
    content: "video-ad",
    intent: "conversion",
  },
];

// =============================================================================
// UTM Helper Functions
// =============================================================================

/**
 * Generate UTM URL with parameters
 */
export function generateUTMUrl(
  baseUrl: string,
  utm: {
    source: string;
    medium: string;
    campaign: string;
    content?: string;
    term?: string;
  },
): string {
  try {
    const url = new URL(baseUrl);

    url.searchParams.set("utm_source", utm.source);
    url.searchParams.set("utm_medium", utm.medium);
    url.searchParams.set("utm_campaign", utm.campaign);

    if (utm.content) {
      url.searchParams.set("utm_content", utm.content);
    }

    if (utm.term) {
      url.searchParams.set("utm_term", utm.term);
    }

    return url.toString();
  } catch (error) {
    console.warn("[UTM] Failed to generate UTM URL:", error);
    return baseUrl;
  }
}

/**
 * Get campaign template by name
 */
export function getCampaignTemplate(
  name: string,
): CampaignTemplate | undefined {
  return campaignTemplates.find((template) => template.name === name);
}

/**
 * Get campaign templates by ICP
 */
export function getCampaignTemplatesByICP(icp: ICP): CampaignTemplate[] {
  return campaignTemplates.filter((template) => template.targetICP === icp);
}

/**
 * Get campaign templates by intent
 */
export function getCampaignTemplatesByIntent(
  intent: "awareness" | "consideration" | "conversion",
): CampaignTemplate[] {
  return campaignTemplates.filter((template) => template.intent === intent);
}

/**
 * Validate UTM parameter against taxonomy
 */
export function validateUTMParameter(
  paramType: "source" | "medium",
  value: string,
): boolean {
  switch (paramType) {
    case "source":
      return utmTaxonomy.sources.includes(value);
    case "medium":
      return utmTaxonomy.mediums.includes(value);
    default:
      return false;
  }
}

/**
 * Get suggested UTM values for autocomplete
 */
export function getUTMSuggestions(paramType: "source" | "medium"): string[] {
  switch (paramType) {
    case "source":
      return [...utmTaxonomy.sources].sort();
    case "medium":
      return [...utmTaxonomy.mediums].sort();
    default:
      return [];
  }
}

/**
 * Generate campaign name following naming convention
 */
export function generateCampaignName(
  quarter: string,
  year: string,
  target: string,
  type: string,
): string {
  return `${quarter}-${year}-${target}-${type}`.toLowerCase();
}

/**
 * Parse campaign name to extract components
 */
export function parseCampaignName(campaignName: string): {
  quarter?: string;
  year?: string;
  target?: string;
  type?: string;
} | null {
  const parts = campaignName.split("-");

  if (parts.length >= 4) {
    return {
      quarter: parts[0],
      year: parts[1],
      target: parts[2],
      type: parts[3],
    };
  }

  return null;
}

export default utmTaxonomy;
