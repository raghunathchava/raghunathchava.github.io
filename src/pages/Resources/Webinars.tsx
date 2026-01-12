/**
 * https://raghunathchava.com
 * Resources Webinars Page
 */
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/seo/SEO";
import { getPageSEO } from "@/data/seo";
import {
  Calendar,
  Clock,
  Video,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const seo = getPageSEO("/resources/webinars");

interface Webinar {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  speaker: string;
  topics: string[];
  status: "upcoming" | "past";
  registrationUrl?: string;
  recordingUrl?: string;
}

const webinars: Webinar[] = [
  {
    id: "ai-in-erp",
    title: "AI Agents in ERP: The Future of Autonomous Business Operations",
    description:
      "Discover how AI agents are transforming ERP systems, enabling autonomous workflows, and reducing manual work. Learn about Raghunath Chava's AI-ready architecture and see real-world examples of AI-powered automation.",
    date: "February 15, 2026",
    time: "2:00 PM EST",
    duration: "45 minutes",
    speaker: "Raghunath Chava Product Team",
    topics: [
      "AI agent framework architecture",
      "Autonomous business process automation",
      "Real-world AI use cases in ERP",
      "Future roadmap for AI in enterprise software",
    ],
    status: "upcoming",
    registrationUrl: "https://subscribe.saraise.com/webinars/ai-in-erp",
  },
  {
    id: "self-hosted-deployment",
    title: "Self-Hosted ERP Deployment: Complete Guide to On-Premise Success",
    description:
      "Learn how to deploy Raghunath Chava on your own infrastructure. This comprehensive session covers Docker deployment, security best practices, scaling strategies, and maintaining your self-hosted instance.",
    date: "February 22, 2026",
    time: "11:00 AM EST",
    duration: "60 minutes",
    speaker: "Raghunath Chava Engineering Team",
    topics: [
      "Docker deployment walkthrough",
      "Infrastructure requirements and sizing",
      "Security hardening for self-hosted instances",
      "Backup and disaster recovery strategies",
      "Scaling and performance optimization",
    ],
    status: "upcoming",
    registrationUrl:
      "https://subscribe.saraise.com/webinars/self-hosted-deployment",
  },
  {
    id: "erp-security",
    title: "ERP Security Best Practices: Protecting Your Business Data",
    description:
      "Enterprise ERP systems handle sensitive business data. Learn essential security practices including multi-tenancy, access control, audit logging, and compliance frameworks. Includes real-world security scenarios.",
    date: "March 1, 2026",
    time: "3:00 PM EST",
    duration: "50 minutes",
    speaker: "Raghunath Chava Security Team",
    topics: [
      "Row-level multi-tenancy for data isolation",
      "Role-based access control (RBAC) implementation",
      "Separation of duties (SoD) controls",
      "Immutable audit logging",
      "Compliance frameworks (SOC 2, GDPR, HIPAA)",
    ],
    status: "upcoming",
    registrationUrl: "https://subscribe.saraise.com/webinars/erp-security",
  },
  {
    id: "roi-calculation",
    title: "Calculating ERP ROI: When Does Your Investment Pay Off?",
    description:
      "Learn how to calculate the true ROI of your ERP investment. This session covers direct cost savings, efficiency gains, and includes a practical ROI calculator. See real customer ROI examples.",
    date: "March 8, 2026",
    time: "1:00 PM EST",
    duration: "40 minutes",
    speaker: "Raghunath Chava Business Team",
    topics: [
      "Direct cost savings calculation",
      "Efficiency gains and productivity metrics",
      "ROI calculator walkthrough",
      "Real customer ROI case studies",
      "Payback period analysis",
    ],
    status: "upcoming",
    registrationUrl: "https://subscribe.saraise.com/webinars/roi-calculation",
  },
  {
    id: "open-source-erp",
    title: "Why Open Source ERP? Benefits and Business Case",
    description:
      "Explore the advantages of open-source ERP solutions. Learn about cost savings, flexibility, vendor independence, and how Raghunath Chava gives you complete freedom.",
    date: "January 20, 2026",
    time: "2:00 PM EST",
    duration: "45 minutes",
    speaker: "Raghunath Chava Team",
    topics: [
      "Cost savings and TCO comparison",
      "Vendor lock-in avoidance",
      "Customization and extension freedom",
      "Community-driven innovation",
    ],
    status: "past",
    recordingUrl: "https://youtube.com/watch?v=example",
  },
];

export function ResourcesWebinars() {
  const upcomingWebinars = webinars.filter((w) => w.status === "upcoming");
  const pastWebinars = webinars.filter((w) => w.status === "past");

  return (
    <>
      <SEO {...seo} />
      <Navigation />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Webinars & Events</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Learn from Raghunath Chava experts about AI-ready ERP, deployment
                strategies, security best practices, and business value. Join
                live sessions or watch recorded webinars on-demand.
              </p>
            </div>

            {/* Upcoming Webinars */}
            {upcomingWebinars.length > 0 && (
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Upcoming Webinars</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {upcomingWebinars.map((webinar) => (
                    <div
                      key={webinar.id}
                      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">
                            {webinar.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {webinar.description}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>
                            {webinar.time} • {webinar.duration}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Speaker:</strong>{" "}
                          {webinar.speaker}
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">
                          Topics Covered:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {webinar.topics.map((topic, idx) => (
                            <li key={idx}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                      {webinar.registrationUrl && (
                        <a
                          href={webinar.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-teal transition-colors"
                        >
                          Register Now
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Past Webinars */}
            {pastWebinars.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-8">Recorded Webinars</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {pastWebinars.map((webinar) => (
                    <div
                      key={webinar.id}
                      className="bg-card border border-border rounded-xl p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <h3 className="text-xl font-bold">
                              {webinar.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground text-sm mb-4">
                            {webinar.description}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{webinar.duration}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Speaker:</strong>{" "}
                          {webinar.speaker}
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">
                          Topics Covered:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {webinar.topics.map((topic, idx) => (
                            <li key={idx}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                      {webinar.recordingUrl && (
                        <a
                          href={webinar.recordingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-teal transition-colors"
                        >
                          <Video className="w-4 h-4" />
                          Watch Recording
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related Resources */}
            <section className="mt-16 pt-16 border-t border-border">
              <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  to="/resources/blog"
                  className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold mb-2">Blog Articles</h3>
                  <p className="text-sm text-muted-foreground">
                    Read in-depth articles on ERP topics
                  </p>
                </Link>
                <Link
                  to="/product/ai-ready"
                  className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold mb-2">AI-Ready Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn about Raghunath Chava's AI capabilities
                  </p>
                </Link>
                <Link
                  to="/enterprise/security"
                  className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold mb-2">Security & Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Enterprise-grade security features
                  </p>
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
