/**
 * https://raghunathchava.com
 * Product Overview Page
 *
 * Requirements: 1.2, 2.1
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SEO } from "@/components/seo/SEO";
import { getPageSEO } from "@/data/seo";
import { messagingHierarchy } from "@/data/messaging";

const seo = getPageSEO("/product");

export function ProductOverview() {
  const heroConfig = {
    headline: "AI-Ready ERP Platform Built for Modern Enterprises",
    subheadline: messagingHierarchy.brand.positioning,
    primaryCTA: {
      label: "View Architecture",
      href: "/product/architecture",
      variant: "primary" as const,
      trackingId: "cta_product_architecture",
      icpTarget: "cto" as const,
    },
    secondaryCTA: {
      label: "Explore Modules",
      href: "/product/modules",
      variant: "secondary" as const,
      trackingId: "cta_product_modules",
    },
    variant: "product" as const,
  };

  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main>
        <Hero {...heroConfig} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Product Overview</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive ERP solution with modular architecture, AI-ready
              design, and enterprise-grade security.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
