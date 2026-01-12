/**
 * https://raghunathchava.com
 * SEO Component for Raghunath Chava Marketing Website
 *
 * This component handles meta tags, Open Graph, Twitter Cards, and canonical URLs.
 * It ensures proper SEO metadata is applied to all pages.
 *
 * Requirements: 4.4, 4.5
 */

import { Helmet } from "react-helmet-async";
import type { SEOProps } from "@/types/seo";

interface SEOComponentProps extends SEOProps {
  /** Additional meta tags */
  children?: React.ReactNode;
}

/**
 * SEO component that manages all meta tags and structured data
 */
export function SEO({
  title,
  description,
  canonical,
  ogImage,
  schema = [],
  noindex = false,
  additionalMeta = [],
  children,
}: SEOComponentProps) {
  // Validate title length (≤60 characters)
  if (title.length > 60) {
    console.warn(
      `SEO: Title exceeds 60 characters (${title.length}): ${title}`,
    );
  }

  // Validate description length (≤160 characters)
  if (description.length > 160) {
    console.warn(
      `SEO: Description exceeds 160 characters (${description.length}): ${description}`,
    );
  }

  // Default canonical URL to current page if not provided
  const canonicalUrl =
    canonical || (typeof window !== "undefined" ? window.location.href : "");

  // Default OG image
  const defaultOgImage = "/assets/og-default.png";
  const ogImageUrl = ogImage || defaultOgImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Raghunath Chava" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:site" content="@saraise_erp" />

      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta
          key={index}
          {...(meta.name ? { name: meta.name } : {})}
          {...(meta.property ? { property: meta.property } : {})}
          content={meta.content}
        />
      ))}

      {/* JSON-LD Schema Markup */}
      {schema.map((schemaItem, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              ...schemaItem.data,
            }),
          }}
        />
      ))}

      {/* Additional children (custom meta tags, etc.) */}
      {children}
    </Helmet>
  );
}

export default SEO;
