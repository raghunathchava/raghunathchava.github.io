/**
 * https://raghunathchava.com
 * Analytics Configuration Data for Raghunath Chava Marketing Website
 *
 * This file contains analytics configurations including:
 * - Event definitions and tracking setup
 * - Conversion definitions and funnel stages
 * - UTM taxonomy and campaign tracking
 *
 * Requirements: 7.1, 7.2, 7.3
 */

import type {
  AnalyticsConfig,
  EventDefinition,
  ConversionDefinition,
  FunnelStageDefinition,
  AnalyticsEvent,
  ConversionEvent,
  CampaignTemplate,
  ABTestCandidate,
} from "@/types/analytics";
import type { ICP } from "@/types/components";

// =============================================================================
// Analytics Configuration
// =============================================================================

export const analyticsConfig: AnalyticsConfig = {
  ga4MeasurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID || "G-XXXXXXXXXX",
  gtmContainerId: import.meta.env.VITE_GTM_CONTAINER_ID || "GTM-XXXXXXX",
  debug: import.meta.env.DEV,

  events: [],
  conversions: [],
  funnel: {
    name: "Raghunath Chava Marketing Funnel",
    stages: [],
  },
};

// =============================================================================
// Event Definitions
// =============================================================================

export const eventDefinitions: EventDefinition[] = [
  // Navigation Events
  {
    name: "page_view",
    category: "navigation",
    description: "User views a page",
    triggers: ["page_load"],
    properties: ["page_path", "page_title", "referrer"],
  },
  {
    name: "navigation_click",
    category: "navigation",
    description: "User clicks navigation menu item",
    triggers: ['nav[data-tracking="navigation"]'],
    properties: ["nav_item", "nav_section"],
  },

  // Engagement Events
  {
    name: "scroll_depth",
    category: "engagement",
    description: "User scrolls to specific depth",
    triggers: ["scroll_25", "scroll_50", "scroll_75", "scroll_100"],
    properties: ["scroll_depth", "page_path"],
  },
  {
    name: "video_play",
    category: "video",
    description: "User plays video content",
    triggers: ['video[data-tracking="video"]'],
    properties: ["video_title", "video_duration"],
  },

  // CTA Events
  {
    name: "cta_click",
    category: "conversion",
    description: "User clicks call-to-action button",
    triggers: ['button[data-tracking="cta"]', 'a[data-tracking="cta"]'],
    properties: ["cta_label", "cta_type", "cta_position", "page_path"],
  },
  {
    name: "hero_cta_click",
    category: "conversion",
    description: "User clicks hero section CTA",
    triggers: ['[data-tracking="hero-cta"]'],
    properties: ["cta_label", "hero_variant"],
  },

  // Form Events
  {
    name: "form_start",
    category: "form",
    description: "User starts filling form",
    triggers: ['form[data-tracking="form"] input:first-child'],
    properties: ["form_name", "form_type"],
  },
  {
    name: "form_submit",
    category: "form",
    description: "User submits form",
    triggers: ['form[data-tracking="form"]'],
    properties: ["form_name", "form_success", "form_errors"],
  },

  // Download Events
  {
    name: "file_download",
    category: "download",
    description: "User downloads file",
    triggers: ['a[href$=".pdf"], a[href$=".zip"], a[href$=".doc"]'],
    properties: ["file_name", "file_type", "file_size"],
  },

  // Error Events
  {
    name: "error_404",
    category: "error",
    description: "404 page not found error",
    triggers: ["page_404"],
    properties: ["requested_url", "referrer"],
  },
];

// =============================================================================
// Conversion Definitions
// =============================================================================

