/**
 * https://raghunathchava.com
 * Component Type Definitions for Raghunath Chava Marketing Website
 */

// =============================================================================
// ICP (Ideal Customer Profile) Types
// =============================================================================

/**
 * Target buyer personas for Raghunath Chava
 */
export type ICP =
  | "developer"
  | "cto"
  | "vp-engineering"
  | "solution-architect"
  | "ciso"
  | "cfo"
  | "coo"
  | "ceo";

/**
 * Technical vs Economic buyer classification
 */
export type BuyerType = "technical" | "economic";

// =============================================================================
// CTA (Call-To-Action) Types
// =============================================================================

/**
 * CTA button variants
 */
export type CTAVariant = "primary" | "secondary" | "ghost" | "outline";

/**
 * CTA configuration for buttons and links
 */
export interface CTAConfig {
  /** Button/link label text */
  label: string;
  /** Target URL or route */
  href: string;
  /** Visual variant */
  variant: CTAVariant;
  /** Analytics tracking identifier */
  trackingId: string;
  /** Target persona for this CTA */
  icpTarget?: ICP;
  /** Whether this is an external link */
  external?: boolean;
  /** Whether the CTA is disabled */
  disabled?: boolean;
}

// =============================================================================
// Hero Component Types
// =============================================================================

/**
 * Hero section variants for different page types
 */
export type HeroVariant =
  | "home"
  | "product"
  | "solution"
  | "enterprise"
  | "resource";

/**
 * Social proof display in hero sections
 */
export interface HeroSocialProof {
  /** Type of social proof */
  type: "logos" | "stats" | "testimonial";
  /** Content based on type */
  content: string | string[];
}

/**
 * Hero component props
 */
export interface HeroProps {
  /** Outcome-focused headline */
  headline: string;
  /** Supporting value proposition */
  subheadline: string;
  /** Primary call-to-action */
  primaryCTA: CTAConfig;
  /** Optional secondary call-to-action */
  secondaryCTA?: CTAConfig;
  /** Optional social proof display */
  socialProof?: HeroSocialProof;
  /** Hero variant for styling */
  variant?: HeroVariant;
  /** Optional badge text */
  badge?: string;
}

// =============================================================================
// Feature Component Types
// =============================================================================

/**
 * Feature display following Feature → Capability → Outcome hierarchy
 */
export interface Feature {
  /** Feature name/title */
  title: string;
  /** What the feature enables (capability) */
  capability: string;
  /** Business result/outcome */
  outcome: string;
  /** Icon identifier (lucide-react icon name) */
  icon: string;
  /** Optional link to feature details */
  link?: string;
  /** Optional image URL */
  image?: string;
}

/**
 * Feature section layout options
 */
export type FeatureSectionLayout = "grid" | "alternating" | "cards" | "list";

/**
 * Feature section component props
 */
export interface FeatureSectionProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Features to display */
  features: Feature[];
  /** Layout variant */
  layout: FeatureSectionLayout;
  /** Optional background variant */
  background?: "default" | "muted" | "gradient";
}

// =============================================================================
// Pricing Component Types
// =============================================================================

/**
 * Billing cycle options
 */
export type BillingCycle = "monthly" | "annual";

/**
 * Price value - can be a number or 'custom' for enterprise
 */
export type PriceValue = number | "custom" | "free";

/**
 * Pricing tier/plan definition
 */
export interface PricingPlan {
  /** Plan name */
  name: string;
  /** Plan description */
  description: string;
  /** Price configuration */
  price: {
    monthly: PriceValue;
    annual: PriceValue;
  };
  /** List of included features */
  features: string[];
  /** CTA configuration */
  cta: CTAConfig;
  /** Whether this plan is highlighted/featured */
  highlighted?: boolean;
  /** Optional badge (e.g., "Most Popular", "Coming Soon") */
  badge?: string;
  /** Target ICP for this plan */
  targetICP?: ICP[];
}

/**
 * Module add-on pricing
 */
export interface ModuleAddon {
  /** Module name */
  name: string;
  /** Module category */
  category: "foundation" | "core" | "industry";
  /** Industry vertical (for industry modules) */
  industry?: string;
  /** Price per month */
  price: PriceValue;
  /** Brief description */
  description: string;
}

/**
 * Pricing component props
 */
