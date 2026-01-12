/**
 * https://raghunathchava.com
 * Enhanced Hospitality Solutions Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { Hero } from "@/components/Hero";
import { InfoCard } from "@/components/sections/InfoCard";
import { getPageSEO } from "@/data/seo";
import {
  Building,
  Calendar,
  UserCheck,
  Utensils,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const seo = getPageSEO("/solutions/hospitality");

export function SolutionsHospitality() {
  const heroConfig = {
    headline: "Hospitality Management Platform",
    subheadline:
      "Property management, reservations, and guest services for hotels, resorts, and hospitality businesses",
    primaryCTA: {
      label: "Contact Sales",
      href: "/company/contact?type=enterprise&industry=hospitality",
      variant: "primary" as const,
      trackingId: "cta_solutions_hospitality_contact",
      icpTarget: "cfo" as const,
    },
    variant: "solution" as const,
  };

  const hospitalityFeatures = [
    {
      icon: Building,
      title: "Property Management",
      description:
        "Multi-property management with room types, rates, and availability tracking.",
      cta: {
        label: "Learn More",
        href: "/product/modules#property-management",
      },
    },
    {
      icon: Calendar,
      title: "Reservation System",
      description:
        "Complete reservation management with online booking, check-in/out, and guest history.",
      cta: {
        label: "View Features",
        href: "/product/features",
      },
    },
    {
      icon: UserCheck,
      title: "Guest Services",
      description:
        "Comprehensive guest management with preferences, requests, and loyalty programs.",
      cta: {
        label: "Explore Services",
        href: "/product/modules#guest-services",
      },
    },
    {
      icon: Utensils,
      title: "F&B Management",
      description:
        "Restaurant and bar management with menu planning, ordering, and inventory control.",
      cta: {
        label: "See F&B",
        href: "/product/modules#food-beverage",
      },
    },
  ];

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Low Occupancy and Revenue Optimization",
      description:
        "Manual rate management and lack of demand forecasting result in suboptimal pricing and low occupancy rates.",
      solution:
        "AI-powered demand forecasting and dynamic pricing optimize rates based on demand, seasonality, and market conditions. Automated rate adjustments increase revenue per available room (RevPAR) by 15-25%.",
    },
    {
      icon: AlertTriangle,
      title: "Inefficient Reservation Management",
      description:
        "Managing reservations across multiple channels (online, phone, walk-in) is complex and error-prone, leading to overbooking or lost bookings.",
      solution:
        "Unified reservation system with real-time availability across all channels. Automated overbooking prevention and channel synchronization eliminate booking errors and maximize occupancy.",
    },
    {
      icon: AlertTriangle,
      title: "Poor Guest Experience",
      description:
        "Lack of guest preference tracking and personalized service reduces guest satisfaction and repeat bookings.",
      solution:
        "Comprehensive guest management with preference tracking, loyalty programs, and personalized service recommendations. Improved guest satisfaction increases repeat bookings by 20-30%.",
    },
    {
      icon: AlertTriangle,
      title: "F&B Cost Control Challenges",
      description:
        "Manual F&B inventory and cost tracking makes it difficult to control food costs and optimize menu profitability.",
      solution:
        "Integrated F&B management with real-time inventory tracking, cost analysis, and menu profitability reporting. Automated cost tracking reduces food costs by 10-15% while maintaining quality.",
    },
  ];

  const roiExamples = [
    {
      metric: "15-25%",
      label: "Increase in RevPAR",
      description: "Dynamic pricing optimization",
    },
    {
      metric: "20-30%",
      label: "Increase in Repeat Bookings",
      description: "Improved guest experience",
    },
    {
      metric: "10-15%",
      label: "Reduction in Food Costs",
      description: "F&B cost control",
    },
    {
      metric: "30-40%",
      label: "Reduction in Booking Errors",
      description: "Unified reservation system",
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
                <h2 className="text-3xl font-bold mb-4">
                  Hospitality Solutions
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Complete hospitality management with property management,
                  reservation systems, and guest services. Optimize occupancy,
                  enhance guest experiences, and maximize revenue.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {hospitalityFeatures.map((feature, index) => (
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
                Hospitality Challenges and Solutions
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
                Proven Results for Hospitality Organizations
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
                Hospitality Integration Scenarios
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Online Travel Agencies (OTAs)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Integrate with Booking.com, Expedia, and other OTAs for
                    seamless inventory and reservation synchronization.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Real-time availability sync with OTA platforms
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Automated reservation import from OTAs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unified guest management across all channels</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Payment and Point of Sale Systems
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with payment processors and POS systems for seamless
                    transactions across property and F&B operations.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Integrated payment processing for room charges and F&B
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Unified billing and folio management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Loyalty program integration with points and rewards
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Hospitality Operations?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                See how Raghunath Chava's hospitality modules can optimize occupancy,
                enhance guest experiences, and maximize revenue. Schedule a demo
                tailored to your hospitality business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/company/contact?type=enterprise&industry=hospitality"
                  className="px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-teal transition-colors"
                >
                  Contact Hospitality Sales
                </Link>
                <Link
                  to="/product/modules"
                  className="px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:shadow-md transition-shadow"
                >
                  Explore Hospitality Modules
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
