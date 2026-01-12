/**
 * https://raghunathchava.com
 * Enhanced Professional Services Solutions Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { Hero } from "@/components/Hero";
import { InfoCard } from "@/components/sections/InfoCard";
import { getPageSEO } from "@/data/seo";
import {
  Users,
  Clock,
  DollarSign,
  FolderKanban,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const seo = getPageSEO("/solutions/professional-services");

export function SolutionsProfessionalServices() {
  const heroConfig = {
    headline: "Professional Services Automation",
    subheadline:
      "Resource planning, time billing, and project management for consulting firms and service organizations",
    primaryCTA: {
      label: "Request Demo",
      href: "/company/contact?type=demo&industry=professional-services",
      variant: "primary" as const,
      trackingId: "cta_solutions_ps_demo",
      icpTarget: "coo" as const,
    },
    variant: "solution" as const,
  };

  const psFeatures = [
    {
      icon: Users,
      title: "Resource Planning",
      description:
        "Optimize resource allocation with skills-based matching and capacity planning.",
      cta: {
        label: "Learn More",
        href: "/product/modules#resource-planning",
      },
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description:
        "Accurate time tracking with project codes, billable hours, and approval workflows.",
      cta: {
        label: "View Features",
        href: "/product/features",
      },
    },
    {
      icon: DollarSign,
      title: "Time Billing",
      description:
        "Automated invoicing based on time entries with flexible billing rates and rules.",
      cta: {
        label: "Explore Billing",
        href: "/product/modules#billing",
      },
    },
    {
      icon: FolderKanban,
      title: "Project Management",
      description:
        "Complete project lifecycle management with milestones, tasks, and deliverables.",
      cta: {
        label: "See Projects",
        href: "/product/modules#project-management",
      },
    },
  ];

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Inefficient Resource Allocation",
      description:
        "Manual resource planning leads to overallocation, underutilization, and missed project deadlines due to poor capacity planning.",
      solution:
        "AI-powered resource planning with skills-based matching optimizes resource allocation. Real-time capacity visibility prevents overallocation and improves utilization by 25-35%.",
    },
    {
      icon: AlertTriangle,
      title: "Inaccurate Time Tracking and Billing",
      description:
        "Manual time entry is error-prone and time-consuming. Inaccurate time tracking leads to lost billable hours and revenue leakage.",
      solution:
        "Automated time tracking with project codes, billable/non-billable classification, and approval workflows. AI agents can automatically categorize time entries, reducing manual work by 60-70%.",
    },
    {
      icon: AlertTriangle,
      title: "Delayed Invoicing and Cash Flow Issues",
      description:
        "Manual invoice generation from time entries is slow, delaying revenue collection and impacting cash flow.",
      solution:
        "Automated invoicing based on time entries with flexible billing rates and rules. Invoices generated automatically, reducing billing cycle time by 50-60% and improving cash flow.",
    },
    {
      icon: AlertTriangle,
      title: "Poor Project Visibility and Control",
      description:
        "Lack of real-time project visibility makes it difficult to track progress, identify risks, and ensure profitability.",
      solution:
        "Comprehensive project management with real-time dashboards, milestone tracking, and profitability analysis. Project managers have complete visibility into project status, budget, and resource utilization.",
    },
  ];

  const roiExamples = [
    {
      metric: "25-35%",
      label: "Improvement in Resource Utilization",
      description: "Optimized resource allocation",
    },
    {
      metric: "60-70%",
      label: "Reduction in Time Entry Work",
      description: "Automated time tracking",
    },
    {
      metric: "50-60%",
      label: "Faster Billing Cycle",
      description: "Automated invoicing",
    },
    {
      metric: "20-30%",
      label: "Increase in Billable Hours",
      description: "Better time tracking and utilization",
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
                  Professional Services Solutions
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  PSA platform with resource planning, time tracking, billing,
                  and project management. Optimize resource utilization, improve
                  billing accuracy, and ensure project profitability.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {psFeatures.map((feature, index) => (
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
                Professional Services Challenges and Solutions
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
                Proven Results for Professional Services Organizations
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
                Professional Services Integration Scenarios
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Collaboration and Communication Tools
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Integrate with collaboration platforms for seamless project
                    communication and document management.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Integration with Slack, Microsoft Teams for project
                        updates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Document management with SharePoint, Google Drive
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Automated project status updates and notifications
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Accounting and Financial Systems
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with accounting systems for seamless financial
                    management and reporting.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Automated revenue recognition from time entries
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Project profitability analysis and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Integration with QuickBooks, Xero, and other accounting
                        systems
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Optimize Your Professional Services Operations?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                See how Raghunath Chava's professional services modules can improve
                resource utilization, billing accuracy, and project
                profitability. Schedule a demo tailored to your service
                organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/company/contact?type=demo&industry=professional-services"
                  className="px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-teal transition-colors"
                >
                  Request PSA Demo
                </Link>
                <Link
                  to="/product/modules"
                  className="px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:shadow-md transition-shadow"
                >
                  Explore PSA Modules
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