export interface PricingProps {
  /** Available plans */
  plans: PricingPlan[];
  /** Current billing cycle selection */
  billingCycle: BillingCycle;
  /** Callback when billing cycle changes */
  onBillingToggle: (cycle: BillingCycle) => void;
  /** Optional module add-ons */
  addons?: ModuleAddon[];
  /** Show comparison table */
  showComparison?: boolean;
}

// =============================================================================
// Social Proof Component Types
// =============================================================================

/**
 * Customer logo for social proof
 */
export interface Logo {
  /** Company name */
  name: string;
  /** Logo image URL */
  src: string;
  /** Alt text */
  alt: string;
  /** Optional link to case study */
  caseStudyLink?: string;
}

/**
 * Customer testimonial
 */
export interface Testimonial {
  /** Quote text */
  quote: string;
  /** Author name */
  author: string;
  /** Author job title */
  title: string;
  /** Company name */
  company: string;
  /** Optional author avatar URL */
  avatar?: string;
  /** Optional company logo URL */
  logo?: string;
  /** Industry vertical */
  industry?: string;
}

/**
 * Statistics for social proof
 */
export interface Stat {
  /** Stat value (e.g., "99.9%", "10K+") */
  value: string;
  /** Stat label (e.g., "Uptime", "Users") */
  label: string;
  /** Optional description */
  description?: string;
  /** Optional icon */
  icon?: string;
}

/**
 * Case study reference
 */
export interface CaseStudy {
  /** Case study title */
  title: string;
  /** Company name */
  company: string;
  /** Industry vertical */
  industry: string;
  /** Brief summary */
  summary: string;
  /** Key results/metrics */
  results: Stat[];
  /** Link to full case study */
  link: string;
  /** Optional featured image */
  image?: string;
}

/**
 * Social proof display variants
 */
export type SocialProofVariant =
  | "logos"
  | "testimonials"
  | "stats"
  | "case-studies"
  | "combined";

/**
 * Social proof component props
 */
export interface SocialProofProps {
  /** Display variant */
  variant: SocialProofVariant;
  /** Customer logos */
  logos?: Logo[];
  /** Customer testimonials */
  testimonials?: Testimonial[];
  /** Statistics */
  stats?: Stat[];
  /** Case studies */
  caseStudies?: CaseStudy[];
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
}

// =============================================================================
// Navigation Component Types
// =============================================================================

/**
 * Navigation item (can be nested)
 */
export interface NavItem {
  /** Display label */
  label: string;
  /** Target URL or route */
  href: string;
  /** Child navigation items (for mega menu) */
  children?: NavItem[];
  /** Whether to highlight as CTA button */
  cta?: boolean;
  /** Optional description (for mega menu items) */
  description?: string;
  /** Optional icon */
  icon?: string;
  /** Whether this is an external link */
  external?: boolean;
}

/**
 * Navigation component props
 */
export interface NavigationProps {
  /** Current page path */
  currentPath: string;
  /** Current theme */
  theme: "light" | "dark";
  /** Theme toggle callback */
  onThemeToggle: () => void;
  /** Navigation items */
  items?: NavItem[];
}

// =============================================================================
// Form Component Types
// =============================================================================

/**
 * Contact form data
 */
export interface ContactFormData {
  /** Contact name */
  name: string;
  /** Email address */
  email: string;
  /** Company name */
  company: string;
  /** Role/persona */
  role: ICP;
  /** Message content */
  message: string;
  /** Company size (optional) */
  companySize?: string;
  /** Industry (optional) */
  industry?: string;
  /** How they heard about us (optional) */
  source?: string;
}

/**
 * Form field validation rule
 */
export interface ValidationRule {
  /** Whether field is required */
  required?: boolean;
  /** Minimum length */
  minLength?: number;
  /** Maximum length */
  maxLength?: number;
  /** Regex pattern */
  pattern?: RegExp;
  /** Custom validation function */
  validate?: (value: string) => boolean | string;
  /** Error message */
  message?: string;
}

/**
 * Form field configuration
 */
export interface FormField {
  /** Field name */
  name: string;
  /** Field label */
  label: string;
  /** Field type */
  type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox";
  /** Placeholder text */
  placeholder?: string;
  /** Validation rules */
  validation?: ValidationRule;
  /** Options for select/radio fields */
  options?: { value: string; label: string }[];
  /** Whether to show this field based on progressive disclosure */
  showWhen?: (formData: Partial<ContactFormData>) => boolean;
}
