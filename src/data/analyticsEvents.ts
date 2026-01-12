/**
 * https://raghunathchava.com
 * Analytics Events Configuration
 *
 * Defines all event names, conversion definitions, and funnel stages.
 *
 * Requirements: 4.6
 */
import type {
  EventDefinition,
  ConversionDefinition,
  FunnelConfig,
  FunnelStageDefinition,
} from "@/types/analytics";

export const eventDefinitions: EventDefinition[] = [
  {
    name: "cta_click",
    category: "conversion",
    triggers: ["button[data-tracking-id]", "a[data-tracking-id]"],
    properties: [
      "elementId",
      "elementType",
      "elementText",
      "targetUrl",
      "trackingId",
      "icpTarget",
    ],
    description: "CTA button or link clicked",
  },
  {
    name: "form_start",
    category: "form",
    triggers: ["form"],
    properties: ["formId", "formName"],
    description: "User started filling out a form",
  },
  {
    name: "form_submit",
    category: "form",
    triggers: ["form[onsubmit]"],
    properties: ["formId", "formName", "fieldsCompleted", "totalFields"],
    description: "Form submitted successfully",
  },
  {
    name: "roi_calculator_used",
    category: "conversion",
    triggers: ["#roi-calculator button"],
    properties: [
      "annualSavings",
      "threeYearROI",
      "paybackPeriod",
      "currentERPCost",
      "employees",
    ],
    description: "ROI calculator was used",
  },
  {
    name: "download",
    category: "download",
    triggers: ["a[download]", "a[href$='.pdf']"],
    properties: ["fileName", "fileType", "downloadUrl"],
    description: "File download initiated",
  },
  {
    name: "video_play",
    category: "video",
    triggers: ["video[onplay]"],
    properties: ["videoId", "videoTitle", "action"],
    description: "Video playback started",
  },
  {
    name: "scroll_depth",
    category: "engagement",
    triggers: ["window[scroll]"],
    properties: ["depth", "path"],
    description: "User scrolled to specific depth",
  },
];

export const conversionDefinitions: ConversionDefinition[] = [
  {
    id: "signup",
    name: "Free Signup",
    type: "signup",
    funnelStage: "purchase",
    value: 0,
    targetICP: ["developer", "cto"],
  },
  {
    id: "demo_request",
    name: "Demo Request",
    type: "demo_request",
    funnelStage: "evaluation",
    value: 100,
    targetICP: ["cfo", "ceo", "coo"],
  },
  {
    id: "contact_form",
    name: "Contact Form Submission",
    type: "contact_form",
    funnelStage: "evaluation",
    value: 50,
    targetICP: ["cfo", "ceo", "cto"],
  },
  {
    id: "enterprise_inquiry",
    name: "Enterprise Inquiry",
    type: "contact_form",
    funnelStage: "intent",
    value: 500,
    targetICP: ["cfo", "ceo"],
  },
  {
    id: "trial_start",
    name: "Trial Started",
    type: "trial_start",
    funnelStage: "purchase",
    value: 200,
    targetICP: ["developer", "cto", "vp-engineering"],
  },
];

const funnelStages: FunnelStageDefinition[] = [
  {
    name: "awareness",
    order: 1,
    events: ["page_view"],
    targetConversionRate: 100,
    description: "User visits the website for the first time",
  },
  {
    name: "interest",
    order: 2,
    events: ["scroll_depth", "page_view"],
    targetConversionRate: 40,
    description: "User engages with content (scrolls, views multiple pages)",
  },
  {
    name: "consideration",
    order: 3,
    events: ["page_view", "cta_click"],
    targetConversionRate: 20,
    description: "User views feature pages or clicks CTAs",
  },
  {
    name: "intent",
    order: 4,
    events: ["page_view", "roi_calculator_used"],
    targetConversionRate: 10,
    description: "User visits pricing page or uses ROI calculator",
  },
  {
    name: "evaluation",
    order: 5,
    events: ["form_start", "demo_request"],
    targetConversionRate: 5,
    description: "User starts contact form or requests demo",
  },
  {
    name: "purchase",
    order: 6,
    events: ["form_submit", "signup", "trial_start"],
    targetConversionRate: 2,
    description: "User completes signup or trial",
  },
];

export const funnelConfig: FunnelConfig = {
  name: "Raghunath Chava Marketing Funnel",
  stages: funnelStages,
};
