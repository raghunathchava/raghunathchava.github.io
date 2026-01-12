/**
 * https://raghunathchava.com
 * SEO Type Definitions for Raghunath Chava Marketing Website
 */

import type { ICP } from "./components";

// =============================================================================
// SERP Intent Types
// =============================================================================

/**
 * Search intent classification
 */
export type SERPIntent = "informational" | "commercial" | "transactional";

// =============================================================================
// Keyword Types
// =============================================================================

/**
 * Keyword configuration for a page
 */
export interface KeywordConfig {
  /** Primary keyword (main target) */
  primary: string;
  /** Secondary keywords */
  secondary: string[];
  /** Long-tail keywords */
  longtail: string[];
}

/**
 * Keyword with metadata
 */
export interface KeywordData {
  /** Keyword text */
  keyword: string;
  /** Search volume estimate */
  volume?: "low" | "medium" | "high";
  /** Competition level */
  competition?: "low" | "medium" | "high";
  /** Search intent */
  intent: SERPIntent;
  /** Priority (1-10) */
  priority?: number;
}

// =============================================================================
// Schema Markup Types
// =============================================================================

/**
 * Schema.org markup types supported
 */
export type SchemaType =
  | "Organization"
  | "Product"
  | "FAQ"
  | "BreadcrumbList"
  | "WebPage"
  | "Article"
  | "SoftwareApplication"
  | "HowTo"
  | "VideoObject";

/**
 * Base schema markup interface
 */
export interface SchemaMarkup {
  /** Schema type */
  type: SchemaType;
  /** Schema data */
  data: Record<string, unknown>;
}

/**
 * Organization schema
 */
export interface OrganizationSchema extends SchemaMarkup {
  type: "Organization";
  data: {
    "@type": "Organization";
    name: string;
    url: string;
    logo: string;
    description?: string;
    sameAs?: string[];
    contactPoint?: {
      "@type": "ContactPoint";
      telephone?: string;
      email?: string;
      contactType: string;
    };
  };
}

/**
 * Product schema
 */
export interface ProductSchema extends SchemaMarkup {
  type: "Product";
  data: {
    "@type": "Product";
    name: string;
    description: string;
    brand: {
      "@type": "Brand";
      name: string;
    };
    offers?: {
      "@type": "Offer";
      price: string | number;
      priceCurrency: string;
      availability: string;
    };
    aggregateRating?: {
      "@type": "AggregateRating";
      ratingValue: number;
      reviewCount: number;
    };
  };
}

/**
 * FAQ schema
 */
export interface FAQSchema extends SchemaMarkup {
  type: "FAQ";
  data: {
    "@type": "FAQPage";
    mainEntity: Array<{
      "@type": "Question";
      name: string;
      acceptedAnswer: {
        "@type": "Answer";
        text: string;
      };
    }>;
  };
}

/**
 * Breadcrumb schema
 */
export interface BreadcrumbSchema extends SchemaMarkup {
  type: "BreadcrumbList";
  data: {
    "@type": "BreadcrumbList";
    itemListElement: Array<{
      "@type": "ListItem";
      position: number;
      name: string;
      item: string;
    }>;
  };
}

/**
 * WebPage schema
 */
export interface WebPageSchema extends SchemaMarkup {
  type: "WebPage";
  data: {
    "@type": "WebPage";
    name: string;
    description: string;
    url: string;
    datePublished?: string;
    dateModified?: string;
    author?: {
      "@type": "Person" | "Organization";
      name: string;
    };
  };
}

// =============================================================================
// Page SEO Types
// =============================================================================

/**
 * Open Graph metadata
 */
export interface OpenGraphMeta {
  /** OG title */
  title: string;
  /** OG description */
  description: string;
  /** OG image URL */
  image?: string;
  /** OG type */
  type?: "website" | "article" | "product";
  /** OG URL */
  url?: string;
}

/**
 * Twitter Card metadata
 */
export interface TwitterCardMeta {
  /** Card type */
  card: "summary" | "summary_large_image";
  /** Twitter handle */
  site?: string;
  /** Creator handle */
  creator?: string;
}

/**
 * Page SEO configuration
 */
