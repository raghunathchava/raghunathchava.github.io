/**
 * https://raghunathchava.com
 * Enhanced Retail Solutions Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { Hero } from "@/components/Hero";
import { InfoCard } from "@/components/sections/InfoCard";
import { getPageSEO } from "@/data/seo";
import {
  ShoppingCart,
  Package,
  Tag,
  Users,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const seo = getPageSEO("/solutions/retail");

export function SolutionsRetail() {
  const heroConfig = {
    headline: "Retail & POS Management",
    subheadline:
      "Point of sale, inventory management, and merchandising for modern retail operations",
    primaryCTA: {
      label: "Get Started",
      href: "https://subscribe.saraise.com?industry=retail",
      variant: "primary" as const,
      trackingId: "cta_solutions_retail_start",
      icpTarget: "developer" as const,
      external: true,
    },
    variant: "solution" as const,
  };

  const retailFeatures = [
    {
      icon: ShoppingCart,
      title: "Point of Sale (POS)",
      description:
        "Modern POS system with offline support, multiple payment methods, and receipt printing.",
      cta: {
        label: "Learn More",
        href: "/product/modules#point-of-sale",
      },
    },
    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Real-time inventory tracking with automated reordering and stock level alerts.",
      cta: {
        label: "View Features",
        href: "/product/features",
      },
    },
    {
      icon: Tag,
      title: "Merchandising",
      description:
        "Product catalog management with pricing, promotions, and multi-channel support.",
      cta: {
        label: "Explore Modules",
        href: "/product/modules",
      },
    },
    {
      icon: Users,
      title: "Customer Management",
      description:
        "Comprehensive CRM with loyalty programs, purchase history, and customer insights.",
      cta: {
        label: "See CRM",
        href: "/product/modules#crm",
      },
    },
  ];

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Inventory Accuracy Issues",
      description:
        "Discrepancies between physical inventory and system records cause stockouts, overstock, and lost sales.",
      solution:
        "Real-time inventory synchronization across all channels (POS, online, warehouse) ensures accurate stock levels. Automated cycle counting and reconciliation reduce discrepancies by 80-90%.",
    },
    {
      icon: AlertTriangle,
      title: "Multi-Channel Complexity",
      description:
        "Managing inventory, pricing, and orders across online, in-store, and marketplace channels is complex and error-prone.",
      solution:
        "Unified multi-channel management with real-time synchronization. Single source of truth for inventory, pricing, and customer data across all channels.",
    },
    {
      icon: AlertTriangle,
      title: "Slow Checkout and Long Lines",
      description:
        "Inefficient POS systems and slow payment processing create long checkout lines, reducing customer satisfaction.",
      solution:
        "Modern POS with offline support, fast payment processing, and mobile checkout options reduce checkout time by 40-50% and improve customer experience.",
    },
    {
      icon: AlertTriangle,
      title: "Limited Customer Insights",
      description:
        "Lack of customer data and purchase history makes it difficult to personalize experiences and drive repeat purchases.",
      solution:
        "Comprehensive CRM with purchase history, preferences, and loyalty program integration enables personalized marketing and improves customer lifetime value by 25-35%.",
    },
  ];

  const roiExamples = [
    {
      metric: "80-90%",
      label: "Reduction in Inventory Discrepancies",
      description: "Real-time synchronization",
    },
    {
      metric: "40-50%",
      label: "Faster Checkout Times",
      description: "Modern POS system",
    },
    {
      metric: "25-35%",
      label: "Increase in Customer Lifetime Value",
      description: "Personalized experiences",
    },
    {
      metric: "30-40%",
      label: "Reduction in Stockouts",
      description: "AI-powered demand forecasting",
    },
  ];

  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main>
        <Hero {...heroConfig} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Overview */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Retail Solutions</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Complete retail management with POS, inventory, merchandising,
                  and customer relationship management. Built for modern retail
                  with multi-channel support and real-time synchronization.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {retailFeatures.map((feature, index) => (
                  <InfoCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    cta={feature.cta}
                  />
                ))}
              </div>
            </section>

            {/* Pain Points and Solutions */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Retail Challenges and Solutions
              </h2>
              <div className="space-y-6">
                {painPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">
                            {point.title}
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            {point.description}
                          </p>
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <div className="flex items-start gap-2 mb-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                                Raghunath Chava Solution:
                              </p>
                            </div>
                            <p className="text-sm text-muted-foreground ml-7">
                              {point.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ROI Examples */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Proven Results for Retail Organizations
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {roiExamples.map((example, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-deepBlue mb-2">
                      {example.metric}
                    </div>
                    <div className="font-semibold mb-2">{example.label}</div>
                    <div className="text-sm text-muted-foreground">
                      {example.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Integration Scenarios */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Retail Integration Scenarios
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    E-commerce and Marketplace Integration
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with e-commerce platforms and marketplaces for
                    unified inventory and order management across all sales
                    channels.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Real-time inventory sync with Shopify, WooCommerce,
                        Amazon
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unified order management across all channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Automated fulfillment and shipping updates</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Payment and Loyalty Systems
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Integrate with payment processors and loyalty programs for
                    seamless transactions and customer engagement.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Multiple payment methods (credit cards, mobile payments,
                        gift cards)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Loyalty program integration with points and rewards
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Customer purchase history and preference tracking
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Retail Operations?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                See how Raghunath Chava's retail modules can improve inventory accuracy,
                speed up checkout, and enhance customer experiences. Get started
                today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="https://subscribe.saraise.com?industry=retail"
                  className="px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-teal transition-colors"
                >
                  Get Started Free
                </Link>
                <Link
                  to="/product/modules"
                  className="px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:shadow-md transition-shadow"
                >
                  Explore Retail Modules
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
