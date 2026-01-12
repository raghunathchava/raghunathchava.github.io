/**
 * https://raghunathchava.com
 * Analytics Type Definitions for Raghunath Chava Marketing Website
 */

import type { ICP } from "./components";

// =============================================================================
// Event Types
// =============================================================================

/**
 * Analytics event categories
 */
export type EventCategory =
  | "navigation"
  | "conversion"
  | "engagement"
  | "error"
  | "form"
  | "video"
  | "download";

/**
 * Base analytics event
 */
export interface AnalyticsEvent {
  /** Event name */
  name: string;
  /** Event category */
  category: EventCategory;
  /** Event properties */
  properties?: Record<string, string | number | boolean>;
  /** Timestamp */
  timestamp?: number;
}

/**
 * Page view event
 */
export interface PageViewEvent {
  /** Page path */
  path: string;
  /** Page title */
  title: string;
  /** Referrer URL */
  referrer?: string;
  /** Page load time in ms */
  loadTime?: number;
}

/**
 * Click event for interactive elements
 */
export interface ClickEvent extends AnalyticsEvent {
  category: "navigation" | "conversion" | "engagement";
  properties: {
    /** Element identifier */
    elementId: string;
    /** Element type */
    elementType: "button" | "link" | "card" | "tab" | "menu";
    /** Element text/label */
    elementText: string;
    /** Target URL if applicable */
    targetUrl?: string;
    /** Position in list if applicable */
    position?: number;
  };
}

/**
 * Form event
 */
export interface FormEvent extends AnalyticsEvent {
  category: "form";
  properties: {
    /** Form identifier */
    formId: string;
    /** Form name */
    formName: string;
    /** Form action (start, submit, error, abandon) */
    action: "start" | "submit" | "error" | "abandon";
    /** Error message if applicable */
    errorMessage?: string;
    /** Fields completed */
    fieldsCompleted?: number;
    /** Total fields */
    totalFields?: number;
  };
}

/**
 * Scroll depth event
 */
export interface ScrollEvent extends AnalyticsEvent {
  category: "engagement";
  properties: {
    /** Scroll depth percentage */
    depth: 25 | 50 | 75 | 100;
    /** Page path */
    path: string;
  };
}

/**
 * Video event
 */
export interface VideoEvent extends AnalyticsEvent {
  category: "video";
  properties: {
    /** Video identifier */
    videoId: string;
    /** Video title */
    videoTitle: string;
    /** Video action */
    action: "play" | "pause" | "complete" | "progress";
    /** Progress percentage */
    progress?: number;
    /** Duration watched in seconds */
    duration?: number;
  };
}

// =============================================================================
// Conversion Types
// =============================================================================

/**
 * Conversion funnel stages
 */
export type FunnelStage =
  | "awareness"
  | "interest"
  | "consideration"
  | "intent"
  | "evaluation"
  | "purchase";

/**
 * Conversion types
 */
export type ConversionType =
  | "signup"
  | "demo_request"
  | "contact_form"
  | "download"
  | "newsletter"
  | "trial_start"
  | "purchase";

/**
 * Conversion event definition
 */
export interface ConversionDefinition {
  /** Unique conversion identifier */
  id: string;
  /** Conversion name */
  name: string;
  /** Conversion type */
  type: ConversionType;
  /** Associated funnel stage */
  funnelStage: FunnelStage;
  /** Monetary value if applicable */
  value?: number;
  /** Target ICP for this conversion */
  targetICP?: ICP[];
}

/**
 * Conversion event
 */
export interface ConversionEvent {
  /** Conversion definition ID */
  conversionId: string;
  /** Conversion value */
  value?: number;
  /** Additional properties */
  properties?: Record<string, string | number | boolean>;
  /** Timestamp */
  timestamp: number;
}

// =============================================================================
// Funnel Types
// =============================================================================

/**
 * Funnel stage definition
 */
export interface FunnelStageDefinition {
  /** Stage name */
  name: FunnelStage;
  /** Stage order (1-6) */
  order: number;
  /** Events that indicate this stage */
  events: string[];
  /** Target conversion rate */
  targetConversionRate?: number;
  /** Description */
  description: string;
}

/**
 * Funnel configuration
 */
export interface FunnelConfig {
  /** Funnel name */
  name: string;
  /** Funnel stages */
  stages: FunnelStageDefinition[];
}

