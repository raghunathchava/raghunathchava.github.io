/**
 * https://raghunathchava.com
 * Enterprise Support Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { getPageSEO } from "@/data/seo";
import {
  Headphones,
  Clock,
  MessageSquare,
  Users,
  Book,
  Code,
  Rocket,
  Shield,
  CheckCircle,
  Zap,
} from "lucide-react";

const seo = getPageSEO("/enterprise/support");

export function EnterpriseSupport() {
  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
                Enterprise Support
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dedicated support teams, rapid response times, and comprehensive
                resources to ensure your success with Raghunath Chava.
              </p>
            </div>

            {/* Support Tiers */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Headphones className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Support Tiers</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-2">Basic</h3>
                  <p className="text-muted-foreground mb-6">
                    For small teams getting started
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Email support (business hours)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Community forum access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Documentation and knowledge base</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Response time: 1 business day</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border-2 border-deepBlue rounded-2xl p-8 relative">
                  <div className="absolute top-4 right-4 bg-deepBlue text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Professional</h3>
                  <p className="text-muted-foreground mb-6">
                    For growing businesses
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Email and chat support (extended hours)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Priority ticket routing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Phone support (business hours)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Response time: 4 hours (P1), 1 business day (P2-P4)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>99.9% uptime SLA</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-muted-foreground mb-6">
                    For mission-critical deployments
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>24/7 support via all channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Dedicated support engineer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>15-minute response time (P1 issues)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>99.99% uptime SLA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>On-site support available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Custom training and onboarding</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Response Times & SLAs */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Response Times & SLAs</h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-semibold">
                          Priority
                        </th>
                        <th className="text-left py-4 px-4 font-semibold">
                          Description
                        </th>
                        <th className="text-left py-4 px-4 font-semibold">
                          Response Time
                        </th>
                        <th className="text-left py-4 px-4 font-semibold">
                          Resolution Target
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border">
                        <td className="py-4 px-4">
                          <span className="font-semibold text-red-500">
                            P1 - Critical
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          System down, data loss, security breach
                        </td>
                        <td className="py-4 px-4">15 minutes</td>
                        <td className="py-4 px-4">4 hours</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4">
                          <span className="font-semibold text-orange-500">
                            P2 - High
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          Major feature broken, significant performance
                          degradation
                        </td>
                        <td className="py-4 px-4">1 hour</td>
                        <td className="py-4 px-4">1 business day</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4">
                          <span className="font-semibold text-yellow-500">
                            P3 - Medium
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          Minor feature issue, workaround available
                        </td>
                        <td className="py-4 px-4">4 hours</td>
                        <td className="py-4 px-4">3 business days</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4">
                          <span className="font-semibold text-blue-500">
                            P4 - Low
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          General questions, feature requests
                        </td>
                        <td className="py-4 px-4">1 business day</td>
                        <td className="py-4 px-4">Next release cycle</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-xl font-semibold mb-4">Uptime SLAs</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-deepBlue mb-2">
                        99.9%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Professional Tier
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        ~8.76 hours downtime/year
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-deepBlue mb-2">
                        99.99%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Enterprise Tier
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        ~52.56 minutes downtime/year
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-deepBlue mb-2">
                        99.999%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Enterprise Plus
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        ~5.26 minutes downtime/year
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Support Channels */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Support Channels</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Digital Channels
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">
                          Email Support
                        </div>
                        <div className="text-sm">
                          support@saraise.com - Tracked tickets with full
                          history
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">
                          Live Chat
                        </div>
                        <div className="text-sm">
                          Real-time assistance during business hours
                          (Enterprise: 24/7)
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">
                          Dedicated Slack Channel
                        </div>
                        <div className="text-sm">
                          Private channel for Enterprise customers with direct
                          access to support team
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">
                          Support Portal
                        </div>
                        <div className="text-sm">
                          Self-service portal with ticket management and
                          knowledge base
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Direct Channels
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">
                          Phone Support
                        </div>
                        <div className="text-sm">
                          Toll-free number for Professional and Enterprise tiers
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">
                          Video Conferencing
                        </div>
                        <div className="text-sm">
                          Screen sharing and remote assistance for complex
                          issues
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">
                          On-Site Support
                        </div>
                        <div className="text-sm">
                          Available for Enterprise customers (additional cost)
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">
                          Emergency Hotline
                        </div>
                        <div className="text-sm">
                          24/7 critical issue hotline for Enterprise tier
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Support Coverage */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Support Coverage</h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Availability</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>24/7 Support:</strong> Enterprise tier with
                          round-the-clock coverage
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Extended Hours:</strong> Professional tier (8
                          AM - 8 PM, Monday-Friday)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Business Hours:</strong> Basic tier (9 AM - 5
                          PM, Monday-Friday)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Holiday Coverage:</strong> Enterprise tier
                          maintains 24/7 support
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Language & Timezone
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Languages:</strong> English (primary), with
                          translation support for major languages
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Timezone Coverage:</strong> Support teams in
                          Americas, EMEA, and APAC regions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Follow-the-Sun Model:</strong> Enterprise tier
                          ensures continuous coverage
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Dedicated Resources */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Dedicated Resources</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-lg bg-deepBlue/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-deepBlue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Account Manager
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Your primary point of contact for account management,
                    billing, and strategic planning. Available for Professional
                    and Enterprise tiers.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-lg bg-deepBlue/10 flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-deepBlue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Technical Account Manager
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Senior technical expert dedicated to your account. Provides
                    architecture guidance, optimization recommendations, and
                    technical strategy. Enterprise tier only.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-lg bg-deepBlue/10 flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-deepBlue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Customer Success Manager
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Ensures you achieve maximum value from Raghunath Chava. Provides
                    best practices, adoption strategies, and ROI optimization.
                    Enterprise tier only.
                  </p>
                </div>
              </div>
            </section>

            {/* Proactive Support */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Proactive Support</h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Health Checks
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Quarterly system health assessments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Performance optimization reviews</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Security posture assessments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Capacity planning and scaling recommendations
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Performance Monitoring
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Real-time performance dashboards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Automated alerting for anomalies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Proactive issue detection and resolution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Custom monitoring and reporting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Training & Onboarding */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Book className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Training & Onboarding</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Custom Training Programs
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Role-based training for end users, administrators, and
                        developers
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>On-site or virtual training sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Train-the-trainer programs for internal teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Custom curriculum based on your use cases</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Documentation & Resources
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Comprehensive API documentation with examples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Video tutorials and step-by-step guides</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Best practices and implementation playbooks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Knowledge base with searchable articles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Professional Services */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Professional Services</h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Implementation Assistance
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Deployment planning and architecture review</li>
                      <li>• Data migration support</li>
                      <li>• Integration design and implementation</li>
                      <li>• Go-live support and cutover planning</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Custom Development
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Custom module development</li>
                      <li>• Workflow automation design</li>
                      <li>• API integration development</li>
                      <li>• UI/UX customization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Migration Support
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Legacy system migration planning</li>
                      <li>• Data mapping and transformation</li>
                      <li>• Parallel run support</li>
                      <li>• Post-migration optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Community Access */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Community Access</h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Private Community Forum
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Exclusive access for Enterprise customers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Direct access to product team and engineers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Peer networking and best practice sharing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Feature request prioritization</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Early Access & Beta Programs
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Early access to new features and modules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Beta testing opportunities with direct feedback
                          channels
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Quarterly roadmap previews and planning sessions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Influence product direction through advisory board
                          participation
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Escalation Process */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-deepBlue" />
                <h2 className="text-3xl font-bold">Escalation Process</h2>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Clear Escalation Paths
                    </h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-deepBlue text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                          1
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            Level 1: Support Engineer
                          </div>
                          <div className="text-sm">
                            Initial triage and standard issue resolution
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-deepBlue text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                          2
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            Level 2: Senior Support Engineer
                          </div>
                          <div className="text-sm">
                            Complex technical issues requiring advanced
                            expertise
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-deepBlue text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                          3
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            Level 3: Engineering Team
                          </div>
                          <div className="text-sm">
                            Product bugs, architectural issues, and feature
                            requests
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-deepBlue text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                          4
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            Level 4: Executive Sponsorship
                          </div>
                          <div className="text-sm">
                            Critical business impact issues with C-level
                            involvement
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-xl font-semibold mb-4">
                      Automatic Escalation Triggers
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Response time SLA breach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Resolution time approaching SLA limit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Customer-requested escalation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Critical severity issues (P1)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-r from-deepBlue/10 to-teal/10 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">
                Get the Support Your Enterprise Needs
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our sales team to discuss support options tailored to
                your organization's requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/company/contact"
                  className="px-8 py-3 bg-gradient-to-r from-deepBlue to-teal text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Contact Sales
                </a>
                <a
                  href="/pricing"
                  className="px-8 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-all"
                >
                  View Pricing
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
