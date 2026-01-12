/**
 * https://raghunathchava.com
 * Enhanced Manufacturing Solutions Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { Hero } from "@/components/Hero";
import { InfoCard } from "@/components/sections/InfoCard";
import { getPageSEO } from "@/data/seo";
import {
  Factory,
  ClipboardCheck,
  TrendingUp,
  Package,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const seo = getPageSEO("/solutions/manufacturing");

export function SolutionsManufacturing() {
  const heroConfig = {
    headline: "Manufacturing ERP Built for Modern Production",
    subheadline:
      "Streamline production planning, shop floor control, and quality management with AI-powered automation",
    primaryCTA: {
      label: "Request Demo",
      href: "/company/contact?type=demo&industry=manufacturing",
      variant: "primary" as const,
      trackingId: "cta_solutions_manufacturing_demo",
      icpTarget: "coo" as const,
    },
    variant: "solution" as const,
  };

  const manufacturingFeatures = [
    {
      icon: Factory,
      title: "Production Planning",
      description:
        "Optimize production schedules with AI-powered demand forecasting and resource allocation.",
      cta: {
        label: "Learn More",
        href: "/product/modules#production-planning",
      },
    },
    {
      icon: ClipboardCheck,
      title: "Shop Floor Control",
      description:
        "Real-time monitoring and control of manufacturing operations with IoT integration.",
      cta: {
        label: "View Features",
        href: "/product/features",
      },
    },
    {
      icon: TrendingUp,
      title: "Quality Management",
      description:
        "Comprehensive quality control with inspection workflows and compliance tracking.",
      cta: {
        label: "Explore Quality",
        href: "/solutions/manufacturing#quality",
      },
    },
    {
      icon: Package,
      title: "Supply Chain Integration",
      description:
        "Seamless integration with suppliers and logistics partners for end-to-end visibility.",
      cta: {
        label: "See Integration",
        href: "/enterprise/integrations",
      },
    },
  ];

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Inventory Overstock and Stockouts",
      description:
        "Poor demand forecasting leads to excess inventory (increasing carrying costs) or stockouts (delaying production).",
      solution:
        "AI-powered demand forecasting and automated reorder points optimize inventory levels, reducing carrying costs by 20-30% while preventing stockouts.",
    },
    {
      icon: AlertTriangle,
      title: "Production Delays and Inefficiencies",
      description:
        "Manual production planning and scheduling result in bottlenecks, machine downtime, and missed deadlines.",
      solution:
        "Automated production planning optimizes schedules, allocates resources efficiently, and reduces production cycle times by 25-40%.",
    },
    {
      icon: AlertTriangle,
      title: "Quality Issues and Rework",
      description:
        "Quality defects discovered late in the process require expensive rework and delay deliveries.",
      solution:
        "Integrated quality management with real-time inspection workflows catches defects early, reducing rework costs by 50-70%.",
    },
    {
      icon: AlertTriangle,
      title: "Supply Chain Disruptions",
      description:
        "Lack of visibility into supplier performance and inventory levels causes supply chain disruptions.",
      solution:
        "End-to-end supply chain visibility with supplier integration enables proactive management and reduces disruptions by 60%.",
    },
  ];

  const roiExamples = [
    {
      metric: "25-40%",
      label: "Reduction in Production Cycle Time",
      description: "Optimized scheduling and resource allocation",
    },
    {
      metric: "20-30%",
      label: "Reduction in Inventory Carrying Costs",
      description: "AI-powered demand forecasting",
    },
    {
      metric: "50-70%",
      label: "Reduction in Rework Costs",
      description: "Early defect detection and quality management",
    },
    {
      metric: "60%",
      label: "Reduction in Supply Chain Disruptions",
      description: "Improved visibility and supplier integration",
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
                  Manufacturing Solutions
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Complete manufacturing ERP with production planning, shop
                  floor control, quality management, and supply chain
                  integration. Built for modern manufacturing with AI-powered
                  automation and real-time visibility.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {manufacturingFeatures.map((feature, index) => (
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
                Common Manufacturing Challenges and Solutions
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
                Proven Results for Manufacturing Companies
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
                Integration Scenarios for Manufacturing
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    IoT and Shop Floor Integration
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Connect IoT sensors and shop floor equipment to Raghunath Chava for
                    real-time production monitoring, machine health tracking,
                    and automated data collection.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Real-time production data from machines and sensors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Automated work order creation based on machine status
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Predictive maintenance scheduling</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Supplier and Logistics Integration
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Integrate with suppliers and logistics partners for seamless
                    supply chain coordination and end-to-end visibility.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Automated purchase order generation and transmission
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Real-time shipment tracking and delivery updates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Automated inventory updates from supplier systems
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Manufacturing Operations?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                See how Raghunath Chava's manufacturing modules can optimize your
                production, reduce costs, and improve quality. Schedule a demo
                tailored to your manufacturing needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/company/contact?type=demo&industry=manufacturing"
                  className="px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-teal transition-colors"
                >
                  Request Manufacturing Demo
                </Link>
                <Link
                  to="/product/modules"
                  className="px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:shadow-md transition-shadow"
                >
                  Explore Manufacturing Modules
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
