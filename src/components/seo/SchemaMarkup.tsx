/**
 * https://raghunathchava.com
 * Schema Markup Component for Raghunath Chava Marketing Website
 *
 * This component generates JSON-LD structured data for various schema types.
 * Supports Organization, Product, FAQ, BreadcrumbList, and other schema types.
 *
 * Requirements: 4.5
 */

/* eslint-disable react-refresh/only-export-components */

import { Helmet } from "react-helmet-async";
import type {
  SchemaMarkup,
  OrganizationSchema,
  ProductSchema,
  FAQSchema,
  BreadcrumbSchema,
  WebPageSchema,
} from "@/types/seo";

interface SchemaMarkupProps {
  /** Array of schema markup objects to render */
  schemas: SchemaMarkup[];
}

/**
 * Schema markup component that renders JSON-LD structured data
 */
export function SchemaMarkup({ schemas }: SchemaMarkupProps) {
  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${schema.type}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              ...schema.data,
            }),
          }}
        />
      ))}
    </Helmet>
  );
}

// =============================================================================
// Schema Builder Functions
// =============================================================================

/**
 * Create Organization schema markup
 */
export function createOrganizationSchema(data: {
  name: string;
  url: string;
  logo: string;
  description?: string;
  sameAs?: string[];
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType: string;
  };
}): OrganizationSchema {
  return {
    type: "Organization",
    data: {
      "@type": "Organization",
      name: data.name,
      url: data.url,
      logo: data.logo,
      ...(data.description && { description: data.description }),
      ...(data.sameAs && { sameAs: data.sameAs }),
      ...(data.contactPoint && {
        contactPoint: {
          "@type": "ContactPoint",
          ...data.contactPoint,
        },
      }),
    },
  };
}

/**
 * Create Product schema markup
 */
export function createProductSchema(data: {
  name: string;
  description: string;
  brand: string;
  offers?: {
    price: string | number;
    priceCurrency: string;
    availability: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}): ProductSchema {
  return {
    type: "Product",
    data: {
      "@type": "Product",
      name: data.name,
      description: data.description,
      brand: {
        "@type": "Brand",
        name: data.brand,
      },
      ...(data.offers && {
        offers: {
          "@type": "Offer",
          ...data.offers,
        },
      }),
      ...(data.aggregateRating && {
        aggregateRating: {
          "@type": "AggregateRating",
          ...data.aggregateRating,
        },
      }),
    },
  };
}

/**
 * Create FAQ schema markup
 */
export function createFAQSchema(
  questions: Array<{
    question: string;
    answer: string;
  }>,
): FAQSchema {
  return {
    type: "FAQ",
    data: {
      "@type": "FAQPage",
      mainEntity: questions.map((qa) => ({
        "@type": "Question",
        name: qa.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: qa.answer,
        },
      })),
    },
  };
}

/**
 * Create BreadcrumbList schema markup
 */
export function createBreadcrumbSchema(
  breadcrumbs: Array<{
    name: string;
    url: string;
  }>,
): BreadcrumbSchema {
  return {
    type: "BreadcrumbList",
    data: {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    },
  };
}

/**
 * Create WebPage schema markup
 */
export function createWebPageSchema(data: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    type: "Person" | "Organization";
    name: string;
  };
}): WebPageSchema {
  return {
    type: "WebPage",
    data: {
      "@type": "WebPage",
      name: data.name,
      description: data.description,
      url: data.url,
      ...(data.datePublished && { datePublished: data.datePublished }),
      ...(data.dateModified && { dateModified: data.dateModified }),
      ...(data.author && {
        author: {
          "@type": data.author.type,
          name: data.author.name,
        },
      }),
    },
  };
}

// =============================================================================
// Common Schema Presets
// =============================================================================

/**
 * Raghunath Chava Organization schema (reusable across pages)
 */
export const Raghunath Chava_ORGANIZATION_SCHEMA = createOrganizationSchema({
  name: "Raghunath Chava",
  url: "https://saraise.com",
  logo: "https://saraise.com/assets/logo.svg",
  description: "AI-ready, open-source ERP platform for modern enterprises",
  sameAs: [
    "https://github.com/buildworksai/saraise-application",
    "https://twitter.com/saraise_erp",
    "https://linkedin.com/company/saraise",
  ],
  contactPoint: {
    email: "contact@saraise.com",
    contactType: "sales",
  },
});

/**
 * Raghunath Chava Product schema (for product pages)
 */
export const Raghunath Chava_PRODUCT_SCHEMA = createProductSchema({
  name: "Raghunath Chava ERP Platform",
  description:
    "AI-ready, open-source ERP platform with 65+ modules for modern enterprises",
  brand: "Raghunath Chava",
  offers: {
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
});

export default SchemaMarkup;