// =============================================================================
// UTM Types
// =============================================================================

/**
 * UTM parameter set
 */
export interface UTMParams {
  /** Traffic source (e.g., google, linkedin, twitter) */
  utm_source?: string;
  /** Marketing medium (e.g., cpc, organic, social, email) */
  utm_medium?: string;
  /** Campaign name */
  utm_campaign?: string;
  /** Ad content/variant identifier */
  utm_content?: string;
  /** Paid search keyword */
  utm_term?: string;
}

/**
 * Campaign template for UTM generation
 */
export interface CampaignTemplate {
  /** Campaign name */
  name: string;
  /** Traffic source */
  source: string;
  /** Marketing medium */
  medium: string;
  /** Content variant */
  content?: string;
  /** Search term */
  term?: string;
  /** Target ICP */
  targetICP?: ICP;
  /** Campaign intent */
  intent?: "awareness" | "consideration" | "conversion";
}

// =============================================================================
// Analytics Configuration Types
// =============================================================================

/**
 * Event definition for configuration
 */
export interface EventDefinition {
  /** Event name */
  name: string;
  /** Event category */
  category: EventCategory;
  /** CSS selectors or page paths that trigger this event */
  triggers: string[];
  /** Properties to capture */
  properties: string[];
  /** Description */
  description?: string;
}

/**
 * Analytics configuration
 */
export interface AnalyticsConfig {
  /** Google Analytics 4 Measurement ID */
  ga4MeasurementId?: string;
  /** Google Tag Manager Container ID */
  gtmContainerId?: string;
  /** Event definitions */
  events: EventDefinition[];
  /** Conversion definitions */
  conversions: ConversionDefinition[];
  /** Funnel configuration */
  funnel: FunnelConfig;
  /** Debug mode */
  debug?: boolean;
}

// =============================================================================
// User Properties Types
// =============================================================================

/**
 * User properties for analytics
 */
export interface UserProperties {
  /** User ID (if authenticated) */
  userId?: string;
  /** Identified ICP */
  icp?: ICP;
  /** Company name */
  company?: string;
  /** Industry */
  industry?: string;
  /** First visit timestamp */
  firstVisit?: number;
  /** Session count */
  sessionCount?: number;
  /** UTM parameters from first visit */
  firstTouchUTM?: UTMParams;
  /** UTM parameters from current session */
  lastTouchUTM?: UTMParams;
}

// =============================================================================
// Analytics Hook Return Types
// =============================================================================

/**
 * Return type for useAnalytics hook
 */
export interface UseAnalyticsReturn {
  /** Track a custom event */
  trackEvent: (event: AnalyticsEvent) => void;
  /** Track a page view */
  trackPageView: (path: string, title: string) => void;
  /** Track a conversion */
  trackConversion: (conversionId: string, value?: number) => void;
  /** Set user properties */
  setUserProperties: (properties: Partial<UserProperties>) => void;
  /** Get current UTM parameters */
  getUTMParams: () => UTMParams | null;
  /** Check if analytics is enabled */
  isEnabled: boolean;
}

// =============================================================================
// A/B Testing Types
// =============================================================================

/**
 * A/B test variant
 */
export interface ABTestVariant {
  /** Variant ID */
  id: string;
  /** Variant name */
  name: string;
  /** Traffic allocation (0-100) */
  allocation: number;
}

/**
 * A/B test definition
 */
export interface ABTest {
  /** Test ID */
  id: string;
  /** Test name */
  name: string;
  /** Test hypothesis */
  hypothesis: string;
  /** Success metric */
  successMetric: string;
  /** Test variants */
  variants: ABTestVariant[];
  /** Target pages */
  targetPages: string[];
  /** Start date */
  startDate?: string;
  /** End date */
  endDate?: string;
  /** Test status */
  status: "draft" | "running" | "paused" | "completed";
}

/**
 * A/B test candidate for future testing
 */
export interface ABTestCandidate {
  /** Candidate name */
  name: string;
  /** Test hypothesis */
  hypothesis: string;
  /** Success metric */
  successMetric: string;
  /** Target element or page */
  target: string;
  /** Priority (1-5) */
  priority: number;
  /** Estimated impact */
  estimatedImpact: "low" | "medium" | "high";
}