export const conversionDefinitions: ConversionDefinition[] = [
  // Lead Generation Conversions
  {
    id: "contact_form_submission",
    name: "Contact Form Submission",
    type: "contact_form",
    funnelStage: "intent",
    value: 50,
    targetICP: ["cto", "cfo", "ceo"],
  },
  {
    id: "demo_request",
    name: "Demo Request",
    type: "demo_request",
    funnelStage: "evaluation",
    value: 100,
    targetICP: ["cto", "vp-engineering"],
  },
  {
    id: "whitepaper_download",
    name: "Whitepaper Download",
    type: "download",
    funnelStage: "consideration",
    value: 25,
    targetICP: ["cto", "ciso"],
  },

  // Engagement Conversions
  {
    id: "newsletter_signup",
    name: "Newsletter Signup",
    type: "newsletter",
    funnelStage: "interest",
    value: 15,
    targetICP: ["developer", "cto"],
  },

  // Self-Service Conversions
  {
    id: "get_started_click",
    name: "Get Started Click",
    type: "signup",
    funnelStage: "intent",
    value: 75,
    targetICP: ["developer", "cto"],
  },

  // Enterprise Conversions
  {
    id: "enterprise_contact",
    name: "Enterprise Contact",
    type: "contact_form",
    funnelStage: "purchase",
    value: 500,
    targetICP: ["ceo", "cfo"],
  },
];

// =============================================================================
// Funnel Stage Definitions
// =============================================================================

export const funnelStageDefinitions: FunnelStageDefinition[] = [
  {
    name: "awareness",
    order: 1,
    events: ["page_view", "external_link_click"],
    targetConversionRate: 0.15,
    description: "User becomes aware of Raghunath Chava",
  },
  {
    name: "interest",
    order: 2,
    events: ["scroll_depth", "navigation_click"],
    targetConversionRate: 0.25,
    description: "User shows interest in Raghunath Chava",
  },
  {
    name: "consideration",
    order: 3,
    events: ["whitepaper_download", "video_play"],
    targetConversionRate: 0.3,
    description: "User considers Raghunath Chava as solution",
  },
  {
    name: "intent",
    order: 4,
    events: ["contact_form_submit", "get_started_click", "cta_click"],
    targetConversionRate: 0.4,
    description: "User shows intent to purchase/try",
  },
  {
    name: "evaluation",
    order: 5,
    events: ["demo_request"],
    targetConversionRate: 0.2,
    description: "User evaluates Raghunath Chava solution",
  },
  {
    name: "purchase",
    order: 6,
    events: ["enterprise_contact"],
    targetConversionRate: 1.0,
    description: "User makes purchase decision",
  },
];

// =============================================================================
// Campaign Templates
// =============================================================================

export const campaignTemplates: CampaignTemplate[] = [
  // Google Ads Campaigns
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

  // LinkedIn Campaigns
  {
    name: "linkedin-cto-targeting",
    source: "linkedin",
    medium: "social",
    content: "sponsored-post",
    targetICP: "cto",
    intent: "consideration",
  },
  {
    name: "linkedin-cfo-targeting",
    source: "linkedin",
    medium: "social",
    content: "sponsored-post",
    targetICP: "cfo",
    intent: "conversion",
  },

  // Email Campaigns
  {
    name: "email-newsletter",
    source: "email",
    medium: "email",
    content: "newsletter",
    intent: "awareness",
  },
  {
    name: "email-product-announcement",
    source: "email",
    medium: "email",
    content: "product-update",
    intent: "consideration",
  },

  // Content Marketing
  {
    name: "blog-organic",
    source: "organic",
    medium: "blog",
    content: "article",
    intent: "awareness",
  },
  {
    name: "webinar-promotion",
    source: "webinar",
    medium: "event",
    content: "registration",
    intent: "consideration",
  },
];

// =============================================================================
// A/B Test Candidates
// =============================================================================