export interface PageSEO {
  /** Page path */
  path: string;
  /** Meta title (≤60 characters) */
  title: string;
  /** Meta description (≤160 characters) */
  description: string;
  /** Canonical URL */
  canonical?: string;
  /** Keyword configuration */
  keywords: KeywordConfig;
  /** Search intent */
  intent: SERPIntent;
  /** Schema markup */
  schema: SchemaMarkup[];
  /** Open Graph metadata */
  openGraph?: OpenGraphMeta;
  /** Twitter Card metadata */
  twitter?: TwitterCardMeta;
  /** Whether to noindex this page */
  noindex?: boolean;
  /** Whether to nofollow links on this page */
  nofollow?: boolean;
  /** Target ICP for this page */
  targetICP?: ICP[];
  /** Primary CTA for this page */
  primaryCTA?: string;
}

// =============================================================================
// Content Cluster Types
// =============================================================================

/**
 * Internal link definition
 */
export interface InternalLink {
  /** Source page path */
  from: string;
  /** Target page path */
  to: string;
  /** Anchor text */
  anchorText: string;
  /** Link context/description */
  context?: string;
}

/**
 * Content cluster definition
 */
export interface ContentCluster {
  /** Cluster name */
  name: string;
  /** Cluster topic */
  topic: string;
  /** Pillar page SEO config */
  pillar: PageSEO;
  /** Cluster pages SEO configs */
  clusters: PageSEO[];
  /** Internal links connecting cluster pages */
  internalLinks: InternalLink[];
}

// =============================================================================
// EEAT Types
// =============================================================================

/**
 * Author information for EEAT
 */
export interface Author {
  /** Author name */
  name: string;
  /** Author title/role */
  title?: string;
  /** Author bio */
  bio?: string;
  /** Author image URL */
  image?: string;
  /** Author social profiles */
  socialProfiles?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  /** Author expertise areas */
  expertise?: string[];
}

/**
 * Source citation for EEAT
 */
export interface SourceCitation {
  /** Source title */
  title: string;
  /** Source URL */
  url: string;
  /** Source author/organization */
  author?: string;
  /** Publication date */
  date?: string;
  /** Citation type */
  type: "article" | "study" | "documentation" | "official" | "news";
}

/**
 * EEAT signals for content pages
 */
export interface EEATSignals {
  /** Author attribution */
  author?: Author;
  /** Publication date */
  publishedDate?: string;
  /** Last modified date */
  modifiedDate?: string;
  /** Source citations */
  citations?: SourceCitation[];
  /** Reviewer information */
  reviewer?: Author;
  /** Review date */
  reviewDate?: string;
}

// =============================================================================
// SEO Component Props
// =============================================================================

/**
 * SEO component props
 */
export interface SEOProps {
  /** Meta title (≤60 characters) */
  title: string;
  /** Meta description (≤160 characters) */
  description: string;
  /** Canonical URL */
  canonical?: string;
  /** Open Graph image URL */
  ogImage?: string;
  /** Schema markup array */
  schema?: SchemaMarkup[];
  /** Whether to noindex */
  noindex?: boolean;
  /** Additional meta tags */
  additionalMeta?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
}

// =============================================================================
// Sitemap Types
// =============================================================================

/**
 * Sitemap entry
 */
export interface SitemapEntry {
  /** Page URL */
  url: string;
  /** Last modification date */
  lastmod?: string;
  /** Change frequency */
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  /** Priority (0.0 - 1.0) */
  priority?: number;
}

/**
 * Sitemap configuration
 */
export interface SitemapConfig {
  /** Base URL */
  baseUrl: string;
  /** Sitemap entries */
  entries: SitemapEntry[];
}

// =============================================================================
// SEO Audit Types
// =============================================================================

/**
 * SEO issue severity
 */
export type SEOIssueSeverity = "error" | "warning" | "info";

/**
 * SEO audit issue
 */
export interface SEOIssue {
  /** Issue type */
  type: string;
  /** Issue severity */
  severity: SEOIssueSeverity;
  /** Issue message */
  message: string;
  /** Affected page */
  page?: string;
  /** Recommendation */
  recommendation?: string;
}

/**
 * SEO audit result
 */
export interface SEOAuditResult {
  /** Audit timestamp */
  timestamp: number;
  /** Overall score (0-100) */
  score: number;
  /** Issues found */
  issues: SEOIssue[];
  /** Pages audited */
  pagesAudited: number;
}