export const abTestCandidates: ABTestCandidate[] = [
  {
    name: "Hero CTA Text",
    hypothesis:
      'Changing "Get Started Free" to "Try Raghunath Chava Now" will increase click-through rate',
    successMetric: "hero_cta_click_rate",
    target: "hero-cta-button",
    priority: 5,
    estimatedImpact: "high",
  },
  {
    name: "Pricing Page Layout",
    hypothesis:
      "Moving Enterprise plan to the left will increase enterprise inquiries",
    successMetric: "enterprise_contact_rate",
    target: "pricing-plans-section",
    priority: 4,
    estimatedImpact: "medium",
  },
  {
    name: "Navigation Menu Order",
    hypothesis:
      'Moving "Pricing" before "Product" will increase pricing page visits',
    successMetric: "pricing_page_visit_rate",
    target: "main-navigation",
    priority: 3,
    estimatedImpact: "low",
  },
  {
    name: "Contact Form Fields",
    hypothesis:
      "Reducing form fields from 6 to 4 will increase form completion rate",
    successMetric: "contact_form_completion_rate",
    target: "contact-form",
    priority: 4,
    estimatedImpact: "high",
  },
  {
    name: "Social Proof Placement",
    hypothesis:
      "Moving customer logos above the fold will increase trust and conversions",
    successMetric: "overall_conversion_rate",
    target: "social-proof-section",
    priority: 3,
    estimatedImpact: "medium",
  },
];

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Get event definition by name
 */
export function getEventDefinition(
  eventName: string,
): EventDefinition | undefined {
  return eventDefinitions.find((event) => event.name === eventName);
}

/**
 * Get conversion definition by ID
 */
export function getConversionDefinition(
  conversionId: string,
): ConversionDefinition | undefined {
  return conversionDefinitions.find(
    (conversion) => conversion.id === conversionId,
  );
}

/**
 * Get funnel stage definition
 */
export function getFunnelStageDefinition(
  stage: string,
): FunnelStageDefinition | undefined {
  return funnelStageDefinitions.find(
    (stageDefinition) => stageDefinition.name === stage,
  );
}

/**
 * Get events by category
 */
export function getEventsByCategory(category: string): EventDefinition[] {
  return eventDefinitions.filter((event) => event.category === category);
}

/**
 * Get conversions by ICP
 */
export function getConversionsByICP(icp: string): ConversionDefinition[] {
  return conversionDefinitions.filter((conversion) =>
    conversion.targetICP?.includes(icp as ICP),
  );
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
 * Get next funnel stage
 */
export function getNextFunnelStage(
  currentStage: string,
): FunnelStageDefinition | undefined {
  const current = getFunnelStageDefinition(currentStage);
  if (!current) return undefined;

  return funnelStageDefinitions.find(
    (stage) => stage.order === current.order + 1,
  );
}

/**
 * Get previous funnel stage
 */
export function getPreviousFunnelStage(
  currentStage: string,
): FunnelStageDefinition | undefined {
  const current = getFunnelStageDefinition(currentStage);
  if (!current) return undefined;

  return funnelStageDefinitions.find(
    (stage) => stage.order === current.order - 1,
  );
}

// =============================================================================
// Analytics Event Builders
// =============================================================================

/**
 * Build page view event
 */
export function buildPageViewEvent(
  path: string,
  title: string,
): AnalyticsEvent {
  return {
    name: "page_view",
    category: "navigation",
    properties: {
      page_path: path,
      page_title: title,
      referrer: typeof document !== "undefined" ? document.referrer : "",
    },
    timestamp: Date.now(),
  };
}

/**
 * Build CTA click event
 */
export function buildCTAClickEvent(
  ctaLabel: string,
  ctaType: string,
  position?: string,
): AnalyticsEvent {
  return {
    name: "cta_click",
    category: "conversion",
    properties: {
      cta_label: ctaLabel,
      cta_type: ctaType,
      ...(position && { cta_position: position }),
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
    },
    timestamp: Date.now(),
  };
}

/**
 * Build form submission event
 */
export function buildFormSubmissionEvent(
  formName: string,
  success: boolean,
  errors?: string[],
): AnalyticsEvent {
  return {
    name: "form_submit",
    category: "form",
    properties: {
      form_name: formName,
      form_success: success,
      form_errors: errors?.join(", ") || "",
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
    },
    timestamp: Date.now(),
  };
}

/**
 * Build conversion event
 */
export function buildConversionEvent(
  conversionId: string,
  value?: number,
  properties?: Record<string, string | number | boolean>,
): ConversionEvent {
  return {
    conversionId,
    value,
    properties,
    timestamp: Date.now(),
  };
}

export default analyticsConfig;
